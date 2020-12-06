//var canvasWidth = 1200;
//var canvasHeight = 800;

var canvasWidthSetup = 100;
var canvasHeightSetup = 100;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var body = null

var showDataButton = null;
var schemeEditNodesMenu = null;
var schemeDataMenu = null;
var schemeDataTextArea = null;

var network = null;
var canvas;
var ctx;
var rect = {}
var selectionRectangleDrag = false;
var drawingSurfaceImageData;
var containerJQ = $("div#network");
var doubleClickTimeThreshold = 300;
var doubleClick = false;
var loadSavedProjectToMenuButton;
var deleteSavedProjectButton;
var projectSaveNodeNamePrefix = "projectSave_";
var saveCanvasProjectDataLine = "saveCanvasProjectData";
var projectSaveIdLine = "projectSaveId";
var nodesToPaste = [];
var edgesToPaste = [];
var themeGraph = false;
var cancelNodeEdit = false;
var cancelEdgeEditVar = false;
var showCursorCoordinates = false;
var pathDelimiter = "/";
var lastEditedNodesIds = [];
var lastEditedEdgesIds = [];
var lastClickPosition = null;
var servUrl = "https://localhost:3001/";
var publicImgsPath = "public/imgs/";
var clipboard = {};
var viewsSaves = {};
var jumpNavigationData = null;
var dataCash = null;
var nodeLabelTextareaExpanded = false;
var edgeLabelTextareaExpanded = false;
var nodesDropDownMenuNodesIds = [];
var dontShowShemeDataMenuPagesList = [
   "news1.html",
   "news11.html",
   "news2.html",
   "news3.html",
   "news4.html",
   "news41.html",
   "news5.html",
   "news51.html",
   "news52.html",
   "news53.html",
   "news6.html",
   "news61.html",
   "news7.html",
   "youtube1.html",
   "youtube2.html",
   "youtube3.html",
   "base.html",
   "start_page.html",
   "tmp.html",
   "tmp1.html",
   "nature.html",
   "timelines.html",
   "music1.html",
   "music2.html",
   "java.html",
   "java-api.html",
   "sa1.html",
   "sa2.html",
   "lisp.html"
];
var lastSelectedNodeId = null;
var lastSelectedEdgeId = null;
var userConfData = undefined
var cursorNodeId = null;
var keyboardMoveSelectedEnabled = false;
var copiedNodeStyleColor = "";
var copiedNodeStyleFontSize = "";
var nextOperationMultiplier = "";
document.alertCounter = 0;
//Colors:
//"#ffc63b"
//"#FFD570" - lighter
//"#af55f4" - goals and questions
//"DodgerBlue" - blue
///////////////////////////////////
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
		function(m, key, value) {
			vars[key] = value;
		});
	return vars;
}
function objectToArray(obj) {
	return Object.keys(obj).map(function (key) {
		obj[key].id = key;
		return obj[key];
	});
}
if (typeof code_data1 !== "undefined") {
	objectToArray(code_data1).forEach(function(item) {
		schemeData.canvas1Data.nodes._data[item.id] = item;
	});
}

if (typeof book_imgs !== "undefined") {
	objectToArray(book_imgs).forEach(function(item) {
		schemeData.canvas2Data.nodes._data[item.id] = item;
	});
}
var scaleFromUrl = getUrlVars()["scale"];
var xFromUrl = getUrlVars()["x"];
var yFromUrl = getUrlVars()["y"];

if (typeof scaleFromUrl !== "undefined") {
	schemeData.setup.scale = scaleFromUrl;
}

if (typeof xFromUrl !== "undefined") {
	schemeData.setup.viewPosition.x = xFromUrl;
}

if (typeof yFromUrl !== "undefined") {
	schemeData.setup.viewPosition.y = yFromUrl;
}

var goalNodeLabel = getUrlVars()["nodeLabel"];
var goalNodeFontSize = getUrlVars()["nodeFontSize"];
var goalNodeColor = getUrlVars()["nodeColor"];


if (typeof goalNodeLabel !== "undefined") {
	schemeData.setup.goalNodeLabel = goalNodeLabel;
}

if (typeof goalNodeFontSize !== "undefined") {
	schemeData.setup.goalNodeFontSize = goalNodeFontSize;
}

if (typeof goalNodeColor !== "undefined") {
	schemeData.setup.goalNodeColor = goalNodeColor;
}
var nodes = null;
var edges = null;
var nodes1 = null;
var edges1 = null;
var data = null;
var data1 = null;

var nodes = new vis.DataSet(objectToArray(schemeData.canvas1Data.nodes._data));
var edges = new vis.DataSet(objectToArray(schemeData.canvas1Data.edges._data));
var nodes1 = new vis.DataSet(objectToArray(schemeData.canvas2Data.nodes._data));
var edges1 = new vis.DataSet(objectToArray(schemeData.canvas2Data.edges._data));

if (typeof schemeData.dataCash !== "undefined") {
   dataCash = schemeData.dataCash;
} else {
   dataCash = {};
}
data = {
	nodes: nodes,
	edges: edges
};

data1 = {
	nodes: nodes1,
	edges: edges1
};

var seed = 2;
function getNodeById(data, id) {
	for (var n = 0; n < data.length; n++) {
		if (data[n].id == id) { 
			return data[n];
		}
	};

	throw 'Can not find id \'' + id + '\' in data';
}
function moveViewTo(x, y, scale) {
   var positionX = parseFloat((x - canvasWidth/(2*scale)).toFixed(5));
   var positionY = parseFloat((y - canvasHeight/(2*scale)).toFixed(5));
   network.moveTo({
      position: {x: positionX, y: positionY},
      offset: {x: -canvasWidth/2, y: -canvasHeight/2},
      scale: scale,
   });

   network1.moveTo({
      position: {x: positionX, y: positionY},
      offset: {x: -canvasWidth/2, y: -canvasHeight/2},
      scale: scale,
   });
}

function difference(a1, a2) {
  var result = [];
  for (var i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      result.push(a1[i]);
    }
  }
  return result;
}
function getNodeFromNetworkDataById(id) {
   var node;
   if (Array.isArray(network.body.data.nodes.get(id))) {
      node = network.body.data.nodes.get(id)[0];
   } else {
      node = network.body.data.nodes.get(id);
   }
   return node;
}
function getEdgeFromNetworkDataById(id) {
   var edge;
   if (Array.isArray(network.body.data.edges.get(id))) {
      edge = network.body.data.edges.get(id)[0];
   } else {
      edge = network.body.data.edges.get(id);
   }
   return edge;
}
function destroy() {
	if (network !== null) {
		network.destroy();
		network = null;
	}
}
function addNodeOnCanvas(label, link, position, shiftX, shiftY, network) {
	return network.body.data.nodes.add({
		label:label,
		link: link,
		x: position.x + shiftX,
		y: position.y + shiftY
	});
}
function addNodeWithIdOnCanvas(label, link, position, shiftX, shiftY, network, nodeId) {
   return network.body.data.nodes.add({
      id: nodeId,
      label:label,
      link: link,
      x: position.x + shiftX,
      y: position.y + shiftY
   });
}
function getTreeNodesAndEdges(rootNodeId) {

   if (typeof network.body.nodes[rootNodeId] === "undefined") {
      return null;
   }

   var nodeEdges = network.body.nodes[rootNodeId].edges;

   var rootBranchesEdges = [];
   nodeEdges.forEach(function(edge) {
      if (edge.fromId == rootNodeId) {
         rootBranchesEdges.push(getEdgeFromNetworkDataById(edge.id));
      }
   });

   var branchNodes = [];
   rootBranchesEdges.forEach(function(rootBranchesEdge) {
      branchNodes.push(getNodeFromNetworkDataById(rootBranchesEdge.to));
   });

   var branchesNodesAndEdges = {
      nodes:  [],
      edges: rootBranchesEdges
   };

   branchNodes.forEach(function(branchNode) {
      branchesNodesAndEdges.nodes.push(getNodeFromNetworkDataById(branchNode.id));
      var branchesData = getTreeNodesAndEdges(branchNode.id);
      branchesNodesAndEdges.nodes = branchesNodesAndEdges.nodes.concat(branchesData.nodes);
      branchesNodesAndEdges.edges = branchesNodesAndEdges.edges.concat(branchesData.edges);
   });
   return branchesNodesAndEdges;
}
            function hideNodeBranchesToDataCash(nodeId, branchesNodesAndEdges) {

               var nodesPositions = network.getPositions();
               if (branchesNodesAndEdges === null) {
                  branchesNodesAndEdges = getTreeNodesAndEdges(nodeId);
               }
               branchesNodesAndEdges.rootPosition = nodesPositions[nodeId];
               console.log("hideNodeBranchesToDataCash");
               console.log(branchesNodesAndEdges);
               var yStep = nodesPositions[nodeId].y;
               if (typeof dataCash[nodeId] !== "undefined") {
                  var newGraphMinPosition = branchesNodesAndEdges.nodes[branchesNodesAndEdges.nodes.length-1].y;
                  var rootNodeAndNewGraphMinPositionDiff = newGraphMinPosition - nodesPositions[nodeId].y;
                  branchesNodesAndEdges.nodes.forEach(function(node) {
                     node.y = node.y - rootNodeAndNewGraphMinPositionDiff - 1;
                     if (typeof nodesPositions[node.id] !== "undefined") {
                        node.x = nodesPositions[node.id].x;
                     }
                  });
                  var currentData = dataCash[nodeId];
                  currentData.nodes = branchesNodesAndEdges.nodes.concat(currentData.nodes);
                  currentData.edges = branchesNodesAndEdges.edges.concat(currentData.edges);
                  currentData.rootPosition = branchesNodesAndEdges.rootPosition;
                  dataCash[nodeId] = currentData;
                  dataCash[nodeId].nodes.forEach(function(node) {
                     node.y = yStep;
                     yStep = yStep + 1;
                  });
               } else {
                  function compare( a, b ) {
                     if ( nodesPositions[a.id].y < nodesPositions[b.id].y ){
                        return -1;
                     }
                     if ( nodesPositions[a.id].y > nodesPositions[b.id].y ){
                        return 1;
                     }
                     return 0;
                  }

                  branchesNodesAndEdges.nodes = branchesNodesAndEdges.nodes.sort(compare);
                  dataCash[nodeId] = branchesNodesAndEdges;
                  dataCash[nodeId].nodes.forEach(function(node) {
                     node.y = yStep;
                     yStep = yStep + 1;
                     if (typeof nodesPositions[node.id] !== "undefined") {
                        node.x = nodesPositions[node.id].x;
                     }
                  });
               }

               var removeNodesIds = [];
               branchesNodesAndEdges.nodes.forEach(function(node, index) {
                  removeNodesIds.push(node.id);
               });
               var removeEdgesIds = [];
               branchesNodesAndEdges.edges.forEach(function(edge, index) {
                  removeEdgesIds.push(edge.id);
               });
               var rootNode = getNodeFromNetworkDataById(nodeId);
               if (typeof rootNode.color !== "undefined") {
                  rootNode.color.border = "black";
               } else {
                  rootNode.color = {border: "black"};
               }
               rootNode.borderWidth = "1";
               rootNode.x = branchesNodesAndEdges.rootPosition.x;
               rootNode.y = branchesNodesAndEdges.rootPosition.y;
               network.body.data.nodes.update(rootNode);
               updateMenuFromScheme(removeNodesIds, removeEdgesIds);
               updateSchemeFromMenu([],[]);
            }
//treesList - [[rootId, branchesNodesAndEdges], [rootId, branchesNodesAndEdges]...]
function hideListOfTreesToDataCash(treesList) {

   var nodesPositions = network.getPositions();
   var removeNodesIds = [];
   var removeEdgesIds = [];
   treesList.forEach(function(treeData) {
      var rootId = treeData[0];
      var branchesNodesAndEdges = treeData[1];

      if (branchesNodesAndEdges === null) {
         branchesNodesAndEdges = getTreeNodesAndEdges(rootId);
      }
      if (branchesNodesAndEdges == null || branchesNodesAndEdges.nodes.length == 0) {
         return;
      }
      branchesNodesAndEdges.rootPosition = nodesPositions[rootId];
      console.log("hideNodeBranchesToDataCash");
      console.log(branchesNodesAndEdges);
      var yStep = nodesPositions[rootId].y;

      if (typeof dataCash[rootId] !== "undefined") {
         var newGraphMinPosition = branchesNodesAndEdges.nodes[branchesNodesAndEdges.nodes.length-1].y;
         var rootNodeAndNewGraphMinPositionDiff = newGraphMinPosition - nodesPositions[rootId].y;
         branchesNodesAndEdges.nodes.forEach(function(node) {
            node.y = node.y - rootNodeAndNewGraphMinPositionDiff - 1;
            if (typeof nodesPositions[node.id] !== "undefined") {
               node.x = nodesPositions[node.id].x;
            }
         });
         var currentData = dataCash[rootId];
         currentData.nodes = branchesNodesAndEdges.nodes.concat(currentData.nodes);
         currentData.edges = branchesNodesAndEdges.edges.concat(currentData.edges);
         currentData.rootPosition = branchesNodesAndEdges.rootPosition;
         dataCash[rootId] = currentData;
         dataCash[rootId].nodes.forEach(function(node) {
            node.y = yStep;
            yStep = yStep + 1;
         });
      } else {
         dataCash[rootId] = branchesNodesAndEdges;
         dataCash[rootId].nodes.forEach(function(node) {
            node.y = yStep;
            yStep = yStep + 1;
            if (typeof nodesPositions[node.id] !== "undefined") {
               node.x = nodesPositions[node.id].x;
            }
         });
      }


      branchesNodesAndEdges.nodes.forEach(function(node, index) {
         removeNodesIds.push(node.id);
      });
      branchesNodesAndEdges.edges.forEach(function(edge, index) {
         removeEdgesIds.push(edge.id);
      });
      var rootNode = getNodeFromNetworkDataById(rootId);
      if (typeof rootNode.color !== "undefined") {
         rootNode.color.border = "black";
      } else {
         rootNode.color = {border: "black"};
      }
      rootNode.borderWidth = "1";
      rootNode.x = branchesNodesAndEdges.rootPosition.x;
      rootNode.y = branchesNodesAndEdges.rootPosition.y;
      network.body.data.nodes.update(rootNode);

   });

   updateMenuFromScheme(removeNodesIds, removeEdgesIds);
   updateSchemeFromMenu([],[]);

}
            function restoreNodeBranchesFromDataCash(nodeId) {

               console.log("restoreNodeBranchesFromDataCash");
               var branchesNodesAndEdges = dataCash[nodeId];
               if (typeof branchesNodesAndEdges === "undefined") return;

               updateMenuFromScheme([],[]);
   
               updateSchemeFromMenu(branchesNodesAndEdges.nodes, branchesNodesAndEdges.edges);

               var nodesPositions = network.getPositions();

               var xShift = null;
               if (typeof branchesNodesAndEdges.rootPosition !== "undefined") {
                  xShift = nodesPositions[nodeId].x - branchesNodesAndEdges.rootPosition.x;
               }

               var yStep = nodesPositions[nodeId].y + network.body.nodes[nodeId].shape.height/2;
               
               branchesNodesAndEdges.nodes.forEach(function(node) {
                  branchNode = network.body.nodes[node.id];
                  if (node.shape == "image") {
                     console.log(branchNode);
                     console.log(node);
                     branchNode.imageObj.image.crossOrigin = "Anonymous";
                     var imgHeight = branchNode.shape.height;
                     if (typeof node.imgHeight !== "undefined") {
                        if (node.imgHeight < node.imgWidth) {
                           imgHeight = 400;
                        } else {
                           imgHeight = 400*node.imgHeight/node.imgWidth;
                        }
                     }
                     yStep = yStep + imgHeight/2;
                     branchNode.y = yStep;
                     yStep = yStep + imgHeight/2;
                  } else {
                     yStep = yStep + branchNode.shape.height/2;
                     branchNode.y = yStep;
                     yStep = yStep + branchNode.shape.height/2;
                  }

                  if (xShift != null) branchNode.x = branchNode.x + xShift;

               });

               var rootNode = getNodeFromNetworkDataById(nodeId);
               rootNode.borderWidth = "0";
               network.body.data.nodes.update(rootNode);

               delete dataCash[nodeId];
               updateMenuFromScheme([],[]);

            }
