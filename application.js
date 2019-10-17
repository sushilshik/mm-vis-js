var canvasWidth = 1200;
var canvasHeight = 800;

var topMenu = null;
var showDataButton = null;
var schemeEditElementsMenu = null;
var schemeDataMenu = null;
var schemeDataTextArea = null;
///////////////////////////////////

var schemeData = 
{
	"canvas1Data": {
		"nodes": {
			"_subscribers": {
				"*": [],
				"add": [
				{}
				],
				"remove": [
				{}
				],
				"update": [
				{}
				]
			},
			"_options": {},
			"_data": {
				"1": {
					"id": "1",
					"x": 604,
					"y": 492,
					"label": "mm-vis-js",
					"shape": "text",
					"font": {
						"strokeWidth": 4
					},
					"link": ""
				},
				"93190b70-40fd-4ed7-8177-2b78d925134b": {
					"id": "93190b70-40fd-4ed7-8177-2b78d925134b",
					"x": 1271,
					"y": 839,
					"label": "Пример заметки.",
					"shape": "box",
					"link": "",
					"color": {
						"background": ""
					}
				},
				"d5d764d3-1dce-4f92-8d64-e7c20e194f6e": {
					"id": "d5d764d3-1dce-4f92-8d64-e7c20e194f6e",
					"x": 1079,
					"y": 862,
					"label": "                                       \n   ",
					"shape": "box",
					"borderWidth": "3",
					"color": {
						"background": "rgba(255,255,255,0)",
						"border": "red"
					},
					"link": ""
				},
				"daaf3999-0238-41fa-948f-9a46c115f00b": {
					"id": "daaf3999-0238-41fa-948f-9a46c115f00b",
					"x": 925,
					"y": 659,
					"label": "В отличие от стандартного vis.js можно\nстроить схемы с связями\nповерх иллюстраций.",
					"shape": "box",
					"link": "",
					"color": {
						"background": ""
					}
				},
				"a6fd3d0f-bd20-4470-9806-67267143f507": {
					"id": "a6fd3d0f-bd20-4470-9806-67267143f507",
					"x": 721,
					"y": 694,
					"label": "Функции",
					"shape": "box",
					"link": ""
				},
				"ea153d3c-e619-4eea-a53e-399b37c850d1": {
					"id": "ea153d3c-e619-4eea-a53e-399b37c850d1",
					"x": 1031,
					"y": 319,
					"label": "быстро сделать простой инструмент публикации схем и их редактирования.",
					"shape": "box",
					"link": ""
				},
				"85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae": {
					"id": "85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae",
					"x": 717,
					"y": 458,
					"label": "Простота"
				},
				"2bd3206d-d1ee-4b8f-8225-b81eb9673e74": {
					"id": "2bd3206d-d1ee-4b8f-8225-b81eb9673e74",
					"x": 980,
					"y": 383,
					"label": "Для работы нужен только браузер и текстовый редактор"
				},
				"21f64c6a-2ff1-41b3-bf77-a962fbed3e35": {
					"id": "21f64c6a-2ff1-41b3-bf77-a962fbed3e35",
					"x": 909,
					"y": 428,
					"label": "Не нужна база данных и веб-сервер."
				},
				"3f496169-3281-4163-888c-997690d090d3": {
					"id": "3f496169-3281-4163-888c-997690d090d3",
					"x": 948,
					"y": 484,
					"label": "Чтобы сохранять работу, код с данными схемы \nнужно копировать вручную \nсо страницы в ее же собственный код.",
					"shape": "box",
					"link": "",
					"color": {
						"background": ""
					}
				},
				"fc4313f9-0d34-4e53-9db6-9064b2389269": {
					"id": "fc4313f9-0d34-4e53-9db6-9064b2389269",
					"x": 722,
					"y": 570,
					"label": "Кейсы"
				},
				"a52bd703-6566-4b12-8ff8-bb26ce5eaf84": {
					"id": "a52bd703-6566-4b12-8ff8-bb26ce5eaf84",
					"x": 935,
					"y": 545,
					"label": "Быстро построить схему и положить ее\nна веб-сервер в виде статического файла.",
					"shape": "box",
					"link": ""
				},
				"757fcd36-6bdc-4777-86d5-a07e9771ce13": {
					"id": "757fcd36-6bdc-4777-86d5-a07e9771ce13",
					"x": 1005,
					"y": 594,
					"label": "Сохранить из интернета страницу с схемой на свой компьютер,\nотредактировать и опубликовать свою версию.",
					"shape": "box",
					"link": ""
				},
				"4f8a5b3a-9252-45e5-b3f6-d644e3aef68a": {
					"id": "4f8a5b3a-9252-45e5-b3f6-d644e3aef68a",
					"x": 706,
					"y": 322,
					"label": "Цель"
				},
				"ee7cf4ac-ceca-4805-9299-80d862b7ba4a": {
					"id": "ee7cf4ac-ceca-4805-9299-80d862b7ba4a",
					"x": 1200,
					"y": 657,
					"label": "В этой версии такие иллюстрации\nнадо хранить в дереве\nданных JSON \"canvas2Data\"",
					"shape": "box",
					"link": "",
					"color": {
						"background": ""
					}
				},
				"c3a0125c-bcdd-402f-8caf-d431c2870ea7": {
					"id": "c3a0125c-bcdd-402f-8caf-d431c2870ea7",
					"x": 952,
					"y": 726,
					"label": "Детально редактировать схему можно прямо в\nJSON данных в меню справа страницы.",
					"shape": "box",
					"link": "",
					"color": {
						"background": ""
					}
				},
				"77056608-d537-4045-9218-87c0f992eb3a": {
					"id": "77056608-d537-4045-9218-87c0f992eb3a",
					"x": 731,
					"y": 793,
					"label": "2019.10.17"
				}
			},
			"length": 17,
			"_idProp": "id",
			"_type": {}
		},
		"edges": {
			"_subscribers": {
				"*": [],
				"add": [
				{}
				],
				"remove": [
				{}
				],
				"update": [
				{}
				]
			},
			"_options": {},
			"_data": {
				"b4a642a2-9878-483b-9944-081e9d453374": {
					"from": "93190b70-40fd-4ed7-8177-2b78d925134b",
					"to": "d5d764d3-1dce-4f92-8d64-e7c20e194f6e",
					"id": "b4a642a2-9878-483b-9944-081e9d453374"
				},
				"5a84c73e-1f36-430b-8d91-a5f19b25aa8b": {
					"from": "85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae",
					"to": "2bd3206d-d1ee-4b8f-8225-b81eb9673e74",
					"id": "5a84c73e-1f36-430b-8d91-a5f19b25aa8b"
				},
				"ced9a7e3-4168-431e-a43f-e51b917aa43a": {
					"from": "fc4313f9-0d34-4e53-9db6-9064b2389269",
					"to": "a52bd703-6566-4b12-8ff8-bb26ce5eaf84",
					"id": "ced9a7e3-4168-431e-a43f-e51b917aa43a"
				},
				"bb3ef3a1-61c6-47bf-a310-8a9589a73f2e": {
					"from": "85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae",
					"to": "21f64c6a-2ff1-41b3-bf77-a962fbed3e35",
					"id": "bb3ef3a1-61c6-47bf-a310-8a9589a73f2e"
				},
				"371d93cd-d4a2-4959-b3a5-b87e9054cfc5": {
					"from": "85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae",
					"to": "3f496169-3281-4163-888c-997690d090d3",
					"id": "371d93cd-d4a2-4959-b3a5-b87e9054cfc5"
				},
				"f2a12d5f-4223-4109-815f-9de1b2e83669": {
					"from": "fc4313f9-0d34-4e53-9db6-9064b2389269",
					"to": "757fcd36-6bdc-4777-86d5-a07e9771ce13",
					"id": "f2a12d5f-4223-4109-815f-9de1b2e83669"
				},
				"26b29421-8b12-4a73-82e1-93dc4695b461": {
					"from": "4f8a5b3a-9252-45e5-b3f6-d644e3aef68a",
					"to": "ea153d3c-e619-4eea-a53e-399b37c850d1",
					"id": "26b29421-8b12-4a73-82e1-93dc4695b461"
				},
				"416a7986-4025-4b02-9564-05124ff1d241": {
					"from": "a6fd3d0f-bd20-4470-9806-67267143f507",
					"to": "daaf3999-0238-41fa-948f-9a46c115f00b",
					"id": "416a7986-4025-4b02-9564-05124ff1d241"
				},
				"fcc2246c-8c2e-4c29-8e5e-bc7b4d5390db": {
					"from": "daaf3999-0238-41fa-948f-9a46c115f00b",
					"to": "ee7cf4ac-ceca-4805-9299-80d862b7ba4a",
					"id": "fcc2246c-8c2e-4c29-8e5e-bc7b4d5390db"
				},
				"6503ab91-b24c-4b85-a9d7-66cd8d8fb8d5": {
					"from": "1",
					"to": "4f8a5b3a-9252-45e5-b3f6-d644e3aef68a",
					"id": "6503ab91-b24c-4b85-a9d7-66cd8d8fb8d5"
				},
				"2c006d61-988f-4729-98eb-8f88b3403b2d": {
					"from": "1",
					"to": "85c9e1e3-7e53-4b2a-a078-08d2bbe7c6ae",
					"id": "2c006d61-988f-4729-98eb-8f88b3403b2d"
				},
				"2fa1f3da-611a-4c02-8903-cb84f6e62383": {
					"from": "1",
					"to": "fc4313f9-0d34-4e53-9db6-9064b2389269",
					"id": "2fa1f3da-611a-4c02-8903-cb84f6e62383"
				},
				"92886098-9a7b-49ee-8946-db12fdcd0c1d": {
					"from": "1",
					"to": "a6fd3d0f-bd20-4470-9806-67267143f507",
					"id": "92886098-9a7b-49ee-8946-db12fdcd0c1d"
				},
				"27830557-e9d3-443e-868f-f314796444fc": {
					"from": "a6fd3d0f-bd20-4470-9806-67267143f507",
					"to": "c3a0125c-bcdd-402f-8caf-d431c2870ea7",
					"id": "27830557-e9d3-443e-868f-f314796444fc"
				},
				"87a4e75f-1897-4573-a2fa-bc74ce204134": {
					"from": "1",
					"to": "77056608-d537-4045-9218-87c0f992eb3a",
					"id": "87a4e75f-1897-4573-a2fa-bc74ce204134"
				}
			},
			"length": 15,
			"_idProp": "id",
			"_type": {}
		}
	},
	"canvas2Data": {
		"nodes": {
			"_subscribers": {
				"*": [],
				"add": [
				{},
				{}
				],
				"remove": [
				{},
				{}
				],
				"update": [
				{},
				{}
				]
			},
			"_options": {},
			"_data": {
				"0": {
					"id": "0",
					"x": 1000,
					"y": 920,
					"image": "https://images-na.ssl-images-amazon.com/images/I/91RQuV%2Bu4VL._SX425_.jpg",
					"shape": "image",
					"size": "150",
					"hidden": false
				}
			},
			"length": 1,
			"_idProp": "id",
			"_type": {}
		},
		"edges": {
			"_subscribers": {
				"*": [],
				"add": [
				{},
				{}
				],
				"remove": [
				{},
				{}
				],
				"update": [
				{},
				{}
				]
			},
			"_options": {},
			"_data": {},
			"length": 0,
			"_idProp": "id",
			"_type": {}
		}
	},
	"setup": {
		"scale": 1,
		"viewPosition": {
			"x": 827.4214,
			"y": 697.1176
		}
	}
}
;

