#!/usr/local/bin/node

var pathDelimiter = "/";

var fs = require('fs');

var userConfPath = "../user-conf.json";
var rootBackupDirPath = "/tmp/mm-vis-js_code_backup/";
if (!fs.existsSync(rootBackupDirPath)){
   fs.mkdirSync(rootBackupDirPath);
}

var path = process.argv[2]; 
console.log("mvj-code->dataPath: " + path);

var projectName = process.argv[3]; 
console.log("mvj-code->projectName: " + projectName);

var runProject = process.argv[4];
if (typeof runProject === "undefined" && runProject != "true") runProject = "false";
console.log("mvj-code->runProject: " + runProject);

var contents = fs.readFileSync(path, 'utf8');
//contents = contents.replace(/^var schemeData =/, "");
contents = contents.split("\n");
contents.shift();
contents.pop();
contents = contents.join("\n");

var data = JSON.parse(contents);

var nodes = data.canvas1Data.nodes._data;
var edges = data.canvas1Data.edges._data;

var files = {};
var setupNodeId;
var setup = {};
for (var key in nodes) {
	if (nodes[key].label.startsWith("mvj code file for project name: " + projectName)) {
		files[key] = {rootNodeId: key, projectName: projectName};
	}
}

for (var key in files) {
	var rootNodeId = files[key].rootNodeId;
	var filePath;
	var filePathNodeId;
	for (var keyE in edges) {
		if (edges[keyE].from == rootNodeId) {
			filePathNodeId = edges[keyE].to;
		}
	}
	files[key].filePathNodeId = filePathNodeId
		filePath = nodes[filePathNodeId].label.replace("file path: ", "");
	files[key].filePath = filePath;
}

for (var key in files) {
	var filePathNodeId = files[key].filePathNodeId;
	var fileContentPointNodeId;
	for (var keyE in edges) {
		if (edges[keyE].from == filePathNodeId) {
			fileContentPointNodeId = edges[keyE].to;
		}
	}
	files[key].fileContentPointNodeId = fileContentPointNodeId
}
for (var key in nodes) {
	if (nodes[key].label.startsWith("mvj code setup for project name: " + projectName)) {
		setupNodeId = key;
	}
}
for (var keyE in edges) {
   if (edges[keyE].from == setupNodeId && (typeof nodes[edges[keyE].to] !== "undefined")) {
      var nodeId = edges[keyE].to;
      if (nodes[nodeId].label.startsWith("projectPath")) {
         setup["projectPath"] = nodes[nodeId].label.replace("projectPath: ", "");
      }
      if (nodes[nodeId].label.startsWith("backupPaths")) {
         setup["backupPaths"] = nodes[nodeId].label.replace("backupPaths: ", "");
         setup["backupPaths"] = JSON.parse(setup["backupPaths"]);
      }
      if (nodes[nodeId].label.startsWith("jsFilesLinksParam")) {
         setup["jsFilesLinksParam"] = nodes[nodeId].label.replace("jsFilesLinksParam:", "").trim();
         setup["jsFilesLinksParam"] = parseInt(setup["jsFilesLinksParam"], 10);
      }
      if (nodes[nodeId].label.startsWith("readLocalUserConfig")) {
         setup["readLocalUserConfig"] = nodes[nodeId].label.replace("readLocalUserConfig:", "").trim();
      }
      if (nodes[nodeId].label.startsWith("runProjectCommand")) {
         setup["runProjectCommand"] = nodes[nodeId].label.replace("runProjectCommand:", "").trim();
      }
   }
}
if (typeof setup["readLocalUserConfig"] !== "undefined" && setup["readLocalUserConfig"] == "true") {
   setup["userConfData"] = fs.readFileSync(userConfPath, 'utf8');
}
function collectCodeNodesContent(rootCodeNodeId, nodes, edges) {
   var nodeCode = nodes[rootCodeNodeId].label;

   var matchResults = nodeCode.match(/generateCode1[\s\S]*?generateCode2/g);
   if (matchResults !== null) {
      for (var i = 0; i < matchResults.length; i++) {
         //console.log(matchResults[i]);
         var codeToRun = matchResults[i].replace(/generateCode1([\s\S]*?)generateCode2/g, "$1");
         //console.log(codeToRun);
         var codeFunction = new Function("setup", codeToRun);
         var fResult = codeFunction(setup);
         //console.log(fResult);
         nodeCode = nodeCode.replace(matchResults[i],fResult);
      }
   }
   nodeCode = nodeCode.replace(/generate\$k\$Code/g,"generateCode");

   var code = nodeCode + "\n";
	var nodeBranchesNodesIds = [];
	for (var keyE in edges) {
		if ((edges[keyE].from == rootCodeNodeId) && (edges[keyE].label == "code")) {
			nodeBranchesNodesIds.push(edges[keyE].to);
		}
	}
	var branchCodeNodes = [];
	nodeBranchesNodesIds.forEach(function(branchNodeId) {
		branchCodeNodes.push(nodes[branchNodeId]);
	});
        if (branchCodeNodes.length > 0 && typeof branchCodeNodes[0] === "undefined") {
           var z = [];
           nodeBranchesNodesIds.forEach(function(nodeId) {
                for(var key1 in edges) {
                        if (edges[key1].to == nodeId) {
                                z.push(key1);
                        }
                }
           });
                console.log(z);
        }

	function compare( a, b ) {
		if ( a.y < b.y ){
			return -1;
		}
		if ( a.y > b.y ){
			return 1;
		}
		return 0;
	}

	var branchCodeNodes = branchCodeNodes.sort(compare);
	branchCodeNodes.forEach(function(branchNode) {
			code = code + collectCodeNodesContent(branchNode.id, nodes, edges);
			});
	return code;
}
function mkdirRecursiveSync(path, pathDelimiter) {
    var paths = path.split(pathDelimiter);
    var fullPath = '';
    paths.forEach((path) => {

        fullPath = fullPath + path + pathDelimiter;

        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath);
        }
    });
};

