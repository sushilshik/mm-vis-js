require 'json'
require 'htmlentities'
require 'uri'
require 'cgi'

#Code for building vis.js code scheme in mm-vis-js
#Ruby code

sourceFilesPath = "../../soft/vis-network/"
filesPath = "../suhilshik.github.io/"
dataFilePath = "../sushilshik.github.io/examples/vis.js.nodes.data.js"

def jsonLines(id, idStep, label, x, y, fontSize, backgroundColor) 
	id = idStep + id
	jsonLines = '"' + id.to_s + '": { '
        jsonLines += '"id": "' + id.to_s + '", '
	jsonLines += '"x": "' + x.to_s + '", '
	jsonLines += '"y": "' + y.to_s + '", '
	jsonLines += '"shape": "box", '
	jsonLines += '"label": "' + label + '" '
	jsonLines += '}'
	jsonLines
	a = {}
	b = {}
	b["id"] = id.to_s
	b["x"] = x.to_s
	b["y"] = y.to_s
	b["shape"] = "box"
	b["label"] = label
	c = {}
	c["align"] = "left"
	c["size"] = fontSize
	b["font"] = c
	if !backgroundColor.nil? && backgroundColor != ""
		d = {}
		d["background"] = backgroundColor
		b["color"] = d
	end
	a[id.to_s] = b
	line = a.to_json
	line = line[1..-1]
	line = line[0...-1]
	line
end

#get js files list from vis-network directory
files = Dir.glob(sourceFilesPath+'**/*').select{|e| File.file? e}
files = files.select{|f| f =~ /.*\.js$/ }
#exclude not covеnient for visualisation files
files = files.select{|f| !f.include?("largeHierarchicalDataset.js")  }
files = files.select{|f| !f.include?("vis-network.min.js")  }
files = files.select{|f| !f.include?("vis-network.esm.min.js")  }
files = files.select{|f| !f.include?("vis-network.esm.js")  }
files = files.select{|f| !f.include?("WorldCup2014.js")  }
filesWithData = files.map{ |f|
	[f, File.readlines(f)]
}.to_h
#parse code (find functions) by comments
filesWithData = filesWithData.map{|key, value|
	collectedList = value.inject([[]]){|a, item|
		a << [] if item =~ /.*\/\*\*.?$/
		a.last << item
		a
	}
	[key, collectedList]
}.to_h

jsonLines = []
startX = 0
startY = 0
shiftX = 17000 
shiftY = 40
jsonIndex = 0
x = startX
y = startY
#build mm-vis-js nodes json for code
filesWithData.each_with_index{|(key, value),index1|
	#p key + ": " + value.to_s
	p index1
	p shiftX
	p startX
	#x = startX + shiftX*index1
	#y = startY
	y = y + 1100
	jsonLines << jsonLines(jsonIndex, 100000, key, x, y, 200, "red")
	jsonIndex += 1
	y = y + 1100
	jsonLines << jsonLines(jsonIndex, 100000, key.split("/").last, x, y, 1300, "red")
	y = y + 1000
	jsonIndex += 1
	value.each_with_index{|v,index2|
		nodeHeight = 28*v.size
		y = y + shiftY
		#line = jsonIndex.to_s + ",x: " + x.to_s + ",y: " + y.to_s + ",nodeHeight/2: " + (nodeHeight/2).to_s + ",y+nodeHeight/2: " + (y + nodeHeight/2).to_s + "\n" + v.join("\n")
		line = v.join("\n")
		#jsonLines << jsonLines(jsonIndex, 100000, jsonIndex.to_s + ".", x-1000, y, 14, "red")
		#jsonIndex += 1
		jsonLines << jsonLines(jsonIndex, 100000, line, x, y + nodeHeight/2, 14, "")
		y = y + nodeHeight
		#jsonLines << jsonLines(jsonIndex, 100000, URI.escape(v.join("\n")), x, y) + "\n"
		#jsonLines << jsonLines(jsonIndex, 100000, CGI.escape(v.join("\n")), x, y) + "\n"
		jsonIndex += 1
	}
	if y < 100000
		x = x
		y = y
	else
		x = x + shiftX
		y = startY
	end
}
	
jsonLines = "var code_data1 = {" +  jsonLines.join(",\n") + "};"

f = File.open(dataFilePath, "w")
f.write(jsonLines)
f.close
