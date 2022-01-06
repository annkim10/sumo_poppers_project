/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/bg_image.png */ \"./src/assets/bg_image.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* * {\\n    margin: 0;\\n    padding: 0;\\n} */\\n\\n\\n/* body, html {\\n    min-height: 100%;\\n} */\\n\\nbody {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100vw;\\n    height: 100vh;\\n    margin: 0;\\n    padding: 0;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-color: #c4bc99;\\n    opacity: 80;\\n    background-position: center;\\n    background-attachment: fixed;\\n    background-repeat: no-repeat;\\n    background-size: cover; \\n    z-index: -100;\\n}\\n\\n.hidden {\\n    display: none;\\n}\\n\\n.nav {\\n    /* background-color: blue; */\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    /* min-width: 30vw;\\n    max-width: 30vw; */\\n    position: relative;\\n}\\n\\n.game {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100vw;\\n    /* background-color: hotpink; */\\n}\\n\\n.left {\\n    /* background-color: green; */\\n    max-width: 20vw;\\n    margin-left: -150px;\\n    margin-right: 100px;\\n}\\n\\n.right {\\n    /* background-color: rgb(124, 0, 128); */\\n    max-width: 15vw;\\n    margin-left: 100px;\\n}\\n\\n.logo > img {\\n    /* background-color: saddlebrown; */\\n    /* padding-top: 5%; */\\n    max-width: 350px;\\n    /* margin-top: -50px; */\\n}\\n\\n#ring {\\n    position: relative;\\n    top: 0px;\\n    left: 0px\\n}\\n\\n#ring canvas {\\n    position: absolute\\n}\\n\\n#ring-img {\\n    /* background-color: green; */\\n    position: static;\\n    width: 540px;\\n    height: 540px;\\n    z-index: -50;\\n}\\n\\n#canvas-ring {\\n    position: absolute;\\n    /* border: 1px solid black; */\\n    /* background-color: rgba(39, 28, 7, 0.923); */\\n    width: 500px;\\n    height: 500px;\\n    z-index: 100;\\n    transform: translate(4%, 4%);\\n}\\n\\n.about {\\n    background-color: rgba(255, 255, 255, 0.836);\\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\\n    border-radius: 1%;\\n    display: block;\\n    width: 280px;\\n    /* min-width: 85%; */\\n    max-height: 100%;\\n    /* padding: 2em */\\n}\\n\\nh1 {\\n    background-color: #bd0028 ;\\n    color: white;\\n    font-family: 'Comfortaa';\\n    font-weight: 600;\\n    min-width: 80%;\\n    min-height: 60px;\\n    line-height: 1.2em;\\n    font-size: 25px;\\n    padding: 1em 0.6em 1em 0.8em;\\n}\\n\\n#description {\\n    /* background-color: rgb(115, 19, 139); */\\n    font-family: 'Comfortaa';\\n    line-height: 1.5em;\\n    text-align: left;\\n    padding: 2em 1.5em 3em 1.5em;\\n    font-size: 13px;\\n    color: rgb(34, 34, 34);\\n}\\n\\n#how-to {\\n    width: 100%;\\n}\\n\\n\\n#level-tracker {\\n    color: white;\\n    border-radius: 50%;\\n    height: 120px;\\n    width: 120px;\\n    background-color: #bd0028 ;\\n    border: 10px double white;\\n    font-family: 'Fredoka One';\\n    text-align: center;\\n    /* display: flex;\\n    flex-direction: column; */\\n}\\n\\n#score {\\n    /* background-color: blue; */\\n    margin-top: 20px;\\n    width: 40px;\\n    height: 40px\\n}\\n\\n#level-tracker > p {\\n    /* background-color: deeppink; */\\n    /* height: 50px; */\\n    font-size: 15px;\\n}\\n\\n.controls {\\n    /* background-color: chocolate; */\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    padding-top: 30%;\\n    list-style: none;\\n    /* height: 30%; */\\n}\\n\\n.controls button {\\n    color: white;\\n    border-radius: 50%;\\n    height: 60px;\\n    width: 60px;\\n    background-color: #bd0028 ;\\n    border-style: none;\\n    font-family: 'Fredoka One';\\n    font-size: 15px;\\n}\\n\\n.controls button:hover {\\n    border: 5px double white;\\n   height: 80px;\\n   width: 80px;\\n   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sumo_poppers_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _sumo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sumo */ \"./src/app/sumo.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/app/player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/app/utils.js\");\n\n\n// // import \"./main.css\";\n\n\nlet canvasPos = _utils__WEBPACK_IMPORTED_MODULE_2__.canvas.getBoundingClientRect()\nconst ring = document.getElementById(\"ring-img\")\nconst ringImg = new Image();\nringImg.src = ring.src;\n\n// let score = 0\n// let gameFrame = 0\n\nwindow.addEventListener(\"resize\", function(e){\n    canvasPos = _utils__WEBPACK_IMPORTED_MODULE_2__.canvas.getBoundingClientRect()\n    console.log(canvasPos)\n})\n\n_utils__WEBPACK_IMPORTED_MODULE_2__.canvas.addEventListener(\"mousedown\", function (e) { //originally \"mousedown\"\n    _utils__WEBPACK_IMPORTED_MODULE_2__.mouse.x = e.x - canvasPos.left\n    console.log(\"this is canvasPos\")\n    console.log(canvasPos)\n    _utils__WEBPACK_IMPORTED_MODULE_2__.mouse.y = e.y - canvasPos.top\n    _utils__WEBPACK_IMPORTED_MODULE_2__.mouse.click = true\n    console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.mouse)\n})\n\n_utils__WEBPACK_IMPORTED_MODULE_2__.canvas.addEventListener(\"mouseup\", function (e) {\n    _utils__WEBPACK_IMPORTED_MODULE_2__.mouse.click = false\n    console.log(_utils__WEBPACK_IMPORTED_MODULE_2__.mouse)\n})\n\n// canvas.addEventListener(\"click\", (e) => {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height)\n//     ctx.fillRect(e.x - canvasPos.left - 50, e.y - canvasPos.top-50, 100, 100)\n//     console.log(mouse)\n// })\n\n\n\nclass Game {\n\n    constructor() {\n        this.sumosArr = []\n        this.gameFrame = 0\n        this.score = 0\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    }\n\n    startGame() {\n        _utils__WEBPACK_IMPORTED_MODULE_2__.ctx.clearRect(0, 0, _utils__WEBPACK_IMPORTED_MODULE_2__.canvas.width, _utils__WEBPACK_IMPORTED_MODULE_2__.canvas.height)\n        this.player.update()\n        this.player.draw()\n        this.gameFrame++\n        this.makeSumos()\n        this.drawScore()\n        requestAnimationFrame(this.startGame.bind(this))\n    }\n\n    drawScore() {\n        _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCtx.clearRect(0,0, _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCanvas.width, _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCanvas.height)\n        _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCtx.fillStyle = \"white\"\n        _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCtx.fillText(`${this.score}`, 20,30)\n        _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCtx.textAlign = \"center\"\n        _utils__WEBPACK_IMPORTED_MODULE_2__.scoreCtx.font = '35px Fredoka One'\n        // ctx.fillText(`${this.score} popped`, 35, 60)\n        // ctx.font = '18px Comfortaa'\n    }\n\n    makeSumos() {\n        if (this.gameFrame % 50 === 0) {\n            this.sumosArr.push(new _sumo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.player, this.gameFrame))\n            // console.log(this.sumosArr)\n        }\n\n        for (let i = 0; i < this.sumosArr.length; i++ ) {\n            this.sumosArr[i].update()\n            this.sumosArr[i].draw()\n            if (this.sumosArr[i].y < 0 - this.sumosArr[i].radius * 2) {\n                this.sumosArr.splice(i, 1)\n                i--\n            } else if (this.sumosArr[i].distance < this.sumosArr[i].radius + this.player.radius) {\n                    if (!this.sumosArr[i].popped) {\n                        this.score++\n                        this.sumosArr[i].popped = true\n                        this.sumosArr.splice(i, 1)\n                        i--\n                    }\n\n            }\n            //\n        };\n           \n            // console.log(this.score)\n        };\n\n\n\n    }\n\n\n\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/app/game.js?");