function alignNodesLeft(nodes) {
	var minLeft;
        var nodesPositions = network.getPositions();
	//nodes.forEach(function(node) {
        //        var nodeD = getNodeFromNetworkDataById(node.id);
	//	var pNode = nodesPositions[node.id];
	//	nodeD.x = pNode.x;
	//	nodeD.y = pNode.y;
	//	network.body.data.nodes.update(nodeD);
	//});

	//for (i = 0; i < nodes.length; i++) {
	//	if (i == 0) minLeft = nodes[i].shape.left;
	//	if (minLeft > nodes[i].shape.left) {
	//		minLeft = nodes[i].shape.left;
	//	};
	//}

	//for (i = 0; i < nodes.length; i++) {
	//	var leftDiff = nodes[i].shape.left - parseFloat(minLeft.toFixed(5));
	//	network.body.nodes[nodes[i].id].x = nodes[i].x - leftDiff;
	//}

        for (i = 0; i < nodes.length; i++) {
                if (i == 0) minLeft = nodes[i].shape.left;
                if (minLeft > nodes[i].shape.left) {
                        minLeft = nodes[i].shape.left;
                };
        }

        for (i = 0; i < nodes.length; i++) {
                var leftDiff = nodes[i].shape.left - parseFloat(minLeft.toFixed(5));
                //network.body.nodes[nodes[i].id].x = nodes[i].x - leftDiff;
                network.body.nodes[nodes[i].id].x = Number(nodesPositions[nodes[i].id].x - leftDiff);
        }
        network.body.emitter.emit("startSimulation");

	//var scale = network.getScale();
        //var viewPosition = network.getViewPosition();
	//var n1X = parseFloat(viewPosition.x.toFixed(5));
	//var n1Y = parseFloat(viewPosition.y.toFixed(5));
	//var positionX = parseFloat((n1X - canvasWidth/(2*scale)).toFixed(5));
	//var positionY = parseFloat((n1Y - canvasHeight/(2*scale)).toFixed(5));

	//network.moveTo({
	//	position: {x: positionX, y: positionY},
	//	offset: {x: -canvasWidth/2, y: -canvasHeight/2},
	//	scale: scale,
	//});

	//network1.moveTo({
	//	position: {x: positionX, y: positionY},
	//	offset: {x: -canvasWidth/2, y: -canvasHeight/2},
	//	scale: scale,
	//});
}
function showAlert(alertLine, rightShift, width) {
        console.log("Alert: " + alertLine);
        var schemeDataMenuWidth = 0;
        if (document.getElementById("schemeDataMenu").style.display != "none") {
                schemeDataMenuWidth = parseInt(document.getElementById("schemeDataMenu").style.width.replace("px",""), 10);
        } else {
                schemeDataMenuWidth = 59;
        }
        $("#alertLine").remove();
        var saveAlertWidget = $("<div id='alertLine' style='z-index:9999;position: fixed;right:" + String(schemeDataMenuWidth + rightShift) + "px;top:0;font-family:sans-serif;font-size:14px; margin:5px; width:" + String(width) + "px;'>" + alertLine + "</div>");
        $("body").append(saveAlertWidget);
        var alertCounterCopy = document.alertCounter + 1;
        document.alertCounter = document.alertCounter + 1;
        setTimeout(function() {
           if (document.alertCounter != alertCounterCopy) return;
           $("#alertLine").fadeOut("normal", function() {
              $("#alertLine").remove();
           });
        },
        5000);
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
function collectCodeNodesContent(rootCodeNodeId) {
	var codeNode = getNodeFromNetworkDataById(rootCodeNodeId).label + "\n";
	var nodeEdges = network.body.nodes[rootCodeNodeId].edges;
	var codeEdges = [];
	nodeEdges.forEach(function(edge) {
		if (edge.options.label == "code" && edge.fromId == rootCodeNodeId) {
			codeEdges.push(edge);
		}
	});
	var branchCodeNodes = [];
	codeEdges.forEach(function(codeEdge) {
		branchCodeNodes.push(getNodeFromNetworkDataById(codeEdge.toId));
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
		codeNode = codeNode + collectCodeNodesContent(branchNode.id);
	});
	return codeNode;
}

   function findParentNodeId(nodeId) {
      var edges = network.body.nodes[nodeId].edges;
      if ((typeof edges === "undefined") || (edges.length == 0)) {
         return nodeId;
      }
      var parentNodeId;
      for (var key in edges) {
         if (edges[key].toId == nodeId) {
            parentNodeId = edges[key].from.id;
         }
      }
      return parentNodeId;
   }
   function findTreeRootNodeId(branchNodeId) {
      var parentNodeId = findParentNodeId(branchNodeId);
      if (typeof parentNodeId !== "undefined") {
         return findTreeRootNodeId(parentNodeId);   
      } else {
         return branchNodeId;
      }
   }
function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}
            function wrapNodeBranches(rootNodeId) {

               var nodesPositions = network.getPositions();

               var yStep = nodesPositions[rootNodeId].y;
               
               function wrapTree(nodeId, yStep, nodesPositions) {
                  var nodeEdges = network.body.nodes[nodeId].edges;
                  var codeEdges = [];
                  nodeEdges.forEach(function(edge) {
                     if (edge.fromId == nodeId) {
                        codeEdges.push(edge);
                     }
                  });
               
                  var branchCodeNodes = [];
                  codeEdges.forEach(function(codeEdge) {
                     branchCodeNodes.push(getNodeFromNetworkDataById(codeEdge.toId));
                  });
               
                  function compare( a, b ) {
                     if ( nodesPositions[a.id].y < nodesPositions[b.id].y ){
                        return -1;
                     }
                     if ( nodesPositions[a.id].y > nodesPositions[b.id].y ){
                        return 1;
                     }
                     return 0;
                  }

                  branchCodeNodes = branchCodeNodes.sort(compare);
                  branchCodeNodes.forEach(function(branchNode) {
                     yStep = yStep + 0.01;
                     network.nodesHandler.moveNode(branchNode.id, nodesPositions[branchNode.id].x, yStep);
                     wrapTree(branchNode.id, yStep, nodesPositions);
                  });
               }
               
               wrapTree(rootNodeId, yStep, nodesPositions);
            }
            function unwrapNodeBranches(rootNodeId) { 

               var nodesPositions = network.getPositions();

               var yStep = nodesPositions[rootNodeId].y + network.body.nodes[rootNodeId].shape.height/2;
               
               function unwrapTree(nodeId, yStep, nodesPositions) {
                  var nodeEdges = network.body.nodes[nodeId].edges;
                  var codeEdges = [];
                  nodeEdges.forEach(function(edge) {
                     if (edge.fromId == nodeId) {
                        codeEdges.push(edge);
                     }
                  });
               
                  var branchCodeNodes = [];
                  codeEdges.forEach(function(codeEdge) {
                     branchCodeNodes.push(network.body.nodes[codeEdge.toId]);
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

                  branchCodeNodes = branchCodeNodes.sort(compare);
                  branchCodeNodes.forEach(function(branchNode) {
                     branchNode = network.body.nodes[branchNode.id];
                     yStep = yStep + branchNode.shape.height/2;
                     network.nodesHandler.moveNode(branchNode.id, nodesPositions[branchNode.id].x, yStep);
                     yStep = yStep + branchNode.shape.height/2;
                     yStep = unwrapTree(branchNode.id, yStep, nodesPositions);
                  });
                  return yStep
               }
               
               unwrapTree(rootNodeId, yStep, nodesPositions);
            }
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
function duplicateGraph(nodes, edges) {
			var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
			var selectedEdges = objectToArray(network.selectionHandler.selectionObj.edges);
			var nodes = [];
                        var nodesPositions = network.getPositions();
			selectedNodes.forEach(function(node) {
				var nodeD = getNodeFromNetworkDataById(node.id);
				pNode = nodesPositions[node.id];
				nodeD.x = pNode.x;
				nodeD.y = pNode.y;
				network.body.data.nodes.update(nodeD);

				nodes.push(getNodeFromNetworkDataById(node.id));
			});
			var edges = []
			selectedEdges.forEach(function(edge) {
				edges.push(network.body.data.edges.get(edge.id));
			});

			var data = {
				nodes: {},
				edges: {}
			};
			
			nodes1ToCopy = {}; 
			nodes.forEach(function(item) {
				nodes1ToCopy[item.id.toString()] = item;
			});
			data.nodes = nodes1ToCopy;

			var edges1ToCopy = {}; 
			edges.forEach(function(item) {
				edges1ToCopy[item.id.toString()] = item;
			});
			data.edges = edges1ToCopy;
			var label = JSON.stringify(data, undefined, 1);
			var data = JSON.parse(label);
			var date = new Date();
			var idPostfix = date.getMilliseconds().toString().substring(-7).toString();
			network.selectionHandler.unselectAll();
                        var nodesArray = objectToArray(data.nodes);
                        for (var i in nodesArray) {
                                var node = nodesArray[i];
                                console.log("duplicateGraph. Nodes: " + String(i) + ", " + String(nodesArray.length));
				node.id = node.id + idPostfix;
				node.y = node.y; 
				var newNode = network.nodesHandler.create(node);
				network.body.data.nodes.add(newNode.options);
				network.selectionHandler.selectObject(newNode);
			};
                        var edgesArray = objectToArray(data.edges);
                        for (var i in edgesArray) {
                                var edge = edgesArray[i];
                                console.log("duplicateGraph. Edges: " + String(i) + ", " + String(edgesArray.length));
				edge.id = edge.id + idPostfix;	
				edge.from = edge.from + idPostfix;
				edge.to = edge.to + idPostfix;
				var newEdge = network.edgesHandler.create(edge);
				network.body.data.edges.add(newEdge.options);
				network.selectionHandler.selectObject(newEdge);
			};
			network.selectionHandler.setSelection(network.selectionHandler.getSelection());
   return data;
}
function multiplySelected(multiplyCount, idPostfix, xShift, yShift, idCounterPostfixStart = 0) {
   var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
   var selectedEdges = objectToArray(network.selectionHandler.selectionObj.edges);
   var nodes = [];
   var nodesPositions = network.getPositions();
   selectedNodes.forEach(function(node) {
      var nodeD = getNodeFromNetworkDataById(node.id);
      pNode = nodesPositions[node.id];
      nodeD.x = pNode.x;
      nodeD.y = pNode.y;
      network.body.data.nodes.update(nodeD);
      nodes.push(getNodeFromNetworkDataById(node.id));
   });
   var edges = []
   selectedEdges.forEach(function(edge) {
      edges.push(network.body.data.edges.get(edge.id));
   });

   var data = {
      nodes: {},
      edges: {}
   };
			
   nodes1ToCopy = {}; 
   nodes.forEach(function(item) {
      nodes1ToCopy[item.id.toString()] = item;
   });
   data.nodes = nodes1ToCopy;

   var edges1ToCopy = {}; 
   edges.forEach(function(item) {
      edges1ToCopy[item.id.toString()] = item;
   });
   data.edges = edges1ToCopy;
   var label = JSON.stringify(data, undefined, 1);
   var data = JSON.parse(label);
   var date = new Date();
   //var idPostfix = date.getMilliseconds().toString().substring(-7).toString();
   network.selectionHandler.unselectAll();
   var nodesArray = objectToArray(data.nodes);
      for (var j=0; j < nodesArray.length; j++) {
         var node = nodesArray[j];
         node.oldId = node.id;
      }
   var edgesArray = objectToArray(data.edges);
      for (var k=0; k < edgesArray.length; k++) {
         var edge = edgesArray[k];
         edge.oldId = edge.id;	
         edge.oldFrom = edge.from;
         edge.oldTo = edge.to;
      }
   for (var i=0; i < multiplyCount; i++) {
      console.log("multiplySelected: " + String(i) + ", " + String(multiplyCount) + ". Nodes: " + String(nodesArray.length) + ", Edges: " + String(edgesArray.length));
      for (var j=0; j < nodesArray.length; j++) {
         var node = nodesArray[j];
         node.id = node.oldId + idPostfix + String(idCounterPostfixStart + i);
         node.x = node.x + xShift; 
         node.y = node.y + yShift; 
         var newNode = network.nodesHandler.create(node);
         network.body.data.nodes.add(newNode.options);
         network.selectionHandler.selectObject(newNode);
      }
      for (var k=0; k < edgesArray.length; k++) {
         var edge = edgesArray[k];
         edge.id = edge.oldId + idPostfix + String(idCounterPostfixStart + i);	
         edge.from = edge.oldFrom + idPostfix + String(idCounterPostfixStart + i);
         edge.to = edge.oldTo + idPostfix + String(idCounterPostfixStart + i);
         var newEdge = network.edgesHandler.create(edge);
         network.body.data.edges.add(newEdge.options);
         network.selectionHandler.selectObject(newEdge);
      }
   }
   network.selectionHandler.setSelection(network.selectionHandler.getSelection());
   return data;
}
function calcSymPy(symPyData, codeNodeId) {
   var url = "https://localhost:3001/sympy";
   
   var nodesPositions = network.getPositions();
   var mathScriptNodeP = nodesPositions[codeNodeId];
   
   var mathScriptNode = getNodeFromNetworkDataById(codeNodeId);
   mathScriptNode.x = mathScriptNodeP.x;
   mathScriptNode.y = mathScriptNodeP.y;
   network.body.data.nodes.update(mathScriptNode);
   
   function fetchData(url, params, mathScriptNodeP) {
      var calcResult = "";
      url = url + "?origin=*";
      Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
   
      fetch(url)
          .then(function(response){
             return response.json();})
          .then(function(response) {
             calcResult = response;

             console.log(response);
             var symPyData = JSON.parse(response);
             console.log(symPyData);
             var mathScriptNode = network.body.nodes[codeNodeId];
             var topY = mathScriptNode.y - mathScriptNode.shape.height/2;
             var maxBranchWidth = 0;
             var resultBranches = [];
             if (typeof symPyData["plotImgName"] !== 'undefined') {
                var d = new Date();
                var millis = String(d.getTime());
                var imgPath = servUrl + publicImgsPath + symPyData["plotImgName"] + "?" + millis;
                console.log(imgPath);
                var imgNodeId = network.body.data.nodes.add([{
                   label: "",
                   image: imgPath,
                   shape: "image",
                   size: 200,
                   x:mathScriptNodeP.x + mathScriptNode.shape.width/2 + 300,
                   y:mathScriptNodeP.y,
                   font: {face: "monospace"}
                }])[0];
                var imgNode = network.body.nodes[imgNodeId];
                imgNode.imageObj.image.crossOrigin = "Anonymous";
                imgNode.y = topY + imgNode.shape.height/2;
                topY = topY + imgNode.shape.height;
                network.body.data.edges.add({
                   from:codeNodeId,
                   to:imgNodeId
                });
                resultBranches.push(imgNode);
                if (imgNode.shape.width > maxBranchWidth) maxBranchWidth = imgNode.shape.width;
             }
             if (typeof symPyData["latexImgName"] !== 'undefined') {
                var d = new Date();
                var millis = String(d.getTime());
                var imgPath = servUrl + publicImgsPath + symPyData["latexImgName"] + "?" + millis;
                console.log(imgPath);
                var imgNodeId = network.body.data.nodes.add([{
                   label: "",
                   image: imgPath,
                   shape: "image",
                   size: 70,
                   x:mathScriptNodeP.x + mathScriptNode.shape.width/2 + 300,
                   y:mathScriptNodeP.y,
                   font: {face: "monospace"}
                }])[0];
                var imgNode = network.body.nodes[imgNodeId];
                imgNode.imageObj.image.crossOrigin = "Anonymous";
                imgNode.y = topY + imgNode.shape.height/2;
                topY = topY + imgNode.shape.height;
                network.body.data.edges.add({
                   from:codeNodeId,
                   to:imgNodeId
                });
                resultBranches.push(imgNode);
                if (imgNode.shape.width > maxBranchWidth) maxBranchWidth = imgNode.shape.width;
             }
             if (typeof symPyData["expression"] !== 'undefined') {
                var nodeId = network.body.data.nodes.add([{
                   label: symPyData["expression"],
                   x:mathScriptNodeP.x + mathScriptNode.shape.width/2 + 300,
                   y:mathScriptNodeP.y,
                   font: {face: "monospace"}
                }])[0];
                var node = network.body.nodes[nodeId];
                node.y = topY + node.shape.height/2;
                network.body.data.edges.add({
                   from:codeNodeId,
                   to:nodeId
                });
                resultBranches.push(node);
                if (node.shape.width > maxBranchWidth) maxBranchWidth = node.shape.width;
             }
             for (var i=0; i < resultBranches.length; i++) {
                resultBranches[i].x = mathScriptNodeP.x + mathScriptNode.shape.width/2 + 200 + maxBranchWidth/2;
             }
          })
          .catch(function(error){
             console.log(error);
          });
      return calcResult;
   }
   
   dataChunk = encodeURIComponent(symPyData);
   var params = {
      dataPart: dataChunk,
      codeNodeId: codeNodeId
   };
   
   fetchData(url, params, mathScriptNodeP);
}
function buildThemeGraph(themeGraphLabel, x, y) {
   var newNode1Id = network.body.data.nodes.add({
   	label: themeGraphLabel,
   	x: x,
   	y: y,
   	font: {size: 72},
   	color: {background:"red"}
   })[0];
   var newNode2Id = network.body.data.nodes.add({
   	label:"Development",
   	x: x+300,
   	y: y+450 
   })[0];
   network.body.data.edges.add({
   	from:newNode1Id,
   	to:newNode2Id
   });
   var newNode4Id = network.body.data.nodes.add({
   	label:(new Date().toLocaleDateString()),
   	x: x+450,
   	y: y+450 
   })[0];
   network.body.data.edges.add({
   	from:newNode2Id,
   	to:newNode4Id
   });
   var newNode3Id = network.body.data.nodes.add({
   	label:"init",
   	x: x+550,
   	y: y+450 
   })[0];
   network.body.data.edges.add({
   	from:newNode4Id,
   	to:newNode3Id
   });
   var newNode5Id = network.body.data.nodes.add({
   	label:"Notes",
   	x: x+300,
   	y: y-400 
   })[0];
   network.body.data.edges.add({
   	from:newNode1Id,
   	to:newNode5Id
   });
   var newNode6Id = network.body.data.nodes.add({
   	label:"Dictionary of\nconcepts",
   	x: x+450,
   	y: y-650 
   })[0];
   network.body.data.edges.add({
   	from:newNode5Id,
   	to:newNode6Id
   });
   var newNode7Id = network.body.data.nodes.add({
   	label:"Details, thoughts",
   	x: x+450,
   	y: y-400
   })[0];
   network.body.data.edges.add({
   	from:newNode5Id,
   	to:newNode7Id
   });
   var sectionsNodeId = network.body.data.nodes.add({
   	label:"Sections",
   	x: x+450,
   	y: y-150
   })[0];
   network.body.data.edges.add({
   	from:newNode5Id,
   	to:sectionsNodeId
   });
   var booksNodeId = network.body.data.nodes.add({
   	label:"Books",
   	x: x+550,
   	y: y-300
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:booksNodeId
   });
   var rDInstitutionsNodeId = network.body.data.nodes.add({
   	label:"R&D institutions",
   	x: x+550,
   	y: y-275
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:rDInstitutionsNodeId
   });
   var sitesNodeId = network.body.data.nodes.add({
   	label:"Sites",
   	x: x+550,
   	y: y-250
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:sitesNodeId
   });
   var magazinesNodeId = network.body.data.nodes.add({
   	label:"Magazines",
   	x: x+550,
   	y: y-225
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:magazinesNodeId
   });
   var articlesNodeId = network.body.data.nodes.add({
   	label:"Articles",
   	x: x+550,
   	y: y-200
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:articlesNodeId
   });
   var mediaContentNodeId = network.body.data.nodes.add({
   	label:"Media content",
   	x: x+550,
   	y: y-175
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:mediaContentNodeId
   });
   var miscWebLinksNodeId = network.body.data.nodes.add({
   	label:"Misc. web links",
   	x: x+550,
   	y: y-150
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:miscWebLinksNodeId
   });
   var projectsNodeId = network.body.data.nodes.add({
   	label:"Projects",
   	x: x+550,
   	y: y-125
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:projectsNodeId
   });
   var toolsNodeId = network.body.data.nodes.add({
   	label:"Tools",
   	x: x+550,
   	y: y-100
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:toolsNodeId
   });
   var organizationsNodeId = network.body.data.nodes.add({
   	label:"Organizations",
   	x: x+550,
   	y: y-75
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:organizationsNodeId
   });
   var standartsNodeId = network.body.data.nodes.add({
   	label:"Standarts",
   	x: x+550,
   	y: y-50
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:standartsNodeId
   });
   var forumsGroupsNodeId = network.body.data.nodes.add({
   	label:"Forums, Groups",
   	x: x+550,
   	y: y-25
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:forumsGroupsNodeId
   });
   var lawsNodeId = network.body.data.nodes.add({
   	label:"Laws",
   	x: x+550,
   	y: y
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:lawsNodeId
   });
   var adjacentThemesNodeId = network.body.data.nodes.add({
   	label:"Adjacent Themes",
   	x: x+550,
   	y: y+25
   })[0];
   network.body.data.edges.add({
   	from:sectionsNodeId,
   	to:adjacentThemesNodeId
   });
   var questionsNodeId = network.body.data.nodes.add({
   	label:"Questions",
   	x: x+300,
   	y: y+150
   })[0];
   network.body.data.edges.add({
   	from:newNode1Id,
   	to:questionsNodeId
   });
   var problemsNodeId = network.body.data.nodes.add({
   	label:"Problems",
   	x: x+300,
   	y: y+250
   })[0];
   network.body.data.edges.add({
   	from:newNode1Id,
   	to:problemsNodeId
   });
   var goalsNodeId = network.body.data.nodes.add({
   	label:"Goals",
   	x: x+300,
   	y: y+350
   })[0];
   network.body.data.edges.add({
   	from:newNode1Id,
   	to:goalsNodeId
   });
   newNodesIds1 = [
      booksNodeId,
      rDInstitutionsNodeId,
      sitesNodeId,
      magazinesNodeId,
      articlesNodeId,
      mediaContentNodeId,
      miscWebLinksNodeId,
      projectsNodeId,
      toolsNodeId,
      organizationsNodeId,
      standartsNodeId,
      forumsGroupsNodeId,
      lawsNodeId,
      adjacentThemesNodeId
   ];
   var nodes1 = [];
   newNodesIds1.forEach(function(nodeId) {
      nodes1.push(network.body.nodes[nodeId]);
   });
   alignNodesLeft(nodes1);
   newNodesIds2 = [
      newNode5Id,
      questionsNodeId,
      problemsNodeId,
      goalsNodeId,
      newNode2Id
   ];
   var nodes2 = [];
   newNodesIds2.forEach(function(nodeId) {
      nodes2.push(network.body.nodes[nodeId]);
   });
   alignNodesLeft(nodes2);
   newNodesIds3 = [
      newNode6Id,
      newNode7Id,
      sectionsNodeId,
      newNode4Id
   ];
   var nodes3 = [];
   newNodesIds3.forEach(function(nodeId) {
      nodes3.push(network.body.nodes[nodeId]);
   });
   alignNodesLeft(nodes3);
}
function draw() {
	destroy();
	// create a network
	var container = document.getElementById('network');
	var container1 = document.getElementById('forImage');

	//Colors:
	//"#ffc63b"
	//"#FFD570"
	var options = {
		height: canvasHeightSetup + '%',
		width: canvasWidthSetup + '%',
		layout: {randomSeed:seed}, 
		physics: {enabled: false},
		edges: { 
			smooth: { 
				enabled: false, 
				type: "dynamic", 
				roundness: 0.5 
			}, 
			color: "#404040"
		},
		nodes: { 
			shape: "box",
			color: {
				background: "#ffd570"
			},
			labelHighlightBold: false,
			borderWidth: 0,
                        font: {
                           align: "left"
                        }
		},
		autoResize: true,
		interaction: {
			dragNodes: true,
			zoomView: true, 
			dragView: true, 
			hover: false,
			multiselect: true
		},
		manipulation: {
			addNode: function (data, callback) {
				// filling in the popup DOM elements
				var clickPosition = network.canvasToDOM({x: data.x, y: data.y});
				document.getElementById('operation').innerHTML = "Add Node";
				document.getElementById('node-id').value = data.id;
				//document.getElementById('node-label').value = data.label;
				document.getElementById('node-label').value = "";
				document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
				document.getElementById('cancelButton').onclick = clearPopUp.bind();
				document.getElementById('network-popUp').style.display = 'block';
				var schemeDataMenuWidth = 0;
				if (document.getElementById("schemeDataMenu").style.display != "none") {
					schemeDataMenuWidth = parseInt(document.getElementById("schemeDataMenu").style.width.replace("px",""), 10);
				} else {
					schemeDataMenuWidth = 0;
				}
				if ((clickPosition.x + 390) > (canvasWidth - schemeDataMenuWidth)) {
					clickPosition.x = clickPosition.x - 340;
				}
				if ((clickPosition.y + 240) > canvasHeight) {
					clickPosition.y = clickPosition.y - 260;
				}
				document.getElementById('network-popUp').style.top = (clickPosition.y + 20) + "px";
				document.getElementById('network-popUp').style.left = (clickPosition.x + 20) + "px";
				$("textarea#node-label").focus();
                                lastEditedNodesIds = [data.id];
                                lastClickPosition = null;
			},
			editNode: function (data, callback) {
				// filling in the popup DOM elements
				document.getElementById('operation').innerHTML = "Edit Node";
				document.getElementById('node-id').value = data.id;
                                if (typeof data.label === "undefined") data.label = "";
				document.getElementById('node-label').value = data.label;
				document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
				document.getElementById('cancelButton').onclick = cancelEdit.bind(this,callback);
				document.getElementById('network-popUp').style.display = 'block';
                                $("#node-label").focus();
			},
			addEdge: function (data, callback) {
				if (data.from == data.to) {
					var r = confirm("Do you want to connect the node to itself?");
					if (r == true) {
						callback(data);
					}
				}
				else {
					callback(data);
				}
			},
                        editEdge: {
                           editWithoutDrag: function(data, callback) {
                              document.getElementById('edge-operation').innerHTML = "Edit Edge";
                              editEdgeWithoutDrag(data,callback);
                                var schemeDataMenuWidth = 0;
                                if (document.getElementById("schemeDataMenu").style.display != "none") {
                                        schemeDataMenuWidth = parseInt(document.getElementById("schemeDataMenu").style.width.replace("px",""), 10);
                                } else {
                                        schemeDataMenuWidth = 0;
                                }
                                var positionX = (canvasWidth - schemeDataMenuWidth)/2;
                                var positionY = (canvasHeight)/2;
                                document.getElementById('edge-popUp').style.top = (positionY - 30) + "px";
                                document.getElementById('edge-popUp').style.left = (positionX - 125) + "px";
                                $("input#edge-label").focus();

                           }
                        },
			deleteNode: function (data, callback) {
				callback(data);
			}
		}
	};
    function editEdgeWithoutDrag(data, callback) {
      // filling in the popup DOM elements
      document.getElementById('edge-label').value = data.label;
      document.getElementById('edge-saveButton').onclick = saveEdgeData.bind(this, data, callback);
      document.getElementById('edge-cancelButton').onclick = cancelEdgeEdit.bind(this,callback);
      document.getElementById('edge-popUp').style.display = 'block';
    }
    function clearEdgePopUp() {
      document.getElementById('edge-saveButton').onclick = null;
      document.getElementById('edge-cancelButton').onclick = null;
      document.getElementById('edge-popUp').style.display = 'none';
    }
    function cancelEdgeEdit(callback) {
      clearEdgePopUp();
      callback(null);
    }
    function saveEdgeData(data, callback) {
      if (typeof data.to === 'object')
        data.to = data.to.id
      if (typeof data.from === 'object')
        data.from = data.from.id
      data.label = document.getElementById('edge-label').value;
      clearEdgePopUp();
      callback(data);
    }
	var options1 = {
		height: canvasHeightSetup + '%',
		width: canvasWidthSetup + '%',
		layout: {randomSeed:seed},
		physics: {enabled: false},
		edges: { 
			smooth: { 
				enabled: false, 
				type: "dynamic", 
				roundness: 0.5 
			}, 
			color: "#404040"
		},
		nodes: { 
			shape: "box",
			color: {
				background: "#FFD570"
			},
			labelHighlightBold: false,
			borderWidth: 0
		},
		autoResize: true,
		interaction: {
			dragNodes: true,
			zoomView: true, 
			dragView: true  
		},
		manipulation: {
			enabled: false
		}
	};
	network = new vis.Network(container, data, options);
	network1 = new vis.Network(container1, data1, options1);

	network.defaultOptions.labelHighlightBold = false;
	network1.defaultOptions.labelHighlightBold = false;
	/*
	network.body.data.nodes.get().forEach(function(item) {
		node = network.body.data.nodes.get(item.id);
		//node.labelHighlightBold = false;
		if (typeof node.color === "undefined") node.color = {};
		node.color.background = "#ffc63b";
		//node.borderWidth = 0;
		//node.color = "#404040";
		node = network.body.data.nodes.update(node);
	});
	*/
	network.leftAlignNodes = function () {
		network.manipulation.leftAlignNodes = function() {
			//var selectedNodesCount = this.selectionHandler._getSelectedNodeCount();
			var nodes = objectToArray(this.selectionHandler.selectionObj.nodes);
			alignNodesLeft(nodes);

		};


		return network.manipulation.leftAlignNodes.apply(network.manipulation, arguments);
	};
	network.createLeftAlignNodesButton = function () {
		network.manipulation.createLeftAlignNodesButton = function() {
			var leftAlignBtnClass;

			leftAlignBtnClass = 'vis-button vis-leftAlignBtn';

			var button = this._createButton('leftAlignNodesButton', leftAlignBtnClass, "leftAlignNodes");

			this.manipulationDiv.appendChild(button);

			this._bindHammerToDiv(button, network.leftAlignNodes.bind(network.manipulation));

		};
		return network.manipulation.createLeftAlignNodesButton.apply(network.manipulation, arguments);
	};
	network.createMakeJsonNodeFromSelectionButton = function () {
		network.manipulation.createMakeJsonNodeFromSelectionButton = function() {
			var makeJsonNodeFromSelectionNodesClass;

			makeJsonNodeFromSelectionNodesClass = 'vis-button vis-makeJsonNodeFromSelectionNodesBtn';

			var button = this._createButton('makeJsonNodeFromSelectionNodes', makeJsonNodeFromSelectionNodesClass, "toJson");

			this.manipulationDiv.appendChild(button);

			this._bindHammerToDiv(button, network.makeJsonNodeFromSelectionNodes.bind(network.manipulation));

		};
		return network.manipulation.createMakeJsonNodeFromSelectionButton.apply(network.manipulation, arguments);
	};
	network.makeJsonNodeFromSelectionNodes = function () {
		network.manipulation.makeJsonNodeFromSelectionNodesleftAlignNodes = function() {
			var selectedNodes = objectToArray(this.selectionHandler.selectionObj.nodes);
			var selectedEdges = objectToArray(this.selectionHandler.selectionObj.edges);
			var nodes = []
			selectedNodes.forEach(function(node) {
				nodes.push(getNodeFromNetworkDataById(node.id));
			});
			var edges = []
			selectedEdges.forEach(function(edge) {
				edges.push(network.body.data.edges.get(edge.id));
			});
			//console.log(nodes);
			//console.log(edges);

			var data = {
				nodes: [],
				edges: []
			};

			var positions1 = network.getPositions();
			nodes1ToCopy = {}; 
			nodes.forEach(function(item) {
				nodes1ToCopy[item.id.toString()] = item;
			});
			selectedNodes.forEach(function(node) {
				objectToArray(positions1).forEach(function(position) {
					if (node.id == position.id) {
						node.x = position.x;
						node.y = position.y;
					}
				});
			});
			data.nodes = nodes1ToCopy;

			var edges1ToCopy = {}; 
			edges.forEach(function(item) {
				edges1ToCopy[item.id.toString()] = item;
			});
			data.edges = edges1ToCopy;
                        var ids = [];
                        objectToArray(data.nodes).forEach(function(node) {ids.push(node.id);});
                        objectToArray(data.edges).forEach(function(edge) {ids.push(edge.id);});
                        console.log(ids);
			var label = JSON.stringify(data, undefined, 1);
			//var label = JSON.stringify(data);
			var screenCenterPosition = network.canvas.DOMtoCanvas({x:canvasWidth/2,y:canvasHeight/2})
			network.body.data.nodes.add([{
				label:label,
				x:screenCenterPosition.x,
				y:screenCenterPosition.y
			}]);
		};
		return network.manipulation.makeJsonNodeFromSelectionNodesleftAlignNodes.apply(network.manipulation, arguments);
	};
	network.createMakeNodesFromJsonNodeButton = function () {
		network.manipulation.createMakeNodesFromJsonNodeButton = function() {
			var makeNodesFromJsonNodeClass;

			makeNodesFromJsonNodeClass = 'vis-button vis-makeNodesFromJsonNodeBtn';

			var button = this._createButton('makeNodesFromJsonNode', makeNodesFromJsonNodeClass, "fromJson");

			this.manipulationDiv.appendChild(button);

			this._bindHammerToDiv(button, network.makeNodesFromJsonNode.bind(network.manipulation));

		};
		return network.manipulation.createMakeNodesFromJsonNodeButton.apply(network.manipulation, arguments);
	};
	network.makeNodesFromJsonNode = function () {
		network.manipulation.makeNodesFromJsonNode = function() {
			var selectedNodes = objectToArray(this.selectionHandler.selectionObj.nodes);
			var jsonNode = getNodeFromNetworkDataById(selectedNodes[0].id);
			var label = jsonNode.label;
			var data = JSON.parse(label);
			var date = new Date();
			var idPostfix = date.getMilliseconds().toString().substring(-7).toString();
			objectToArray(data.nodes).forEach(function(node) {
				node.id = node.id + idPostfix;
				nodesToPaste.push(node);
				//var newNode = network.nodesHandler.create(node);
				//network.body.data.nodes.add(newNode.options);
			});
			var screenCenterPosition = network.canvas.DOMtoCanvas({x:canvasWidth/2,y:canvasHeight/2})
			network.selectionHandler.unselectAll();
			network.selectionHandler.updateSelection();
			objectToArray(data.edges).forEach(function(edge) {
				edge.id = edge.id + idPostfix;	
				edge.from = edge.from + idPostfix;
				edge.to = edge.to + idPostfix;
				edgesToPaste.push(edge);
				//var newEdge = network.edgesHandler.create(edge);
				//network.body.data.edges.add(newEdge.options);
			});
		};
		return network.manipulation.makeNodesFromJsonNode.apply(network.manipulation, arguments);
	};
	network.createAddThemeGraphButton = function () {
		network.manipulation.createAddThemeGraphButton = function() {
			var addThemeGraphClass;

			addThemeGraphClass = 'vis-button vis-addThemeGraphBtn';

			var button = this._createButton('addThemeGraph', addThemeGraphClass, "addThemeGraph");

			this.manipulationDiv.appendChild(button);

			this._bindHammerToDiv(button, network.addThemeGraph.bind(network.manipulation));

		};
		return network.manipulation.createAddThemeGraphButton.apply(network.manipulation, arguments);
	};
	network.addThemeGraph = function () {
		network.manipulation.addThemeGraph = function() {
			themeGraph = true;
		};
		return network.manipulation.addThemeGraph.apply(network.manipulation, arguments);
	};

  /**
   * connect two nodes with a new edge.
   *
   * @param {Node.id} sourceNodeId
   * @param {Node.id} targetNodeId
   * @private
   */
  network.manipulation._performEditEdge = function(sourceNodeId, targetNodeId) {
    let defaultData = {id: network.manipulation.edgeBeingEditedId, from: sourceNodeId, to: targetNodeId, label: network.body.data.edges.get(network.manipulation.edgeBeingEditedId).label };
    let eeFunct = network.manipulation.options.editEdge;
    if (typeof eeFunct === 'object') {
      eeFunct = eeFunct.editWithoutDrag;
    }
    if (typeof eeFunct === 'function') {
      if (eeFunct.length === 2) {
        eeFunct(defaultData, (finalizedData) => {
          if (finalizedData === null || finalizedData === undefined || network.manipulation.inMode !== 'editEdge') { // if for whatever reason the mode has changes (due to dataset change) disregard the callback) {
            network.manipulation.body.edges[defaultData.id].updateEdgeType();
            network.manipulation.body.emitter.emit('_redraw');
            network.manipulation.showManipulatorToolbar();
          } else {
            var tmpNodeVar;
            if (finalizedData.label == "") {
               tmpNodeVar = true;
               finalizedData.label = " ";
            }
            network.manipulation.body.data.edges.getDataSet().update(finalizedData);
            if (tmpNodeVar) finalizedData.label = "";
            network.manipulation.body.data.edges.getDataSet().update(finalizedData);
            network.manipulation.selectionHandler.unselectAll();
            network.manipulation.showManipulatorToolbar();
          }
        });
      } else {
        throw new Error('The function for edit does not support two arguments (data, callback)');
      }
    } else {
      network.manipulation.body.data.edges.getDataSet().update(defaultData);
      network.manipulation.selectionHandler.unselectAll();
      network.manipulation.showManipulatorToolbar();
    }
    network.edgesHandler.reconnectEdges();
  }

	network.showManipulatorToolbar = function () {
		this.manipulation.showManipulatorToolbar = function () {
			// restore the state of any bound functions or events, remove control nodes, restore physics
			this._clean(); // reset global variables

			this.manipulationDOM = {}; // if the gui is enabled, draw all elements.

			if (this.guiEnabled === true) {
				// a _restore will hide these menus
				this.editMode = true;
				this.manipulationDiv.style.display = 'block';
				this.closeDiv.style.display = 'block';

				var selectedNodeCount = this.selectionHandler._getSelectedNodeCount();

				var selectedEdgeCount = this.selectionHandler._getSelectedEdgeCount();

				var selectedTotalCount = selectedNodeCount + selectedEdgeCount;
				var locale = this.options.locales[this.options.locale];
				var needSeperator = false;

				if (this.options.addNode !== false) {
					this._createAddNodeButton(locale);
				}

				if (this.options.addEdge !== false) {
					this._createAddEdgeButton(locale);
				}

				if (selectedNodeCount === 1 && typeof this.options.editNode === 'function') {
					this._createEditNodeButton(locale);
				} else if (selectedEdgeCount === 1 && selectedNodeCount === 0 && this.options.editEdge !== false) {
					this._createEditEdgeButton(locale);
				} // remove buttons


				if (selectedTotalCount !== 0) {
					if (selectedNodeCount > 0 && this.options.deleteNode !== false) {
						this._createDeleteButton(locale);
					} else if (selectedNodeCount === 0 && this.options.deleteEdge !== false) {
						this._createDeleteButton(locale);
					}
				} // bind the close button
				
				if (selectedNodeCount > 0) {
					network.createLeftAlignNodesButton();
					network.createMakeJsonNodeFromSelectionButton();
				}
				if (selectedNodeCount == 1) {
					network.createMakeNodesFromJsonNodeButton();
				}
				if (selectedNodeCount == 0) {
					network.createAddThemeGraphButton();
				}

				this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this)); // refresh this bar based on what has been selected


				this._temporaryBindEvent('select', this.showManipulatorToolbar.bind(this));
			} // redraw to show any possible changes


			this.body.emitter.emit('_redraw');
		}
		return this.manipulation.showManipulatorToolbar.apply(this.manipulation, arguments);
	};
	network.showManipulatorToolbar();

	canvas = network.canvas.frame.canvas;
	ctx = canvas.getContext('2d');
        
        if (typeof schemeData.setup.goalNodeLabel !== "undefined" && 
            schemeData.setup.goalNodeLabel.length > 0 &&
            typeof schemeData.setup.goalNodeFontSize !== "undefined" && 
            schemeData.setup.goalNodeFontSize.length > 0 &&
            typeof schemeData.setup.goalNodeColor !== "undefined" && 
            schemeData.setup.goalNodeColor.length > 0) {
            console.log("nodeLabel: " + schemeData.setup.goalNodeLabel);
            console.log("nodeFontSize: " + schemeData.setup.goalNodeFontSize);
            console.log("nodeColor: " + schemeData.setup.goalNodeColor);
            schemeData.setup.goalNodeLabel = unescape(schemeData.setup.goalNodeLabel);
            schemeData.setup.goalNodeFontSize = parseInt(schemeData.setup.goalNodeFontSize,10);
            var nodes = objectToArray(network.body.nodes);

            var foundNodes = [];

            for (var i=0; i < nodes.length; i++) {
               var node = nodes[i];

               if (typeof node.options === "undefined" || typeof node.options.label === "undefined") continue;
               var nodeLabel = node.options.label;
               nodeLabel = nodeLabel.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
               var gNLabel = schemeData.setup.goalNodeLabel.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
               var nodeFontSize;
               var nodeColor;
               if (typeof node.options.font !== "undefined" && 
                   typeof node.options.font.size !== "undefined") {
                  nodeFontSize = parseInt(node.options.font.size,10);
               } else {
                  nodeFontSize = 14;
               }
               if (typeof node.options.color !== "undefined" && 
                   typeof node.options.color.background !== "undefined") {
                  nodeColor = node.options.color.background;
               } else {
                  nodeColor = "#ffd570";
               }

               if (nodeLabel == gNLabel &&
                   nodeFontSize == schemeData.setup.goalNodeFontSize &&
                   nodeColor == schemeData.setup.goalNodeColor) {
                  foundNodes.push(node);
               }
            }
      
            if (foundNodes.length == 0) {
               showAlert("No nodes with this options", 60, 190);
               console.log("No nodes with this options");
            }
            if (foundNodes.length > 1) {
               showAlert("There are more than one node with this options. Using first.", 60, 190);
               console.log("There are more than one node with this options. Using first.");
            }
            if (foundNodes.length > 0) {
               schemeData.setup.scale = 0.2;
               schemeData.setup.viewPosition.x = foundNodes[0].x;
               schemeData.setup.viewPosition.y = foundNodes[0].y;
               console.log(schemeData.setup);
            }
        }

	var setup = schemeData.setup;
        
	var positionX = parseFloat((setup.viewPosition.x - canvasWidth/(2*setup.scale)).toFixed(5));
	var positionY = parseFloat((setup.viewPosition.y - canvasHeight/(2*setup.scale)).toFixed(5));

	network.moveTo({
		position: {x:positionX, y:positionY},
		offset: {x: -canvasWidth/2, y: -canvasHeight/2},
		scale: setup.scale,
	});

	network1.moveTo({
		position: {x:positionX, y:positionY},
		offset: {x: -canvasWidth/2, y: -canvasHeight/2},
		scale: setup.scale,
	});
	network.on('click', function(e) {
		 onClick(e)
	});

	network.on('doubleClick', function(e) {
		onDoubleClick(e)
	});
	function onClick(e) {
	  setTimeout(function () {
	    if (doubleClick == false) {
	      doOnClick(e);
	    }
	    else {doubleClick = false;}
	},doubleClickTimeThreshold);
	}
function doOnClick(e) {
   if (nodesToPaste.length > 0) {
      //console.log(e.event.srcEvent);
      var position = network.canvas.DOMtoCanvas({x:e.event.srcEvent.x,y:e.event.srcEvent.y})
      var topLeftNodeX = nodesToPaste[0].x;
      var topLeftNodeY = nodesToPaste[0].y;
      for(var i=0; i<nodesToPaste.length; i++) {
         var node = nodesToPaste[i];
         if (node.x < topLeftNodeX && node.y < topLeftNodeY) {
            topLeftNodeX = node.x;
            topLeftNodeY = node.y;
         }
      }
      for(var i=0; i<nodesToPaste.length; i++) {
         var node = nodesToPaste[i];
         var shiftX = - topLeftNodeX + parseFloat((position.x).toFixed(5));
         var shiftY = - topLeftNodeY + parseFloat((position.y).toFixed(5));
         node.x = node.x + shiftX;
         node.y = node.y + shiftY;
         console.log(i + " " + node.id)
         var newNode = network.nodesHandler.create(node);
         network.body.data.nodes.add(newNode.options);
      }
      for(var i=0; i<edgesToPaste.length; i++) {
         var edge = edgesToPaste[i];
         var newEdge = network.edgesHandler.create(edge);
         network.body.data.edges.add(newEdge.options);
      }
      nodesToPaste = [];
      edgesToPaste = [];
   }
      if (themeGraph) {
         var position = network.canvas.DOMtoCanvas({x:e.event.srcEvent.x,y:e.event.srcEvent.y});
         buildThemeGraph("New Theme Name", position.x, position.y);
         themeGraph = false;
      }
   }
	function onDoubleClick(e) {
		if (e.event.srcEvent.ctrlKey) {
			network.addEdgeMode();
		} else {
			network.addNodeMode();
		}
	}
	containerJQ.on("mousemove", function(e) {
		if (selectionRectangleDrag) { 
			restoreDrawingSurface();
			rect.w = (e.pageX - this.offsetLeft) - rect.startX;
			rect.h = (e.pageY - this.offsetTop) - rect.startY ;

			//ctx.setLineDash([5]);
			ctx.lineWidth = 1;
			ctx.strokeStyle = "gray";
			ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
			ctx.setLineDash([]);
			ctx.fillStyle = "rgba(255, 255, 255, 0)";
			ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
		}
	});
function runNodeMenuItems(e) {
   var pointer = {x: e.pageX, y: e.pageY};
   var menuNode = network.selectionHandler.getNodeAt(pointer);
   if (typeof menuNode !== "undefined" &&
       nodesDropDownMenuNodesIds.indexOf(menuNode.id) != -1) {
      var rootNodeId = getNodeFromNetworkDataById(menuNode.id).menuRootNodeId;
      var label = menuNode.options.label;
      var lines = label.split("\n");
      var linesCount = lines.length;
      var menuNodeHeight = menuNode.shape.textSize.height;
      var menuItemsHeight = menuNodeHeight/linesCount;
      var canvasPointer = network.canvas.DOMtoCanvas(pointer);
      var fromMenuTopToClickPoint = canvasPointer.y - menuNode.shape.top - menuNode.shape.margin.top - 1;
      var menuLineNumber = (fromMenuTopToClickPoint - (fromMenuTopToClickPoint % menuItemsHeight)) / menuItemsHeight;
      console.log(menuLineNumber);  
      console.log("menuLineNumber: " + lines[menuLineNumber]);
      if (lines[menuLineNumber] == "Restore node's branches (alt+y)") {
         restoreNodeBranchesFromDataCash(rootNodeId);
      }
      if (lines[menuLineNumber] == "Wrap node's branches (alt+y)") {
         hideNodeBranchesToDataCash(rootNodeId, null);
      }
      if (lines[menuLineNumber] == "Open node link. In new tab. (alt+l)") {
         var rootNode = getNodeFromNetworkDataById(rootNodeId);
         if (typeof rootNode.link !== "undefined" && rootNode.link.length > 0) {
            window.open(rootNode.link, '_blank');
         }
      }
   }
}
   containerJQ.on("mousedown", function(e) {
      lastClickPosition = {x: e.pageX, y: e.pageY};
      runNodeMenuItems(e);
      nodesDropDownMenuNodesIds.forEach(function(nodeId) {
         network.body.data.nodes.remove(nodeId);
      });     
      nodesDropDownMenuNodesIds = [];    
      if (e.button == 2) { 
         selectedNodes = e.ctrlKey ? network.getSelectedNodes() : null;
         saveDrawingSurface();
         var that = this;
         rect.startX = e.pageX - this.offsetLeft;
         rect.startY = e.pageY - this.offsetTop;
         selectionRectangleDrag = true;
         containerJQ[0].style.cursor = "crosshair";
      }
   }); 
function makeNodeDropDownMenuLines(nodeId) {

   var lines = [];

   var node = getNodeFromNetworkDataById(nodeId);

   var branchesNodesAndEdges = getTreeNodesAndEdges(nodeId);
   if (branchesNodesAndEdges.nodes.length > 0) {
      lines.push("Wrap node's branches (alt+y)");
   } else {
      if (typeof dataCash[nodeId] !== "undefined" &&
          dataCash[nodeId].nodes.length > 0) {
         lines.push("Restore node's branches (alt+y)");
      }
   }
   if (typeof node.link !== "undefined" && node.link.length > 0) {
      lines.push("Open node link. In new tab. (alt+l)");
   }
   //
   return lines;
}
   containerJQ.on("mouseup", function(e) {
      if (e.button == 2) { 
         restoreDrawingSurface();
         selectionRectangleDrag = false;
      
         containerJQ[0].style.cursor = "default";
      
         if (rect.startX == (e.pageX - this.offsetLeft) &&
            rect.startY == (e.pageY - this.offsetTop)) {
            var pointer = {x: e.pageX, y: e.pageY};
            var clickedNode = network.selectionHandler.getNodeAt(pointer);
            var clickedNodeIsMenu = getNodeFromNetworkDataById(clickedNode.id).menuNode;
            var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
            if (typeof clickedNode !== "undefined" &&
                (typeof clickedNodeIsMenu === "undefined") &&
                selectedNodes.length <= 1) {
               var menuLines = makeNodeDropDownMenuLines(clickedNode.id);
               if (menuLines.length == 0) return;
               var menuLabel = menuLines.join("\n");
               var scale = network.getScale();
               var nodeId = network.body.data.nodes.add([{
                  label: menuLabel,
                  font: {size: 14/scale},
                  x: clickedNode.x + clickedNode.shape.width/2,
                  y: clickedNode.y + clickedNode.shape.height/2,
                  menuNode: true,
                  menuRootNodeId: clickedNode.id
               }]);
               var node = network.body.nodes[nodeId];
               if (typeof node !== "undefined" && node !== null) {
                  network.nodesHandler.moveNode(
                     node.id, 
                     node.x + node.shape.width/2, 
                     node.y + node.shape.height/2);
               }
               nodesDropDownMenuNodesIds.push(node.id);
               return;
            }
         }
      
         selectNodesFromHighlight();
         network.showManipulatorToolbar();
      }
   });
   network.on('selectNode', function (properties) {
      schemeEditEdgesMenu.hide();
      schemeEditNodesMenu.show();
      var nodeIdInput = $("input#nodeIdInput");
      var nodeLabelTextarea = $("textarea#nodeLabelTextarea");
      var nodeXInput = $("#nodeXInput");
      var nodeYInput = $("#nodeYInput");
      var nodeShapeInput = $("#nodeShapeInput");
      var nodeLinkTextarea = $("textarea#nodeLinkTextarea");
      var nodeFontSizeInput = $("input#nodeFontSizeInput");
      var nodeFontAlignInput = $("input#nodeFontAlignInput");
      var nodeColorInput = $("input#nodeColorInput");
      var nodeBorderWidthInput = $("input#nodeBorderWidthInput");
      var nodeBorderColorInput = $("input#nodeBorderColorInput");

      var nodeD = getNodeFromNetworkDataById(properties.nodes[0]);
      lastSelectedNodeId = nodeD.id;

      nodeIdInput.val(nodeD.id);
      nodeLabelTextarea.val(nodeD.label);
      pNode = network.getPositions()[nodeD.id];
      nodeXInput.text(String(pNode.x));
      nodeYInput.text(String(pNode.y));
      if (typeof nodeD.shape !== "undefined" && nodeD.shape.length > 0) {
         $('#nodeShapeInput option[value="' + nodeD.shape + '"]').attr("selected", "selected");
      } else {
         $('#nodeShapeInput option[value="box"]').attr("selected", "selected");
      }
      if (typeof nodeD.link !== "undefined" && nodeD.link.length > 0) {
         nodeLinkTextarea.val(nodeD.link);
      } else {
         nodeLinkTextarea.val("");
      }
      if (typeof nodeD.font !== "undefined" && typeof nodeD.font.size !== "undefined") {
         nodeFontSizeInput.val(nodeD.font.size);
      } else {
         nodeFontSizeInput.val(14);
         nodeD.font = {size: 14};
      }
      if (typeof nodeD.font !== "undefined" && typeof nodeD.font.align !== "undefined") {
         nodeFontAlignInput.val(nodeD.font.align);
      } else {
         nodeFontAlignInput.val("left");
         nodeD.font = {align: "left"};
      }
      if (typeof nodeD.color !== "undefined" && typeof nodeD.color.background !== "undefined") {
         nodeColorInput.val(nodeD.color.background);
      } else {
         nodeD.color = {background: "", border: ""};
      }
      if (typeof nodeD.borderWidth !== "undefined" && nodeD.borderWidth.length > 0) {
         nodeBorderWidthInput.val(nodeD.borderWidth);
      }
      if (typeof nodeD.color !== "undefined" && nodeD.color.length > 0) {
         nodeBorderColorInput.val(nodeD.color.border);
      }
      if (nodeD.label.search(new RegExp(projectSaveNodeNamePrefix + ".*")) >= 0) {
         loadSavedProjectToMenuButton.show();
         loadSavedProjectToMenuButton.saveProjectLabel = nodeD.label;
         deleteSavedProjectButton.show();
         deleteSavedProjectButton.saveProjectLabel = nodeD.label;
      } else {
         loadSavedProjectToMenuButton.hide();
         deleteSavedProjectButton.hide();
      }
   });
	network.on('resize', function(properties) {
		canvasWidth = properties.width;
		canvasHeight = properties.height;
	});
   network.on('selectEdge', function (properties) {

      if (properties.nodes.length > 0) return;
      
      schemeEditNodesMenu.hide();
      schemeEditEdgesMenu.show();
      var edgeIdInput = $("input#edgeIdInput");
      var edgeLabelTextarea = $("textarea#edgeLabelTextarea");

      var edgeColorInput = schemeEditEdgesMenu.find("#edgeColorInput");
      var edgeDashesEnabledInput = schemeEditEdgesMenu.find("#edgeDashesEnabledInput");

      var edgeArrowsFromEnabledInput = schemeEditEdgesMenu.find("input#edgeArrowsFromEnabledInput");
      var edgeArrowsMiddleEnabledInput = schemeEditEdgesMenu.find("input#edgeArrowsMiddleEnabledInput");
      var edgeArrowsToEnabledInput = schemeEditEdgesMenu.find("input#edgeArrowsToEnabledInput");

      var edgeShadowEnabledInput = schemeEditEdgesMenu.find("input#edgeShadowEnabledInput");
      var edgeShadowColorInput = schemeEditEdgesMenu.find("input#edgeShadowColorInput");
      var edgeShadowSizeInput = schemeEditEdgesMenu.find("input#edgeShadowSizeInput");
      var edgeShadowXInput = schemeEditEdgesMenu.find("input#edgeShadowXInput");
      var edgeShadowYInput = schemeEditEdgesMenu.find("input#edgeShadowYInput");

      var edgeSmoothEnabledInput = schemeEditEdgesMenu.find("input#edgeSmoothEnabledInput");
      var edgeSmoothTypeInput = schemeEditEdgesMenu.find("input#edgeSmoothTypeInput");
      var edgeSmoothForceDirectionInput = schemeEditEdgesMenu.find("input#edgeSmoothForceDirectionInput");
      var edgeSmoothRoundnessInput = schemeEditEdgesMenu.find("input#edgeSmoothRoundnessInput");

      var edgeD = getEdgeFromNetworkDataById(properties.edges[0]);
      //console.log(edgeD);
      lastSelectedEdgeId = edgeD.id;

      edgeIdInput.val(edgeD.id);

      if (typeof edgeD.label === "undefined") {
         edgeLabelTextarea.val("");
      } else {
         edgeLabelTextarea.val(edgeD.label);
      }

      if (typeof edgeD.color !== "undefined" && 
          typeof edgeD.color.color !== "undefined" &&
          edgeD.color.color != "") {
          $('#edgeColorInput').val(edgeD.color.color);
      } else {
          $('#edgeColorInput').val("rgb(0,0,0)");
      }

      if (typeof edgeD.dashes !== "undefined" &&
          edgeD.dashes == true) {
          $('#edgeDashesEnabledInput').prop('checked', true);
      } else {
          $('#edgeDashesEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.arrows !== "undefined" && 
          typeof edgeD.arrows.from !== "undefined" && 
          typeof edgeD.arrows.from.enabled !== "undefined" &&
          edgeD.arrows.from.enabled == true) {
          $('#edgeArrowsFromEnabledInput').prop('checked', true);
      } else {
          $('#edgeArrowsFromEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.arrows !== "undefined" && 
          typeof edgeD.arrows.middle !== "undefined" && 
          typeof edgeD.arrows.middle.enabled !== "undefined" &&
          edgeD.arrows.middle.enabled == true) {
          $('#edgeArrowsMiddleEnabledInput').prop('checked', true);
      } else {
          $('#edgeArrowsMiddleEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.arrows !== "undefined" && 
          typeof edgeD.arrows.to !== "undefined" && 
          typeof edgeD.arrows.to.enabled !== "undefined" &&
          edgeD.arrows.to.enabled == true) {
          $('#edgeArrowsToEnabledInput').prop('checked', true);
      } else {
          $('#edgeArrowsToEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.shadow !== "undefined" && 
          typeof edgeD.shadow.enabled !== "undefined" &&
          edgeD.shadow.enabled == true) {
          $('#edgeShadowEnabledInput').prop('checked', true);
      } else {
          $('#edgeShadowEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.shadow !== "undefined" && 
          typeof edgeD.shadow.color !== "undefined" &&
          edgeD.shadow.color != "") {
          $('#edgeShadowColorInput').val(edgeD.shadow.color);
      } else {
          $('#edgeShadowColorInput').val("rgba(0,0,0,0.5)");
      }

      if (typeof edgeD.shadow !== "undefined" && 
          typeof edgeD.shadow.size !== "undefined" &&
          typeof edgeD.shadow.size === "number" &&
          !isNaN(edgeD.shadow.size)) {
          $('#edgeShadowSizeInput').val(String(edgeD.shadow.size));
      } else {
          $('#edgeShadowSizeInput').val("10");
      }

      if (typeof edgeD.shadow !== "undefined" && 
          typeof edgeD.shadow.x !== "undefined" &&
          typeof edgeD.shadow.x === "number" &&
          !isNaN(edgeD.shadow.x)) {
          $('#edgeShadowXInput').val(String(edgeD.shadow.x));
      } else {
          $('#edgeShadowXInput').val("5");
      }

      if (typeof edgeD.shadow !== "undefined" && 
          typeof edgeD.shadow.y !== "undefined" &&
          typeof edgeD.shadow.y === "number" &&
          !isNaN(edgeD.shadow.y)) {
          $('#edgeShadowYInput').val(String(edgeD.shadow.y));
      } else {
          $('#edgeShadowYInput').val("5");
      }

      if (typeof edgeD.smooth !== "undefined" && 
          typeof edgeD.smooth.enabled !== "undefined" &&
          edgeD.smooth.enabled == true) {
          $('#edgeSmoothEnabledInput').prop('checked', true);
      } else {
          $('#edgeSmoothEnabledInput').prop('checked', false);
      }

      if (typeof edgeD.smooth !== "undefined" && 
          typeof edgeD.smooth.type !== "undefined" &&
          edgeD.smooth.type != "") {
          $('#edgeSmoothTypeInput option[value="' + edgeD.smooth.type + '"]').attr("selected", "selected");
      } else {
          $('#edgeSmoothTypeInput option[value="dynamic"]').attr("selected", "selected");
      }

      if (typeof edgeD.smooth !== "undefined" && 
          typeof edgeD.smooth.forceDirection !== "undefined" &&
          edgeD.smooth.forceDirection != "") {
          $('#edgeSmoothForceDirectionInput option[value="' + edgeD.smooth.forceDirection + '"]').attr("selected", "selected");
      } else {
          $('#edgeSmoothForceDirectionInput option[value="none"]').attr("selected", "selected");
      }

      if (typeof edgeD.smooth !== "undefined" && 
          typeof edgeD.smooth.roundness !== "undefined" &&
          typeof edgeD.smooth.roundness == "number" &&
          !isNaN(edgeD.smooth.roundness)) {
          $('#edgeSmoothRoundnessInput').val(String(edgeD.smooth.roundness));
      } else {
          $('#edgeSmoothRoundnessInput').val("0.5");
      }

   });

	network.on('deselectEdge', function (properties) {
		schemeEditEdgesMenu.hide();
		$(".vis-separator-line").remove();
		$(".vis-close").remove();
	});
	network.on("hoverNode", function(params) {
	});

	network.on("blurNode", function(params) {
	});
	network.on('deselectNode', function (properties) {
		schemeEditNodesMenu.hide();
		$(".vis-separator-line").remove();
		$(".vis-close").remove();
	});
	var lastPositionX = "a";
	var startN1X = null;
	var startN1Y = null;
	var startN2X = null;
	var startN2Y = null;
	network.on("release", function(event) {
		var n1X = parseFloat(network.getViewPosition().x.toFixed(5));
		var n1Y = parseFloat(network.getViewPosition().y.toFixed(5));
		//От окончательного положения драга отнимаем начальное положение
		var diffN1X = parseFloat((n1X-startN1X).toFixed(5));
		var diffN1Y = parseFloat((n1Y-startN1Y).toFixed(5));
		//Прибавляем к начальному положению нижней network дифф из предыдущег подсчета.
		//Чтобы сдвинуть нижний network на тот же шаг
		var lastN2X = parseFloat((startN2X+diffN1X).toFixed(5));
		var lastN2Y = parseFloat((startN2Y+diffN1Y).toFixed(5));
		var network1Scale = network1.getScale();
		var positionX = parseFloat((lastN2X - canvasWidth/(2*network1Scale)).toFixed(5));
		var positionY = parseFloat((lastN2Y - canvasHeight/(2*network1Scale)).toFixed(5));
		network1.moveTo({
			position: {x:positionX, y:positionY},
			offset: {x: -canvasWidth/2, y: -canvasHeight/2},
			scale: network1Scale,
		});
	});
	network.on("dragging", function(event) {
		var n1X = parseFloat(network.getViewPosition().x.toFixed(5));
		var n1Y = parseFloat(network.getViewPosition().y.toFixed(5));
		var n2X = parseFloat(network1.getViewPosition().x.toFixed(5));
		var n2Y = parseFloat(network1.getViewPosition().y.toFixed(5));
		if ($.type(startN1X) == "null") {startN1X = n1X;}
		if ($.type(startN1Y) == "null") {startN1Y = n1Y;}
		if ($.type(startN2X) == "null") {startN2X = n2X;}
		if ($.type(startN2Y) == "null") {startN2Y = n2Y;}
		if (n1X != n2X && n1Y != n2Y) {
			var eventCenterX = event.event.center.x;
			var eventCenterY = event.event.center.y;
			var network1Scale = network1.getScale();
			//var positionX = parseFloat((lastN2X - canvasWidth/(2*network1Scale)).toFixed(5));
			//var positionY = parseFloat((lastN2Y - canvasHeight/(2*network1Scale)).toFixed(5));
			var positionX = (n1X - n2X) - (network1.body.view.translation.x*(1/network1Scale));
			var positionY = (n1Y - n2Y) - (network1.body.view.translation.y*(1/network1Scale));
			network1.moveTo({
				position: {x:positionX, y:positionY},
				offset: {x: -canvasWidth/2, y: -canvasHeight/2},
				scale: network1Scale,
			});
			var n1X = parseFloat(network.getViewPosition().x.toFixed(5));
			var n1Y = parseFloat(network.getViewPosition().y.toFixed(5));
			var n2X = parseFloat(network1.getViewPosition().x.toFixed(5));
			var n2Y = parseFloat(network1.getViewPosition().y.toFixed(5));
			lastPositionX = positionX;
		} else {
		}
	});
   network.on("zoom", function(event) {
      nodesDropDownMenuNodesIds.forEach(function(nodeId) {
         network.body.data.nodes.remove(nodeId);
      });
      nodesDropDownMenuNodesIds = [];

		var scale = network.getScale();
         if (cursorNodeId != null) {
                node = network.body.data.nodes.get(cursorNodeId);
                node.font.size = 5/scale;
                node = network.body.data.nodes.update(node);
         }
		var n1X = parseFloat(network.getViewPosition().x.toFixed(5));
		var n1Y = parseFloat(network.getViewPosition().y.toFixed(5));
		var positionX = parseFloat((n1X - canvasWidth/(2*event.scale)).toFixed(5));
		var positionY = parseFloat((n1Y - canvasHeight/(2*event.scale)).toFixed(5));
		//var positionX = parseFloat((event.pointer.x).toFixed(5));
		//var positionY = parseFloat((event.pointer.y).toFixed(5));
		network.moveTo({
			position: {x: positionX, y: positionY},
			offset: {x: -canvasWidth/2, y: -canvasHeight/2},
			scale: event.scale,
		});
		network1.moveTo({
			position: {x: positionX, y: positionY},
			offset: {x: -canvasWidth/2, y: -canvasHeight/2},
			scale: event.scale,
		});
	});
	//network.editNode();
	$(".vis-separator-line").remove();
	$(".vis-close").remove();
}
//End of draw function
function updateSchemeFromMenu(newNodes, newEdges) {
	var schemeDataJsonFromMenu = $("textarea#schemeDataTextArea").val();
	var schemeData = JSON.parse(schemeDataJsonFromMenu);
        var nodesData = objectToArray(schemeData.canvas1Data.nodes._data);
        nodesData = nodesData.concat(newNodes);
	var nodes = new vis.DataSet(nodesData);
        var edgesData = objectToArray(schemeData.canvas1Data.edges._data);
        edgesData = edgesData.concat(newEdges);
	var edges = new vis.DataSet(edgesData);
	var nodes1 = new vis.DataSet(objectToArray(schemeData.canvas2Data.nodes._data));
	var edges1 = new vis.DataSet(objectToArray(schemeData.canvas2Data.edges._data));
	data = {
		nodes: nodes,
		edges: edges
	};
	data1 = {
		nodes: nodes1,
		edges: edges1
	};
        dataCash = schemeData.dataCash;
	draw();
	var setup = schemeData.setup;
	var positionX = parseFloat((setup.viewPosition.x - canvasWidth/(2*setup.scale)).toFixed(5));
	var positionY = parseFloat((setup.viewPosition.y - canvasHeight/(2*setup.scale)).toFixed(5));
	network.moveTo({
		position: {x:positionX, y:positionY},
		offset: {x: -canvasWidth/2, y: -canvasHeight/2},
		scale: setup.scale,
	});
	network1.moveTo({
		position: {x:positionX, y:positionY},
		offset: {x: -canvasWidth/2, y: -canvasHeight/2},
		scale: setup.scale,
	});
	console.log("Scheme updated");
}
function updateMenuFromScheme(removeNodesIds, removeEdgesIds) {
	var scale = network.getScale();
	var viewPosition = network.getViewPosition();
	var data = {
		nodes: new vis.DataSet([]),
		edges: new vis.DataSet([])
	};
	var data1 = {
		nodes: new vis.DataSet([]),
		edges: new vis.DataSet([])
	};
	var schemeData = {
		canvas1Data: data,
		canvas2Data: data1,
                dataCash: dataCash,
		setup: {
			scale: scale,
			viewPosition: viewPosition
		}
	};
	var positions1 = network.getPositions();
	var positions2 = network1.getPositions();
	nodes1ToSave = {}; 
	network.body.data.nodes.get().forEach(function(item) {
                if (removeNodesIds.indexOf(item.id) == -1 &&
                    item.id != cursorNodeId) {
		   nodes1ToSave[item.id.toString()] = item;
                }
	});
	objectToArray(positions1).forEach(function(position) {
                if (removeNodesIds.indexOf(position.id) == -1 &&
                    position.id != cursorNodeId) {
		   var node = nodes1ToSave[position.id.toString()];
		   node.x = position.x;
		   node.y = position.y;
                }
	});
	schemeData.canvas1Data.nodes._data = nodes1ToSave;
	var edges1ToSave = {}; 
	network.body.data.edges.get().forEach(function(item) {
                if (removeEdgesIds.indexOf(item.id) == -1) {
		   edges1ToSave[item.id.toString()] = item;
                }
	});
	schemeData.canvas1Data.edges._data = edges1ToSave;
	var nodes2ToSave = {}; 
	network1.body.data.nodes.get().forEach(function(item) {
		nodes2ToSave[item.id.toString()] = item;
	});
	objectToArray(positions2).forEach(function(position) {
		var node = nodes2ToSave[position.id.toString()];
		node.x = position.x;
		node.y = position.y;
	});
	schemeData.canvas2Data.nodes._data = nodes2ToSave;
	var edges2ToSave = {}; 
	network1.body.data.edges.get().forEach(function(item) {
		edges2ToSave[item.id.toString()] = item;
	});
	schemeData.canvas2Data.edges._data = edges2ToSave;
	var schemeDataJson = JSON.stringify(schemeData, undefined, 2);
	$("textarea#schemeDataTextArea").val(schemeDataJson);
}
function clearPopUp() {
	document.getElementById('saveButton').onclick = null;
	document.getElementById('cancelButton').onclick = null;
	document.getElementById('network-popUp').style.display = 'none';
        network.selectionHandler.unselectAll();
        $("#network div.vis-network").focus();
}
function cancelEdit(callback) {
	clearPopUp();
	callback(null);
}
function saveData(data,callback) {
	data.id = document.getElementById('node-id').value;
	data.label = document.getElementById('node-label').value;
	clearPopUp();
        if (data.label.split("\n").length > 1) {
           var labelHeightShift = 14*data.label.split("\n").length/2 - 7;
           lastEditedNodesIds.forEach(function(nodeId) {
              var nodeD = getNodeFromNetworkDataById(nodeId);
              if (typeof nodeD !== "undefined" && nodeD !== null) {
                 var pNode = network.getPositions()[nodeId];
                 nodeD.x = pNode.x;
                 nodeD.y = pNode.y - labelHeightShift;
                 network.nodesHandler.moveNode(nodeD.id, nodeD.x, nodeD.y);
              }
           });
        }
   if (data.label.lastIndexOf("http", 0) === 0) {
      data.link = data.label.trim();
   }
   callback(data);
}
function init() {
	draw();
}
function saveDrawingSurface() {
   drawingSurfaceImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}
function restoreDrawingSurface() {
    ctx.putImageData(drawingSurfaceImageData, 0, 0);
}
function selectNodesFromHighlight() {
    var fromX, toX, fromY, toY;
    var nodesIdInDrawing = [];
    var xRange = getStartToEnd(rect.startX, rect.w);
    var yRange = getStartToEnd(rect.startY, rect.h);

    var allNodes = network.body.data.nodes.get();
    for (var i = 0; i < allNodes.length; i++) {
        var curNode = allNodes[i];
        var nodePosition = network.getPositions([curNode.id]);
        var nodeXY = network.canvasToDOM({x: nodePosition[curNode.id].x, y: nodePosition[curNode.id].y});
        if (xRange.start <= nodeXY.x && nodeXY.x <= xRange.end && yRange.start <= nodeXY.y && nodeXY.y <= yRange.end) {
            nodesIdInDrawing.push(curNode.id);
        }
    }
    network.selectNodes(nodesIdInDrawing);
}
function getStartToEnd(start, theLen) {
    return theLen > 0 ? {start: start, end: start + theLen} : {start: start + theLen, end: start};
}
function getNodesByRegexSearchInLabel(network, regex) {
	var nodes = network.body.data.nodes.get();
	var foundNodes = []
	for (var n = 0; n < nodes.length; n++) {
		if ((typeof nodes[n].label !== "undefined") && (nodes[n].label.search(regex) >= 0)) { 
			foundNodes.push(nodes[n]);
		}
	};
	return foundNodes;
}
function updateNodePositionData(network, node) {
	var nodesPositions = objectToArray(network.getPositions());
	for (var n = 0; n < nodesPositions.length; n++) {
		if (nodesPositions[n].id == node.id) { 
			node.x = nodesPositions[n].x;
			node.y = nodesPositions[n].y;
		}
	};
}
function makeSaveProjectToBrowserNode(label, positionX, positionY) {
	network.body.data.nodes.add([{
		label:label,
		x:positionX,
		y:positionY
	}]);
}
function findProjectSavesKeys() {
	var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + saveCanvasProjectDataLine + "$"));
	if (saveCanvasProjectDataNodes.length == 0) {
		console.log("ERROR: no saveCanvasProjectData node");
		return [];
	}
	var saveCanvasProjectDataNode = saveCanvasProjectDataNodes[0];
	var projectSaveId = getProjectId(saveCanvasProjectDataNode, network);
	var saveNameRegex = new RegExp(projectSaveNodeNamePrefix + projectSaveId + "_.*");
	var storageItemsSize = localStorage.length;
	var keys = [];
	for (var i = 0; i < storageItemsSize; i++) {
		var storageKey = localStorage.key(i);
		if (storageKey.search(saveNameRegex) >= 0) {
			keys.push(localStorage.key(i));
		}
	}
	return keys;
}
function deleteNodesIfTheyAreProjectSaves(network, nodes) {
	var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + saveCanvasProjectDataLine + "$"));
	if (saveCanvasProjectDataNodes.length == 0) {
		console.log("ERROR: no saveCanvasProjectData node");
		return;
	}
	var saveCanvasProjectDataNode = saveCanvasProjectDataNodes[0];
	var projectSaveId = getProjectId(saveCanvasProjectDataNode, network);
	objectToArray(data.nodes).forEach(function(nodeId) {
		var node = getNodeById(network.body.data.nodes.get(), nodeId);
		if (node.label.search(new RegExp(projectSaveNodeNamePrefix + projectSaveId + "_.*")) >= 0) {
			localStorage.removeItem(node.label);
		}
	});
}
function removeSaveNodes() {
	var oldSavesKeys = findProjectSavesKeys();
	var nodes = network.body.data.nodes;
	for (var i = 0; i < oldSavesKeys.length; i++) {
		var key = oldSavesKeys[i];
		var saveCanvasProjectDateNodes = getNodesByRegexSearchInLabel(network, new RegExp(key));
		saveCanvasProjectDateNodes.forEach(function(node) {
			nodes.remove(node.id);
		});
	}
}
function getProjectId(saveCanvasProjectDataNode, network) {
	var projectSaveIdNodes = getNodesByRegexSearchInLabel(network, new RegExp(projectSaveIdLine));
	if (projectSaveIdNodes.length == 0) {
		console.log("ERROR: no " + projectSaveIdLine + " node");
		return;
	}
	var projectSaveIdNode = projectSaveIdNodes[0];
	var connectedNodesIds = network.getConnectedNodes(projectSaveIdNode.id);
	var projectIdNode;
	connectedNodesIds.forEach(function(nodeId) {
		var node = getNodeById(network.body.data.nodes.get(), nodeId);
		if (node.label.split(": ")[0] == "projectSaveId") {
			projectIdNode = node;
		}
	});
	return projectIdNode.label.split(": ")[1]; 
}
function buildSaveNodesList() {
	var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + saveCanvasProjectDataLine + "$"));
	if (saveCanvasProjectDataNodes.length == 0) {
		console.log("ERROR: no saveCanvasProjectData node");
		return;
	}
	var saveCanvasProjectDataNode = saveCanvasProjectDataNodes[0];
	updateNodePositionData(network, saveCanvasProjectDataNode);
	var oldSavesKeys = findProjectSavesKeys();
	oldSavesKeys.forEach(function(key,i) {
		makeSaveProjectToBrowserNode(
			key,
			saveCanvasProjectDataNode.x + 400, 
			saveCanvasProjectDataNode.y + 40*i);
	});
}
function deleteProjectLocalStorageSaves(network) {
	var oldSavesKeys = findProjectSavesKeys();
	for (var i = 0; i < oldSavesKeys.length; i++) {
		var key = oldSavesKeys[i];
		localStorage.removeItem(key);
	}
}
function deleteLocalStorageSavesAndSaveNodes(network) {
	removeSaveNodes();
	deleteProjectLocalStorageSaves(network);
}
function deleteLocalStorageSaveAndSaveNodeBySaveName(network, saveName) {
	localStorage.removeItem(saveName);
	var saveCanvasProjectDateNodes = getNodesByRegexSearchInLabel(network, new RegExp(saveName));
	saveCanvasProjectDateNodes.forEach(function(node) {
		nodes.remove(node.id);
	});
}
function loadSavedProjectDataToDataMenuBySaveName(network, saveName) {
	var jsonString = localStorage.getItem(saveName);
	$("textarea#schemeDataTextArea").val(jsonString);
}
function saveProjectToBrowserLocalStorage(network) {
	var regex = saveCanvasProjectDataLine;
	var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + regex + "$"));
	var projectSaveIdNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + projectSaveIdLine + "$"));
	var projectSaveIdWithDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + projectSaveIdLine + ":.*$"));
	if ((typeof saveCanvasProjectDataNodes === "undefined") || (saveCanvasProjectDataNodes.length == 0) ||
		(typeof projectSaveIdNodes === "undefined") || (projectSaveIdNodes.length == 0) ||
		(typeof projectSaveIdWithDataNodes === "undefined") || (projectSaveIdWithDataNodes.length == 0)) 
	{
		alert("Add setup nodes for canvas save information: '" + saveCanvasProjectDataLine + "', '" + projectSaveIdLine + "', '" +  projectSaveIdLine + ": projectName'.");
	} else {
		removeSaveNodes();
		var date = new Date().toLocaleString("ru-RU");
		date = date.replace(/\./g,"-");
		date = date.replace(/:/g,"-");
		date = date.replace(/,/g,"_");
		date = date.replace(" ","");
		var projectJson = $("textarea#schemeDataTextArea").val();
		var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + saveCanvasProjectDataLine + "$"));
		if (saveCanvasProjectDataNodes.length == 0) {
			console.log("ERROR: no saveCanvasProjectData node");
			return;
		}
		var saveCanvasProjectDataNode = saveCanvasProjectDataNodes[0];
		var projectSaveId = getProjectId(saveCanvasProjectDataNode, network);
		localStorage.setItem(projectSaveNodeNamePrefix + projectSaveId + "_" + date,projectJson);
		buildSaveNodesList();
	}
}
function clearBrowserLocalStorage() {
	var storageItemsSize = localStorage.length;
	var keys = [];
	for (var i = 0; i < storageItemsSize; i++) {
		keys.push(localStorage.key(i));
	}
	for (var i = 0; i < storageItemsSize; i++) {
		var key = keys[i];
		localStorage.removeItem(key);
	}
}
function showBrowserLocalStorage() {
	var storageItemsSize = localStorage.length;
	for (var i = 0; i < storageItemsSize; i++) {
		var key = localStorage.key(i);
	}
}
function showBrowserLocalStorageKeys() {
	var storageItemsSize = localStorage.length;
	for (var i = 0; i < storageItemsSize; i++) {
		var key = localStorage.key(i);
	}
}
function buildPagesNodes(level, width, alignMap, parentNodeId) {
   var nodeIdInput = schemeEditNodesMenu.find("input#nodeIdInput").val();
   var pNode = network.getPositions()[nodeIdInput];
   var keys = level.keys;
   var lastNodeId;
   level.keys.forEach(function(key, index) {
      if (typeof level.nodes[key].nodes !== "undefined") {
         var newWidth = width + level.maxWidth*14;
         buildPagesNodes(level.nodes[key], newWidth, alignMap, lastNodeId);
      } else {
         var line = level.nodes[key];
         var labelAndLink = line.split(" (http");
         var label = labelAndLink[0].trim();
         var link = "";
         if (typeof labelAndLink[1] !== "undefined") {
            link = "http" + labelAndLink[1].slice(0,-1);
         }
         var nodeId = addNodeWithIdOnCanvas(
            label, 
            link,
            {x:pNode.x, y:pNode.y}, 
            width + level.maxWidth*14/2, 
            25*parseInt(key, 10), 
            network,
            parentNodeId + "b" + String(index))[0];
         lastNodeId = nodeId;
         if (typeof parentNodeId !== "undefined" && parentNodeId !== null) {
            var edgeData = {from: parentNodeId, to: nodeId};
            network.body.data.edges.getDataSet().add(edgeData);
         }
         if (typeof alignMap[keys[0]] === "undefined") {
            alignMap[keys[0]] = [];
         }
         alignMap[keys[0]].push(network.body.nodes[nodeId]);
      }
   });
}
function getLevelLastBranch(tree, levelNumber) {
   var branch = tree;
   var lastKey = tree.keys.slice(-1)[0];
   for (var i = 0; i < levelNumber; i++) {
      branch = branch.nodes[lastKey];
      if (typeof branch === "undefined") {
         return branch;
      }
      console.log(branch);
      lastKey = branch.keys.slice(-1)[0];
   }
   return branch;
}
function buildRow(item, index, root) {

   var currentItemStep = item.match(/^\s*/g)[0].split("    ").length - 1;

   var key = index.toString();

   var labelAndLink = item.trim().split(" (http");
   var label = labelAndLink[0].trim();

   if (root.lastItemStep < currentItemStep) {
      var branch = {nodes:{}};
      branch.keys = [key];
      branch.nodes[key] = item.trim();
      branch.maxWidth = label.length;
      branch.itemStep = currentItemStep;
      branch.lastItemStep = currentItemStep;
      var parentLevel = getLevelLastBranch(root, currentItemStep - 1);
      parentLevel.nodes[key] = branch;
      parentLevel.keys.push(key);
   } else {
      var parentLevel = getLevelLastBranch(root, currentItemStep);
      parentLevel.nodes[key] = item.trim();
      if (parentLevel.maxWidth < label.length) {
         parentLevel.maxWidth = label.length;
      }
      parentLevel.keys.push(key);
   }

   root.lastItemStep = item.match(/^\s*/g)[0].split("    ").length - 1;

   return root;
}
   function splitNodeLabelToList(nodeId) {
      var sourceNode = getNodeFromNetworkDataById(nodeId);
      var nodeLabel = sourceNode.label.trim();
      var pNode = network.getPositions()[nodeId];
      var labelLines;
      if (nodeLabel.split("!@!@").length > 1) {
         labelLines = nodeLabel.split("\n!@!@\n");
      } else {
         labelLines = nodeLabel.split("\n");
      }
      var newLabelLines = [];
      labelLines.forEach(function(line) {
         if (line.length > 0) newLabelLines.push(line);
      });
      var nodeBBox = network.nodesHandler.getBoundingBox(nodeId);
      var y = nodeBBox["top"];
      var newNodesIds = [];
      var newNodesIdsCol2 = [];
      if (newLabelLines[0] == "to") {
         newLabelLines.shift();
         var root = {nodes:{}};
         root.itemStep = 0;
         root.lastItemStep = 0;
         root.maxWidth = 0;
         root.keys = []
         newLabelLines.forEach(function(line,index) {
            root = buildRow(line, index, root);
            console.log("splitNode. Add node. to: " + String(index) + ", " + String(newLabelLines.length));
         });
         var alignMap = {};
         buildPagesNodes(root, 600, alignMap, nodeId);
         for (var key in alignMap) {
            //console.log(key);
            alignNodesLeft(alignMap[key]);
         }
      } else if (newLabelLines[0] == "tg") {
         newLabelLines.shift();
         newLabelLines.forEach(function(line,index) {
            console.log(line);
            buildThemeGraph(line, pNode.x + 500, pNode.y + 1500*index);
            network.body.data.nodes.add({
               id: nodeId + "b" + index,
   	       label:line,
   	       x: pNode.x + 7000,
   	       y: pNode.y + 1500*index,
               font: {size: 1000},
               color: {background:"#ffc63b"} 
            });
            console.log("splitNode. Add node. tg: " + String(index) + ", " + String(newLabelLines.length));
         });
      } else if (newLabelLines[0] == "wiki") {
         newLabelLines.shift();
         var alignNodesList = [];
         for (var i=0; i< newLabelLines.length; i++) {
            var line = newLabelLines[i];
            console.log(line);
            link = "";
            var wikiLinkPart = line.match(/.*?\[\[(.*?)\]\].*/);
            if (wikiLinkPart != null) {
               var linkPart = wikiLinkPart[1].replace(/\|.*/,"").trim();
               link = "https://en.wikipedia.org/wiki/" + linkPart;
            }
            var addedNodeId = network.body.data.nodes.add({
               id: nodeId + "b" + String(i),
   	       label:line,
               link: link,
   	       x: pNode.x + 500,
   	       y: pNode.y + 25*i 
            })[0];
            console.log("splitNode. Add node. wiki: " + String(i) + ", " + String(newLabelLines.length));
            alignNodesList.push(network.body.nodes[addedNodeId]);
         };
         alignNodesLeft(alignNodesList);
      } else {
         newLabelLines.forEach(function(line,index) {
            //Add starting "//#1" for comments nodes
            if (newLabelLines[0].lastIndexOf("//#1", 0) === 0 && line.lastIndexOf("//#1", 0) !== 0) {
               line = "//#1 " + line;
            }
            var position = {
               x: pNode.x + 300,
               y: y + (14*line.split("\n").length)/2
            };
            var newNodeId = nodeId + "b" + String(index);
            var addedNodeId = addNodeWithIdOnCanvas(line, "", position, 0, 0, network, newNodeId);
            console.log("splitNode. Add node: " + String(index) + ", " + String(newLabelLines.length));
            newNodesIds.push(addedNodeId);
            y = y + 14*line.split("\n").length + 10;
            //If use !@!@ delimiter, then take result string and use it first line as
            //label for new node to the right. E.g. as label for function name.
            if (nodeLabel.split("!@!@").length > 1) {
               labelNodeLabel = line.split("\n").length > 0 ? line.split("\n")[0] : "";
               var labelNodePosition = {x: position.x + 1000, y: position.y};
               var newLabelNodeId = nodeId + "bb" + String(index);
               var addedLabelNodeId = addNodeWithIdOnCanvas(labelNodeLabel, "", labelNodePosition, 0, 0, network, newLabelNodeId)[0];
               newNodesIdsCol2.push(addedLabelNodeId);
               network.body.data.edges.add({
                  from:newNodeId,
                  to:addedLabelNodeId
               });
            }
         });
         console.log("splitNode. Align nodes");
         var nodes = [];
         newNodesIds.forEach(function(nodeId) {      
            nodes.push(network.body.nodes[nodeId]);
         });
         alignNodesLeft(nodes);
         var nodesCol2 = [];
         newNodesIdsCol2.forEach(function(nodeId) {      
            nodesCol2.push(network.body.nodes[nodeId]);
         });
         alignNodesLeft(nodesCol2);
      }
   }
