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
	"chromium",
	"firefox",
	"linux-core",
	"gcc",
	"mm-vis-js",
	"emacs",
	"vim",
	"vis-network",
	"sbcl",
	"ghc",
	"git",
	"julia",
	"bash",
	"ruby",
	"apache_httpd",
	"texlive-source",
	"mysql-server",
	"cpython",
	"jdk",
	"vscode",
	"hbase",
	"spark",
	"neo4j",
	"spring-framework",
	"tomcat"
]
#2019.10.30
#chromium
#firefox
#linux-core
#gcc
#mm-vis-js
#emacs
#vim
#vis-network
#sbcl
#ghc
#git
#julia
#bash
#ruby
#apache_httpd
#texlive-source
#mysql-server
#cpython
#jdk
#vscode
#hbase
#spark
#neo4j
#spring-framework
#tomcat
opts = Trollop::options do
    opt :project, "Source code project name", :short => 'p', :type => String
    opt :list, "List projects", :short => 'l'
end

if opts.include?(:list) && !opts[:list].nil? && opts[:list]
	currentProjects.each{|project|
		p project
	}
end
class CSharpParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.ts"
		]
		@checkSeparationLineRegexList = [
			".*class\\s\\w"
		]
		@textSeparateRegexLinesList = [
			["(([a-zA-z0-9\\*_]+)(\\s?)(\\({1})(.*?[0-9a-z\\*_\\,\\s\\.:|<>\\[\\]]+)(\\){1}):(\\n|\\r|\\s)*([a-zA-z0-9\\*_\\.\\[\\]+)(\\n|\\r|\\s)*(\\{{1}))", "multiline"]
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class JavaParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.java"
		]
		@checkSeparationLineRegexList = [
			".*class\\s\\w"
		]
		@textSeparateRegexLinesList = [
			["((?:(?:public|private|protected|static|final|native|synchronized|abstract|transient)+\\s+)+[$_\\w<>\\[\\]\\s]*\\s+[\\$_\\w]+\\([^\\)]*\\)?\\s*\\{?)", "multiline"]
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class JuliaParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.jl"
		]
		@checkSeparationLineRegexList = [
			"(function\\s\\w)"
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class CCParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.cc",
			".*\\.cpp"
		]
		@checkSeparationLineRegexList = [
		]
		@textSeparateRegexLinesList = [
			["(^\\w+.*\\s*([\\w:]+)\\s*\\(.*\\)\\s*\\n*{$)", "multiline"]
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class ELispParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.el"
		]
		@checkSeparationLineRegexList = [
			"(defvar\\s\\w)",
			"(defcustom\\s\\w)",
			"(defun\\s\\w)"
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class RubyParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.rb"
		]
		@checkSeparationLineRegexList = [
			"(def\\s\\w)",
			"(class\\s\\w)"
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class JavaScriptParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.js"
		]
		@checkSeparationLineRegexList = [
			"(function\\s\\w)",
			"(function\\()",
			"(function\\s\\()"
		]
		#TODO. Add separation regex to separate by start of comments for function
		#".*\\/\\*\\*.?$"
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class HaskellParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.hs"
		]
		@checkSeparationLineRegexList = [
			"(.*?::.*?->.*)"
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class PythonParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.py"
		]
		@checkSeparationLineRegexList = [
			"(def\\s\\w)",
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class CParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.c"
		]
		@checkSeparationLineRegexList = [
		]

		#["(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))", "multiline"]
		@textSeparateRegexLinesList = [
			["(([a-zA-z\\*]+)(\\s)([a-zA-Z\\*_]+[a-zA-z0-9\\*_]+)(\\s?)(\\({1})(.*?[0-9a-z\\*_\\,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))", "multiline"]
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class CommonLispParser
	attr_accessor :conf,
		:fileNameCheckRegex,
		:textSeparateRegexLinesList
	def initialize()
		@fileNameCheckRegexList = [
			".*\\.lisp"
		]
		@checkSeparationLineRegexList = [
			"(defmacro\\s\\w)",
			"(defun\\s\\w)"
		]
		@textSeparateRegexLinesList = [
		]
	end
	def checkTypeByFileName(fileName)
		@fileNameCheckRegexList.map{|regex|
			fileName =~ Regexp.new(regex)
		}.any?
	end	
	def checkSeparationLine(line)
		@checkSeparationLineRegexList.map{|regex| 
			line =~ Regexp.new(regex)
		}.any?
	end
	def addDelimitersToTextByRegexes(text, delimiter)
		@textSeparateRegexLinesList.each{|regexData|
			if regexData[1] == "multiline"
				text = text.gsub(Regexp.new(regexData[0], Regexp::MULTILINE), delimiter + '\1')
			elsif regexData[1] == "oneline"
				text = text.gsub(Regexp.new(regexData[0]), delimiter + '\1')
			else
				raise "faulty regex data"
			end
		}
		text
	end
end
class CodeParser
	attr_accessor :conf,
		:parsersList
	def initialize()
		@parsersList = [
			JavaParser.new,
			JuliaParser.new,
			CCParser.new,
			ELispParser.new,
			RubyParser.new,
			JavaScriptParser.new,
			HaskellParser.new,
			PythonParser.new,
			CParser.new,
			CommonLispParser.new
		]
	end
	def checkSeparationLine(line, fileName)
		@parsersList.map{|parser|
			if parser.checkTypeByFileName(fileName)
				parser.checkSeparationLine(line)
			else
				false
			end	
		}.any?
	end
	def addDelimitersToText(text, fileName, delimiter)
		@parsersList.map{|parser|
			if parser.checkTypeByFileName(fileName)
				text = parser.addDelimitersToTextByRegexes(text, delimiter)
			end	
		}
		text
	end
end
class SourcesData
	attr_accessor :sourcesProjectName, 
		:sourcesDirPath, 
		:dataDirPath,
		:excludeFilesRegexList,
		:sourceFilesRegexList,
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
		:shape,
		:nodeLinesHeightMultiplier,
		:labelHighlightBold
	def initialize(id, idStep, label, link, x, y, fontSize, backgroundColor, nodeLinesHeightMultiplier)
		@id = id + idStep
		@idStep = idStep
		@label = label
		@link = link
		@fontSize = fontSize
		@backgroundColor = backgroundColor
		@shape = "box"
		@fontAlign = "left"
		@labelHighlightBold = "false"
		@nodeLinesHeightMultiplier = nodeLinesHeightMultiplier
		@x = x
		@y = VisJsNode.getPositionY(y, label, fontSize, nodeLinesHeightMultiplier)
	end
	def self.getPositionY(y, label, fontSize, nodeLinesHeightMultiplier)
		labelLinesCount = 1
		begin
			labelLinesCount = label.split("\n").size
		rescue ArgumentError 
			p "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
		ensure
			labelLinesCount = label.force_encoding('iso-8859-1').encode("utf-8").split("\n").size
		end
		y + labelLinesCount*fontSize*nodeLinesHeightMultiplier/2
	end
	def getHeight()
		labelLinesCount = @label.split("\n").size
		labelLinesCount*@fontSize*@nodeLinesHeightMultiplier
	end
	def setPosY(y)
		@y = y + getHeight()/2
	end
	def getVisJsObject()
		node = {}
		node["id"] = @id
		node["label"] = @label
		node["link"] = @link
		node["x"] = @x
		node["y"] = @y
		node["shape"] = @shape
		node["labelHighlightBold"] = @labelHighlightBold
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
	def initialize(id, idShift, from, to)
		@id = id + idShift
		@from = from
		@to = to
	end
	def getVisJsObject()
		edge = {}
		edge["id"] = @id
		edge["from"] = @from
		edge["to"] = @to
		edge
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
		:excludeFromParsingFilesRegexList,
		:fileDataFilterProcsList,
		:fileIndex
	def initialize()
		@codePartsDelimiter = "X@X#X$X^X"
		@codeLinesPartsList = []
	end
	def parseCode(sourcesBuilder)
		if @excludeFromParsingFilesRegexList.map{|regex| @filePath =~ Regexp.new(regex)}.none?
			@fileDataFilterProcsList.each{|proc|
				#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 1: " + @filePath
				proc.call(self)
			}
		end
		tmpCodeLinesPartsList = @codeLines.inject([[]]){|sum, line|
			begin
				#@codePartsDelimiter - delimiter we added with proc filter if we use complex multiline regex patterns
				if (@excludeFromParsingFilesRegexList.map{|regex| @fileName =~ Regexp.new(regex)}.none? &&
					(sourcesBuilder.codeParser.checkSeparationLine(line, @fileName) || 
					line.include?(@codePartsDelimiter)))
					#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 2: " + @filePath
					sum << [] 
					line = line.gsub(@codePartsDelimiter,"")
				end
			rescue ArgumentError 
				line = "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
			end
			#p @fileIndex.to_s + ". codeLines.size: " + @codeLines.size.to_s + ". 3: " + @filePath
			sum.last << line 
			sum	
		}
		#cut code part in chunks if longer 50 lines
		tmpCodeLinesPartsList.each{|part|
			if part.size > 50
				tmpList = part.each_slice(50).to_a
				tmpList.each{|l| 
					@codeLinesPartsList << l
				}
			else
				@codeLinesPartsList << part
			end
		}
		self
	end
end
class TreeOnPage
	attr_accessor :page,
		:rootNode,
		:branchesList,
		:positionX,
		:positionY,
		:edgesList,
		:indentY1,
		:indentY2,
		:indentY3,
		:jsonIndexShift,
		:nodeLinesHeight,
		:width,
		:height,
		:shiftBetweenBranchesY,
		:shiftBetweenTreesY
	def initialize()
		@branchesList = []
		@edgesList = []
		@positionX = 0
		@positionY = 0
		@width = 0
		@height = 0
		@shiftBetweenBranchesY = 0
		@shiftBetweenTreesY = 1000
	end
	def self.makeTreeFromSourceCodeFile(page, codeFile, jsonIndexShift, shiftBetweenBranchesY, nodeLinesHeightMultiplier)
		tree = TreeOnPage.new()
		tree.page = page
		tree.jsonIndexShift = jsonIndexShift
		tree.shiftBetweenBranchesY = shiftBetweenBranchesY
		tree.rootNode = VisJsNode.new(tree.page.makeNewItemIndex(), tree.jsonIndexShift, codeFile.filePath, "", 0, 0, 200, "red", nodeLinesHeightMultiplier)
		lastY = 0
		fileNameNode = VisJsNode.new(tree.page.makeNewItemIndex(), jsonIndexShift, codeFile.fileName, "", 12000, 0, 1400, "red", nodeLinesHeightMultiplier)
		fileNameNode.setPosY(lastY)
		lastY += fileNameNode.getHeight() + tree.shiftBetweenBranchesY
		tree.branchesList += [fileNameNode]
		tree.branchesList += codeFile.codeLinesPartsList.map{|linesPart|
			line = linesPart.join("\n")
			dataNode = VisJsNode.new(tree.page.makeNewItemIndex(), jsonIndexShift, line, "", 0, 0, 14, "", nodeLinesHeightMultiplier)
			dataNode.x = 12000
			dataNode.setPosY(lastY)
			lastY += dataNode.getHeight() + tree.shiftBetweenBranchesY
			dataNode
		}
		tree.branchesList.each{|branch|
			tree.edgesList << VisJsEdge.new(tree.page.makeNewItemIndex(), jsonIndexShift + 10000, tree.rootNode.id.to_s, branch.id.to_s)
		}
		tree
	end
	def getHeight()
		top = @positionY
		bottom = @branchesList.last.y + @branchesList.last.getHeight()/2
		bottom - top
	end
	def buildFileNodesAndEdgesOnPage(x, y)
		@positionX = x
		@positionY = y
		@branchesList.each_with_index{|branch, index|
			branch.x = @positionX + (branch.x - @rootNode.x)
			branch.y = @positionY + (branch.y - @rootNode.y)
		}
		@rootNode.x = @positionX
		@rootNode.y = @positionY
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
		:nodesPositionY,

		:pageNodesIndexCounter
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
		@pageNodesHash = Hash.new
		@pageEdgesHash = Hash.new
		@pageItemsIndexCounter = 0
	end
	def makeNewItemIndex()
		index = @pageItemsIndexCounter
		@pageItemsIndexCounter += 1
		index
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
		schemeDataObject = getDataJsObject()
		nodesList = schemeDataObject["canvas1Data"]["nodes"]["_data"]
		nodePositionY = shiftY*nodesList.size
		node.id = nodesList.size + node.idStep
		node.setPosY(nodePositionY)
		nodeObject = node.getVisJsObject()
		nodesList[nodeObject["id"]] = nodeObject
		saveDataJsObject(schemeDataObject)
	end
	def addNodesToPage(nodesList)
		schemeDataObject = getDataJsObject()
		nodesList.each{|node|
			nodeObject = node.getVisJsObject()
			schemeDataObject["canvas1Data"]["nodes"]["_data"][nodeObject["id"]] = nodeObject
		}
		saveDataJsObject(schemeDataObject)
	end
	def addEdgesToPage(edgesList)
		schemeDataObject = getDataJsObject()
		edgesList.each{|edge|
			edgeObject = edge.getVisJsObject()
			schemeDataObject["canvas1Data"]["edges"]["_data"][edgeObject["id"]] = edgeObject
		}
		saveDataJsObject(schemeDataObject)
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
		:codeNodesIndex,
		:nodeLinesHeightMultiplier,
		:shiftBetweenTreesY,
		:codeParser,
		:cacheDirPath,
		:cacheFilesIndexFrom,
		:cacheFilesIndexTo
	def initialize()
		@codeStringsCount = 0
		@codeNodesIndex = 0
		@jsonIndexShift = 100000
		@startX = 0
		@startY = 0
		@shiftX = 30000
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
		@nodeLinesHeightMultiplier = 1.2
		@shiftBetweenTreesY = 1000
		@codeParser = CodeParser.new
		@cacheDirPath = nil 
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
	def parseCodeFilesContentAndSaveEachFileDataToTmpFile(codeFilesHash, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		codeFilesHash.select{|key, codeFile| codeFile.fileIndex >= @cacheFilesIndexFrom && codeFile.fileIndex <= @cacheFilesIndexTo }.map.with_index{|(key, codeFile), index|
			p "index: " + index.to_s + ". allFilesCount: " + codeFilesHash.size.to_s + ". codeFile.fileIndex: " + codeFile.fileIndex.to_s + ". filePath: " + key
			codeFile.fileDataFilterProcsList = fileDataFilterProcsList
			codeFile.excludeFromParsingFilesRegexList = excludeFromParsingFilesRegexList
			codeFile.parseCode(self)
			codeFile.fileDataFilterProcsList = []
			begin
				f = File.open(@cacheDirPath + codeFile.fileIndex.to_s + ".yaml", "w")
				yamlLine = YAML.dump([key, codeFile])
				f.write(yamlLine)
				f.close
			rescue ArgumentError 
				codeFile.codeLinesPartsList = codeFile.codeLinesPartsList.map{|part|
					part.map{|line|
						line.force_encoding('iso-8859-1').encode("utf-8").split("\n")
					}
				}
				f = File.open(@cacheDirPath + codeFile.fileIndex.to_s + ".yaml", "w")
				yamlLine = YAML.dump([key, codeFile])
				f.write(yamlLine)
				f.close
			end
			p "codeFile.codeLinesPartsList.size: " + codeFile.codeLinesPartsList.size.to_s
		}
	end
	def parseCodeFilesContent(codeFilesHash, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		#codeFilesHash.select{|key, value| value.fileIndex > 5000}.map.with_index{|(key, codeFile), index|
		codeFilesHash.map.with_index{|(key, codeFile), index|
			p "index: " + index.to_s + ". allFilesCount: " + codeFilesHash.size.to_s + ". filePath: " + key
			codeFile.fileDataFilterProcsList = fileDataFilterProcsList
			codeFile.excludeFromParsingFilesRegexList = excludeFromParsingFilesRegexList
			codeFile.parseCode(self)
			p "codeFile.codeLinesPartsList.size: " + codeFile.codeLinesPartsList.size.to_s
			[key, codeFile]
		}.to_h
	end
	def loadCodeFilesAndParseContent(codeFilesHash, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		codeFilesHash = codeFilesHash.map.with_index{ |(key, codeFile), index|
			p "readFile: " + index.to_s if index % 100 == 0
			codeFile.codeLines = File.readlines(key)
			#cut lines if longer than 200 chars
			codeFile.codeLines = codeFile.codeLines.map{|line|
				begin
					line = line.
						scan(/.{1,200}/).
						join("\n") if line.size > 200
				rescue ArgumentError 
					p "MM-VIS-JS. ERROR: invalid byte sequence in UTF-8\n"
				ensure
					line = line.force_encoding('iso-8859-1').encode("utf-8")
					line = line.
						scan(/.{1,200}/).
						join("\n") if line.size > 200
				end
				line
			}
			[key, codeFile]
		}.to_h
		p "code files read done"
		if !@cacheDirPath.nil?
			parseCodeFilesContentAndSaveEachFileDataToTmpFile(codeFilesHash, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		else
			parseCodeFilesContent(codeFilesHash, fileDataFilterProcsList, excludeFromParsingFilesRegexList)
		end
	end
	#wip utility code for working with data cached on disk
	def buildCodeFilesHashFromFiles()
		dir = @cacheDirPath 
		filesList = Dir.glob(dir + "**/*").select{|e| File.file? e}
		filesList.map.with_index{|file,index|
			#p "cacheFile: " + index.to_s if index % 1000 == 0
			p "cacheFile: " + index.to_s 
			filePath = dir + index.to_s + ".yaml"
			file = File.read(filePath)
			YAML.load(file)
		}.to_h
	end
	def buildPagesWithCodeFilesHash(codeFilesHash, sourcesProjectName)
		a = codeFilesHash.
			to_a.
			each_slice(@filesToPageLimit).
			to_a
		pagesWithCodeFilesHash = a.map.with_index{|item, index|
				p "buildPagesWithCodeFilesHash(codeFilesHash, sourcesProjectName) -> " + index.to_s
				codeFilesHash = item.to_h
				prefix = a.size > 1 ?  sourcesProjectName + "_" + index.to_s : sourcesProjectName
				page = MMVisJsPage.new(@projectExampleDirPath, prefix)
				[page, codeFilesHash]
			}.to_h
		pagesWithCodeFilesHash
	end
	def buildPagesCodeNodes(pagesWithCodeFilesHash)
		pagesWithCodeFilesHash.map.with_index{|(key_Page, value_codeFilesHash), index|
			p "buildPagesCodeNodes(pagesWithCodeFilesHash)-> " + index.to_s
			nodesHash = buildNodesAndCalculateTheirPropertiesForCodeFiles(key_Page, value_codeFilesHash)
			key_Page.pageNodesHash = nodesHash.values.flatten.map{|node| [node.id, node]}.to_h
			key_Page
		}
	end
	def buildNodesAndCalculateTheirPropertiesForCodeFiles(page, codeFilesHash)
		nodesHash = Hash.new
		page.nodesPositionX = @startX
		page.nodesPositionY = @startY
		nodesHash = layoutFilesDataByColumns(page, codeFilesHash.values, @startX, @startY, 30000, 100000)
		#codeFilesHash.each_with_index{|(key_f, value_CodeFile),index1|
		#	#buildNodesHashForFile(key_f, value_CodeFile, nodesHash, index1, page)
		#}
		nodesHash
	end
	def layoutFilesDataByColumns(page, codeFilesList, layoutX, layoutY, columnWidth, columnMaxHeight)
		columnsCounter = 0
		currentX = layoutX
		currentY = layoutY
		nodesHash = Hash.new
		codeFilesList.each_with_index{|codeFile, index|
			tree = TreeOnPage.makeTreeFromSourceCodeFile(page, 
								     codeFile, 
								     @jsonIndexShift, 
								     @shiftY,
								     @nodeLinesHeightMultiplier)
			tree.shiftBetweenTreesY = @shiftBetweenTreesY
			tree.buildFileNodesAndEdgesOnPage(currentX, currentY)

			currentY += tree.getHeight() + tree.shiftBetweenTreesY
			if currentY > columnMaxHeight
				columnsCounter += 1
				currentX = layoutX + columnsCounter*columnWidth
				currentY = layoutY
			end
			nodesHash[codeFile.filePath] = []
			nodesHash[codeFile.filePath] += [tree.rootNode]
			nodesHash[codeFile.filePath] += tree.branchesList
			tree.edgesList.each{|edge| page.pageEdgesHash[edge.id] = edge }
		}
		nodesHash
	end
	def buildNodesHashForFile(key_f, codeFile, nodesHash, index1, page)
		nodesHash[key_f] = []
		#codeFile.buildFileNodesAndEdgesOnPage(@indentationY1, @indentationY2, @indentationY3, @jsonIndexShift)
		nodesHash[key_f] += [tree.rootNode]
		nodesHash[key_f] += tree.branchesList
		tree.edgesList.each{|edge| page.pageEdgesHash[edge.id] = edge }
		#if page.nodesPositionY >= @nodesColumnHeight
		#	page.nodesPositionX += @shiftX
		#	page.nodesPositionY = @startY
		#end
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
				p "buildCodeSchemeFiles-> " + indexByPage.to_s
				codeIndexPage.scale = 0.15
				codeIndexPage.viewPositionX = 500
				codeIndexPage.viewPositionY = 700
				codeIndexPage.buildPageFiles(@templatesDirPath)
				codeIndexPage.addNodesToPage(codeIndexPage.pageNodesHash.values)
				codeIndexPage.addEdgesToPage(codeIndexPage.pageEdgesHash.values)
				currentVersionProjectIndexFilePath = sourcesProjectName + "_" + indexByPage.to_s + ".index.html"
				currentVersionProjectIndexVerboseRelativeFilePath = @projectExampleDirPath + sourcesProjectName + "_" + indexByPage.to_s + ".index.html"
				node = VisJsNode.new(0, 
						     Time.now.to_i, 
						     currentVersionProjectIndexVerboseRelativeFilePath, 
						     currentVersionProjectIndexFilePath, 
						     0, 0, 15, "", nodeLinesHeightMultiplier)
				currentVersionIndexPage.addNodesToNodesListOnPage(node, 30)
			}
				
		else
			codeIndexPage = codeNodesPagesList[0]
			codeIndexPage.scale = 0.15
			codeIndexPage.viewPositionX = 500 
			codeIndexPage.viewPositionY = 700
			codeIndexPage.buildPageFiles(@templatesDirPath)
			codeIndexPage.addNodesToPage(codeIndexPage.pageNodesHash.values)
			codeIndexPage.addEdgesToPage(codeIndexPage.pageEdgesHash.values)
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
				     0, 0, 15, "", nodeLinesHeightMultiplier) 
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
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	onlyPrepareCacheFiles = false
	sourcesBuilder.cacheFilesIndexFrom = 0
	sourcesBuilder.cacheFilesIndexTo = 10000000
	sourcesBuilder.cacheDirPath = "/home/mike/progr/repo/mm-vis-js/utils/data_linux/"
	Dir.mkdir(sourcesBuilder.cacheDirPath) if !Dir.exists?(sourcesBuilder.cacheDirPath)
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
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
	sourcesData.excludeFilesRegexList = [
		".*bid_binarydecimal.c$"
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$",
		".*gcc/gcc/testsuite/gcc.target/i386/avx-1.c$",
		".*gcc/gcc/testsuite/gcc.target/i386/sse-13.c$",
		".*gcc/gcc/testsuite/gcc.target/i386/sse-22.c$",
		"gcc/gcc/testsuite/gcc.target/i386/sse-14.c",
		"gcc/gcc/testsuite/gcc.target/i386/sse-23.c",
		"gcc/libquadmath/printf/fpioconst.c"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	onlyPrepareCacheFiles = false
	sourcesBuilder.cacheFilesIndexFrom = 0
	sourcesBuilder.cacheFilesIndexTo = 10000000
	sourcesBuilder.cacheDirPath = "/home/mike/progr/repo/mm-vis-js/utils/data_gcc/"
	Dir.mkdir(sourcesBuilder.cacheDirPath) if !Dir.exists?(sourcesBuilder.cacheDirPath)
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 100000000
elsif opts[:project] == "mm-vis-js"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "mm-vis-js"
	sourcesData.sourcesDirPath = "../../mm-vis-js/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.js$",
		".*\\.rb$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		]
	sourcesData.fileDataFilterProcsList = [
	]
	sourcesBuilder.shiftY = 50 
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 100 
	sourcesBuilder.limitFilesToRead = 100000
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
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "vim"
	#git clone https://github.com/vim/vim
	#в общем, сгенерился
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "vim"
	sourcesData.sourcesDirPath = "../../../soft/vim/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "vis-network"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "vis-network"
	sourcesData.sourcesDirPath = "../../../soft/vis-network/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.js$"
		]
	sourcesData.excludeFilesRegexList = [
		".*largeHierarchicalDataset.js$",
		".*vis-network.min.js$",
		".*vis-network.esm.min.js$",
		".*vis-network.esm.js$",
		".*WorldCup2014.js$"
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 100
	sourcesBuilder.limitFilesToRead = 1000000
elsif opts[:project] == "chromium"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "chromium"
	sourcesData.sourcesDirPath = "../../../soft/chromium/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.py$",
		".*\\.js$",
		".*\\.sh$",
		".*\\.cc$",
		".*\\.c$",
		".*\\.h$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*chromium/third_party/brotli/enc/dictionary_hash.c$",
		"chromium/third_party/google_trust_services/src/roots.cc",
		"chromium/third_party/opus/src/silk/tables_NLSF_CB_WB.c",
		"chromium/third_party/protobuf/mirclient.cc",
		"chromium/third_party/webdriver/atoms.cc",
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	onlyPrepareCacheFiles = false
	sourcesBuilder.cacheFilesIndexFrom = 0
	sourcesBuilder.cacheFilesIndexTo = 10000000
	sourcesBuilder.cacheDirPath = "/home/mike/progr/repo/mm-vis-js/utils/data_chromium/"
	Dir.mkdir(sourcesBuilder.cacheDirPath) if !Dir.exists?(sourcesBuilder.cacheDirPath)
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "julia"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "julia"
	sourcesData.sourcesDirPath = "../../../soft/julia/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$",
		".*\\.jl$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regexC = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "sbcl"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "sbcl"
	sourcesData.sourcesDirPath = "../../../soft/sbcl/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$",
		".*\\.lisp$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regexC = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "ghc"
	#git clone https://github.com/ghc/ghc
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "ghc"
	sourcesData.sourcesDirPath = "../../../soft/ghc/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.h$",
		".*\\.c$",
		".*\\.py$",
		".*\\.hs$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				#regexC = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
				#fileText = fileText.gsub(Regexp.new(regexC, Regexp::MULTILINE), codeFile.codePartsDelimiter + '\1')
				#regexHaskell = "(.*?::.*?->.*)"
				#fileText = fileText.gsub(Regexp.new(regexHaskell), codeFile.codePartsDelimiter + '\1')
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "bash"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "bash"
	sourcesData.sourcesDirPath = "../../../soft/bash/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500
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
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			#regex = "(([a-zA-z]+)(\\s)([a-zA-Z\\*]+[a-zA-z0-9\\*]+)(\\({1})(.*?[0-9a-z\\*_,\\s\\.]+)(\\){1})(\\n|\\r|\\s)*(\\{{1}))"
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "ruby"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "ruby"
	sourcesData.sourcesDirPath = "../../../soft/ruby_git/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.rb$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "apache_httpd"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "apache_httpd"
	sourcesData.sourcesDirPath = "../../../soft/httpd/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "mysql-server"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "mysql-server"
	sourcesData.sourcesDirPath = "../../../soft/mysql-server/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.sh$",
		".*\\.h$",
		".*\\.cc$"
		]
	sourcesData.excludeFilesRegexList = [
		"mysql-server/strings/ctype-gb18030.cc",
		"mysql-server/strings/ctype-extra.cc"
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$",
		"mysql-server/sql/dd/collection.cc"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "texlive-source"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "texlive-source"
	sourcesData.sourcesDirPath = "../../../soft/texlive-source/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		"texlive-source/texk/dvisvgm/dvisvgm-src/libs/brotli/common/dictionary.c",
		"texlive-source/texk/dvisvgm/dvisvgm-src/libs/brotli/enc/dictionary_hash.c",
		"texlive-source/texk/web2c/luatexdir/lua/luatex-core.c",
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$",
		".*lua.*\\.c$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "cpython"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "cpython"
	sourcesData.sourcesDirPath = "../../../soft/cpython/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = []
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "jdk"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "jdk"
	sourcesData.sourcesDirPath = "../../../soft/jdk/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "hbase"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "hbase"
	sourcesData.sourcesDirPath = "../../../soft/hbase/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "spark"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "spark"
	sourcesData.sourcesDirPath = "../../../soft/spark/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "neo4j"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "neo4j"
	sourcesData.sourcesDirPath = "../../../soft/neo4j/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "spring-framework"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "spring-framework"
	sourcesData.sourcesDirPath = "../../../soft/spring-framework/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "tomcat"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "tomcat"
	sourcesData.sourcesDirPath = "../../../soft/tomcat/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.java$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "vscode"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "vscode"
	sourcesData.sourcesDirPath = "../../../soft/vscode/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.ts$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "dotnet_core"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "dotnet_core"
	sourcesData.sourcesDirPath = "../../../soft/core/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.ts$",
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
elsif opts[:project] == "firefox"
	sourcesData = SourcesData.new
	sourcesData.sourcesProjectName = "firefox"
	sourcesData.sourcesDirPath = "../../../soft/gecko-dev/"
	sourcesData.dataDirPath = "../../sushilshik.github.io/examples/"
	sourcesData.sourceFilesRegexList = [
		".*\\.js$",
		".*\\.py$",
		".*\\.sh$",
		".*\\.cpp$",
		".*\\.h$",
		".*\\.c$"
		]
	sourcesData.excludeFilesRegexList = [
		]
	sourcesData.excludeFromParsingFilesRegexList = [
		".*\\.h$",
		"gecko-dev/gfx/thebes/gfxLanguageTagList.cpp",
		"modules/brotli/common/dictionary.c",
		"gecko-dev/modules/brotli/enc/dictionary_hash.c",
		"gecko-dev/other-licenses/7zstub/src/CPP/7zip/Archive/7z/7zUpdate.cpp",
		"gecko-dev/other-licenses/7zstub/src/CPP/7zip/Archive/Common/CoderMixer2.cpp"
		]
	sourcesData.fileDataFilterProcsList = [
		Proc.new{|codeFile|
			fileText = codeFile.codeLines.join("")
			begin
				fileText = sourcesBuilder.codeParser.addDelimitersToText(fileText, codeFile.fileName, codeFile.codePartsDelimiter)
				codeFile.codeLines = fileText.split("\n")
			rescue ArgumentError 
				codeFile.codeLines = ["MM-VIS-JS. ERROR: invalid byte sequence in UTF-8"]
			end
			codeFile
		}
	]
	onlyPrepareCacheFiles = false
	sourcesBuilder.cacheFilesIndexFrom = 0
	sourcesBuilder.cacheFilesIndexTo = 10000000
	sourcesBuilder.cacheDirPath = "/home/mike/progr/repo/mm-vis-js/utils/data_firefox/"
	Dir.mkdir(sourcesBuilder.cacheDirPath) if !Dir.exists?(sourcesBuilder.cacheDirPath)
	sourcesBuilder.shiftY = 100
	sourcesBuilder.shiftBetweenTreesY = 1000
	sourcesBuilder.nodeLinesHeightMultiplier = 1
	sourcesBuilder.filesToPageLimit = 500 
	sourcesBuilder.limitFilesToRead = 10000000
end
exit if opts[:project].nil?

codeFilesHash = nil
parsedCodeFilesHash = nil
if ( onlyPrepareCacheFiles.nil? || (!onlyPrepareCacheFiles.nil? && onlyPrepareCacheFiles) )
codeFilesHash = sourcesBuilder.findAndSelectCodeFilesForVisNetwork(
	sourcesData.sourcesDirPath, 
	sourcesData.sourceFilesRegexList, 
	sourcesData.excludeFilesRegexList)
p "codeFilesHash.size: " + codeFilesHash.size.to_s

parsedCodeFilesHash = sourcesBuilder.loadCodeFilesAndParseContent(
	codeFilesHash, 
	sourcesData.fileDataFilterProcsList, 
	sourcesData.excludeFromParsingFilesRegexList)
p "parsedCodeFilesHash.size: " + parsedCodeFilesHash.size.to_s

end

exit if !onlyPrepareCacheFiles.nil? && onlyPrepareCacheFiles

sourcesBuilder.buildProjectDirectory(
	sourcesData.dataDirPath, 
	sourcesData.sourcesProjectName)

if ( !onlyPrepareCacheFiles.nil? && !onlyPrepareCacheFiles )
	parsedCodeFilesHash = sourcesBuilder.buildCodeFilesHashFromFiles()
	codeFilesHash = parsedCodeFilesHash
end

pagesWithCodeFilesHash = sourcesBuilder.buildPagesWithCodeFilesHash(
	parsedCodeFilesHash, 
	sourcesData.sourcesProjectName)

codeNodesPagesList = sourcesBuilder.buildPagesCodeNodes(pagesWithCodeFilesHash)

sourcesBuilder.buildIndexSchemeFiles(
	sourcesData.dataDirPath, 
	sourcesData.sourcesProjectName)

sourcesBuilder.buildCodeSchemeFiles(sourcesData.sourcesProjectName, codeNodesPagesList)

sourcesBuilder.stats(codeFilesHash, parsedCodeFilesHash, codeNodesPagesList)