/***/ }),

/***/ "./src/app/player.js":
/*!***************************!*\
  !*** ./src/app/player.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/app/utils.js\");\n// import Canvas from \"./canvas\"\n\n\n\n\nlet score = 0\n\nclass Player {\n    constructor() {\n        this.x = _utils__WEBPACK_IMPORTED_MODULE_0__.canvas.width\n        this.y = _utils__WEBPACK_IMPORTED_MODULE_0__.canvas.height/3\n        console.log(\"player\")\n        console.log(this.x, this.y)\n        console.log(_utils__WEBPACK_IMPORTED_MODULE_0__.mouse)\n        this.radius = 5\n    }\n\n    update() {\n        // console.log(\"beginning of update\")\n        // console.log(mouse)\n        const dx = this.x - _utils__WEBPACK_IMPORTED_MODULE_0__.mouse.x\n        const dy = this.y - _utils__WEBPACK_IMPORTED_MODULE_0__.mouse.y\n\n        // console.log(\"distances\")\n        // console.log(dx, dy)\n        if (_utils__WEBPACK_IMPORTED_MODULE_0__.mouse.x !== this.x) {\n            (this.x -= (dx/5))\n            // console.log(mouse)\n            // console.log(this.x)\n            //dx/300\n        }\n        if (_utils__WEBPACK_IMPORTED_MODULE_0__.mouse.y !== this.y) {\n            (this.y -= dy/5)\n        }\n    }\n\n    draw() {\n        if (_utils__WEBPACK_IMPORTED_MODULE_0__.mouse.click) {\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"#bd0028\"\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.lineWidth = 0.2;\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath()\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.moveTo(this.x, this.y)\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.lineTo(_utils__WEBPACK_IMPORTED_MODULE_0__.mouse.x, _utils__WEBPACK_IMPORTED_MODULE_0__.mouse.y)\n            _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.stroke()\n        }\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"#bd0028\"\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fill()\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath()\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, this.radius, 0)\n    }\n\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/app/player.js?");

/***/ }),

