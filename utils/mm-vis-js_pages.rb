#!/usr/bin/ruby
require 'json'
require 'htmlentities'
require 'uri'
require 'cgi'
require 'tilt/erb'
require 'fileutils'
require 'trollop'
require 'yaml'

#Code for building vis.js code scheme in mm-vis-js

currentProjects = [
	"linux-core",
	"gcc",
	"mm-vis-js",
	"emacs",
	"vim",
	"vis-netwokr",
	"chromium",
	"git"
]

opts = Trollop::options do
    opt :project, "Source code project name", :short => 'p', :type => String
    opt :list, "List projects", :short => 'l'
end

if opts.include?(:list) && !opts[:list].nil? && opts[:list]
	currentProjects.each{|project|
		p project
	}
end

class SourcesData
	attr_accessor :sourcesProjectName, 
		:sourcesDirPath, 
		:dataDirPath,
		:excludeFilesRegexList,
		:sourceFilesRegexList,
		:codeFilesParserDividerRegexList,
		:fileDataFilterProcsList,
		:excludeFromParsingFilesRegexList
	def initialize()
		@fileDataFilterProcsList = []
	end
end

class VisJsNode
	attr_accessor :id,
		:idStep,
		:label,
		:link,
		:x,
		:y,
		:fontSize,
		:backgroundColor,
		:fontAlign,
		:shape
	def initialize(id, idStep, label, link, x, y, fontSize, backgroundColor)
		@id = id + idStep
		@idStep = idStep
		@label = label
		@link = link
		@x = x
		@y = y
		@fontSize = fontSize
		@backgroundColor = backgroundColor
		@shape = "box"
		@fontAlign = "left"
	end
	def getVisJsObject()
		node = {}
		node["id"] = @id
		node["label"] = @label
		node["link"] = @link
		node["x"] = @x
		node["y"] = @y
		node["shape"] = @shape
		font = {}
		font["align"] = @fontAlign
		font["size"] = @fontSize
		node["font"] = font
		if !@backgroundColor.nil? && @backgroundColor != ""
			color = {}
			color["background"] = @backgroundColor
			node["color"] = color
		end
		node
	end
	def getJson()
		#id = idStep + id
		a = {}
		node = getVisJsObject() 
		a[id.to_s] = node
		line = a.to_json
		line = line[1..-1]
		line = line[0...-1]
		line
	end
end

class VisJsEdge
	attr_accessor :id,
		:from,
		:to
	def initialize()
	end
end

class SourceCodeFile
	attr_accessor :fileName,
		:filePath,
		:codeLinesCount,
		:codeLines,
		:fileNameEnding,
		:codeLinesPartsList,
		:codePartsDelimiter,
		:codeFilesParserDividerRegexList,
		:excludeFromParsingFilesRegexList,
		:fileDataFilterProcsList,
		:fileIndex
	def initialize()
		@codePartsDelimiter = "X@X#X$X^X"
	end
	def parseCode()
		if @excludeFromParsingFilesRegexList.map{|regex| @fileName =~ Regexp.new(regex)}.none?
			@fileDataFilterProcsList.each{|proc|
				#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 1: " + @filePath
				proc.call(self)
			}
		end
		@codeLinesPartsList = @codeLines.inject([[]]){|sum, item|
			begin
				#@codePartsDelimiter - delimiter we added with proc filter if we use complex multiline regex patterns
				if @excludeFromParsingFilesRegexList.map{|regex| @fileName =~ Regexp.new(regex)}.none? &&
					(@codeFilesParserDividerRegexList.map{|regex| item =~ Regexp.new(regex)}.any? || 
					item.include?(@codePartsDelimiter))
					#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 2: " + @filePath
					sum << [] 
				end
				item = item.gsub(@codePartsDelimiter,"")
			rescue ArgumentError 
				item = "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
			end
			#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 3: " + @filePath
			sum.last << item
			sum	
		}
		self
	end