var nodes = null;
var edges = null;
var nodes1 = null;
var edges1 = null;
var data = null;
var data1 = null;
var network = null;

function objectToArray(obj) {
	return Object.keys(obj).map(function (key) {
		obj[key].id = key;
		return obj[key];
	});
}
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
	var options = {
		height: canvasHeight + 'px',
		width: canvasWidth + 'px',
		layout: {randomSeed:seed}, 
		physics: {enabled: false},
		edges: { smooth: { enabled: false, type: "dynamic", roundness: 0.5 }, },
		nodes: { shape: "box" },
		interaction: {
			dragNodes: true,
			zoomView: true, 
			dragView: true, 
			hover: true
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
		height: canvasHeight + 'px',
		width: canvasWidth + 'px',
		layout: {randomSeed:seed},
		physics: {enabled: false},
		edges: { smooth: { enabled: false, type: "dynamic", roundness: 0.5 }, },
		nodes: { shape: "box" },
		interaction: {
			dragNodes: true,
			zoomView: true, 
			dragView: true  
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

	network = new vis.Network(container, data, options);
	network1 = new vis.Network(container1, data1, options1);

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
	network.on('selectNode', function (properties) {
		schemeEditElementsMenu.show();
		var nodeIdInput = $("input#nodeIdInput");
		var nodeLabelTextarea = $("textarea#nodeLabelTextarea");
		var nodeXInput = $("input#nodeXInput");
		var nodeYInput = $("input#nodeYInput");
		var nodeShapeInput = $("input#nodeShapeInput");
		var nodeLinkInput = $("input#nodeLinkInput");
		var nodeColorInput = $("input#nodeColorInput");
		var nodeData = network.body.data.nodes._data[properties.nodes[0]];
		nodeIdInput.val(nodeData.id);
		nodeLabelTextarea.val(nodeData.label);
		nodeXInput.val(nodeData.x);
		nodeYInput.val(nodeData.y);
		if (typeof nodeData.shape !== "undefined" && nodeData.shape.length > 0) {
			nodeShapeInput.val(nodeData.shape);
		} else {
			nodeShapeInput.val("box");
		}
		if (typeof nodeData.link !== "undefined" && nodeData.link.length > 0) {
			nodeLinkInput.val(nodeData.link);
		} else {
			nodeLinkInput.val("");
		}
		if (typeof nodeData.color !== "undefined" && nodeData.color.length > 0) {
			nodeColorInput.val(nodeData.color.background);
		}
		var saveElementEditButton = $("span#saveElementEditButton");
		saveElementEditButton.off();
		saveElementEditButton.click(function() {
			nodeData.id = nodeIdInput.val();
			nodeData.label = nodeLabelTextarea.val();
			nodeData.x = parseInt(nodeXInput.val(),10);
			nodeData.y = parseInt(nodeYInput.val(),10);
			nodeData.shape = nodeShapeInput.val();
			nodeData.link = nodeLinkInput.val();
			nodeData.color = {};
			nodeData.color.background = nodeColorInput.val();
			draw();
			objectToArray(network.getPositions()).forEach(function(node) {
				data.nodes._data[node.id].x = node.x;
				data.nodes._data[node.id].y = node.y;
			});
			objectToArray(network1.getPositions()).forEach(function(node) {
				data1.nodes._data[node.id].x = node.x;
				data1.nodes._data[node.id].y = node.y;
			});
		});
	});
	network.on('deselectNode', function (properties) {
		schemeEditElementsMenu.hide();
	});
		network.on("hoverNode", function(params) {
			var scale = network.getScale();
			var x = network.body.data.nodes._data[params.node].x;
			var y = network.body.data.nodes._data[params.node].y;
			var position = network.getViewPosition();
			var canvasPosition = $("#network").position();
			var positionX = parseFloat((x - canvasWidth/2).toFixed(5))
				var positionY = parseFloat((y - canvasHeight/2).toFixed(5))
				var positionX = x - canvasWidth/(2*scale);
			var positionY = x - canvasWidth/(2*scale);

			var positionX = -position.x/(scale) + x*scale + canvasWidth/(2*scale) + canvasPosition.top;
			var positionY = -position.y/(scale) + y*scale + canvasHeight/(2*scale) + canvasPosition.left;
			var positionX = -position.x*(scale) + x*scale + canvasWidth/(2) + canvasPosition.top;
			var positionY = -position.y*(scale) + y*scale + canvasHeight/(2) + canvasPosition.left;
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
			//console.log(event);
			network.moveTo({
				position: {x: event.pointer.x, y: event.pointer.y},
				scale: event.scale,
			});
			network1.moveTo({
				position: {x: event.pointer.x, y: event.pointer.y},
				scale: event.scale,
			});
		});
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

$(document).ready(function() {
	topMenu = $("<div style='margin:0 0 0 0; padding:3px; background-color: black;color:white;z-index:9999'></div>");
	var body = $("body");
	body.prepend(topMenu);
	showDataButton = $("<span style='color:white'>showData</span>");
	topMenu.append(showDataButton);
	schemeEditElementsMenu = $("<div id='schemeEditElementsMenu' style='height:60%; width:300px; position:fixed; left:0; bottom:0; background-color:grey;z-index:5000; padding: 40px 20px 20px 20px'></div>");
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
	var linkOpenButton = $("<div><span>linkOpenButton</span></div>");
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

	linkOpenButton.click(function() {
		var link = nodeLinkInput.val();
		if (link.length > 0) {
			window.open(link, '_blank');
			console.log(link);
		}
	});

	schemeEditElementsMenu.append(elementsSetupTable);

	var saveElementEditButton = $("<div style='margin:20px 0 0 0'><span id='saveElementEditButton'>saveElementEditButton</span></div>");
	schemeEditElementsMenu.append(saveElementEditButton);

	var closeElementEditButton = $("<div style='margin:20px 0 0 0'><span id='closeElementEditButton'>closeElementEditButton</span></div>");
	schemeEditElementsMenu.append(closeElementEditButton);
	closeElementEditButton.click(function() {
		schemeEditElementsMenu.hide();
	});

	schemeDataMenu = $("<div id='schemeDataMenu' style='height:100%; width:260px; position:fixed; right:0; top:0; background-color:grey;z-index:5000; padding: 40px 20px 20px 20px'></div>");
	schemeDataTextArea = $("<div style='margin:0;padding:0;'><textarea id='schemeDataTextArea' cols='30' rows='45'></textarea></div>");
	schemeDataMenu.append(schemeDataTextArea);
	body.append(schemeDataMenu);
	showDataButton.click(function() {
		schemeDataMenu.toggle();
	});
	draw();
	var scale = network.getScale();
	var viewPosition = network.getViewPosition();
	var schemeData = {
		canvas1Data: data,
		canvas2Data: data1,
		setup: {
			scale: scale,
			viewPosition: viewPosition
		}
	};
	var schemeDataJson = JSON.stringify(schemeData, undefined, 2);
	$("textarea#schemeDataTextArea").val(schemeDataJson);
	var updateSchemeFromMenuButton = $("<div style='margin: 0 0 20px 0;'><span id='updateSchemeFromMenuButton' style='background-color:white;color:black;'>updateSchemeFromMenu</span></div>");
	var updateMenuFromSchemeButton = $("<div style='margin: 0 0 20px 0;'><span id='updateMenuFromSchemeButton' style='background-color:white;color:black;'>updateMenuFromScheme</span></div>");
	schemeDataMenu.prepend(updateMenuFromSchemeButton);
	schemeDataMenu.prepend(updateSchemeFromMenuButton);
	updateSchemeFromMenuButton.click(function() {
		var schemeDataJsonFromMenu = $("textarea#schemeDataTextArea").val();
		schemeData = JSON.parse(schemeDataJsonFromMenu);
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
				let cNode = getNodeById(data, connId);

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
		var scale = network.getScale();
		var viewPosition = network.getViewPosition();
		var schemeData = {
			canvas1Data: data,
			canvas2Data: data1,
			setup: {
				scale: scale,
				viewPosition: viewPosition
			}
		};
		objectToArray(network.getPositions()).forEach(function(node) {
			data.nodes._data[node.id].x = node.x;
			data.nodes._data[node.id].y = node.y;
		});
		objectToArray(network1.getPositions()).forEach(function(node) {
			data1.nodes._data[node.id].x = node.x;
			data1.nodes._data[node.id].y = node.y;
		});
		var schemeDataJson = JSON.stringify(schemeData, undefined, 2);
		$("textarea#schemeDataTextArea").val(schemeDataJson);
	});
});