/***/ "./src/app/sumo.js":
/*!*************************!*\
  !*** ./src/app/sumo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sumo)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/app/utils.js\");\n\n\nconst animation = document.getElementById(\"animation\")\nconst sumoImg = new Image();\nsumoImg.src = animation.src;\n\nconst popped = document.getElementById(\"popped-animation\")\nconst poppedSumo = new Image();\npoppedSumo.src = popped.src\n\nconst frames = document.getElementById(\"frames\")\nconst sumoFrames = new Image();\nsumoFrames.src = frames.src\n\nclass Sumo {\n    constructor(player, gameFrame) {\n        this.player = player\n        // (console.log(player))\n        this.x = Math.random() * _utils__WEBPACK_IMPORTED_MODULE_0__.canvas.width\n        // console.log(this.x)\n        this.y = Math.random() * _utils__WEBPACK_IMPORTED_MODULE_0__.canvas.width\n        this.radius = 10\n        this.speed = Math.random() * 1 + 1\n        this.distance\n        this.popped = false\n        this.width = 300\n        this.height = 300\n        this.gameFrame = gameFrame || 0\n        this.sumoFrames = []\n        this.animationStates = [\n            {\n                name: 'pop',\n                frames: 2\n\n            },\n            {\n                name: 'unpop',\n                frames: 16\n            }\n        ]\n        this.makeFrames()\n        console.log(this.sumoFrames)\n    }\n\n    update() {\n        this.y -= this.speed\n        let dx = this.x - this.player.x\n        let dy = this.y - this.player.y\n        this.distance = Math.sqrt(dx * dy + dy * dy)\n    }\n\n    makeFrames() {\n        this.animationStates.forEach((state, idx) => {\n            let frames = {\n                loc: []\n            }\n            for (let j = 0; j < 16; j++) {\n                let posX = j * this.width;\n                let posY = idx * 300;\n                frames.loc.push({ x: posX, y: posY })\n            }\n            this.sumoFrames[state.name] = frames;\n        })\n    }\n\n    draw() {\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"#bd0028\"\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fill()\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.closePath()\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x, this.y, this.radius, 0)\n        _utils__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(sumoImg, this.x-40, this.y-44, 80, 80)\n        // ctx.globalAlpha = 0.5\n    }\n\n    // draw() {\n    //     ctx.clearRect(0, 0, canvas.width, canvas.height)\n    //     let position = Math.floor(this.gameFrame / 7) % this.sumoFrames.unpop.loc.length;\n    //     console.log(position)\n    //     let frameX = this.width * position;\n    //     console.log(this.sumoFrames)\n    //     let frameY = this.sumoFrames.unpop.loc[position].y;\n    //     console.log(frameX, frameY)\n    //     ctx.drawImage(sumoFrames, frameX, frameY, this.width, this.height, this.x, this.y, canvas.width / 4, canvas.height / 4)\n    //     ctx.globalAlpha = 0.5\n    //     console.log(position)\n    //     requestAnimationFrame(this.draw.bind(this))\n    // }\n\n    // animation() {\n    //     this.draw()\n    //     this.frameX += 300\n    //     requestAnimationFrame(this.animation.bind(this))\n    // }\n\n}\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/app/sumo.js?");

/***/ }),