end

class MMVisJsPage
	attr_accessor :pageDirPath,
		:pagePrefixName,
		:pageTitle,

		:pageIndexFilePostfixName,
		:pageDataJsFilePostfixName,

		:pageIndexFileErbTemplateFileName,
		:pageDataJsFileErbTemplateFileName,

		:applicationJsSourceFileRelativePath,

		:pageIndexFileName,
		:pageIndexFilePath,

		:pageDataJSFileName,
		:pageDataJsFilePath,
		:scale,
		:viewPositionX,
		:viewPositionY,
		:pageNodesHash,
		:pageEdgesHash,
		:nodesPositionX,
		:nodesPositionY
	def initialize(pageDirPath, pagePrefixName)
		@pageDirPath = pageDirPath
		@pagePrefixName = pagePrefixName
		@pageIndexFilePostfixName = ".index.html"
		@pageDataJsFilePostfixName = ".data.js"
		@pageIndexFileName = @pagePrefixName + @pageIndexFilePostfixName
		@pageIndexFilePath = @pageDirPath + @pagePrefixName + @pageIndexFilePostfixName
		@pageDataJsFileName = @pagePrefixName + @pageDataJsFilePostfixName
		@pageDataJsFilePath = @pageDirPath + @pagePrefixName + @pageDataJsFilePostfixName
		@pageIndexFileErbTemplateFileName = "index.html.erb"
		@pageDataJsFileErbTemplateFileName = "index.data.js.erb"
		@applicationJsSourceFileRelativePath = "../../application.js"
		@scale = 1
		@viewPositionX = -40
		@viewPositionY = 109
		@nodesPositionX = nil
		@nodesPositionY = nil
	end
	def checkPageExists()
		File.exists?(@pageIndexFilePath)
	end
	def buildPageFiles(templatesDirPath) 
		indexPageTemplate = Tilt::ERBTemplate.new(templatesDirPath + @pageIndexFileErbTemplateFileName)
		indexPageTemplateOutput = indexPageTemplate.render(self, 
			   :pageTitle => @pagePrefixName + " - code scheme", 
			   :pageDataJsFileName => @pageDataJsFileName)
		f = File.open(@pageIndexFilePath, "w")
		f.write(indexPageTemplateOutput)
		f.close

		FileUtils.cp(templatesDirPath + @applicationJsSourceFileRelativePath, @pageDirPath + "application.js")

		indexDataJsPageTemplate = Tilt::ERBTemplate.new(templatesDirPath + @pageDataJsFileErbTemplateFileName)
		indexDataJsPageTemplateOutput = indexDataJsPageTemplate.render(self)
		f = File.open(@pageDataJsFilePath, "w")
		f.write(indexDataJsPageTemplateOutput)
		f.close

		#setup view
		indexData = getDataJsObject()
		indexData["setup"]["scale"] = @scale
		indexData["setup"]["viewPosition"]["x"] = @viewPositionX
		indexData["setup"]["viewPosition"]["y"] = @viewPositionY
		#p indexData
		saveDataJsObject(indexData)
	end
	def getDataJsObject()
		indexDataJson = File.read(@pageDataJsFilePath).sub(/^.*?{/m,"{").reverse.sub(/.*?;.*?}/m,"}").reverse
		JSON.parse(indexDataJson)
	end
	def saveDataJsObject(dataObject)
		f = File.open(@pageDataJsFilePath, "w")
		f.write("var schemeData = \n" + JSON.dump(dataObject) + "\n;")
		f.close
	end
	def addNodesToNodesListOnPage(node, shiftY)
		indexNodesData = getDataJsObject()
		nodesList = indexNodesData["canvas1Data"]["nodes"]["_data"]
		nodePositionY = shiftY*nodesList.size
		node.id = nodesList.size + node.idStep
		node.y = nodePositionY
		nodeObject = node.getVisJsObject()
		nodesList[nodeObject["id"]] = nodeObject
		saveDataJsObject(indexNodesData)
	end
	def addNodesToPage(nodesList)
		indexNodesData = getDataJsObject()
		nodesList.each{|node|
			nodeObject = node.getVisJsObject()
			indexNodesData["canvas1Data"]["nodes"]["_data"][nodeObject["id"]] = nodeObject
		}
		saveDataJsObject(indexNodesData)
	end