$(document).ready(function() {

	containerJQ[0].oncontextmenu = () => false;
	//topMenu = $("<div style='margin:0 0 0 0; padding:3px; background-color: black;color:white;z-index:9999'></div>");
	
	body = $("body");

	showDataButton = $("<div id='showData' style='cursor:pointer;color:black;float:right;position:fixed;top:3px; line-height: 0;right:0;z-index:9999;padding: 15px;margin:-5px 0 5px 0; background-color:white;border: 1px solid #a3a3a3;font-size:12px'>showData</div>");
	body.append(showDataButton);

	schemeEditNodesMenu = $("<div id='schemeEditNodesMenu' style='height:100%; width:300px; position:fixed; left:0; top:29px;border-right: 1px solid #a3a3a3; background-color:white;z-index:5000; padding: 40px 20px 20px 20px'></div>");
	schemeEditEdgesMenu = $("<div id='schemeEditEdgesMenu' style='height:100%; width:300px; position:fixed; left:0; top:29px;border-right: 1px solid #a3a3a3; background-color:white;z-index:5000; padding: 40px 20px 20px 20px'></div>");
	schemeEditNodesMenu.hide();
	schemeEditEdgesMenu.hide();
	body.append(schemeEditNodesMenu);
	body.append(schemeEditEdgesMenu);
	var nodesSetupTable = $("<table id='nodesSetupTable'></table>");

	var nSRow1 = $("<tr></tr>");
	nodesSetupTable.append(nSRow1);
	var nSItem11 = $("<td></td>");
	var nSItem12 = $("<td></td>");
	nSRow1.append(nSItem11);
	nSRow1.append(nSItem12);
	var nodeIdInputLabel = $("<div style=''><span>nodeId: </span></div>");
	nSItem11.append(nodeIdInputLabel);
	var nodeIdInput = $("<input type='text' id='nodeIdInput'></input>");
	nSItem12.append(nodeIdInput);

	var nSRow2 = $("<tr></tr>");
	nodesSetupTable.append(nSRow2);
	var nSItem21 = $("<td></td>");
	var nSItem22 = $("<td></td>");
	nSRow2.append(nSItem21);
	nSRow2.append(nSItem22);
	var nodeLabelInputLabel = $("<div style=''><span>nodeLabel: </span></div>");
	nSItem21.append(nodeLabelInputLabel);
	var nodeLabelTextarea = $("<textarea cols='19' rows='3' id='nodeLabelTextarea'></textarea>");
	nSItem22.append(nodeLabelTextarea);

	var nSRow3 = $("<tr></tr>");
	nodesSetupTable.append(nSRow3);
	var nSItem31 = $("<td></td>");
	var nSItem32 = $("<td></td>");
	nSRow3.append(nSItem31);
	nSRow3.append(nSItem32);
	var nodeXInputLabel = $("<div style=''><span>nodeX: </span></div>");
	nSItem31.append(nodeXInputLabel);
	//var nodeXInput = $("<input type='text' id='nodeXInput'></input>");
	var nodeXInput = $("<div style=''><span id='nodeXInput'></span></div>");
	nSItem32.append(nodeXInput);

	var nSRow4 = $("<tr></tr>");
	nodesSetupTable.append(nSRow4);
	var nSItem41 = $("<td></td>");
	var nSItem42 = $("<td></td>");
	nSRow4.append(nSItem41);
	nSRow4.append(nSItem42);
	var nodeYInputLabel = $("<div style=''><span>nodeY: </span></div>");
	nSItem41.append(nodeYInputLabel);
	//var nodeYInput = $("<input type='text' id='nodeYInput'></input>");
	var nodeYInput = $("<div style=''><span id='nodeYInput'></span></div>");
	nSItem42.append(nodeYInput);

	var nSRow5 = $("<tr></tr>");
	nodesSetupTable.append(nSRow5);
	var nSItem51 = $("<td></td>");
	var nSItem52 = $("<td></td>");
	nSRow5.append(nSItem51);
	nSRow5.append(nSItem52);
	var nodeShapeInputLabel = $("<div style=''><span>nodeShape: </span></div>");
	nSItem51.append(nodeShapeInputLabel);
        var nodeShapeSelectString = "<select id='nodeShapeInput'>" + 
                           "<option value='box' selected='selected'>box</option>" +
                           "<option value='ellipse'>ellipse</option>" +
                           "<option value='circle'>circle</option>" +
                           "<option value='database'>database</option>" +
                           "<option value='text'>text</option>" +
                           "<option value='image'>image</option>" +
                           "<option value='circularImage'>circularImage</option>" +
                           "<option value='diamond'>diamond</option>" +
                           "<option value='dot'>dot</option>" +
                           "<option value='star'>star</option>" +
                           "<option value='triangle'>triangle</option>" +
                           "<option value='triangleDown'>triangleDown</option>" +
                           "<option value='hexagon'>hexagon</option>" +
                           "<option value='square'>square</option></select>";
	var nodeShapeInput = $(nodeShapeSelectString);
	nSItem52.append(nodeShapeInput);

	var nSRow6 = $("<tr></tr>");
	nodesSetupTable.append(nSRow6);
	var nSItem61 = $("<td></td>");
	var nSItem62 = $("<td></td>");
	nSRow6.append(nSItem61);
	nSRow6.append(nSItem62);
	var nodeLinkTextareaLabel = $("<div style=''><span>nodeLink: </span></div>");
	nSItem61.append(nodeLinkTextareaLabel);
	var nodeLinkTextarea = $("<textarea cols='19' rows='1' id='nodeLinkTextarea'></input>");
	nSItem62.append(nodeLinkTextarea);
	var linkOpenButton = $("<div style='cursor:pointer;margin: 4px 0 2px 0;' id='linkOpenButton'><span style='background-color: #97c2fc;padding: 4px;'>linkOpenButton</span></div>");
	nSItem62.append(linkOpenButton);

	var nSRow7 = $("<tr></tr>");
	nodesSetupTable.append(nSRow7);
	var nSItem71 = $("<td></td>");
	var nSItem72 = $("<td></td>");
	nSRow7.append(nSItem71);
	nSRow7.append(nSItem72);
	var nodeColorInputLabel = $("<div style=''><span>nodeColor: </span></div>");
	nSItem71.append(nodeColorInputLabel);
	var nodeColorInput = $("<input type='text' id='nodeColorInput'></input>");
	nSItem72.append(nodeColorInput);

	var nSRow8 = $("<tr></tr>");
	nodesSetupTable.append(nSRow8);
	var nSItem81 = $("<td></td>");
	var nSItem82 = $("<td></td>");
	nSRow8.append(nSItem81);
	nSRow8.append(nSItem82);
	var nodeBorderWidthInputLabel = $("<div style=''><span>nodeBorderWidth: </span></div>");
	nSItem81.append(nodeBorderWidthInputLabel);
	var nodeBorderWidthInput = $("<input type='text' id='nodeBorderWidthInput'></input>");
	nSItem82.append(nodeBorderWidthInput);

	var nSRow9 = $("<tr></tr>");
	nodesSetupTable.append(nSRow9);
	var nSItem91 = $("<td></td>");
	var nSItem92 = $("<td></td>");
	nSRow9.append(nSItem91);
	nSRow9.append(nSItem92);
	var nodeBorderColorInputLabel = $("<div style=''><span>nodeBorderColor: </span></div>");
	nSItem91.append(nodeBorderColorInputLabel);
	var nodeBorderColorInput = $("<input type='text' id='nodeBorderColorInput'></input>");
	nSItem92.append(nodeBorderColorInput);

	var nSRow10 = $("<tr></tr>");
	nodesSetupTable.append(nSRow10);
	var nSItem101 = $("<td></td>");
	var nSItem102 = $("<td></td>");
	nSRow10.append(nSItem101);
	nSRow10.append(nSItem102);
	var nodeFontSizeInputLabel = $("<div style=''><span>nodeFontSize: </span></div>");
	nSItem101.append(nodeFontSizeInputLabel);
	var nodeFontSizeInput = $("<input type='text' id='nodeFontSizeInput'></input>");
	nSItem102.append(nodeFontSizeInput);

	var nSRow11 = $("<tr></tr>");
	nodesSetupTable.append(nSRow11);
	var nSItem111 = $("<td></td>");
	var nSItem112 = $("<td></td>");
	nSRow11.append(nSItem111);
	nSRow11.append(nSItem112);
	var nodeFontAlignInputLabel = $("<div style=''><span>nodeFontAlign: </span></div>");
	nSItem111.append(nodeFontAlignInputLabel);
	var nodeFontAlignInput = $("<input type='text' id='nodeFontAlignInput'></input>");
	nSItem112.append(nodeFontAlignInput);

	var edgesSetupTable = $("<table id='edgesSetupTable'></table>");

   //EDGE ID
	var eSRow1 = $("<tr></tr>");
	edgesSetupTable.append(eSRow1);
	var eSItem11 = $("<td></td>");
	var eSItem12 = $("<td></td>");
	eSRow1.append(eSItem11);
	eSRow1.append(eSItem12);
	var edgeIdInputLabel = $("<div style=''><span>edgeId: </span></div>");
	eSItem11.append(edgeIdInputLabel);
	var edgeIdInput = $("<input type='text' id='edgeIdInput'></input>");
	eSItem12.append(edgeIdInput);

   //EDGE LABEL
	var eSRow2 = $("<tr></tr>");
	edgesSetupTable.append(eSRow2);
	var eSItem21 = $("<td></td>");
	var eSItem22 = $("<td></td>");
	eSRow2.append(eSItem21);
	eSRow2.append(eSItem22);
	var edgeLabelInputLabel = $("<div style=''><span>edgeLabel: </span></div>");
	eSItem21.append(edgeLabelInputLabel);
	var edgeLabelTextarea = $("<textarea cols='19' rows='3' id='edgeLabelTextarea'></textarea>");
	eSItem22.append(edgeLabelTextarea);

   //EDGE COLOR
	var eSRow2Color = $("<tr></tr>");
	edgesSetupTable.append(eSRow2Color);
	var eSItem21Color = $("<td></td>");
	var eSItem22Color = $("<td></td>");
	eSRow2Color.append(eSItem21Color);
	eSRow2Color.append(eSItem22Color);
	var edgeColorInputLabel = $("<div style=''><span>edgeColor: </span></div>");
	eSItem21Color.append(edgeColorInputLabel);
	var edgeColorInput = $("<input type='text' id='edgeColorInput'></input>");
	eSItem22Color.append(edgeColorInput);

   //EDGE DASHES
	var eSRow2Dashes = $("<tr></tr>");
	edgesSetupTable.append(eSRow2Dashes);
	var eSItem21Dashes = $("<td></td>");
	var eSItem22Dashes = $("<td></td>");
	eSRow2Dashes.append(eSItem21Dashes);
	eSRow2Dashes.append(eSItem22Dashes);
	var edgeDashesEnabledInputLabel = $("<div style=''><span>edgeDashes: </span></div>");
	eSItem21Dashes.append(edgeDashesEnabledInputLabel);
	var edgeDashesEnabledInput = $("<input type='checkbox' id='edgeDashesEnabledInput'></input>");
	eSItem22Dashes.append(edgeDashesEnabledInput);

   //EDGE ARROWS FROM
	var eSRow5Arrow1 = $("<tr></tr>");
	edgesSetupTable.append(eSRow5Arrow1);
	var eSItem51 = $("<td></td>");
	var eSItem52 = $("<td></td>");
	eSRow5Arrow1.append(eSItem51);
	eSRow5Arrow1.append(eSItem52);
	var edgeArrowsFromEnabledInputLabel = $("<div style=''><span>arrows.from: </span></div>");
	eSItem51.append(edgeArrowsFromEnabledInputLabel);
	var edgeArrowsFromEnabledInput = $("<input type='checkbox' id='edgeArrowsFromEnabledInput'></input>");
	eSItem52.append(edgeArrowsFromEnabledInput);

   //EDGE ARROWS MIDDLE
	var eSRow5Arrow2 = $("<tr></tr>");
	edgesSetupTable.append(eSRow5Arrow2);
	var eSItem51 = $("<td></td>");
	var eSItem52 = $("<td></td>");
	eSRow5Arrow2.append(eSItem51);
	eSRow5Arrow2.append(eSItem52);
	var edgeArrowsMiddleEnabledInputLabel = $("<div style=''><span>arrows.middle: </span></div>");
	eSItem51.append(edgeArrowsMiddleEnabledInputLabel);
	var edgeArrowsMiddleEnabledInput = $("<input type='checkbox' id='edgeArrowsMiddleEnabledInput'></input>");
	eSItem52.append(edgeArrowsMiddleEnabledInput);

   //EDGE ARROWS TO
	var eSRow5Arrow3 = $("<tr></tr>");
	edgesSetupTable.append(eSRow5Arrow3);
	var eSItem51 = $("<td></td>");
	var eSItem52 = $("<td></td>");
	eSRow5Arrow3.append(eSItem51);
	eSRow5Arrow3.append(eSItem52);
	var edgeArrowsToEnabledInputLabel = $("<div style=''><span>arrows.to: </span></div>");
	eSItem51.append(edgeArrowsToEnabledInputLabel);
	var edgeArrowsToEnabledInput = $("<input type='checkbox' id='edgeArrowsToEnabledInput'></input>");
	eSItem52.append(edgeArrowsToEnabledInput);

   //SHADOW ENABLED
	var eSRow6 = $("<tr></tr>");
	edgesSetupTable.append(eSRow6);
	var eSItem61 = $("<td></td>");
	var eSItem62 = $("<td></td>");
	eSRow6.append(eSItem61);
	eSRow6.append(eSItem62);
	var edgeShadowEnabledInputLabel = $("<div style=''><span>shadow.enabled: </span></div>");
	eSItem61.append(edgeShadowEnabledInputLabel);
	var edgeShadowEnabledInput = $("<input type='checkbox' id='edgeShadowEnabledInput'></input>");
	eSItem62.append(edgeShadowEnabledInput);

   //SHADOW COLOR
	var eSRow7 = $("<tr></tr>");
	edgesSetupTable.append(eSRow7);
	var eSItem71 = $("<td></td>");
	var eSItem72 = $("<td></td>");
	eSRow7.append(eSItem71);
	eSRow7.append(eSItem72);
	var edgeShadowColorInputLabel = $("<div style='padding: 0 0 0 7px'><span>shadow.color: </span></div>");
	eSItem71.append(edgeShadowColorInputLabel);
	var edgeShadowColorInput = $("<input type='text' id='edgeShadowColorInput'></input>");
	eSItem72.append(edgeShadowColorInput);

   //SHADOW SIZE
	var eSRow8 = $("<tr></tr>");
	edgesSetupTable.append(eSRow8);
	var eSItem81 = $("<td></td>");
	var eSItem82 = $("<td></td>");
	eSRow8.append(eSItem81);
	eSRow8.append(eSItem82);
	var edgeShadowSizeInputLabel = $("<div style='padding: 0 0 0 7px'><span>shadow.size: </span></div>");
	eSItem81.append(edgeShadowSizeInputLabel);
	var edgeShadowSizeInput = $("<input type='text' id='edgeShadowSizeInput'></input>");
	eSItem82.append(edgeShadowSizeInput);

   //SHADOW X
	var eSRow9 = $("<tr></tr>");
	edgesSetupTable.append(eSRow9);
	var eSItem91 = $("<td></td>");
	var eSItem92 = $("<td></td>");
	eSRow9.append(eSItem91);
	eSRow9.append(eSItem92);
	var edgeShadowXInputLabel = $("<div style='padding: 0 0 0 7px'><span>shadow.x: </span></div>");
	eSItem91.append(edgeShadowXInputLabel);
	var edgeShadowXInput = $("<input type='text' id='edgeShadowXInput'></input>");
	eSItem92.append(edgeShadowXInput);

   //SHADOW Y
	var eSRow10 = $("<tr></tr>");
	edgesSetupTable.append(eSRow10);
	var eSItem101 = $("<td></td>");
	var eSItem102 = $("<td></td>");
	eSRow10.append(eSItem101);
	eSRow10.append(eSItem102);
	var edgeShadowYInputLabel = $("<div style='padding: 0 0 0 7px'><span>shadow.y: </span></div>");
	eSItem101.append(edgeShadowYInputLabel);
	var edgeShadowYInput = $("<input type='text' id='edgeShadowYInput'></input>");
	eSItem102.append(edgeShadowYInput);

   //SMOOTH ENABLED
	var eSRow11 = $("<tr></tr>");
	edgesSetupTable.append(eSRow11);
	var eSItem111 = $("<td></td>");
	var eSItem112 = $("<td></td>");
	eSRow11.append(eSItem111);
	eSRow11.append(eSItem112);
	var edgeSmoothEnabledInputLabel = $("<div style=''><span>smooth.enabled: </span></div>");
	eSItem111.append(edgeSmoothEnabledInputLabel);
	var edgeSmoothEnabledInput = $("<input type='checkbox' id='edgeSmoothEnabledInput'></input>");
	eSItem112.append(edgeSmoothEnabledInput);

   //SMOOTH TYPE
	var eSRow12 = $("<tr></tr>");
	edgesSetupTable.append(eSRow12);
	var eSItem121 = $("<td></td>");
	var eSItem122 = $("<td></td>");
	eSRow12.append(eSItem121);
	eSRow12.append(eSItem122);
	var edgeSmoothTypeInputLabel = $("<div style='padding: 0 0 0 7px'><span>smooth.type: </span></div>");
	eSItem121.append(edgeSmoothTypeInputLabel);
        var smoothTypeSelectString = "<select id='edgeSmoothTypeInput'>" + 
                           "<option value='dynamic' selected='selected'>dynamic</option>" +
                           "<option value='continuous'>continuous</option>" +
                           "<option value='discrete'>discrete</option>" +
                           "<option value='diagonalCross'>diagonalCross</option>" +
                           "<option value='straightCross'>straightCross</option>" +
                           "<option value='horizontal'>horizontal</option>" +
                           "<option value='vertical'>vertical</option>" +
                           "<option value='curvedCW'>curvedCW</option>" +
                           "<option value='curvedCCW'>curvedCCW</option>" +
                           "<option value='cubicBezier'>cubicBezier</option></select>";
	var edgeSmoothTypeInput = $(smoothTypeSelectString);
	eSItem122.append(edgeSmoothTypeInput);

   //SMOOTH FORCEDIRECTION
	var eSRow13 = $("<tr></tr>");
	edgesSetupTable.append(eSRow13);
	var eSItem131 = $("<td></td>");
	var eSItem132 = $("<td></td>");
	eSRow13.append(eSItem131);
	eSRow13.append(eSItem132);
	var edgeSmoothForceDirectionInputLabel = $("<div style='padding: 0 0 0 7px'><span>smooth. forceDirection	: </span></div>");
	eSItem131.append(edgeSmoothForceDirectionInputLabel);
        var smoothForceDirectionSelectString = "<select id='edgeSmoothForceDirectionInput'>" + 
                                               "<option value='none' selected='selected'>none</option>" +
                                               "<option value='horizontal'>horizontal</option>" +
                                               "<option value='vertical'>vertical</option></select>";
	var edgeSmoothForceDirectionInput = $(smoothForceDirectionSelectString);
	eSItem132.append(edgeSmoothForceDirectionInput);

   //SMOOTH ROUNDNESS
	var eSRow14 = $("<tr></tr>");
	edgesSetupTable.append(eSRow14);
	var eSItem141 = $("<td></td>");
	var eSItem142 = $("<td></td>");
	eSRow14.append(eSItem141);
	eSRow14.append(eSItem142);
	var edgeSmoothRoundnessInputLabel = $("<div style='padding: 0 0 0 7px'><span>smooth. roundness: </span></div>");
	eSItem141.append(edgeSmoothRoundnessInputLabel);
	var edgeSmoothRoundnessInput = $("<input type='text' id='edgeSmoothRoundnessInput'></input>");
	eSItem142.append(edgeSmoothRoundnessInput);
   linkOpenButton.click(function() {
      var link = nodeLinkTextarea.val();
      //if link starts with userConfData["someConfPathKey"], then we replace this var with path for its key from userConfData
      if (link.match(/^userConfData/) != null) {
console.log(1);
         if (typeof userConfData !== "undefined") {
console.log(1);
            var userConfKey = link.replace(/.*userConfData\["(.*?)"\].*/g,"$1");
console.log("userConfKey: " + userConfKey);
            var userConfLinkPath = userConfData[userConfKey];
            if (typeof userConfLinkPath !== "undefined" && userConfLinkPath.length > 0) {
               link = link.replace(/.*userConfData\[".*?"\]/g,userConfLinkPath);
            }
         } else {
            link = link.replace(/.*userConfData\[".*?"\]/g,"Error: no local path for this file. ");
         }
      }
      if (link.length > 0) {
         window.open(link, '_blank');
      }
   });

   schemeEditNodesMenu.append(nodesSetupTable);
   schemeEditEdgesMenu.append(edgesSetupTable);

   var saveNodeEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='saveNodeEditButton'>saveNode</span></div>");
   schemeEditNodesMenu.append(saveNodeEditButton);

   var saveEdgeEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='saveEdgeEditButton'>saveEdge</span></div>");
   schemeEditEdgesMenu.append(saveEdgeEditButton);
	saveNodeEditButton.click(function() {
		var nodeIdInput = schemeEditNodesMenu.find("input#nodeIdInput");
		var nodeLabelTextarea = schemeEditNodesMenu.find("textarea#nodeLabelTextarea");
		//var nodeXInput = schemeEditNodesMenu.find("input#nodeXInput");
		//var nodeYInput = schemeEditNodesMenu.find("input#nodeYInput");
		var nodeShapeInput = schemeEditNodesMenu.find("#nodeShapeInput");
		var nodeLinkTextarea = schemeEditNodesMenu.find("textarea#nodeLinkTextarea");
		var nodeFontSizeInput = schemeEditNodesMenu.find("input#nodeFontSizeInput");
		var nodeFontAlignInput = schemeEditNodesMenu.find("input#nodeFontAlignInput");
		var nodeColorInput = schemeEditNodesMenu.find("input#nodeColorInput");
		var nodeBorderWidthInput = schemeEditNodesMenu.find("input#nodeBorderWidthInput");
		var nodeBorderColorInput = schemeEditNodesMenu.find("input#nodeBorderColorInput");
                var nodeD = getNodeFromNetworkDataById(nodeIdInput.val());
		var pNode = network.getPositions()[nodeIdInput.val()];
		//nodeXInput.val(pNode.x);
		//nodeYInput.val(pNode.y);
		nodeD.id = nodeIdInput.val();
		nodeD.label = nodeLabelTextarea.val();
		nodeD.x = pNode.x;
		nodeD.y = pNode.y;
		nodeD.shape = nodeShapeInput.val();
		nodeD.link = nodeLinkTextarea.val();
		if (typeof nodeD.font === "undefined") nodeD.font = {size: 14};
		nodeD.font.size = parseInt(nodeFontSizeInput.val(),10);
		nodeD.font.align = nodeFontAlignInput.val();
		if (typeof nodeD.color === "undefined") nodeD.color = {};
		nodeD.color.background = nodeColorInput.val();
		nodeD.color.border = nodeBorderColorInput.val();
		nodeD.borderWidth = nodeBorderWidthInput.val();
		network.body.data.nodes.update(nodeD);
	});

   saveEdgeEditButton.click(function() {
      var edgeIdInput = schemeEditEdgesMenu.find("#edgeIdInput");
      var edgeLabelTextarea = schemeEditEdgesMenu.find("textarea#edgeLabelTextarea");

      var edgeColorInput = schemeEditEdgesMenu.find("#edgeColorInput");
      var edgeDashesEnabledInput = schemeEditEdgesMenu.find("#edgeDashesEnabledInput");

      var edgeArrowsFromEnabledInput = schemeEditEdgesMenu.find("#edgeArrowsFromEnabledInput");
      var edgeArrowsMiddleEnabledInput = schemeEditEdgesMenu.find("#edgeArrowsMiddleEnabledInput");
      var edgeArrowsToEnabledInput = schemeEditEdgesMenu.find("#edgeArrowsToEnabledInput");

      var edgeShadowEnabledInput = schemeEditEdgesMenu.find("#edgeShadowEnabledInput");
      var edgeShadowColorInput = schemeEditEdgesMenu.find("#edgeShadowColorInput");
      var edgeShadowSizeInput = schemeEditEdgesMenu.find("#edgeShadowSizeInput");
      var edgeShadowXInput = schemeEditEdgesMenu.find("#edgeShadowXInput");
      var edgeShadowYInput = schemeEditEdgesMenu.find("#edgeShadowYInput");

      var edgeSmoothEnabledInput = schemeEditEdgesMenu.find("#edgeSmoothEnabledInput");
      var edgeSmoothTypeInput = schemeEditEdgesMenu.find("#edgeSmoothTypeInput");
      var edgeSmoothForceDirectionInput = schemeEditEdgesMenu.find("#edgeSmoothForceDirectionInput");
      var edgeSmoothRoundnessInput = schemeEditEdgesMenu.find("#edgeSmoothRoundnessInput");

      var edgeD = getEdgeFromNetworkDataById(edgeIdInput.val());

      edgeD.id = edgeIdInput.val();
      if (typeof edgeLabelTextarea.val() == "undefined" || edgeLabelTextarea.val() == "") {
         edgeD.label = "\n";
         network.body.data.edges.update(edgeD);
         network.edgesHandler.update([edgeD.id]);
         edgeD.label = "";
      } else {
         edgeD.label = edgeLabelTextarea.val();
      }

      if (typeof edgeD.color === "undefined") edgeD.color = {};
      if (edgeColorInput.val() == "") {
         edgeD.color.color = "rgb(0,0,0)";
      } else {
         edgeD.color.color = edgeColorInput.val();
      }

      edgeD.dashes = edgeDashesEnabledInput.prop('checked');

      if (typeof edgeD.arrows === "undefined") edgeD.arrows = {from: {}, middle: {}, to: {}};
      edgeD.arrows.from.enabled = edgeArrowsFromEnabledInput.prop('checked');
      edgeD.arrows.middle.enabled = edgeArrowsMiddleEnabledInput.prop('checked');
      edgeD.arrows.to.enabled = edgeArrowsToEnabledInput.prop('checked');

      if (typeof edgeD.shadow === "undefined") edgeD.shadow = {};
      edgeD.shadow.enabled = edgeShadowEnabledInput.prop('checked');
      edgeD.shadow.color = edgeShadowColorInput.val();
      if (!isNaN(parseInt(edgeShadowSizeInput.val(), 10))) {
         edgeD.shadow.size = parseInt(edgeShadowSizeInput.val(), 10);
      } else {
         delete edgeD.shadow.size;
      }
      if (!isNaN(parseInt(edgeShadowXInput.val(), 10))) {
         edgeD.shadow.x = parseInt(edgeShadowXInput.val(), 10);
      } else {
         delete edgeD.shadow.x;
      }
      if (!isNaN(parseInt(edgeShadowYInput.val(), 10))) {
         edgeD.shadow.y = parseInt(edgeShadowYInput.val(), 10);
      } else {
         delete edgeD.shadow.y;
      }

      if (typeof edgeD.smooth === "undefined") edgeD.smooth = {};
      edgeD.smooth.enabled = edgeSmoothEnabledInput.prop('checked');
      edgeD.smooth.type = edgeSmoothTypeInput.val();
      edgeD.smooth.forceDirection = edgeSmoothForceDirectionInput.val();

      if (!isNaN(parseInt(edgeSmoothRoundnessInput.val(), 10))) {
         edgeD.smooth.roundness = parseInt(edgeSmoothRoundnessInput.val(), 10);
      } else {
         delete edgeD.smooth.roundness;
      }
      //console.log(edgeD);

      network.body.data.edges.update(edgeD);
      network.edgesHandler.update([edgeD.id]);

   });
	var closeNodeEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='closeNodeEditButton'>closeNodeEdit</span></div>");
	schemeEditNodesMenu.append(closeNodeEditButton);

	closeNodeEditButton.click(function() {
		schemeEditNodesMenu.hide();
	});

	var closeEdgeEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='closeEdgeEditButton'>closeEdgeEdit</span></div>");
	schemeEditEdgesMenu.append(closeEdgeEditButton);

	closeEdgeEditButton.click(function() {
		schemeEditEdgesMenu.hide();
	});
   var splitNodeListLabelButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='splitNodeListLabelButton'>splitNodeListLabel</span></div>");
   schemeEditNodesMenu.append(splitNodeListLabelButton);

   splitNodeListLabelButton.click(function() {
      var nodeIdInput = schemeEditNodesMenu.find("input#nodeIdInput").val();
      splitNodeLabelToList(nodeIdInput);
   });
	var runNodeCodeButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='runNodeCodeButton'>runNodeCode</span></div>");

	schemeEditNodesMenu.append(runNodeCodeButton);
runNodeCodeButton.click(function() {
   var nodeId = schemeEditNodesMenu.find("input#nodeIdInput").val();
   var code = collectCodeNodesContent(nodeId);
   code = code.split("\n");
   if (code[0] == "sympy") {
      code.shift();
      code = code.join("\n");
      calcSymPy(code, nodeId);
   } else {
      code = code.join("\n");
      var codeFunction = new Function('codeNodeId', code);
      codeFunction(nodeId);
   }
});
   var leftMenuHelpLine1 = $("<div style='margin:40px 0 0 0'><span id='leftMenuHelpLine1'>transparent color - rgba(0,0,0,0)</span></div>");
   schemeEditNodesMenu.append(leftMenuHelpLine1);
   //#FFD570
   //#ffc63b
   var leftMenuHelpLine2 = $("<div style='margin:10px 0 0 0'><span id='leftMenuHelpLine2'>nodes yellow color - #ffd570</span></div>");
   schemeEditNodesMenu.append(leftMenuHelpLine2);
   var leftMenuHelpLineNodesDocs = $("<div style='margin:10px 0 0 0'><span id='leftMenuHelpLineNodesDocs'><a href='https://visjs.github.io/vis-network/docs/network/nodes.html' target='_blank'>Nodes docs</a></span></div>");
   schemeEditNodesMenu.append(leftMenuHelpLineNodesDocs);


   var leftMenuHelpLineEdgesDocs = $("<div style='margin:40px 0 0 0'><span id='leftMenuHelpLineEdgesDocs'><a href='https://visjs.github.io/vis-network/docs/network/edges.html' target='_blank'>Edges docs</a></span></div>");
   schemeEditEdgesMenu.append(leftMenuHelpLineEdgesDocs);


	loadSavedProjectToMenuButton = $("<div style='cursor:pointer;margin:80px 0 0 0'><span id='loadSavedProjectToMenuButton'>loadSavedProjectToMenu</span></div>");
	schemeEditNodesMenu.append(loadSavedProjectToMenuButton);
	loadSavedProjectToMenuButton.hide();
	loadSavedProjectToMenuButton.click(function() {
		var saveLabel = loadSavedProjectToMenuButton.saveProjectLabel;
		loadSavedProjectDataToDataMenuBySaveName(network, saveLabel);
		updateSchemeFromMenu([],[]);
		removeSaveNodes();
		buildSaveNodesList();
	});
	deleteSavedProjectButton = $("<div style='cursor:pointer;margin:40px 0 0 0'><span id='deleteSavedProjectButton'>!!deleteSavedProject!!</span></div>");
	schemeEditNodesMenu.append(deleteSavedProjectButton);
	deleteSavedProjectButton.hide();
	deleteSavedProjectButton.click(function() {
		var saveLabel = deleteSavedProjectButton.saveProjectLabel;
		deleteLocalStorageSaveAndSaveNodeBySaveName(network, saveLabel);
	});
   schemeDataMenu = $("<div id='schemeDataMenu' style='height:100%; width:260px; position:fixed; right:0; top:0; background-color:white;border-left: 1px solid #a3a3a3;z-index:5000; padding: 40px 20px 20px 20px'></div>");
   //Don't show shemeDataMenu. Menu under "showMenu" button on the right.
   var pageFileName = (new URL(window.location.href)).pathname.split("/").reverse()[0];
   if (dontShowShemeDataMenuPagesList.indexOf(pageFileName) != -1) {
      schemeDataMenu.hide()
   }
   schemeDataTextArea = $("<div style='margin:0;padding:0;'><textarea id='schemeDataTextArea' cols='30' rows='45'></textarea></div>");
   schemeDataMenu.append(schemeDataTextArea);
   saveLoadButton = $("<div style='cursor:pointer;margin:20px 0 0 0;padding:0;'><span id='saveLoadButton' style='background-color:white; color: black;'>Save/Load</span></div>");
   schemeDataMenu.append(saveLoadButton);
   body.append(schemeDataMenu);
	saveLoadButton.click(function() {
		var regex = saveCanvasProjectDataLine;
		var saveCanvasProjectDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + regex + "$"));
		var projectSaveIdNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + projectSaveIdLine + "$"));
		var projectSaveIdWithDataNodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + projectSaveIdLine + ":.*$"));
		if ((typeof saveCanvasProjectDataNodes === "undefined") || (saveCanvasProjectDataNodes.length == 0) ||
			(typeof projectSaveIdNodes === "undefined") || (projectSaveIdNodes.length == 0) ||
			(typeof projectSaveIdWithDataNodes === "undefined") || (projectSaveIdWithDataNodes.length == 0)) 
			{
			alert("Add setup nodes for canvas save information: '" + saveCanvasProjectDataLine + "', '" + projectSaveIdLine + "', '" +  projectSaveIdLine + ": projectName'.");
		} else {
			var node = saveCanvasProjectDataNodes[0];
			updateNodePositionData(network, node);
			var scale = network.getScale();
			var n1X = parseFloat(node.x.toFixed(5));
			var n1Y = parseFloat(node.y.toFixed(5));
			var positionX = parseFloat((n1X - canvasWidth/(2*scale)).toFixed(5));
			var positionY = parseFloat((n1Y - canvasHeight/(2*scale)).toFixed(5));
			network.moveTo({
				position: {x: positionX, y: positionY},
				offset: {x: -canvasWidth/2, y: -canvasHeight/2},
				scale: scale,
			});
			network1.moveTo({
				position: {x: positionX, y: positionY},
				offset: {x: -canvasWidth/2, y: -canvasHeight/2},
				scale: scale,
			});
		}
	});
	showDataButton.click(function() {
		schemeDataMenu.toggle();
	});
	draw();
	if (typeof runUpateMenuFromSchemeAtPageReady !== "undefined" && runUpateMenuFromSchemeAtPageReady) {
		updateMenuFromScheme([], []);
	}
	removeSaveNodes();
	buildSaveNodesList();
	var updateSchemeFromMenuButton = $("<div style='cursor:pointer;margin: 0 0 20px 0;'><span id='updateSchemeFromMenuButton' style='background-color:white;color:black;'>updateSchemeFromMenu</span></div>");
	var updateMenuFromSchemeButton = $("<div style='cursor:pointer;margin: 0 0 20px 0;'><span id='updateMenuFromSchemeButton' style='background-color:white;color:black;'>updateMenuFromScheme</span></div>");
	schemeDataMenu.prepend(updateMenuFromSchemeButton);
	schemeDataMenu.prepend(updateSchemeFromMenuButton);
	updateSchemeFromMenuButton.click(function() {
		updateSchemeFromMenu([],[]);
		removeSaveNodes();
		buildSaveNodesList();
	});
	function addConnections(elem, index) {
		elem.connections = network.getConnectedNodes(index);
	}
	function exportNetwork() {
		var nodes = objectToArray(network.getPositions());
		var positions = network.getPositions(item.id);
		item.positionX = positions[item.id].x;
		item.positionY = positions[item.id].y;

		nodes.forEach(addConnections);

		var exportValue = JSON.stringify(nodes, undefined, 2);

		return exportValue;
	}
	function importNetwork() {
		var inputValue = exportArea.value;
		var inputData = JSON.parse(inputValue);

		var data = {
			nodes: getNodeData(inputData),
			edges: getEdgeData(inputData)
		}

		network = new vis.Network(container, data, {});
	}
	function getNodeData(data) {
		var networkNodes = [];

		data.forEach(function(elem, index, array) {
			networkNodes.push({id: elem.id, label: elem.id, x: elem.x, y: elem.y});
		});

		return new vis.DataSet(networkNodes);
	}
	function getEdgeData(data) {
		var networkEdges = [];

		data.forEach(function(node) {
			node.connections.forEach(function(connId, cIndex, conns) {
				networkEdges.push({from: node.id, to: connId});
				var cNode = getNodeById(data, connId);

				var elementConnections = cNode.connections;

				// remove the connection from the other node to prevent duplicate connections
				var duplicateIndex = elementConnections.findIndex(function(connection) {
					return connection == node.id; // double equals since id can be numeric or string
				});

				if (duplicateIndex != -1) {
					elementConnections.splice(duplicateIndex, 1);
				};
			});
		});

		return new vis.DataSet(networkEdges);
	}
	updateMenuFromSchemeButton.click(function() {
		removeSaveNodes();
		updateMenuFromScheme([], []);
		//saveProjectToBrowserLocalStorage(network);
		localStorageSpace();
	});
	if (showCursorCoordinates) {
		var cursorCoordinatesWidget = $("<div style='position: fixed;right:330px;font-size:12px'>" +
			"<div id='domCursorCoordinates'></div>" +
			"<div id='canvasCursorCoordinates'></div>" +
			"</div>");
		$("body").append(cursorCoordinatesWidget);
		$(document).mousemove(function(event) {
			$("#domCursorCoordinates").text(event.pageX.toString() + "x" + event.pageY.toString());
			var domX = (event.pageX - containerJQ.position().left).toFixed(0);
			var domY = (event.pageY - containerJQ.position().top).toFixed(0);
			var canvasPosition = network.canvas.DOMtoCanvas({x: domX,y: domY});
			$("#canvasCursorCoordinates").text((canvasPosition.x).toFixed(0) + "x" + (canvasPosition.y).toFixed(0));
		});
	}
	$("#network div.vis-network").focus();
   $("#network").keyup(function (event) {
      //Add new node under cursor. alt+n
      if (event.altKey == true && 
          event.shiftKey == false && 
          event.ctrlKey == false &&
          event.keyCode === 78) {
         var schemeDataMenuWidth = 0;
         if (document.getElementById("schemeDataMenu").style.display != "none") {
            schemeDataMenuWidth = parseInt(document.getElementById("schemeDataMenu").style.width.replace("px",""), 10);
         } else {
            schemeDataMenuWidth = 0;
         }
         var lastEditedNodeId;
         var lastEditedNode;
         var position;
         if (lastEditedNodesIds.length == 0) {
            if (lastClickPosition == null) {
               position = {
                  x: (canvasWidth - schemeDataMenuWidth)/2,
                  y: canvasHeight/2
               };
            } else {
               position = {
                  x: lastClickPosition.x,
                  y: lastClickPosition.y
               };
            }
            position = network.canvas.DOMtoCanvas(position);
         } else {
            var lastEditedNodeId = lastEditedNodesIds[lastEditedNodesIds.length - 1];
            var lastEditedNode = getNodeFromNetworkDataById(lastEditedNodeId);
            var lastEditDOMPosition = network.canvasToDOM({x: lastEditedNode.x, y: lastEditedNode.y});
            if (lastEditDOMPosition.x < 0 || 
               lastEditDOMPosition.x > canvasWidth || 
               lastEditDOMPosition.y < 0 || 
               lastEditDOMPosition.y > canvasHeight) {
               position = {
                  x: (canvasWidth - schemeDataMenuWidth)/2,
                  y: canvasHeight/2
               };
            } else {
               var nodeBBox = network.nodesHandler.getBoundingBox(lastEditedNodeId);
               position = {
                  x: lastEditedNode.x,
                  y: nodeBBox["top"] + 28 + 28*lastEditedNode.label.split("\n").length/2
               };
            }
         }
         var nodeId = addNodeOnCanvas("", "", position, 0, 0, network);
         var node = network.body.nodes[nodeId];
         network.selectionHandler.selectObject(node);
         lastEditedNodesIds.push(nodeId);
         network.manipulation.editNode();
      }
   });
   $(document).keyup(function (event) {
      //Set nextOperationMultiplier
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          [49,50,51,52,53,54,55,56,57,48].indexOf(event.keyCode) != -1) {
             var number = null;
             if (event.keyCode == 49) number = "1";
             if (event.keyCode == 50) number = "2";
             if (event.keyCode == 51) number = "3";
             if (event.keyCode == 52) number = "4";
             if (event.keyCode == 53) number = "5";
             if (event.keyCode == 54) number = "6";
             if (event.keyCode == 55) number = "7";
             if (event.keyCode == 56) number = "8";
             if (event.keyCode == 57) number = "9";
             if (event.keyCode == 48) number = "0";
             nextOperationMultiplier = nextOperationMultiplier + number;
console.log(nextOperationMultiplier);
      }
   });

   $(document).keyup(function (event) {
      //Drop nextOperationMultiplier
      if (event.keyCode == 13) {
             nextOperationMultiplier = "";
      }
   });
   $(document).keyup(function (event) {
      //Copy node style. shift+alt+c
      if (event.altKey == true && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 67) {
             var node = objectToArray(network.selectionHandler.selectionObj.nodes)[0];

             if (typeof node.options.font !== "undefined" && typeof node.options.font.size !== "undefined") {
                copiedNodeStyleFontSize = node.options.font.size;
             } else {
                copiedNodeStyleFontSize = "14";
             }

             if (typeof node.options.color !== "undefined" && typeof node.options.color.background !== "undefined") {
                copiedNodeStyleColor = node.options.color.background;
             } else {
                copiedNodeStyleColor = "#ffd570";
             }

             //console.log(copiedNodeStyleFontSize);
             //console.log(copiedNodeStyleColor);
      }
   });
   $(document).keyup(function (event) {
      //Paste node style. shift+alt+v
      if (event.altKey == true && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 86) {
             var node = objectToArray(network.selectionHandler.selectionObj.nodes)[0];

             //console.log(copiedNodeStyleFontSize);
             //console.log(copiedNodeStyleColor);
             if (copiedNodeStyleFontSize == "" && copiedNodeStyleColor == "") return;

             var selectedNodes = objectToArray( network.selectionHandler.selectionObj.nodes);

             var nodes = [];
             selectedNodes.forEach(function(node) {
                nodes.push(network.body.data.nodes.get(node.id));
             });

             nodes.forEach(function(n) {
                //console.log(n);
                var node = network.body.data.nodes.get(n.id);
                var pNode = network.getPositions()[node.id];

                if (typeof node.font === "undefined") node.font={};
                node.font.size = parseInt(copiedNodeStyleFontSize,10);

                if (typeof node.color === "undefined") node.color={};
                node.color.background = copiedNodeStyleColor;

                //node.font.align = "left";

                node.x = pNode.x;
                node.y = pNode.y;
                network.body.data.nodes.update(node);
             });
      }
   });



   $(document).keyup(function (event) {
      //Toggle "showData" menu. shift+alt+n
      if (event.altKey == true && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 78) {
         var fileName = window.location.href.split("/")[window.location.href.split("/").length-1];
         var nodes = objectToArray(network.body.nodes);
         rootCodeNode = null;
         nodes.forEach(function(node) {
            var node = getNodeFromNetworkDataById(node.id);
            if (typeof node.label !== "undefined" &&
               node.label.match(/.*download news code1.*/) != null) {
               rootCodeNode = node;
            }
         });
         console.log(rootCodeNode);

         var positions = network.getPositions();
         var cursorPointer = network.canvasToDOM(positions[rootCodeNode.id]);
         var positionObject = network.selectionHandler._pointerToPositionObject(cursorPointer);
         //var overlappingItemsIds = network.selectionHandler._getAllNodesOverlappingWith(positionObject);

         network.selectionHandler.unselectAll();

         //overlappingItemsIds.forEach(function(itemId) {
         var node = network.body.nodes[rootCodeNode.id];
         //   if (typeof node !== "undefined" && node != null && itemId != cursorNodeId) {
            network.selectionHandler.selectObject(node);
         //   }
         //});
         //lastClickPosition = cursorPointer;
         network.selectionHandler._generateClickEvent('selectNode', event, cursorPointer);
         network.selectionHandler.body.emitter.emit('_requestRedraw');
         $("span#runNodeCodeButton").click();

         var nodesIdInDrawing = [];
         if (fileName == "news1.html") {
            var newsRootNodeId = "031f622f-3fce-41a6-826f-f0b84fa7afc3";
            var treeNodes = getTreeNodesAndEdges(newsRootNodeId).nodes;
            for (var i = 0; i < treeNodes.length; i++) {
               var node = treeNodes[i];
               nodesIdInDrawing.push(node.id);
            }
         } else {
            var allNodes = network.body.data.nodes.get();
            for (var i = 0; i < allNodes.length; i++) {
               var node = allNodes[i];
               nodesIdInDrawing.push(node.id);
            }
         }
         network.selectNodes(nodesIdInDrawing);
         $("span#runNodeCodeButton").click();
      }
   });
   $(document).keyup(function (event) {
      //Toggle "showData" menu. alt+\
      if (event.altKey == true && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 220) {
          $("div#showData").click();
      }
   });
   $(document).keyup(function (event) {
      //Toggle selection rectangle for cursor node. u
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 85) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId != null) {

             var cursorNode = network.body.nodes[cursorNodeId];
             var positions = network.getPositions();
             var cursorPointer = network.canvasToDOM(positions[cursorNodeId]);

             if (selectionRectangleDrag == false) {
                saveDrawingSurface();
                rect.startX = cursorPointer.x;
                rect.startY = cursorPointer.y;
                selectionRectangleDrag = true;
             } else {
                selectNodesFromHighlight();
                selectionRectangleDrag = false;
                network.selectionHandler.deselectObject(cursorNode);
             }
         }
      }
   });
   $(document).keyup(function (event) {
      //Toggle moving selected nodes from keyboard. m
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 77) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {
             if (cursorNodeId != null) {
                network.body.data.nodes.remove(cursorNodeId);
                cursorNodeId = null;
             }
             if (keyboardMoveSelectedEnabled == false) {
                keyboardMoveSelectedEnabled = true;
             } else {
                keyboardMoveSelectedEnabled = false;
             }
         }
      }
   });
