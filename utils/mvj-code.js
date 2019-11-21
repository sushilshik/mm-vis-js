#!/usr/local/bin/node

var pathDelimiter = "/";

var fs = require('fs');

var rootBackupDirPath = "/tmp/mm-vis-js_code_backup/";
if (!fs.existsSync(rootBackupDirPath)){
   fs.mkdirSync(rootBackupDirPath);
}

var path = process.argv[2]; 
console.log("mvj-code->dataPath: " + path);

var projectName = process.argv[3]; 
console.log("mvj-code->projectName: " + projectName);

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
function collectCodeNodesContent(rootCodeNodeId, nodes, edges) {
	var code = nodes[rootCodeNodeId].label + "\n";
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
	}
}
var date = new Date();
var backupDirPath = rootBackupDirPath + projectName + "_" + date + "/";
if (!fs.existsSync(backupDirPath)){
   fs.mkdirSync(backupDirPath);
}

var shell = require('child_process').execSync ; 
setup["backupPaths"].forEach(function(backupPath) {
   console.log("backupPath: " + backupPath);
   var command = "cp -r '" + backupPath + "' '" + backupDirPath + "'";
   console.log(command);
   shell(command);
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
