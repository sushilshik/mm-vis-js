//openssl req -nodes -new -x509 -keyout server.key -out server.cert
var fs = require("fs");
var https = require('https');
var host = "127.0.0.1";
var port = 1337;
var httpsPort = 3001;
var express = require("express");

var mvjCodePath = "/home/mike/progr/repo/mm-vis-js/utils/mvj-code.js";

var rootBackupDirPath = "/tmp/mm-vis-js_serv_backup/";
if (!fs.existsSync(rootBackupDirPath)){
   fs.mkdirSync(rootBackupDirPath);
}

var app = express();
//app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
var saveData = {};
app.get("/", function(request, response){ //root dir
    response.set('access-control-allow-origin', '*');
    var path = request.query.path;
    var dataPart = request.query.dataPart;
    var dataPartNumber = request.query.dataPartNumber;
    var projectName = request.query.projectName;
    var saveTime = request.query.saveTime;
    var lastDataPart = request.query.lastDataPart;
    var dataChunksLength = parseInt(request.query.dataChunksLength, 10);
    var buildProjectName = request.query.buildProjectName;
    
    //saveData[dataPartNumber] = JSON.parse(dataPart);
 
    var answerLine = JSON.stringify("ok");
    //if (typeof dataPartNumber === "undefined") {
    //	console.log(request.query);
    //}

    var saveJobKey = projectName + "_" + saveTime;
    if (typeof saveData[saveJobKey] === "undefined") {
        saveData[saveJobKey] = {};
    }

    //process.stdout.write(dataPart);
    saveData[saveJobKey][dataPartNumber] = dataPart;

    console.log(dataPartNumber + ": " + saveTime + ", " + dataChunksLength + ", " + Object.keys(saveData[saveJobKey]).length);
    if (Object.keys(saveData[saveJobKey]).length == dataChunksLength) {
	//var saveData = Object.keys(saveData)
	//    .sort(function(a,b) { return +b - +a })
	//    .map(function(k) { return { key: k, value: saveData[k] };});
        var orderedSaveData = {};
        Object.keys(saveData[saveJobKey]).sort().forEach(function(key) {
           orderedSaveData[key] = saveData[saveJobKey][key];
           });
	var data = "";
        for (var key in orderedSaveData) {
           data += orderedSaveData[key];
        }
        console.log("data.length: " + data.length);
        console.log("path: " + path);
        data = "var schemeData =\n" + data + "\n;";
	var backupDirPath = rootBackupDirPath + projectName + "/";
	if (!fs.existsSync(backupDirPath)){
		fs.mkdirSync(backupDirPath);
	}
	var date = new Date();
	fs.writeFileSync(backupDirPath + date + "_" + saveTime + "_data.js", data)
	fs.writeFileSync(path, data)
	saveData[saveJobKey] = {};

	if (typeof buildProjectName !== "undefined") {
		var exec = require("child_process").exec;
		var script = exec(mvjCodePath + " '" + path + "' '" + buildProjectName + "'",
			(error, stdout, stderr) => {
			    console.log(stdout);
			    console.log(stderr);
			    if (error !== null) {
				console.log(`exec error: ${error}`);
			    }
			});
	}
    }
    response.send(answerLine);
});

app.listen(port, host);

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
https.createServer( options, function(req,res) {
    app.handle( req, res );
}).listen(httpsPort);
