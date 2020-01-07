//openssl req -nodes -new -x509 -keyout server.key -out server.cert
var fs = require("fs");
var https = require('https');
var host = "127.0.0.1";
var port = 1337;
var httpsPort = 3001;
var express = require("express");
const axios = require('axios');

var mvjCodePath = "/home/mike/progr/repo/mm-vis-js/utils/mvj-code.js";

var rootBackupDirPath = "/tmp/mm-vis-js_serv_backup/";
if (!fs.existsSync(rootBackupDirPath)){
   fs.mkdirSync(rootBackupDirPath);
}

var app = express();

app.use("/public",function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/public", express.static(__dirname + "/../app/public"));
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
        answerLine = JSON.stringify("save");
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
                answerLine = JSON.stringify("saveAndBuild: " + buildProjectName);
	}
    }
    response.send(answerLine);
});
app.get("/sympy", function(request, response){ //root dir
   response.set('Access-Control-Allow-Origin', '*');
   var dataPart = request.query.dataPart;

   console.log(dataPart);

   var cmd1 = "printf \"" + dataPart + "\" | python3";

   var execSync1 = require('child_process').execSync;

   var options1 = {
      encoding: 'utf8'
   };

   var calcResult1 = execSync1(cmd1, options1);
   var symPyData = JSON.parse(calcResult1);
   //console.log("symPyData:");
   //console.log(symPyData);
   console.log("calcResult1:");
   console.log(calcResult1);

   try{fs.unlinkSync("host.aux"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("host.log"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("host.pdf"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("host.tex"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("main.aux"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("main.log"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("main.pdf"); }catch(err){ console.log(err); }
   try{fs.unlinkSync("main.tex"); }catch(err){ console.log(err); }

   var texFile = `\\documentclass[preview,border=12pt,12pt]{standalone}
\\usepackage{filecontents}
\\usepackage{amsmath}
\\begin{filecontents*}{main.tex}
\\documentclass[12pt]{article}
\\usepackage[active,tightpage]{preview}
\\PreviewBorder=12pt\\relax
\\begin{document}
\\preview
\\(` + "\n" +
symPyData['latexLine'] + "\n" +
`\\)
\\endpreview
\\end{document}
\\end{filecontents*}
\\usepackage{graphicx}
\\immediate\\write18{pdflatex main.tex}
\\immediate\\write18{convert -density 300 -background white -alpha remove main.pdf main.png}
\\begin{document}
The following is a PNG image.\\newline
\\fbox{\\includegraphics{main.png}}
\\end{document}`;

   if (typeof symPyData['latexLine'] !== 'undefined') {
      fs.writeFileSync("host.tex", texFile);
   }
   if (typeof symPyData['latexImgName'] !== 'undefined') {
      var execSync2 = require('child_process').execSync;

      var options2 = {encoding: 'utf8'};

      var cmd2 = "pdflatex --shell-escape host.tex";
      execSync2(cmd2, options2);
   
      fs.renameSync('main.png', '../app/public/imgs/' + symPyData['latexImgName']);
   }

   if (typeof symPyData['plotImgName'] !== 'undefined') {
      fs.renameSync(symPyData['plotImgName'], '../app/public/imgs/' + symPyData['plotImgName']);
   }

   //console.log(texFile);

   answerLine = JSON.stringify(calcResult1);
   response.send(answerLine);
});
app.get("/getPageDataJsFile", function(request, response){
   response.set('Access-Control-Allow-Origin', '*');
   var dataFileName = request.query.dataFileName;

   console.log(dataFileName);
   var fs = require('fs');

   var filePathPart = "../app/";

   var contents = fs.readFileSync(filePathPart + dataFileName, 'utf8');
   //console.log(contents);
   //var dataFileData = {"data": contents};
   var answerLine = JSON.stringify(contents);
   //console.log(answerLine);
   response.send(answerLine);
});
function getPage(newsUrl, getRSSAnswer) {
   var url = require("url");
   var path = url.parse(newsUrl).path;
   var host = url.parse(newsUrl).host;
   const https = require('https')
   //https://www.linux.org.ru/section-rss.jsp
   const options = {
     hostname: host,
     port: 443,
     path: path,
     method: 'GET',
     headers: {
        'Content-Type': 'text/html'
     }
   }

   var req = https.request(options, function(res) {
      //console.log("statusCode: ", res.statusCode);
      //console.log("headers: ", res.headers);

      res.setEncoding('utf8');
      res.on('data', function(d) {
         //process.stdout.write(d);
         getRSSAnswer(d);
      });
   });

   req.end();

   req.on('error', function(e) {
      console.error(e);
   });
}

app.get("/getWebPage", function(req, res){
   res.set('Access-Control-Allow-Origin', '*');
   var urlString = req.query.urlString;
   console.log("urlString:");
   console.log(urlString);

/*
   function getRSSAnswer(answerLine) {
      answerLine = encodeURIComponent(answerLine)
      answerLine = JSON.stringify(answerLine);
      response.send(answerLine);
   }

   var answerLine = getPage(urlString, getRSSAnswer);
*/

    axios.get(urlString)
    .then(function (response) {
        var data = JSON.stringify(response.data);
        //console.log(data);
        res.send(data);
    })
    .catch(function (error) {
        console.log("Error");
        //console.log(error);
    });

});
app.listen(port, host);

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
https.createServer( options, function(req,res) {
    app.handle( req, res );
}).listen(httpsPort);
