//var canvasWidth = 1200;
//var canvasHeight = 800;
var canvasWidthSetup = 100;
var canvasHeightSetup = 100;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var body = null

var showDataButton = null;
var schemeEditElementsMenu = null;
var schemeDataMenu = null;
var schemeDataTextArea = null;

var network = null;
var canvas;
var ctx;
var rect = {}
var drag = false;
var drawingSurfaceImageData;
var containerJQ = $("div#network");
var doubleClickTimeThreshold = 300;
var doubleClick = false;
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
data = {
	nodes: nodes,
	edges: edges
};
data1 = {
	nodes: nodes1,
	edges: edges1
};

var seed = 2;

function destroy() {
	if (network !== null) {
		network.destroy();
		network = null;
	}
}

function draw() {
	destroy();
	// create a network
	var container = document.getElementById('network');
	var container1 = document.getElementById('forImage');
	//Colors:
	//"#ffc63b"
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
			borderWidth: 0
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
				document.getElementById('operation').innerHTML = "Add Node";
				document.getElementById('node-id').value = data.id;
				document.getElementById('node-label').value = data.label;
				document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
				document.getElementById('cancelButton').onclick = clearPopUp.bind();
				document.getElementById('network-popUp').style.display = 'block';
			},
			editNode: function (data, callback) {
				// filling in the popup DOM elements
				document.getElementById('operation').innerHTML = "Edit Node";
				document.getElementById('node-id').value = data.id;
				document.getElementById('node-label').value = data.label;
				document.getElementById('saveButton').onclick = saveData.bind(this, data, callback);
				document.getElementById('cancelButton').onclick = cancelEdit.bind(this,callback);
				document.getElementById('network-popUp').style.display = 'block';
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
			}
		}
	};
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
				background: "#ffc63b"
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
			var selectedNodesCount = this.selectionHandler._getSelectedNodeCount();
			var nodes = objectToArray(this.selectionHandler.selectionObj.nodes);
			var minLeft;
			for (i = 0; i < selectedNodesCount; i++) {
				if (i == 0) minLeft = nodes[i].shape.left;
				if (minLeft > nodes[i].shape.left) {
					minLeft = nodes[i].shape.left;
				};
			}
			for (i = 0; i < selectedNodesCount; i++) {
				var leftDiff = nodes[i].shape.left - parseFloat(minLeft.toFixed(5));
				network.body.nodes[nodes[i].id].x = nodes[i].x - leftDiff;
			}
			var scale = network.getScale();
			var n1X = parseFloat(network.getViewPosition().x.toFixed(5));
			var n1Y = parseFloat(network.getViewPosition().y.toFixed(5));
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
				
				network.createLeftAlignNodesButton();

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
	}

	function onDoubleClick(e) {
		if (e.event.srcEvent.ctrlKey) {
			network.addEdgeMode();
		} else {
			network.addNodeMode();
		}
	}

	containerJQ.on("mousemove", function(e) {
		if (drag) { 
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

	containerJQ.on("mousedown", function(e) {
		if (e.button == 2) { 
			selectedNodes = e.ctrlKey ? network.getSelectedNodes() : null;
			saveDrawingSurface();
			var that = this;
			rect.startX = e.pageX - this.offsetLeft;
			rect.startY = e.pageY - this.offsetTop;
			drag = true;
			containerJQ[0].style.cursor = "crosshair";
		}
	}); 

	containerJQ.on("mouseup", function(e) {
		if (e.button == 2) { 
			restoreDrawingSurface();
			drag = false;

			containerJQ[0].style.cursor = "default";
			selectNodesFromHighlight();
			network.showManipulatorToolbar();
		}
	});
	network.on('selectNode', function (properties) {
		schemeEditElementsMenu.show();
		var nodeIdInput = $("input#nodeIdInput");
		var nodeLabelTextarea = $("textarea#nodeLabelTextarea");
		var nodeXInput = $("input#nodeXInput");
		var nodeYInput = $("input#nodeYInput");
		var nodeShapeInput = $("input#nodeShapeInput");
		var nodeLinkInput = $("input#nodeLinkInput");
		var nodeFontSizeInput = $("input#nodeFontSizeInput");
		var nodeColorInput = $("input#nodeColorInput");
		var nodeBorderWidthInput = $("input#nodeBorderWidthInput");
		var nodeBorderColorInput = $("input#nodeBorderColorInput");
		var nodeD = network.body.data.nodes.get(properties.nodes[0]);
		nodeIdInput.val(nodeD.id);
		nodeLabelTextarea.val(nodeD.label);
		pNode = network.getPositions()[nodeD.id];
		nodeXInput.val(pNode.x);
		nodeYInput.val(pNode.y);
		if (typeof nodeD.shape !== "undefined" && nodeD.shape.length > 0) {
			nodeShapeInput.val(nodeD.shape);
		} else {
			nodeShapeInput.val("box");
		}
		if (typeof nodeD.link !== "undefined" && nodeD.link.length > 0) {
			nodeLinkInput.val(nodeD.link);
		} else {
			nodeLinkInput.val("");
		}
		if (typeof nodeD.font !== "undefined" && typeof nodeD.font.size !== "undefined") {
			nodeFontSizeInput.val(nodeD.font.size);
		} else {
			nodeFontSizeInput.val(14);
			nodeD.font = {size: 14};
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
	});
	network.on('resize', function(properties) {
		canvasWidth = properties.width;
		canvasHeight = properties.height;
	});
	network.on('deselectNode', function (properties) {
		schemeEditElementsMenu.hide();
		$(".vis-separator-line").remove();
		$(".vis-close").remove();
	});
	network.on('deselectEdge', function (properties) {
		$(".vis-separator-line").remove();
		$(".vis-close").remove();
	});
	network.on("hoverNode", function(params) {
	});

	network.on("blurNode", function(params) {
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
		var scale = network.getScale();
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

function updateSchemeFromMenu() {
	var schemeDataJsonFromMenu = $("textarea#schemeDataTextArea").val();
	var schemeData = JSON.parse(schemeDataJsonFromMenu);
	var nodes = new vis.DataSet(objectToArray(schemeData.canvas1Data.nodes._data));
	var edges = new vis.DataSet(objectToArray(schemeData.canvas1Data.edges._data));
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
}

function updateMenuFromScheme() {
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
		setup: {
			scale: scale,
			viewPosition: viewPosition
		}
	};
	var positions1 = network.getPositions();
	var positions2 = network1.getPositions();
	nodes1ToSave = {}; 
	network.body.data.nodes.get().forEach(function(item) {
		nodes1ToSave[item.id.toString()] = item;
	});
	objectToArray(positions1).forEach(function(position) {
		var node = nodes1ToSave[position.id.toString()];
		node.x = position.x;
		node.y = position.y;
	});
	schemeData.canvas1Data.nodes._data = nodes1ToSave;
	var edges1ToSave = {}; 
	network.body.data.edges.get().forEach(function(item) {
		edges1ToSave[item.id.toString()] = item;
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
}

function cancelEdit(callback) {
	clearPopUp();
	callback(null);
}

function saveData(data,callback) {
	data.id = document.getElementById('node-id').value;
	data.label = document.getElementById('node-label').value;
	clearPopUp();
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

$(document).ready(function() {
	containerJQ[0].oncontextmenu = () => false;
	//topMenu = $("<div style='margin:0 0 0 0; padding:3px; background-color: black;color:white;z-index:9999'></div>");
	body = $("body");
	showDataButton = $("<div style='cursor:pointer;color:black;float:right;position:fixed;top:3px; line-height: 0;right:0;z-index:9999;padding: 15px;margin:-5px 0 5px 0; background-color:white;border: 1px solid #a3a3a3;font-size:12px'>showData</div>");
	body.append(showDataButton);
	schemeEditElementsMenu = $("<div id='schemeEditElementsMenu' style='height:100%; width:300px; position:fixed; left:0; top:29px;border-right: 1px solid #a3a3a3; background-color:white;z-index:5000; padding: 40px 20px 20px 20px'></div>");
	schemeEditElementsMenu.hide();
	body.append(schemeEditElementsMenu);

	var elementsSetupTable = $("<table id='elementsSetupTable'></table>");
	var eSRow1 = $("<tr></tr>");
	elementsSetupTable.append(eSRow1);
	var eSItem11 = $("<td></td>");
	var eSItem12 = $("<td></td>");
	eSRow1.append(eSItem11);
	eSRow1.append(eSItem12);
	var nodeIdInputLabel = $("<div style=''><span>nodeId: </span></div>");
	eSItem11.append(nodeIdInputLabel);
	var nodeIdInput = $("<input type='text' id='nodeIdInput'></input>");
	eSItem12.append(nodeIdInput);

	var eSRow2 = $("<tr></tr>");
	elementsSetupTable.append(eSRow2);
	var eSItem21 = $("<td></td>");
	var eSItem22 = $("<td></td>");
	eSRow2.append(eSItem21);
	eSRow2.append(eSItem22);
	var nodeLabelInputLabel = $("<div style=''><span>nodeLabel: </span></div>");
	eSItem21.append(nodeLabelInputLabel);
	var nodeLabelTextarea = $("<textarea cols='19' rows='3' id='nodeLabelTextarea'></textarea>");
	eSItem22.append(nodeLabelTextarea);

	var eSRow3 = $("<tr></tr>");
	elementsSetupTable.append(eSRow3);
	var eSItem31 = $("<td></td>");
	var eSItem32 = $("<td></td>");
	eSRow3.append(eSItem31);
	eSRow3.append(eSItem32);
	var nodeXInputLabel = $("<div style=''><span>nodeX: </span></div>");
	eSItem31.append(nodeXInputLabel);
	var nodeXInput = $("<input type='text' id='nodeXInput'></input>");
	eSItem32.append(nodeXInput);

	var eSRow4 = $("<tr></tr>");
	elementsSetupTable.append(eSRow4);
	var eSItem41 = $("<td></td>");
	var eSItem42 = $("<td></td>");
	eSRow4.append(eSItem41);
	eSRow4.append(eSItem42);
	var nodeYInputLabel = $("<div style=''><span>nodeY: </span></div>");
	eSItem41.append(nodeYInputLabel);
	var nodeYInput = $("<input type='text' id='nodeYInput'></input>");
	eSItem42.append(nodeYInput);

	var eSRow5 = $("<tr></tr>");
	elementsSetupTable.append(eSRow5);
	var eSItem51 = $("<td></td>");
	var eSItem52 = $("<td></td>");
	eSRow5.append(eSItem51);
	eSRow5.append(eSItem52);
	var nodeShapeInputLabel = $("<div style=''><span>nodeShape: </span></div>");
	eSItem51.append(nodeShapeInputLabel);
	var nodeShapeInput = $("<input type='text' id='nodeShapeInput'></input>");
	eSItem52.append(nodeShapeInput);

	var eSRow6 = $("<tr></tr>");
	elementsSetupTable.append(eSRow6);
	var eSItem61 = $("<td></td>");
	var eSItem62 = $("<td></td>");
	eSRow6.append(eSItem61);
	eSRow6.append(eSItem62);
	var nodeLinkInputLabel = $("<div style=''><span>nodeLink: </span></div>");
	eSItem61.append(nodeLinkInputLabel);
	var nodeLinkInput = $("<input type='text' id='nodeLinkInput'></input>");
	eSItem62.append(nodeLinkInput);
	var linkOpenButton = $("<div style='cursor:pointer;margin: 4px 0 2px 0;'><span style='background-color: #97c2fc;padding: 4px;'>linkOpenButton</span></div>");
	eSItem62.append(linkOpenButton);

	var eSRow7 = $("<tr></tr>");
	elementsSetupTable.append(eSRow7);
	var eSItem71 = $("<td></td>");
	var eSItem72 = $("<td></td>");
	eSRow7.append(eSItem71);
	eSRow7.append(eSItem72);
	var nodeColorInputLabel = $("<div style=''><span>nodeColor: </span></div>");
	eSItem71.append(nodeColorInputLabel);
	var nodeColorInput = $("<input type='text' id='nodeColorInput'></input>");
	eSItem72.append(nodeColorInput);

	var eSRow8 = $("<tr></tr>");
	elementsSetupTable.append(eSRow8);
	var eSItem81 = $("<td></td>");
	var eSItem82 = $("<td></td>");
	eSRow8.append(eSItem81);
	eSRow8.append(eSItem82);
	var nodeBorderWidthInputLabel = $("<div style=''><span>nodeBorderWidth: </span></div>");
	eSItem81.append(nodeBorderWidthInputLabel);
	var nodeBorderWidthInput = $("<input type='text' id='nodeBorderWidthInput'></input>");
	eSItem82.append(nodeBorderWidthInput);

	var eSRow9 = $("<tr></tr>");
	elementsSetupTable.append(eSRow9);
	var eSItem91 = $("<td></td>");
	var eSItem92 = $("<td></td>");
	eSRow9.append(eSItem91);
	eSRow9.append(eSItem92);
	var nodeBorderColorInputLabel = $("<div style=''><span>nodeBorderColor: </span></div>");
	eSItem91.append(nodeBorderColorInputLabel);
	var nodeBorderColorInput = $("<input type='text' id='nodeBorderColorInput'></input>");
	eSItem92.append(nodeBorderColorInput);

	var eSRow10 = $("<tr></tr>");
	elementsSetupTable.append(eSRow10);
	var eSItem101 = $("<td></td>");
	var eSItem102 = $("<td></td>");
	eSRow10.append(eSItem101);
	eSRow10.append(eSItem102);
	var nodeFontSizeInputLabel = $("<div style=''><span>nodeFontSize: </span></div>");
	eSItem101.append(nodeFontSizeInputLabel);
	var nodeFontSizeInput = $("<input type='text' id='nodeFontSizeInput'></input>");
	eSItem102.append(nodeFontSizeInput);

	linkOpenButton.click(function() {
		var link = nodeLinkInput.val();
		if (link.length > 0) {
			window.open(link, '_blank');
			console.log(link);
		}
	});

	schemeEditElementsMenu.append(elementsSetupTable);

	var saveElementEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='saveElementEditButton'>saveElementEditButton</span></div>");
	schemeEditElementsMenu.append(saveElementEditButton);

	saveElementEditButton.click(function() {
		var nodeIdInput = schemeEditElementsMenu.find("input#nodeIdInput");
		var nodeLabelTextarea = schemeEditElementsMenu.find("textarea#nodeLabelTextarea");
		var nodeXInput = schemeEditElementsMenu.find("input#nodeXInput");
		var nodeYInput = schemeEditElementsMenu.find("input#nodeYInput");
		var nodeShapeInput = schemeEditElementsMenu.find("input#nodeShapeInput");
		var nodeLinkInput = schemeEditElementsMenu.find("input#nodeLinkInput");
		var nodeFontSizeInput = schemeEditElementsMenu.find("input#nodeFontSizeInput");
		var nodeColorInput = schemeEditElementsMenu.find("input#nodeColorInput");
		var nodeBorderWidthInput = schemeEditElementsMenu.find("input#nodeBorderWidthInput");
		var nodeBorderColorInput = schemeEditElementsMenu.find("input#nodeBorderColorInput");
		var nodeD = network.body.data.nodes.get(nodeIdInput.val());
		pNode = network.getPositions()[nodeIdInput.val()];
		nodeXInput.val(pNode.x);
		nodeYInput.val(pNode.y);
		nodeD.id = nodeIdInput.val();
		nodeD.label = nodeLabelTextarea.val();
		nodeD.x = pNode.x;
		nodeD.y = pNode.y;
		nodeD.shape = nodeShapeInput.val();
		nodeD.link = nodeLinkInput.val();
		if (typeof nodeD.font === "undefined") nodeD.font = {size: 14};
		nodeD.font.size = parseInt(nodeFontSizeInput.val(),10);
		if (typeof nodeD.color === "undefined") nodeD.color = {};
		nodeD.color.background = nodeColorInput.val();
		nodeD.color.border = nodeBorderColorInput.val();
		nodeD.borderWidth = nodeBorderWidthInput.val();
		network.body.data.nodes.update(nodeD);
		//console.log(nodeD);
		//console.log(network.body.data.nodes.get(nodeD.id));
	});

	var closeElementEditButton = $("<div style='cursor:pointer;margin:20px 0 0 0'><span id='closeElementEditButton'>closeElementEditButton</span></div>");
	schemeEditElementsMenu.append(closeElementEditButton);
	closeElementEditButton.click(function() {
		schemeEditElementsMenu.hide();
	});

	var leftMenuHelpLine1 = $("<div style='margin:40px 0 0 0'><span id='leftMenuHelpLine1'>transparent color - rgba(0,0,0,0)</span></div>");
	schemeEditElementsMenu.append(leftMenuHelpLine1);

	schemeDataMenu = $("<div id='schemeDataMenu' style='height:100%; width:260px; position:fixed; right:0; top:0; background-color:white;border-left: 1px solid #a3a3a3;z-index:5000; padding: 40px 20px 20px 20px'></div>");
	//schemeDataMenu.hide()
	schemeDataTextArea = $("<div style='margin:0;padding:0;'><textarea id='schemeDataTextArea' cols='30' rows='45'></textarea></div>");
	schemeDataMenu.append(schemeDataTextArea);
	body.append(schemeDataMenu);
	showDataButton.click(function() {
		schemeDataMenu.toggle();
	});
	draw();
	if (typeof runUpateMenuFromSchemeAtPageReady !== "undefined" && runUpateMenuFromSchemeAtPageReady) {
		updateMenuFromScheme();
	}
	var updateSchemeFromMenuButton = $("<div style='cursor:pointer;margin: 0 0 20px 0;'><span id='updateSchemeFromMenuButton' style='background-color:white;color:black;'>updateSchemeFromMenu</span></div>");
	var updateMenuFromSchemeButton = $("<div style='cursor:pointer;margin: 0 0 20px 0;'><span id='updateMenuFromSchemeButton' style='background-color:white;color:black;'>updateMenuFromScheme</span></div>");
	schemeDataMenu.prepend(updateMenuFromSchemeButton);
	schemeDataMenu.prepend(updateSchemeFromMenuButton);
	updateSchemeFromMenuButton.click(function() {
		updateSchemeFromMenu();
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

	function getNodeById(data, id) {
		for (var n = 0; n < data.length; n++) {
			if (data[n].id == id) { 
				return data[n];
			}
		};

		throw 'Can not find id \'' + id + '\' in data';
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
		updateMenuFromScheme();
	});
});

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
	console.log('pix x ' + x + ' y ' + y + ' index ' + index + ' COLOR ' + red + ', ' + green + ', ' + blue + ', ' + alpha);
}
