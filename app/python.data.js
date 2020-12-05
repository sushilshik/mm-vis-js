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
        "indx1_115": {
          "id": "indx1_115",
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
        "indx1_116": {
          "id": "indx1_116",
          "x": 61211,
          "y": -9012,
          "label": "Разработка"
        },
        "indx1_117": {
          "id": "indx1_117",
          "x": 61524,
          "y": -9017,
          "label": "init"
        },
        "indx1_118": {
          "id": "indx1_118",
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
        "indx1_119": {
          "id": "indx1_119",
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
        "indx1_120": {
          "id": "indx1_120",
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
        "indx1_121": {
          "id": "indx1_121",
          "x": 60188,
          "y": -8555,
          "label": "projectSaveId"
        },
        "indx1_122": {
          "id": "indx1_122",
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
        "indx1_123": {
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
          "id": "indx1_123",
          "x": 71180,
          "y": -9173,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_124": {
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
          "label": "updateMenuFromScheme([], []);\n\nvar data = document.getElementById(\"schemeDataTextArea\").value;\n\nvar url = \"https://localhost:3001\";\n\nfunction fetchData(url, params, resolve, index) {\n\n   url = url + \"?origin=*\";\n   Object.keys(params).forEach(function(key){url += \"&\" + key + \"=\" + params[key];});\n\n\n   fetch(url)\n       .then(function(response){return response.json();})\n       .then(function(response) {\n          if (response.lastIndexOf(\"ok - \", 0) !== 0 ) {\n             showAlert(response, 10, 65);\n          }\n          console.log(index + \". fetch response: \" + response);\n          resolve(response);\n          return response;\n       })\n       .catch(function(error){\n          console.log(error);\n       });\n\n}\n\nfunction chunkString(str, length) {\n  return str.match(new RegExp('(.|[\\r\\n]){1,' + length + '}', 'g'));\n}\n\ndata = encodeURIComponent(data);\nvar dataChunks = chunkString(data, 17000);\nconsole.log(dataChunks.length);\nvar saveTime = new Date();\n\nvar p = new Promise(function(resolve, reject) {\n  resolve();\n});\n\ndataChunks.forEach(function(dataChunk, index) {\n   p = p.then(function(value) {\n\n      var pNew = new Promise(function(resolve, reject) {\n\n         var dataChunkEncoded = encodeURIComponent(dataChunk);\n         var params = {\n            path: \"/home/mike/progr/repo/mm-vis-js/app/python.data.js\",\n            dataPart: dataChunkEncoded,\n            dataPartNumber: index,\n            projectName: \"python_proj1\",\n            saveTime: saveTime.getTime(),\n            dataChunksLength: dataChunks.length,\n            lastDataPart: false\n         };\n            fetchData(url, params, resolve, index); \n   \n      })\n      return pNew;\n   });\n});",
          "id": "indx1_124",
          "x": 65740,
          "y": -6470,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_125": {
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
          "id": "indx1_125",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_126": {
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
          "id": "indx1_126"
        },
        "indx1_127": {
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
          "id": "indx1_127"
        },
        "indx1_128": {
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
          "id": "indx1_128"
        },
        "indx1_129": {
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
          "id": "indx1_129"
        },
        "indx1_130": {
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
          "id": "indx1_130"
        },
        "indx1_131": {
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
          "id": "indx1_131"
        },
        "indx1_132": {
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
          "id": "indx1_132"
        },
        "indx1_133": {
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
          "id": "indx1_133"
        },
        "indx1_134": {
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
          "id": "indx1_134"
        },
        "indx1_135": {
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
          "id": "indx1_135"
        },
        "indx1_136": {
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
          "id": "indx1_136"
        },
        "indx1_137": {
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
          "id": "indx1_137"
        },
        "indx1_138": {
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
          "id": "indx1_138"
        },
        "indx1_139": {
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
          "id": "indx1_139"
        },
        "indx1_140": {
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
          "id": "indx1_140"
        },
        "indx1_141": {
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
          "id": "indx1_141"
        },
        "indx1_142": {
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
          "id": "indx1_142"
        },
        "indx1_143": {
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
          "id": "indx1_143"
        },
        "indx1_144": {
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
          "id": "indx1_144"
        },
        "indx1_145": {
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
          "id": "indx1_145"
        },
        "indx1_146": {
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
          "id": "indx1_146"
        },
        "indx1_147": {
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
          "id": "indx1_147"
        },
        "indx1_148": {
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
          "id": "indx1_148"
        },
        "indx1_149": {
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
          "id": "indx1_149"
        },
        "indx1_150": {
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
          "id": "indx1_150",
          "x": 69486,
          "y": -5770,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_151": {
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
          "id": "indx1_151",
          "x": 65056,
          "y": -6484
        },
        "indx1_152": {
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
          "id": "indx1_152",
          "x": 64924,
          "y": -5466,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_153": {
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
          "id": "indx1_153",
          "x": 65286,
          "y": -5487
        },
        "indx1_154": {
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
          "id": "indx1_154",
          "x": 65533,
          "y": -5484,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_155": {
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
          "id": "indx1_155",
          "x": 65817,
          "y": -5521,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_156": {
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
          "id": "indx1_156",
          "x": 65323,
          "y": -5440,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_157": {
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
          "id": "indx1_157",
          "x": 65337,
          "y": -5401,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_158": {
          "id": "indx1_158",
          "x": 61499,
          "y": -9718,
          "label": "Что на этом холсте?"
        },
        "indx1_159": {
          "id": "indx1_159",
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
        "indx1_160": {
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
          "id": "indx1_160",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_161": {
          "label": "Development",
          "x": 80805,
          "y": -4386,
          "id": "indx1_161"
        },
        "indx1_162": {
          "label": "12/18/2019",
          "x": 80938,
          "y": -4386,
          "id": "indx1_162"
        },
        "indx1_163": {
          "label": "init",
          "x": 81055,
          "y": -4386,
          "id": "indx1_163"
        },
        "indx1_164": {
          "label": "Notes",
          "x": 80781,
          "y": -5236,
          "id": "indx1_164"
        },
        "indx1_165": {
          "label": "Dictionary of\nconcepts",
          "x": 80960,
          "y": -5770,
          "id": "indx1_165"
        },
        "indx1_166": {
          "label": "Details, thoughts",
          "x": 80955,
          "y": -5236,
          "id": "indx1_166"
        },
        "indx1_167": {
          "label": "Sections",
          "x": 80929,
          "y": -4986,
          "id": "indx1_167"
        },
        "indx1_168": {
          "label": "Books",
          "x": 81019,
          "y": -5136,
          "id": "indx1_168"
        },
        "indx1_169": {
          "label": "R&D institutions",
          "x": 81049,
          "y": -5111,
          "id": "indx1_169"
        },
        "indx1_170": {
          "label": "Sites",
          "x": 81015,
          "y": -5086,
          "id": "indx1_170"
        },
        "indx1_171": {
          "label": "Magazines",
          "x": 81034,
          "y": -5061,
          "id": "indx1_171"
        },
        "indx1_172": {
          "label": "Articles",
          "x": 81022,
          "y": -5036,
          "id": "indx1_172"
        },
        "indx1_173": {
          "label": "Media content",
          "x": 81044,
          "y": -5011,
          "id": "indx1_173"
        },
        "indx1_174": {
          "label": "Misc. web links",
          "x": 81047,
          "y": -4986,
          "id": "indx1_174"
        },
        "indx1_175": {
          "label": "Projects",
          "x": 81025,
          "y": -4961,
          "id": "indx1_175"
        },
        "indx1_176": {
          "label": "Tools",
          "x": 81016,
          "y": -4936,
          "id": "indx1_176"
        },
        "indx1_177": {
          "label": "Organizations",
          "x": 81043,
          "y": -4911,
          "id": "indx1_177"
        },
        "indx1_178": {
          "label": "Standarts",
          "x": 81030,
          "y": -4886,
          "id": "indx1_178"
        },
        "indx1_179": {
          "label": "Forums, Groups",
          "x": 81051,
          "y": -4861,
          "id": "indx1_179"
        },
        "indx1_180": {
          "label": "Laws",
          "x": 81016,
          "y": -4836,
          "id": "indx1_180"
        },
        "indx1_181": {
          "label": "Adjacent Themes",
          "x": 81055,
          "y": -4811,
          "id": "indx1_181"
        },
        "indx1_182": {
          "label": "Questions",
          "x": 80795,
          "y": -4686,
          "id": "indx1_182"
        },
        "indx1_183": {
          "label": "Problems",
          "x": 80793,
          "y": -4586,
          "id": "indx1_183"
        },
        "indx1_184": {
          "label": "Goals",
          "x": 80781,
          "y": -4486,
          "id": "indx1_184"
        },
        "indx1_185": {
          "id": "indx1_185",
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
        "indx1_186": {
          "id": "indx1_186",
          "x": 81387,
          "y": -5805,
          "label": "Python built-in json package"
        },
        "indx1_187": {
          "id": "indx1_187",
          "x": 81333,
          "y": -5774,
          "label": "import json"
        },
        "indx1_188": {
          "id": "indx1_188",
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
        "indx1_189": {
          "label": "json.dumps(some_data)",
          "link": "",
          "x": 81502,
          "y": -5717,
          "id": "indx1_189",
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
        "indx1_190": {
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
          "id": "indx1_190",
          "x": 85953,
          "y": -5411,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_191": {
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
          "id": "indx1_191",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_192": {
          "label": "Development",
          "x": 80645,
          "y": -1867,
          "id": "indx1_192"
        },
        "indx1_193": {
          "label": "12/18/2019",
          "x": 80778,
          "y": -1867,
          "id": "indx1_193"
        },
        "indx1_194": {
          "label": "init",
          "x": 80895,
          "y": -1867,
          "id": "indx1_194"
        },
        "indx1_195": {
          "label": "Notes",
          "x": 80621,
          "y": -2717,
          "id": "indx1_195"
        },
        "indx1_196": {
          "label": "Dictionary of\nconcepts",
          "x": 80784,
          "y": -3346,
          "id": "indx1_196"
        },
        "indx1_197": {
          "label": "Details, thoughts",
          "x": 80795,
          "y": -2717,
          "id": "indx1_197"
        },
        "indx1_198": {
          "label": "Sections",
          "x": 80769,
          "y": -2467,
          "id": "indx1_198"
        },
        "indx1_199": {
          "label": "Books",
          "x": 80859,
          "y": -2617,
          "id": "indx1_199"
        },
        "indx1_200": {
          "label": "R&D institutions",
          "x": 80889,
          "y": -2592,
          "id": "indx1_200"
        },
        "indx1_201": {
          "label": "Sites",
          "x": 80855,
          "y": -2567,
          "id": "indx1_201"
        },
        "indx1_202": {
          "label": "Magazines",
          "x": 80874,
          "y": -2542,
          "id": "indx1_202"
        },
        "indx1_203": {
          "label": "Articles",
          "x": 80862,
          "y": -2517,
          "id": "indx1_203"
        },
        "indx1_204": {
          "label": "Media content",
          "x": 80884,
          "y": -2492,
          "id": "indx1_204"
        },
        "indx1_205": {
          "label": "Misc. web links",
          "x": 80887,
          "y": -2467,
          "id": "indx1_205"
        },
        "indx1_206": {
          "label": "Projects",
          "x": 80865,
          "y": -2442,
          "id": "indx1_206"
        },
        "indx1_207": {
          "label": "Tools",
          "x": 80856,
          "y": -2417,
          "id": "indx1_207"
        },
        "indx1_208": {
          "label": "Organizations",
          "x": 80883,
          "y": -2392,
          "id": "indx1_208"
        },
        "indx1_209": {
          "label": "Standarts",
          "x": 80870,
          "y": -2367,
          "id": "indx1_209"
        },
        "indx1_210": {
          "label": "Forums, Groups",
          "x": 80891,
          "y": -2342,
          "id": "indx1_210"
        },
        "indx1_211": {
          "label": "Laws",
          "x": 80856,
          "y": -2317,
          "id": "indx1_211"
        },
        "indx1_212": {
          "label": "Adjacent Themes",
          "x": 80895,
          "y": -2292,
          "id": "indx1_212"
        },
        "indx1_213": {
          "label": "Questions",
          "x": 80635,
          "y": -2167,
          "id": "indx1_213"
        },
        "indx1_214": {
          "label": "Problems",
          "x": 80633,
          "y": -2067,
          "id": "indx1_214"
        },
        "indx1_215": {
          "label": "Goals",
          "x": 80621,
          "y": -1967,
          "id": "indx1_215"
        },
        "indx1_216": {
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
          "id": "indx1_216",
          "x": 85842,
          "y": -373,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_217": {
          "id": "indx1_217",
          "x": 81051,
          "y": -3366,
          "label": "#"
        },
        "indx1_218": {
          "id": "indx1_218",
          "x": 81073,
          "y": -3265,
          "label": "Multiline"
        },
        "indx1_219": {
          "id": "indx1_219",
          "x": 81196,
          "y": -3263,
          "label": "\"\"\"\nsome code\nsome code\n\"\"\""
        },
        "indx1_220": {
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
          "id": "indx1_220",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_221": {
          "label": "Development",
          "x": 80854,
          "y": 926,
          "id": "indx1_221"
        },
        "indx1_222": {
          "label": "12/18/2019",
          "x": 80987,
          "y": 926,
          "id": "indx1_222"
        },
        "indx1_223": {
          "label": "init",
          "x": 81104,
          "y": 926,
          "id": "indx1_223"
        },
        "indx1_224": {
          "label": "Notes",
          "x": 80831,
          "y": -160,
          "id": "indx1_224"
        },
        "indx1_225": {
          "label": "Dictionary of\nconcepts",
          "x": 80996,
          "y": -571,
          "id": "indx1_225"
        },
        "indx1_226": {
          "label": "Details, thoughts",
          "x": 81004,
          "y": -160,
          "id": "indx1_226"
        },
        "indx1_227": {
          "label": "Sections",
          "x": 80978,
          "y": 326,
          "id": "indx1_227"
        },
        "indx1_228": {
          "label": "Books",
          "x": 81068,
          "y": -60,
          "id": "indx1_228"
        },
        "indx1_229": {
          "label": "R&D institutions",
          "x": 81099,
          "y": -35,
          "id": "indx1_229"
        },
        "indx1_230": {
          "label": "Sites",
          "x": 81064,
          "y": -10,
          "id": "indx1_230"
        },
        "indx1_231": {
          "label": "Magazines",
          "x": 81083,
          "y": 15,
          "id": "indx1_231"
        },
        "indx1_232": {
          "label": "Articles",
          "x": 81072,
          "y": 40,
          "id": "indx1_232"
        },
        "indx1_233": {
          "label": "Media content",
          "x": 81094,
          "y": 65,
          "id": "indx1_233"
        },
        "indx1_234": {
          "label": "Misc. web links",
          "x": 81099,
          "y": 202,
          "id": "indx1_234"
        },
        "indx1_235": {
          "label": "Projects",
          "x": 81074,
          "y": 351,
          "id": "indx1_235"
        },
        "indx1_236": {
          "label": "Tools",
          "x": 81066,
          "y": 376,
          "id": "indx1_236"
        },
        "indx1_237": {
          "label": "Organizations",
          "x": 81093,
          "y": 401,
          "id": "indx1_237"
        },
        "indx1_238": {
          "label": "Standarts",
          "x": 81079,
          "y": 426,
          "id": "indx1_238"
        },
        "indx1_239": {
          "label": "Forums, Groups",
          "x": 81101,
          "y": 451,
          "id": "indx1_239"
        },
        "indx1_240": {
          "label": "Laws",
          "x": 81065,
          "y": 476,
          "id": "indx1_240"
        },
        "indx1_241": {
          "label": "Adjacent Themes",
          "x": 81104,
          "y": 501,
          "id": "indx1_241"
        },
        "indx1_242": {
          "label": "Questions",
          "x": 80844,
          "y": 626,
          "id": "indx1_242"
        },
        "indx1_243": {
          "label": "Problems",
          "x": 80842,
          "y": 726,
          "id": "indx1_243"
        },
        "indx1_244": {
          "label": "Goals",
          "x": 80831,
          "y": 826,
          "id": "indx1_244"
        },
        "indx1_245": {
          "id": "indx1_245",
          "x": 81300,
          "y": -582,
          "label": "like Maps or HashMaps"
        },
        "indx1_246": {
          "id": "indx1_246",
          "x": 81425,
          "y": 185,
          "label": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
          "link": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
        },
        "indx1_247": {
          "id": "indx1_247",
          "x": 81297,
          "y": -453,
          "label": "streetno = {\"1\": \"str1\",\n            \"2\": \"str2\",\n            \"3\": \"str3\",\n            \"4\": \"str4\",\n            \"5\": \"str5\" }"
        },
        "indx1_248": {
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
          "id": "indx1_248",
          "x": 85647,
          "y": -2580,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_249": {
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
          "id": "indx1_249",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_250": {
          "label": "Development",
          "x": 81167,
          "y": 3520,
          "id": "indx1_250"
        },
        "indx1_251": {
          "label": "12/19/2019",
          "x": 81300,
          "y": 3520,
          "id": "indx1_251"
        },
        "indx1_252": {
          "label": "init",
          "x": 81417,
          "y": 3520,
          "id": "indx1_252"
        },
        "indx1_253": {
          "label": "Notes",
          "x": 81144,
          "y": 2670,
          "id": "indx1_253"
        },
        "indx1_254": {
          "label": "Dictionary of\nconcepts",
          "x": 81323,
          "y": 1914,
          "id": "indx1_254"
        },
        "indx1_255": {
          "label": "Details, thoughts",
          "x": 81317,
          "y": 2670,
          "id": "indx1_255"
        },
        "indx1_256": {
          "label": "Sections",
          "x": 81291,
          "y": 2920,
          "id": "indx1_256"
        },
        "indx1_257": {
          "label": "Books",
          "x": 81381,
          "y": 2770,
          "id": "indx1_257"
        },
        "indx1_258": {
          "label": "R&D institutions",
          "x": 81412,
          "y": 2795,
          "id": "indx1_258"
        },
        "indx1_259": {
          "label": "Sites",
          "x": 81377,
          "y": 2820,
          "id": "indx1_259"
        },
        "indx1_260": {
          "label": "Magazines",
          "x": 81396,
          "y": 2845,
          "id": "indx1_260"
        },
        "indx1_261": {
          "label": "Articles",
          "x": 81385,
          "y": 2870,
          "id": "indx1_261"
        },
        "indx1_262": {
          "label": "Media content",
          "x": 81407,
          "y": 2895,
          "id": "indx1_262"
        },
        "indx1_263": {
          "label": "Misc. web links",
          "x": 81409,
          "y": 2920,
          "id": "indx1_263"
        },
        "indx1_264": {
          "label": "Projects",
          "x": 81387,
          "y": 2945,
          "id": "indx1_264"
        },
        "indx1_265": {
          "label": "Tools",
          "x": 81379,
          "y": 2970,
          "id": "indx1_265"
        },
        "indx1_266": {
          "label": "Organizations",
          "x": 81406,
          "y": 2995,
          "id": "indx1_266"
        },
        "indx1_267": {
          "label": "Standarts",
          "x": 81392,
          "y": 3020,
          "id": "indx1_267"
        },
        "indx1_268": {
          "label": "Forums, Groups",
          "x": 81414,
          "y": 3045,
          "id": "indx1_268"
        },
        "indx1_269": {
          "label": "Laws",
          "x": 81378,
          "y": 3070,
          "id": "indx1_269"
        },
        "indx1_270": {
          "label": "Adjacent Themes",
          "x": 81417,
          "y": 3095,
          "id": "indx1_270"
        },
        "indx1_271": {
          "label": "Questions",
          "x": 81157,
          "y": 3220,
          "id": "indx1_271"
        },
        "indx1_272": {
          "label": "Problems",
          "x": 81155,
          "y": 3320,
          "id": "indx1_272"
        },
        "indx1_273": {
          "label": "Goals",
          "x": 81144,
          "y": 3420,
          "id": "indx1_273"
        },
        "index-a-0": {
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
          "id": "index-a-0",
          "x": 85425,
          "y": 3333,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_275": {
          "id": "indx1_275",
          "x": 81964,
          "y": 1963,
          "label": "import subprocess\ngnuplot = subprocess.Popen([\"/usr/bin/gnuplot\"], \n                           stdin=subprocess.PIPE)\ngnuplot.stdin.write(\"set term dumb 79 25\\n\")\ngnuplot.stdin.write(\"plot '-' using 1:2 title 'Line1' with linespoints \\n\")\nfor i,j in zip(x,y):\n   gnuplot.stdin.write(\"%f %f\\n\" % (i,j))\ngnuplot.stdin.write(\"e\\n\")\ngnuplot.stdin.flush()"
        },
        "indx1_276": {
          "id": "indx1_276",
          "x": 81560,
          "y": 1969,
          "label": "Examples"
        },
        "indx1_277": {
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
          "id": "indx1_277",
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_278": {
          "label": "Development",
          "x": 80818,
          "y": -7057,
          "id": "indx1_278"
        },
        "indx1_279": {
          "label": "12/19/2019",
          "x": 80951,
          "y": -7057,
          "id": "indx1_279"
        },
        "indx1_280": {
          "label": "init",
          "x": 81068,
          "y": -7057,
          "id": "indx1_280"
        },
        "indx1_281": {
          "label": "Notes",
          "x": 80813,
          "y": -8259,
          "id": "indx1_281"
        },
        "indx1_282": {
          "label": "Dictionary of\nconcepts",
          "x": 80973,
          "y": -9548,
          "id": "indx1_282"
        },
        "indx1_283": {
          "label": "Details, thoughts",
          "x": 80986,
          "y": -8259,
          "id": "indx1_283"
        },
        "indx1_284": {
          "label": "Sections",
          "x": 80942,
          "y": -7657,
          "id": "indx1_284"
        },
        "indx1_285": {
          "label": "Books",
          "x": 81050,
          "y": -8159,
          "id": "indx1_285"
        },
        "indx1_286": {
          "label": "R&D institutions",
          "x": 81081,
          "y": -8134,
          "id": "indx1_286"
        },
        "indx1_287": {
          "label": "Sites",
          "x": 81046,
          "y": -8109,
          "id": "indx1_287"
        },
        "indx1_288": {
          "label": "Magazines",
          "x": 81065,
          "y": -8084,
          "id": "indx1_288"
        },
        "indx1_289": {
          "label": "Articles",
          "x": 81054,
          "y": -8059,
          "id": "indx1_289"
        },
        "indx1_290": {
          "label": "Media content",
          "x": 81076,
          "y": -8034,
          "id": "indx1_290"
        },
        "indx1_291": {
          "label": "Misc. web links",
          "x": 81077,
          "y": -7839,
          "id": "indx1_291"
        },
        "indx1_292": {
          "label": "Projects",
          "x": 81038,
          "y": -7632,
          "id": "indx1_292"
        },
        "indx1_293": {
          "label": "Tools",
          "x": 81029,
          "y": -7607,
          "id": "indx1_293"
        },
        "indx1_294": {
          "label": "Organizations",
          "x": 81057,
          "y": -7582,
          "id": "indx1_294"
        },
        "indx1_295": {
          "label": "Standarts",
          "x": 81043,
          "y": -7557,
          "id": "indx1_295"
        },
        "indx1_296": {
          "label": "Forums, Groups",
          "x": 81065,
          "y": -7532,
          "id": "indx1_296"
        },
        "indx1_297": {
          "label": "Laws",
          "x": 81029,
          "y": -7507,
          "id": "indx1_297"
        },
        "indx1_298": {
          "label": "Adjacent Themes",
          "x": 81068,
          "y": -7482,
          "id": "indx1_298"
        },
        "indx1_299": {
          "label": "Questions",
          "x": 80808,
          "y": -7357,
          "id": "indx1_299"
        },
        "indx1_300": {
          "label": "Problems",
          "x": 80806,
          "y": -7257,
          "id": "indx1_300"
        },
        "indx1_301": {
          "label": "Goals",
          "x": 80795,
          "y": -7157,
          "id": "indx1_301"
        },
        "indx1_302": {
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
          "id": "indx1_302",
          "x": 81265,
          "y": -9627
        },
        "indx1_303": {
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
          "id": "indx1_303",
          "x": 81678,
          "y": -9628,
          "link": "https://www.techbeamers.com/best-python-interpreter-execute-python-online/"
        },
        "indx1_304": {
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
          "id": "indx1_304",
          "x": 81545,
          "y": -9482,
          "link": "https://www.pythonanywhere.com/"
        },
        "indx1_305": {
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
          "id": "indx1_305",
          "x": 81241,
          "y": -9486
        },
        "indx1_306": {
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
          "id": "indx1_306",
          "x": 81576,
          "y": -9602,
          "link": "https://www.pythonanywhere.com/try-ipython/"
        },
        "indx1_307": {
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
          "id": "indx1_307",
          "x": 81502,
          "y": -9572,
          "link": "https://live.sympy.org/"
        },
        "indx1_308": {
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
          "id": "indx1_308",
          "x": 84787,
          "y": -9196,
          "shape": "box",
          "link": "",
          "borderWidth": ""
        },
        "indx1_309": {
          "id": "indx1_309",
          "x": 81458,
          "y": -7814,
          "label": "https://en.wikipedia.org/wiki/Python_(programming_language)",
          "link": "https://en.wikipedia.org/wiki/Python_(programming_language)"
        },
        "indx1_310": {
          "id": "indx1_310",
          "x": 81337,
          "y": -7874,
          "label": "https://www.python.org/",
          "link": "https://www.python.org/"
        },
        "indx1_311": {
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
          "x": 65006,
          "y": -8409,
          "id": "indx1_311"
        },
        "indx1_312": {
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
          "x": 64972,
          "y": -8384,
          "id": "indx1_312"
        },
        "indx1_313": {
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
          "x": 64991,
          "y": -8359,
          "id": "indx1_313"
        },
        "indx1_314": {
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
          "x": 64979,
          "y": -8334,
          "id": "indx1_314"
        },
        "indx1_315": {
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
          "x": 65001,
          "y": -8309,
          "id": "indx1_315"
        },
        "indx1_316": {
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
          "x": 65004,
          "y": -8284,
          "id": "indx1_316"
        },
        "indx1_317": {
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
          "x": 64982,
          "y": -8259,
          "id": "indx1_317"
        },
        "indx1_318": {
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
          "x": 64973,
          "y": -8234,
          "id": "indx1_318"
        },
        "indx1_319": {
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
          "x": 65000,
          "y": -8209,
          "id": "indx1_319"
        },
        "indx1_320": {
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
          "x": 64987,
          "y": -8184,
          "id": "indx1_320"
        },
        "indx1_321": {
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
          "x": 64973,
          "y": -8134,
          "id": "indx1_321"
        },
        "indx1_322": {
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
          "x": 65012,
          "y": -8109,
          "id": "indx1_322"
        },
        "indx1_323": {
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
          "label": "Details, thoughts",
          "id": "indx1_323",
          "x": 64920,
          "y": -8542,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_324": {
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
          "label": "Questions",
          "id": "indx1_324",
          "x": 64754,
          "y": -8004,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_325": {
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
          "label": "Problems",
          "id": "indx1_325",
          "x": 64752,
          "y": -7908,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_326": {
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
          "label": "Goals",
          "id": "indx1_326",
          "x": 64741,
          "y": -7814,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_327": {
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
          "label": "Development",
          "id": "indx1_327",
          "x": 64764,
          "y": -7689,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_328": {
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
          "label": "init",
          "id": "indx1_328",
          "x": 65050,
          "y": -7689,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_329": {
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
          "label": "Notes",
          "id": "indx1_329",
          "x": 64741,
          "y": -8536,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_330": {
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
          "label": "Dictionary of\nconcepts",
          "id": "indx1_330",
          "x": 64907,
          "y": -9186,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_331": {
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
          "id": "indx1_331",
          "x": 65416,
          "y": -9619,
          "shape": "box",
          "link": "index.html",
          "borderWidth": "0"
        },
        "indx1_332": {
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
          "id": "indx1_332",
          "x": 65484,
          "y": -9575,
          "shape": "box",
          "link": "mm-vis-js_code.html",
          "borderWidth": "0"
        },
        "indx1_333": {
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
          "id": "indx1_333",
          "x": 65483,
          "y": -9532,
          "shape": "box",
          "link": "mm-vis-js_docs.html",
          "borderWidth": "0"
        },
        "indx1_334": {
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
          "id": "indx1_334",
          "x": 65449,
          "y": -9481,
          "shape": "box",
          "link": "base.html",
          "borderWidth": "0"
        },
        "indx1_335": {
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
          "id": "indx1_335",
          "x": 65455,
          "y": -9430,
          "shape": "box",
          "link": "culture.html",
          "borderWidth": "0"
        },
        "indx1_336": {
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
          "id": "indx1_336",
          "x": 65464,
          "y": -9335,
          "shape": "box",
          "link": "javascript.html",
          "borderWidth": "0"
        },
        "indx1_337": {
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
          "id": "indx1_337",
          "x": 65447,
          "y": -9384,
          "shape": "box",
          "link": "ruby.html",
          "borderWidth": "0"
        },
        "indx1_338": {
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
          "id": "indx1_338",
          "x": 65455,
          "y": -9286,
          "shape": "box",
          "link": "python.html",
          "borderWidth": "0"
        },
        "indx1_339": {
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
          "id": "indx1_339",
          "x": 65452,
          "y": -9244,
          "shape": "box",
          "link": "music.html",
          "borderWidth": "0"
        },
        "indx1_340": {
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
          "id": "indx1_340",
          "x": 65450,
          "y": -9204,
          "shape": "box",
          "link": "math.html",
          "borderWidth": "0"
        },
        "indx1_341": {
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
          "id": "indx1_341",
          "x": 65449,
          "y": -9157,
          "shape": "box",
          "link": "code.html",
          "borderWidth": "0"
        },
        "indx1_342": {
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
          "id": "indx1_342",
          "x": 65471,
          "y": -9111,
          "shape": "box",
          "link": "engineering.html",
          "borderWidth": "0"
        },
        "indx1_343": {
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
          "id": "indx1_343",
          "x": 65454,
          "y": -9068,
          "shape": "box",
          "link": "news1.html",
          "borderWidth": "0"
        },
        "indx1_344": {
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
          "id": "indx1_344",
          "x": 65454,
          "y": -9029,
          "shape": "box",
          "link": "news2.html",
          "borderWidth": "0"
        },
        "indx1_345": {
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
          "id": "indx1_345",
          "x": 65180,
          "y": -9617,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_346": {
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
          "id": "indx1_346",
          "x": 65162,
          "y": -9573,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_347": {
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
          "id": "indx1_347",
          "x": 65161,
          "y": -9530,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_348": {
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
          "id": "indx1_348",
          "x": 65167,
          "y": -9479,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_349": {
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
          "id": "indx1_349",
          "x": 65137,
          "y": -9428,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_350": {
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
          "id": "indx1_350",
          "x": 65146,
          "y": -9333,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_351": {
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
          "id": "indx1_351",
          "x": 65130,
          "y": -9382,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_352": {
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
          "id": "indx1_352",
          "x": 65136,
          "y": -9284,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_353": {
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
          "id": "indx1_353",
          "x": 65132,
          "y": -9242,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_354": {
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
          "id": "indx1_354",
          "x": 65130,
          "y": -9202,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_355": {
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
          "label": "Code",
          "id": "indx1_355",
          "x": 65131,
          "y": -9155,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_356": {
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
          "label": "Engineering",
          "id": "indx1_356",
          "x": 65152,
          "y": -9109,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_357": {
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
          "label": "News1",
          "id": "indx1_357",
          "x": 65135,
          "y": -9066,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_358": {
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
          "label": "News2",
          "id": "indx1_358",
          "x": 65135,
          "y": -9027,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_359": {
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
          "label": "News3",
          "id": "indx1_359",
          "x": 65135,
          "y": -8990,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_360": {
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
          "label": "News4",
          "id": "indx1_360",
          "x": 65135,
          "y": -8944,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_361": {
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
          "label": "Nature",
          "id": "indx1_361",
          "x": 65135,
          "y": -8901,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_362": {
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
          "label": "Timelines",
          "id": "indx1_362",
          "x": 65144,
          "y": -8862,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_363": {
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
          "label": "sushilshik.github.com/news3.html",
          "id": "indx1_363",
          "x": 65454,
          "y": -8991,
          "shape": "box",
          "link": "news3.html",
          "borderWidth": "0"
        },
        "indx1_364": {
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
          "label": "sushilshik.github.com/news4.html",
          "id": "indx1_364",
          "x": 65454,
          "y": -8945,
          "shape": "box",
          "link": "news4.html",
          "borderWidth": "0"
        },
        "indx1_365": {
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
          "label": "sushilshik.github.com/nature.html",
          "id": "indx1_365",
          "x": 65454,
          "y": -8902,
          "shape": "box",
          "link": "nature.html",
          "borderWidth": "0"
        },
        "indx1_366": {
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
          "label": "sushilshik.github.com/timelines.html",
          "id": "indx1_366",
          "x": 65462,
          "y": -8863,
          "shape": "box",
          "link": "timelines.html",
          "borderWidth": "0"
        },
        "indx1_367": {
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
          "label": "Sections",
          "id": "indx1_367",
          "x": 64894,
          "y": -8273,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_368": {
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
          "label": "11/16/2019",
          "id": "indx1_368",
          "x": 64903,
          "y": -7685,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_369": {
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
          "id": "indx1_369",
          "x": 64284,
          "y": -8157,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_370": {
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
          "label": "Books",
          "id": "indx1_370",
          "x": 64976,
          "y": -8434,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_371": {
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
          "label": "Forums, Groups",
          "id": "indx1_371",
          "x": 65008,
          "y": -8159,
          "shape": "box",
          "link": "",
          "borderWidth": "0"
        },
        "indx1_372": {
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
          "label": "Jython",
          "id": "indx1_372",
          "x": 84703,
          "y": 6262,
          "shape": "box",
          "link": "",
          "borderWidth": "",
          "oldId": "e16c5a8d-aa54-4c24-bcb1-c9c0fd216e3b8565582823680"
        },
        "indx1_373": {
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
          "x": 81759,
          "y": 6835,
          "id": "indx1_373",
          "oldId": "92f53a00-cf65-456f-bfcf-6f6c88119d5b1471268270"
        },
        "indx1_374": {
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
          "x": 81725,
          "y": 6860,
          "id": "indx1_374",
          "oldId": "75ff23b4-3d0f-4c06-8061-4069494a326f1471268270"
        },
        "indx1_375": {
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
          "x": 81744,
          "y": 6885,
          "id": "indx1_375",
          "oldId": "1bc92ea3-79ba-4d40-816c-35cedc1c74bf1471268270"
        },
        "indx1_376": {
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
          "x": 81732,
          "y": 6910,
          "id": "indx1_376",
          "oldId": "2d9049d8-feaf-41cd-afb1-87515557983e1471268270"
        },
        "indx1_377": {
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
          "x": 81754,
          "y": 6935,
          "id": "indx1_377",
          "oldId": "51a5b447-fa28-4997-80ca-b7a96a69ef9e1471268270"
        },
        "indx1_378": {
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
          "x": 81755,
          "y": 7067,
          "id": "indx1_378",
          "oldId": "8a139418-94d2-4121-94a4-dfsa26213d241471268270"
        },
        "indx1_379": {
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
          "x": 81737,
          "y": 7201,
          "id": "indx1_379",
          "oldId": "76fc5be1-7bae-46ec-a649-1bc6509b378d1471268270"
        },
        "indx1_380": {
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
          "x": 81728,
          "y": 7226,
          "id": "indx1_380",
          "oldId": "21dc8bf2-6e0c-42cf-b702-d47f24af173a1471268270"
        },
        "indx1_381": {
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
          "x": 81755,
          "y": 7251,
          "id": "indx1_381",
          "oldId": "1f9b98e7-ca75-443c-952d-a1d0ba4766521471268270"
        },
        "indx1_382": {
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
          "x": 81742,
          "y": 7276,
          "id": "indx1_382",
          "oldId": "f9c77b6e-13d7-4687-9d7f-e858e5cf56851471268270"
        },
        "indx1_383": {
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
          "x": 81728,
          "y": 7326,
          "id": "indx1_383",
          "oldId": "f13fa072-1d46-45b2-b2b1-679177d88ba61471268270"
        },
        "indx1_384": {
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
          "x": 81767,
          "y": 7351,
          "id": "indx1_384",
          "oldId": "ab382182-58b3-4799-ad70-5340f6f6e88d1471268270"
        },
        "indx1_385": {
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
          "label": "Details, thoughts",
          "id": "indx1_385",
          "x": 81673,
          "y": 6702,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1672278270"
        },
        "indx1_386": {
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
          "label": "Questions",
          "id": "indx1_386",
          "x": 81509,
          "y": 7456,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1677768270"
        },
        "indx1_387": {
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
          "label": "Problems",
          "id": "indx1_387",
          "x": 81507,
          "y": 7552,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1678r5t270"
        },
        "indx1_388": {
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
          "label": "Goals",
          "id": "indx1_388",
          "x": 81496,
          "y": 7646,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1678678270"
        },
        "indx1_389": {
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
          "label": "Development",
          "id": "indx1_389",
          "x": 81519,
          "y": 7771,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1677djk270"
        },
        "indx1_390": {
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
          "label": "init",
          "id": "indx1_390",
          "x": 81805,
          "y": 7771,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a167558270"
        },
        "indx1_391": {
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
          "label": "Notes",
          "id": "indx1_391",
          "x": 81494,
          "y": 6708,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1674785098270"
        },
        "indx1_392": {
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
          "label": "Sections",
          "id": "indx1_392",
          "x": 81647,
          "y": 7078,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1672278628270"
        },
        "indx1_393": {
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
          "label": "6/11/2020",
          "id": "indx1_393",
          "x": 81658,
          "y": 7775,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a167227862278270"
        },
        "indx1_394": {
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
          "label": "Jython",
          "id": "indx1_394",
          "x": 81039,
          "y": 7303,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1672278621468270"
        },
        "indx1_395": {
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
          "label": "Books",
          "id": "indx1_395",
          "x": 81729,
          "y": 6810,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a167227862958270"
        },
        "indx1_396": {
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
          "label": "Forums, Groups",
          "id": "indx1_396",
          "x": 81763,
          "y": 7301,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "1376bcb3-aff5-472c-b93a-4e636983a1672278624278270"
        },
        "indx1_397": {
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
          "label": "Dictionary of\nconcepts",
          "id": "indx1_397",
          "x": 81660,
          "y": 5962,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "aac1163f-fc2b-4f9c-a767-e2e19d8bd93b5330"
        },
        "indx1_398": {
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
          "label": "https://en.wikipedia.org/wiki/Jython",
          "id": "indx1_398",
          "x": 82053,
          "y": 7064,
          "shape": "box",
          "link": "https://en.wikipedia.org/wiki/Jython",
          "borderWidth": "0",
          "oldId": "aky1163f-fc2b-4f9c-a767-e2e19d8bd93b5330521"
        },
        "indx1_362c0": {
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
          "label": "Java",
          "id": "indx1_362c0",
          "x": 65129,
          "y": -8824,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "indx1_362"
        },
        "indx1_362c1": {
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
          "label": "sushilshik.github.com/java.html",
          "id": "indx1_362c1",
          "x": 65447,
          "y": -8824,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "indx1_362"
        },
        "indx1_362c2": {
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
          "label": "java-api",
          "id": "indx1_362c2",
          "x": 65139,
          "y": -8786,
          "shape": "box",
          "link": "",
          "borderWidth": "0",
          "oldId": "indx1_362"
        },
        "indx1_362c3": {
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
          "label": "sushilshik.github.com/java-api.html",
          "id": "indx1_362c3",
          "x": 65459,
          "y": -8786,
          "shape": "box",
          "link": "java-api.html",
          "borderWidth": "0",
          "oldId": "indx1_362"
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
        "indx1_685": {
          "from": "indx1_115",
          "to": "indx1_116",
          "id": "indx1_685"
        },
        "indx1_686": {
          "from": "indx1_115",
          "to": "indx1_118",
          "id": "indx1_686"
        },
        "indx1_687": {
          "from": "indx1_115",
          "to": "indx1_120",
          "id": "indx1_687"
        },
        "indx1_688": {
          "from": "indx1_118",
          "to": "indx1_121",
          "id": "indx1_688"
        },
        "indx1_689": {
          "from": "indx1_121",
          "to": "indx1_122",
          "id": "indx1_689"
        },
        "indx1_690": {
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
          "id": "indx1_690",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9913",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88913"
        },
        "indx1_691": {
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
          "id": "indx1_691",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9122",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88122"
        },
        "indx1_692": {
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
          "id": "indx1_692",
          "from": "9903a242-2c5d-499c-92d9-995ef46f8a37559",
          "to": "10edfbfa-9872-41cf-90d6-d2f4ffa2cf11559"
        },
        "indx1_693": {
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
          "id": "indx1_693",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9915",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88915"
        },
        "indx1_694": {
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
          "id": "indx1_694",
          "from": "c8399e46-42dc-4da9-a342-f7f2eab6f63328",
          "to": "e3672d36-d501-41f6-a3eb-388d854ba03c28"
        },
        "indx1_695": {
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
          "id": "indx1_695",
          "from": "9903a242-2c5d-499c-92d9-995ef46f8a37878424",
          "to": "92c1576f-4811-4b8e-a6b9-ee6d22c62a5a878424"
        },
        "indx1_696": {
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
          "id": "indx1_696",
          "from": "d3454ab9-a273-4420-ad38-0b06f5997f8275265",
          "to": "f81f4061-a7cc-4f5d-9983-e660f227ce8f75265"
        },
        "indx1_697": {
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
          "id": "indx1_697",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9701",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88701"
        },
        "indx1_698": {
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
          "id": "indx1_698",
          "from": "c8399e46-42dc-4da9-a342-f7f2eab6f633472",
          "to": "e3672d36-d501-41f6-a3eb-388d854ba03c472"
        },
        "indx1_699": {
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
          "id": "indx1_699",
          "from": "a041529a-7ce0-436e-a317-0c0daa8bfb17399574",
          "to": "ffd5c822-a623-4020-8b14-8a2c450d5e9f399574"
        },
        "indx1_700": {
          "from": "indx1_116",
          "to": "indx1_119",
          "id": "indx1_700"
        },
        "indx1_701": {
          "from": "indx1_117",
          "to": "indx1_119",
          "id": "indx1_701"
        },
        "indx1_702": {
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
          "id": "indx1_702",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "a858ce52-3291-4b41-bc1e-323abc00749d599"
        },
        "indx1_703": {
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
          "id": "indx1_703",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "1d2c3a1c-4005-44be-ba6a-4e7faa0498f3599"
        },
        "indx1_704": {
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
          "id": "indx1_704",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "b2154aae-1555-4fc5-b664-a36fb0117a54599"
        },
        "indx1_705": {
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
          "id": "indx1_705",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "875bf84b-8998-48b6-aa65-97ab3bcc5951599"
        },
        "indx1_706": {
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
          "id": "indx1_706",
          "from": "8b9ff527-e24b-45bf-ad6a-60ece754a290599",
          "to": "6f3a0058-25a1-49e3-bb7c-3e0c313d5e75599"
        },
        "indx1_707": {
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
          "id": "indx1_707",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "f0585e53-4afc-4a84-98b6-672c872fd7ca599"
        },
        "indx1_708": {
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
          "id": "indx1_708",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "6be683b4-143f-4bbd-9a52-734d0a9aa9ba599"
        },
        "indx1_709": {
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
          "id": "indx1_709",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "3d509b43-44bc-4983-b8f4-77c19adc7ffa599"
        },
        "indx1_710": {
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
          "id": "indx1_710",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "b1b5926d-b559-4b69-a20a-4edd19660534599"
        },
        "indx1_711": {
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
          "id": "indx1_711",
          "from": "c0aeb331-2825-4b9e-9bd6-7ce3fc883bc7599",
          "to": "ea9263df-78a2-4162-8046-d34c3eb8e031599"
        },
        "indx1_712": {
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
          "id": "indx1_712",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "540a9870-0529-4b06-9de0-e4de2bc3fc87599"
        },
        "indx1_713": {
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
          "id": "indx1_713",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "30247f6c-7ed4-4829-af83-9f67b204193f599"
        },
        "indx1_714": {
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
          "id": "indx1_714",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "485dcd25-0443-407d-8b32-fc640154cad1599"
        },
        "indx1_715": {
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
          "id": "indx1_715",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "e9c944d0-9a94-419c-8108-8b8c0ca732a1599"
        },
        "indx1_716": {
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
          "id": "indx1_716",
          "from": "2f4a7513-b97b-4d59-847c-4010476d31e6599",
          "to": "ef20c817-4e5b-4850-a554-1a10f9f8a586599"
        },
        "indx1_717": {
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
          "id": "indx1_717",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "c265228f-7a42-4f5b-ae09-4968e660d922599"
        },
        "indx1_718": {
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
          "id": "indx1_718",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "adf37994-f52f-43fe-8c46-de3d24f49a5f599"
        },
        "indx1_719": {
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
          "id": "indx1_719",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "eb72029f-bfe4-403d-a720-ff89c2b4f94e599"
        },
        "indx1_720": {
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
          "id": "indx1_720",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "14a16f63-3b55-489f-bf21-ee639776c71c599"
        },
        "indx1_721": {
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
          "id": "indx1_721",
          "from": "d72e3512-5f28-439f-82fd-4f12c136870f599",
          "to": "79a3d8ef-2677-4066-8195-a7096bb31a2c599"
        },
        "indx1_722": {
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
          "id": "indx1_722",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "45a42c5a-9f8e-4aa0-804c-4b03bb72a254599"
        },
        "indx1_723": {
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
          "id": "indx1_723",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "00e5dcc0-f072-44be-8583-bff8b541528c599"
        },
        "indx1_724": {
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
          "id": "indx1_724",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "b64e6583-4e97-4012-8b59-45605fcf3c30599"
        },
        "indx1_725": {
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
          "id": "indx1_725",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "c7e5c182-bcce-4215-9a2f-f042f5567d95599"
        },
        "indx1_726": {
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
          "id": "indx1_726",
          "from": "a9ea6206-d12d-4e22-8a59-e30e75966367599",
          "to": "bdc909ad-7a0a-4b7c-9ddb-350d61a3cb28599"
        },
        "indx1_727": {
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
          "id": "indx1_727",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "bebfc265-af1a-4bd3-b618-b996f8c6fc47599"
        },
        "indx1_728": {
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
          "id": "indx1_728",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "a4be31b6-786a-45f8-adb6-995d112e9fa1599"
        },
        "indx1_729": {
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
          "id": "indx1_729",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "cc72c521-c59e-4a03-9607-fe4fd1f25067599"
        },
        "indx1_730": {
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
          "id": "indx1_730",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "db3146fe-8ec6-4f24-ac7a-9f05efcffa49599"
        },
        "indx1_731": {
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
          "id": "indx1_731",
          "from": "d45603bf-3a49-439a-ba51-32eabad9bdf8599",
          "to": "fd17ade9-7b15-4cea-9c53-189aa20c38a6599"
        },
        "indx1_732": {
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
          "id": "indx1_732",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "00a0641a-c61f-46bc-bd60-e81d02e75ad9599"
        },
        "indx1_733": {
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
          "id": "indx1_733",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "67990e1d-413a-4116-8e64-33fa6fa616a5599"
        },
        "indx1_734": {
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
          "id": "indx1_734",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "e00c5d93-cc4f-43a3-b22f-ebab9d8b9cda599"
        },
        "indx1_735": {
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
          "id": "indx1_735",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "35189674-5251-47c2-8acb-ba0ca3a38a26599"
        },
        "indx1_736": {
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
          "id": "indx1_736",
          "from": "9d163881-fd3c-4c28-83d7-6b94fdfed42a599",
          "to": "b4397b69-3768-41f5-bedf-b1ffc2de9d66599"
        },
        "indx1_737": {
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
          "id": "indx1_737",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "e242adb4-77ba-452a-81c6-d29edd117075599"
        },
        "indx1_738": {
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
          "id": "indx1_738",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "ab18673b-0441-4828-8c38-1f22228818cb599"
        },
        "indx1_739": {
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
          "id": "indx1_739",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "b88d763f-3f02-4590-aa42-b5f138d1d6d1599"
        },
        "indx1_740": {
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
          "id": "indx1_740",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "5adc140a-4307-4c4b-ad4a-a31f2f27d7f0599"
        },
        "indx1_741": {
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
          "id": "indx1_741",
          "from": "d21fa3e2-fe64-4ef5-bbd3-89d4a9ded9ed599",
          "to": "94fa4c3d-89fc-43ad-8eff-5a7f044e8e25599"
        },
        "indx1_742": {
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
          "id": "indx1_742",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "cac322b9-d1bc-4eaf-be51-ae4c583bd337599"
        },
        "indx1_743": {
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
          "id": "indx1_743",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "c71b6ede-4669-4326-a206-63742e8af265599"
        },
        "indx1_744": {
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
          "id": "indx1_744",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "d8e65f72-2f61-47d5-8e6e-d970b389546d599"
        },
        "indx1_745": {
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
          "id": "indx1_745",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "1315cca2-e03a-4a68-932d-7e05b684b177599"
        },
        "indx1_746": {
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
          "id": "indx1_746",
          "from": "a7e59b44-e221-4e14-9b03-b1c09087a05c599",
          "to": "a23a4bc4-0f26-496e-8284-45480d76785e599"
        },
        "indx1_747": {
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
          "id": "indx1_747",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "2aafb4ef-0844-4800-98cc-51b8a998a39b599"
        },
        "indx1_748": {
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
          "id": "indx1_748",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "d7d7962a-5c28-4418-becb-354b4c65fe67599"
        },
        "indx1_749": {
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
          "id": "indx1_749",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "06ec767f-d46a-422b-afd8-9c976177546d599"
        },
        "indx1_750": {
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
          "id": "indx1_750",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "9426e27d-7952-4737-bde7-d18abb70d1b8599"
        },
        "indx1_751": {
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
          "id": "indx1_751",
          "from": "a0f419d9-bc1f-468f-9088-336690e82d8e599",
          "to": "2ddaedcd-38fc-41dd-8761-cfa59af3be65599"
        },
        "indx1_752": {
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
          "id": "indx1_752",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "005e3a03-ee76-4234-957f-724274eb48e8599"
        },
        "indx1_753": {
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
          "id": "indx1_753",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "1dfe2726-cc38-4f05-98c0-cebe0af44fcc599"
        },
        "indx1_754": {
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
          "id": "indx1_754",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "f718316c-a935-4aae-b4ac-37007d7f48bf599"
        },
        "indx1_755": {
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
          "id": "indx1_755",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "0888aae1-0912-4263-8c50-084634a983c5599"
        },
        "indx1_756": {
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
          "id": "indx1_756",
          "from": "c7f13dce-ee97-4ccf-8620-44f8812e1809599",
          "to": "d0553eab-fb1d-4205-8086-4d0e65caeeb5599"
        },
        "indx1_757": {
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
          "id": "indx1_757",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "94821b7c-d6f0-4095-a834-bc1607785cc7599"
        },
        "indx1_758": {
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
          "id": "indx1_758",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "5d497d7e-3ed2-48a0-a64b-d03ac83c3a72599"
        },
        "indx1_759": {
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
          "id": "indx1_759",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "16f918a0-000f-4f18-958a-c5a7a58bd024599"
        },
        "indx1_760": {
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
          "id": "indx1_760",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "221b1475-d6f4-43d1-be40-c02fb677addf599"
        },
        "indx1_761": {
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
          "id": "indx1_761",
          "from": "f7a6d7a0-c0a3-408c-810c-56303babed77599",
          "to": "a314c3d9-0b2f-4a07-8212-f715e12da323599"
        },
        "indx1_762": {
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
          "id": "indx1_762",
          "from": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd74580",
          "to": "7eba903e-480c-4604-a071-464edc0989fe580"
        },
        "indx1_763": {
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
          "id": "indx1_763",
          "from": "e14b01dd-2c74-49f5-a1f1-3f43c71260e9399420",
          "to": "940f667a-13a1-44ab-8317-0378bb46bd88399420"
        },
        "indx1_764": {
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
          "id": "indx1_764",
          "from": "7eba903e-480c-4604-a071-464edc0989fe8",
          "to": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd745808"
        },
        "indx1_765": {
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
          "id": "indx1_765",
          "from": "fe89498b-1143-4625-85e9-cbfa050f660f108339",
          "to": "2b5a7e21-bbe0-4e0b-87b1-6a5cac35d9be339"
        },
        "indx1_766": {
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
          "id": "indx1_766",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "457030de-cfe6-4d37-a7a6-d6866381297c666"
        },
        "indx1_767": {
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
          "id": "indx1_767",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "ede118f3-6655-436d-8d21-3068e3514e1e666"
        },
        "indx1_768": {
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
          "id": "indx1_768",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666"
        },
        "indx1_769": {
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
          "id": "indx1_769",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "69d20fc0-db34-4a47-8b7d-e5b52c4f661a666"
        },
        "indx1_770": {
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
          "id": "indx1_770",
          "from": "5db6b9cb-24a7-4adb-92dc-5c17ac2b0a6a108666",
          "to": "9414c1cb-211f-40c9-98ee-daa5fbd666e6666"
        },
        "indx1_771": {
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
          "id": "indx1_771",
          "from": "ede118f3-6655-436d-8d21-3068e3514e1e666296",
          "to": "f9916ce1-34a1-4874-8ea0-83b1b3f8c73a296"
        },
        "indx1_772": {
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
          "id": "indx1_772",
          "from": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666799",
          "to": "143d527a-8e6c-4fdc-8a06-25574e14b5ee799"
        },
        "indx1_773": {
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
          "id": "indx1_773",
          "from": "62e3ea4c-4de0-481d-9e91-e8665ca4a6ee666799",
          "to": "9bfe0b09-35bd-4640-b368-cc91880af162799"
        },
        "indx1_774": {
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
          "id": "indx1_774",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "b1516f1d-8173-4439-be0a-1d1b8587c8ac584"
        },
        "indx1_775": {
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
          "id": "indx1_775",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "d510d77a-7df9-49d1-a5c7-a1e0f64e40d4584"
        },
        "indx1_776": {
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
          "id": "indx1_776",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "5a22a7a8-8a48-4e88-9aff-b6c68fae7a35584"
        },
        "indx1_777": {
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
          "id": "indx1_777",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "5d7e88aa-6943-40a1-bbf2-c1a32f1ddaf9584"
        },
        "indx1_778": {
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
          "id": "indx1_778",
          "from": "0cea3f1a-6404-4d97-bded-787249d4b75f108584",
          "to": "d8f1645d-246b-4db7-8971-c64250f5f71e584"
        },
        "indx1_779": {
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
          "id": "indx1_779",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "0d9b0c9d-5846-4d1d-9b44-fd073848c4ba402"
        },
        "indx1_780": {
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
          "id": "indx1_780",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "77ad5196-96c8-4172-b9c3-f0588b30032a402"
        },
        "indx1_781": {
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
          "id": "indx1_781",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "ec5a58b9-22fe-49c5-8872-3e0c6b0f951b402"
        },
        "indx1_782": {
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
          "id": "indx1_782",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "c80bd334-b60c-4868-ae4e-f0c57af0b219402"
        },
        "indx1_783": {
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
          "id": "indx1_783",
          "from": "37bb9617-7fa4-456e-af47-83f0a9a6b091402",
          "to": "9b55c90d-ccdb-48bf-8b44-df6b0916e979402"
        },
        "indx1_784": {
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
          "id": "indx1_784",
          "from": "c265228f-7a42-4f5b-ae09-4968e660d922559",
          "to": "72a29b77-7945-40c7-aabf-56d95597916b559"
        },
        "indx1_785": {
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
          "id": "indx1_785",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b559",
          "to": "01833143-dc1d-4f15-b6dc-71d4232a5dca559"
        },
        "indx1_786": {
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
          "id": "indx1_786",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b559",
          "to": "bbfa4068-4e91-4d81-aa66-b3a75c20e228559"
        },
        "indx1_787": {
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
          "id": "indx1_787",
          "from": "72a29b77-7945-40c7-aabf-56d95597916b263",
          "to": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263"
        },
        "indx1_788": {
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
          "id": "indx1_788",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263",
          "to": "d723c162-2431-49ca-b38c-70f18ac64ca1263"
        },
        "indx1_789": {
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
          "id": "indx1_789",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228263",
          "to": "65a326ea-1281-41f1-9352-6cb0a9e6a2c8263"
        },
        "indx1_790": {
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
          "id": "indx1_790",
          "from": "bbfa4068-4e91-4d81-aa66-b3a75c20e228678",
          "to": "d723c162-2431-49ca-b38c-70f18ac64ca1678"
        },
        "indx1_791": {
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
          "id": "indx1_791",
          "from": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd74580182953517",
          "to": "a7a52c30-e1c7-4e9a-a6ea-cdee76d2bd745808182953517"
        },
        "indx1_792": {
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
          "id": "indx1_792",
          "from": "indx1_151",
          "to": "indx1_124"
        },
        "indx1_793": {
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
          "id": "indx1_793",
          "from": "indx1_125",
          "to": "indx1_126"
        },
        "indx1_794": {
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
          "id": "indx1_794",
          "from": "indx1_125",
          "to": "indx1_129"
        },
        "indx1_795": {
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
          "id": "indx1_795",
          "from": "indx1_125",
          "to": "indx1_147"
        },
        "indx1_796": {
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
          "id": "indx1_796",
          "from": "indx1_125",
          "to": "indx1_148"
        },
        "indx1_797": {
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
          "id": "indx1_797",
          "from": "indx1_125",
          "to": "indx1_149"
        },
        "indx1_798": {
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
          "id": "indx1_798",
          "from": "indx1_126",
          "to": "indx1_127"
        },
        "indx1_799": {
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
          "id": "indx1_799",
          "from": "indx1_127",
          "to": "indx1_128"
        },
        "indx1_800": {
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
          "id": "indx1_800",
          "from": "indx1_129",
          "to": "indx1_130"
        },
        "indx1_801": {
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
          "id": "indx1_801",
          "from": "indx1_129",
          "to": "indx1_131"
        },
        "indx1_802": {
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
          "id": "indx1_802",
          "from": "indx1_129",
          "to": "indx1_132"
        },
        "indx1_803": {
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
          "id": "indx1_803",
          "from": "indx1_130",
          "to": "indx1_151"
        },
        "indx1_804": {
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
          "id": "indx1_804",
          "from": "indx1_131",
          "to": "indx1_152"
        },
        "indx1_805": {
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
          "id": "indx1_805",
          "from": "indx1_132",
          "to": "indx1_133"
        },
        "indx1_806": {
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
          "id": "indx1_806",
          "from": "indx1_132",
          "to": "indx1_134"
        },
        "indx1_807": {
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
          "id": "indx1_807",
          "from": "indx1_132",
          "to": "indx1_135"
        },
        "indx1_808": {
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
          "id": "indx1_808",
          "from": "indx1_132",
          "to": "indx1_136"
        },
        "indx1_809": {
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
          "id": "indx1_809",
          "from": "indx1_132",
          "to": "indx1_137"
        },
        "indx1_810": {
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
          "id": "indx1_810",
          "from": "indx1_132",
          "to": "indx1_138"
        },
        "indx1_811": {
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
          "id": "indx1_811",
          "from": "indx1_132",
          "to": "indx1_139"
        },
        "indx1_812": {
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
          "id": "indx1_812",
          "from": "indx1_132",
          "to": "indx1_140"
        },
        "indx1_813": {
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
          "id": "indx1_813",
          "from": "indx1_132",
          "to": "indx1_141"
        },
        "indx1_814": {
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
          "id": "indx1_814",
          "from": "indx1_132",
          "to": "indx1_142"
        },
        "indx1_815": {
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
          "id": "indx1_815",
          "from": "indx1_132",
          "to": "indx1_143"
        },
        "indx1_816": {
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
          "id": "indx1_816",
          "from": "indx1_132",
          "to": "indx1_144"
        },
        "indx1_817": {
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
          "id": "indx1_817",
          "from": "indx1_132",
          "to": "indx1_145"
        },
        "indx1_818": {
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
          "id": "indx1_818",
          "from": "indx1_132",
          "to": "indx1_146"
        },
        "indx1_819": {
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
          "id": "indx1_819",
          "from": "indx1_152",
          "to": "indx1_153"
        },
        "indx1_820": {
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
          "id": "indx1_820",
          "from": "indx1_152",
          "to": "indx1_156"
        },
        "indx1_821": {
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
          "id": "indx1_821",
          "from": "indx1_152",
          "to": "indx1_157"
        },
        "indx1_822": {
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
          "id": "indx1_822",
          "from": "indx1_153",
          "to": "indx1_154"
        },
        "indx1_823": {
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
          "id": "indx1_823",
          "from": "indx1_153",
          "to": "indx1_155"
        },
        "indx1_824": {
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
          "id": "indx1_824",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1210",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6210"
        },
        "indx1_825": {
          "from": "indx1_120",
          "to": "indx1_158",
          "id": "indx1_825"
        },
        "indx1_826": {
          "from": "indx1_158",
          "to": "indx1_159",
          "id": "indx1_826"
        },
        "indx1_827": {
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
          "id": "indx1_827",
          "from": "04e78b73-13a2-490c-98e1-ac7755f8bf1f936281",
          "to": "62788897-754a-4ee0-ba6a-b45277e087c0281"
        },
        "indx1_828": {
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
          "id": "indx1_828",
          "from": "66ad461f-62cf-40fb-9110-104c2484874c690",
          "to": "3bdafb97-29b0-429c-8fa8-7017155935d7690"
        },
        "indx1_829": {
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
          "id": "indx1_829",
          "from": "66ad461f-62cf-40fb-9110-104c2484874c690",
          "to": "291ac173-2642-4077-a339-2f7a9352ba80690"
        },
        "indx1_830": {
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
          "id": "indx1_830",
          "from": "3cebcdde-eb24-4d68-9c6f-85f02e6ca6c6709204339",
          "to": "063a7ffc-4975-4000-9c73-2c221ec4f7f5709204339"
        },
        "indx1_831": {
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
          "id": "indx1_831",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609365",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2365"
        },
        "indx1_832": {
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
          "id": "indx1_832",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "849f7b5d-b9aa-4aa2-a527-8b8a5f654712728875846"
        },
        "indx1_833": {
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
          "id": "indx1_833",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6728875846"
        },
        "indx1_834": {
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
          "id": "indx1_834",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "fecf5e72-1e19-410e-87b8-f36ff58504b6210728875846"
        },
        "indx1_835": {
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
          "id": "indx1_835",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875846"
        },
        "indx1_836": {
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
          "id": "indx1_836",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145846"
        },
        "indx1_837": {
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
          "id": "indx1_837",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680846"
        },
        "indx1_838": {
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
          "id": "indx1_838",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680296846"
        },
        "indx1_839": {
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
          "id": "indx1_839",
          "from": "556f77a1-e03a-4cc9-88d9-2dda8655e7f1609846",
          "to": "f98845b0-a393-4a51-ba8d-299765f501f2158728875145680296120846"
        },
        "indx1_840": {
          "from": "indx1_160",
          "to": "indx1_161",
          "id": "indx1_840"
        },
        "indx1_841": {
          "from": "indx1_161",
          "to": "indx1_162",
          "id": "indx1_841"
        },
        "indx1_842": {
          "from": "indx1_162",
          "to": "indx1_163",
          "id": "indx1_842"
        },
        "indx1_843": {
          "from": "indx1_160",
          "to": "indx1_164",
          "id": "indx1_843"
        },
        "indx1_844": {
          "from": "indx1_164",
          "to": "indx1_165",
          "id": "indx1_844"
        },
        "indx1_845": {
          "from": "indx1_164",
          "to": "indx1_166",
          "id": "indx1_845"
        },
        "indx1_846": {
          "from": "indx1_164",
          "to": "indx1_167",
          "id": "indx1_846"
        },
        "indx1_847": {
          "from": "indx1_167",
          "to": "indx1_168",
          "id": "indx1_847"
        },
        "indx1_848": {
          "from": "indx1_167",
          "to": "indx1_169",
          "id": "indx1_848"
        },
        "indx1_849": {
          "from": "indx1_167",
          "to": "indx1_170",
          "id": "indx1_849"
        },
        "indx1_850": {
          "from": "indx1_167",
          "to": "indx1_171",
          "id": "indx1_850"
        },
        "indx1_851": {
          "from": "indx1_167",
          "to": "indx1_172",
          "id": "indx1_851"
        },
        "indx1_852": {
          "from": "indx1_167",
          "to": "indx1_173",
          "id": "indx1_852"
        },
        "indx1_853": {
          "from": "indx1_167",
          "to": "indx1_174",
          "id": "indx1_853"
        },
        "indx1_854": {
          "from": "indx1_167",
          "to": "indx1_175",
          "id": "indx1_854"
        },
        "indx1_855": {
          "from": "indx1_167",
          "to": "indx1_176",
          "id": "indx1_855"
        },
        "indx1_856": {
          "from": "indx1_167",
          "to": "indx1_177",
          "id": "indx1_856"
        },
        "indx1_857": {
          "from": "indx1_167",
          "to": "indx1_178",
          "id": "indx1_857"
        },
        "indx1_858": {
          "from": "indx1_167",
          "to": "indx1_179",
          "id": "indx1_858"
        },
        "indx1_859": {
          "from": "indx1_167",
          "to": "indx1_180",
          "id": "indx1_859"
        },
        "indx1_860": {
          "from": "indx1_167",
          "to": "indx1_181",
          "id": "indx1_860"
        },
        "indx1_861": {
          "from": "indx1_160",
          "to": "indx1_182",
          "id": "indx1_861"
        },
        "indx1_862": {
          "from": "indx1_160",
          "to": "indx1_183",
          "id": "indx1_862"
        },
        "indx1_863": {
          "from": "indx1_160",
          "to": "indx1_184",
          "id": "indx1_863"
        },
        "indx1_864": {
          "from": "indx1_165",
          "to": "indx1_185",
          "id": "indx1_864"
        },
        "indx1_865": {
          "from": "indx1_188",
          "to": "indx1_189",
          "id": "indx1_865"
        },
        "indx1_866": {
          "from": "indx1_185",
          "to": "indx1_186",
          "id": "indx1_866"
        },
        "indx1_867": {
          "from": "indx1_185",
          "to": "indx1_187",
          "id": "indx1_867"
        },
        "indx1_868": {
          "from": "indx1_185",
          "to": "indx1_188",
          "id": "indx1_868"
        },
        "indx1_869": {
          "from": "indx1_191",
          "to": "indx1_192",
          "id": "indx1_869"
        },
        "indx1_870": {
          "from": "indx1_192",
          "to": "indx1_193",
          "id": "indx1_870"
        },
        "indx1_871": {
          "from": "indx1_193",
          "to": "indx1_194",
          "id": "indx1_871"
        },
        "indx1_872": {
          "from": "indx1_191",
          "to": "indx1_195",
          "id": "indx1_872"
        },
        "indx1_873": {
          "from": "indx1_195",
          "to": "indx1_196",
          "id": "indx1_873"
        },
        "indx1_874": {
          "from": "indx1_195",
          "to": "indx1_197",
          "id": "indx1_874"
        },
        "indx1_875": {
          "from": "indx1_195",
          "to": "indx1_198",
          "id": "indx1_875"
        },
        "indx1_876": {
          "from": "indx1_198",
          "to": "indx1_199",
          "id": "indx1_876"
        },
        "indx1_877": {
          "from": "indx1_198",
          "to": "indx1_200",
          "id": "indx1_877"
        },
        "indx1_878": {
          "from": "indx1_198",
          "to": "indx1_201",
          "id": "indx1_878"
        },
        "indx1_879": {
          "from": "indx1_198",
          "to": "indx1_202",
          "id": "indx1_879"
        },
        "indx1_880": {
          "from": "indx1_198",
          "to": "indx1_203",
          "id": "indx1_880"
        },
        "indx1_881": {
          "from": "indx1_198",
          "to": "indx1_204",
          "id": "indx1_881"
        },
        "indx1_882": {
          "from": "indx1_198",
          "to": "indx1_205",
          "id": "indx1_882"
        },
        "indx1_883": {
          "from": "indx1_198",
          "to": "indx1_206",
          "id": "indx1_883"
        },
        "indx1_884": {
          "from": "indx1_198",
          "to": "indx1_207",
          "id": "indx1_884"
        },
        "indx1_885": {
          "from": "indx1_198",
          "to": "indx1_208",
          "id": "indx1_885"
        },
        "indx1_886": {
          "from": "indx1_198",
          "to": "indx1_209",
          "id": "indx1_886"
        },
        "indx1_887": {
          "from": "indx1_198",
          "to": "indx1_210",
          "id": "indx1_887"
        },
        "indx1_888": {
          "from": "indx1_198",
          "to": "indx1_211",
          "id": "indx1_888"
        },
        "indx1_889": {
          "from": "indx1_198",
          "to": "indx1_212",
          "id": "indx1_889"
        },
        "indx1_890": {
          "from": "indx1_191",
          "to": "indx1_213",
          "id": "indx1_890"
        },
        "indx1_891": {
          "from": "indx1_191",
          "to": "indx1_214",
          "id": "indx1_891"
        },
        "indx1_892": {
          "from": "indx1_191",
          "to": "indx1_215",
          "id": "indx1_892"
        },
        "indx1_893": {
          "from": "indx1_196",
          "to": "indx1_217",
          "id": "indx1_893"
        },
        "indx1_894": {
          "from": "indx1_196",
          "to": "indx1_218",
          "id": "indx1_894"
        },
        "indx1_895": {
          "from": "indx1_218",
          "to": "indx1_219",
          "id": "indx1_895"
        },
        "indx1_896": {
          "from": "indx1_220",
          "to": "indx1_221",
          "id": "indx1_896"
        },
        "indx1_897": {
          "from": "indx1_221",
          "to": "indx1_222",
          "id": "indx1_897"
        },
        "indx1_898": {
          "from": "indx1_222",
          "to": "indx1_223",
          "id": "indx1_898"
        },
        "indx1_899": {
          "from": "indx1_220",
          "to": "indx1_224",
          "id": "indx1_899"
        },
        "indx1_900": {
          "from": "indx1_224",
          "to": "indx1_225",
          "id": "indx1_900"
        },
        "indx1_901": {
          "from": "indx1_224",
          "to": "indx1_226",
          "id": "indx1_901"
        },
        "indx1_902": {
          "from": "indx1_224",
          "to": "indx1_227",
          "id": "indx1_902"
        },
        "indx1_903": {
          "from": "indx1_227",
          "to": "indx1_228",
          "id": "indx1_903"
        },
        "indx1_904": {
          "from": "indx1_227",
          "to": "indx1_229",
          "id": "indx1_904"
        },
        "indx1_905": {
          "from": "indx1_227",
          "to": "indx1_230",
          "id": "indx1_905"
        },
        "indx1_906": {
          "from": "indx1_227",
          "to": "indx1_231",
          "id": "indx1_906"
        },
        "indx1_907": {
          "from": "indx1_227",
          "to": "indx1_232",
          "id": "indx1_907"
        },
        "indx1_908": {
          "from": "indx1_227",
          "to": "indx1_233",
          "id": "indx1_908"
        },
        "indx1_909": {
          "from": "indx1_227",
          "to": "indx1_234",
          "id": "indx1_909"
        },
        "indx1_910": {
          "from": "indx1_227",
          "to": "indx1_235",
          "id": "indx1_910"
        },
        "indx1_911": {
          "from": "indx1_227",
          "to": "indx1_236",
          "id": "indx1_911"
        },
        "indx1_912": {
          "from": "indx1_227",
          "to": "indx1_237",
          "id": "indx1_912"
        },
        "indx1_913": {
          "from": "indx1_227",
          "to": "indx1_238",
          "id": "indx1_913"
        },
        "indx1_914": {
          "from": "indx1_227",
          "to": "indx1_239",
          "id": "indx1_914"
        },
        "indx1_915": {
          "from": "indx1_227",
          "to": "indx1_240",
          "id": "indx1_915"
        },
        "indx1_916": {
          "from": "indx1_227",
          "to": "indx1_241",
          "id": "indx1_916"
        },
        "indx1_917": {
          "from": "indx1_220",
          "to": "indx1_242",
          "id": "indx1_917"
        },
        "indx1_918": {
          "from": "indx1_220",
          "to": "indx1_243",
          "id": "indx1_918"
        },
        "indx1_919": {
          "from": "indx1_220",
          "to": "indx1_244",
          "id": "indx1_919"
        },
        "indx1_920": {
          "from": "indx1_225",
          "to": "indx1_245",
          "id": "indx1_920"
        },
        "indx1_921": {
          "from": "indx1_234",
          "to": "indx1_246",
          "id": "indx1_921"
        },
        "indx1_922": {
          "from": "indx1_225",
          "to": "indx1_247",
          "id": "indx1_922"
        },
        "indx1_923": {
          "from": "indx1_249",
          "to": "indx1_250",
          "id": "indx1_923"
        },
        "indx1_924": {
          "from": "indx1_250",
          "to": "indx1_251",
          "id": "indx1_924"
        },
        "indx1_925": {
          "from": "indx1_251",
          "to": "indx1_252",
          "id": "indx1_925"
        },
        "indx1_926": {
          "from": "indx1_249",
          "to": "indx1_253",
          "id": "indx1_926"
        },
        "indx1_927": {
          "from": "indx1_253",
          "to": "indx1_254",
          "id": "indx1_927"
        },
        "indx1_928": {
          "from": "indx1_253",
          "to": "indx1_255",
          "id": "indx1_928"
        },
        "indx1_929": {
          "from": "indx1_253",
          "to": "indx1_256",
          "id": "indx1_929"
        },
        "indx1_930": {
          "from": "indx1_256",
          "to": "indx1_257",
          "id": "indx1_930"
        },
        "indx1_931": {
          "from": "indx1_256",
          "to": "indx1_258",
          "id": "indx1_931"
        },
        "indx1_932": {
          "from": "indx1_256",
          "to": "indx1_259",
          "id": "indx1_932"
        },
        "indx1_933": {
          "from": "indx1_256",
          "to": "indx1_260",
          "id": "indx1_933"
        },
        "indx1_934": {
          "from": "indx1_256",
          "to": "indx1_261",
          "id": "indx1_934"
        },
        "indx1_935": {
          "from": "indx1_256",
          "to": "indx1_262",
          "id": "indx1_935"
        },
        "indx1_936": {
          "from": "indx1_256",
          "to": "indx1_263",
          "id": "indx1_936"
        },
        "indx1_937": {
          "from": "indx1_256",
          "to": "indx1_264",
          "id": "indx1_937"
        },
        "indx1_938": {
          "from": "indx1_256",
          "to": "indx1_265",
          "id": "indx1_938"
        },
        "indx1_939": {
          "from": "indx1_256",
          "to": "indx1_266",
          "id": "indx1_939"
        },
        "indx1_940": {
          "from": "indx1_256",
          "to": "indx1_267",
          "id": "indx1_940"
        },
        "indx1_941": {
          "from": "indx1_256",
          "to": "indx1_268",
          "id": "indx1_941"
        },
        "indx1_942": {
          "from": "indx1_256",
          "to": "indx1_269",
          "id": "indx1_942"
        },
        "indx1_943": {
          "from": "indx1_256",
          "to": "indx1_270",
          "id": "indx1_943"
        },
        "indx1_944": {
          "from": "indx1_249",
          "to": "indx1_271",
          "id": "indx1_944"
        },
        "indx1_945": {
          "from": "indx1_249",
          "to": "indx1_272",
          "id": "indx1_945"
        },
        "indx1_946": {
          "from": "indx1_249",
          "to": "indx1_273",
          "id": "indx1_946"
        },
        "indx1_947": {
          "from": "indx1_254",
          "to": "indx1_276",
          "id": "indx1_947"
        },
        "indx1_948": {
          "from": "indx1_276",
          "to": "indx1_275",
          "id": "indx1_948"
        },
        "indx1_949": {
          "from": "indx1_277",
          "to": "indx1_278",
          "id": "indx1_949"
        },
        "indx1_950": {
          "from": "indx1_278",
          "to": "indx1_279",
          "id": "indx1_950"
        },
        "indx1_951": {
          "from": "indx1_279",
          "to": "indx1_280",
          "id": "indx1_951"
        },
        "indx1_952": {
          "from": "indx1_277",
          "to": "indx1_281",
          "id": "indx1_952"
        },
        "indx1_953": {
          "from": "indx1_281",
          "to": "indx1_282",
          "id": "indx1_953"
        },
        "indx1_954": {
          "from": "indx1_281",
          "to": "indx1_283",
          "id": "indx1_954"
        },
        "indx1_955": {
          "from": "indx1_281",
          "to": "indx1_284",
          "id": "indx1_955"
        },
        "indx1_956": {
          "from": "indx1_284",
          "to": "indx1_285",
          "id": "indx1_956"
        },
        "indx1_957": {
          "from": "indx1_284",
          "to": "indx1_286",
          "id": "indx1_957"
        },
        "indx1_958": {
          "from": "indx1_284",
          "to": "indx1_287",
          "id": "indx1_958"
        },
        "indx1_959": {
          "from": "indx1_284",
          "to": "indx1_288",
          "id": "indx1_959"
        },
        "indx1_960": {
          "from": "indx1_284",
          "to": "indx1_289",
          "id": "indx1_960"
        },
        "indx1_961": {
          "from": "indx1_284",
          "to": "indx1_290",
          "id": "indx1_961"
        },
        "indx1_962": {
          "from": "indx1_284",
          "to": "indx1_291",
          "id": "indx1_962"
        },
        "indx1_963": {
          "from": "indx1_284",
          "to": "indx1_292",
          "id": "indx1_963"
        },
        "indx1_964": {
          "from": "indx1_284",
          "to": "indx1_293",
          "id": "indx1_964"
        },
        "indx1_965": {
          "from": "indx1_284",
          "to": "indx1_294",
          "id": "indx1_965"
        },
        "indx1_966": {
          "from": "indx1_284",
          "to": "indx1_295",
          "id": "indx1_966"
        },
        "indx1_967": {
          "from": "indx1_284",
          "to": "indx1_296",
          "id": "indx1_967"
        },
        "indx1_968": {
          "from": "indx1_284",
          "to": "indx1_297",
          "id": "indx1_968"
        },
        "indx1_969": {
          "from": "indx1_284",
          "to": "indx1_298",
          "id": "indx1_969"
        },
        "indx1_970": {
          "from": "indx1_277",
          "to": "indx1_299",
          "id": "indx1_970"
        },
        "indx1_971": {
          "from": "indx1_277",
          "to": "indx1_300",
          "id": "indx1_971"
        },
        "indx1_972": {
          "from": "indx1_277",
          "to": "indx1_301",
          "id": "indx1_972"
        },
        "indx1_973": {
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
          "id": "indx1_973",
          "from": "0fd0634f-bba6-400f-93e9-8e94972b78b9241831",
          "to": "indx1_302"
        },
        "indx1_974": {
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
          "id": "indx1_974",
          "from": "indx1_302",
          "to": "indx1_303"
        },
        "indx1_975": {
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
          "id": "indx1_975",
          "from": "indx1_302",
          "to": "indx1_306"
        },
        "indx1_976": {
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
          "id": "indx1_976",
          "from": "indx1_302",
          "to": "indx1_307"
        },
        "indx1_977": {
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
          "id": "indx1_977",
          "from": "indx1_305",
          "to": "indx1_304"
        },
        "indx1_978": {
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
          "id": "indx1_978",
          "from": "0fd0634f-bba6-400f-93e9-8e94972b78b9241831",
          "to": "indx1_305"
        },
        "indx1_979": {
          "from": "indx1_282",
          "to": "indx1_302",
          "id": "indx1_979"
        },
        "indx1_980": {
          "from": "indx1_282",
          "to": "indx1_305",
          "id": "indx1_980"
        },
        "indx1_981": {
          "from": "indx1_291",
          "to": "indx1_309",
          "id": "indx1_981"
        },
        "indx1_982": {
          "from": "indx1_291",
          "to": "indx1_310",
          "id": "indx1_982"
        },
        "indx1_983": {
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
          "id": "indx1_983",
          "from": "indx1_367",
          "to": "indx1_311"
        },
        "indx1_984": {
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
          "id": "indx1_984",
          "from": "indx1_367",
          "to": "indx1_312"
        },
        "indx1_985": {
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
          "id": "indx1_985",
          "from": "indx1_367",
          "to": "indx1_313"
        },
        "indx1_986": {
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
          "id": "indx1_986",
          "from": "indx1_367",
          "to": "indx1_314"
        },
        "indx1_987": {
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
          "id": "indx1_987",
          "from": "indx1_367",
          "to": "indx1_315"
        },
        "indx1_988": {
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
          "id": "indx1_988",
          "from": "indx1_367",
          "to": "indx1_316"
        },
        "indx1_989": {
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
          "id": "indx1_989",
          "from": "indx1_367",
          "to": "indx1_317"
        },
        "indx1_990": {
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
          "id": "indx1_990",
          "from": "indx1_367",
          "to": "indx1_318"
        },
        "indx1_991": {
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
          "id": "indx1_991",
          "from": "indx1_367",
          "to": "indx1_319"
        },
        "indx1_992": {
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
          "id": "indx1_992",
          "from": "indx1_367",
          "to": "indx1_320"
        },
        "indx1_993": {
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
          "id": "indx1_993",
          "from": "indx1_367",
          "to": "indx1_321"
        },
        "indx1_994": {
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
          "id": "indx1_994",
          "from": "indx1_367",
          "to": "indx1_322"
        },
        "indx1_995": {
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
          "id": "indx1_995",
          "from": "indx1_329",
          "to": "indx1_323"
        },
        "indx1_996": {
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
          "id": "indx1_996",
          "from": "indx1_369",
          "to": "indx1_324"
        },
        "indx1_997": {
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
          "id": "indx1_997",
          "from": "indx1_369",
          "to": "indx1_325"
        },
        "indx1_998": {
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
          "id": "indx1_998",
          "from": "indx1_369",
          "to": "indx1_326"
        },
        "indx1_999": {
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
          "id": "indx1_999",
          "from": "indx1_327",
          "to": "indx1_368"
        },
        "indx1_1000": {
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
          "id": "indx1_1000",
          "from": "indx1_369",
          "to": "indx1_327"
        },
        "indx1_1001": {
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
          "id": "indx1_1001",
          "from": "indx1_368",
          "to": "indx1_328"
        },
        "indx1_1002": {
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
          "id": "indx1_1002",
          "from": "indx1_369",
          "to": "indx1_329"
        },
        "indx1_1003": {
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
          "id": "indx1_1003",
          "from": "indx1_329",
          "to": "indx1_330"
        },
        "indx1_1004": {
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
          "id": "indx1_1004",
          "from": "indx1_329",
          "to": "indx1_367"
        },
        "indx1_1005": {
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
          "id": "indx1_1005",
          "from": "indx1_330",
          "to": "indx1_345"
        },
        "indx1_1006": {
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
          "id": "indx1_1006",
          "from": "indx1_330",
          "to": "indx1_346"
        },
        "indx1_1007": {
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
          "id": "indx1_1007",
          "from": "indx1_330",
          "to": "indx1_347"
        },
        "indx1_1008": {
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
          "id": "indx1_1008",
          "from": "indx1_330",
          "to": "indx1_348"
        },
        "indx1_1009": {
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
          "id": "indx1_1009",
          "from": "indx1_330",
          "to": "indx1_349"
        },
        "indx1_1010": {
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
          "id": "indx1_1010",
          "from": "indx1_330",
          "to": "indx1_350"
        },
        "indx1_1011": {
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
          "id": "indx1_1011",
          "from": "indx1_330",
          "to": "indx1_351"
        },
        "indx1_1012": {
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
          "id": "indx1_1012",
          "from": "indx1_330",
          "to": "indx1_352"
        },
        "indx1_1013": {
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
          "id": "indx1_1013",
          "from": "indx1_330",
          "to": "indx1_353"
        },
        "indx1_1014": {
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
          "id": "indx1_1014",
          "from": "indx1_330",
          "to": "indx1_354"
        },
        "indx1_1015": {
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
          "id": "indx1_1015",
          "from": "indx1_330",
          "to": "indx1_355"
        },
        "indx1_1016": {
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
          "id": "indx1_1016",
          "from": "indx1_330",
          "to": "indx1_356"
        },
        "indx1_1017": {
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
          "id": "indx1_1017",
          "from": "indx1_330",
          "to": "indx1_357"
        },
        "indx1_1018": {
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
          "id": "indx1_1018",
          "from": "indx1_330",
          "to": "indx1_358"
        },
        "indx1_1019": {
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
          "id": "indx1_1019",
          "from": "indx1_330",
          "to": "indx1_359"
        },
        "indx1_1020": {
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
          "id": "indx1_1020",
          "from": "indx1_330",
          "to": "indx1_360"
        },
        "indx1_1021": {
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
          "id": "indx1_1021",
          "from": "indx1_330",
          "to": "indx1_361"
        },
        "indx1_1022": {
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
          "id": "indx1_1022",
          "from": "indx1_330",
          "to": "indx1_362"
        },
        "indx1_1023": {
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
          "id": "indx1_1023",
          "from": "indx1_345",
          "to": "indx1_331"
        },
        "indx1_1024": {
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
          "id": "indx1_1024",
          "from": "indx1_346",
          "to": "indx1_332"
        },
        "indx1_1025": {
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
          "id": "indx1_1025",
          "from": "indx1_347",
          "to": "indx1_333"
        },
        "indx1_1026": {
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
          "id": "indx1_1026",
          "from": "indx1_348",
          "to": "indx1_334"
        },
        "indx1_1027": {
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
          "id": "indx1_1027",
          "from": "indx1_349",
          "to": "indx1_335"
        },
        "indx1_1028": {
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
          "id": "indx1_1028",
          "from": "indx1_350",
          "to": "indx1_336"
        },
        "indx1_1029": {
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
          "id": "indx1_1029",
          "from": "indx1_351",
          "to": "indx1_337"
        },
        "indx1_1030": {
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
          "id": "indx1_1030",
          "from": "indx1_352",
          "to": "indx1_338"
        },
        "indx1_1031": {
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
          "id": "indx1_1031",
          "from": "indx1_353",
          "to": "indx1_339"
        },
        "indx1_1032": {
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
          "id": "indx1_1032",
          "from": "indx1_354",
          "to": "indx1_340"
        },
        "indx1_1033": {
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
          "id": "indx1_1033",
          "from": "indx1_355",
          "to": "indx1_341"
        },
        "indx1_1034": {
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
          "id": "indx1_1034",
          "from": "indx1_356",
          "to": "indx1_342"
        },
        "indx1_1035": {
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
          "id": "indx1_1035",
          "from": "indx1_357",
          "to": "indx1_343"
        },
        "indx1_1036": {
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
          "id": "indx1_1036",
          "from": "indx1_358",
          "to": "indx1_344"
        },
        "indx1_1037": {
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
          "id": "indx1_1037",
          "from": "indx1_359",
          "to": "indx1_363"
        },
        "indx1_1038": {
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
          "id": "indx1_1038",
          "from": "indx1_360",
          "to": "indx1_364"
        },
        "indx1_1039": {
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
          "id": "indx1_1039",
          "from": "indx1_361",
          "to": "indx1_365"
        },
        "indx1_1040": {
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
          "id": "indx1_1040",
          "from": "indx1_362",
          "to": "indx1_366"
        },
        "indx1_1041": {
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
          "id": "indx1_1041",
          "from": "indx1_367",
          "to": "indx1_370"
        },
        "indx1_1042": {
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
          "id": "indx1_1042",
          "from": "indx1_367",
          "to": "indx1_371"
        },
        "indx1_1043": {
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
          "id": "indx1_1043",
          "from": "indx1_392",
          "to": "indx1_373"
        },
        "indx1_1044": {
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
          "id": "indx1_1044",
          "from": "indx1_392",
          "to": "indx1_374"
        },
        "indx1_1045": {
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
          "id": "indx1_1045",
          "from": "indx1_392",
          "to": "indx1_375"
        },
        "indx1_1046": {
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
          "id": "indx1_1046",
          "from": "indx1_392",
          "to": "indx1_376"
        },
        "indx1_1047": {
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
          "id": "indx1_1047",
          "from": "indx1_392",
          "to": "indx1_377"
        },
        "indx1_1048": {
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
          "id": "indx1_1048",
          "from": "indx1_392",
          "to": "indx1_378"
        },
        "indx1_1049": {
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
          "id": "indx1_1049",
          "from": "indx1_392",
          "to": "indx1_379"
        },
        "indx1_1050": {
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
          "id": "indx1_1050",
          "from": "indx1_392",
          "to": "indx1_380"
        },
        "indx1_1051": {
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
          "id": "indx1_1051",
          "from": "indx1_392",
          "to": "indx1_381"
        },
        "indx1_1052": {
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
          "id": "indx1_1052",
          "from": "indx1_392",
          "to": "indx1_382"
        },
        "indx1_1053": {
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
          "id": "indx1_1053",
          "from": "indx1_392",
          "to": "indx1_383"
        },
        "indx1_1054": {
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
          "id": "indx1_1054",
          "from": "indx1_392",
          "to": "indx1_384"
        },
        "indx1_1055": {
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
          "id": "indx1_1055",
          "from": "indx1_391",
          "to": "indx1_385"
        },
        "indx1_1056": {
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
          "id": "indx1_1056",
          "from": "indx1_394",
          "to": "indx1_386"
        },
        "indx1_1057": {
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
          "id": "indx1_1057",
          "from": "indx1_394",
          "to": "indx1_387"
        },
        "indx1_1058": {
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
          "id": "indx1_1058",
          "from": "indx1_394",
          "to": "indx1_388"
        },
        "indx1_1059": {
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
          "id": "indx1_1059",
          "from": "indx1_389",
          "to": "indx1_393"
        },
        "indx1_1060": {
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
          "id": "indx1_1060",
          "from": "indx1_394",
          "to": "indx1_389"
        },
        "indx1_1061": {
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
          "id": "indx1_1061",
          "from": "indx1_393",
          "to": "indx1_390"
        },
        "indx1_1062": {
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
          "id": "indx1_1062",
          "from": "indx1_394",
          "to": "indx1_391"
        },
        "indx1_1063": {
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
          "id": "indx1_1063",
          "from": "indx1_391",
          "to": "indx1_392"
        },
        "indx1_1064": {
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
          "id": "indx1_1064",
          "from": "indx1_378",
          "to": "indx1_398"
        },
        "indx1_1065": {
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
          "id": "indx1_1065",
          "from": "indx1_391",
          "to": "indx1_397"
        },
        "indx1_1066": {
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
          "id": "indx1_1066",
          "from": "indx1_392",
          "to": "indx1_395"
        },
        "indx1_1067": {
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
          "id": "indx1_1067",
          "from": "indx1_392",
          "to": "indx1_396"
        },
        "indx1_1068": {
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
          "id": "indx1_1068",
          "from": "indx1_330c0",
          "to": "indx1_362c0"
        },
        "indx1_1069": {
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
          "id": "indx1_1069",
          "from": "indx1_362c0",
          "to": "indx1_366c0"
        },
        "indx1_1070": {
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
          "id": "indx1_1070",
          "from": "indx1_330c1",
          "to": "indx1_362c1"
        },
        "indx1_1071": {
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
          "id": "indx1_1071",
          "from": "indx1_362c1",
          "to": "indx1_366c1"
        },
        "indx1_1072": {
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
          "id": "indx1_1072",
          "from": "indx1_330c2",
          "to": "indx1_362c2"
        },
        "indx1_1073": {
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
          "id": "indx1_1073",
          "from": "indx1_362c2",
          "to": "indx1_366c2"
        },
        "indx1_1074": {
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
          "id": "indx1_1074",
          "from": "indx1_330c3",
          "to": "indx1_362c3"
        },
        "indx1_1075": {
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
          "id": "indx1_1075",
          "from": "indx1_362c3",
          "to": "indx1_366c3"
        },
        "indx1_1076": {
          "from": "indx1_362c2",
          "to": "indx1_362c3",
          "id": "indx1_1076"
        },
        "indx1_1077": {
          "from": "indx1_362c0",
          "to": "indx1_362c1",
          "id": "indx1_1077"
        },
        "indx1_1078": {
          "from": "indx1_330",
          "to": "indx1_362c0",
          "id": "indx1_1078"
        },
        "indx1_1079": {
          "from": "indx1_330",
          "to": "indx1_362c2",
          "id": "indx1_1079"
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
      "x": 110003.00000000004,
      "y": 17299.99999727273
    }
  }
}
;