for (var key in files) {
	var fileContentPointNodeId = files[key].fileContentPointNodeId;
	var fileContentNodeId;
	for (var keyE in edges) {
		if (edges[keyE].from == fileContentPointNodeId) {
			fileContentNodeId = edges[keyE].to;
		}
	}
	files[key].fileContentNodeId = fileContentNodeId
	fileContent = collectCodeNodesContent(fileContentNodeId, nodes, edges);
	files[key].fileContent = fileContent;
}
var date = new Date();
var backupDirPath = rootBackupDirPath + projectName + "_" + date + "/";
if (!fs.existsSync(backupDirPath)){
   fs.mkdirSync(backupDirPath);
}

var shell1 = require('child_process').execSync ; 
setup["backupPaths"].forEach(function(backupPath) {
   console.log("backupPath: " + backupPath);
   var command = "rsync -av " +
                 "--exclude=.git " +
                 "--exclude=news*.data.js* " +
                 "--exclude=news*.data*.js " +
                 "--exclude=newsDownloadedData " + 
                 "--exclude=2020.09.01_backup '" + 
                 backupPath + "' '" + 
                 backupDirPath + "'";
   console.log(command);
   shell1(command);
});

var projectPath = setup["projectPath"];
if (!fs.existsSync(projectPath)){
   console.log("fs.mkdirSync(projectPath): " +  projectPath);
   //fs.mkdirSync(projectPath);
   mkdirRecursiveSync(projectPath, pathDelimiter);
}

for (var key in files) {
   var filePath = projectPath + "/" + files[key].filePath;
   var fileDirPath = filePath.split(pathDelimiter);
   fileDirPath.pop();
   fileDirPath = fileDirPath.join(pathDelimiter);
   mkdirRecursiveSync(fileDirPath, pathDelimiter);
   var fileContent = files[key].fileContent;
   console.log("filePath: " + filePath);
   fs.writeFileSync(filePath, fileContent);
}

if (runProject == "true" && typeof setup["runProjectCommand"] === "undefined") {
   //"runProjectResult:" - delimiter. In mvj-serv.js output of mvj-code.js is separated by this delimiter.
   //to return result of "runProject" operation
   console.log("runProjectResult:");
   console.log("ERROR: typeof runProjectCommand === 'undefined'");
}
if (runProject == "true" && typeof setup["runProjectCommand"] !== "undefined" &&
    setup["runProjectCommand"] == "") {
   console.log("runProjectResult:");
   console.log("ERROR: runProjectCommand == ''");
}

var shell2 = require('child_process').execSync;

if (typeof setup["runProjectCommand"] !== "undefined" &&
    setup["runProjectCommand"] != "" &&
    runProject == "true") {
   console.log("runProjectCommand: " + setup["runProjectCommand"]);
   result = shell2(setup["runProjectCommand"]).toString();
   console.log("runProjectResult:");
   console.log(result);
}