var moveSelectedDown = false;
var moveSelectedUp = false;
var moveSelectedLeft = false;
var moveSelectedRight = false;

var moveSelectedDownFast = false;
var moveSelectedUpFast = false;
var moveSelectedLeftFast = false;
var moveSelectedRightFast = false;
   function moveSelectedNodes(nodesIdsList, xStep, yStep) {

      var positions = network.getPositions();
      for (var i in nodesIdsList) {
         network.body.nodes[nodesIdsList[i]].x = Number(positions[nodesIdsList[i]].x + xStep);
         network.body.nodes[nodesIdsList[i]].y = Number(positions[nodesIdsList[i]].y + yStep);
      }
      network.body.emitter.emit("startSimulation");

      console.log("moveSelectedNodes(nodesIdsList, xStep, yStep): " + String(nodesIdsList.length) + ", " + String(xStep) + ", " + String(yStep));
   }
   $(document).keydown(function (event) {
      //Move selected down. j
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 74) {

      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 74) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, 0, height/150);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected left. h
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, -width/150, 0);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected up. k
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, 0, -height/150);
             }
         }
      }
   });

   $(document).keydown(function (event) {
      //Move selected right. l
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, width/150, 0);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected down fast. shift+j
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 74) {

      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 74) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, 0, height/30);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected left fast. shift+h
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 72) {

      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, -width/30, 0);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected up fast. shift+k
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 75) {

      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, 0, -height/30);
             }
         }
      }
   });
   $(document).keydown(function (event) {
      //Move selected right fast. shift+l
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (keyboardMoveSelectedEnabled == true) {

                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                var nodesIdsList = network.selectionHandler.getSelectedNodes();
                moveSelectedNodes(nodesIdsList, width/30, 0);
             }
         }
      }
   });
   $(document).keyup(function (event) {
      //Click by cursor node. y
      //TODO. Select edges.
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 89) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId != null) {
             var cursorNode = network.body.nodes[cursorNodeId];
             var positions = network.getPositions();
             var cursorPointer = network.canvasToDOM(positions[cursorNodeId]);
             var positionObject = network.selectionHandler._pointerToPositionObject(cursorPointer);
             var overlappingItemsIds = network.selectionHandler._getAllNodesOverlappingWith(positionObject);
             
             network.selectionHandler.unselectAll();

             overlappingItemsIds.forEach(function(itemId) {
                var node = network.body.nodes[itemId];
                if (typeof node !== "undefined" && node != null && itemId != cursorNodeId) {
                   network.selectionHandler.selectObject(node);
                }
             }); 
             lastClickPosition = cursorPointer;
             network.selectionHandler._generateClickEvent('selectNode', event, cursorPointer);
             network.selectionHandler.body.emitter.emit('_requestRedraw');
         }
      }
   });
   $(document).keyup(function (event) {
      //Add to selection by cursor node click. shift+y
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 89) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId != null) {
             var cursorNode = network.body.nodes[cursorNodeId];
             var positions = network.getPositions();
             var cursorPointer = network.canvasToDOM(positions[cursorNodeId]);
             var positionObject = network.selectionHandler._pointerToPositionObject(cursorPointer);
             var overlappingItemsIds = network.selectionHandler._getAllNodesOverlappingWith(positionObject);
             
             overlappingItemsIds.forEach(function(itemId) {
                var node = network.body.nodes[itemId];
                if (typeof node !== "undefined" && node != null && itemId != cursorNodeId) {
                   network.selectionHandler.selectObject(node);
                }
             }); 
             lastClickPosition = cursorPointer;
             network.selectionHandler.body.emitter.emit('_requestRedraw');
         }
      }
   });
   var nodeCursorDoubleKeyPressDelta = 300;
   var nodeCursorDoubleKeyPressLastKeypressTime = 0;
   $(document).keyup(function (event) {
      //Make new node by double click with cursor node. yy
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 89) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId != null) {
             var cursorNode = network.body.nodes[cursorNodeId];
             var positions = network.getPositions();
             var cursorPointer = network.canvasToDOM(positions[cursorNodeId]);

             var thisKeypressTime = new Date();
             if ( thisKeypressTime - nodeCursorDoubleKeyPressLastKeypressTime <= nodeCursorDoubleKeyPressDelta ) {
                var nodeId = addNodeOnCanvas("", "", positions[cursorNodeId], 0, 0, network);
                var node = network.body.nodes[nodeId];
                network.selectionHandler.selectObject(node);
                lastEditedNodesIds.push(nodeId);
                network.manipulation.editNode();
                thisKeypressTime = 0;
             }
             nodeCursorDoubleKeyPressLastKeypressTime = thisKeypressTime;

             network.selectionHandler.body.emitter.emit('_requestRedraw');
         }
      }
   });
