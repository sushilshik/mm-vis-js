var schemeData =
{
  "canvas1Data": {
    "nodes": {
      "_subscribers": {
        "*": [],
        "add": [],
        "remove": [],
        "update": []
      },
      "_options": {},
      "_data": {
        "0ca73d64-eabf-4558-8d04-b240259dbb74": {
          "id": "0ca73d64-eabf-4558-8d04-b240259dbb74",
          "x": 60311,
          "y": -9346,
          "label": "META",
          "shape": "box",
          "link": "",
          "font": {
            "size": 400
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "borderWidth": ""
        },
        "fbf5e843-15c9-43e7-af6e-5a0d46bd3088": {
          "id": "fbf5e843-15c9-43e7-af6e-5a0d46bd3088",
          "x": 61211,
          "y": -9012,
          "label": "Разработка"
        },
        "6206492e-02d2-4a2b-897f-11d315f09296": {
          "id": "6206492e-02d2-4a2b-897f-11d315f09296",
          "x": 61524,
          "y": -9017,
          "label": "init"
        },
        "1aec8e54-aa06-4194-b655-0d0d9bfdbb77": {
          "id": "1aec8e54-aa06-4194-b655-0d0d9bfdbb77",
          "x": 59855,
          "y": -8498,
          "label": "saveCanvasProjectData",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14
          },
          "color": {
            "background": "#ffd570",
            "border": ""
          },
          "borderWidth": ""
        },
        "719ccd35-55eb-43fe-962b-494d41485f4c": {
          "id": "719ccd35-55eb-43fe-962b-494d41485f4c",
          "x": 61379,
          "y": -9015,
          "label": "2019.11/16",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "",
            "border": ""
          },
          "borderWidth": ""
        },
        "60c2d97b-fdf5-4b9b-b53a-f9d9db63bd6d": {
          "id": "60c2d97b-fdf5-4b9b-b53a-f9d9db63bd6d",
          "x": 61262,
          "y": -9686,
          "label": "Themes list",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "#FFD570",
            "border": ""
          },
          "borderWidth": ""
        },
        "a20dd0c9-30ce-4abe-a727-8c975855c9a8": {
          "id": "a20dd0c9-30ce-4abe-a727-8c975855c9a8",
          "x": 60188,
          "y": -8555,
          "label": "projectSaveId"
        },
        "43750806-8645-4177-bffc-caa780c3b005": {
          "id": "43750806-8645-4177-bffc-caa780c3b005",
          "x": 60368,
          "y": -8558,
          "label": "projectSaveId: python_proj1",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "",
            "border": ""
          },
          "borderWidth": ""
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js pages list",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558",
          "x": 71180,
          "y": -9173,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "063a7ffc-4975-4000-9c73-2c221ec4f7f5709204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "updateMenuFromScheme([],[]);\n\nvar data = document.getElementById(\"schemeDataTextArea\").value;\n\nvar url = \"https://localhost:3001\";\n\nfunction fetchData(url, params) {\n\n   url = url + \"?origin=*\";\n   Object.keys(params).forEach(function(key){url += \"&\" + key + \"=\" + params[key];});\n\n\n   fetch(url)\n       .then(function(response){return response.json();})\n       .then(function(response) {\n          if (response != \"ok\") {\n             showAlert(response, 10, 65);\n          }\n          console.log(response);\n       })\n       .catch(function(error){\n          console.log(error);\n});\n\n}\n\nfunction chunkString(str, length) {\n  return str.match(new RegExp('(.|[\\r\\n]){1,' + length + '}', 'g'));\n}\n\nvar dataChunks = chunkString(data, 10000);\nconsole.log(dataChunks.length);\nvar saveTime = new Date();\n\nvar index = 0;\nfunction saveLoop () {           \n   setTimeout(function () {    \n      //var dataChunk = JSON.stringify(dataChunk);\n      var dataChunk = encodeURIComponent(dataChunks[index]);\n      var params = {\n         path: \"/home/mike/progr/repo/mm-vis-js/app/python.data.js\",\n         dataPart: dataChunk,\n         dataPartNumber: index,\n         projectName: \"python_proj1\",\n         saveTime: saveTime.getTime(),\n         dataChunksLength: dataChunks.length,\n         lastDataPart: false\n      };\n\n      fetchData(url, params);         \n      index++;                     \n      if (index < dataChunks.length) {            \n         saveLoop();             \n      }                        \n   }, 3)\n}\n\nsaveLoop();",
          "id": "063a7ffc-4975-4000-9c73-2c221ec4f7f5709204",
          "x": 65740,
          "y": -6470,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "5f08e9b3-be39-411a-9b7a-67703314f3e9709204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "red",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 72,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js\npython save",
          "x": 64042,
          "y": -4898,
          "id": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "fc346e19-9d86-4596-835b-11f1f755d865709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Development",
          "x": 64457,
          "y": -4476,
          "id": "fc346e19-9d86-4596-835b-11f1f755d865709204"
        },
        "4e8d23e0-2916-468f-ab10-7887edd29781709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "11/16/2019",
          "x": 64707,
          "y": -4476,
          "id": "4e8d23e0-2916-468f-ab10-7887edd29781709204"
        },
        "9e05bed3-bcfb-461c-8782-cbb50e700f2b709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "init",
          "x": 64607,
          "y": -4476,
          "id": "9e05bed3-bcfb-461c-8782-cbb50e700f2b709204"
        },
        "56b1d0ac-f667-4a67-948e-fe51b137da35709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Notes",
          "x": 64457,
          "y": -5326,
          "id": "56b1d0ac-f667-4a67-948e-fe51b137da35709204"
        },
        "f9d3919c-5ba4-4e33-afd7-f6321b559d96709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Dictionary of\nconcepts",
          "x": 64627,
          "y": -6420,
          "id": "f9d3919c-5ba4-4e33-afd7-f6321b559d96709204"
        },
        "52715514-7cae-4783-a55f-e207e1ce5e23709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Details, thoughts",
          "x": 64617,
          "y": -5443,
          "id": "52715514-7cae-4783-a55f-e207e1ce5e23709204"
        },
        "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Sections",
          "x": 64607,
          "y": -5076,
          "id": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204"
        },
        "43c7b180-f8c6-452f-9346-94265b43c0bc709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Books",
          "x": 64671,
          "y": -5226,
          "id": "43c7b180-f8c6-452f-9346-94265b43c0bc709204"
        },
        "a6573a2a-17e3-4e51-803a-c79be735c907709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "R&D institutions",
          "x": 64701,
          "y": -5201,
          "id": "a6573a2a-17e3-4e51-803a-c79be735c907709204"
        },
        "5957177d-5884-4cdf-a0a2-95fedfd8f6ce709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Sites",
          "x": 64667,
          "y": -5176,
          "id": "5957177d-5884-4cdf-a0a2-95fedfd8f6ce709204"
        },
        "71d85620-d7c1-4f72-b9b3-178f20566934709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Magazines",
          "x": 64686,
          "y": -5151,
          "id": "71d85620-d7c1-4f72-b9b3-178f20566934709204"
        },
        "8261ea62-4460-4d13-856e-11a89da34460709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Articles",
          "x": 64674,
          "y": -5126,
          "id": "8261ea62-4460-4d13-856e-11a89da34460709204"
        },
        "c9e649eb-9d6f-4a97-a581-25bc23fb2dc6709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Media content",
          "x": 64696,
          "y": -5101,
          "id": "c9e649eb-9d6f-4a97-a581-25bc23fb2dc6709204"
        },
        "87acae29-26a1-4dae-aa6c-dad83e7b8983709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Misc. web links",
          "x": 64699,
          "y": -5076,
          "id": "87acae29-26a1-4dae-aa6c-dad83e7b8983709204"
        },
        "7ca3ffa3-5554-46fb-9e4c-21aaa8768493709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Projects",
          "x": 64677,
          "y": -5051,
          "id": "7ca3ffa3-5554-46fb-9e4c-21aaa8768493709204"
        },
        "b850ef03-dd7d-48b9-ba43-0ab91574cb14709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Tools",
          "x": 64668,
          "y": -5026,
          "id": "b850ef03-dd7d-48b9-ba43-0ab91574cb14709204"
        },
        "42b59714-b915-4351-8615-f73dea998d39709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Organizations",
          "x": 64695,
          "y": -5001,
          "id": "42b59714-b915-4351-8615-f73dea998d39709204"
        },
        "f2417b15-6f28-4533-8d5c-9e91123a14b2709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Standarts",
          "x": 64682,
          "y": -4976,
          "id": "f2417b15-6f28-4533-8d5c-9e91123a14b2709204"
        },
        "e99e9a6f-f6e1-4312-b003-5878d908f3ce709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Forums, Groups",
          "x": 64703,
          "y": -4951,
          "id": "e99e9a6f-f6e1-4312-b003-5878d908f3ce709204"
        },
        "f9a78cba-3904-49d3-b0da-72dbf64df687709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Laws",
          "x": 64668,
          "y": -4926,
          "id": "f9a78cba-3904-49d3-b0da-72dbf64df687709204"
        },
        "518a2b66-f38b-49a4-9220-52cbdd3a9370709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Adjacent Themes",
          "x": 64707,
          "y": -4901,
          "id": "518a2b66-f38b-49a4-9220-52cbdd3a9370709204"
        },
        "675504dd-4410-45b0-a5ec-0bac8ce4a540709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Questions",
          "x": 64457,
          "y": -4776,
          "id": "675504dd-4410-45b0-a5ec-0bac8ce4a540709204"
        },
        "51096979-4e09-49c1-bed3-08a4925d2ebf709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Problems",
          "x": 64457,
          "y": -4676,
          "id": "51096979-4e09-49c1-bed3-08a4925d2ebf709204"
        },
        "224747ed-bc32-4069-ab0d-8c3f13f8a51a709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Goals",
          "x": 64457,
          "y": -4576,
          "id": "224747ed-bc32-4069-ab0d-8c3f13f8a51a709204"
        },
        "d322f4c8-89a7-4831-85ac-a5cfdfcb9bf2142599393189555599805765709204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js\npython save",
          "id": "d322f4c8-89a7-4831-85ac-a5cfdfcb9bf2142599393189555599805765709204",
          "x": 69486,
          "y": -5770,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Save operations code",
          "id": "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204",
          "x": 65056,
          "y": -6484
        },
        "ea25b7ca-7308-4e5d-8d23-becf10837170204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {},
          "shapeProperties": {},
          "label": "How to save canvas with script.\n(Like \"Save\" operation\nin desktop program.)",
          "id": "ea25b7ca-7308-4e5d-8d23-becf10837170204",
          "x": 64924,
          "y": -5466,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "d6a2f6ee-56a5-4221-be38-49c0a8364a7196204": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "start mvj-serv.js from mm-vis-js/utils/",
          "id": "d6a2f6ee-56a5-4221-be38-49c0a8364a7196204",
          "x": 65286,
          "y": -5487
        },
        "52aee244-a92a-41a3-8b71-373d541e660d96204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "$ node mvj-serv.js",
          "id": "52aee244-a92a-41a3-8b71-373d541e660d96204",
          "x": 65533,
          "y": -5484,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "8dcd7da6-9174-4a9a-92df-19ac2ef2574596204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "check port number in mvj-serv.js script - 1337. Change it in mvj-serv.js and in build script above, if you need.",
          "id": "8dcd7da6-9174-4a9a-92df-19ac2ef2574596204",
          "x": 65817,
          "y": -5521,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "604289ab-7ae3-4401-afdc-44d012b2609c96204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "center"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Click big node above with code in it - to select it.",
          "id": "604289ab-7ae3-4401-afdc-44d012b2609c96204",
          "x": 65323,
          "y": -5440,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "d98ac5d1-b4ad-4662-9dfb-3c02ee567ced96204": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Click \"runNodeCode\" in this node menu - on the left.",
          "id": "d98ac5d1-b4ad-4662-9dfb-3c02ee567ced96204",
          "x": 65337,
          "y": -5401,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "2fe50647-80d4-4a27-86a6-4d5f56887b54": {
          "id": "2fe50647-80d4-4a27-86a6-4d5f56887b54",
          "x": 61499,
          "y": -9718,
          "label": "Что на этом холсте?"
        },
        "e5029dc5-2b59-4e89-96dd-ab5b51badb88": {
          "id": "e5029dc5-2b59-4e89-96dd-ab5b51badb88",
          "x": 61755,
          "y": -9727,
          "label": "Подборки закладок и заметок.",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "#ffd570",
            "border": ""
          },
          "borderWidth": ""
        },
        "2586740f-f45f-43f1-84ee-7367d6575411": {
          "label": "Serialization",
          "x": 80505,
          "y": -4836,
          "font": {
            "size": 72,
            "align": "left"
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "id": "2586740f-f45f-43f1-84ee-7367d6575411",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "424e2d87-0ce4-449b-80f6-74672c34845f": {
          "label": "Development",
          "x": 80805,
          "y": -4386,
          "id": "424e2d87-0ce4-449b-80f6-74672c34845f"
        },
        "99a6d30c-79db-429d-a85e-8859acd45353": {
          "label": "12/18/2019",
          "x": 80938,
          "y": -4386,
          "id": "99a6d30c-79db-429d-a85e-8859acd45353"
        },
        "95130e48-8e3f-45e1-b29f-e094efdde51d": {
          "label": "init",
          "x": 81055,
          "y": -4386,
          "id": "95130e48-8e3f-45e1-b29f-e094efdde51d"
        },
        "f786b8ed-1757-4a5a-a572-d6834b9764d9": {
          "label": "Notes",
          "x": 80781,
          "y": -5236,
          "id": "f786b8ed-1757-4a5a-a572-d6834b9764d9"
        },
        "d0dca287-3c0c-4bcf-8052-22a2e73e0c9c": {
          "label": "Dictionary of\nconcepts",
          "x": 80960,
          "y": -5770,
          "id": "d0dca287-3c0c-4bcf-8052-22a2e73e0c9c"
        },
        "8f0bcaf0-4ae2-4e49-8b9d-806e2e730cef": {
          "label": "Details, thoughts",
          "x": 80955,
          "y": -5236,
          "id": "8f0bcaf0-4ae2-4e49-8b9d-806e2e730cef"
        },
        "e32e58e3-a889-4ee9-87ea-24a6a3805867": {
          "label": "Sections",
          "x": 80929,
          "y": -4986,
          "id": "e32e58e3-a889-4ee9-87ea-24a6a3805867"
        },
        "c78638f9-a985-47e8-9586-71abfa28e1d1": {
          "label": "Books",
          "x": 81019,
          "y": -5136,
          "id": "c78638f9-a985-47e8-9586-71abfa28e1d1"
        },
        "b7eab120-d540-4e87-8bc3-42f821800aa0": {
          "label": "R&D institutions",
          "x": 81049,
          "y": -5111,
          "id": "b7eab120-d540-4e87-8bc3-42f821800aa0"
        },
        "e888bc0c-8860-4fce-97df-e795b13582c5": {
          "label": "Sites",
          "x": 81015,
          "y": -5086,
          "id": "e888bc0c-8860-4fce-97df-e795b13582c5"
        },
        "ba7b85f0-308e-4bea-a618-6c235d91fbc2": {
          "label": "Magazines",
          "x": 81034,
          "y": -5061,
          "id": "ba7b85f0-308e-4bea-a618-6c235d91fbc2"
        },
        "f894faf7-7ef9-4331-8a4b-71e3a24fdedf": {
          "label": "Articles",
          "x": 81022,
          "y": -5036,
          "id": "f894faf7-7ef9-4331-8a4b-71e3a24fdedf"
        },
        "078c4a47-d461-4fe2-a395-c4bb70313e4c": {
          "label": "Media content",
          "x": 81044,
          "y": -5011,
          "id": "078c4a47-d461-4fe2-a395-c4bb70313e4c"
        },
        "f7ae470a-6a15-49fa-ba2b-56feede9eddb": {
          "label": "Misc. web links",
          "x": 81047,
          "y": -4986,
          "id": "f7ae470a-6a15-49fa-ba2b-56feede9eddb"
        },
        "1277050b-b35d-4d5f-ad65-175c188e4071": {
          "label": "Projects",
          "x": 81025,
          "y": -4961,
          "id": "1277050b-b35d-4d5f-ad65-175c188e4071"
        },
        "3b04ea53-367f-4c01-8aba-a3252684b0f0": {
          "label": "Tools",
          "x": 81016,
          "y": -4936,
          "id": "3b04ea53-367f-4c01-8aba-a3252684b0f0"
        },
        "dc8576d9-0b7d-4f20-b7a2-9c23d73ab21b": {
          "label": "Organizations",
          "x": 81043,
          "y": -4911,
          "id": "dc8576d9-0b7d-4f20-b7a2-9c23d73ab21b"
        },
        "5783c61f-7fce-4979-b746-f570332aca4f": {
          "label": "Standarts",
          "x": 81030,
          "y": -4886,
          "id": "5783c61f-7fce-4979-b746-f570332aca4f"
        },
        "fdca94f5-7ffc-4453-8e76-9a650378590f": {
          "label": "Forums, Groups",
          "x": 81051,
          "y": -4861,
          "id": "fdca94f5-7ffc-4453-8e76-9a650378590f"
        },
        "d7ace64e-d35f-41c2-8bc1-dd0d7855c153": {
          "label": "Laws",
          "x": 81016,
          "y": -4836,
          "id": "d7ace64e-d35f-41c2-8bc1-dd0d7855c153"
        },
        "d590ec9f-e6bf-4eba-a732-e8c91098f55d": {
          "label": "Adjacent Themes",
          "x": 81055,
          "y": -4811,
          "id": "d590ec9f-e6bf-4eba-a732-e8c91098f55d"
        },
        "1aad28f4-4aa5-4d84-9550-69d12df8ffcb": {
          "label": "Questions",
          "x": 80795,
          "y": -4686,
          "id": "1aad28f4-4aa5-4d84-9550-69d12df8ffcb"
        },
        "4fa15c23-c4b2-4055-8b36-f7f526e3a807": {
          "label": "Problems",
          "x": 80793,
          "y": -4586,
          "id": "4fa15c23-c4b2-4055-8b36-f7f526e3a807"
        },
        "d5dc6a46-bb7b-4517-a2be-6b8fc723d9fd": {
          "label": "Goals",
          "x": 80781,
          "y": -4486,
          "id": "d5dc6a46-bb7b-4517-a2be-6b8fc723d9fd"
        },
        "745f5e66-b803-40af-b32a-b5b04a584992": {
          "id": "745f5e66-b803-40af-b32a-b5b04a584992",
          "x": 81171,
          "y": -5774,
          "label": "JSON",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "#ffd570",
            "border": ""
          },
          "borderWidth": ""
        },
        "2855cd83-6c03-4407-a6d5-1269e1071e31": {
          "id": "2855cd83-6c03-4407-a6d5-1269e1071e31",
          "x": 81387,
          "y": -5805,
          "label": "Python built-in json package"
        },
        "9db8ad1e-556e-4198-9671-2373e5d0c720": {
          "id": "9db8ad1e-556e-4198-9671-2373e5d0c720",
          "x": 81333,
          "y": -5774,
          "label": "import json"
        },
        "84029a64-45cf-4807-a7a9-ff33cf1a1aff": {
          "id": "84029a64-45cf-4807-a7a9-ff33cf1a1aff",
          "x": 81323,
          "y": -5722,
          "label": "dumps",
          "shape": "box",
          "link": "",
          "font": {
            "size": 14,
            "align": "left"
          },
          "color": {
            "background": "#ffd570",
            "border": ""
          },
          "borderWidth": ""
        },
        "af180ca8-bce6-4e4a-8111-af53e1d7acc0": {
          "label": "json.dumps(some_data)",
          "link": "",
          "x": 81502,
          "y": -5717,
          "id": "af180ca8-bce6-4e4a-8111-af53e1d7acc0",
          "color": {
            "highlight": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "hover": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "background": "#ffd570",
            "border": "#2B7CE9"
          },
          "fixed": {
            "x": false,
            "y": false
          },
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {}
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Serialization",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961",
          "x": 85953,
          "y": -5411,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "3079f0b6-7a33-4baa-9e9e-59da251e18e6": {
          "label": "Code\nComments",
          "x": 80345,
          "y": -2317,
          "font": {
            "size": 72,
            "align": "left"
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "id": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "d9672db0-1eb0-43e2-a15a-c740ce138ac1": {
          "label": "Development",
          "x": 80645,
          "y": -1867,
          "id": "d9672db0-1eb0-43e2-a15a-c740ce138ac1"
        },
        "e3acdd8f-e464-4773-b75f-5533491826b0": {
          "label": "12/18/2019",
          "x": 80778,
          "y": -1867,
          "id": "e3acdd8f-e464-4773-b75f-5533491826b0"
        },
        "781873e6-c44e-4a99-9224-73ff50beb551": {
          "label": "init",
          "x": 80895,
          "y": -1867,
          "id": "781873e6-c44e-4a99-9224-73ff50beb551"
        },
        "9cc8adcf-84b0-4c19-b526-66aba9e8869c": {
          "label": "Notes",
          "x": 80621,
          "y": -2717,
          "id": "9cc8adcf-84b0-4c19-b526-66aba9e8869c"
        },
        "bec203cf-f671-4351-b8a2-028d4bc3f3d6": {
          "label": "Dictionary of\nconcepts",
          "x": 80784,
          "y": -3346,
          "id": "bec203cf-f671-4351-b8a2-028d4bc3f3d6"
        },
        "5ce758e2-fedc-4f93-bc66-7ab8df34b2cc": {
          "label": "Details, thoughts",
          "x": 80795,
          "y": -2717,
          "id": "5ce758e2-fedc-4f93-bc66-7ab8df34b2cc"
        },
        "4e085bcc-5d52-46d6-8093-c4c5619e699b": {
          "label": "Sections",
          "x": 80769,
          "y": -2467,
          "id": "4e085bcc-5d52-46d6-8093-c4c5619e699b"
        },
        "0fa3b349-cd3d-412a-9b07-5858ed689fa3": {
          "label": "Books",
          "x": 80859,
          "y": -2617,
          "id": "0fa3b349-cd3d-412a-9b07-5858ed689fa3"
        },
        "6a45e378-7c70-46d7-b830-59d527989059": {
          "label": "R&D institutions",
          "x": 80889,
          "y": -2592,
          "id": "6a45e378-7c70-46d7-b830-59d527989059"
        },
        "9b637b6c-027e-443a-8e69-7709d03739b2": {
          "label": "Sites",
          "x": 80855,
          "y": -2567,
          "id": "9b637b6c-027e-443a-8e69-7709d03739b2"
        },
        "cb655d8b-b04e-46e5-938d-be994aac6f89": {
          "label": "Magazines",
          "x": 80874,
          "y": -2542,
          "id": "cb655d8b-b04e-46e5-938d-be994aac6f89"
        },
        "23433ec6-7e0e-4d44-ae8a-242b01ca1bb4": {
          "label": "Articles",
          "x": 80862,
          "y": -2517,
          "id": "23433ec6-7e0e-4d44-ae8a-242b01ca1bb4"
        },
        "f6114c7c-1c00-4df5-b252-bbc2fafc19a3": {
          "label": "Media content",
          "x": 80884,
          "y": -2492,
          "id": "f6114c7c-1c00-4df5-b252-bbc2fafc19a3"
        },
        "0c0bcdbe-906b-4a95-9a2f-cb5fab0e5e1c": {
          "label": "Misc. web links",
          "x": 80887,
          "y": -2467,
          "id": "0c0bcdbe-906b-4a95-9a2f-cb5fab0e5e1c"
        },
        "a7f438aa-b283-4d07-9224-8ec228acb48b": {
          "label": "Projects",
          "x": 80865,
          "y": -2442,
          "id": "a7f438aa-b283-4d07-9224-8ec228acb48b"
        },
        "872f0a12-6de5-4441-ac67-84d16ed1cbb5": {
          "label": "Tools",
          "x": 80856,
          "y": -2417,
          "id": "872f0a12-6de5-4441-ac67-84d16ed1cbb5"
        },
        "fe3997d4-eae0-4cba-b0f1-4e90b4a5ce49": {
          "label": "Organizations",
          "x": 80883,
          "y": -2392,
          "id": "fe3997d4-eae0-4cba-b0f1-4e90b4a5ce49"
        },
        "4356be75-9c04-4cbd-80e0-16a076c38e96": {
          "label": "Standarts",
          "x": 80870,
          "y": -2367,
          "id": "4356be75-9c04-4cbd-80e0-16a076c38e96"
        },
        "6c0ad78b-aa29-4388-939e-d90da59b23d2": {
          "label": "Forums, Groups",
          "x": 80891,
          "y": -2342,
          "id": "6c0ad78b-aa29-4388-939e-d90da59b23d2"
        },
        "224588a1-855c-434c-a680-2d94130ee51a": {
          "label": "Laws",
          "x": 80856,
          "y": -2317,
          "id": "224588a1-855c-434c-a680-2d94130ee51a"
        },
        "7cbde960-9aab-4b0d-a032-bf6100cb0093": {
          "label": "Adjacent Themes",
          "x": 80895,
          "y": -2292,
          "id": "7cbde960-9aab-4b0d-a032-bf6100cb0093"
        },
        "886fb5f5-4253-4b27-a255-eceea78415ed": {
          "label": "Questions",
          "x": 80635,
          "y": -2167,
          "id": "886fb5f5-4253-4b27-a255-eceea78415ed"
        },
        "6259e972-39e5-420e-8d87-bf604c6532d7": {
          "label": "Problems",
          "x": 80633,
          "y": -2067,
          "id": "6259e972-39e5-420e-8d87-bf604c6532d7"
        },
        "10b7c4ce-4a26-4492-a0f2-55323551152a": {
          "label": "Goals",
          "x": 80621,
          "y": -1967,
          "id": "10b7c4ce-4a26-4492-a0f2-55323551152a"
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Code\nComments",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332",
          "x": 85647,
          "y": -2521,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "fccea247-1e5a-4860-b063-04deecf73242": {
          "id": "fccea247-1e5a-4860-b063-04deecf73242",
          "x": 81051,
          "y": -3366,
          "label": "#"
        },
        "15951acd-8b69-42d2-a05e-2752c01bd6ee": {
          "id": "15951acd-8b69-42d2-a05e-2752c01bd6ee",
          "x": 81073,
          "y": -3265,
          "label": "Multiline"
        },
        "3225ebbe-69b2-4d78-882f-57fb74f7e6b2": {
          "id": "3225ebbe-69b2-4d78-882f-57fb74f7e6b2",
          "x": 81196,
          "y": -3263,
          "label": "\"\"\"\nsome code\nsome code\n\"\"\""
        },
        "2655ef6f-58d4-4176-bf7e-f9925020bdb1": {
          "label": "Dictionaries",
          "x": 80554,
          "y": 476,
          "font": {
            "size": 72,
            "align": "left"
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "id": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "8170c43c-7943-45d1-9b28-f229edc22499": {
          "label": "Development",
          "x": 80854,
          "y": 926,
          "id": "8170c43c-7943-45d1-9b28-f229edc22499"
        },
        "ad44dda3-0317-4d5e-bc27-81d735d7241a": {
          "label": "12/18/2019",
          "x": 80987,
          "y": 926,
          "id": "ad44dda3-0317-4d5e-bc27-81d735d7241a"
        },
        "b23f2e6b-e9cc-48fc-85ce-1ceb9209a1b8": {
          "label": "init",
          "x": 81104,
          "y": 926,
          "id": "b23f2e6b-e9cc-48fc-85ce-1ceb9209a1b8"
        },
        "b9a88d8f-8e4d-4566-add0-9cc957380404": {
          "label": "Notes",
          "x": 80831,
          "y": -160,
          "id": "b9a88d8f-8e4d-4566-add0-9cc957380404"
        },
        "63161829-e05f-4556-973d-0db8e649daca": {
          "label": "Dictionary of\nconcepts",
          "x": 80996,
          "y": -571,
          "id": "63161829-e05f-4556-973d-0db8e649daca"
        },
        "32b453ae-dd88-4ad9-a086-351709e5e31c": {
          "label": "Details, thoughts",
          "x": 81004,
          "y": -160,
          "id": "32b453ae-dd88-4ad9-a086-351709e5e31c"
        },
        "34a3d439-761e-4956-a948-a2aad24cb4c9": {
          "label": "Sections",
          "x": 80978,
          "y": 326,
          "id": "34a3d439-761e-4956-a948-a2aad24cb4c9"
        },
        "12a673a7-dcc3-4906-9b5c-1f341f598670": {
          "label": "Books",
          "x": 81068,
          "y": -60,
          "id": "12a673a7-dcc3-4906-9b5c-1f341f598670"
        },
        "0c353863-df48-4130-9c29-8babdf25ed63": {
          "label": "R&D institutions",
          "x": 81099,
          "y": -35,
          "id": "0c353863-df48-4130-9c29-8babdf25ed63"
        },
        "85dea1c2-b3bd-463a-b9d8-dbe550f1aa7c": {
          "label": "Sites",
          "x": 81064,
          "y": -10,
          "id": "85dea1c2-b3bd-463a-b9d8-dbe550f1aa7c"
        },
        "5e1fbc84-cd47-4d53-9b2f-fe0fafd482e9": {
          "label": "Magazines",
          "x": 81083,
          "y": 15,
          "id": "5e1fbc84-cd47-4d53-9b2f-fe0fafd482e9"
        },
        "1dd17bac-41ce-47c4-a8eb-40e2561e2d37": {
          "label": "Articles",
          "x": 81072,
          "y": 40,
          "id": "1dd17bac-41ce-47c4-a8eb-40e2561e2d37"
        },
        "edb89e1e-1171-4656-9066-03c427c25671": {
          "label": "Media content",
          "x": 81094,
          "y": 65,
          "id": "edb89e1e-1171-4656-9066-03c427c25671"
        },
        "8f6a9c88-34bb-44b0-803b-c471fe50c383": {
          "label": "Misc. web links",
          "x": 81099,
          "y": 202,
          "id": "8f6a9c88-34bb-44b0-803b-c471fe50c383"
        },
        "96310091-f9fe-494e-adad-5b3c6d7de4c0": {
          "label": "Projects",
          "x": 81074,
          "y": 351,
          "id": "96310091-f9fe-494e-adad-5b3c6d7de4c0"
        },
        "77b8d50a-08fc-47af-b8cf-2744a72fb743": {
          "label": "Tools",
          "x": 81066,
          "y": 376,
          "id": "77b8d50a-08fc-47af-b8cf-2744a72fb743"
        },
        "29c529f9-fca5-4162-8606-72d0e6b3d168": {
          "label": "Organizations",
          "x": 81093,
          "y": 401,
          "id": "29c529f9-fca5-4162-8606-72d0e6b3d168"
        },
        "a9623a2c-6154-4853-9c34-722b12e34a2f": {
          "label": "Standarts",
          "x": 81079,
          "y": 426,
          "id": "a9623a2c-6154-4853-9c34-722b12e34a2f"
        },
        "9a1ac976-705c-498d-9d41-e09384516de4": {
          "label": "Forums, Groups",
          "x": 81101,
          "y": 451,
          "id": "9a1ac976-705c-498d-9d41-e09384516de4"
        },
        "87bee4cd-fa43-4ea5-885c-6001fafc48bc": {
          "label": "Laws",
          "x": 81065,
          "y": 476,
          "id": "87bee4cd-fa43-4ea5-885c-6001fafc48bc"
        },
        "6b25bb11-c831-4ebb-83e5-9524496dc209": {
          "label": "Adjacent Themes",
          "x": 81104,
          "y": 501,
          "id": "6b25bb11-c831-4ebb-83e5-9524496dc209"
        },
        "382cda94-ef1b-485d-adba-d7c1b8c76799": {
          "label": "Questions",
          "x": 80844,
          "y": 626,
          "id": "382cda94-ef1b-485d-adba-d7c1b8c76799"
        },
        "5a4abbd1-5c53-48e7-9cd8-b99cf17f99ca": {
          "label": "Problems",
          "x": 80842,
          "y": 726,
          "id": "5a4abbd1-5c53-48e7-9cd8-b99cf17f99ca"
        },
        "dc661407-07d8-4c08-95c6-ec4a92fe1cfe": {
          "label": "Goals",
          "x": 80831,
          "y": 826,
          "id": "dc661407-07d8-4c08-95c6-ec4a92fe1cfe"
        },
        "b37b3d4c-fb55-40c4-8ae8-86227de617d1": {
          "id": "b37b3d4c-fb55-40c4-8ae8-86227de617d1",
          "x": 81300,
          "y": -582,
          "label": "like Maps or HashMaps"
        },
        "1076a2e2-5bb9-4541-a8c9-4a103de8270f": {
          "id": "1076a2e2-5bb9-4541-a8c9-4a103de8270f",
          "x": 81425,
          "y": 185,
          "label": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
          "link": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
        },
        "3a189436-44a6-4025-b6cc-86cdc61caed1": {
          "id": "3a189436-44a6-4025-b6cc-86cdc61caed1",
          "x": 81297,
          "y": -453,
          "label": "streetno = {\"1\": \"str1\",\n            \"2\": \"str2\",\n            \"3\": \"str3\",\n            \"4\": \"str4\",\n            \"5\": \"str5\" }"
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332881": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Dictionaries",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332881",
          "x": 85842,
          "y": -222,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94": {
          "label": "Run\ncommand\nline",
          "x": 80867,
          "y": 3070,
          "font": {
            "size": 72,
            "align": "left"
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "id": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "8114be0d-3f35-4897-9117-2eb9f03448eb": {
          "label": "Development",
          "x": 81167,
          "y": 3520,
          "id": "8114be0d-3f35-4897-9117-2eb9f03448eb"
        },
        "6718de82-8295-4030-b7d4-562507fd1fff": {
          "label": "12/19/2019",
          "x": 81300,
          "y": 3520,
          "id": "6718de82-8295-4030-b7d4-562507fd1fff"
        },
        "1f2c1291-fcde-4d41-b5fe-4f9113ac3e42": {
          "label": "init",
          "x": 81417,
          "y": 3520,
          "id": "1f2c1291-fcde-4d41-b5fe-4f9113ac3e42"
        },
        "7b8f5d82-4330-4b39-a90c-3a65c8eae204": {
          "label": "Notes",
          "x": 81144,
          "y": 2670,
          "id": "7b8f5d82-4330-4b39-a90c-3a65c8eae204"
        },
        "cdbe1cd5-c208-4f51-b5dc-a2236ec7a0f7": {
          "label": "Dictionary of\nconcepts",
          "x": 81323,
          "y": 1914,
          "id": "cdbe1cd5-c208-4f51-b5dc-a2236ec7a0f7"
        },
        "13c9ca25-9132-444e-a9f2-f1405fe6149e": {
          "label": "Details, thoughts",
          "x": 81317,
          "y": 2670,
          "id": "13c9ca25-9132-444e-a9f2-f1405fe6149e"
        },
        "3b5ee4ed-619a-4b3c-a819-abec9175a590": {
          "label": "Sections",
          "x": 81291,
          "y": 2920,
          "id": "3b5ee4ed-619a-4b3c-a819-abec9175a590"
        },
        "e7b4c785-2a68-4866-a507-738dbdf38c70": {
          "label": "Books",
          "x": 81381,
          "y": 2770,
          "id": "e7b4c785-2a68-4866-a507-738dbdf38c70"
        },
        "aa6ac82a-8ffc-4ca2-aa3f-50d22b2deff9": {
          "label": "R&D institutions",
          "x": 81412,
          "y": 2795,
          "id": "aa6ac82a-8ffc-4ca2-aa3f-50d22b2deff9"
        },
        "45d05662-1d78-4e8d-9e3c-c153f27b2336": {
          "label": "Sites",
          "x": 81377,
          "y": 2820,
          "id": "45d05662-1d78-4e8d-9e3c-c153f27b2336"
        },
        "4ef46127-3fdb-4a06-b4ed-a32ad9d8b6e5": {
          "label": "Magazines",
          "x": 81396,
          "y": 2845,
          "id": "4ef46127-3fdb-4a06-b4ed-a32ad9d8b6e5"
        },
        "47561e39-d760-43c7-9d51-f94705366489": {
          "label": "Articles",
          "x": 81385,
          "y": 2870,
          "id": "47561e39-d760-43c7-9d51-f94705366489"
        },
        "5a8dbee5-f6c5-4508-9fba-0cb2da8025ca": {
          "label": "Media content",
          "x": 81407,
          "y": 2895,
          "id": "5a8dbee5-f6c5-4508-9fba-0cb2da8025ca"
        },
        "b44f06ca-75bf-49e9-bf1d-b0cb6f141066": {
          "label": "Misc. web links",
          "x": 81409,
          "y": 2920,
          "id": "b44f06ca-75bf-49e9-bf1d-b0cb6f141066"
        },
        "71bf7321-48f6-4c1c-8bcb-baf3937da270": {
          "label": "Projects",
          "x": 81387,
          "y": 2945,
          "id": "71bf7321-48f6-4c1c-8bcb-baf3937da270"
        },
        "236d6bf1-417e-4a78-a17f-9fc8435f37ca": {
          "label": "Tools",
          "x": 81379,
          "y": 2970,
          "id": "236d6bf1-417e-4a78-a17f-9fc8435f37ca"
        },
        "d5b88b8d-5595-4d01-87b1-35b4ac9de471": {
          "label": "Organizations",
          "x": 81406,
          "y": 2995,
          "id": "d5b88b8d-5595-4d01-87b1-35b4ac9de471"
        },
        "a9c734b1-b48d-4e59-8fc8-674d42f34026": {
          "label": "Standarts",
          "x": 81392,
          "y": 3020,
          "id": "a9c734b1-b48d-4e59-8fc8-674d42f34026"
        },
        "22b5092a-1e2a-426c-8c2f-40347b31a7c3": {
          "label": "Forums, Groups",
          "x": 81414,
          "y": 3045,
          "id": "22b5092a-1e2a-426c-8c2f-40347b31a7c3"
        },
        "86bcf0a0-3884-43cb-9dc7-b07f02151edb": {
          "label": "Laws",
          "x": 81378,
          "y": 3070,
          "id": "86bcf0a0-3884-43cb-9dc7-b07f02151edb"
        },
        "e50692b2-35ed-4f2e-86a6-a2b77a98dae8": {
          "label": "Adjacent Themes",
          "x": 81417,
          "y": 3095,
          "id": "e50692b2-35ed-4f2e-86a6-a2b77a98dae8"
        },
        "a12e4227-2588-4261-aecd-b5fe4873b5f8": {
          "label": "Questions",
          "x": 81157,
          "y": 3220,
          "id": "a12e4227-2588-4261-aecd-b5fe4873b5f8"
        },
        "63ba8a3e-c1e5-46b4-aa03-edac1c131c45": {
          "label": "Problems",
          "x": 81155,
          "y": 3320,
          "id": "63ba8a3e-c1e5-46b4-aa03-edac1c131c45"
        },
        "d90a0eff-2ad0-468e-baed-688d7b79ec38": {
          "label": "Goals",
          "x": 81144,
          "y": 3420,
          "id": "d90a0eff-2ad0-468e-baed-688d7b79ec38"
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332881751": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Run\ncommand\nline",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961332881751",
          "x": 85425,
          "y": 3333,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "f7803df3-0650-4423-8d9b-457021534a6d": {
          "id": "f7803df3-0650-4423-8d9b-457021534a6d",
          "x": 81964,
          "y": 1963,
          "label": "import subprocess\ngnuplot = subprocess.Popen([\"/usr/bin/gnuplot\"], \n                           stdin=subprocess.PIPE)\ngnuplot.stdin.write(\"set term dumb 79 25\\n\")\ngnuplot.stdin.write(\"plot '-' using 1:2 title 'Line1' with linespoints \\n\")\nfor i,j in zip(x,y):\n   gnuplot.stdin.write(\"%f %f\\n\" % (i,j))\ngnuplot.stdin.write(\"e\\n\")\ngnuplot.stdin.flush()"
        },
        "dc510b39-9a13-429f-a024-54d4bb491a0d": {
          "id": "dc510b39-9a13-429f-a024-54d4bb491a0d",
          "x": 81560,
          "y": 1969,
          "label": "Examples"
        },
        "d26c4379-97f3-4d68-9d27-c269fd251c09": {
          "label": "Python",
          "x": 80518,
          "y": -7507,
          "font": {
            "size": 72,
            "align": "left"
          },
          "color": {
            "background": "red",
            "border": ""
          },
          "id": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e45b4a7a-6845-4543-a2ae-f795f595028d": {
          "label": "Development",
          "x": 80818,
          "y": -7057,
          "id": "e45b4a7a-6845-4543-a2ae-f795f595028d"
        },
        "135278d6-7302-48f8-b45b-ab183c21fcc4": {
          "label": "12/19/2019",
          "x": 80951,
          "y": -7057,
          "id": "135278d6-7302-48f8-b45b-ab183c21fcc4"
        },
        "3bc55a88-96d6-4745-9d35-f86151dd97dd": {
          "label": "init",
          "x": 81068,
          "y": -7057,
          "id": "3bc55a88-96d6-4745-9d35-f86151dd97dd"
        },
        "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480": {
          "label": "Notes",
          "x": 80813,
          "y": -8259,
          "id": "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480"
        },
        "d1f5c862-e493-4cad-9dfa-d6177ddf7992": {
          "label": "Dictionary of\nconcepts",
          "x": 80973,
          "y": -9548,
          "id": "d1f5c862-e493-4cad-9dfa-d6177ddf7992"
        },
        "afaf93b7-25c5-427e-81de-7806431dadca": {
          "label": "Details, thoughts",
          "x": 80986,
          "y": -8259,
          "id": "afaf93b7-25c5-427e-81de-7806431dadca"
        },
        "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede": {
          "label": "Sections",
          "x": 80942,
          "y": -7657,
          "id": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede"
        },
        "d299b79e-4ffa-4f4a-8932-7e97f2eb10ee": {
          "label": "Books",
          "x": 81050,
          "y": -8159,
          "id": "d299b79e-4ffa-4f4a-8932-7e97f2eb10ee"
        },
        "63adcb0b-4bf9-4749-92dd-333d67ff6a58": {
          "label": "R&D institutions",
          "x": 81081,
          "y": -8134,
          "id": "63adcb0b-4bf9-4749-92dd-333d67ff6a58"
        },
        "eb5f035a-b30b-4d0f-bf2e-f45f84756315": {
          "label": "Sites",
          "x": 81046,
          "y": -8109,
          "id": "eb5f035a-b30b-4d0f-bf2e-f45f84756315"
        },
        "59c3b991-22c9-4d28-8827-811a167fd8df": {
          "label": "Magazines",
          "x": 81065,
          "y": -8084,
          "id": "59c3b991-22c9-4d28-8827-811a167fd8df"
        },
        "30521a06-77d5-48fb-b1a3-e6f60108d275": {
          "label": "Articles",
          "x": 81054,
          "y": -8059,
          "id": "30521a06-77d5-48fb-b1a3-e6f60108d275"
        },
        "3445f6ac-f997-41cd-933c-780dc1937aaa": {
          "label": "Media content",
          "x": 81076,
          "y": -8034,
          "id": "3445f6ac-f997-41cd-933c-780dc1937aaa"
        },
        "e7309654-46d2-46c2-b390-0d9c548b5fab": {
          "label": "Misc. web links",
          "x": 81077,
          "y": -7839,
          "id": "e7309654-46d2-46c2-b390-0d9c548b5fab"
        },
        "dba97025-6d4a-4e60-a6c8-c6441ae6a131": {
          "label": "Projects",
          "x": 81038,
          "y": -7632,
          "id": "dba97025-6d4a-4e60-a6c8-c6441ae6a131"
        },
        "50316974-0daf-49c3-ba51-8b55293c2c2b": {
          "label": "Tools",
          "x": 81029,
          "y": -7607,
          "id": "50316974-0daf-49c3-ba51-8b55293c2c2b"
        },
        "cb3c7a23-39bf-4199-a9cd-546db14aee22": {
          "label": "Organizations",
          "x": 81057,
          "y": -7582,
          "id": "cb3c7a23-39bf-4199-a9cd-546db14aee22"
        },
        "dba1c4be-2efe-4c8b-9ee5-eae7b9fe0e1c": {
          "label": "Standarts",
          "x": 81043,
          "y": -7557,
          "id": "dba1c4be-2efe-4c8b-9ee5-eae7b9fe0e1c"
        },
        "b2358216-af23-4a3e-af80-4f1dfa046015": {
          "label": "Forums, Groups",
          "x": 81065,
          "y": -7532,
          "id": "b2358216-af23-4a3e-af80-4f1dfa046015"
        },
        "ed2388a2-2262-4ae2-8b41-21ba3bae6fb5": {
          "label": "Laws",
          "x": 81029,
          "y": -7507,
          "id": "ed2388a2-2262-4ae2-8b41-21ba3bae6fb5"
        },
        "b9fa313c-e357-4218-a54d-e3f0fa47bc40": {
          "label": "Adjacent Themes",
          "x": 81068,
          "y": -7482,
          "id": "b9fa313c-e357-4218-a54d-e3f0fa47bc40"
        },
        "36c0b6fb-3fbf-4399-886e-d09a20194020": {
          "label": "Questions",
          "x": 80808,
          "y": -7357,
          "id": "36c0b6fb-3fbf-4399-886e-d09a20194020"
        },
        "4336987d-b6e8-4aa9-ab5e-2a5cf137ed4c": {
          "label": "Problems",
          "x": 80806,
          "y": -7257,
          "id": "4336987d-b6e8-4aa9-ab5e-2a5cf137ed4c"
        },
        "93dfb4a3-402c-426a-9d08-37dadaa19d27": {
          "label": "Goals",
          "x": 80795,
          "y": -7157,
          "id": "93dfb4a3-402c-426a-9d08-37dadaa19d27"
        },
        "ef063fca-5566-4b91-bd75-ca0df01081dc241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Python online interpreters",
          "id": "ef063fca-5566-4b91-bd75-ca0df01081dc241831",
          "x": 81265,
          "y": -9627
        },
        "4a3125da-bc69-49a1-bd3e-714542579174241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "https://www.techbeamers.com/best-python-interpreter-execute-python-online/",
          "id": "4a3125da-bc69-49a1-bd3e-714542579174241831",
          "x": 81678,
          "y": -9628,
          "link": "https://www.techbeamers.com/best-python-interpreter-execute-python-online/"
        },
        "0872b3be-f521-49dc-bc01-14ceffec2f06241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "https://www.pythonanywhere.com/",
          "id": "0872b3be-f521-49dc-bc01-14ceffec2f06241831",
          "x": 81545,
          "y": -9482,
          "link": "https://www.pythonanywhere.com/"
        },
        "c18eb317-25f6-4982-8a13-5351898daf97241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Python hosting",
          "id": "c18eb317-25f6-4982-8a13-5351898daf97241831",
          "x": 81241,
          "y": -9486
        },
        "458b3e37-7acb-416d-8fd8-ab918307153a241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "https://www.pythonanywhere.com/try-ipython/",
          "id": "458b3e37-7acb-416d-8fd8-ab918307153a241831",
          "x": 81576,
          "y": -9602,
          "link": "https://www.pythonanywhere.com/try-ipython/"
        },
        "d8b69f8c-f25f-4fed-8f40-617134fd413b241831": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "https://live.sympy.org/",
          "id": "d8b69f8c-f25f-4fed-8f40-617134fd413b241831",
          "x": 81502,
          "y": -9572,
          "link": "https://live.sympy.org/"
        },
        "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961530": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffc63b",
            "border": ""
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 1000,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Python",
          "id": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b856558961530",
          "x": 84787,
          "y": -9196,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "4224d1a6-e789-4548-80e4-fb13a48ce2ee": {
          "id": "4224d1a6-e789-4548-80e4-fb13a48ce2ee",
          "x": 81458,
          "y": -7814,
          "label": "https://en.wikipedia.org/wiki/Python_(programming_language)",
          "link": "https://en.wikipedia.org/wiki/Python_(programming_language)"
        },
        "b704b4d2-dce8-45b6-a287-febcd6b3b993": {
          "id": "b704b4d2-dce8-45b6-a287-febcd6b3b993",
          "x": 81337,
          "y": -7874,
          "label": "https://www.python.org/",
          "link": "https://www.python.org/"
        },
        "b0ab9a5c-3969-4305-b107-d656ef662765147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "red"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 72,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js pages list",
          "x": 64554,
          "y": -8542,
          "id": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "ef5831c3-19e4-4205-9c1f-7a3bce9abf2e147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Development",
          "x": 65030,
          "y": -8102,
          "id": "ef5831c3-19e4-4205-9c1f-7a3bce9abf2e147528"
        },
        "c8fff93b-99a7-4e44-b775-013dd5b18cd0147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "11/16/2019",
          "x": 65280,
          "y": -8102,
          "id": "c8fff93b-99a7-4e44-b775-013dd5b18cd0147528"
        },
        "244022c3-df85-4859-b198-983acf2a904c147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "init",
          "x": 65180,
          "y": -8102,
          "id": "244022c3-df85-4859-b198-983acf2a904c147528"
        },
        "7b984b0f-df05-4527-8ac8-8706b9691d36147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Notes",
          "x": 65030,
          "y": -8952,
          "id": "7b984b0f-df05-4527-8ac8-8706b9691d36147528"
        },
        "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Dictionary of\nconcepts",
          "x": 65170,
          "y": -9428,
          "id": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528"
        },
        "67d4560b-b8cd-4dff-9b8e-cd6979bb5efc147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Details, thoughts",
          "x": 65180,
          "y": -8952,
          "id": "67d4560b-b8cd-4dff-9b8e-cd6979bb5efc147528"
        },
        "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Sections",
          "x": 65180,
          "y": -8702,
          "id": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528"
        },
        "50b02362-4c2e-4801-b250-bbb084bf9bb2147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Books",
          "x": 65244,
          "y": -8852,
          "id": "50b02362-4c2e-4801-b250-bbb084bf9bb2147528"
        },
        "92f53a00-cf65-456f-bfcf-6f6c88119d5b147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "R&D institutions",
          "x": 65275,
          "y": -8827,
          "id": "92f53a00-cf65-456f-bfcf-6f6c88119d5b147528"
        },
        "75ff23b4-3d0f-4c06-8061-4069494a326f147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Sites",
          "x": 65240,
          "y": -8802,
          "id": "75ff23b4-3d0f-4c06-8061-4069494a326f147528"
        },
        "1bc92ea3-79ba-4d40-816c-35cedc1c74bf147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Magazines",
          "x": 65259,
          "y": -8777,
          "id": "1bc92ea3-79ba-4d40-816c-35cedc1c74bf147528"
        },
        "2d9049d8-feaf-41cd-afb1-87515557983e147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Articles",
          "x": 65248,
          "y": -8752,
          "id": "2d9049d8-feaf-41cd-afb1-87515557983e147528"
        },
        "51a5b447-fa28-4997-80ca-b7a96a69ef9e147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Media content",
          "x": 65270,
          "y": -8727,
          "id": "51a5b447-fa28-4997-80ca-b7a96a69ef9e147528"
        },
        "8a139418-94d2-4121-94a4-8d2a26213d24147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Misc. web links",
          "x": 65272,
          "y": -8702,
          "id": "8a139418-94d2-4121-94a4-8d2a26213d24147528"
        },
        "76fc5be1-7bae-46ec-a649-1bc6509b378d147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Projects",
          "x": 65250,
          "y": -8677,
          "id": "76fc5be1-7bae-46ec-a649-1bc6509b378d147528"
        },
        "21dc8bf2-6e0c-42cf-b702-d47f24af173a147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Tools",
          "x": 65241,
          "y": -8652,
          "id": "21dc8bf2-6e0c-42cf-b702-d47f24af173a147528"
        },
        "1f9b98e7-ca75-443c-952d-a1d0ba476652147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Organizations",
          "x": 65269,
          "y": -8627,
          "id": "1f9b98e7-ca75-443c-952d-a1d0ba476652147528"
        },
        "f9c77b6e-13d7-4687-9d7f-e858e5cf5685147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Standarts",
          "x": 65255,
          "y": -8602,
          "id": "f9c77b6e-13d7-4687-9d7f-e858e5cf5685147528"
        },
        "945ab5a3-10ef-4a8e-b27c-3cf76f7d8661147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Forums, Groups",
          "x": 65277,
          "y": -8577,
          "id": "945ab5a3-10ef-4a8e-b27c-3cf76f7d8661147528"
        },
        "f13fa072-1d46-45b2-b2b1-679177d88ba6147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Laws",
          "x": 65241,
          "y": -8552,
          "id": "f13fa072-1d46-45b2-b2b1-679177d88ba6147528"
        },
        "ab382182-58b3-4799-ad70-5340f6f6e88d147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Adjacent Themes",
          "x": 65280,
          "y": -8527,
          "id": "ab382182-58b3-4799-ad70-5340f6f6e88d147528"
        },
        "a8fd2573-44a2-4d77-9721-81e1457bc1f0147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Questions",
          "x": 65030,
          "y": -8402,
          "id": "a8fd2573-44a2-4d77-9721-81e1457bc1f0147528"
        },
        "48a4c37a-5708-48fc-9e33-37312999d807147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Problems",
          "x": 65030,
          "y": -8302,
          "id": "48a4c37a-5708-48fc-9e33-37312999d807147528"
        },
        "e4bf19d7-5d83-4383-8b80-0d6bfdf05f46147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Goals",
          "x": 65030,
          "y": -8202,
          "id": "e4bf19d7-5d83-4383-8b80-0d6bfdf05f46147528"
        },
        "849f7b5d-b9aa-4aa2-a527-8b8a5f65471272887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js main page",
          "id": "849f7b5d-b9aa-4aa2-a527-8b8a5f65471272887589935147528",
          "x": 65418,
          "y": -9629,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "7fbacd8e-7cf7-4e33-9ffe-4c7e7ad1766172887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com",
          "id": "7fbacd8e-7cf7-4e33-9ffe-4c7e7ad1766172887589935147528",
          "x": 65655,
          "y": -9629,
          "shape": "box",
          "link": "index.html",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab372887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/base.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab372887589935147528",
          "x": 65688,
          "y": -9485,
          "shape": "box",
          "link": "base.html",
          "borderWidth": ""
        },
        "fecf5e72-1e19-410e-87b8-f36ff58504b672887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Adjacent themes",
          "id": "fecf5e72-1e19-410e-87b8-f36ff58504b672887589935147528",
          "x": 65405,
          "y": -9484,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321072887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/culture.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321072887589935147528",
          "x": 65694,
          "y": -9431,
          "shape": "box",
          "link": "culture.html",
          "borderWidth": ""
        },
        "fecf5e72-1e19-410e-87b8-f36ff58504b621072887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Culture",
          "id": "fecf5e72-1e19-410e-87b8-f36ff58504b621072887589935147528",
          "x": 65375,
          "y": -9430,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Ruby",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887589935147528",
          "x": 65368,
          "y": -9378,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/ruby.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887589935147528",
          "x": 65686,
          "y": -9375,
          "shape": "box",
          "link": "ruby.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Javascript",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514589935147528",
          "x": 65384,
          "y": -9324,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514589935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/javascript.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514589935147528",
          "x": 65702,
          "y": -9321,
          "shape": "box",
          "link": "javascript.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514568089935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Music",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568089935147528",
          "x": 65370,
          "y": -9236,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568089935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/music.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568089935147528",
          "x": 65691,
          "y": -9233,
          "shape": "box",
          "link": "music.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029689935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js code",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029689935147528",
          "x": 65400,
          "y": -9578,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029689935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/mm-vis-js_code.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029689935147528",
          "x": 65722,
          "y": -9581,
          "shape": "box",
          "link": "mm-vis-js_code.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029612089935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Math",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029612089935147528",
          "x": 65368,
          "y": -9183,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612089935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/math.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612089935147528",
          "x": 65688,
          "y": -9184,
          "shape": "box",
          "link": "math.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029648789935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "mm-vis-js docs",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029648789935147528",
          "x": 65399,
          "y": -9533,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029648789935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/mm-vis-js_docs.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029648789935147528",
          "x": 65722,
          "y": -9538,
          "shape": "box",
          "link": "mm-vis-js_docs.html",
          "borderWidth": ""
        },
        "f98845b0-a393-4a51-ba8d-299765f501f215872887514520189935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Python",
          "id": "f98845b0-a393-4a51-ba8d-299765f501f215872887514520189935147528",
          "x": 65374,
          "y": -9278,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514520189935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/python.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514520189935147528",
          "x": 65694,
          "y": -9275,
          "shape": "box",
          "link": "python.html",
          "borderWidth": ""
        },
        "95e449b7-91f7-4eb8-895f-5e763fa2dc3e89935147528": {
          "color": {
            "highlight": {},
            "hover": {}
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Code",
          "id": "95e449b7-91f7-4eb8-895f-5e763fa2dc3e89935147528",
          "x": 65369,
          "y": -9139
        },
        "d4628ef8-97af-4c5a-b900-7c3b16d9d98989935147528": {
          "color": {
            "highlight": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "hover": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "background": "#ffd570",
            "border": "#2B7CE9"
          },
          "fixed": {
            "x": false,
            "y": false
          },
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "Engineering",
          "link": "",
          "x": 65390,
          "y": -9095,
          "id": "d4628ef8-97af-4c5a-b900-7c3b16d9d98989935147528"
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029489935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/code.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029489935147528",
          "x": 65688,
          "y": -9139,
          "shape": "box",
          "link": "code.html",
          "borderWidth": ""
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029443089935147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/engineering.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029443089935147528",
          "x": 65710,
          "y": -9094,
          "shape": "box",
          "link": "engineering.html",
          "borderWidth": ""
        },
        "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359147528": {
          "color": {
            "highlight": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "hover": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "background": "#ffd570"
          },
          "fixed": {
            "x": false,
            "y": false
          },
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "News1",
          "link": "",
          "x": 65374,
          "y": -9054,
          "id": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359147528",
          "shape": "box",
          "borderWidth": "0"
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/news1.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359147528",
          "x": 65693,
          "y": -9053,
          "shape": "box",
          "link": "news1.html",
          "borderWidth": "0"
        },
        "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359111147528": {
          "color": {
            "highlight": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "hover": {
              "border": "#2B7CE9",
              "background": "#D2E5FF"
            },
            "background": "#ffd570"
          },
          "fixed": {
            "x": false,
            "y": false
          },
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "News2",
          "link": "",
          "x": 65374,
          "y": -9019,
          "id": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359111147528",
          "shape": "box",
          "borderWidth": "0"
        },
        "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359111147528": {
          "color": {
            "highlight": {},
            "hover": {},
            "background": "#ffd570"
          },
          "fixed": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {},
            "size": 14,
            "align": "left"
          },
          "icon": {},
          "imagePadding": {},
          "margin": {},
          "scaling": {
            "label": {
              "enabled": false
            }
          },
          "shadow": {
            "enabled": false
          },
          "shapeProperties": {},
          "label": "sushilshik.github.com/news2.html",
          "id": "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359111147528",
          "x": 65693,
          "y": -9018,
          "shape": "box",
          "link": "news2.html",
          "borderWidth": "0"
        }
      },
      "length": 0,
      "_idProp": "id",
      "_type": {}
    },
    "edges": {
      "_subscribers": {
        "*": [],
        "add": [],
        "remove": [],
        "update": []
      },
      "_options": {},
      "_data": {
        "d1be00c9-b7fc-410a-b9fd-b7ea4a0caf9a": {
          "from": "0ca73d64-eabf-4558-8d04-b240259dbb74",
          "to": "fbf5e843-15c9-43e7-af6e-5a0d46bd3088",
          "id": "d1be00c9-b7fc-410a-b9fd-b7ea4a0caf9a"
        },
        "268824a7-0047-4bc1-b1d1-1cfaa8516f2a": {
          "from": "0ca73d64-eabf-4558-8d04-b240259dbb74",
          "to": "1aec8e54-aa06-4194-b655-0d0d9bfdbb77",
          "id": "268824a7-0047-4bc1-b1d1-1cfaa8516f2a"
        },
        "a4560066-0897-49dd-81b2-be2f037ce369": {
          "from": "0ca73d64-eabf-4558-8d04-b240259dbb74",
          "to": "60c2d97b-fdf5-4b9b-b53a-f9d9db63bd6d",
          "id": "a4560066-0897-49dd-81b2-be2f037ce369"
        },
        "8e9aff3c-0e2e-4842-a9a6-3f4aa4e24e6b": {
          "from": "1aec8e54-aa06-4194-b655-0d0d9bfdbb77",
          "to": "a20dd0c9-30ce-4abe-a727-8c975855c9a8",
          "id": "8e9aff3c-0e2e-4842-a9a6-3f4aa4e24e6b"
        },
        "a9dff152-70a5-40fb-ba81-e20d2625d98f": {
          "from": "a20dd0c9-30ce-4abe-a727-8c975855c9a8",
          "to": "43750806-8645-4177-bffc-caa780c3b005",
          "id": "a9dff152-70a5-40fb-ba81-e20d2625d98f"
        },
        "9df9f955-abb6-4b57-95ff-069869c65198913": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9df9f955-abb6-4b57-95ff-069869c65198913",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9913",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88913"
        },
        "9df9f955-abb6-4b57-95ff-069869c65198122": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9df9f955-abb6-4b57-95ff-069869c65198122",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9122",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88122"
        },
        "f57f5fad-a59a-4e4c-94e8-64f17e440d95559": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "label": "code",
          "id": "f57f5fad-a59a-4e4c-94e8-64f17e440d95559",
          "from": "9903a242-2c5d-499c-92d9-995ef46f8a37559",
          "to": "10edfbfa-9872-41cf-90d6-d2f4ffa2cf11559"
        },
        "9df9f955-abb6-4b57-95ff-069869c65198915": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9df9f955-abb6-4b57-95ff-069869c65198915",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9915",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88915"
        },
        "51e5c1b6-9b4b-4cef-aa91-7c73490fcafa28": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "51e5c1b6-9b4b-4cef-aa91-7c73490fcafa28",
          "from": "c8399e46-42dc-4da9-a342-f7f2eab6f63328",
          "to": "e3672d36-d501-41f6-a3eb-388d854ba03c28"
        },
        "6e5ece27-8060-440f-b293-d9eb675affbd878424": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "label": "code",
          "id": "6e5ece27-8060-440f-b293-d9eb675affbd878424",
          "from": "9903a242-2c5d-499c-92d9-995ef46f8a37878424",
          "to": "92c1576f-4811-4b8e-a6b9-ee6d22c62a5a878424"
        },
        "3f4dddb8-4c91-481d-9cd2-b45a00b6ed7975265": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "3f4dddb8-4c91-481d-9cd2-b45a00b6ed7975265",
          "from": "d3454ab9-a273-4420-ad38-0b06f5997f8275265",
          "to": "f81f4061-a7cc-4f5d-9983-e660f227ce8f75265"
        },
        "9df9f955-abb6-4b57-95ff-069869c65198701": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9df9f955-abb6-4b57-95ff-069869c65198701",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9701",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88701"
        },
        "51e5c1b6-9b4b-4cef-aa91-7c73490fcafa472": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "51e5c1b6-9b4b-4cef-aa91-7c73490fcafa472",
          "from": "c8399e46-42dc-4da9-a342-f7f2eab6f633472",
          "to": "e3672d36-d501-41f6-a3eb-388d854ba03c472"
        },
        "05b44fa2-c978-4901-ada1-94fa0f798e6c399574": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "05b44fa2-c978-4901-ada1-94fa0f798e6c399574",
          "from": "a041529a-7ce0-436e-a317-0c0daa8bfb17399574",
          "to": "ffd5c822-a623-4020-8b14-8a2c450d5e9f399574"
        },
        "4a7128fd-8951-4e90-b31c-dae86a66475d": {
          "from": "fbf5e843-15c9-43e7-af6e-5a0d46bd3088",
          "to": "719ccd35-55eb-43fe-962b-494d41485f4c",
          "id": "4a7128fd-8951-4e90-b31c-dae86a66475d"
        },
        "eb2944d0-9df2-4a89-a258-229790edd458": {
          "from": "6206492e-02d2-4a2b-897f-11d315f09296",
          "to": "719ccd35-55eb-43fe-962b-494d41485f4c",
          "id": "eb2944d0-9df2-4a89-a258-229790edd458"
        },
        "45991819-dccc-4d13-a908-bb99c52936bf599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "45991819-dccc-4d13-a908-bb99c52936bf599",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "a858ce52-3291-4b41-bc1e-323abc00749d599"
        },
        "0c1626b9-ee48-48ce-9c61-9b7a6e72cb6d599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "0c1626b9-ee48-48ce-9c61-9b7a6e72cb6d599",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "1d2c3a1c-4005-44be-ba6a-4e7faa0498f3599"
        },
        "7d6ed63a-f2f7-4242-b0bf-6f7788704348599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7d6ed63a-f2f7-4242-b0bf-6f7788704348599",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "b2154aae-1555-4fc5-b664-a36fb0117a54599"
        },
        "c6f6f31a-d1b9-4ef6-aee4-e5ca73b593b7599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "c6f6f31a-d1b9-4ef6-aee4-e5ca73b593b7599",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "875bf84b-8998-48b6-aa65-97ab3bcc5951599"
        },
        "63989505-486d-4609-904d-d8e401e54b8a599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "63989505-486d-4609-904d-d8e401e54b8a599",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "6f3a0058-25a1-49e3-bb7c-3e0c313d5e75599"
        },
        "d620ec5f-ed46-46e5-b940-914f78495a73599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d620ec5f-ed46-46e5-b940-914f78495a73599",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "f0585e53-4afc-4a84-98b6-672c872fd7ca599"
        },
        "344319ce-1a7b-4d6e-9dea-cd98bb1232cb599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "344319ce-1a7b-4d6e-9dea-cd98bb1232cb599",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "6be683b4-143f-4bbd-9a52-734d0a9aa9ba599"
        },
        "6b25f313-2685-484f-a0a5-8149df6d086f599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "6b25f313-2685-484f-a0a5-8149df6d086f599",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "3d509b43-44bc-4983-b8f4-77c19adc7ffa599"
        },
        "24337934-bc5d-4db0-a08b-16ce90fedf38599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "24337934-bc5d-4db0-a08b-16ce90fedf38599",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "b1b5926d-b559-4b69-a20a-4edd19660534599"
        },
        "dd1d8570-51f4-4f63-8909-e816c65976b4599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "dd1d8570-51f4-4f63-8909-e816c65976b4599",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "ea9263df-78a2-4162-8046-d34c3eb8e031599"
        },
        "fc94a4bb-9522-4a0c-8cb2-e8b2263c19cb599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "fc94a4bb-9522-4a0c-8cb2-e8b2263c19cb599",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "540a9870-0529-4b06-9de0-e4de2bc3fc87599"
        },
        "d4e7e0d3-7062-4145-8ae9-d6a2cefb5a59599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d4e7e0d3-7062-4145-8ae9-d6a2cefb5a59599",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "30247f6c-7ed4-4829-af83-9f67b204193f599"
        },
        "dbdc5cec-c7ab-492b-8218-b2d0a6623a62599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "dbdc5cec-c7ab-492b-8218-b2d0a6623a62599",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "485dcd25-0443-407d-8b32-fc640154cad1599"
        },
        "e7e9b954-e521-46e5-9c92-522d2db19c50599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "e7e9b954-e521-46e5-9c92-522d2db19c50599",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "e9c944d0-9a94-419c-8108-8b8c0ca732a1599"
        },
        "6468da12-4d20-401f-9571-30f7409d5474599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "6468da12-4d20-401f-9571-30f7409d5474599",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "ef20c817-4e5b-4850-a554-1a10f9f8a586599"
        },
        "b058e166-8ea3-4ddc-aff6-2b5c8f25e9dd599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b058e166-8ea3-4ddc-aff6-2b5c8f25e9dd599",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "c265228f-7a42-4f5b-ae09-4968e660d922599"
        },
        "b7020290-9911-41c6-8fa3-195a11bdf15d599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b7020290-9911-41c6-8fa3-195a11bdf15d599",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "adf37994-f52f-43fe-8c46-de3d24f49a5f599"
        },
        "b7353b8e-d253-4e03-94a3-990baabfd248599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b7353b8e-d253-4e03-94a3-990baabfd248599",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "eb72029f-bfe4-403d-a720-ff89c2b4f94e599"
        },
        "7295b457-adda-40e5-a522-1c72845be63f599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7295b457-adda-40e5-a522-1c72845be63f599",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "14a16f63-3b55-489f-bf21-ee639776c71c599"
        },
        "d739153c-a816-435b-a4bf-5c73cebf22eb599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d739153c-a816-435b-a4bf-5c73cebf22eb599",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "79a3d8ef-2677-4066-8195-a7096bb31a2c599"
        },
        "a7963213-9289-427f-b0c8-38456ac1e01e599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "a7963213-9289-427f-b0c8-38456ac1e01e599",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "45a42c5a-9f8e-4aa0-804c-4b03bb72a254599"
        },
        "cfeb2798-a7f6-477a-8f0d-8184f6e69474599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "cfeb2798-a7f6-477a-8f0d-8184f6e69474599",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "00e5dcc0-f072-44be-8583-bff8b541528c599"
        },
        "482de2fd-7624-4864-9fdb-843ea21b2538599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "482de2fd-7624-4864-9fdb-843ea21b2538599",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "b64e6583-4e97-4012-8b59-45605fcf3c30599"
        },
        "e0b3c217-a8b3-4610-b8f3-2a31fa5fc2d4599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "e0b3c217-a8b3-4610-b8f3-2a31fa5fc2d4599",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "c7e5c182-bcce-4215-9a2f-f042f5567d95599"
        },
        "cf255e85-e756-40e3-98c3-df3fe19051c7599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "cf255e85-e756-40e3-98c3-df3fe19051c7599",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "bdc909ad-7a0a-4b7c-9ddb-350d61a3cb28599"
        },
        "afff8111-7328-43f5-afdd-8fc24644a9a6599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "afff8111-7328-43f5-afdd-8fc24644a9a6599",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "bebfc265-af1a-4bd3-b618-b996f8c6fc47599"
        },
        "21c476c0-ff5d-40ef-8b3d-93b69cc75c01599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "21c476c0-ff5d-40ef-8b3d-93b69cc75c01599",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "a4be31b6-786a-45f8-adb6-995d112e9fa1599"
        },
        "48bc8e3e-a2e4-46a0-8e1d-077ca0f5feda599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "48bc8e3e-a2e4-46a0-8e1d-077ca0f5feda599",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "cc72c521-c59e-4a03-9607-fe4fd1f25067599"
        },
        "662d5e81-f87c-453b-82db-b7e96650e7f1599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "662d5e81-f87c-453b-82db-b7e96650e7f1599",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "db3146fe-8ec6-4f24-ac7a-9f05efcffa49599"
        },
        "932f4d53-30a3-4ac4-a07d-f8d4003da34c599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "932f4d53-30a3-4ac4-a07d-f8d4003da34c599",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "fd17ade9-7b15-4cea-9c53-189aa20c38a6599"
        },
        "00dc4db0-84b0-421d-9266-466a506f7331599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "00dc4db0-84b0-421d-9266-466a506f7331599",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "00a0641a-c61f-46bc-bd60-e81d02e75ad9599"
        },
        "3dcfd49f-46d2-4052-80b1-03684ba861c5599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "3dcfd49f-46d2-4052-80b1-03684ba861c5599",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "67990e1d-413a-4116-8e64-33fa6fa616a5599"
        },
        "6e4a34f5-4d6d-452a-864f-66b0d7a3cea8599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "6e4a34f5-4d6d-452a-864f-66b0d7a3cea8599",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "e00c5d93-cc4f-43a3-b22f-ebab9d8b9cda599"
        },
        "6e1665c0-18a9-4537-a195-f9425c9a4d94599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "6e1665c0-18a9-4537-a195-f9425c9a4d94599",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "35189674-5251-47c2-8acb-ba0ca3a38a26599"
        },
        "4fbc3b8b-8caf-4e44-8834-d91fb0168cad599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "4fbc3b8b-8caf-4e44-8834-d91fb0168cad599",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "b4397b69-3768-41f5-bedf-b1ffc2de9d66599"
        },
        "34f689c8-9f7b-4b8b-9719-ac97d759b9a3599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "34f689c8-9f7b-4b8b-9719-ac97d759b9a3599",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "e242adb4-77ba-452a-81c6-d29edd117075599"
        },
        "389c69fb-d8c5-41f6-8e18-98d6a6158460599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "389c69fb-d8c5-41f6-8e18-98d6a6158460599",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "ab18673b-0441-4828-8c38-1f22228818cb599"
        },
        "c21871ea-59a8-4ec9-8268-d01734352eb6599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "c21871ea-59a8-4ec9-8268-d01734352eb6599",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "b88d763f-3f02-4590-aa42-b5f138d1d6d1599"
        },
        "27d8c64a-736a-4673-ae5c-702ac8f82158599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "27d8c64a-736a-4673-ae5c-702ac8f82158599",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "5adc140a-4307-4c4b-ad4a-a31f2f27d7f0599"
        },
        "8ff310fb-ba70-4d25-b3e5-af056dd3c252599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "8ff310fb-ba70-4d25-b3e5-af056dd3c252599",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "94fa4c3d-89fc-43ad-8eff-5a7f044e8e25599"
        },
        "b5d16f94-76e0-420f-981b-99202216ef3d599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b5d16f94-76e0-420f-981b-99202216ef3d599",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "cac322b9-d1bc-4eaf-be51-ae4c583bd337599"
        },
        "10990291-a479-4b99-b6c0-46e3b620b774599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "10990291-a479-4b99-b6c0-46e3b620b774599",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "c71b6ede-4669-4326-a206-63742e8af265599"
        },
        "7b013ec6-cfd1-4059-9721-8ef01fb67bba599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7b013ec6-cfd1-4059-9721-8ef01fb67bba599",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "d8e65f72-2f61-47d5-8e6e-d970b389546d599"
        },
        "d42fc621-c726-44d7-bece-b2f38d006034599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d42fc621-c726-44d7-bece-b2f38d006034599",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "1315cca2-e03a-4a68-932d-7e05b684b177599"
        },
        "ae89bf7e-7e44-4543-b11b-78fadad19462599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "ae89bf7e-7e44-4543-b11b-78fadad19462599",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "a23a4bc4-0f26-496e-8284-45480d76785e599"
        },
        "a7eeec56-0f5f-4858-bab3-6501d051e2dc599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "a7eeec56-0f5f-4858-bab3-6501d051e2dc599",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "2aafb4ef-0844-4800-98cc-51b8a998a39b599"
        },
        "66de5b1f-f947-49f2-bc3b-b78c06d5d781599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "66de5b1f-f947-49f2-bc3b-b78c06d5d781599",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "d7d7962a-5c28-4418-becb-354b4c65fe67599"
        },
        "38e98681-d5d8-4df6-ae25-f1929ea306e7599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "38e98681-d5d8-4df6-ae25-f1929ea306e7599",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "06ec767f-d46a-422b-afd8-9c976177546d599"
        },
        "00b69f83-662e-4ac7-8aff-fe810a21c656599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "00b69f83-662e-4ac7-8aff-fe810a21c656599",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "9426e27d-7952-4737-bde7-d18abb70d1b8599"
        },
        "43ad996e-7edc-4603-bb5f-95d4597cb6d9599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "43ad996e-7edc-4603-bb5f-95d4597cb6d9599",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "2ddaedcd-38fc-41dd-8761-cfa59af3be65599"
        },
        "706d2086-1a90-41ad-a402-a1e6a0b8b286599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "706d2086-1a90-41ad-a402-a1e6a0b8b286599",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "005e3a03-ee76-4234-957f-724274eb48e8599"
        },
        "f693a8c0-ebcf-459f-9c4e-e32a89321c05599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "f693a8c0-ebcf-459f-9c4e-e32a89321c05599",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "1dfe2726-cc38-4f05-98c0-cebe0af44fcc599"
        },
        "4a7f4b7d-7f84-418e-abc5-074ad06d5327599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "4a7f4b7d-7f84-418e-abc5-074ad06d5327599",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "f718316c-a935-4aae-b4ac-37007d7f48bf599"
        },
        "046ffdf5-276e-4a86-8fed-5b7a83a49f9f599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "046ffdf5-276e-4a86-8fed-5b7a83a49f9f599",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "0888aae1-0912-4263-8c50-084634a983c5599"
        },
        "e177d78e-8d89-406a-87a5-29145aa6deaf599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "e177d78e-8d89-406a-87a5-29145aa6deaf599",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "d0553eab-fb1d-4205-8086-4d0e65caeeb5599"
        },
        "1df4b86f-9f63-4f36-acbe-a65bee15003e599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "1df4b86f-9f63-4f36-acbe-a65bee15003e599",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "94821b7c-d6f0-4095-a834-bc1607785cc7599"
        },
        "088c36c2-60fa-4afd-aa6a-79c121b04eab599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "088c36c2-60fa-4afd-aa6a-79c121b04eab599",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "5d497d7e-3ed2-48a0-a64b-d03ac83c3a72599"
        },
        "d2e0b1a4-a1e6-440d-b960-f4787eb4e4fd599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d2e0b1a4-a1e6-440d-b960-f4787eb4e4fd599",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "16f918a0-000f-4f18-958a-c5a7a58bd024599"
        },
        "ef071362-6810-4d24-b323-a76f23730de4599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "ef071362-6810-4d24-b323-a76f23730de4599",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "221b1475-d6f4-43d1-be40-c02fb677addf599"
        },
        "b4efe17b-118c-4a97-80da-f0bf27cd9ca9599": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b4efe17b-118c-4a97-80da-f0bf27cd9ca9599",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "a314c3d9-0b2f-4a07-8212-f715e12da323599"
        },
        "525c6f0a-44c3-4f78-a881-e633ed774625580": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "525c6f0a-44c3-4f78-a881-e633ed774625580",
          "from": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd74580",
          "to": "7eba903e-480c-4604-a071-464edc0989fe580"
        },
        "9df9f955-abb6-4b57-95ff-069869c65198399420": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "9df9f955-abb6-4b57-95ff-069869c65198399420",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9399420",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88399420"
        },
        "e7200e23-f2a4-4893-b80d-c71c37d67d1f8": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "e7200e23-f2a4-4893-b80d-c71c37d67d1f8",
          "from": "7eba903e-480c-4604-a071-464edc0989fe8",
          "to": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd745808"
        },
        "2fc99d20-60af-4490-8c14-2a6a8dc4379e339": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "2fc99d20-60af-4490-8c14-2a6a8dc4379e339",
          "from": "fe89498b-1143-4625-85e9-cbfa050f660f108339",
          "to": "2b5a7e21-bbe0-4e0b-87b1-6a5cac35d9be339"
        },
        "d965674d-3912-453a-ab94-ccc64bd560ed666": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d965674d-3912-453a-ab94-ccc64bd560ed666",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "457030de-cfe6-4d37-a7a6-d6866381297c666"
        },
        "bae56b7e-5fc5-4265-8af8-b1ffd0ddf067666": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "bae56b7e-5fc5-4265-8af8-b1ffd0ddf067666",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "ede118f3-6655-436d-8d21-3068e3514e1e666"
        },
        "79e699d4-810c-45fd-969e-1ce5efae414f666": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "79e699d4-810c-45fd-969e-1ce5efae414f666",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666"
        },
        "0a2068dd-7b76-49b0-a9b8-a44e0e0cbd49666": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "0a2068dd-7b76-49b0-a9b8-a44e0e0cbd49666",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "69d20fc0-db34-4a47-8b7d-e5b52c4f661a666"
        },
        "ebcd3298-31f3-4015-8a3d-68190a3a4def666": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "ebcd3298-31f3-4015-8a3d-68190a3a4def666",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "9414c1cb-211f-40c9-98ee-daa5fbd666e6666"
        },
        "388aaf4c-0c7e-49c5-8bb4-48d7566d0cd9296": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "388aaf4c-0c7e-49c5-8bb4-48d7566d0cd9296",
          "from": "ede118f3-6655-436d-8d21-3068e3514e1e666296",
          "to": "f9916ce1-34a1-4874-8ea0-83b1b3f8c73a296"
        },
        "9693c373-89d3-4cb9-b2a4-5dad09a96266799": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9693c373-89d3-4cb9-b2a4-5dad09a96266799",
          "from": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666799",
          "to": "143d527a-8e6c-4fdc-8a06-25574e14b5ee799"
        },
        "9e688b6f-636a-4868-94a4-806e5700bb21799": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9e688b6f-636a-4868-94a4-806e5700bb21799",
          "from": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666799",
          "to": "9bfe0b09-35bd-4640-b368-cc91880af162799"
        },
        "9245989b-89e7-4311-9433-27fd3fe4d372584": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "9245989b-89e7-4311-9433-27fd3fe4d372584",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "b1516f1d-8173-4439-be0a-1d1b8587c8ac584"
        },
        "85b7fb68-4af5-4e70-ad3b-646153dba24d584": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "85b7fb68-4af5-4e70-ad3b-646153dba24d584",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "d510d77a-7df9-49d1-a5c7-a1e0f64e40d4584"
        },
        "401e845d-0176-4a47-9ed9-61ff1cba7a50584": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "401e845d-0176-4a47-9ed9-61ff1cba7a50584",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "5a22a7a8-8a48-4e88-9aff-b6c68fae7a35584"
        },
        "7c37425e-e131-44d2-9324-1b98ce26406f584": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7c37425e-e131-44d2-9324-1b98ce26406f584",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "5d7e88aa-6943-40a1-bbf2-c1a32f1ddaf9584"
        },
        "d41565f5-ced5-408d-aef7-9b0a61187019584": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "d41565f5-ced5-408d-aef7-9b0a61187019584",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "d8f1645d-246b-4db7-8971-c64250f5f71e584"
        },
        "23839d01-913e-42a0-8bdf-4ebd721cb474402": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "23839d01-913e-42a0-8bdf-4ebd721cb474402",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "0d9b0c9d-5846-4d1d-9b44-fd073848c4ba402"
        },
        "bcc0ece1-31d1-4faf-b407-3a0dfd980cb3402": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "bcc0ece1-31d1-4faf-b407-3a0dfd980cb3402",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "77ad5196-96c8-4172-b9c3-f0588b30032a402"
        },
        "dddb8063-f990-4e64-82f1-cb4414a4752e402": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "dddb8063-f990-4e64-82f1-cb4414a4752e402",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "ec5a58b9-22fe-49c5-8872-3e0c6b0f951b402"
        },
        "b448e92a-1986-4d25-aeef-1281c217a5a1402": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b448e92a-1986-4d25-aeef-1281c217a5a1402",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "c80bd334-b60c-4868-ae4e-f0c57af0b219402"
        },
        "08c2fbd8-ab79-4271-aedd-50a81bcdc27c402": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "08c2fbd8-ab79-4271-aedd-50a81bcdc27c402",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "9b55c90d-ccdb-48bf-8b44-df6b0916e979402"
        },
        "ea064353-63a5-49e7-ae63-cc3918783256559": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "ea064353-63a5-49e7-ae63-cc3918783256559",
          "from": "c265228f-7a42-4f5b-ae09-4968e660d922559",
          "to": "72a29b77-7945-40c7-aabf-56d95597916b559"
        },
        "665a7224-9a65-46be-aa0f-e37f63262455559": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "665a7224-9a65-46be-aa0f-e37f63262455559",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b559",
          "to": "01833143-dc1d-4f15-b6dc-71d4232a5dca559"
        },
        "7d705701-9080-49ca-a213-07928563a872559": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7d705701-9080-49ca-a213-07928563a872559",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b559",
          "to": "bbfa4068-4e91-4d81-aa66-b3a75c20e228559"
        },
        "7d705701-9080-49ca-a213-07928563a872263": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "7d705701-9080-49ca-a213-07928563a872263",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b263",
          "to": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263"
        },
        "c8115723-69d7-4f78-85fe-a18fd553ec2b263": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "c8115723-69d7-4f78-85fe-a18fd553ec2b263",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263",
          "to": "d723c162-2431-49ca-b38c-70f18ac64ca1263"
        },
        "32668fce-fa1f-4424-bde0-9a70d009a410263": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "32668fce-fa1f-4424-bde0-9a70d009a410263",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263",
          "to": "65a326ea-1281-41f1-9352-6cb0a9e6a2c8263"
        },
        "c8115723-69d7-4f78-85fe-a18fd553ec2b678": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "c8115723-69d7-4f78-85fe-a18fd553ec2b678",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228678",
          "to": "d723c162-2431-49ca-b38c-70f18ac64ca1678"
        },
        "59cdebc0-539c-4400-9ade-47e2b09c50be182953517": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "label": "code",
          "id": "59cdebc0-539c-4400-9ade-47e2b09c50be182953517",
          "from": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd74580182953517",
          "to": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd745808182953517"
        },
        "739488d1-f473-4b27-ae2d-f64b8cae9121709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "739488d1-f473-4b27-ae2d-f64b8cae9121709204",
          "from": "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204",
          "to": "063a7ffc-4975-4000-9c73-2c221ec4f7f5709204"
        },
        "9fbed09f-c6d4-4f98-ad69-ca8152fd9545709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "9fbed09f-c6d4-4f98-ad69-ca8152fd9545709204",
          "from": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "to": "fc346e19-9d86-4596-835b-11f1f755d865709204"
        },
        "0f0e9853-be20-4714-93d2-c1be964aced9709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "0f0e9853-be20-4714-93d2-c1be964aced9709204",
          "from": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "to": "56b1d0ac-f667-4a67-948e-fe51b137da35709204"
        },
        "fe3b1e66-77e3-4a39-bf0c-64967c5c7008709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "fe3b1e66-77e3-4a39-bf0c-64967c5c7008709204",
          "from": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "to": "675504dd-4410-45b0-a5ec-0bac8ce4a540709204"
        },
        "3834ea5f-b5c0-4a92-a688-a9d54cd9b189709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "3834ea5f-b5c0-4a92-a688-a9d54cd9b189709204",
          "from": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "to": "51096979-4e09-49c1-bed3-08a4925d2ebf709204"
        },
        "1da14520-f617-4a2b-92db-00ecc258f30e709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "1da14520-f617-4a2b-92db-00ecc258f30e709204",
          "from": "5f08e9b3-be39-411a-9b7a-67703314f3e9709204",
          "to": "224747ed-bc32-4069-ab0d-8c3f13f8a51a709204"
        },
        "7a5dc97a-5172-46c5-abfc-907e59dd3f57709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "7a5dc97a-5172-46c5-abfc-907e59dd3f57709204",
          "from": "fc346e19-9d86-4596-835b-11f1f755d865709204",
          "to": "4e8d23e0-2916-468f-ab10-7887edd29781709204"
        },
        "b47cf956-4fc8-410c-a27b-890a2b8ce99d709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "b47cf956-4fc8-410c-a27b-890a2b8ce99d709204",
          "from": "4e8d23e0-2916-468f-ab10-7887edd29781709204",
          "to": "9e05bed3-bcfb-461c-8782-cbb50e700f2b709204"
        },
        "e447e12f-0b96-4856-b01e-a6127cb4d22a709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "e447e12f-0b96-4856-b01e-a6127cb4d22a709204",
          "from": "56b1d0ac-f667-4a67-948e-fe51b137da35709204",
          "to": "f9d3919c-5ba4-4e33-afd7-f6321b559d96709204"
        },
        "a4e76f47-ad11-4d3e-998e-29f72021036a709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "a4e76f47-ad11-4d3e-998e-29f72021036a709204",
          "from": "56b1d0ac-f667-4a67-948e-fe51b137da35709204",
          "to": "52715514-7cae-4783-a55f-e207e1ce5e23709204"
        },
        "cc912388-91a2-4f5b-a1c1-57e5bffbf4ed709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "cc912388-91a2-4f5b-a1c1-57e5bffbf4ed709204",
          "from": "56b1d0ac-f667-4a67-948e-fe51b137da35709204",
          "to": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204"
        },
        "42f95ef8-a15c-4c49-b82a-aaa895bb5413709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "42f95ef8-a15c-4c49-b82a-aaa895bb5413709204",
          "from": "f9d3919c-5ba4-4e33-afd7-f6321b559d96709204",
          "to": "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204"
        },
        "bbac013a-5252-4fdc-b13d-e06e65527337204": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "bbac013a-5252-4fdc-b13d-e06e65527337204",
          "from": "52715514-7cae-4783-a55f-e207e1ce5e23709204",
          "to": "ea25b7ca-7308-4e5d-8d23-becf10837170204"
        },
        "8ce62bba-3a0d-4c42-ab7c-f96fb6868cf4709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "8ce62bba-3a0d-4c42-ab7c-f96fb6868cf4709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "43c7b180-f8c6-452f-9346-94265b43c0bc709204"
        },
        "5531c984-3c8c-4897-a6c6-6fd1b7ce4433709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "5531c984-3c8c-4897-a6c6-6fd1b7ce4433709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "a6573a2a-17e3-4e51-803a-c79be735c907709204"
        },
        "6d7ebde2-d92a-487d-886a-c63e56b8a63b709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "6d7ebde2-d92a-487d-886a-c63e56b8a63b709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "5957177d-5884-4cdf-a0a2-95fedfd8f6ce709204"
        },
        "ee986d87-b78e-42d6-87a7-c5fa82e00e29709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "ee986d87-b78e-42d6-87a7-c5fa82e00e29709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "71d85620-d7c1-4f72-b9b3-178f20566934709204"
        },
        "d344eb8f-c464-4808-9675-2e2b262137cd709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "d344eb8f-c464-4808-9675-2e2b262137cd709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "8261ea62-4460-4d13-856e-11a89da34460709204"
        },
        "1a63709c-2e5e-4488-bb06-681fd7c79ce6709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "1a63709c-2e5e-4488-bb06-681fd7c79ce6709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "c9e649eb-9d6f-4a97-a581-25bc23fb2dc6709204"
        },
        "025e0784-ca61-4ed5-956a-07f8d2a851bb709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "025e0784-ca61-4ed5-956a-07f8d2a851bb709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "87acae29-26a1-4dae-aa6c-dad83e7b8983709204"
        },
        "a159d71b-6977-4cd4-a80b-68c7a9beec8c709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "a159d71b-6977-4cd4-a80b-68c7a9beec8c709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "7ca3ffa3-5554-46fb-9e4c-21aaa8768493709204"
        },
        "f0cbc2f2-39bb-4ed9-9c08-d9e10e37bc15709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "f0cbc2f2-39bb-4ed9-9c08-d9e10e37bc15709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "b850ef03-dd7d-48b9-ba43-0ab91574cb14709204"
        },
        "cc3ebd03-ee47-49b1-88ef-3b652e8d7534709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "cc3ebd03-ee47-49b1-88ef-3b652e8d7534709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "42b59714-b915-4351-8615-f73dea998d39709204"
        },
        "03e29177-189b-4608-831a-ea6006e6f3c5709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "03e29177-189b-4608-831a-ea6006e6f3c5709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "f2417b15-6f28-4533-8d5c-9e91123a14b2709204"
        },
        "4a26487d-7f87-4cba-abab-2131a5ad32f2709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "4a26487d-7f87-4cba-abab-2131a5ad32f2709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "e99e9a6f-f6e1-4312-b003-5878d908f3ce709204"
        },
        "b394c4e1-0ee6-4349-9e83-be63c4764833709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "b394c4e1-0ee6-4349-9e83-be63c4764833709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "f9a78cba-3904-49d3-b0da-72dbf64df687709204"
        },
        "f3cbc39e-8e6c-457d-a2cc-cdae5d5e0a35709204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "f3cbc39e-8e6c-457d-a2cc-cdae5d5e0a35709204",
          "from": "e1f0744d-f4b7-4f43-84f9-a114877eb9a9709204",
          "to": "518a2b66-f38b-49a4-9220-52cbdd3a9370709204"
        },
        "db39f683-ed11-4611-9619-302a19c837b7204": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "db39f683-ed11-4611-9619-302a19c837b7204",
          "from": "ea25b7ca-7308-4e5d-8d23-becf10837170204",
          "to": "d6a2f6ee-56a5-4221-be38-49c0a8364a7196204"
        },
        "66696604-9e7d-4bef-b9d0-dc9a36d210e7204": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "66696604-9e7d-4bef-b9d0-dc9a36d210e7204",
          "from": "ea25b7ca-7308-4e5d-8d23-becf10837170204",
          "to": "604289ab-7ae3-4401-afdc-44d012b2609c96204"
        },
        "0678e313-93f8-4397-b556-b227cbae79ef204": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "0678e313-93f8-4397-b556-b227cbae79ef204",
          "from": "ea25b7ca-7308-4e5d-8d23-becf10837170204",
          "to": "d98ac5d1-b4ad-4662-9dfb-3c02ee567ced96204"
        },
        "66e8d904-5b93-444b-a686-54e1db475a2f96204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "66e8d904-5b93-444b-a686-54e1db475a2f96204",
          "from": "d6a2f6ee-56a5-4221-be38-49c0a8364a7196204",
          "to": "52aee244-a92a-41a3-8b71-373d541e660d96204"
        },
        "207e187e-3dbe-4189-a331-3f0f212580f596204": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "207e187e-3dbe-4189-a331-3f0f212580f596204",
          "from": "d6a2f6ee-56a5-4221-be38-49c0a8364a7196204",
          "to": "8dcd7da6-9174-4a9a-92df-19ac2ef2574596204"
        },
        "8dcb3bae-502c-4dc4-afe0-f35522353573210": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "8dcb3bae-502c-4dc4-afe0-f35522353573210",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1210",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6210"
        },
        "75d06216-2c87-440a-8605-25700d9528c0": {
          "from": "60c2d97b-fdf5-4b9b-b53a-f9d9db63bd6d",
          "to": "2fe50647-80d4-4a27-86a6-4d5f56887b54",
          "id": "75d06216-2c87-440a-8605-25700d9528c0"
        },
        "5ac63bc8-8f12-4e01-a148-4b233a868af4": {
          "from": "2fe50647-80d4-4a27-86a6-4d5f56887b54",
          "to": "e5029dc5-2b59-4e89-96dd-ab5b51badb88",
          "id": "5ac63bc8-8f12-4e01-a148-4b233a868af4"
        },
        "06829fef-1a55-45e8-8bbe-b07724daf24f281": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "06829fef-1a55-45e8-8bbe-b07724daf24f281",
          "from": "04e78b73-13a2-490c-98e1-ac7755f8bf1f936281",
          "to": "62788897-754a-4ee0-ba6a-b45277e087c0281"
        },
        "08e4072a-c92e-4b9e-97c8-7a0a0d089a79690": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "08e4072a-c92e-4b9e-97c8-7a0a0d089a79690",
          "from": "66ad461f-62cf-40fb-9110-104c2484874c690",
          "to": "3bdafb97-29b0-429c-8fa8-7017155935d7690"
        },
        "f6e4ba05-8509-45ae-9c07-10a8aaacce5e690": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "f6e4ba05-8509-45ae-9c07-10a8aaacce5e690",
          "from": "66ad461f-62cf-40fb-9110-104c2484874c690",
          "to": "291ac173-2642-4077-a339-2f7a9352ba80690"
        },
        "739488d1-f473-4b27-ae2d-f64b8cae9121709204339": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "739488d1-f473-4b27-ae2d-f64b8cae9121709204339",
          "from": "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204339",
          "to": "063a7ffc-4975-4000-9c73-2c221ec4f7f5709204339"
        },
        "23ebf29c-c249-47f7-9e67-158c728083b5365": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "23ebf29c-c249-47f7-9e67-158c728083b5365",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609365",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2365"
        },
        "b8715cf0-8576-474c-973e-1df4154d7c90846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "b8715cf0-8576-474c-973e-1df4154d7c90846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "849f7b5d-b9aa-4aa2-a527-8b8a5f654712728875846"
        },
        "cd5abf9d-8c77-412a-a248-4308e38e4441846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "cd5abf9d-8c77-412a-a248-4308e38e4441846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6728875846"
        },
        "bde29f6d-4313-4885-abf4-9934357177de846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "bde29f6d-4313-4885-abf4-9934357177de846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6210728875846"
        },
        "1a82afe8-ef11-43f5-86c3-d55bf347e4e8846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "1a82afe8-ef11-43f5-86c3-d55bf347e4e8846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875846"
        },
        "a0c08cab-00b2-4c3f-b225-8208d231f280846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "a0c08cab-00b2-4c3f-b225-8208d231f280846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145846"
        },
        "771a4cfd-e6be-4ec4-9cea-18d2e8322ac9846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "771a4cfd-e6be-4ec4-9cea-18d2e8322ac9846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680846"
        },
        "dcd3bdef-f862-4711-9fa0-444b102cbebd846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "dcd3bdef-f862-4711-9fa0-444b102cbebd846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680296846"
        },
        "6a7af8db-6c70-4874-aa0a-b3a9fb616a0a846": {
          "arrows": {
            "to": {},
            "middle": {},
            "from": {}
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {},
          "background": {},
          "smooth": {},
          "id": "6a7af8db-6c70-4874-aa0a-b3a9fb616a0a846",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680296120846"
        },
        "4fda4b0f-fcf6-432c-bdae-b4218d9bbd87": {
          "from": "2586740f-f45f-43f1-84ee-7367d6575411",
          "to": "424e2d87-0ce4-449b-80f6-74672c34845f",
          "id": "4fda4b0f-fcf6-432c-bdae-b4218d9bbd87"
        },
        "43b350c8-f72d-42e7-b393-04dee968b615": {
          "from": "424e2d87-0ce4-449b-80f6-74672c34845f",
          "to": "99a6d30c-79db-429d-a85e-8859acd45353",
          "id": "43b350c8-f72d-42e7-b393-04dee968b615"
        },
        "aa1c904c-c1d9-4817-a512-775527c60020": {
          "from": "99a6d30c-79db-429d-a85e-8859acd45353",
          "to": "95130e48-8e3f-45e1-b29f-e094efdde51d",
          "id": "aa1c904c-c1d9-4817-a512-775527c60020"
        },
        "727daa3d-d52a-4276-a5f7-bce0e7a73a56": {
          "from": "2586740f-f45f-43f1-84ee-7367d6575411",
          "to": "f786b8ed-1757-4a5a-a572-d6834b9764d9",
          "id": "727daa3d-d52a-4276-a5f7-bce0e7a73a56"
        },
        "01aba7cf-8511-41a3-90fe-10ee0130ea50": {
          "from": "f786b8ed-1757-4a5a-a572-d6834b9764d9",
          "to": "d0dca287-3c0c-4bcf-8052-22a2e73e0c9c",
          "id": "01aba7cf-8511-41a3-90fe-10ee0130ea50"
        },
        "df8ed7c2-614e-4fde-84ce-40a3ef70cfd0": {
          "from": "f786b8ed-1757-4a5a-a572-d6834b9764d9",
          "to": "8f0bcaf0-4ae2-4e49-8b9d-806e2e730cef",
          "id": "df8ed7c2-614e-4fde-84ce-40a3ef70cfd0"
        },
        "76c093a7-1608-4f7e-98f5-176d0445310e": {
          "from": "f786b8ed-1757-4a5a-a572-d6834b9764d9",
          "to": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "id": "76c093a7-1608-4f7e-98f5-176d0445310e"
        },
        "06e3f596-4ef7-4dcd-8655-16b1025ebf0e": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "c78638f9-a985-47e8-9586-71abfa28e1d1",
          "id": "06e3f596-4ef7-4dcd-8655-16b1025ebf0e"
        },
        "22601f89-b09b-4bbe-b86c-18334993d874": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "b7eab120-d540-4e87-8bc3-42f821800aa0",
          "id": "22601f89-b09b-4bbe-b86c-18334993d874"
        },
        "dca1b1ad-6c6a-4400-9e64-e727b29ec3e4": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "e888bc0c-8860-4fce-97df-e795b13582c5",
          "id": "dca1b1ad-6c6a-4400-9e64-e727b29ec3e4"
        },
        "0b1fa7ab-9d10-4034-a599-3f44efeab609": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "ba7b85f0-308e-4bea-a618-6c235d91fbc2",
          "id": "0b1fa7ab-9d10-4034-a599-3f44efeab609"
        },
        "6819d12c-a31f-465f-91d7-53413c925ec7": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "f894faf7-7ef9-4331-8a4b-71e3a24fdedf",
          "id": "6819d12c-a31f-465f-91d7-53413c925ec7"
        },
        "45ad6e87-60d1-4f72-ab12-3c5e0995aaf4": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "078c4a47-d461-4fe2-a395-c4bb70313e4c",
          "id": "45ad6e87-60d1-4f72-ab12-3c5e0995aaf4"
        },
        "95dbd072-fc0b-4193-b404-6112094af9d1": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "f7ae470a-6a15-49fa-ba2b-56feede9eddb",
          "id": "95dbd072-fc0b-4193-b404-6112094af9d1"
        },
        "e51e1c0b-8369-4aba-80cb-3f72926b8a29": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "1277050b-b35d-4d5f-ad65-175c188e4071",
          "id": "e51e1c0b-8369-4aba-80cb-3f72926b8a29"
        },
        "952abbbb-a623-4a97-a5d0-d71f63d5b0f7": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "3b04ea53-367f-4c01-8aba-a3252684b0f0",
          "id": "952abbbb-a623-4a97-a5d0-d71f63d5b0f7"
        },
        "6e8f1f90-ea92-42fd-b62c-46faa8bdde59": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "dc8576d9-0b7d-4f20-b7a2-9c23d73ab21b",
          "id": "6e8f1f90-ea92-42fd-b62c-46faa8bdde59"
        },
        "9cd6d815-990c-4234-b19b-70254e372368": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "5783c61f-7fce-4979-b746-f570332aca4f",
          "id": "9cd6d815-990c-4234-b19b-70254e372368"
        },
        "eeeaa33b-f1f2-4a4f-be19-b9a571db39cc": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "fdca94f5-7ffc-4453-8e76-9a650378590f",
          "id": "eeeaa33b-f1f2-4a4f-be19-b9a571db39cc"
        },
        "a2b9e685-a7f7-4dac-bec5-2c0b5835b3b7": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "d7ace64e-d35f-41c2-8bc1-dd0d7855c153",
          "id": "a2b9e685-a7f7-4dac-bec5-2c0b5835b3b7"
        },
        "d68ab456-0cca-4140-b366-89a453fc4884": {
          "from": "e32e58e3-a889-4ee9-87ea-24a6a3805867",
          "to": "d590ec9f-e6bf-4eba-a732-e8c91098f55d",
          "id": "d68ab456-0cca-4140-b366-89a453fc4884"
        },
        "31ee43f9-75e9-4c34-a009-a40c34d39a2e": {
          "from": "2586740f-f45f-43f1-84ee-7367d6575411",
          "to": "1aad28f4-4aa5-4d84-9550-69d12df8ffcb",
          "id": "31ee43f9-75e9-4c34-a009-a40c34d39a2e"
        },
        "d805d2ca-536d-492b-a6ad-9113ffbea19c": {
          "from": "2586740f-f45f-43f1-84ee-7367d6575411",
          "to": "4fa15c23-c4b2-4055-8b36-f7f526e3a807",
          "id": "d805d2ca-536d-492b-a6ad-9113ffbea19c"
        },
        "95d6c691-1295-4c32-8060-02291c581d76": {
          "from": "2586740f-f45f-43f1-84ee-7367d6575411",
          "to": "d5dc6a46-bb7b-4517-a2be-6b8fc723d9fd",
          "id": "95d6c691-1295-4c32-8060-02291c581d76"
        },
        "b26934a7-f333-4f55-8518-4679808ef039": {
          "from": "d0dca287-3c0c-4bcf-8052-22a2e73e0c9c",
          "to": "745f5e66-b803-40af-b32a-b5b04a584992",
          "id": "b26934a7-f333-4f55-8518-4679808ef039"
        },
        "68b06741-54eb-41cb-8abe-e512761ed1c6": {
          "from": "84029a64-45cf-4807-a7a9-ff33cf1a1aff",
          "to": "af180ca8-bce6-4e4a-8111-af53e1d7acc0",
          "id": "68b06741-54eb-41cb-8abe-e512761ed1c6"
        },
        "bd59aafb-258d-460d-a54a-e40688d5e462": {
          "from": "745f5e66-b803-40af-b32a-b5b04a584992",
          "to": "2855cd83-6c03-4407-a6d5-1269e1071e31",
          "id": "bd59aafb-258d-460d-a54a-e40688d5e462"
        },
        "c1f1bd87-d4ab-4001-aa07-428cdd4fe293": {
          "from": "745f5e66-b803-40af-b32a-b5b04a584992",
          "to": "9db8ad1e-556e-4198-9671-2373e5d0c720",
          "id": "c1f1bd87-d4ab-4001-aa07-428cdd4fe293"
        },
        "1b75024a-7b50-4536-b02d-ce06031e9046": {
          "from": "745f5e66-b803-40af-b32a-b5b04a584992",
          "to": "84029a64-45cf-4807-a7a9-ff33cf1a1aff",
          "id": "1b75024a-7b50-4536-b02d-ce06031e9046"
        },
        "3b614791-22df-4523-b87b-6ac375ddc845": {
          "from": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "to": "d9672db0-1eb0-43e2-a15a-c740ce138ac1",
          "id": "3b614791-22df-4523-b87b-6ac375ddc845"
        },
        "f18b62ad-e0f4-4970-93da-7a822d17734a": {
          "from": "d9672db0-1eb0-43e2-a15a-c740ce138ac1",
          "to": "e3acdd8f-e464-4773-b75f-5533491826b0",
          "id": "f18b62ad-e0f4-4970-93da-7a822d17734a"
        },
        "680c6c4b-533c-45af-ad39-3a6a95e8ea18": {
          "from": "e3acdd8f-e464-4773-b75f-5533491826b0",
          "to": "781873e6-c44e-4a99-9224-73ff50beb551",
          "id": "680c6c4b-533c-45af-ad39-3a6a95e8ea18"
        },
        "509b7bf5-db4c-4e01-8a4d-927dd8153efd": {
          "from": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "to": "9cc8adcf-84b0-4c19-b526-66aba9e8869c",
          "id": "509b7bf5-db4c-4e01-8a4d-927dd8153efd"
        },
        "3f6b72d6-885d-442b-9789-0ba0df18c800": {
          "from": "9cc8adcf-84b0-4c19-b526-66aba9e8869c",
          "to": "bec203cf-f671-4351-b8a2-028d4bc3f3d6",
          "id": "3f6b72d6-885d-442b-9789-0ba0df18c800"
        },
        "55ff6c88-f490-4a35-a206-4374b57ffdea": {
          "from": "9cc8adcf-84b0-4c19-b526-66aba9e8869c",
          "to": "5ce758e2-fedc-4f93-bc66-7ab8df34b2cc",
          "id": "55ff6c88-f490-4a35-a206-4374b57ffdea"
        },
        "aee26656-fa83-48f5-bd81-44724611cca9": {
          "from": "9cc8adcf-84b0-4c19-b526-66aba9e8869c",
          "to": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "id": "aee26656-fa83-48f5-bd81-44724611cca9"
        },
        "0f02b44f-6a8b-4e72-bc14-7c8f29e4695e": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "0fa3b349-cd3d-412a-9b07-5858ed689fa3",
          "id": "0f02b44f-6a8b-4e72-bc14-7c8f29e4695e"
        },
        "bcc78dc8-86be-41f6-b6d1-2e22ab3476a4": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "6a45e378-7c70-46d7-b830-59d527989059",
          "id": "bcc78dc8-86be-41f6-b6d1-2e22ab3476a4"
        },
        "64e4b5eb-f556-4be4-8429-a1cd200f1ba0": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "9b637b6c-027e-443a-8e69-7709d03739b2",
          "id": "64e4b5eb-f556-4be4-8429-a1cd200f1ba0"
        },
        "b8d348b2-7dff-48fd-a026-16fee5ec021e": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "cb655d8b-b04e-46e5-938d-be994aac6f89",
          "id": "b8d348b2-7dff-48fd-a026-16fee5ec021e"
        },
        "c86d8038-b998-4f6a-a585-8e050c567f30": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "23433ec6-7e0e-4d44-ae8a-242b01ca1bb4",
          "id": "c86d8038-b998-4f6a-a585-8e050c567f30"
        },
        "a1bee30a-35af-4c16-923f-6b8ad6e93bb1": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "f6114c7c-1c00-4df5-b252-bbc2fafc19a3",
          "id": "a1bee30a-35af-4c16-923f-6b8ad6e93bb1"
        },
        "be9225a4-3f51-4983-833f-86d9373e79ff": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "0c0bcdbe-906b-4a95-9a2f-cb5fab0e5e1c",
          "id": "be9225a4-3f51-4983-833f-86d9373e79ff"
        },
        "4fa59392-c6eb-49a7-85ad-481a92740395": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "a7f438aa-b283-4d07-9224-8ec228acb48b",
          "id": "4fa59392-c6eb-49a7-85ad-481a92740395"
        },
        "fc16fcf4-12d5-48f2-8ceb-ca34247e741a": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "872f0a12-6de5-4441-ac67-84d16ed1cbb5",
          "id": "fc16fcf4-12d5-48f2-8ceb-ca34247e741a"
        },
        "09512527-5d18-4c43-9405-43ad3a4e1ee3": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "fe3997d4-eae0-4cba-b0f1-4e90b4a5ce49",
          "id": "09512527-5d18-4c43-9405-43ad3a4e1ee3"
        },
        "09f8a404-02cb-4556-a40f-4f82f8174cac": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "4356be75-9c04-4cbd-80e0-16a076c38e96",
          "id": "09f8a404-02cb-4556-a40f-4f82f8174cac"
        },
        "c76245ac-2ff3-407b-9b81-4bab960897fd": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "6c0ad78b-aa29-4388-939e-d90da59b23d2",
          "id": "c76245ac-2ff3-407b-9b81-4bab960897fd"
        },
        "e7cb772d-0b33-40fe-9701-c3007bc73756": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "224588a1-855c-434c-a680-2d94130ee51a",
          "id": "e7cb772d-0b33-40fe-9701-c3007bc73756"
        },
        "5ccd5c20-e97c-4fd1-ac00-12ae9001f0d5": {
          "from": "4e085bcc-5d52-46d6-8093-c4c5619e699b",
          "to": "7cbde960-9aab-4b0d-a032-bf6100cb0093",
          "id": "5ccd5c20-e97c-4fd1-ac00-12ae9001f0d5"
        },
        "cb98b790-963f-4314-b319-6f635d433020": {
          "from": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "to": "886fb5f5-4253-4b27-a255-eceea78415ed",
          "id": "cb98b790-963f-4314-b319-6f635d433020"
        },
        "ade2a714-7b55-4a85-ae8a-34cf425e3607": {
          "from": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "to": "6259e972-39e5-420e-8d87-bf604c6532d7",
          "id": "ade2a714-7b55-4a85-ae8a-34cf425e3607"
        },
        "eec2fc83-aaa5-4ece-8ad9-cc44d1f36e33": {
          "from": "3079f0b6-7a33-4baa-9e9e-59da251e18e6",
          "to": "10b7c4ce-4a26-4492-a0f2-55323551152a",
          "id": "eec2fc83-aaa5-4ece-8ad9-cc44d1f36e33"
        },
        "c54ed2fa-96e4-4835-8580-51a0d9dceb2c": {
          "from": "bec203cf-f671-4351-b8a2-028d4bc3f3d6",
          "to": "fccea247-1e5a-4860-b063-04deecf73242",
          "id": "c54ed2fa-96e4-4835-8580-51a0d9dceb2c"
        },
        "45c9c5a6-d08b-48ba-9745-1eb1f78cd17f": {
          "from": "bec203cf-f671-4351-b8a2-028d4bc3f3d6",
          "to": "15951acd-8b69-42d2-a05e-2752c01bd6ee",
          "id": "45c9c5a6-d08b-48ba-9745-1eb1f78cd17f"
        },
        "a3c08638-7055-4f38-9141-b380e8075116": {
          "from": "15951acd-8b69-42d2-a05e-2752c01bd6ee",
          "to": "3225ebbe-69b2-4d78-882f-57fb74f7e6b2",
          "id": "a3c08638-7055-4f38-9141-b380e8075116"
        },
        "aad348bb-26cf-4ed6-ab5e-a23995c6f754": {
          "from": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "to": "8170c43c-7943-45d1-9b28-f229edc22499",
          "id": "aad348bb-26cf-4ed6-ab5e-a23995c6f754"
        },
        "2cecf264-e9be-42c9-a66b-01dfdfca5f30": {
          "from": "8170c43c-7943-45d1-9b28-f229edc22499",
          "to": "ad44dda3-0317-4d5e-bc27-81d735d7241a",
          "id": "2cecf264-e9be-42c9-a66b-01dfdfca5f30"
        },
        "2597d50a-6f57-48bb-a6b8-3cd3681ebaef": {
          "from": "ad44dda3-0317-4d5e-bc27-81d735d7241a",
          "to": "b23f2e6b-e9cc-48fc-85ce-1ceb9209a1b8",
          "id": "2597d50a-6f57-48bb-a6b8-3cd3681ebaef"
        },
        "76b04187-1b38-476b-95de-2202e06a0903": {
          "from": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "to": "b9a88d8f-8e4d-4566-add0-9cc957380404",
          "id": "76b04187-1b38-476b-95de-2202e06a0903"
        },
        "9fe5d872-23a7-416a-9b92-e2b13270da1a": {
          "from": "b9a88d8f-8e4d-4566-add0-9cc957380404",
          "to": "63161829-e05f-4556-973d-0db8e649daca",
          "id": "9fe5d872-23a7-416a-9b92-e2b13270da1a"
        },
        "1b1fa4c6-ac0d-46c2-b112-260facc55661": {
          "from": "b9a88d8f-8e4d-4566-add0-9cc957380404",
          "to": "32b453ae-dd88-4ad9-a086-351709e5e31c",
          "id": "1b1fa4c6-ac0d-46c2-b112-260facc55661"
        },
        "35c748cc-3bff-4705-8777-2dfc13cac4fd": {
          "from": "b9a88d8f-8e4d-4566-add0-9cc957380404",
          "to": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "id": "35c748cc-3bff-4705-8777-2dfc13cac4fd"
        },
        "a269b52e-eb77-43d6-979b-23e26a887e6b": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "12a673a7-dcc3-4906-9b5c-1f341f598670",
          "id": "a269b52e-eb77-43d6-979b-23e26a887e6b"
        },
        "2118a26b-d9b4-4e17-aad4-8595405eee93": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "0c353863-df48-4130-9c29-8babdf25ed63",
          "id": "2118a26b-d9b4-4e17-aad4-8595405eee93"
        },
        "713d424f-5515-4986-862d-10afb9174d8b": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "85dea1c2-b3bd-463a-b9d8-dbe550f1aa7c",
          "id": "713d424f-5515-4986-862d-10afb9174d8b"
        },
        "a6828a1d-946a-406e-99f7-5a284a52ea14": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "5e1fbc84-cd47-4d53-9b2f-fe0fafd482e9",
          "id": "a6828a1d-946a-406e-99f7-5a284a52ea14"
        },
        "2fa155c1-949e-49e9-9886-dc601b1a9176": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "1dd17bac-41ce-47c4-a8eb-40e2561e2d37",
          "id": "2fa155c1-949e-49e9-9886-dc601b1a9176"
        },
        "754a60cb-a753-414b-a1c8-7c7c13727ce4": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "edb89e1e-1171-4656-9066-03c427c25671",
          "id": "754a60cb-a753-414b-a1c8-7c7c13727ce4"
        },
        "06b31454-bf02-4627-bc08-edd146e68802": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "8f6a9c88-34bb-44b0-803b-c471fe50c383",
          "id": "06b31454-bf02-4627-bc08-edd146e68802"
        },
        "0b7cfb05-15c1-4953-aae6-f6f3957a07f9": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "96310091-f9fe-494e-adad-5b3c6d7de4c0",
          "id": "0b7cfb05-15c1-4953-aae6-f6f3957a07f9"
        },
        "3d70e897-95a2-487c-8b9c-c22a363e4c58": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "77b8d50a-08fc-47af-b8cf-2744a72fb743",
          "id": "3d70e897-95a2-487c-8b9c-c22a363e4c58"
        },
        "e3f94368-84d7-46ac-9532-78b7c0e87b5c": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "29c529f9-fca5-4162-8606-72d0e6b3d168",
          "id": "e3f94368-84d7-46ac-9532-78b7c0e87b5c"
        },
        "ff4bd74d-3ff9-4194-84f1-0fdcca60b87e": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "a9623a2c-6154-4853-9c34-722b12e34a2f",
          "id": "ff4bd74d-3ff9-4194-84f1-0fdcca60b87e"
        },
        "69fedf3f-f526-4bc3-9686-990c2897235a": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "9a1ac976-705c-498d-9d41-e09384516de4",
          "id": "69fedf3f-f526-4bc3-9686-990c2897235a"
        },
        "d23b7d0e-9e48-4231-ac3b-d21ef17e15c2": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "87bee4cd-fa43-4ea5-885c-6001fafc48bc",
          "id": "d23b7d0e-9e48-4231-ac3b-d21ef17e15c2"
        },
        "d98127f0-9ade-4eea-8cae-8d6296c54ac7": {
          "from": "34a3d439-761e-4956-a948-a2aad24cb4c9",
          "to": "6b25bb11-c831-4ebb-83e5-9524496dc209",
          "id": "d98127f0-9ade-4eea-8cae-8d6296c54ac7"
        },
        "7f7c7342-9449-4779-9a9b-9d2a31687b3a": {
          "from": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "to": "382cda94-ef1b-485d-adba-d7c1b8c76799",
          "id": "7f7c7342-9449-4779-9a9b-9d2a31687b3a"
        },
        "a8d5378e-5504-4a15-96f4-61a2a4648585": {
          "from": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "to": "5a4abbd1-5c53-48e7-9cd8-b99cf17f99ca",
          "id": "a8d5378e-5504-4a15-96f4-61a2a4648585"
        },
        "a92d6fa0-3be8-45e2-b44c-7554774ebfc9": {
          "from": "2655ef6f-58d4-4176-bf7e-f9925020bdb1",
          "to": "dc661407-07d8-4c08-95c6-ec4a92fe1cfe",
          "id": "a92d6fa0-3be8-45e2-b44c-7554774ebfc9"
        },
        "920fbe12-1849-4f41-9f10-a3aee9041b62": {
          "from": "63161829-e05f-4556-973d-0db8e649daca",
          "to": "b37b3d4c-fb55-40c4-8ae8-86227de617d1",
          "id": "920fbe12-1849-4f41-9f10-a3aee9041b62"
        },
        "d6c75ab8-1b70-4f1b-87a6-1364feaf641d": {
          "from": "8f6a9c88-34bb-44b0-803b-c471fe50c383",
          "to": "1076a2e2-5bb9-4541-a8c9-4a103de8270f",
          "id": "d6c75ab8-1b70-4f1b-87a6-1364feaf641d"
        },
        "d86d3cf4-db0f-47b7-80ec-520bf09272ed": {
          "from": "63161829-e05f-4556-973d-0db8e649daca",
          "to": "3a189436-44a6-4025-b6cc-86cdc61caed1",
          "id": "d86d3cf4-db0f-47b7-80ec-520bf09272ed"
        },
        "23bf3999-ccd0-4c8b-842f-68a85480bb7d": {
          "from": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "to": "8114be0d-3f35-4897-9117-2eb9f03448eb",
          "id": "23bf3999-ccd0-4c8b-842f-68a85480bb7d"
        },
        "4ffd6271-0c1c-4db0-aba4-b65033dc8983": {
          "from": "8114be0d-3f35-4897-9117-2eb9f03448eb",
          "to": "6718de82-8295-4030-b7d4-562507fd1fff",
          "id": "4ffd6271-0c1c-4db0-aba4-b65033dc8983"
        },
        "73bcc3bf-0a7a-455d-a876-b50c336c7af1": {
          "from": "6718de82-8295-4030-b7d4-562507fd1fff",
          "to": "1f2c1291-fcde-4d41-b5fe-4f9113ac3e42",
          "id": "73bcc3bf-0a7a-455d-a876-b50c336c7af1"
        },
        "675294a1-0f74-4ec7-9427-9dfff696844d": {
          "from": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "to": "7b8f5d82-4330-4b39-a90c-3a65c8eae204",
          "id": "675294a1-0f74-4ec7-9427-9dfff696844d"
        },
        "c2c9720c-37da-4d02-bba9-d88ca56c20b6": {
          "from": "7b8f5d82-4330-4b39-a90c-3a65c8eae204",
          "to": "cdbe1cd5-c208-4f51-b5dc-a2236ec7a0f7",
          "id": "c2c9720c-37da-4d02-bba9-d88ca56c20b6"
        },
        "a026650a-9e06-4a77-b8b2-5ed25a6ba8ce": {
          "from": "7b8f5d82-4330-4b39-a90c-3a65c8eae204",
          "to": "13c9ca25-9132-444e-a9f2-f1405fe6149e",
          "id": "a026650a-9e06-4a77-b8b2-5ed25a6ba8ce"
        },
        "40a6447c-d277-461a-b294-c1e4bc4b42f4": {
          "from": "7b8f5d82-4330-4b39-a90c-3a65c8eae204",
          "to": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "id": "40a6447c-d277-461a-b294-c1e4bc4b42f4"
        },
        "e5c25766-5356-4387-bef2-865d9a97a678": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "e7b4c785-2a68-4866-a507-738dbdf38c70",
          "id": "e5c25766-5356-4387-bef2-865d9a97a678"
        },
        "9a732cee-42de-472c-ac98-8ba6b7053def": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "aa6ac82a-8ffc-4ca2-aa3f-50d22b2deff9",
          "id": "9a732cee-42de-472c-ac98-8ba6b7053def"
        },
        "be7d98d5-7f78-4f38-b375-33f3506e4bd5": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "45d05662-1d78-4e8d-9e3c-c153f27b2336",
          "id": "be7d98d5-7f78-4f38-b375-33f3506e4bd5"
        },
        "d98d718e-9878-44ca-9dec-d887e7e22af3": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "4ef46127-3fdb-4a06-b4ed-a32ad9d8b6e5",
          "id": "d98d718e-9878-44ca-9dec-d887e7e22af3"
        },
        "b5aedd44-4d29-4cd1-ad7e-dc80b146f363": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "47561e39-d760-43c7-9d51-f94705366489",
          "id": "b5aedd44-4d29-4cd1-ad7e-dc80b146f363"
        },
        "cd2bb996-c250-488e-ac99-34bdd25bbc83": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "5a8dbee5-f6c5-4508-9fba-0cb2da8025ca",
          "id": "cd2bb996-c250-488e-ac99-34bdd25bbc83"
        },
        "7cba7164-fe31-4ecb-9ca7-0ca163edfe50": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "b44f06ca-75bf-49e9-bf1d-b0cb6f141066",
          "id": "7cba7164-fe31-4ecb-9ca7-0ca163edfe50"
        },
        "06266158-4892-403b-a81a-82b7dbfe11c0": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "71bf7321-48f6-4c1c-8bcb-baf3937da270",
          "id": "06266158-4892-403b-a81a-82b7dbfe11c0"
        },
        "07b37751-a501-4595-b099-5bfd1bcfcafd": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "236d6bf1-417e-4a78-a17f-9fc8435f37ca",
          "id": "07b37751-a501-4595-b099-5bfd1bcfcafd"
        },
        "92305fd4-52d7-43ea-9e74-a1c1cbdc21d1": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "d5b88b8d-5595-4d01-87b1-35b4ac9de471",
          "id": "92305fd4-52d7-43ea-9e74-a1c1cbdc21d1"
        },
        "2ee4d22c-16ac-47dd-bbaa-392955bc432e": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "a9c734b1-b48d-4e59-8fc8-674d42f34026",
          "id": "2ee4d22c-16ac-47dd-bbaa-392955bc432e"
        },
        "4b98c3fb-6056-4899-b98f-45d2336e1791": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "22b5092a-1e2a-426c-8c2f-40347b31a7c3",
          "id": "4b98c3fb-6056-4899-b98f-45d2336e1791"
        },
        "d6b30012-6608-42c6-92ac-37e78a0f8204": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "86bcf0a0-3884-43cb-9dc7-b07f02151edb",
          "id": "d6b30012-6608-42c6-92ac-37e78a0f8204"
        },
        "1c1c2dc7-d0af-4322-9124-d20c66264ab8": {
          "from": "3b5ee4ed-619a-4b3c-a819-abec9175a590",
          "to": "e50692b2-35ed-4f2e-86a6-a2b77a98dae8",
          "id": "1c1c2dc7-d0af-4322-9124-d20c66264ab8"
        },
        "773baef0-34aa-4a4c-b9d9-1f498ab07866": {
          "from": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "to": "a12e4227-2588-4261-aecd-b5fe4873b5f8",
          "id": "773baef0-34aa-4a4c-b9d9-1f498ab07866"
        },
        "31f85695-1ffa-47e0-b5a5-257ab746d5b6": {
          "from": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "to": "63ba8a3e-c1e5-46b4-aa03-edac1c131c45",
          "id": "31f85695-1ffa-47e0-b5a5-257ab746d5b6"
        },
        "deb8f837-bc14-41f3-be97-2275b7015a0e": {
          "from": "697f9a77-20e6-4c2b-96e6-5f74b9b3ec94",
          "to": "d90a0eff-2ad0-468e-baed-688d7b79ec38",
          "id": "deb8f837-bc14-41f3-be97-2275b7015a0e"
        },
        "5c11f35c-7aee-4ec2-a5ff-6ece68912eb4": {
          "from": "cdbe1cd5-c208-4f51-b5dc-a2236ec7a0f7",
          "to": "dc510b39-9a13-429f-a024-54d4bb491a0d",
          "id": "5c11f35c-7aee-4ec2-a5ff-6ece68912eb4"
        },
        "84ccaa51-42f0-4052-8e54-3dd9bd3a14d5": {
          "from": "dc510b39-9a13-429f-a024-54d4bb491a0d",
          "to": "f7803df3-0650-4423-8d9b-457021534a6d",
          "id": "84ccaa51-42f0-4052-8e54-3dd9bd3a14d5"
        },
        "fa05246a-a4b0-475d-8746-c3ff8f597ab2": {
          "from": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "to": "e45b4a7a-6845-4543-a2ae-f795f595028d",
          "id": "fa05246a-a4b0-475d-8746-c3ff8f597ab2"
        },
        "df0924f1-328b-43b5-8eac-489bc7b4377d": {
          "from": "e45b4a7a-6845-4543-a2ae-f795f595028d",
          "to": "135278d6-7302-48f8-b45b-ab183c21fcc4",
          "id": "df0924f1-328b-43b5-8eac-489bc7b4377d"
        },
        "d133142a-bb83-4104-9bbb-bdd53da0ce7f": {
          "from": "135278d6-7302-48f8-b45b-ab183c21fcc4",
          "to": "3bc55a88-96d6-4745-9d35-f86151dd97dd",
          "id": "d133142a-bb83-4104-9bbb-bdd53da0ce7f"
        },
        "49310b99-ff69-4545-90d9-69c026933a58": {
          "from": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "to": "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480",
          "id": "49310b99-ff69-4545-90d9-69c026933a58"
        },
        "fd77d718-1459-4783-8709-d25c64c97a50": {
          "from": "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480",
          "to": "d1f5c862-e493-4cad-9dfa-d6177ddf7992",
          "id": "fd77d718-1459-4783-8709-d25c64c97a50"
        },
        "dec59378-e7f0-4070-90b0-514be9a7f64b": {
          "from": "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480",
          "to": "afaf93b7-25c5-427e-81de-7806431dadca",
          "id": "dec59378-e7f0-4070-90b0-514be9a7f64b"
        },
        "6c630e95-1134-432a-8301-dd768d55d990": {
          "from": "cd4cc7d1-4bb5-4501-9de8-a8fafd84d480",
          "to": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "id": "6c630e95-1134-432a-8301-dd768d55d990"
        },
        "57082036-b84f-46a8-b6b7-ebc2a6f46bd1": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "d299b79e-4ffa-4f4a-8932-7e97f2eb10ee",
          "id": "57082036-b84f-46a8-b6b7-ebc2a6f46bd1"
        },
        "44b5b329-e357-42d6-9bb3-59a5de60467d": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "63adcb0b-4bf9-4749-92dd-333d67ff6a58",
          "id": "44b5b329-e357-42d6-9bb3-59a5de60467d"
        },
        "42b1d4d2-b9c4-4e61-8788-807a9f2516a8": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "eb5f035a-b30b-4d0f-bf2e-f45f84756315",
          "id": "42b1d4d2-b9c4-4e61-8788-807a9f2516a8"
        },
        "84cdd5e0-ce5d-47a0-9788-b511ef136891": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "59c3b991-22c9-4d28-8827-811a167fd8df",
          "id": "84cdd5e0-ce5d-47a0-9788-b511ef136891"
        },
        "98a75696-2676-499f-8e7e-0d8d9ee54145": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "30521a06-77d5-48fb-b1a3-e6f60108d275",
          "id": "98a75696-2676-499f-8e7e-0d8d9ee54145"
        },
        "6f337939-fa41-4980-b9a5-a03d294eb7a6": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "3445f6ac-f997-41cd-933c-780dc1937aaa",
          "id": "6f337939-fa41-4980-b9a5-a03d294eb7a6"
        },
        "87b0b21b-5cf2-4a4a-b466-a67f0d24ca09": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "e7309654-46d2-46c2-b390-0d9c548b5fab",
          "id": "87b0b21b-5cf2-4a4a-b466-a67f0d24ca09"
        },
        "a7c6d3a5-53f3-4f79-a9b7-853c1a925578": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "dba97025-6d4a-4e60-a6c8-c6441ae6a131",
          "id": "a7c6d3a5-53f3-4f79-a9b7-853c1a925578"
        },
        "e25165f6-3942-4bd0-8781-ab68a8aea901": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "50316974-0daf-49c3-ba51-8b55293c2c2b",
          "id": "e25165f6-3942-4bd0-8781-ab68a8aea901"
        },
        "a61a7c6c-892d-4359-9b1c-267a4aa89746": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "cb3c7a23-39bf-4199-a9cd-546db14aee22",
          "id": "a61a7c6c-892d-4359-9b1c-267a4aa89746"
        },
        "6ad8b330-0904-4e23-9e68-675eb108613a": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "dba1c4be-2efe-4c8b-9ee5-eae7b9fe0e1c",
          "id": "6ad8b330-0904-4e23-9e68-675eb108613a"
        },
        "fdfe5860-8eed-45be-b87b-3e354d2af0d7": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "b2358216-af23-4a3e-af80-4f1dfa046015",
          "id": "fdfe5860-8eed-45be-b87b-3e354d2af0d7"
        },
        "1f268357-6227-41dd-a51e-3a9ecc65e37f": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "ed2388a2-2262-4ae2-8b41-21ba3bae6fb5",
          "id": "1f268357-6227-41dd-a51e-3a9ecc65e37f"
        },
        "05808a2f-1ac6-47ba-84b8-85f6941b92dc": {
          "from": "d5e55eeb-e1c5-4462-a0c1-f8e311db7ede",
          "to": "b9fa313c-e357-4218-a54d-e3f0fa47bc40",
          "id": "05808a2f-1ac6-47ba-84b8-85f6941b92dc"
        },
        "0a43fd73-a16e-44d1-9691-180d20ab82b9": {
          "from": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "to": "36c0b6fb-3fbf-4399-886e-d09a20194020",
          "id": "0a43fd73-a16e-44d1-9691-180d20ab82b9"
        },
        "feee74eb-a2a0-4bec-aa5c-cf1642586a1d": {
          "from": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "to": "4336987d-b6e8-4aa9-ab5e-2a5cf137ed4c",
          "id": "feee74eb-a2a0-4bec-aa5c-cf1642586a1d"
        },
        "f676a7e6-f235-45da-acc1-1d60ff49c4c5": {
          "from": "d26c4379-97f3-4d68-9d27-c269fd251c09",
          "to": "93dfb4a3-402c-426a-9d08-37dadaa19d27",
          "id": "f676a7e6-f235-45da-acc1-1d60ff49c4c5"
        },
        "5c9a19ae-b1e7-4b3d-af1c-30b3adf88bc1241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "5c9a19ae-b1e7-4b3d-af1c-30b3adf88bc1241831",
          "from": "0fd0634f-bba6-400f-93e9-8e94972b78b9241831",
          "to": "ef063fca-5566-4b91-bd75-ca0df01081dc241831"
        },
        "1824a637-2155-418b-9eac-868f3322ee54241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "1824a637-2155-418b-9eac-868f3322ee54241831",
          "from": "ef063fca-5566-4b91-bd75-ca0df01081dc241831",
          "to": "4a3125da-bc69-49a1-bd3e-714542579174241831"
        },
        "5e9cb344-6c64-4c8f-92c1-42603e16e11a241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "5e9cb344-6c64-4c8f-92c1-42603e16e11a241831",
          "from": "ef063fca-5566-4b91-bd75-ca0df01081dc241831",
          "to": "458b3e37-7acb-416d-8fd8-ab918307153a241831"
        },
        "16b488ad-5e4f-4292-9c0f-7db8e03a2945241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "16b488ad-5e4f-4292-9c0f-7db8e03a2945241831",
          "from": "ef063fca-5566-4b91-bd75-ca0df01081dc241831",
          "to": "d8b69f8c-f25f-4fed-8f40-617134fd413b241831"
        },
        "dff91363-1240-4e98-8bfe-c8fba6524142241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "dff91363-1240-4e98-8bfe-c8fba6524142241831",
          "from": "c18eb317-25f6-4982-8a13-5351898daf97241831",
          "to": "0872b3be-f521-49dc-bc01-14ceffec2f06241831"
        },
        "759c6cf3-afb2-4a2e-a5b9-79c80cc968ca241831": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "759c6cf3-afb2-4a2e-a5b9-79c80cc968ca241831",
          "from": "0fd0634f-bba6-400f-93e9-8e94972b78b9241831",
          "to": "c18eb317-25f6-4982-8a13-5351898daf97241831"
        },
        "2f3238c4-a2d9-4e76-8478-0ec579073b09": {
          "from": "d1f5c862-e493-4cad-9dfa-d6177ddf7992",
          "to": "ef063fca-5566-4b91-bd75-ca0df01081dc241831",
          "id": "2f3238c4-a2d9-4e76-8478-0ec579073b09"
        },
        "d7eeed8c-e557-4e01-90a7-9f64e7f22688": {
          "from": "d1f5c862-e493-4cad-9dfa-d6177ddf7992",
          "to": "c18eb317-25f6-4982-8a13-5351898daf97241831",
          "id": "d7eeed8c-e557-4e01-90a7-9f64e7f22688"
        },
        "0bd248da-ce70-47e3-aab3-7b079c83fa7d": {
          "from": "e7309654-46d2-46c2-b390-0d9c548b5fab",
          "to": "4224d1a6-e789-4548-80e4-fb13a48ce2ee",
          "id": "0bd248da-ce70-47e3-aab3-7b079c83fa7d"
        },
        "d02ec775-a3dc-4103-be59-c0fc2f70bf4e": {
          "from": "e7309654-46d2-46c2-b390-0d9c548b5fab",
          "to": "b704b4d2-dce8-45b6-a287-febcd6b3b993",
          "id": "d02ec775-a3dc-4103-be59-c0fc2f70bf4e"
        },
        "e066a4b5-9b02-4d20-bf5d-dea0740e20e3147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "e066a4b5-9b02-4d20-bf5d-dea0740e20e3147528",
          "from": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "to": "ef5831c3-19e4-4205-9c1f-7a3bce9abf2e147528"
        },
        "4b764583-ea7e-405b-93dd-82437c3d14fc147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "4b764583-ea7e-405b-93dd-82437c3d14fc147528",
          "from": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "to": "7b984b0f-df05-4527-8ac8-8706b9691d36147528"
        },
        "46e573b2-afe1-4939-b210-cbbf6a690e86147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "46e573b2-afe1-4939-b210-cbbf6a690e86147528",
          "from": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "to": "a8fd2573-44a2-4d77-9721-81e1457bc1f0147528"
        },
        "86091c85-7a02-4b44-9133-36d8c06b3e90147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "86091c85-7a02-4b44-9133-36d8c06b3e90147528",
          "from": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "to": "48a4c37a-5708-48fc-9e33-37312999d807147528"
        },
        "8b967eec-9d2a-4463-bb49-e1143ac45fc4147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "8b967eec-9d2a-4463-bb49-e1143ac45fc4147528",
          "from": "b0ab9a5c-3969-4305-b107-d656ef662765147528",
          "to": "e4bf19d7-5d83-4383-8b80-0d6bfdf05f46147528"
        },
        "7dc51589-12e9-42fc-9d7a-ac9fd1bd6c0c147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "7dc51589-12e9-42fc-9d7a-ac9fd1bd6c0c147528",
          "from": "ef5831c3-19e4-4205-9c1f-7a3bce9abf2e147528",
          "to": "c8fff93b-99a7-4e44-b775-013dd5b18cd0147528"
        },
        "959a5fd5-e59e-4da5-a181-d02bb181695a147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "959a5fd5-e59e-4da5-a181-d02bb181695a147528",
          "from": "c8fff93b-99a7-4e44-b775-013dd5b18cd0147528",
          "to": "244022c3-df85-4859-b198-983acf2a904c147528"
        },
        "cdee0a75-1f93-4928-a613-6d6fa17255cf147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "cdee0a75-1f93-4928-a613-6d6fa17255cf147528",
          "from": "7b984b0f-df05-4527-8ac8-8706b9691d36147528",
          "to": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528"
        },
        "8e730a1a-d7d3-4ff7-a077-ab21ade7b336147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "8e730a1a-d7d3-4ff7-a077-ab21ade7b336147528",
          "from": "7b984b0f-df05-4527-8ac8-8706b9691d36147528",
          "to": "67d4560b-b8cd-4dff-9b8e-cd6979bb5efc147528"
        },
        "cf6482eb-88af-4e5d-9bb0-c6822605df82147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "cf6482eb-88af-4e5d-9bb0-c6822605df82147528",
          "from": "7b984b0f-df05-4527-8ac8-8706b9691d36147528",
          "to": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528"
        },
        "06094379-646a-4152-a3e6-11d4b6f083ef147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "06094379-646a-4152-a3e6-11d4b6f083ef147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "849f7b5d-b9aa-4aa2-a527-8b8a5f65471272887589935147528"
        },
        "2b0990ec-76fa-4324-8c82-f395d145d7db147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "2b0990ec-76fa-4324-8c82-f395d145d7db147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b672887589935147528"
        },
        "59cb7652-3841-497d-86ba-1920d87e1082147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "59cb7652-3841-497d-86ba-1920d87e1082147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b621072887589935147528"
        },
        "55617ebf-6a27-435a-b2b8-104e650b3691147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "55617ebf-6a27-435a-b2b8-104e650b3691147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887589935147528"
        },
        "397a9601-74b9-4edb-8448-bffc1a132008147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "397a9601-74b9-4edb-8448-bffc1a132008147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514589935147528"
        },
        "0aeb3a06-7b63-4e82-a2d5-68581816ec14147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "0aeb3a06-7b63-4e82-a2d5-68581816ec14147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568089935147528"
        },
        "f334072c-77af-4d27-8ebf-351b55042f8d147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "f334072c-77af-4d27-8ebf-351b55042f8d147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029689935147528"
        },
        "f3e7d03d-5589-462d-ac7c-54eee822a405147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "f3e7d03d-5589-462d-ac7c-54eee822a405147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029612089935147528"
        },
        "aded9a47-1604-4757-88ba-7c449c6a1ba0147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "aded9a47-1604-4757-88ba-7c449c6a1ba0147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029648789935147528"
        },
        "e6eebc05-492d-4905-830e-f9f52e890788147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "e6eebc05-492d-4905-830e-f9f52e890788147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f215872887514520189935147528"
        },
        "69743530-1d23-45e8-98fb-7c1b88fd1494147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "69743530-1d23-45e8-98fb-7c1b88fd1494147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "95e449b7-91f7-4eb8-895f-5e763fa2dc3e89935147528"
        },
        "e5d6337f-9e1b-4792-a90a-974806b555d1147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "e5d6337f-9e1b-4792-a90a-974806b555d1147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "d4628ef8-97af-4c5a-b900-7c3b16d9d98989935147528"
        },
        "add5cb62-675a-4a6d-a5ad-1542c7626420147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "add5cb62-675a-4a6d-a5ad-1542c7626420147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359147528"
        },
        "eec9eeb3-2068-421d-91cd-f898a6765e2f147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "eec9eeb3-2068-421d-91cd-f898a6765e2f147528",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1147528",
          "to": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359111147528"
        },
        "fa3b45b2-67cc-41b2-ae68-0b60c853c165147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "fa3b45b2-67cc-41b2-ae68-0b60c853c165147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "50b02362-4c2e-4801-b250-bbb084bf9bb2147528"
        },
        "3eb1ae02-bd28-4287-8d8b-59afd8a4e505147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "3eb1ae02-bd28-4287-8d8b-59afd8a4e505147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "92f53a00-cf65-456f-bfcf-6f6c88119d5b147528"
        },
        "efe0adc4-61a1-4262-8d2a-65d18ffadc8c147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "efe0adc4-61a1-4262-8d2a-65d18ffadc8c147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "75ff23b4-3d0f-4c06-8061-4069494a326f147528"
        },
        "253b7fcf-ff8e-4265-8b94-3e88c4ce1a62147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "253b7fcf-ff8e-4265-8b94-3e88c4ce1a62147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "1bc92ea3-79ba-4d40-816c-35cedc1c74bf147528"
        },
        "0c47a90e-9ea9-4986-836f-c2b548b1cd73147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "0c47a90e-9ea9-4986-836f-c2b548b1cd73147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "2d9049d8-feaf-41cd-afb1-87515557983e147528"
        },
        "33778b12-0835-4236-8c9c-52b54f5a29ac147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "33778b12-0835-4236-8c9c-52b54f5a29ac147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "51a5b447-fa28-4997-80ca-b7a96a69ef9e147528"
        },
        "6e01bd8f-acc8-412b-83e8-10bd07a814fa147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "6e01bd8f-acc8-412b-83e8-10bd07a814fa147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "8a139418-94d2-4121-94a4-8d2a26213d24147528"
        },
        "27b60b32-37af-479a-b82d-cc805b852598147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "27b60b32-37af-479a-b82d-cc805b852598147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "76fc5be1-7bae-46ec-a649-1bc6509b378d147528"
        },
        "eea59217-97f9-4a82-bddd-fb106b2413b4147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "eea59217-97f9-4a82-bddd-fb106b2413b4147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "21dc8bf2-6e0c-42cf-b702-d47f24af173a147528"
        },
        "2f95f151-0818-4049-978c-02441fad6f58147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "2f95f151-0818-4049-978c-02441fad6f58147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "1f9b98e7-ca75-443c-952d-a1d0ba476652147528"
        },
        "9e3ea040-5186-4ec9-9077-df776b960700147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "9e3ea040-5186-4ec9-9077-df776b960700147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "f9c77b6e-13d7-4687-9d7f-e858e5cf5685147528"
        },
        "b8c89a15-fdcf-479e-bcd7-7f93e1b70ea5147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "b8c89a15-fdcf-479e-bcd7-7f93e1b70ea5147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "945ab5a3-10ef-4a8e-b27c-3cf76f7d8661147528"
        },
        "cad0faf8-849b-4d8c-818d-0ea29a92cf32147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "cad0faf8-849b-4d8c-818d-0ea29a92cf32147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "f13fa072-1d46-45b2-b2b1-679177d88ba6147528"
        },
        "236967f7-aa99-4f6a-b3e8-bca9d217d768147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "236967f7-aa99-4f6a-b3e8-bca9d217d768147528",
          "from": "3c74d4bd-608b-4744-b18c-1cc508a41bcd147528",
          "to": "ab382182-58b3-4799-ad70-5340f6f6e88d147528"
        },
        "c541abe4-1701-4266-9053-10c9c6984b7572887589935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c541abe4-1701-4266-9053-10c9c6984b7572887589935147528",
          "from": "849f7b5d-b9aa-4aa2-a527-8b8a5f65471272887589935147528",
          "to": "7fbacd8e-7cf7-4e33-9ffe-4c7e7ad1766172887589935147528"
        },
        "c8123b27-7bde-453e-89ad-9ffc716d189f72887589935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c8123b27-7bde-453e-89ad-9ffc716d189f72887589935147528",
          "from": "fecf5e72-1e19-410e-87b8-f36ff58504b672887589935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab372887589935147528"
        },
        "c8123b27-7bde-453e-89ad-9ffc716d189f21072887589935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c8123b27-7bde-453e-89ad-9ffc716d189f21072887589935147528",
          "from": "fecf5e72-1e19-410e-87b8-f36ff58504b621072887589935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321072887589935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887589935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887589935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887589935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887589935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514589935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514589935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514589935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514589935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568089935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568089935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568089935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568089935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029689935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029689935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029689935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029689935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029612089935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029612089935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029612089935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612089935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029648789935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514568029648789935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514568029648789935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029648789935147528"
        },
        "c547ff72-3797-413b-8790-d0c0e97cf28915872887514520189935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c547ff72-3797-413b-8790-d0c0e97cf28915872887514520189935147528",
          "from": "f98845b0-a393-4a51-ba8d-299765f501f215872887514520189935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514520189935147528"
        },
        "c920ce02-2c40-4e54-bb31-fc678ba1f4bc89935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "c920ce02-2c40-4e54-bb31-fc678ba1f4bc89935147528",
          "from": "95e449b7-91f7-4eb8-895f-5e763fa2dc3e89935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029489935147528"
        },
        "765f4b8a-a51f-445b-a3f9-2cd73c49ef9989935147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "765f4b8a-a51f-445b-a3f9-2cd73c49ef9989935147528",
          "from": "d4628ef8-97af-4c5a-b900-7c3b16d9d98989935147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab321060924715872887514568029612029443089935147528"
        },
        "765f4b8a-a51f-445b-a3f9-2cd73c49ef99899359147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "765f4b8a-a51f-445b-a3f9-2cd73c49ef99899359147528",
          "from": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359147528"
        },
        "765f4b8a-a51f-445b-a3f9-2cd73c49ef99899359111147528": {
          "arrows": {
            "to": {
              "enabled": false
            },
            "middle": {
              "enabled": false
            },
            "from": {
              "enabled": false
            }
          },
          "color": {},
          "font": {
            "bold": {},
            "boldital": {},
            "ital": {},
            "mono": {}
          },
          "scaling": {
            "label": {
              "enabled": true
            }
          },
          "shadow": {
            "enabled": false
          },
          "background": {
            "enabled": false
          },
          "smooth": {
            "enabled": false
          },
          "id": "765f4b8a-a51f-445b-a3f9-2cd73c49ef99899359111147528",
          "from": "d4628ef8-97af-4c5a-b900-7c3b16d9d989899359111147528",
          "to": "e93af4ee-6ab3-4857-8283-128dcf629ab3210609247158728875145680296120294430899359111147528"
        }
      },
      "length": 0,
      "_idProp": "id",
      "_type": {}
    }
  },
  "canvas2Data": {
    "nodes": {
      "_subscribers": {
        "*": [],
        "add": [],
        "remove": [],
        "update": []
      },
      "_options": {},
      "_data": {},
      "length": 0,
      "_idProp": "id",
      "_type": {}
    },
    "edges": {
      "_subscribers": {
        "*": [],
        "add": [],
        "remove": [],
        "update": []
      },
      "_options": {},
      "_data": {},
      "length": 0,
      "_idProp": "id",
      "_type": {}
    }
  },
  "dataCash": {},
  "setup": {
    "scale": 0.011,
    "viewPosition": {
      "x": 110003.00000000001,
      "y": 17299.99999727273
    }
  }
}
;