/***/ "./src/app/utils.js":
/*!**************************!*\
  !*** ./src/app/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"mouse\": () => (/* binding */ mouse),\n/* harmony export */   \"scoreCanvas\": () => (/* binding */ scoreCanvas),\n/* harmony export */   \"scoreCtx\": () => (/* binding */ scoreCtx)\n/* harmony export */ });\n// export const canvasBkgd = document.getElementById(\"canvas-bkgd\")\n// canvasBkgd.width = 1000\n// canvasBkgd.width = 1000\n// export const ctxBkgd = canvasBkgd.getContext(\"2d\")\n\nconst canvas = document.getElementById(\"canvas-ring\")\ncanvas.width = 500;\ncanvas.height = 500;\nconsole.log(canvas)\n// export const canvasPos = canvas.getBoundingClientRect()\n// console.log(canvasPos)\n// canvas.style.background = \"pink\"\nconst ctx = canvas.getContext(\"2d\")\n// console.log(\"width\")\n// console.log(canvas.width)\nconst mouse = {\n    x: canvas.width / 2,\n    y: canvas.width / 2,\n    click: false\n}\n\nconst scoreCanvas = document.getElementById(\"score\")\nscoreCanvas.width = 40\nscoreCanvas.height = 40\nconst scoreCtx = scoreCanvas.getContext(\"2d\")\n\n\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/app/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/game */ \"./src/app/game.js\");\n/* harmony import */ var _app_sumo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/sumo */ \"./src/app/sumo.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\n\n\n\n\n\n\nlet game = new _app_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\ngame.startGame()\n\nlet sumo = new _app_sumo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n// sumo.draw()\n\n\n\n//# sourceURL=webpack://sumo_poppers_project/./src/index.js?");

/***/ }),

/***/ "./src/assets/bg_image.png":
/*!*********************************!*\
  !*** ./src/assets/bg_image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/cdafcc0c515f5ecfadc7.png\";\n\n//# sourceURL=webpack://sumo_poppers_project/./src/assets/bg_image.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;