var moveCursorDown = false;
var moveCursorUp = false;
var moveCursorLeft = false;
var moveCursorRight = false;

var moveCursorDownFast = false;
var moveCursorUpFast = false;
var moveCursorLeftFast = false;
var moveCursorRightFast = false;
   function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms)); 
   }
   function moveCursor(cursorNodeId, event, xStep, yStep) {
      var positions = network.getPositions();
      if (network.body.nodes[cursorNodeId] !== undefined) {
         var nodeD = getNodeFromNetworkDataById(cursorNodeId);
         var pNode = positions[cursorNodeId];
         nodeD.x = pNode.x + xStep;
         nodeD.y = pNode.y + yStep;
         network.body.data.nodes.update(nodeD);
      }
      sleep(70).then((resolve) => {
         if (selectionRectangleDrag) {
            positions = network.getPositions();
            var cursorNode = network.body.nodes[cursorNodeId];
            var cursorPointer = network.canvasToDOM(positions[cursorNodeId]);

            rect.w = cursorPointer.x - rect.startX;
            rect.h = cursorPointer.y - rect.startY;

            ctx.lineWidth = 1;
            ctx.strokeStyle = "gray";
            ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
            ctx.setLineDash([]);
            ctx.fillStyle = "rgba(255, 255, 255, 0)";
            ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
         }
         if(moveCursorDown == true ||
            moveCursorUp == true ||
            moveCursorLeft == true ||
            moveCursorRight == true ||
            moveCursorDownFast == true ||
            moveCursorUpFast == true ||
            moveCursorLeftFast == true ||
            moveCursorRightFast == true) {
               moveCursor(cursorNodeId, event, xStep, yStep);
         }
      });
   }
   $(document).keydown(function (event) {
      //Move cursor down. j
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 74) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorDown == false) {
                moveCursorDown = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                moveCursor(cursorNodeId, event, 0, height/150);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      //Move cursor down 1/10. j
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 74) {
          moveCursorDown = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor left. h
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 72) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorLeft == false) {
                moveCursorLeft = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                moveCursor(cursorNodeId, event, -width/150, 0);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
          moveCursorLeft = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor up. k
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 75) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorUp == false) {
                moveCursorUp = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                moveCursor(cursorNodeId, event, 0, -height/150);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
          moveCursorUp = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor right. l
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 76) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorRight == false) {
                moveCursorRight = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                moveCursor(cursorNodeId, event, width/150, 0);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
          moveCursorRight = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor down fast. shift+j
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 74) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {
             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorDownFast == false) {
                moveCursorDownFast = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                moveCursor(cursorNodeId, event, 0, height/30);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 74) {
          moveCursorDownFast = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor left fast. shift+h
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 72) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorLeftFast == false) {
                moveCursorLeftFast = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                moveCursor(cursorNodeId, event, -width/30, 0);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
          moveCursorLeftFast = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor up fast. shift+k
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 75) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorUpFast == false) {
                moveCursorUpFast = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var height = windowRightBottomPosition.y - windowLeftTopPosition.y; 
                moveCursor(cursorNodeId, event, 0, -height/30);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
          moveCursorUpFast = false;
      }
   });
   $(document).keydown(function (event) {
      //Move cursor right fast. shift+l
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 76) {

         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network") {

             if (cursorNodeId != null && 
                 keyboardMoveSelectedEnabled == false &&
                 moveCursorRightFast == false) {
                moveCursorRightFast = true;
                var nodesPositions = network.getPositions();
                var windowLeftTopPosition = network.canvas.DOMtoCanvas({
                   x: 0, 
                   y: 0});
                var windowRightBottomPosition = network.canvas.DOMtoCanvas({
                   x: network.canvas.frame.canvas.clientWidth, 
                   y: network.canvas.frame.canvas.clientHeight});
                var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
                moveCursor(cursorNodeId, event, width/30, 0);
             }
          }
      }
   });
   $(document).keyup(function (event) {
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
          moveCursorRightFast = false;
      }
   });
   $(document).keyup(function (event) {
      //Show cursor on page. i
      //Green dot color - #1EB117
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 73) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null) {
             var viewPosition = network.getViewPosition();
             var scale = network.getScale();
             cursorNodeId = network.body.data.nodes.add({
                label: " ",
                x: viewPosition.x,
                y: viewPosition.y,
                font: {size: 5/scale},
                color: {background:"black"},
                shape: "circle"
             })[0];
             node = network.body.data.nodes.get(cursorNodeId);
             network.body.data.nodes.update(node);
         }
      }
   });
   $("div#network").keydown(function (event) {
      //Remove cursor node or disable moving selected nodes from keyboard. Esc
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 27) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             document.getElementById('schemeEditNodesMenu').style.display == "none" &&
             document.getElementById('schemeEditEdgesMenu').style.display == "none") {

             if (typeof network.selectionHandler.selectionObj.nodes.length === "undefined" &&
                 typeof network.selectionHandler.selectionObj.edges.length === "undefined") {
                if (cursorNodeId != null) {
                   if (selectionRectangleDrag == true) {
                      var positions = network.getPositions();
                      selectionRectangleDrag = false;
                      ctx.lineWidth = 0;
                      ctx.strokeStyle = "white";
                      ctx.setLineDash([]);
                      ctx.fillStyle = "rgba(255, 255, 255, 0)";
                      ctx.strokeRect(0, 0, 0, 0);
                      ctx.fillRect(0, 0, 0, 0);
                      var nodeD = getNodeFromNetworkDataById(cursorNodeId);
                      var pNode = positions[cursorNodeId];
                      nodeD.x = pNode.x;
                      nodeD.y = pNode.y;
                      network.body.data.nodes.update(nodeD);
                   } else {
                      network.body.data.nodes.remove(cursorNodeId);
                      cursorNodeId = null;
                   }
                }
                if (keyboardMoveSelectedEnabled == true) {
                   keyboardMoveSelectedEnabled = false;
                }
             }
         }
      }
   });
   $(document).keyup(function (event) {
      //Connect nodes columns. alt+m
      if (event.altKey == true && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 77) {
             var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
             var positions = network.getPositions();
             var columns = {};
             var minLeftNode = null;
             for (i = 0; i < selectedNodes.length; i++) {
                if (i == 0) minLeftNode = selectedNodes[i];
                if (minLeftNode.shape.left > selectedNodes[i].shape.left) {
                        minLeftNode = selectedNodes[i];
                };
             }

             var leftColumn = [];
             var rightColumn = [];
             selectedNodes.forEach(function(node) {
                var nodeD = getNodeFromNetworkDataById(node.id);
                var pNode = positions[node.id];
                nodeD.x = pNode.x;
                nodeD.y = pNode.y;
                network.body.data.nodes.update(nodeD);
                if (typeof columns[node.shape.left] === "undefined" || columns[node.shape.left] == null) {
                   columns[node.shape.left] = [];
                }
                columns[node.shape.left].push(node);
                var leftPositionDiff = Math.abs(minLeftNode.shape.left - node.shape.left);
                if (leftPositionDiff < 2) {
                   leftColumn.push(node);
                } else {
                   rightColumn.push(node);
                }
             });

             var lastLeftNode = null;
             leftColumn.reverse().forEach(function(leftNode, leftColumnIndex) {
                rightColumn.forEach(function(rightNode, index) {
                   if (rightNode.y >= leftNode.y && (lastLeftNode == null || rightNode.y < lastLeftNode.y)) {
                      var edgeData = {from: leftNode.id, to: rightNode.id};
                      network.body.data.edges.getDataSet().add(edgeData);
                   }
                   if (leftColumnIndex == (leftColumn.length-1) && rightNode.y < leftNode.y) {
                      var edgeData = {from: leftNode.id, to: rightNode.id};
                      network.body.data.edges.getDataSet().add(edgeData);
                   }
                });
                lastLeftNode = leftNode;
             });
      }
   });
   $(document).keyup(function (event) {
      //Shift selected nodes left (500). alt+c
      if (event.altKey == true && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 67) {
             var leftShift = 500;
             var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
             var positions = network.getPositions();
             selectedNodes.forEach(function(node) {
                var nodeD = getNodeFromNetworkDataById(node.id);
                var pNode = positions[node.id];
                nodeD.x = pNode.x;
                nodeD.y = pNode.y;
                network.body.data.nodes.update(nodeD);
                network.nodesHandler.moveNode(node.id, nodeD.x - leftShift, nodeD.y);
             });
      }
   });
   $(document).keyup(function (event) {
      //Move view down 1/10. j
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 74) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var height = windowRightBottomPosition.y - windowLeftTopPosition.y;
            moveViewTo(
               viewPosition.x, 
               viewPosition.y + height/10, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view left 1/10. h
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
            moveViewTo(
               viewPosition.x - width/10, 
               viewPosition.y, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view up 1/10. k
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var height = windowRightBottomPosition.y - windowLeftTopPosition.y;
            moveViewTo(
               viewPosition.x, 
               viewPosition.y - height/10, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view right 1/10. l
      if (event.altKey == false && 
          event.shiftKey == false && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
            moveViewTo(
               viewPosition.x + width/10, 
               viewPosition.y, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view down 1/2. shift+j
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 74) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var height = windowRightBottomPosition.y - windowLeftTopPosition.y;
            moveViewTo(
               viewPosition.x, 
               viewPosition.y + height/2, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view left 1/2. shift+h
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 72) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
            moveViewTo(
               viewPosition.x - width/2, 
               viewPosition.y, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view up 1/2. shift+k
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 75) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var height = windowRightBottomPosition.y - windowLeftTopPosition.y;
            moveViewTo(
               viewPosition.x, 
               viewPosition.y - height/2, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Move view right 1/2. shift+l
      if (event.altKey == false && 
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 76) {
         var selectedElement = $(document.activeElement);
         if (selectedElement.prop("tagName") == "DIV" &&
             selectedElement.prop("class") == "vis-network" &&
             cursorNodeId == null &&
             keyboardMoveSelectedEnabled == false) {
            var viewPosition = network.getViewPosition();
            var windowLeftTopPosition = network.canvas.DOMtoCanvas({
               x: 0, 
               y: 0});
            var windowRightBottomPosition = network.canvas.DOMtoCanvas({
               x: network.canvas.frame.canvas.clientWidth, 
               y: network.canvas.frame.canvas.clientHeight});
            var width = windowRightBottomPosition.x - windowLeftTopPosition.x;
            moveViewTo(
               viewPosition.x + width/2, 
               viewPosition.y, 
               network.getScale());
         }
      }
   });
   $(document).keyup(function (event) {
      //Jump to last selected (by click) node. alt+;
      if (event.altKey && event.keyCode === 186) {

         if (lastSelectedNodeId == null) return;

         var nodesPositions = network.getPositions();

         moveViewTo(
            nodesPositions[lastSelectedNodeId].x,
            nodesPositions[lastSelectedNodeId].y, 
            network.getScale()
         );

      }
   });

   $(document).keyup(function (event) {
      //Open node link. alt+l
      if (event.altKey && event.keyCode === 76) {
         $("div#linkOpenButton").click();
      }
   });
   $(document).keyup(function (event) {
      //Move/restore branches of selected node to/from dataCash. alt+y
      if (event.altKey && event.keyCode === 89) {
         var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         if (selectedNodes.length == 0) return;

         var branchesNodesAndEdges = getTreeNodesAndEdges(selectedNodes[0].id);

         if (branchesNodesAndEdges.nodes.length > 0) {

            hideNodeBranchesToDataCash(selectedNodes[0].id, null);

         } else {

            restoreNodeBranchesFromDataCash(selectedNodes[0].id);

         }
      }
   });
   $(document).keyup(function (event) {
      //Jump to nodes with same label. alt+j
      if (event.altKey && event.keyCode == 74 ) {

         var selectedNode = objectToArray(network.selectionHandler.selectionObj.nodes)[0];

         var regExp = null;
         var jumpNavigationDataLabel = null;
         var selectedNodeLabel = selectedNode.options.label.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         if (jumpNavigationData != null) {
             jumpNavigationDataLabel = jumpNavigationData.label.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         }
         if (jumpNavigationData != null &&
             jumpNavigationData.label[0] == "regex" && 
             typeof jumpNavigationData.label[1] !== "undefined" && 
             jumpNavigationData.label[1].length > 0) {

             regExp = new RegExp(jumpNavigationData.label[1], "gi");
         }

   if (jumpNavigationData == null && typeof objectToArray(network.selectionHandler.selectionObj.nodes)[0] === "undefined") {
      showAlert("Select one node to jump to nodes with same name", 60, 190);
      return;
   }
         
   //If node is selected and there were no jumps before or there is different label on selected node.
   if ((typeof objectToArray(network.selectionHandler.selectionObj.nodes)[0] !== "undefined") && 
         (jumpNavigationData == null || 
         (regExp != null && selectedNodeLabel.match(regExp) == null) ||
         (regExp == null && jumpNavigationDataLabel != selectedNodeLabel) )) {

      var nodes = network.body.data.nodes.get();

      var foundNodes = [];

      var regExp = null;
      if (selectedNode.options.label != null &&
          selectedNode.options.label.split("\n")[0] == "regex" && 
          typeof selectedNode.options.label.split("\n")[1] !== "undefined" && 
          selectedNode.options.label.split("\n")[1].length > 0) {

          regExp = new RegExp(selectedNode.options.label.split("\n")[1], "gi");
      }

      nodes.forEach(function(node) {
         var nodeLabel = node.label;
         nodeLabel = nodeLabel.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         var sNLabel = selectedNode.options.label.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         if (regExp != null && node.id != selectedNode.id && nodeLabel.match(regExp) != null) {
            foundNodes.push(node);
         }
         if (regExp == null && node.id != selectedNode.id && nodeLabel == sNLabel) {
            foundNodes.push(node);
         }
      });
      
      if (foundNodes.length == 0) {
         showAlert("No nodes with same name", 60, 190);
         return;
      }

      if (foundNodes.length > 50) {
         showAlert("Too big list of jump nodes. More than 50.", 60, 190);
         return;
      }

      //first node in the list will be "selectedNode" - so we start scrolling through nodes from second node
      //in this list
      foundNodes = [selectedNode].concat(foundNodes);

      var nodesPositions = network.getPositions();

      foundNodes.forEach(function(node) {
         var nodeD = getNodeFromNetworkDataById(node.id);
         pNode = nodesPositions[node.id];
         nodeD.x = pNode.x;
         nodeD.y = pNode.y;
         network.body.data.nodes.update(nodeD);
      });

      jumpNavigationData = {
         label: selectedNode.options.label,
         foundNodes: foundNodes,
         lastJumpNodeNumber: 0
      };
      var jumpNumber = 1;
      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   } else {
      var jumpNumber = null;
      if (jumpNavigationData.lastJumpNodeNumber == jumpNavigationData.foundNodes.length - 1) {
         jumpNumber = 0;
      } else {
         jumpNumber = jumpNavigationData.lastJumpNodeNumber + 1;
      }
      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   }
       
      }
   });
   $(document).keyup(function (event) {
      //wrap-unwrap tree. alt+g
      if (event.altKey && event.keyCode == 71 ) {

         var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         
         var rootNode = selectedNodes[0];
         
         var nodesPositions = network.getPositions();

         function collectNodesYPositions(nodeId, rootNode, nodesPositions) {

            var nodeEdges = network.body.nodes[nodeId].edges;
            var codeEdges = [];
            nodeEdges.forEach(function(edge) {
               if (edge.fromId == nodeId) {
                  codeEdges.push(edge);
               }
            });

            var branchCodeNodes = [];
            codeEdges.forEach(function(codeEdge) {
               branchCodeNodes.push(getNodeFromNetworkDataById(codeEdge.toId));
            });
            var branchesPositionsData = [];
            branchCodeNodes.forEach(function(branchNode) {
               branchesPositionsData.push({
                  top: network.body.nodes[branchNode.id].shape.top,
                  height: network.body.nodes[branchNode.id].shape.height
               });
               branchesPositionsData = branchesPositionsData.concat(collectNodesYPositions(branchNode.id, rootNode, nodesPositions));
            });
            return branchesPositionsData;
         }

         var branchesPositionsData = collectNodesYPositions(rootNode.id, rootNode, nodesPositions);

            function compareBPD( a, b ) {
               if ( a.top < b.top ){
                  return -1;
               }
               if ( a.top > b.top ){
                  return 1;
               }
               return 0;
            }

            branchesPositionsData = branchesPositionsData.sort(compareBPD);

         var needToUnwrap = false;
         var lastBranchPositionData = null;
         for (var i = 0; i < branchesPositionsData.length; i++) {
            if (lastBranchPositionData != null) {
               var lastNodeBottom = lastBranchPositionData.top + lastBranchPositionData.height;
               if (lastNodeBottom > branchesPositionsData[i].top) {
                  needToUnwrap = true;
                  break;
               }
            }
            lastBranchPositionData = branchesPositionsData[i];
         }
         
         if (needToUnwrap) {

            unwrapNodeBranches(rootNode.id);
         
         } else {

            wrapNodeBranches(rootNode.id);
         
         }
         
      }
   });
   $(document).keyup(function (event) {
      //move to saved view position. shift+alt+number
      if (event.shiftKey && event.altKey 
         && (event.keyCode === 48 ||
             event.keyCode === 49 ||
             event.keyCode === 50 ||
             event.keyCode === 51 ||
             event.keyCode === 52 ||
             event.keyCode === 53 ||
             event.keyCode === 54 ||
             event.keyCode === 55 ||
             event.keyCode === 56 ||
             event.keyCode === 57) ) {
         var view = viewsSaves[event.keyCode];
         if (typeof view !== "undefined" && view !== null) {
            var newPosition = network.canvasToDOM(view.position);
            moveViewTo(view.position.x, view.position.y, view.scale);
         }
      }
   });
   $(document).keyup(function (event) {
      //Save view by n number. No nodes must be selected. ctrl+alt+number
      if (event.altKey && event.ctrlKey 
         && (event.keyCode === 48 ||
             event.keyCode === 49 ||
             event.keyCode === 50 ||
             event.keyCode === 51 ||
             event.keyCode === 52 ||
             event.keyCode === 53 ||
             event.keyCode === 54 ||
             event.keyCode === 55 ||
             event.keyCode === 56 ||
             event.keyCode === 57) ) {
         var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         if (selectedNodes.length == 0) {
            var scale = network.getScale();
            var position = network.getViewPosition();
            viewsSaves[event.keyCode] = {position: position, scale: scale};
            console.log(event.keyCode);
            console.log(scale);
            console.log(position);
            console.log(viewsSaves);
         }
         
      }
   });
   $(document).keyup(function (event) {
      //Move clipboard nodes by n number to last click position. ctrl+shift+number
      if (event.shiftKey && event.ctrlKey 
         && (event.keyCode === 48 ||
             event.keyCode === 49 ||
             event.keyCode === 50 ||
             event.keyCode === 51 ||
             event.keyCode === 52 ||
             event.keyCode === 53 ||
             event.keyCode === 54 ||
             event.keyCode === 55 ||
             event.keyCode === 56 ||
             event.keyCode === 57) ) {
         //clipboard[event.keyCode] = selectedNodes;
         console.log(event.keyCode);
         console.log(clipboard);
         console.log(clipboard[event.keyCode]);
         var nodesToMove = clipboard[event.keyCode];
         if (typeof nodesToMove !== "undefined" && nodesToMove !== null && nodesToMove.length != 0) {
            var positions = network.getPositions();
            var maxLeftX = positions[nodesToMove[0].id].x;
            var maxTopY = positions[nodesToMove[0].id].y;
            nodesToMove.forEach(function(node) {
               if (typeof node !== "undefined" && node !== null) {
                  if (positions[node.id].x < maxLeftX) maxLeftX = positions[node.id].x;
                  if (positions[node.id].y < maxTopY) maxTopY = positions[node.id].y;
               }
            });
            var lastClickCanvasPosition = network.canvas.DOMtoCanvas(lastClickPosition);
            var moveShiftX = lastClickCanvasPosition.x - maxLeftX;
            var moveShiftY = lastClickCanvasPosition.y - maxTopY;
            nodesToMove.forEach(function(node) {
               if (typeof node !== "undefined" && node !== null) {
                  var pNode = positions[node.id];
                  var x = pNode.x + moveShiftX;
                  var y = pNode.y + moveShiftY;
                  network.nodesHandler.moveNode(node.id, x, y);
               }
            });
         }

      }
   });
   $(document).keyup(function (event) {
      //Save selected nodes to clipboard by n number. ctrl+alt+number
      if (event.altKey && event.ctrlKey 
         && (event.keyCode === 48 ||
             event.keyCode === 49 ||
             event.keyCode === 50 ||
             event.keyCode === 51 ||
             event.keyCode === 52 ||
             event.keyCode === 53 ||
             event.keyCode === 54 ||
             event.keyCode === 55 ||
             event.keyCode === 56 ||
             event.keyCode === 57) ) {
         var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         if (selectedNodes.length != 0) {
            console.log(selectedNodes);
            clipboard[event.keyCode] = selectedNodes;
            console.log(event.keyCode);
            console.log(clipboard);
         }
      }
   });
   $(document).keyup(function (event) {
      //move view to position from birdView variable. alt+h
      if (event.altKey && event.keyCode === 72) {
         if(typeof birdView !== "undefined") {
            moveViewTo(birdView.x, birdView.y, birdView.scale);
         }
      }
   });
   $(document).keyup(function (event) {
      //Split node label. ctrl+alt+v
      if (event.ctrlKey && event.altKey && event.keyCode === 86) {
         $("span#splitNodeListLabelButton").click();
      }
   });
   $(document).keyup(function (event) {
      //Run node code. alt+r
      if (event.altKey == true &&
          event.shiftKey == false &&
          event.ctrlKey == false &&
          event.keyCode === 82) {
         $("span#runNodeCodeButton").click();
      }
   });
   $("#network").keyup(function (event) {
      //Build project. alt+b
      if (event.altKey && event.keyCode === 66) {
         var selectedNodes = objectToArray( network.selectionHandler.selectionObj.nodes);
         if (selectedNodes.length != 1) {
            console.log("Select one node");
            showAlert("Select one node", 80, 150);
            return;
         }
         var rootNodeId = findTreeRootNodeId(selectedNodes[0].id);
         var rootNode = getNodeFromNetworkDataById(rootNodeId);
         var projectName = rootNode.label.replace("mvj code file for project name: ","");
			var buildProjectParentNode;
			var buildProjectParentNodeName = "buildProject code: " + projectName;
			var nodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + buildProjectParentNodeName + "$"));
			if (nodes.length == 0) {
				console.log("ERROR: no " + buildProjectParentNodeName + " node");
				return;
			}
			buildProjectParentNode = nodes[0];
			var edges = network.body.nodes[buildProjectParentNode.id].edges;
			var buildProjectCodeNode;
			for (var key in edges) {
				if (edges[key].fromId == buildProjectParentNode.id) {
					buildProjectCodeNode = edges[key].to;
				}
			}	
			if (typeof buildProjectCodeNode === "undefined") {
				console.log("ERROR: no buildProjectCodeNode");
				return;
			}
			var code = collectCodeNodesContent(buildProjectCodeNode.id);
			var codeFunction = new Function('codeNodeId', code);
			codeFunction(buildProjectCodeNode.id);
		}
	});
   $("#network").keyup(function (event) {
      //Build and run project. shift+alt+r
      if (event.altKey == true &&
          event.shiftKey == true && 
          event.ctrlKey == false && 
          event.keyCode === 82) {
         var selectedNodes = objectToArray( network.selectionHandler.selectionObj.nodes);
         if (selectedNodes.length != 1) {
            console.log("Select one node");
            showAlert("Select one node", 80, 150);
            return;
         }
         var rootNodeId = findTreeRootNodeId(selectedNodes[0].id);
         var rootNode = getNodeFromNetworkDataById(rootNodeId);
         var projectName = rootNode.label.replace("mvj code file for project name: ","");
         var buildProjectParentNode;
         var buildProjectParentNodeName = "buildProject code: " + projectName;
         var nodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + buildProjectParentNodeName + "$"));
         if (nodes.length == 0) {
            console.log("ERROR: no " + buildProjectParentNodeName + " node");
            return;
         }
         buildProjectParentNode = nodes[0];
         var edges = network.body.nodes[buildProjectParentNode.id].edges;
         var buildProjectCodeNode;
         for (var key in edges) {
            if (edges[key].fromId == buildProjectParentNode.id) {
               buildProjectCodeNode = edges[key].to;
            }
         }	
         if (typeof buildProjectCodeNode === "undefined") {
            console.log("ERROR: no buildProjectCodeNode");
            return;
         }
         var code = collectCodeNodesContent(buildProjectCodeNode.id);
         var codeFunction = new Function('codeNodeId', 'runProject', 'selectedCodeNodeId', code);
         codeFunction(buildProjectCodeNode.id, "true", selectedNodes[0].id);
      }
   });
   $("#network").keyup(function (event) {
                //Save canvas. Ctrl+alt+s
		if (event.ctrlKey && event.altKey && event.keyCode === 83) {
			var saveOperationsParentNode;
			var saveOperationsParentNodeName = "Save operations code";
			var nodes = getNodesByRegexSearchInLabel(network, new RegExp("^" + saveOperationsParentNodeName + "$"));
			if (nodes.length == 0) {
				console.log("ERROR: no " + saveOperationsParentNodeName + " node");
				return;
			}
			saveOperationsParentNode = nodes[0];
			var edges = network.body.nodes[saveOperationsParentNode.id].edges;
			var saveOperationsCodeNode;
			for (var key in edges) {
				if (edges[key].fromId == saveOperationsParentNode.id) {
					saveOperationsCodeNode = edges[key].to;
				}
			}	
			if (typeof saveOperationsCodeNode === "undefined") {
				console.log("ERROR: no saveOperationsCodeNode");
				return;
			}
			var code = collectCodeNodesContent(saveOperationsCodeNode.id);
			var codeFunction = new Function('codeNodeId', code);
			codeFunction(saveOperationsCodeNode.id);
		}
	});
   $("#network").keyup(function (event) {
      //Duplicate. Ctrl+alt+d.
      if (event.ctrlKey && event.altKey && event.keyCode === 68) {
         if (nextOperationMultiplier.length > 0) {
            var multiplyCount = parseInt(nextOperationMultiplier);
            multiplySelected(multiplyCount, "c", 0, 30, 0);
            nextOperationMultiplier = "";
         } else {
            selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
            selectedEdges = objectToArray(network.selectionHandler.selectionObj.edges);
            duplicateGraph(selectedNodes, selectedEdges);
         }
      }
   });
   $("div#network").keydown(function (event) {
      //Toggle nodeLabel textarea expansion. ctrl+Space
      if (event.ctrlKey && event.keyCode === 32) {
         if (nodeLabelTextareaExpanded) {
            $("textarea#nodeLabelTextarea").css("width", "167px");
            $("textarea#nodeLabelTextarea").css("height", "45px");
            nodeLabelTextareaExpanded = false;
         } else {
            $("textarea#nodeLabelTextarea").css("width", "940px");
            $("textarea#nodeLabelTextarea").css("height", "580px");
            nodeLabelTextareaExpanded = true;
         }
      }
   });
   $("textarea#nodeLabelTextarea").keydown(function (event) {
      //Toggle nodeLabel textarea expansion. ctrl+Space
      if (event.ctrlKey && event.keyCode === 32) {
         if (nodeLabelTextareaExpanded) {
            $("textarea#nodeLabelTextarea").css("width", "167px");
            $("textarea#nodeLabelTextarea").css("height", "45px");
            nodeLabelTextareaExpanded = false;
         } else {
            $("textarea#nodeLabelTextarea").css("width", "940px");
            $("textarea#nodeLabelTextarea").css("height", "580px");
            nodeLabelTextareaExpanded = true;
         }
      }
   });

   $("div#network").keydown(function (event) {
      //Toggle edgeLabel textarea expansion. ctrl+Space
      if (event.ctrlKey && event.keyCode === 32) {
         if (edgeLabelTextareaExpanded) {
            $("textarea#edgeLabelTextarea").css("width", "167px");
            $("textarea#edgeLabelTextarea").css("height", "45px");
            edgeLabelTextareaExpanded = false;
         } else {
            $("textarea#edgeLabelTextarea").css("width", "940px");
            $("textarea#edgeLabelTextarea").css("height", "580px");
            edgeLabelTextareaExpanded = true;
         }
      }
   });
   $("textarea#edgeLabelTextarea").keydown(function (event) {
      //Toggle edgeLabel textarea expansion. ctrl+Space
      if (event.ctrlKey && event.keyCode === 32) {
         if (edgeLabelTextareaExpanded) {
            $("textarea#edgeLabelTextarea").css("width", "167px");
            $("textarea#edgeLabelTextarea").css("height", "45px");
            edgeLabelTextareaExpanded = false;
         } else {
            $("textarea#edgeLabelTextarea").css("width", "940px");
            $("textarea#edgeLabelTextarea").css("height", "580px");
            edgeLabelTextareaExpanded = true;
         }
      }
   });
   $("div#network").keydown(function (event) {
      //Left align nodes. shift+alt+LeftArrow
      if (event.shiftKey && event.altKey && event.keyCode === 37) {
         var nodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         var minLeft;
         var nodesPositions = network.getPositions();
         //for (var i in nodes) {
         //        var nodeD = getNodeFromNetworkDataById(nodes[i].id);
         //        var pNode = nodesPositions[nodes[i].id];
         //        nodeD.x = pNode.x;
         //        nodeD.y = pNode.y;
         //        network.body.data.nodes.update(nodeD);
         //}

         for (i = 0; i < nodes.length; i++) {
                 if (i == 0) minLeft = nodes[i].shape.left;
                 if (minLeft > nodes[i].shape.left) {
                         minLeft = nodes[i].shape.left;
                 };
         }

         for (i = 0; i < nodes.length; i++) {
                 var leftDiff = nodes[i].shape.left - parseFloat(minLeft.toFixed(5));
                 //network.body.nodes[nodes[i].id].x = nodes[i].x - leftDiff;
                 network.body.nodes[nodes[i].id].x = Number(nodesPositions[nodes[i].id].x - leftDiff);
         }
         network.body.emitter.emit("startSimulation");

       }
   });
   $("div#network").keydown(function (event) {
      //Align nodes top. shift+alt+TopArrow
      if (event.shiftKey && event.altKey && event.keyCode === 38) {
         var nodes = objectToArray(network.selectionHandler.selectionObj.nodes);

        var maxTop;
        var nodesPositions = network.getPositions();
        for (var i in nodes) {
                var nodeD = getNodeFromNetworkDataById(nodes[i].id);
                var pNode = nodesPositions[nodes[i].id];
                nodeD.x = pNode.x;
                nodeD.y = pNode.y;
                network.body.data.nodes.update(nodeD);
        }

        for (i = 0; i < nodes.length; i++) {
                if (i == 0) maxTop = nodes[i].shape.top;
                if (maxTop > nodes[i].shape.top) {
                        maxTop = nodes[i].shape.top;
                };
        }

        for (i = 0; i < nodes.length; i++) {
                var topDiff = nodes[i].shape.top - parseFloat(maxTop.toFixed(5));
                network.body.nodes[nodes[i].id].y = nodes[i].y - topDiff;
        }

      }
   });