end

class SourcesBuilder
	attr_accessor :sourcesData, 
		:codeStringsCount,
		:jsonIndexShift,
		:startX,
		:startY,
		:shiftX,
		:shiftY,
		:indentationY1,
		:indentationY2,
		:indentationY3,
		:nodeLinesHeight,
		:nodesColumnHeight,
		:sourceFilesByPageCount,
		:projectDirectory,
		:rootProjectExamplesDirPath,
		:projectExampleDirPath,
		:templatesDirPath,
		:projectVetsionTimeDirPath,
		:filesToPageLimit,
		:limitFilesToRead,
		:codeNodesIndex
	def initialize()
		@codeStringsCount = 0
		@codeNodesIndex = 0
		@jsonIndexShift = 100000
		@startX = 0
		@startY = 0
		@shiftX = 17000
		@shiftY = 40
		@indentationY1 = 1100
		@indentationY2 = 1100
		@indentationY3 = 1000
		@nodeLinesHeight = 28
		@nodesColumnHeight = 100000
		@sourceFilesByPageCount = 100
		@projectDirectory = nil
		@rootProjectExamplesDirPath = nil 
		@projectExampleDirPath = nil 
		@templatesDirPath = "templates/"
		@filesToPageLimit = 100
		@limitFilesToRead = 1000000
	end
	#get js files list from vis-network directory
	def findAndSelectCodeFilesForVisNetwork(visNetworkDirPath, sourceFilesRegexList, excludeFilesRegexList)
		files = Dir.glob(visNetworkDirPath+'**/*').select{|e| File.file? e}
		selectedFiles = []
		sourceFilesRegexList.each{|regex|
			selectedFiles += files.select{|f| f =~ Regexp.new(regex) }
		}
		#exclude files
		excludeFilesRegexList.each{|filesRegex|
			selectedFiles = selectedFiles.select{|f| Regexp.new(filesRegex) !~ f }
		}
		selectedFiles.sort!
		selectedCodeFilesHash = selectedFiles.map.with_index{|f, index|
			file = SourceCodeFile.new
			file.filePath = f
			file.fileName = f.split("/").last
			file.fileIndex = index
			[f, file]
		}.to_h
		p "selectedCodeFiles.size: " + selectedCodeFilesHash.size.to_s
		selectedCodeFilesHash = selectedCodeFilesHash.take(@limitFilesToRead)
		selectedCodeFilesHash
	end
	#wip utility code for working with data cached on disk
	def parseCodeFilesContentAndSaveEachFileDataToTmpFile(codeFilesHash, codeFilesParserDividerRegexList, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		codeFilesHash.select{|key, codeFile| codeFile.fileIndex > 13300 }.map.with_index{|(key, codeFile), index|
			p "index: " + index.to_s + ". allFilesCount: " + codeFilesHash.size.to_s + ". codeFile.fileIndex: " + codeFile.fileIndex.to_s + ". filePath: " + key
			codeFile.codeFilesParserDividerRegexList = codeFilesParserDividerRegexList
			codeFile.fileDataFilterProcsList = fileDataFilterProcsList
			codeFile.excludeFromParsingFilesRegexList = excludeFromParsingFilesRegexList
			codeFile.parseCode()
			f = File.open("/home/mike/progr/repo/mm-vis-js/utils/data/" + codeFile.fileIndex.to_s + ".yaml", "w")
			yamlLine = YAML.dump([key, codeFile])
			f.write(yamlLine)
			f.close
			p "codeFile.codeLinesPartsList.size: " + codeFile.codeLinesPartsList.size.to_s
		}
	end
	def parseCodeFilesContent(codeFilesHash, codeFilesParserDividerRegexList, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		#codeFilesHash.select{|key, value| value.fileIndex > 5000}.map.with_index{|(key, codeFile), index|
		codeFilesHash.map.with_index{|(key, codeFile), index|
			p "index: " + index.to_s + ". allFilesCount: " + codeFilesHash.size.to_s + ". filePath: " + key
			codeFile.codeFilesParserDividerRegexList = codeFilesParserDividerRegexList
			codeFile.fileDataFilterProcsList = fileDataFilterProcsList
			codeFile.excludeFromParsingFilesRegexList = excludeFromParsingFilesRegexList
			codeFile.parseCode()
			p "codeFile.codeLinesPartsList.size: " + codeFile.codeLinesPartsList.size.to_s
			[key, codeFile]
		}.to_h
	end
	def loadCodeFilesAndParseContent(codeFilesHash, codeFilesParserDividerRegexList, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		codeFilesHash = codeFilesHash.map{ |key, codeFile|
			codeFile.codeLines = File.readlines(key)
			[key, codeFile]
		}.to_h
		p "code files read done"
		parseCodeFilesContent(codeFilesHash, codeFilesParserDividerRegexList, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		#parseCodeFilesContentAndSaveEachFileDataToTmpFile(codeFilesHash, codeFilesParserDividerRegexList, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
	end
	#wip utility code for working with data cached on disk
	def buildNodesAndCalculateTheirPropertiesForCodeFilesFromCachedData()
		dir = "/home/mike/progr/repo/mm-vis-js/utils/data/"
		filesList = Dir.glob(dir + "**/*").select{|e| File.file? e}
		filesList.each_with_index{|file,index1|
			filePath = dir + index1.to_s + ".yaml"
			file = File.read(filePath)
			data = JSON.parse(file)
			key = data[0]
			value = data[1]
			#buildNodesHashForFile(key, value, filesJsonLinesHash, x, y, shiftY, jsonIndex, index1)
		}
	end
	def buildPagesWithCodeFilesHash(codeFilesHash, sourcesProjectName)
		a = codeFilesHash.
			to_a.
			each_slice(@filesToPageLimit).
			to_a
		pagesWithCodeFilesHash = a.map.with_index{|item, index|
				codeFilesHash = item.to_h
				prefix = a.size > 1 ?  sourcesProjectName + "_" + index.to_s : sourcesProjectName
				page = MMVisJsPage.new(@projectExampleDirPath, prefix)
				[page, codeFilesHash]
			}.to_h
		pagesWithCodeFilesHash
	end
	def buildPagesCodeNodes(pagesWithCodeFilesHash)
		pagesWithCodeFilesHash.map{|key_Page, value_codeFilesHash|
			nodesHash = buildNodesAndCalculateTheirPropertiesForCodeFiles(key_Page, value_codeFilesHash)
			key_Page.pageNodesHash = nodesHash.values.flatten.map{|node| [node.id, node]}.to_h
			key_Page
		}
	end
	def buildNodesAndCalculateTheirPropertiesForCodeFiles(page, codeFilesHash)
		nodesHash = Hash.new
		page.nodesPositionX = @startX
		page.nodesPositionY = @startY
		codeFilesHash.each_with_index{|(key_f, value_CodeFile),index1|
			buildNodesHashForFile(key_f, value_CodeFile, nodesHash, index1, page)
		}
		nodesHash
	end
	def buildNodesHashForFile(key_f, value_CodeFile, nodesHash, index1, page)
			nodesHash[key_f] = []
			page.nodesPositionY += @indentationY1
			nodesHash[key_f] << VisJsNode.new(@codeNodesIndex, @jsonIndexShift, key_f, "", page.nodesPositionX, page.nodesPositionY, 200, "red")
			@codeNodesIndex += 1
			page.nodesPositionY += @indentationY2
			nodesHash[key_f] << VisJsNode.new(@codeNodesIndex, @jsonIndexShift, key_f.split("/").last, "", page.nodesPositionX, page.nodesPositionY, 1300, "red")
			page.nodesPositionY += @indentationY3
			@codeNodesIndex += 1
			value_CodeFile.codeLinesPartsList.each_with_index{|codeLinesPart,index2|
				@codeStringsCount += codeLinesPart.size
				nodeHeight = @nodeLinesHeight*codeLinesPart.size
				page.nodesPositionY += @shiftY
				line = codeLinesPart.join("\n")
				nodesHash[key_f] << VisJsNode.new(@codeNodesIndex, @jsonIndexShift, line, "", page.nodesPositionX, page.nodesPositionY + nodeHeight/2, 14, "")
				page.nodesPositionY += nodeHeight
				@codeNodesIndex += 1
			}
			p "index1: " + index1.to_s + ". codeNodesIndex: " + @codeNodesIndex.to_s + ". codeStringsCount: " + @codeStringsCount.to_s if (index1 % 10) == 0
			if page.nodesPositionY >= @nodesColumnHeight
				page.nodesPositionX += @shiftX
				page.nodesPositionY = @startY
			end
	end
	def composeJson(filesJsonNodesHash) 
		jsonNodesLines = filesJsonNodesHash.reduce([]){|sum, (key, value)|
			value.each{|v| sum << v.getJson()}
			sum
		}
		jsonLines = "var code_data1 = {" +  jsonNodesLines.join(",\n") + "};"
		jsonLines
	end
	def stats(codeFilesHash, parsedCodeFilesHash, codeNodesPagesList)
		codeFilesHash.each_with_index{|(key,value), index|
			p "index: " + index.to_s + 
				". filePath: " + key.to_s + 
				". value.codeLinesPartsList.size: " + value.codeLinesPartsList.size.to_s + 
				". value.codeLines.size: " + value.codeLines.size.to_s
		}
		p "All files: " + codeFilesHash.size.to_s
		p "All nodes: " + codeNodesPagesList.reduce(0){|sum, page|
			sum += page.pageNodesHash.size
			sum
		}.to_s
		p "All code lines: " + parsedCodeFilesHash.reduce(0){|sum, (key, value_codeFile)|
			sum += value_codeFile.codeLines.size
			sum
		}.to_s
	end
	def buildProjectDirectory(dataDirPath, sourcesProjectName)
		@rootProjectExamplesDirPath = dataDirPath + sourcesProjectName + "/"
		Dir.mkdir(@rootProjectExamplesDirPath) if !Dir.exists?(@rootProjectExamplesDirPath)
		@projectVersionTimeDirPath = sourcesProjectName + "_" + Time.new.strftime("%Y-%m-%d_%H-%M-%S") + "/"
		@projectExampleDirPath = dataDirPath + sourcesProjectName + "/" + @projectVersionTimeDirPath
		Dir.mkdir(@projectExampleDirPath)
	end
	def buildCodeSchemeFiles(sourcesProjectName, codeNodesPagesList)
		if codeNodesPagesList.size > 1 

			currentVersionIndexPage = MMVisJsPage.new(@projectExampleDirPath, sourcesProjectName)
			currentVersionIndexPage.buildPageFiles(@templatesDirPath)

			codeNodesPagesList.each_with_index{|codeIndexPage, indexByPage|
				codeIndexPage.scale = 0.15
				codeIndexPage.viewPositionX = 500
				codeIndexPage.viewPositionY = 700
				codeIndexPage.buildPageFiles(@templatesDirPath)
				codeIndexPage.addNodesToPage(codeIndexPage.pageNodesHash.values)
				currentVersionProjectIndexFilePath = sourcesProjectName + "_" + indexByPage.to_s + ".index.html"
				currentVersionProjectIndexVerboseRelativeFilePath = @projectExampleDirPath + sourcesProjectName + "_" + indexByPage.to_s + ".index.html"
				node = VisJsNode.new(0, 
						     Time.now.to_i, 
						     currentVersionProjectIndexVerboseRelativeFilePath, 
						     currentVersionProjectIndexFilePath, 
						     0, nil, 15, "")
				currentVersionIndexPage.addNodesToNodesListOnPage(node, 30)
			}
				
		else
			codeIndexPage = codeNodesPagesList[0]
			codeIndexPage.scale = 0.15
			codeIndexPage.viewPositionX = 500 
			codeIndexPage.viewPositionY = 700
			codeIndexPage.buildPageFiles(@templatesDirPath)
			codeIndexPage.addNodesToPage(codeIndexPage.pageNodesHash.values)
		end
	end
	def buildIndexSchemeFiles(dataDirPath, sourcesProjectName)
		page = MMVisJsPage.new(@rootProjectExamplesDirPath, sourcesProjectName)
		if !page.checkPageExists()
			#Build project versions list scheme
			page.buildPageFiles(@templatesDirPath)
		end
		currentVersionProjectIndexFilePath = @projectVersionTimeDirPath + sourcesProjectName + ".index.html"
		currentVersionProjectIndexVerboseRelativeFilePath = @projectExampleDirPath + sourcesProjectName + ".index.html"
		#add new node with project version
		node = VisJsNode.new(0, 
				     Time.now.to_i, 
				     currentVersionProjectIndexVerboseRelativeFilePath, 
				     currentVersionProjectIndexFilePath, 
				     0, nil, 15, "") 
		page.addNodesToNodesListOnPage(node, 30)
	end
end

sourcesBuilder = SourcesBuilder.new()
sourcesData = nil

if opts[:project] == "linux-core"
	#git clone https://github.com/torvalds/linux.git
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "linux-core"
	sourcesData.sourcesDirPath = "../../../soft/linux/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = fileText.gsub(Regexp.new(regex, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			rescue ArgumentError 
				fileText = "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
			end
			#fileText = fileText.gsub(Regexp.new(codeFile.codeFilesParserDividerRegexList, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			codeFile.codeLines = fileText.split("\n")
			codeFile
		}
	]
	sourcesBuilder.nodeLinesHeight = 14 
	sourcesBuilder.filesToPageLimit = 1000
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "gcc"
	#git clone https://github.com/gcc-mirror/gcc.git
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "gcc"
	sourcesData.sourcesDirPath = "../../../soft/gcc/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		]
	sourcesData.excludeFilesRegexList = [
		".*bid_binarydecimal.c$"
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = fileText.gsub(Regexp.new(regex, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			rescue ArgumentError 
				fileText = "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
			end
			#fileText = fileText.gsub(Regexp.new(codeFile.codeFilesParserDividerRegexList, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			codeFile.codeLines = fileText.split("\n")
			codeFile
		}
	]
	sourcesBuilder.nodeLinesHeight = 20 
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 500
elsif opts[:project] == "mm-vis-js"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "mm-vis-js"
	sourcesData.sourcesDirPath = "../../mm-vis-js/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.js$",
		".*\\.rb$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		"(function\\s\\w)",
		"(function\()",
		"(function\\s\\()",
		"(def\\s\\w)",
		"(class\\s\\w)"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.fileDataFilterProcsList = [
	]
	sourcesBuilder.nodeLinesHeight = 28 
	sourcesBuilder.filesToPageLimit = 1000
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "emacs"
	#git clone https://github.com/emacs-mirror/emacs.git
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "emacs"
	sourcesData.sourcesDirPath = "../../../soft/emacs/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.el$",
		".*\\.py$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		"(def\\s\\w)",
		"(defvar\\s\\w)",
		"(defcustom\\s\\w)",
		"(defun\\s\\w)"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = fileText.gsub(Regexp.new(regex, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			rescue ArgumentError 
				fileText = "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
			end
			codeFile.codeLines = fileText.split("\n")
			codeFile
		}
	]
	sourcesBuilder.nodeLinesHeight = 14 
	sourcesBuilder.filesToPageLimit = 1000
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "vim"
	#git clone https://github.com/vim/vim
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "vim"
	sourcesData.sourcesDirPath = "../../../soft/vim/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			fileText = fileText.gsub(Regexp.new(regex, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			codeFile.codeLines = fileText.split("\n")
			codeFile
		}
	]
	sourcesBuilder.nodeLinesHeight = 14 
	sourcesBuilder.filesToPageLimit = 1000
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "vis-network"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "vis-network"
	sourcesData.sourcesDirPath = "../../../soft/vis-network/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.js$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		".*\\/\\*\\*.?$"
		]
	sourcesData.excludeFilesRegexList = [
		".*largeHierarchicalDataset.js$",
		".*vis-network.min.js$",
		".*vis-network.esm.min.js$",
		".*vis-network.esm.js$",
		".*WorldCup2014.js$"
		]
	sourcesBuilder.nodeLinesHeight = 30 
	sourcesBuilder.filesToPageLimit = 100
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "chromium"
	#git clone https://github.com/chromium/chromium
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "chromium"
	sourcesData.sourcesDirPath = "../../../soft/chromium/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.cc$",
		".*\\.h$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		"^\\w+.*\\s*([\\w:]+)\\s*\\(.*\\)\\s*\\n*{$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = []
	sourcesBuilder.nodeLinesHeight = 30 
	sourcesBuilder.filesToPageLimit = 100
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "git"
	#git clone https://github.com/git/git
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "git"
	sourcesData.sourcesDirPath = "../../../soft/git/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.codeFilesParserDividerRegexList = [
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			fileText = fileText.gsub(Regexp.new(regex, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			#fileText = fileText.gsub(Regexp.new(codeFile.codeFilesParserDividerRegexList, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
			codeFile.codeLines = fileText.split("\n")
			codeFile
		}
	]
	sourcesBuilder.nodeLinesHeight = 14
	sourcesBuilder.filesToPageLimit = 1000
	sourcesBuilder.limitFilesToRead = 10000000
end

exit if opts[:project].nil?

codeFilesHash = sourcesBuilder.findAndSelectCodeFilesForVisNetwork(
	sourcesData.sourcesDirPath, 
	sourcesData.sourceFilesRegexList, 
	sourcesData.excludeFilesRegexList)
p "codeFilesHash.size: " + codeFilesHash.size.to_s

parsedCodeFilesHash = sourcesBuilder.loadCodeFilesAndParseContent(
	codeFilesHash, 
	sourcesData.codeFilesParserDividerRegexList, 
	sourcesData.fileDataFilterProcsList, 
	sourcesData.excludeFromParsingFilesRegexList)
p "parsedCodeFilesHash.size: " + parsedCodeFilesHash.size.to_s

sourcesBuilder.buildProjectDirectory(sourcesData.dataDirPath, sourcesData.sourcesProjectName)

pagesWithCodeFilesHash = sourcesBuilder.buildPagesWithCodeFilesHash(parsedCodeFilesHash, sourcesData.sourcesProjectName)

codeNodesPagesList = sourcesBuilder.buildPagesCodeNodes(pagesWithCodeFilesHash)

sourcesBuilder.buildIndexSchemeFiles(sourcesData.dataDirPath, sourcesData.sourcesProjectName)

sourcesBuilder.buildCodeSchemeFiles(sourcesData.sourcesProjectName, codeNodesPagesList)

sourcesBuilder.stats(codeFilesHash, parsedCodeFilesHash, codeNodesPagesList)
