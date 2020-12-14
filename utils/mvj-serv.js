//openssl req -nodes -new -x509 -keyout server.key -out server.cert
var fs = require("fs");
var https = require('https');
const fetch = require('node-fetch');
var moment = require('moment');
var dom = require('xmldom').DOMParser;
var xpath = require('xpath');
var execSync = require('child_process').execSync;
var host = "127.0.0.1";
var port = 1337;
var httpsPort = 3001;
var express = require("express");
const axios = require('axios');

var downloadedChannelsList;
var getAllNewsProcessUp = false;

var mvjCodePath = "/home/mike/progr/repo/mm-vis-js/utils/mvj-code.js";

var rootBackupDirPath = "/home/mike/mm-vis-js_serv_backup/";
if (!fs.existsSync(rootBackupDirPath)){
   fs.mkdirSync(rootBackupDirPath);
}

var app = express();

app.use("/public",function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use("/public", express.static(__dirname + "/../app/public"));

function arraysDiffLeftFromRight(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}
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
    var runProject = request.query.runProject;

    if (typeof runProject === "undefined" && runProject != "true") runProject = "false";
    
    //saveData[dataPartNumber] = JSON.parse(dataPart);
 
    var answerLine = JSON.stringify("ok - " + String(dataChunksLength) + " - " + String(dataPartNumber));
    //if (typeof dataPartNumber === "undefined") {
    //	console.log(request.query);
    //}

    var saveJobKey = projectName + "_" + saveTime;
    if (typeof saveData[saveJobKey] === "undefined") {
        saveData[saveJobKey] = {};
    }

    //process.stdout.write(dataPart);
    fs.writeFileSync("./debug/dataPart" + String(dataPartNumber) + ".txt", dataPart);
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
        data = decodeURIComponent(data);
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

      var answerData = {buildProjectName: buildProjectName};
      answerData.errorVal = "";
      answerData.stdoutVal = "";
      answerData.stderrVal = "";

      var exec = require("child_process").execSync;
      var scriptResult = exec(mvjCodePath + " '" + path + "' '" + buildProjectName + "' '" + runProject + "'",
         (error, stdout, stderr) => {
            if (error != null && error.trim() != "") {
               answerData.errorVal = error.trim();
               console.log("exec error: " + error);
            }
            if (stdout != null && stdout.trim() != "") {
               answerData.stdoutVal = stdout.trim();
               console.log("stdout: " + stdout);   
            }
            if (stderr != null && stderr.trim() != "") {
               answerData.stderrVal = stderr.trim();
               console.log("stderr: " + stderr); 
            }
            //console.log(`exec error: ${error}`);
         }).toString();
      answerData.scriptResult = scriptResult;
      if (runProject == "true") {
         answerData.runProjectCommandResult = answerData.scriptResult.split("runProjectResult:")[1].trim();
      }
      console.log(answerData.scriptResult);
      //console.log(JSON.stringify(answerData));
      answerLine = JSON.stringify(answerData);
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
var waitForTimeLine = "";
var jobStartTime;
var jobEndTime;

function alignRawNodesLeft(nodes) {
   var canvas = network.canvas.frame.canvas;
   var ctx = canvas.getContext('2d');
   var minLeft;

   for (i = 0; i < nodes.length; i++) {
      var lines = nodes[i].label.match(/.{1,45}/g);
      if (lines == null) lines = [""];
      var line = lines[0];
      var width = ctx.measureText(line).width*1.37 + 10;
      if (i == 0) minLeft = nodes[i].x - width/2;
      if (minLeft > (nodes[i].x - width/2)) {
         minLeft = (nodes[i].x - width/2);
      };
   }

   for (i = 0; i < nodes.length; i++) {
      var lines = nodes[i].label.match(/.{1,45}/g);
      if (lines == null) lines = [""];
      var line = lines[0];
      var width = ctx.measureText(line).width*1.37 + 10;
      var leftDiff = nodes[i].x - width/2 - parseFloat(minLeft.toFixed(5));
      nodes[i].x = nodes[i].x - leftDiff;
   }

}
function waitForTime(checkDate, verboseBool) {
   var lastDateString = ""; 
   while(checkDate > moment()) {
      var currentDateString = newsDateFormat(moment().toDate());
      if (lastDateString != currentDateString) {
         if (verboseBool) {
            console.log("CurrentDateString: " + currentDateString + ". dateLine to wait: " + newsDateFormat(checkDate.toDate()));
         }
         lastDateString = currentDateString;
      }
   };
}
function newsDateFormat(date) {
   return ("0" + date.getDate()).slice(-2) + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." +
    date.getFullYear() + ", " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
}
function getLinksFromDataCash(nodeId, newsFileData) {
   links = [];
   if (typeof newsFileData.data.dataCash === "undefined") return links;
   if (typeof newsFileData.data.dataCash[nodeId] === "undefined") return links;
   newsFileData.data.dataCash[nodeId].nodes.forEach(function(node) {
      if (typeof node.link !== "undefined") {
         links.push(node.link);
      }
   });
   return links;
}
function getTreeCurrentLinks(rootNodeId, newsFileData) {
   var codeEdges = [];
   Object.keys(newsFileData.edges).forEach(function(edgeKey) {
      var edge = newsFileData.edges[edgeKey];
      if (edge.from == rootNodeId) {
         codeEdges.push(edge);
      }
   });

   var branchCodeNodes = [];
   codeEdges.forEach(function(codeEdge) {
      var endNode = newsFileData.nodes[codeEdge.to];
      if (typeof endNode !== "undefined") {
            branchCodeNodes.push(endNode);
      }
   });
   var links = [];
   links = links.concat(getLinksFromDataCash(rootNodeId, newsFileData));
   branchCodeNodes.forEach(function(branchNode) {
      if (typeof branchNode.link !== "undefined" && branchNode.link != null) {
         links.push(branchNode.link);
      }
      links = links.concat(getTreeCurrentLinks(branchNode.id, newsFileData));
      links = links.concat(getLinksFromDataCash(branchNode.id, newsFileData));
   });
   return links;
}
function moveNewNewsTreeToTop(nodes, rootNode) {
   var bottomNode = nodes[0];
   nodes.forEach(function(node) {
      if (node.y > bottomNode.y) {
         bottomNode = node;
      }
   });
   var rootNodeAndTreeBottomNodeCurrentDiff = bottomNode.y - rootNode.y;
   var rootNodeAndTreeBottomNodeSetupDiff = 50;
   var yShift = rootNodeAndTreeBottomNodeCurrentDiff + rootNodeAndTreeBottomNodeSetupDiff;
   nodes.forEach(function(node) {
      //network.nodesHandler.moveNode(node.id, node.x, node.y - yShift);
      node.y = node.y - yShift;
   });
}
function getTreeNodesAndEdges(rootNodeId, allNodes, allEdges) {

   if (typeof allNodes[rootNodeId] === "undefined") {
      return null;
   }

   var rootBranchesEdges = [];
   Object.keys(allEdges).forEach(function(edgeNodeId) {
      var edge = allEdges[edgeNodeId];
      if (edge.from == rootNodeId) {
         rootBranchesEdges.push(edge);
      }
   });

   var branchNodes = [];
   rootBranchesEdges.forEach(function(rootBranchesEdge) {
      if (typeof allNodes[rootBranchesEdge.to] === "undefined") return;
      branchNodes.push(allNodes[rootBranchesEdge.to]);
   });

   var branchesNodesAndEdges = {
      nodes:  [],
      edges: rootBranchesEdges
   };

   branchNodes.forEach(function(branchNode) {
      branchesNodesAndEdges.nodes.push(branchNode);
      var branchesData = getTreeNodesAndEdges(branchNode.id, allNodes, allEdges);
      branchesNodesAndEdges.nodes = branchesNodesAndEdges.nodes.concat(branchesData.nodes);
      branchesNodesAndEdges.edges = branchesNodesAndEdges.edges.concat(branchesData.edges);
   });
   return branchesNodesAndEdges;
}
function saveNewsChannelsDownloadedData(newsData) {

   //console.log(newsChannelsData);

   //return;

   var rootSaveDir = "newsDownloadedData";

   if (!fs.existsSync(rootSaveDir)){
       fs.mkdirSync(rootSaveDir);
   }

   var newsChannelsDataString = JSON.stringify(newsData.newsChannelsData, undefined, 2);

   var dirName = "newsDownloadedData_" + newsDateFormat(newsData.jobStartTime.toDate());
   var fileName = "newsDownloadedData_" + newsDateFormat(newsData.jobStartTime.toDate()) + ".json"

   if (!fs.existsSync(rootSaveDir + "/" + dirName)){
       fs.mkdirSync(rootSaveDir + "/" + dirName);
   }  

   //prepare and save data for each news file.
   Object.keys(newsData.newsFilesData).forEach(function(dataFileName) {
      var fileNewsChannelsData = {
         downloadStartDate: newsData.newsChannelsData.downloadStartDate,
         newsChannelsDataList: []
      };

      var newsFileData = newsData.newsFilesData[dataFileName];

      newsFileData.channelsNodes.forEach(function(channelNode) {
         newsData.newsChannelsData.newsChannelsDataList.forEach(function(toCheckNewsChannelData) {
            if (toCheckNewsChannelData.channelNode.label == channelNode.label) {
               fileNewsChannelsData.newsChannelsDataList.push(toCheckNewsChannelData);
            }
         });
      });

      fileNewsChannelsData.channelsList = [];
      newsFileData.channelsNodes.forEach(function(channelNode) {
         fileNewsChannelsData.channelsList.push(channelNode.label);
      });

      fileNewsChannelsData.channelsList.sort(function (a, b) {
         return a.toLowerCase().localeCompare(b.toLowerCase());
      });

      fileNewsChannelsData.downloadedDataStats = {};
      fileNewsChannelsData.downloadedDataStats.downloadedChannelsStats = [];

      fileNewsChannelsData.newsChannelsDataList.forEach(function(data, index) {
         fileNewsChannelsData.downloadedDataStats.downloadedChannelsStats.push(data.channelDownloadDate + ", " + index + ". " + data.channelNode.label + ": " + data.newNewsList.length);
      });

      fileNewsChannelsData.downloadedDataStats.downloadedChannelsStats.jobSeconds = newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats.jobSeconds;
      fileNewsChannelsData.downloadedDataStats.downloadedChannelsStats.jobTime = newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats.jobTime;
   
      var fileNewsChannelsDataString = JSON.stringify(fileNewsChannelsData, undefined, 2);

      var fileName1 = "newsDownloadedData_" + dataFileName + "_" + newsDateFormat(newsData.jobStartTime.toDate()) + ".json"
      fs.writeFileSync(rootSaveDir + "/" + dirName + "/" + fileName1, fileNewsChannelsDataString);    
   });

   fs.writeFileSync(rootSaveDir + "/" + dirName + "/" + fileName, newsChannelsDataString);

   console.log("DONE. Save to file");
}
function getNewsItemDataDateLine(elem) {

   var dateLine = "";
   var doc1 = new dom().parseFromString(elem.toString());
   var pubDate = xpath.evaluate("//*[local-name()='pubDate']", doc1, null, xpath.XPathResult.ANY_TYPE, null).iterateNext();

   var doc2 = new dom().parseFromString(elem.toString());
   var dcDate = xpath.select('//*[name()="dc:date"]', doc2)[0];

   var doc3 = new dom().parseFromString(elem.toString());
   var published = xpath.select("//*[local-name()='published']", doc3)[0];

   var doc4 = new dom().parseFromString(elem.toString());
   var updated = xpath.select("//*[local-name()='updated']", doc4)[0];

   if (typeof pubDate !== "undefined" && 
       pubDate !== null && 
       pubDate.textContent.trim() != "") {
      pubDate = pubDate.textContent.trim();
      dateLine = pubDate;
   } else if (typeof dcDate !== "undefined" && 
              dcDate !== null && 
              dcDate.textContent.trim() != "") {
      dcDate = dcDate.textContent.trim();
      dateLine = dcDate;
   } else if (typeof published !== "undefined" && 
              published !== null && 
              published.textContent.trim() != "") {
      published = published.textContent.trim();
      dateLine = published;
   } else if (typeof updated !== "undefined" && 
              updated !== null && 
              updated.textContent.trim() != "") {
      updated = updated.textContent.trim();
      dateLine = updated;
   }
   return dateLine;
}
function getNewsItemDataLink(elem) {

   var linkLine = "";

   var doc1 = new dom().parseFromString(elem.toString());
   var guid = xpath.select("//*[local-name()='guid']", doc1)[0];

   var doc2 = new dom().parseFromString(elem.toString());
   var link = xpath.select("//*[local-name()='link']", doc2)[0];

   var linkHref = xpath.select("//*[local-name()='link']/@href", doc2)[0];

   if (typeof guid !== "undefined" && 
       guid !== null && 
       guid.textContent.trim() != "" && 
       guid.textContent.trim().match(/^http/) != null) {
      guid = guid.textContent.trim();
      linkLine = guid;
   } else if (typeof link !== "undefined" && 
              link !== null && 
              link.textContent.trim() != "") {
      linkLine = link.textContent.trim();
   } else if (typeof linkHref !== "undefined" && 
              linkHref !== null && 
              linkHref.textContent.trim() != "") {
      linkLine = linkHref.textContent.trim();
   }

   //For dzone.com
   if (typeof link !== "undefined" && 
              link !== null &&
              link.textContent.trim().match(/dzone.com\/articles/) != null) {
      linkLine = link.textContent.trim();
   }
   
   if (linkLine == "") {
      linkLine = elem.toString().split("\n").join("").replace("<!--","").replace("-->","");
      linkLine = linkLine.replace(/.*?<link>(.*?http.+?)<.*/g,"$1");
      linkLine = linkLine.replace("<!--","").replace("-->","");
      linkLine = linkLine.replace(/\[CDATA\[ /g,"");
      linkLine = linkLine.replace(/ \]\]/g,"").trim();
  
   }
   return linkLine;
}
function getNewsItemDataTitle(elem) {

   var doc = new dom().parseFromString(elem.toString());
   var title = xpath.select("//*[local-name()='title']", doc);
   title = title[0].textContent.trim();
   
   title = title.replace(/<\!\[CDATA\[/,"");
   title = title.replace(/\]\]>/,"");
   
   var titleNodeLines = [];
   var parts = title.match(/.{1,45}/g);
   if (parts != null) {
      parts.forEach(function(part) {
         part = part.trim();
         if (part != "") {
            titleNodeLines.push(part);
         }
      });
   }
   var title = titleNodeLines.join("\n");
   return title
}
function getNewsItemDataSummaryTextNodeLabel(elem) {

   var summaryText = "";
   
   var doc1 = new dom().parseFromString(elem.toString());
   var description = xpath.select("//*[local-name()='description']", doc1)[0];

   var doc2 = new dom().parseFromString(elem.toString());
   var summary = xpath.select("//*[local-name()='summary']", doc2)[0];

   var doc3 = new dom().parseFromString(elem.toString());
   var content = xpath.select("//*[local-name()='content']", doc3)[0];

   var doc4 = new dom().parseFromString(elem.toString());
   var fullText = xpath.select("//*[local-name()='full-text']", doc4)[0];

   var doc5 = new dom().parseFromString(elem.toString());
   var contentEncoded = xpath.select('//*[name()="content:encoded"]', doc5)[0];

   if (typeof fullText !== "undefined" && 
       fullText !== null && 
       fullText.toString().trim() != "" && 
       fullText.toString().trim().length > 30) {
      fullText = fullText.toString().trim();
      summaryText = fullText;
   } else if (typeof description !== "undefined" && 
              description !== null && 
              description.toString().trim() != "") {
      description = description.toString().trim();
      summaryText = description;
   } else if (typeof summary !== "undefined" && 
              summary !== null && 
              summary.toString().trim() != "") {
      summaryText = summary.toString().trim();
   } else if (typeof content !== "undefined" && 
              content !== null && 
              content.toString().trim() != "") {
      summaryText = content.toString().trim();
   } else if (typeof contentEncoded !== "undefined" && 
              contentEncoded !== null && 
              contentEncoded.toString().trim() != "") {
      summaryText = contentEncoded.toString().trim();
   }
   
   //summaryText = summaryText.replace(/-->[\s\S]*.*/g,"-->");
   summaryText = summaryText.replace(/We Recommend:<\/font>[\s\S]*.*/g,"");
   summaryText = summaryText.replace(/<item>[\s\S]*.*/g,"");

   var newNodeLines = [];
   var lines = summaryText.split("\n");
   lines.forEach(function(line) {
      var parts = line.match(/.{1,100}/g);
      if (parts != null) {
         parts.forEach(function(part) {
            part = part.trim();
            if (part != "") {
               newNodeLines.push(part);
            }
         });
      }
   });

   var summaryTextNodeLabel = newNodeLines.join("\n");
   return summaryTextNodeLabel;
}
function getNewsItemData(item, channelNode) {

   var linkLine = getNewsItemDataLink(item);
   var title = getNewsItemDataTitle(item);
   var summaryTextNodeLabel = getNewsItemDataSummaryTextNodeLabel(item);
   var dateLine = getNewsItemDataDateLine(item);
   if (typeof linkLine !== "undefined") linkLine = linkLine.replace("gen.lib.rus.ec","libgen.rs");
   if (channelNode.label == "Libgen | Feed Node") {
      result = summaryTextNodeLabel.match(/Date Added:<\/font><\/td><td>(.*?)<\/td>/);
      if (result != null) dateLine = result[1];
   }
   
   object = {}
   object.pubDate = dateLine;
   object.title = title;
   object.link = linkLine;
   object.summaryTextNodeLabel = summaryTextNodeLabel;
   return object;
}
function closingNewsDownloadProcess(newsData) {
   //promise1 = promise1.then(function(value) {
   newsData.jobEndTime = new Date();

   function compare( a, b ) {
      var a = a.channelNode.label.toLowerCase();
      var b = b.channelNode.label.toLowerCase();
      if ( a > b ){
         return -1;
      }
      if ( a < b ){
         return 1;
      }
      return 0;
   }
   newsData.newsChannelsData.newsChannelsDataList = newsData.newsChannelsData.newsChannelsDataList.sort(compare);

   newsData.newsChannelsData.newsChannelsDataList.forEach(function(data, index) {
      console.log(data.channelDownloadDate + ", " + index + ". " + data.channelNode.label + ": " + data.newNewsList.length);
   });

   newsData.newsChannelsData.downloadedDataStats = {};
   newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats = [];

   newsData.newsChannelsData.newsChannelsDataList.forEach(function(data, index) {
      newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats.push(data.channelDownloadDate + ", " + index + ". " + data.channelNode.label + ": " + data.newNewsList.length);
   });

   var jobMillis = newsData.jobEndTime.getTime() - newsData.jobStartTime.toDate().getTime();

   var jobFullSecondsMillisRemainder = jobMillis%1000;
   var jobFullSeconds = (jobMillis - jobFullSecondsMillisRemainder)/1000;

   var jobFullMinutesSecondsRemainder = jobFullSeconds%60;
   var jobFullMinutes = (jobFullSeconds - jobFullMinutesSecondsRemainder)/60;

   var jobFullSecondsRemainder = jobFullSeconds - 60*jobFullMinutes;

   var jobSeconds = "Job seconds: " + String(jobFullSeconds);
   console.log(jobSeconds);
   var jobTime = "Job time: "+String(jobFullMinutes)+"m "+String(jobFullSecondsRemainder)+"s";
   console.log(jobTime);
   console.log("newsData.jobStartTime: " + newsDateFormat(newsData.jobStartTime.toDate()));

   newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats.jobSeconds = jobSeconds;
   newsData.newsChannelsData.downloadedDataStats.downloadedChannelsStats.jobTime = jobTime;

   saveNewsChannelsDownloadedData(newsData);
   //});
   //return promise1;
}
function fetchData(url, channelNode, treeCurrentLinks, newsChannelsData, newsData, channelStartTime, index) {

   var dataFileName = newsData.allChannelsMap[channelNode.label].channelFileName;

   //var channelDownloadDate = newsDateFormat(new Date());
   var channelDownloadDate = newsDateFormat(channelStartTime.toDate());
   
   waitForTime(channelStartTime, false);

   console.log("channelDownloadDate: " + channelDownloadDate + ", downloadStartDate: " + newsChannelsData.downloadStartDate);

   return fetch(url)
      .then(function(response){
         return response.json();
      })
      .then(function(response) {
   
         var data = response.trim();

         if (data == "Error") {
            console.log("Youtube Download Error!!!");
            newsData.downloadErrorsChannelsList.push([dataFileName, channelNode.label]);
         }

         var itemsObjects = [];
         var itemsObjectsFilteredByLinks = [];
     
         if (newsData.youtubeDownload) {

            var doc = new dom().parseFromString(data, 'text/html');
            var rslt = xpath.evaluate("//*[local-name()='script']", doc, null, xpath.XPathResult.ANY_TYPE, null);
            var pageDataCode = "";
            while(node = rslt.iterateNext()) {
               if (node.toString().match(/window\["ytInitialData"\]/g,"") !== null) {
                  pageDataCode = node.toString();
               }
            }

            //var vidsMatches = pageDataCode.match(/"title":\{"accessibility":\{"accessibilityData.*?\}\},"simpleText.*?publishedTimeText.*?webPageType/g);
            var vidsMatches = pageDataCode.match(/title":\{"runs":\[\{"text":".*?"\}\],"access.*?webCommandMetadata":\{"url":".*?",/g);
            if (vidsMatches !== null) {
               vidsMatches.forEach(function(vidMatch) {
                  var object = {};
                  //object.title = vidMatch.replace(/.*\}\},"simpleText":"(.*?)"\},".*/,"$1");
                  object.title = vidMatch.replace(/.*title":\{"runs":\[\{"text":"(.*?)"\}.*?webCommandMetadata.*/,"$1");
                  object.link = "https://www.youtube.com" + vidMatch.replace(/.*\{"url":"(.*?)",.*/,"$1");
                  itemsObjects.push(object);
               });
            }
            //Check new news item
            itemsObjects.forEach(function(item) {
               if (treeCurrentLinks.indexOf(item.link) < 0 && item.link.match(/watch\?v=/) != null) {
                  itemsObjectsFilteredByLinks.push(item);
               }   
            });

         } else {

            var doc = new dom().parseFromString(data);
            var rslt = xpath.evaluate("//*[local-name()='item']", doc, null, xpath.XPathResult.ANY_TYPE, null);

            var items = [];
            while(node = rslt.iterateNext()) {
               items.push(node);
            }

            if (items.length == 0) {

            var doc = new dom().parseFromString(data);
            var rslt = xpath.evaluate("//*[local-name()='entry']", doc, null, xpath.XPathResult.ANY_TYPE, null);
               while(node = rslt.iterateNext()) {
                  items.push(node);
               }
            }

            //items = items.slice(0,50);
   
            console.log("items.length: " + items.length);
            items.forEach(function(item) {
               var itemData = getNewsItemData(item, channelNode);
               itemsObjects.push(itemData);
            });

            //Check new news item
            itemsObjects.forEach(function(item) {
               if (treeCurrentLinks.indexOf(item.link) < 0) {
                  itemsObjectsFilteredByLinks.push(item);
               }   
            });
         
         }

         var channelData = {
            channelNode: newsData.newsFilesData[dataFileName].nodes[channelNode.id],
            newNewsList: itemsObjectsFilteredByLinks,
            channelDownloadDate: channelDownloadDate
         };

         if (itemsObjectsFilteredByLinks.length > 0) {
            newsChannelsData.newsChannelsDataList.push(channelData);
         }

         console.log("itemsObjectsFilteredByLinks.length: " + itemsObjectsFilteredByLinks.length);

         downloadedChannelsList.push(channelNode.label);

         console.log("downloadedChannelsList.length: " + downloadedChannelsList.length);

         console.log("newsData.downloadErrorsChannelsList: " + newsData.downloadErrorsChannelsList);

         var showLastChannelsListSize = 5;
         if (newsData.youtubeDownload) showLastChannelsListSize = 80;

         if ( ( Object.keys(newsData.allChannelsMap).length - downloadedChannelsList.length ) < showLastChannelsListSize ) {
            var diffArray = arraysDiffLeftFromRight(Object.keys(newsData.allChannelsMap), downloadedChannelsList);
            diffArray.forEach(function(item, index) {
               var fileName = newsData.allChannelsMap[item].channelFileName;
               console.log(index + ". " + fileName + ". " + item);
            });
         } 

         //if (downloadedChannelsList.length == (Object.keys(newsData.allChannelsMap).length)) {
         if ((index + 1) == (Object.keys(newsData.allChannelsMap).length)) {
            closingNewsDownloadProcess(newsData);

            var answerLine = "";
            for (var key in newsData.allChannelsMap) {
               answerLine += newsData.allChannelsMap[key].channelNode.label + "<br>";
               answerLine += newsData.allChannelsMap[key].channelNode.link + "<br>";
            }

            newsData.getNewsResponse.send(answerLine);
            getAllNewsProcessUp = false;

         }

         return response;
      })
      .catch(function(error){console.log(error);});
}
function getChannelNewsData(ytbChannelNode, index, sessionDateNodeId, newsChannelsData, newsData, channelStartTime) {

   console.log(ytbChannelNode.label + ". " + String(index + 1) + ". " + String(Object.keys(newsData.allChannelsMap).length));

   var urlString = ytbChannelNode.link;

   var params = {
      urlString: urlString
   };

   url = "http://localhost:1337/getWebPage" + "?origin=*";
   Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

   var dataFileName = newsData.allChannelsMap[ytbChannelNode.label].channelFileName;
   var allFileEdges = newsData.newsFilesData[dataFileName].edges;
   var newsListNodes = [];
   Object.keys(allFileEdges).forEach(function(edgeKey) {
      var edge = allFileEdges[edgeKey];
      if (edge.from == ytbChannelNode.id) {
         endNode = newsData.newsFilesData[dataFileName].nodes[edge.to];
         if (typeof endNode !== "undefined" && endNode.label == "newsList") {
            newsListNodes.push(endNode);
         }
      }
   });

   if (newsListNodes.length == 0) {
      if ((index+1) == Object.keys(newsData.allChannelsMap).length) {
         console.log("restoreAllAfterNewsDownload()");
         //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
         //restoreAllAfterNewsDownload();
      }
      return;
   }

   var nListNode = newsListNodes[0];
   var nLNode = newsListNodes[0];

   var treeCurrentLinks = getTreeCurrentLinks(nListNode.id, newsData.newsFilesData[dataFileName]);

   return fetchData(url, ytbChannelNode, treeCurrentLinks, newsChannelsData, newsData, channelStartTime, index);
}
function newsDownloadProcess(newsData) {

var sessionDateNodeId = null;
var promise1 = null;

//newsData.jobStartTime = new Date();
newsData.jobStartTime = newsData.queryStartDate;

newsData.newsChannelsData = {
   downloadStartDate: newsDateFormat(newsData.jobStartTime.toDate()),
   newsChannelsDataList: []
};

newsData.newsChannelsData.channelsList = Object.keys(newsData.allChannelsMap).sort(function (a, b) {
   return a.toLowerCase().localeCompare(b.toLowerCase());
});

function waitForTime(dateLine) {
   var lastDate = ""; 
   while(1 < 2) {
      var date = new Date().toLocaleString("ru-RU");
      if (lastDate != date) {
         console.log(date + ". dateLine to wait: " + dateLine);
      }
      if (dateLine == date) {
         return;
      }
      lastDate = date;
   };
}

   Object.keys(newsData.allChannelsMap).sort().forEach(function(channelLabel, index) {

      var channelStartTime = newsData.jobStartTime.clone().add(newsData.channelsDownloadTimeStep*index, 's');

      if (promise1 == null) {

         //#promisePrepare = new Promise(function(resolve, reject) {
                 //#waitForTime(waitForTimeLine);
                 //#waitForTimeLine = "07.08.2020, 0:25:05";
                 //#if (waitForTimeLine != "") {
                 //#   newsChannelsData.downloadStartDate = waitForTimeLine;
                 //#   waitForTime(waitForTimeLine);
                 //#}

         //#        //#resolve();
         //#});

         promise1 = getChannelNewsData(newsData.allChannelsMap[channelLabel].channelNode, index, sessionDateNodeId, newsData.newsChannelsData, newsData, channelStartTime);

      } else {

         promise1 = promise1.then(function(value) {
            console.log("Object.keys(newsData.allChannelsMap).length: " + Object.keys(newsData.allChannelsMap).length);
            console.log("index: " + index);
           
            var channelNewsData = getChannelNewsData(newsData.allChannelsMap[channelLabel].channelNode, index, sessionDateNodeId, newsData.newsChannelsData, newsData, channelStartTime);

            return channelNewsData;
         });
      }
   });
}
app.get("/getAllNews", function(request, response){
   if (getAllNewsProcessUp) return;
   getAllNewsProcessUp = true;
   response.set('Access-Control-Allow-Origin', '*');
   //2020-08-27T16:45:00
   //https://localhost:3001/getAllNews?startDateLine=2020-08-27T10:20:10
   //http://localhost:1337/getAllNews?startDateLine=2020-08-27T10:20:10&youtube=false
   //curl "http://localhost:1337/getAllNews?startDateLine=2020-08-27T10:20:10&youtube=false"
   console.log("request.query: " + request.query);
   var queryStartDateLine = request.query.startDateLine;
   var queryYoutubeDownload = request.query.youtube;

   console.log("getAllNews");

   downloadedChannelsList = [];

   var newsData = {
      channelsDownloadTimeStep: 1,
      allChannelsMap: {},
      getNewsResponse: response,
      filePathPart: "../app/",
      youtubeDownload: false,
      downloadErrorsChannelsList: []
   };
   newsData.newsFilesData = {};
   newsData.newsFilesData["news1.data.js"] = {rootNodeId: "indx1_571"};
   newsData.newsFilesData["news11.data.js"] = {rootNodeId: "indx1_571"};
   newsData.newsFilesData["news2.data.js"] = {rootNodeId: "indx1_352"};
   newsData.newsFilesData["news3.data.js"] = {rootNodeId: "indx1_274"};
   newsData.newsFilesData["news4.data.js"] = {rootNodeId: "indx1_459"};
   newsData.newsFilesData["news41.data.js"] = {rootNodeId: "indx1_273"};
   newsData.newsFilesData["news5.data.js"] = {rootNodeId: "indx1_287"};
   newsData.newsFilesData["news51.data.js"] = {rootNodeId: "indx1_245"};
   newsData.newsFilesData["news52.data.js"] = {rootNodeId: "indx1_219"};
   newsData.newsFilesData["news53.data.js"] = {rootNodeId: "indx1_219"};
   newsData.newsFilesData["news6.data.js"] = {rootNodeId: "indx1_287"};
   newsData.newsFilesData["news61.data.js"] = {rootNodeId: "indx1_251"};
   newsData.newsFilesData["news7.data.js"] = {rootNodeId: "indx1_251"};
   var newsDataYoutube = {
      channelsDownloadTimeStep: 1,
      allChannelsMap: {},
      getNewsResponse: response,
      filePathPart: "../app/",
      youtubeDownload: true,
      downloadErrorsChannelsList: []
   };
   newsDataYoutube.newsFilesData = {};
   newsDataYoutube.newsFilesData["youtube1.data.js"] = {rootNodeId: "indx1_1005"};
   newsDataYoutube.newsFilesData["youtube2.data.js"] = {rootNodeId: "indx1_1786"};
   newsDataYoutube.newsFilesData["youtube3.data.js"] = {rootNodeId: "indx1_1786"};

   console.log("request.query.youtube: " + request.query.youtube);
   if (typeof queryYoutubeDownload !== "undefined" && queryYoutubeDownload == "true") {
      //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      newsData = newsDataYoutube;
   }

   console.log("queryStartDateLine: " + queryStartDateLine);
   newsData.queryStartDate = moment(queryStartDateLine);

   var fs = require('fs');

   //var filePathPart = "../app/";

   //newsData.allChannelsNodes = [];

   //Collect news channels data from news files
   Object.keys(newsData.newsFilesData).forEach(function(dataFileName, index) {
      console.log(dataFileName);
//if (index != 0) return;
      var contents = fs.readFileSync(newsData.filePathPart + dataFileName, 'utf8');
      var dataFileData = contents.trim();

      dataFileData = dataFileData.split("\n");
      dataFileData.shift();
      dataFileData.pop();
      dataFileData = dataFileData.join("\n");
      dataFileData = JSON.parse(dataFileData);
      newsData.newsFilesData[dataFileName].data = dataFileData;
      newsData.newsFilesData[dataFileName].nodes = dataFileData.canvas1Data.nodes._data;
      newsData.newsFilesData[dataFileName].edges = dataFileData.canvas1Data.edges._data;
      newsData.newsFilesData[dataFileName].channelsNodes = [];

      var rootNodeId = newsData.newsFilesData[dataFileName].rootNodeId;

      var treeNodes = getTreeNodesAndEdges(
         rootNodeId, 
         newsData.newsFilesData[dataFileName].nodes, 
         newsData.newsFilesData[dataFileName].edges).nodes;
      console.log("treeNodes.length: " + treeNodes.length);
      treeNodes.forEach(function(node) {
         if (newsData.youtubeDownload) {
            if (typeof node.link !== "undefined" && 
                node.label.endsWith(" - YouTube") &&
                node.link.match(/.*youtube.*videos.*/) != null) {
               newsData.allChannelsMap[node.label] = {channelNode: node, channelFileName: dataFileName};
               newsData.newsFilesData[dataFileName].channelsNodes.push(node);
            }
         } else {
            if (typeof node.link !== "undefined" && 
                node.label.endsWith(" | Feed Node")) {
               newsData.allChannelsMap[node.label] = {channelNode: node, channelFileName: dataFileName};
               newsData.newsFilesData[dataFileName].channelsNodes.push(node);
            }
         }
      });      
   });

   console.log(Object.keys(newsData.allChannelsMap).sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
   }));

   //var dataFileData = {"data": contents};
   //var answerLine = JSON.stringify(contents);

   waitForTime(newsData.queryStartDate, true);

   var allDownloadedData = newsDownloadProcess(newsData);
   //saveAllDownloadedDataToFile(allDownloadedData, filePath);

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
   console.log("/getWebPage -> urlString: " + urlString);

/*
   function getRSSAnswer(answerLine) {
      answerLine = encodeURIComponent(answerLine)
      answerLine = JSON.stringify(answerLine);
      response.send(answerLine);
   }

   var answerLine = getPage(urlString, getRSSAnswer);
*/

   var urlsToProxy = [
      "http://gen.lib.rus.ec/rss/index.php"
   ];

   if (urlsToProxy.indexOf(urlString) != -1) {
      var execSync1 = require('child_process').execSync;

      var options = {encoding: 'utf8'};

      var result = execSync1("/usr/bin/ruby /home/mike/progr/repo/mm-vis-js/utils/ruby_proxy.rb " + urlString, options);

     var data = JSON.stringify(result);

     res.send(data);
   } else {

    var userAgentString = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"

    axios.get(urlString, { headers: { 'User-Agent': userAgentString }  })
    .then(function (response) {
        var data = JSON.stringify(response.data);
        //console.log(data);
        res.send(data);
    })
    .catch(function (error) {
        console.log("Error");
        //console.log(error);
        var data = JSON.stringify("Error");
        res.send(data);
    });
   }

});
app.get("/getSavedNewsData", function(req, res){
   res.set('Access-Control-Allow-Origin', '*');
   var newsDataFilePath = req.query.newsDataFilePath;
   console.log("/getSavedNewsData -> newsDataFilePath: " + newsDataFilePath);

   var currentWorkNewsDataDateSetupFilePath = "/home/mike/progr/repo/mm-vis-js/utils/currentNewsDataDate.txt";

   var currentWorkNewsDataDates = fs.readFileSync(currentWorkNewsDataDateSetupFilePath, 'utf8').trim();
   var currentWorkNewsDataDatesList = currentWorkNewsDataDates.split("\n");
   var currentWorkNewsDataDatesListFiltered = [];
   for (var i in currentWorkNewsDataDatesList) {
      var line = currentWorkNewsDataDatesList[i].trim();
      if ((line.lastIndexOf("#", 0) !== 0) && 
          (line != "")) {
         var dateLine = line.replace(/#.*/g, "");
         currentWorkNewsDataDatesListFiltered.push(dateLine);
      }
   }

   if (currentWorkNewsDataDatesListFiltered.length == 0) {
      console.log("currentWorkNewsDataDatesListFiltered.length == 0");
      console.log("currentWorkNewsDataDateSetupFilePath: " + currentWorkNewsDataDateSetupFilePath);
      console.log("currentWorkNewsDataDates: " + currentWorkNewsDataDates);
      var data = JSON.stringify("Error. mvj-serv.js. /getSavedNewsData. currentWorkNewsDataDatesListFiltered.length == 0");
      res.send(data);
      return;
   }

   var newsData = {};

   for (var i in currentWorkNewsDataDatesListFiltered) {
      var dirDateLine = currentWorkNewsDataDatesListFiltered[i].trim();
      var fileDateLine = currentWorkNewsDataDatesListFiltered[i].trim().replace(" y", "").replace(" rss", "");
      var workNewsDataPath = "/home/mike/progr/repo/mm-vis-js/utils/newsDownloadedData/" +
                          "newsDownloadedData_" + dirDateLine + 
                          "/newsDownloadedData_" + fileDateLine + ".json";

      console.log("workNewsDataPath: " + workNewsDataPath);

      newsData[fileDateLine] = JSON.parse(fs.readFileSync(workNewsDataPath, 'utf8').trim());
   }

   var data = JSON.stringify(newsData);
   res.send(data);

});
app.get("/indexes", function(request, response){
   response.set('Access-Control-Allow-Origin', '*');
   var fileName = request.query.fileName;
   console.log("/indexes -> fileName: " + fileName);
   //https://localhost:3001/indexes?fileName=news2.data.js

   var fs = require('fs');

filesData = {};
filesData["news1.data.js"] = "news1.data.js";
filesData["news11.data.js"] = "news11.data.js";
filesData["news2.data.js"] = "news2.data.js";
filesData["news3.data.js"] = "news3.data.js";
filesData["news4.data.js"] = "news4.data.js";
filesData["news41.data.js"] = "news41.data.js";
filesData["news5.data.js"] = "news5.data.js";
filesData["news51.data.js"] = "news51.data.js";
filesData["news52.data.js"] = "news52.data.js";
filesData["news53.data.js"] = "news53.data.js";
filesData["news6.data.js"] = "news6.data.js";
filesData["news61.data.js"] = "news61.data.js";
filesData["news7.data.js"] = "news7.data.js";
filesData["youtube1.data.js"] = "youtube1.data.js";
filesData["youtube2.data.js"] = "youtube2.data.js";
filesData["youtube3.data.js"] = "youtube3.data.js";
filesData["mm-vis-js_code.data.js"] = "mm-vis-js_code.data.js";
filesData["mm-vis-js_docs.data.js"] = "mm-vis-js_docs.data.js";
filesData["index.data.js"] = "index.data.js";
filesData["base.data.js"] = "base.data.js";
filesData["culture.data.js"] = "culture.data.js";
filesData["ruby.data.js"] = "ruby.data.js";
filesData["javascript.data.js"] = "javascript.data.js";
filesData["python.data.js"] = "python.data.js";
filesData["music1.data.js"] = "music1.data.js";
filesData["music2.data.js"] = "music2.data.js";
filesData["math.data.js"] = "math.data.js";
filesData["code.data.js"] = "code.data.js";
filesData["engineering.data.js"] = "engineering.data.js";
filesData["nature.data.js"] = "nature.data.js";
filesData["timelines.data.js"] = "timelines.data.js";
filesData["java.data.js"] = "java.data.js";
filesData["java-api.data.js"] = "java-api.data.js";
filesData["sa1.data.js"] = "sa1.data.js";
filesData["lisp.data.js"] = "lisp.data.js";

function rebuildIndexes(fileName) {

   console.log("Process file: " + fileName);

   var filePathPart = "../app/";

   var fileString = fs.readFileSync(filePathPart + fileName, 'utf8');
   var fileString = fileString.trim();

   fileString = fileString.split("\n");
   fileString.shift();
   fileString.pop();
   fileString = fileString.join("\n");
   fileData = JSON.parse(fileString);

   workData = {};

   workData.data = fileData;
   workData.nodes = fileData.canvas1Data.nodes._data;
   workData.edges = fileData.canvas1Data.edges._data;

   var allNodes = workData.nodes;
   Object.keys(allNodes).forEach(function(key,index) {
      if (index < 10) {
         //console.log(allNodes[key].id);
      }
   });
   var allEdges = workData.edges;
   Object.keys(allEdges).forEach(function(key,index) {
      if (index < 10) {
         //console.log(allEdges[key].id);
      }
   });
   console.log("allNodes.length: " + Object.keys(allNodes).length);
   console.log("allEdges.length: " + Object.keys(allEdges).length);

   console.log("Object.keys(dataCash).length: " + Object.keys(workData.data.dataCash).length);

   var dataCashNodesIds = [];
   var dataCashEdgesIds = [];

   Object.keys(workData.data.dataCash).forEach(function(dataCashKey) {
      //console.log(dataCashKey);
      var tree = workData.data.dataCash[dataCashKey];
      tree.nodes.forEach(function(node) {
         //console.log(node.id);
         dataCashNodesIds.push(node.id);
      });
      tree.edges.forEach(function(edge) {
         //console.log(edge.id);
         dataCashEdgesIds.push(edge.id);
      });
   });

   console.log("dataCashNodesIds.length: " + dataCashNodesIds.length);
   console.log("dataCashEdgesIds.length: " + dataCashEdgesIds.length);

   var totalNodesIds = Object.keys(allNodes).concat(dataCashNodesIds);
   var totalEdgesIds = Object.keys(allEdges).concat(dataCashEdgesIds);

   console.log("totalNodes.length: " + totalNodesIds.length);
   console.log("totalEdges.length: " + totalEdgesIds.length);

   var totalShortNodesIds = [];
   for (var i in totalNodesIds) {
      var id = totalNodesIds[i];
      if (id.length < 15 ||
          id.lastIndexOf("index-a_", 0) === 0 ||
          id.lastIndexOf("indx1_", 0) === 0 ||
          id.lastIndexOf("indx2_", 0) === 0) totalShortNodesIds.push(id);
   }
   var totalShortEdgesIds = [];
   for (var i in totalEdgesIds) {
      var id = totalEdgesIds[i];
      if (id.length < 15 ||
          id.lastIndexOf("index-a_", 0) === 0 ||
          id.lastIndexOf("indx1_", 0) === 0 ||
          id.lastIndexOf("indx2_", 0) === 0) totalShortEdgesIds.push(id);
   }
   console.log("totalShortNodesIds.length: " + totalShortNodesIds.length);
   console.log("totalShortEdgesIds.length: " + totalShortEdgesIds.length);
   console.log("Unprocessed nodesIds.length: " + (totalNodesIds.length - totalShortNodesIds.length));
   console.log("Unprocessed edgesIds.length: " + (totalEdgesIds.length - totalShortEdgesIds.length));

   var totalIds = totalNodesIds.concat(totalEdgesIds);

   console.log("totalIds.length: " + totalIds.length);

   var totalShortIds = [];
   for (var i in totalIds) {
      var id = totalIds[i];
      if (id.length < 15 ||
          id.lastIndexOf("index-a_", 0) === 0 ||
          id.lastIndexOf("indx1_", 0) === 0 ||
          id.lastIndexOf("indx2_", 0) === 0) totalShortIds.push(id);
   }
   console.log("totalShortIds.length: " + totalShortIds.length);
   console.log("Unprocessed ids: " + (totalIds.length - totalShortIds.length));
   var options = {
      encoding: 'utf8'
   };

   function chunk(arr, chunkSize) {
      var chunksList = [];
      for (var i=0,len=arr.length; i<len; i+=chunkSize)
      chunksList.push(arr.slice(i,i+chunkSize));
      return chunksList;
   }

   var regexesList = [];
   for (var i in totalIds) {
      var id = totalIds[i];
      if (id.length < 15 ||
          id.lastIndexOf("index-a_", 0) === 0 ||
          id.lastIndexOf("indx1_", 0) === 0 ||
          id.lastIndexOf("indx2_", 0) === 0) {
         //console.log("Short id: " + id);
         continue;
      }
      var prefix = "indx2_";
      var newIdShift = parseInt(totalShortIds.length, 10) + 109;
      var newId = parseInt(i, 10) + newIdShift;

      regexesList.push("s/\"" + id + "\"/\"" + prefix + String(newId) + "\"/g");
      
   }

   var chunksList = chunk(regexesList, 100);
  
   for (var i in chunksList) {
      var checkForBreakSignal = fs.readFileSync('stopSedJob.txt', 'utf8').trim();
      if (checkForBreakSignal == "stop") {
         console.log("Job Stopped");
         break;
      }
      var regex = chunksList[i].join("; ");
      var cmd = "sed -i '" + regex + "' " + filePathPart + fileName;
      //console.log(i + ". " + cmd);
      console.log(i + ". " + chunksList[i].length + ". " + fileName);

      //if (i > 100) break;
      
      var execResult = execSync(cmd, options);
   }
   console.log(fileName + ". Done");

}

console.log("Files Queue: ");
console.log(filesData);
console.log("------");
for (var fileName in filesData) {
   console.log("---");
   console.log("Process run: " + fileName);
   rebuildIndexes(filesData[fileName]);
}


var answerLine = JSON.stringify("done");
response.send(answerLine);

});
app.get("/test", function(req, res){
   res.set('Access-Control-Allow-Origin', '*');

   var data = JSON.stringify("Test done.");
   console.log("Test done.");
   res.send(data);

});
app.listen(port, host);

var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
https.createServer( options, function(req,res) {
    app.handle( req, res );
}).listen(httpsPort, function() {
    console.log("mvj-serv.js started");
});