//TODO. Align nodes horizontal center. ???
   $("div#network").keydown(function (event) {
      //Zoom out. shift+alt+d
      if (event.shiftKey && event.altKey && event.keyCode === 68) {
         nodesDropDownMenuNodesIds.forEach(function(nodeId) {
            network.body.data.nodes.remove(nodeId);
         });
         nodesDropDownMenuNodesIds = [];

         var scale = network.getScale();
         var newScale = scale / 1.5;

         if (cursorNodeId != null) {
                node = network.body.data.nodes.get(cursorNodeId);
                node.font.size = 5/newScale;
                node = network.body.data.nodes.update(node);
         }

         var position = network.getViewPosition();
         position = network.canvasToDOM(position);
         network.interactionHandler.zoom(newScale, position);
      }
   });
   $("div#network").keydown(function (event) {
      //Zoom in. shfit+alt+f
      if (event.shiftKey && event.altKey && event.keyCode === 70) {
         nodesDropDownMenuNodesIds.forEach(function(nodeId) {
            network.body.data.nodes.remove(nodeId);
         });
         nodesDropDownMenuNodesIds = [];

         var scale = network.getScale();
         var newScale = scale * 1.5;

         if (cursorNodeId != null) {
                node = network.body.data.nodes.get(cursorNodeId);
                node.font.size = 5/newScale;
                node = network.body.data.nodes.update(node);
         }

         var position = network.getViewPosition();
         position = network.canvasToDOM(position);
         network.interactionHandler.zoom(newScale, position);
      }
   });
	$("#network").keydown(function (event) {
		//Delete or Backspace
		//if (event.ctrlKey && event.keyCode === 13) {
		if (event.keyCode === 46 || event.keyCode === 8) {
			network.manipulation.deleteSelected();
		}
	});
	$("div#network-popUp").keydown(function (event) {
		//Click "Save" in "Add node" form. ctrl+Enter
		if (event.ctrlKey && event.keyCode === 13) {
			$("#saveButton").click();
		}
	});
   $("div#network-popUp").keydown(function (event) {
      //Cancel node edit. Esc  //ToFix
      if (event.keyCode === 27) {
         $("input#cancelButton").click();
         cancelNodeEdit = true;
         cancelEdgeEditVar = true;
         $("#network div.vis-network canvas").focus();
      }
   });
   $("div#schemeEditNodesMenu").keydown(function (event) {
      //saveNode. alt+Enter
      if (event.altKey && event.keyCode === 13) {
         $("span#saveNodeEditButton").click();
      }
   });

   $("div#schemeEditEdgesMenu").keydown(function (event) {
      //saveEdge. alt+Enter
      if (event.altKey && event.keyCode === 13) {
         $("span#saveEdgeEditButton").click();
      }
   });
   $("div#schemeEditNodesMenu").keydown(function (event) {
      //saveNodes and closeNodes. ctrl+Enter
      if (event.ctrlKey && event.keyCode === 13) {
         $("textarea#nodeLabelTextarea").css("width", "167px");
         $("textarea#nodeLabelTextarea").css("height", "45px");
         nodeLabelTextareaExpanded = false;
         $("span#saveNodeEditButton").click();
         $("span#closeNodeEditButton").click();
      }
   });

   $("div#schemeEditEdgesMenu").keydown(function (event) {
      //saveEdges and closeEdges. ctrl+Enter
      if (event.ctrlKey && event.keyCode === 13) {
         $("textarea#edgeLabelTextarea").css("width", "167px");
         $("textarea#edgeLabelTextarea").css("height", "45px");
         edgeLabelTextareaExpanded = false;
         $("span#saveEdgeEditButton").click();
         $("span#closeEdgeEditButton").click();
      }
   });
   $("div#schemeEditNodesMenu").keydown(function (event) {
      //Close node left menu.Esc
      if (event.keyCode === 27 &&
          $("div#searchMenu").length == 0) {
         network.disableEditMode();
         network.selectionHandler.unselectAll();
         $("span#closeNodeEditButton").click();
         network.editNode();
         $("#network div.vis-network").focus();
      }
   });

   $("div#schemeEditEdgesMenu").keydown(function (event) {
console.log("asdf");
      //Close edge left menu. Esc
      if (event.keyCode === 27 &&
          $("div#searchMenu").length == 0) {
         network.disableEditMode();
         network.selectionHandler.unselectAll();
         $("span#closeEdgeEditButton").click();
console.log("esc");
         $("#network div.vis-network").focus();
      }
   });
   $("div#network").keydown(function (event) {
      //Cancel add node/edge. Esc
      if (event.keyCode === 27 &&
          document.getElementsByClassName("vis-back").length == 0 &&
          $("div#searchMenu").length == 0) {
         network.disableEditMode();
         network.selectionHandler.unselectAll();
         $("span#closeNodeEditButton").click();
         $("span#closeEdgeEditButton").click();
         network.editNode();
      }
   });
   //TODO. Not working now.
   $(document).keydown(function (event) {
      //Cancel node edit. Esc
      if (event.keyCode === 27) {
         if (document.getElementById('network-popUp').style.display == "none" && 
             cancelNodeEdit == false && 
             cancelEdgeEditVar == false &&
             $("div#searchMenu").length == 0) {
            network.disableEditMode();
            network.editNode();
         } else {
            cancelNodeEdit = false;
            cancelEdgeEditVar = false;
         }
      }
   });
   $(document).keydown(function (event) {
      //Close search menu. Esc
      if (event.keyCode === 27 && $("div#searchMenu").length != 0) {
         console.log("close search menu");
         $("div#searchMenu").remove();
         $("div#closeSearchMenu").remove();
      }
   });
   $(document).keydown(function (event) {
      //Connect nodes. ctrl+alt+c.
      if (event.ctrlKey == true && 
          event.altKey == true &&
          event.shiftKey == false &&
          event.keyCode === 67) {
         var selectedNodesCount = network.selectionHandler._getSelectedNodeCount();
         if (selectedNodesCount < 2) return;
         var nodes = objectToArray(network.selectionHandler.selectionObj.nodes);
         var rootNodeId;
         var minLeft;
         for (i = 0; i < selectedNodesCount; i++) {
            if (i == 0) {
               minLeft = nodes[0].x;
               rootNodeId = nodes[0].id;
            }
            if (minLeft > nodes[i].x) {
               minLeft = nodes[i].x;
               rootNodeId = nodes[i].id;
            };
         }
         var index = 0;
         for (i = 0; i < selectedNodesCount; i++) {
            if (nodes[i].id != rootNodeId) {
               var edgeData = {from: rootNodeId, to: nodes[i].id};
               network.body.data.edges.getDataSet().add(edgeData);
               console.log("Connect nodes: " + String(index) + ", " + String(Number(selectedNodesCount)-Number(1)));
               index += 1;
            }
         }
         network.selectionHandler.unselectAll();
      }
   });
   $(document).keydown(function (event) {
      //Search nodes. ctrl+alt+f.
      if (event.ctrlKey == true && 
          event.altKey == true &&
          event.shiftKey == false &&
          event.keyCode === 70) {

         if ($("div#searchMenu").length != 0) {
            $("div#runSearchMenu span").click();
         }

         if ($("div#searchMenu").length == 0) {
            console.log("show search menu");
            var searchMenu = $("<div id='searchMenu'></div>");

            var closeSearchMenu = $("<div id='closeSearchMenu'><span>close</span></div>");
            closeSearchMenu.css("margin","20px");
            closeSearchMenu.css("position","absolute");
            closeSearchMenu.css("bottom","0");
            closeSearchMenu.css("left","0");
            closeSearchMenu.find("span").css("cursor","pointer");
            searchMenu.append(closeSearchMenu);
            closeSearchMenu.find("span").click(function() {
               $("div#searchMenu").remove();
               $("div#closeSearchMenu").remove();
            });

            var runSearchMenu = $("<div id='runSearchMenu'><span>search</span></div>");
            runSearchMenu.css("margin","20px");
            runSearchMenu.css("position","absolute");
            runSearchMenu.css("bottom","0");
            runSearchMenu.css("right","0");
            runSearchMenu.find("span").css("cursor","pointer");
            searchMenu.append(runSearchMenu);
            runSearchMenu.find("span").click(function() {
               var inputLine = $("input#inputLineSearchMenu").val();
               console.log("inputLine: " + inputLine);
               var regexCheckboxChecked = $("input#regexCheckboxSearchMenu").is(":checked");
               console.log("regexCheckboxChecked: " + String(regexCheckboxChecked));




         var regExp = null;
         var jumpNavigationDataLabel = null;
         var selectedNodeLabel = inputLine.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         if (jumpNavigationData != null) {
             jumpNavigationDataLabel = jumpNavigationData.label.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         }
         if (jumpNavigationData != null &&
             regexCheckboxChecked && 
             typeof jumpNavigationData.label !== "undefined" && 
             jumpNavigationData.label.length > 0) {

             regExp = new RegExp(jumpNavigationData.label, "gi");
         }

   if (jumpNavigationData == null && inputLine == "") {
      showAlert("Insert search line", 60, 190);
      return;
   }
         
   //If node is selected and there were no jumps before or there is different label on selected node.
   if ((inputLine != "") && 
         (jumpNavigationData == null || 
         (regExp != null && selectedNodeLabel.match(regExp) == null) ||
         (regExp == null && jumpNavigationDataLabel != selectedNodeLabel) )) {

      var nodes = network.body.data.nodes.get();

      var foundNodes = [];

      var scale = network.getScale();
      var viewPosition = network.getViewPosition();
      var n1X = parseFloat(viewPosition.x.toFixed(5));
      var n1Y = parseFloat(viewPosition.y.toFixed(5));
      var positionX = parseFloat((n1X - canvasWidth/(2*scale)).toFixed(5));
      var positionY = parseFloat((n1Y - canvasHeight/(2*scale)).toFixed(5));

      //foundNodes.push({x: positionX, y: positionY});
      foundNodes.push({x: viewPosition.x, y: viewPosition.y});

      var regExp = null;
      if (inputLine != "" &&
          regexCheckboxChecked) {

          regExp = new RegExp(inputLine, "gi");
      }

      var preparedSearchLine = inputLine.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();

      nodes.forEach(function(node) {
         var nodeLabel = node.label;
         nodeLabel = nodeLabel.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();

         if (regExp != null && nodeLabel.match(regExp) != null) {
            foundNodes.push(node);
         }
         if (regExp == null && nodeLabel == preparedSearchLine) {
            foundNodes.push(node);
         }
      });
      
      if (foundNodes.length == 1) {
         showAlert("No nodes found", 60, 190);
         return;
      }

      var nodesPositions = network.getPositions();

      foundNodes.forEach(function(node) {
         if (typeof node.id === "undefined") return;
         var nodeD = getNodeFromNetworkDataById(node.id);
         pNode = nodesPositions[node.id];
         nodeD.x = pNode.x;
         nodeD.y = pNode.y;
         network.body.data.nodes.update(nodeD);
      });

      jumpNavigationData = {
         label: inputLine,
         foundNodes: foundNodes,
         lastJumpNodeNumber: 0
      };
      var jumpNumber = 1;

      $("#alertLine").remove();
      showAlert("Nodes found: " + String(jumpNumber) + "/" + String(jumpNavigationData.foundNodes.length - 1), 40, 190);

      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   } else {
      var jumpNumber = null;
      if (jumpNavigationData.lastJumpNodeNumber == jumpNavigationData.foundNodes.length - 1) {
         jumpNumber = 0;
      } else {
         jumpNumber = jumpNavigationData.lastJumpNodeNumber + 1;
      }

      $("#alertLine").remove();
      showAlert("Nodes found: " + String(jumpNumber) + "/" + String(jumpNavigationData.foundNodes.length - 1), 40, 190);

      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   }






            });





            var runBackwardsSearchMenu = $("<div id='runBackwardsSearchMenu'><span>backwards</span></div>");
            runBackwardsSearchMenu.css("margin","20px");
            runBackwardsSearchMenu.css("position","absolute");
            runBackwardsSearchMenu.css("bottom","0");
            runBackwardsSearchMenu.css("right","70px");
            runBackwardsSearchMenu.find("span").css("cursor","pointer");
            searchMenu.append(runBackwardsSearchMenu);
            runBackwardsSearchMenu.find("span").click(function() {
               var inputLine = $("input#inputLineSearchMenu").val();
               console.log("inputLine: " + inputLine);
               var regexCheckboxChecked = $("input#regexCheckboxSearchMenu").is(":checked");
               console.log("regexCheckboxChecked: " + String(regexCheckboxChecked));




         var regExp = null;
         var jumpNavigationDataLabel = null;
         var selectedNodeLabel = inputLine.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         if (jumpNavigationData != null) {
             jumpNavigationDataLabel = jumpNavigationData.label.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();
         }
         if (jumpNavigationData != null &&
             regexCheckboxChecked && 
             typeof jumpNavigationData.label !== "undefined" && 
             jumpNavigationData.label.length > 0) {

             regExp = new RegExp(jumpNavigationData.label, "gi");
         }

   if (jumpNavigationData == null && inputLine == "") {
      showAlert("Insert search line", 60, 190);
      return;
   }
         
   //If node is selected and there were no jumps before or there is different label on selected node.
   if ((inputLine != "") && 
         (jumpNavigationData == null || 
         (regExp != null && selectedNodeLabel.match(regExp) == null) ||
         (regExp == null && jumpNavigationDataLabel != selectedNodeLabel) )) {

      var nodes = network.body.data.nodes.get();

      var foundNodes = [];

      var scale = network.getScale();
      var viewPosition = network.getViewPosition();
      var n1X = parseFloat(viewPosition.x.toFixed(5));
      var n1Y = parseFloat(viewPosition.y.toFixed(5));
      var positionX = parseFloat((n1X - canvasWidth/(2*scale)).toFixed(5));
      var positionY = parseFloat((n1Y - canvasHeight/(2*scale)).toFixed(5));

      //foundNodes.push({x: positionX, y: positionY});
      foundNodes.push({x: viewPosition.x, y: viewPosition.y});

      var regExp = null;
      if (inputLine != "" &&
          regexCheckboxChecked) {

          regExp = new RegExp(inputLine, "gi");
      }

      var preparedSearchLine = inputLine.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();

      nodes.forEach(function(node) {
         var nodeLabel = node.label;
         nodeLabel = nodeLabel.replace(/\n+/g," ").replace(/\s+/g," ").toLowerCase();

         if (regExp != null && nodeLabel.match(regExp) != null) {
            foundNodes.push(node);
         }
         if (regExp == null && nodeLabel == preparedSearchLine) {
            foundNodes.push(node);
         }
      });
      
      if (foundNodes.length == 1) {
         showAlert("No nodes found", 60, 190);
         return;
      }

      var nodesPositions = network.getPositions();

      foundNodes.forEach(function(node) {
         if (typeof node.id === "undefined") return;
         var nodeD = getNodeFromNetworkDataById(node.id);
         pNode = nodesPositions[node.id];
         nodeD.x = pNode.x;
         nodeD.y = pNode.y;
         network.body.data.nodes.update(nodeD);
      });

      jumpNavigationData = {
         label: inputLine,
         foundNodes: foundNodes,
         lastJumpNodeNumber: 0
      };
      var jumpNumber = jumpNavigationData.foundNodes.length - 1;

      $("#alertLine").remove();
      showAlert("Nodes found: " + String(jumpNumber) + "/" + String(jumpNavigationData.foundNodes.length - 1), 40, 190);

      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   } else {
      var jumpNumber = null;
      if (jumpNavigationData.lastJumpNodeNumber == 0) {
         jumpNumber = jumpNavigationData.foundNodes.length - 1;
      } else {
         jumpNumber = jumpNavigationData.lastJumpNodeNumber - 1;
      }

      $("#alertLine").remove();
      showAlert("Nodes found: " + String(jumpNumber) + "/" + String(jumpNavigationData.foundNodes.length - 1), 40, 190);

      moveViewTo(
         jumpNavigationData.foundNodes[jumpNumber].x,
         jumpNavigationData.foundNodes[jumpNumber].y, 
         network.getScale()
      );
      jumpNavigationData.lastJumpNodeNumber = jumpNumber;
   }






            });




            var inputLineSearchMenu = $("<input id='inputLineSearchMenu' type='text'>");
            inputLineSearchMenu.css("border","1px solid #a3a3a3");
            inputLineSearchMenu.css("background","white");
            inputLineSearchMenu.css("font","10pt sans");
            inputLineSearchMenu.css("margin","20px");
            inputLineSearchMenu.css("position","absolute");
            inputLineSearchMenu.css("top","0");
            inputLineSearchMenu.css("left","0");
            inputLineSearchMenu.css("width","258px");
            searchMenu.append(inputLineSearchMenu);

            var regexCheckboxSearchMenu = $("<input id='regexCheckboxSearchMenu' type='checkbox'>");
            var regexCheckboxRowSearchMenu = $("<div id='regexCheckboxRowSearchMenu'><span>regex</span></div>");
            regexCheckboxRowSearchMenu.prepend(regexCheckboxSearchMenu);
            regexCheckboxSearchMenu.css("border","1px solid #a3a3a3");
            regexCheckboxSearchMenu.css("background","white");
            regexCheckboxSearchMenu.find("span").css("margin-left","10px");
            regexCheckboxRowSearchMenu.css("margin","60px 20px 20px 20px");
            regexCheckboxRowSearchMenu.css("position","absolute");
            regexCheckboxRowSearchMenu.css("top","0");
            regexCheckboxRowSearchMenu.css("left","0");
            searchMenu.append(regexCheckboxRowSearchMenu);

            var documentWidth = $(document).width();
            var documentHeigth = $(document).height();
            var documentCenter = documentWidth / 2;
            var searchMenuLeft = documentCenter - 150;
            var searchMenuLeftLine = String(searchMenuLeft) + "px";
            searchMenu.css("width", "300px");
            searchMenu.css("height", "150px");
            searchMenu.css("position", "fixed");
            searchMenu.css("bottom", "0");
            searchMenu.css("left", searchMenuLeftLine);
            searchMenu.css("border-top", "1px solid #a3a3a3");
            searchMenu.css("border-left", "1px solid #a3a3a3");
            searchMenu.css("border-right", "1px solid #a3a3a3");
            searchMenu.css("border-bottom", "0");
            searchMenu.css("background", "white");
            searchMenu.css("z-index", "9999");

            $("body").append(searchMenu);
            
            $("input#inputLineSearchMenu").focus();
         }

      }
   });
   $(document).keydown(function (event) {
      //Search nodes. ctrl+alt+f.
      if (event.ctrlKey == true && 
          event.altKey == true &&
          event.shiftKey == false &&
          event.keyCode === 66) {

         $("div#searchMenu div#runBackwardsSearchMenu span").click();
      }
   });

   $(document).keydown(function (event) {
      //Run search when search line in focus. Enter

      if ($("div#searchMenu").length != 0 && 
          event.keyCode === 13 &&
          $("input#inputLineSearchMenu").is(":focus")) {
         $("div#searchMenu div#runSearchMenu span").click();
      }
   });

});
//End of $(document).ready(
function c(x, y) {
	var imgData = false;
	var ctxColor;
	if (imgData === false) {
		//console.log(document.getElementById("network").getContext('2d'));
		//ctxColor = document.getElementById("network").getContext("2d");
		ctxColor = canvas.getContext('2d');
		imgData = ctxColor.getImageData(0,0,canvas.width, canvas.height);
	}	
	var index = (y * imgData.width + x) * 4;
	var red = imgData.data[index];
	var green = imgData.data[index+1];
	var blue = imgData.data[index+2];
	var alpha = imgData.data[index+3];
	//console.log('pix x ' + x + ' y ' + y + ' index ' + index + ' COLOR ' + red + ', ' + green + ', ' + blue + ', ' + alpha);
}
function rdf() {
	var store = $rdf.graph();
	console.log($rdf);
	console.log(store);
	console.log(network);
	network.body.data.nodes.get().forEach(function(node) {
		store.add($rdf.literal(node.id), FOAF('name'), $rdf.literal(node.id));
		//store.add(node.id, "name",);
	});
	network.body.data.nodes.get().forEach(function(item) {
	});
	console.log(store.length);
}
function localStorageSpace() {
    var data = '';

    console.log('Current local storage: ');

    for(var key in window.localStorage){

        if(window.localStorage.hasOwnProperty(key)){
            data += window.localStorage[key];
            console.log( key + " = " + ((window.localStorage[key].length * 16)/(8 * 1024)).toFixed(2) + ' KB' );
        }

    }

    console.log(data ? '\n' + 'Total space used: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)');
    console.log(data ? 'Approx. space remaining: ' + (5120 - ((data.length * 16)/(8 * 1024)).toFixed(2)) + ' KB' : '5 MB');
};
function makeNodeJsonLine(id, label, link, x, y) {
	label = label.replace(":","\:");
	link = link.replace(":","\:");
	var json = "";
	json += "\"" + id + "\": { \"id\": \"" + id + "\",";
	json += "\"x\": " + x.toString() + ", \"y\": " + y.toString() + ",";
	json += "\"label\": \"" + label + "\",";
	json += "\"link\": \"" + link + "\"";
	json += "}";
	return json;
}
function countSelectedNodesAndEdges() {
   var nodes = objectToArray(network.body.nodes);
   var edges = objectToArray(network.body.edges);
   console.log("All nodes: " + nodes.length);
   console.log("All edges: " + edges.length);
   var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
   var selectedEdges = objectToArray(network.selectionHandler.selectionObj.edges);
   console.log("Selected nodes: " + selectedNodes.length);
   console.log("Selected edges: " + selectedEdges.length);
}
function help() {
   console.log("localStorageSpace()");
   console.log("countSelectedNodesAndEdges()");
   console.log("hideAllToDownloadNews()");
   console.log("restoreAllAfterNewsDownload()");
   console.log("viewLink()");
   console.log("tG(multiplyCount, idPostfix, xShift, yShift, dateLine = '', idCounterPostfixStart = 0)");
   console.log("multiplySelected(multiplyCount, idPostfix, xShift, yShift, idCounterPostfixStart = 0)");
   console.log("hC()");
   console.log("sC()");
   console.log("fN()");
   console.log("uFN()");
   console.log("joinNodesLabels()");
   console.log("distributeVertically(yStep)");
   console.log("addBranchToEachSelectedNode(newNodeLabel, stepYFromSelectedNodesRightSide)");
   console.log("editNodesIds()");
}
function hideAllToDownloadNews(selectedNodesIds, selectedEdgesIds) {
   var nodes = objectToArray(network.body.nodes);
   var edges = objectToArray(network.body.edges);
   var nodesToHide = [];
   var edgesToHide = [];
   nodes.forEach(function(node) {
      var node = getNodeFromNetworkDataById(node.id);
      if ((typeof node.label !== "undefined" && 
         node.label != "newsList" &&
         node.label.match(/.*\| Feed Node/) == null &&
         node.label.match(/.*download news code.*/) == null &&
         (typeof node.link === "undefined" || (
         typeof node.link !== "undefined" &&
         node.link.match(/.*youtube.*videos.*/) == null))) ||
         selectedNodesIds.indexOf(node.id) === -1) {
         nodesToHide.push(node);
      }
   });
   edges.forEach(function(edge) {
      var edge = getEdgeFromNetworkDataById(edge.id);
      var nodeFrom = getNodeFromNetworkDataById(edge.from);
      var nodeTo = getNodeFromNetworkDataById(edge.to);
      if ((typeof nodeFrom.label !== "undefined" &&
          nodeFrom.label.match(/.*\| Feed Node/) == null &&
          typeof nodeTo.label !== "undefined" &&
          nodeTo.label != "newsList" &&
          (typeof nodeFrom.link === "undefined" || (
          typeof nodeFrom.link !== "undefined" &&
          nodeFrom.link.match(/.*youtube.*videos.*/) == null))) ||
         selectedEdgesIds.indexOf(edge.id) === -1) {
         edgesToHide.push(edge);
      }

   });

   dataCash["hideAllForNewsDownload"] = {
      nodes: nodesToHide,
      edges: edgesToHide
   };

   var removeNodesIds = [];
   nodesToHide.forEach(function(node, index) {
      removeNodesIds.push(node.id);
   });
   var removeEdgesIds = [];
   edgesToHide.forEach(function(edge, index) {
      removeEdgesIds.push(edge.id);
   });
   updateMenuFromScheme(removeNodesIds, removeEdgesIds);
   updateSchemeFromMenu([],[]);
}
function restoreAllAfterNewsDownload() {
   var branchesNodesAndEdges = dataCash["hideAllForNewsDownload"];
   if (typeof branchesNodesAndEdges === "undefined") return;
   updateMenuFromScheme([],[]);
   updateSchemeFromMenu(branchesNodesAndEdges.nodes, branchesNodesAndEdges.edges);

   delete dataCash["hideAllForNewsDownload"];
   updateMenuFromScheme([],[]);
}
var newThemeGraphTemplate = {"nodes":{
"e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b8565582823680":{"color":{"highlight":{},"hover":{},"background":"#ffc63b"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":1000,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"mm-vis-js pages list","id":"e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b8565582823680","x":10945,"y":-19926,"shape":"box","link":"","borderWidth":"","oldId":"e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558282368"},
"92f53a00-cf65-456f-bfcf-6f6c88119d5b1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"R&D institutions","x":4954,"y":-19177,"id":"92f53a00-cf65-456f-bfcf-6f6c88119d5b1471268270","oldId":"92f53a00-cf65-456f-bfcf-6f6c88119d5b147126827"},
"75ff23b4-3d0f-4c06-8061-4069494a326f1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Sites","x":4920,"y":-19152,"id":"75ff23b4-3d0f-4c06-8061-4069494a326f1471268270","oldId":"75ff23b4-3d0f-4c06-8061-4069494a326f147126827"},
"1bc92ea3-79ba-4d40-816c-35cedc1c74bf1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Magazines","x":4939,"y":-19127,"id":"1bc92ea3-79ba-4d40-816c-35cedc1c74bf1471268270","oldId":"1bc92ea3-79ba-4d40-816c-35cedc1c74bf147126827"},
"2d9049d8-feaf-41cd-afb1-87515557983e1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Articles","x":4927,"y":-19102,"id":"2d9049d8-feaf-41cd-afb1-87515557983e1471268270","oldId":"2d9049d8-feaf-41cd-afb1-87515557983e147126827"},
"51a5b447-fa28-4997-80ca-b7a96a69ef9e1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Media content","x":4949,"y":-19077,"id":"51a5b447-fa28-4997-80ca-b7a96a69ef9e1471268270","oldId":"51a5b447-fa28-4997-80ca-b7a96a69ef9e147126827"},
"8a139418-94d2-4121-94a4-dfsa26213d241471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Misc. web links","x":4950,"y":-18945,"id":"8a139418-94d2-4121-94a4-dfsa26213d241471268270","oldId":"8a139418-94d2-4121-94a4-dfsa26213d24147126827"},
"76fc5be1-7bae-46ec-a649-1bc6509b378d1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Projects","x":4932,"y":-18811,"id":"76fc5be1-7bae-46ec-a649-1bc6509b378d1471268270","oldId":"76fc5be1-7bae-46ec-a649-1bc6509b378d147126827"},
"21dc8bf2-6e0c-42cf-b702-d47f24af173a1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Tools","x":4923,"y":-18786,"id":"21dc8bf2-6e0c-42cf-b702-d47f24af173a1471268270","oldId":"21dc8bf2-6e0c-42cf-b702-d47f24af173a147126827"},
"1f9b98e7-ca75-443c-952d-a1d0ba4766521471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Organizations","x":4950,"y":-18761,"id":"1f9b98e7-ca75-443c-952d-a1d0ba4766521471268270","oldId":"1f9b98e7-ca75-443c-952d-a1d0ba476652147126827"},
"f9c77b6e-13d7-4687-9d7f-e858e5cf56851471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Standarts","x":4937,"y":-18736,"id":"f9c77b6e-13d7-4687-9d7f-e858e5cf56851471268270","oldId":"f9c77b6e-13d7-4687-9d7f-e858e5cf5685147126827"},
"f13fa072-1d46-45b2-b2b1-679177d88ba61471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Laws","x":4923,"y":-18686,"id":"f13fa072-1d46-45b2-b2b1-679177d88ba61471268270","oldId":"f13fa072-1d46-45b2-b2b1-679177d88ba6147126827"},
"ab382182-58b3-4799-ad70-5340f6f6e88d1471268270":{"color":{"highlight":{},"hover":{}},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Adjacent Themes","x":4962,"y":-18661,"id":"ab382182-58b3-4799-ad70-5340f6f6e88d1471268270","oldId":"ab382182-58b3-4799-ad70-5340f6f6e88d147126827"},
"1376bcb3-aff5-472c-b93a-4e636983a1672278270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Details, thoughts","id":"1376bcb3-aff5-472c-b93a-4e636983a1672278270","x":4868,"y":-19310,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167227827"},
"1376bcb3-aff5-472c-b93a-4e636983a1677768270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Questions","id":"1376bcb3-aff5-472c-b93a-4e636983a1677768270","x":4704,"y":-18556,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167776827"},
"1376bcb3-aff5-472c-b93a-4e636983a1678r5t270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Problems","id":"1376bcb3-aff5-472c-b93a-4e636983a1678r5t270","x":4702,"y":-18460,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a1678r5t27"},
"1376bcb3-aff5-472c-b93a-4e636983a1678678270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Goals","id":"1376bcb3-aff5-472c-b93a-4e636983a1678678270","x":4691,"y":-18366,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167867827"},
"1376bcb3-aff5-472c-b93a-4e636983a1677djk270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Development","id":"1376bcb3-aff5-472c-b93a-4e636983a1677djk270","x":4714,"y":-18241,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a1677djk27"},
"1376bcb3-aff5-472c-b93a-4e636983a167558270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"init","id":"1376bcb3-aff5-472c-b93a-4e636983a167558270","x":5000,"y":-18241,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a16755827"},
"1376bcb3-aff5-472c-b93a-4e636983a1674785098270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Notes","id":"1376bcb3-aff5-472c-b93a-4e636983a1674785098270","x":4689,"y":-19304,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167478509827"},
"1376bcb3-aff5-472c-b93a-4e636983a1672278628270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Sections","id":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","x":4842,"y":-18934,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167227862827"},
"1376bcb3-aff5-472c-b93a-4e636983a167227862278270":{"color":{"highlight":{},"hover":{},"background":"#ffd570","border":""},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"4/28/2020","id":"1376bcb3-aff5-472c-b93a-4e636983a167227862278270","x":4853,"y":-18237,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a16722786227827"},
"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270":{"color":{"highlight":{},"hover":{},"background":"red"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":72,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"mm-vis-js pages list","id":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","x":4234,"y":-18709,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167227862146827"},
"1376bcb3-aff5-472c-b93a-4e636983a167227862958270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Books","id":"1376bcb3-aff5-472c-b93a-4e636983a167227862958270","x":4924,"y":-19202,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a16722786295827"},
"1376bcb3-aff5-472c-b93a-4e636983a1672278624278270":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Forums, Groups","id":"1376bcb3-aff5-472c-b93a-4e636983a1672278624278270","x":4958,"y":-18711,"shape":"box","link":"","borderWidth":"0","oldId":"1376bcb3-aff5-472c-b93a-4e636983a167227862427827"},
"aac1163f-fc2b-4f9c-a767-e2e19d8bd93b5330":{"color":{"highlight":{},"hover":{},"background":"#ffd570"},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"Dictionary of\nconcepts","id":"aac1163f-fc2b-4f9c-a767-e2e19d8bd93b5330","x":4855,"y":-20050,"shape":"box","link":"","borderWidth":"0","oldId":"aac1163f-fc2b-4f9c-a767-e2e19d8bd93b533"},
"aky1163f-fc2b-4f9c-a767-e2e19d8bd93b5330521":{"color":{"highlight":{},"hover":{},"background":"#ffd570","border":""},"fixed":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{},"size":14,"align":"left"},"icon":{},"imagePadding":{},"margin":{},"scaling":{"label":{"enabled":false}},"shadow":{"enabled":false},"shapeProperties":{},"label":"some link","id":"aky1163f-fc2b-4f9c-a767-e2e19d8bd93b5330521","x":5248,"y":-18948,"shape":"box","link":"","borderWidth":"0","oldId":"aky1163f-fc2b-4f9c-a767-e2e19d8bd93b533"}},
"edges":{
"eaa61b14-72fb-4196-983b-04facd8cb0aa8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"eaa61b14-72fb-4196-983b-04facd8cb0aa8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"92f53a00-cf65-456f-bfcf-6f6c88119d5b1471268270"},
"f5b51ca3-a326-4f80-8963-5451be1cb7b18270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"f5b51ca3-a326-4f80-8963-5451be1cb7b18270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"75ff23b4-3d0f-4c06-8061-4069494a326f1471268270"},
"d15d32d4-4a4c-452c-8b7d-ee712d79d46d8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"d15d32d4-4a4c-452c-8b7d-ee712d79d46d8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"1bc92ea3-79ba-4d40-816c-35cedc1c74bf1471268270"},
"4d124ee3-251c-46ef-b9dc-02259578bd828270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"4d124ee3-251c-46ef-b9dc-02259578bd828270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"2d9049d8-feaf-41cd-afb1-87515557983e1471268270"},
"84962dff-2ade-4e6e-9736-ff8910f4b84b8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"84962dff-2ade-4e6e-9736-ff8910f4b84b8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"51a5b447-fa28-4997-80ca-b7a96a69ef9e1471268270"},
"6c7bf4ec-c6d4-461a-9a09-62061ea5d86c8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"6c7bf4ec-c6d4-461a-9a09-62061ea5d86c8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"8a139418-94d2-4121-94a4-dfsa26213d241471268270"},
"253208f5-9f69-4217-b9c5-7a8a3133126c8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"253208f5-9f69-4217-b9c5-7a8a3133126c8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"76fc5be1-7bae-46ec-a649-1bc6509b378d1471268270"},
"2a47ff1f-d53c-4ca4-9b90-de236121ef298270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"2a47ff1f-d53c-4ca4-9b90-de236121ef298270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"21dc8bf2-6e0c-42cf-b702-d47f24af173a1471268270"},
"6e1a4f97-4c23-49f8-a994-767bca90e9bb8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"6e1a4f97-4c23-49f8-a994-767bca90e9bb8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"1f9b98e7-ca75-443c-952d-a1d0ba4766521471268270"},
"2ed0fb1c-3b49-4e1a-bace-50e38e42cd668270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"2ed0fb1c-3b49-4e1a-bace-50e38e42cd668270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"f9c77b6e-13d7-4687-9d7f-e858e5cf56851471268270"},
"e0510208-6718-4ea3-97f2-774c7ddfb4c58270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"e0510208-6718-4ea3-97f2-774c7ddfb4c58270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"f13fa072-1d46-45b2-b2b1-679177d88ba61471268270"},
"05e00442-339d-4ad8-aa08-5035109b9a088270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"05e00442-339d-4ad8-aa08-5035109b9a088270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"ab382182-58b3-4799-ad70-5340f6f6e88d1471268270"},
"e75445bf-21c5-43ee-ac41-09c54bde5ebd8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"e75445bf-21c5-43ee-ac41-09c54bde5ebd8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1674785098270","to":"1376bcb3-aff5-472c-b93a-4e636983a1672278270"},"c201fb5e-cf1d-4de2-bf7d-cf767486b0418270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"c201fb5e-cf1d-4de2-bf7d-cf767486b0418270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","to":"1376bcb3-aff5-472c-b93a-4e636983a1677768270"},
"fa2c2ae2-8508-4761-b4bd-f9d42f6b3ffe8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"fa2c2ae2-8508-4761-b4bd-f9d42f6b3ffe8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","to":"1376bcb3-aff5-472c-b93a-4e636983a1678r5t270"},
"18de459f-33b2-4989-aae7-7fc401290c938270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"18de459f-33b2-4989-aae7-7fc401290c938270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","to":"1376bcb3-aff5-472c-b93a-4e636983a1678678270"},
"6107d249-e5a4-456b-911e-387569d3ea8b8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"6107d249-e5a4-456b-911e-387569d3ea8b8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1677djk270","to":"1376bcb3-aff5-472c-b93a-4e636983a167227862278270"},"46187ebb-0252-4fe0-aeeb-826cf71cb9008270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"46187ebb-0252-4fe0-aeeb-826cf71cb9008270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","to":"1376bcb3-aff5-472c-b93a-4e636983a1677djk270"},
"c3369f43-d9d7-4e36-8744-9763fa687b428270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"c3369f43-d9d7-4e36-8744-9763fa687b428270","from":"1376bcb3-aff5-472c-b93a-4e636983a167227862278270","to":"1376bcb3-aff5-472c-b93a-4e636983a167558270"},
"2d9e7a46-861e-472b-9e66-09c3b4cb75c78270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"2d9e7a46-861e-472b-9e66-09c3b4cb75c78270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278621468270","to":"1376bcb3-aff5-472c-b93a-4e636983a1674785098270"},
"d81191c0-c1c7-41ac-96ea-f2f58c8f4b938270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"d81191c0-c1c7-41ac-96ea-f2f58c8f4b938270","from":"1376bcb3-aff5-472c-b93a-4e636983a1674785098270","to":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270"},
"d8zx91c0-c1c7-41ac-96ea-f2f58c8f4b938270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"d8zx91c0-c1c7-41ac-96ea-f2f58c8f4b938270","from":"8a139418-94d2-4121-94a4-dfsa26213d241471268270","to":"aky1163f-fc2b-4f9c-a767-e2e19d8bd93b5330521"},
"87983bd7-3df6-tnh2-ac28-188f9abb92ad0":{"arrows":{"to":{},"middle":{},"from":{}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{},"background":{},"smooth":{},"id":"87983bd7-3df6-tnh2-ac28-188f9abb92ad0","from":"1376bcb3-aff5-472c-b93a-4e636983a1674785098270","to":"aac1163f-fc2b-4f9c-a767-e2e19d8bd93b5330"},"df179721-1673-47fd-8dea-3eeec2f5875b8270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"df179721-1673-47fd-8dea-3eeec2f5875b8270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"1376bcb3-aff5-472c-b93a-4e636983a167227862958270"},
"da681120-baaa-4b63-bce4-cd22b16a8a558270":{"arrows":{"to":{"enabled":false},"middle":{"enabled":false},"from":{"enabled":false}},"color":{},"font":{"bold":{},"boldital":{},"ital":{},"mono":{}},"scaling":{"label":{"enabled":true}},"shadow":{"enabled":false},"background":{"enabled":false},"smooth":{"enabled":false},"id":"da681120-baaa-4b63-bce4-cd22b16a8a558270","from":"1376bcb3-aff5-472c-b93a-4e636983a1672278628270","to":"1376bcb3-aff5-472c-b93a-4e636983a1672278624278270"}}};
function tG(multiplyCount, idPostfix, xShift, yShift, dateLine = "", idCounterPostfixStart = 0) {

   var data = newThemeGraphTemplate;

   //set graph init date line
   data.nodes["1376bcb3-aff5-472c-b93a-4e636983a167227862278270"].label = dateLine;

   network.selectionHandler.unselectAll();
   network.selectionHandler.updateSelection();
   var nodesArray = objectToArray(data.nodes);
      for (var j=0; j < nodesArray.length; j++) {
         var node = nodesArray[j];
         node.oldId = node.id;
      }
   var edgesArray = objectToArray(data.edges);
      for (var k=0; k < edgesArray.length; k++) {
         var edge = edgesArray[k];
         edge.oldId = edge.id;	
         edge.oldFrom = edge.from;
         edge.oldTo = edge.to;
      }
   for (var i=0; i < multiplyCount; i++) {
      for (var j=0; j < nodesArray.length; j++) {
         var node = nodesArray[j];
         var json = JSON.stringify(node);
         node = JSON.parse(json);
         node.id = node.oldId + idPostfix + String(idCounterPostfixStart + i);
         node.x = node.x + xShift*i; 
         node.y = node.y + yShift*i; 
         nodesToPaste.push(node);
         //var newNode = network.nodesHandler.create(node);
         //network.body.data.nodes.add(newNode.options);
         //network.selectionHandler.selectObject(newNode);
      }
      for (var k=0; k < edgesArray.length; k++) {
         var edge = edgesArray[k];
         var json = JSON.stringify(edge);
         edge = JSON.parse(json);
         edge.id = edge.oldId + idPostfix + String(idCounterPostfixStart + i);	
         edge.from = edge.oldFrom + idPostfix + String(idCounterPostfixStart + i);
         edge.to = edge.oldTo + idPostfix + String(idCounterPostfixStart + i);
         edgesToPaste.push(edge);
         //var newEdge = network.edgesHandler.create(edge);
         //network.body.data.edges.add(newEdge.options);
         //network.selectionHandler.selectObject(newEdge);
      }
   }
   //network.selectionHandler.setSelection(network.selectionHandler.getSelection());
}
function viewLink() {
   var link = window.location.href.split("?")[0];
   var scale = Number.parseFloat(network.getScale()).toFixed(3);
   var viewPosition = network.getViewPosition();
   var x = Number.parseFloat(viewPosition.x).toFixed(3);
   var y = Number.parseFloat(viewPosition.y).toFixed(3);
   var scaleParam = "scale=" + String(scale);
   var xParam = "x=" + String(x);
   var yParam = "y=" + String(y);
   var linkParams = "?" + scaleParam + "&" + xParam + "&" + yParam;
   link = link + linkParams;
   console.log(link);
   return link;
}
//Hide comment nodes
function hideCommentNodes(hideCommentNodesBool) {
   var nodes = network.body.data.nodes.get();
   var foundNodes = [];

   nodes.forEach(function(node) {
      if (node.label.lastIndexOf("//#1", 0) === 0) {
         foundNodes.push(node);
      }
   });

   foundNodes.forEach(function(node) {

      var nodeId = node.id;

      var n = network.body.data.nodes.get(nodeId);

      if (typeof n.hidden === "undefined" || n.hidden == false) {
          var nodesPositions = network.getPositions();
   
          var nodeD = getNodeFromNetworkDataById(n.id);
          pNode = nodesPositions[n.id];
          nodeD.x = pNode.x;
          nodeD.y = pNode.y;
          network.body.data.nodes.update(nodeD);
      }

      n = network.body.data.nodes.get(nodeId);
      
      n.hidden = hideCommentNodesBool;

      //toggle nodes
      //if (typeof n.hidden === "undefined") {
      //   n.hidden = true;
      //} else {
      //   if (n.hidden == true) {
      //      n.hidden = false;
      //   } else {
      //      n.hidden = true;
      //   }
      //}

      network.body.data.nodes.update(n);
      network.selectionHandler.selectObject(network.body.nodes[n.id]);

   });

}
//hide comment nodes
function hC() {
   hideCommentNodes(true);
}
//show comment nodes
function sC() {
   hideCommentNodes(false);
}
//fix (freeze) selected nodes
function fN() {
   var selectedNode = objectToArray(network.selectionHandler.selectionObj.nodes);

   selectedNode.forEach(function(node) {

      var nodeId = node.id;

      var n = network.body.data.nodes.get(nodeId);

          var nodesPositions = network.getPositions();
   
          var nodeD = getNodeFromNetworkDataById(n.id);
          pNode = nodesPositions[n.id];
          nodeD.x = pNode.x;
          nodeD.y = pNode.y;
          network.body.data.nodes.update(nodeD);

      n = network.body.data.nodes.get(nodeId);

      n.fixed = true;

      network.body.data.nodes.update(n);
   });
}
//unfix (unfreeze) selected nodes
function uFN() {
   var selectedNode = objectToArray(network.selectionHandler.selectionObj.nodes);

   selectedNode.forEach(function(node) {

      var nodeId = node.id;

      var n = network.body.data.nodes.get(nodeId);

          var nodesPositions = network.getPositions();
   
          var nodeD = getNodeFromNetworkDataById(n.id);
          pNode = nodesPositions[n.id];
          nodeD.x = pNode.x;
          nodeD.y = pNode.y;
          network.body.data.nodes.update(nodeD);

      n = network.body.data.nodes.get(nodeId);

      n.fixed = false;

      network.body.data.nodes.update(n);
   });
}
function distributeVertically(yStep) {
   var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
   console.log("selectedNodes.length: " + String(selectedNodes.length));
  
   if (selectedNodes.length < 2) return;

   //!!network.body.emitter.emit("startSimulation");
   var nodesPositions = network.getPositions();

   var updatedNodes = [];

   for (var i in selectedNodes) {

      var nodeId = selectedNodes[i].id;

      var n = network.body.data.nodes.get(nodeId);
   
      var nodeD = getNodeFromNetworkDataById(n.id);
      pNode = nodesPositions[n.id];
      nodeD.x = pNode.x;
      nodeD.y = pNode.y;
      network.body.data.nodes.update(nodeD);

      n = network.body.data.nodes.get(nodeId);

      updatedNodes.push(n);

      //network.body.data.nodes.update(n);
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

   var updatedNodesSortedByY = updatedNodes.sort(compare);

   var topNode = updatedNodesSortedByY[0];
   var bottomNode = updatedNodesSortedByY[updatedNodesSortedByY.length-1];

   if (typeof yStep === "undefined") {
      yStep = (topNode.y - bottomNode.y)/(updatedNodesSortedByY.length-1);
      console.log("calculated yStep: " + String(yStep));
   }

   for (var i in updatedNodesSortedByY) {

      var nodeId = updatedNodesSortedByY[i].id;

      var n = network.body.data.nodes.get(nodeId);
   
      var nodeD = getNodeFromNetworkDataById(n.id);
      pNode = nodesPositions[n.id];
      nodeD.x = pNode.x;
      nodeD.y = topNode.y - i*yStep;
      network.body.data.nodes.update(nodeD);

      //!!network.body.nodes[nodeId].y = Number(nodesPositions[nodeId].y - i*yStep);

      //n = network.body.data.nodes.get(nodeId);

      //network.body.data.nodes.update(n);
   }

   //!!network.body.emitter.emit("startSimulation");
}
function joinNodesLabels() {
   var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);

   var labels = [];
   selectedNodes.forEach(function(node) {
      var nodeLabel = node.options.label;
      labels.push(nodeLabel);
   });

   var screenCenterPosition = network.canvas.DOMtoCanvas({x:canvasWidth/2,y:canvasHeight/2})
   network.body.data.nodes.add([{
      label:labels.join("\n"),
      x:screenCenterPosition.x,
      y:screenCenterPosition.y
   }]);
}
function getDownloadedNewsData(resolve) {

   url = "http://localhost:1337/getSavedNewsData";

   fetch(url)
       .then(function(response){return response.json();})
       .then(function(response) {
          console.log("getDownloadedNewsData(newsDataFilePath). url: " + url);

          //console.log("fetch response: " + response);
          //var data = JSON.stringify("Error");

          //var label = JSON.stringify(data, undefined, 1);
          //var label = response;
          //var screenCenterPosition = network.canvas.DOMtoCanvas({x:canvasWidth/2,y:canvasHeight/2})
          //network.body.data.nodes.add([{
          //   label:label,
          //   x:screenCenterPosition.x,
          //   y:screenCenterPosition.y
          //}]);
          resolve(response);

          return response;
       })
       .catch(function(error){
          console.log("Error -> getDownloadedNewsData(newsDataFilePath). url: " + url);
          console.log(error);
       });
}
function addBranchToEachSelectedNode(newNodeLabel, stepYFromSelectedNodesRightSide) {

   var selectedNodes = objectToArray(network.selectionHandler.selectionObj.nodes);
   console.log("selectedNodes.length: " + String(selectedNodes.length));
  
   if (selectedNodes.length == 0) {
      console.log("No nodes selected.");
      return;
   }

   var nodesPositions = network.getPositions();

   var updatedNodes = [];

   for (var i in selectedNodes) {

      var nodeId = selectedNodes[i].id;
   
      var nodeD = getNodeFromNetworkDataById(nodeId);
      pNode = nodesPositions[nodeId];
      nodeD.x = pNode.x;
      nodeD.y = pNode.y;
      network.body.data.nodes.update(nodeD);

   }

   var selectedNodesMaxRightSide = selectedNodes[0].x + (selectedNodes[0].x - selectedNodes[0].shape.left);

   for (var i in selectedNodes) {
      var selectedNodeRightSide = selectedNodes[i].x + (selectedNodes[i].x - selectedNodes[i].shape.left);
      if (selectedNodeRightSide > selectedNodesMaxRightSide) {
         selectedNodesMaxRightSide = selectedNodeRightSide;
      }
   }

   var date = new Date();
   var idPostfix = date.getMilliseconds().toString().substring(-7).toString();

   for (var i in selectedNodes) {

      var rootNodeId = selectedNodes[i].id;

      var addedNodeId = network.body.data.nodes.add({
         id: rootNodeId + "k" + idPostfix + String(i),
         label: newNodeLabel,
         x: selectedNodesMaxRightSide + stepYFromSelectedNodesRightSide,
         y: selectedNodes[i].y 
      })[0];

      network.body.data.edges.add({
         from:rootNodeId,
         to:addedNodeId
      });

   }
}
function editNodesIds() {

   var selectedNodes = objectToArray( network.selectionHandler.selectionObj.nodes);

   var nodes = [];
   selectedNodes.forEach(function(node) {
      nodes.push(network.body.data.nodes.get(node.id));
   });

   var prefix = "index-a_";

   var pageNodes = objectToArray(network.body.nodes)
   var pageNodeIds = [];
   for (var i in pageNodes) {
      pageNodeIds.push(pageNodes[i].id);
   }

   var pageNodeIdsWithPrefix = [];
   for (var i in pageNodeIds) {
      if (pageNodeIds[i].lastIndexOf(prefix, 0) === 0) pageNodeIdsWithPrefix.push(pageNodeIds[i]);
   }

   var prefixedNodeIdsNumbersParts = [];
   for (var i in pageNodeIdsWithPrefix) {
      prefixedNodeIdsNumbersParts.push(parseInt(pageNodeIdsWithPrefix[i].replace(prefix,""),10));
   }
   prefixedNodeIdsNumbersParts = prefixedNodeIdsNumbersParts.sort((a, b) => a - b);

   var startingPrefixedNodeId = prefixedNodeIdsNumbersParts.slice(-1)[0];

   if (typeof startingPrefixedNodeId === "undefined") {
      startingPrefixedNodeId = 0;
   } else {
      startingPrefixedNodeId = parseInt(startingPrefixedNodeId, 10) + 1;
   }

   var nodeLabel = "";

   nodeLabel += "#!/usr/bin/ruby\n" +
                "#encoding: utf-8\n" +
                "require 'fileutils'\n\n";

   nodeLabel += "def newIndex(index)\n" + 
               "   prefix = \"" + prefix + "\"\n" + 
               "   newIndex = prefix + index.to_s\n" + 
               "   newIndex\n" +
               "end\n\n";

   nodeLabel += "def backupFile(filePath)\n" + 
               "   timeString = Time.new.strftime('%Y_%m_%d_%H_%M_%S')\n" + 
               "   backupFilePath = filePath + '_' + timeString\n" + 
               "   FileUtils.cp(filePath, backupFilePath)\n" + 
               "end\n\n";

   var filePath = window.location.href.replace("file://","").replace("html","") + "data.js";

   nodeLabel += "filePath = '" + filePath + "'\n\n";

   nodeLabel += "backupFile(filePath)\n\n";

   function compare( a, b ) {
      if ( a.y < b.y ){
         return -1;
      }
      if ( a.y > b.y ){
         return 1;
      }
      return 0;
   }

   nodes.sort(compare);

   for (var i in nodes) {
      console.log(String(i) + ", " + String(nodes.length - 1));
      var n = nodes[i];
      var newIndex = String(Number(i) + Number(startingPrefixedNodeId));
      var regexLine = "s/\\\"" + String(n.id) + "\\\"/\\\"" + "#{newIndex(" + newIndex + ")}" + "\\\"/g";
      var sedCommandLine = "sed -i '" + regexLine + "' #{filePath}" ;
      var nodeLine = "p '" + String(i) + ". " + String(nodes.length - 1) + ". ' + filePath\n";
      nodeLine += "system(\"" + sedCommandLine + "\")";
      nodeLine += " #" + String(i) + ". " + n.label.replace(/\n/g," ").substring(0, 30) + "\n";
      console.log(nodeLine);
      nodeLabel += nodeLine;
   }

   var editNodeIdCodeNodeOptions = {
      id: create_UUID(),
      label: nodeLabel,
      x: 0,
      y: 0
   };
   
   nodesToPaste.push(editNodeIdCodeNodeOptions);

}
