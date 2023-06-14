module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/contato/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Button/button.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Button/button.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"button\": \"button_button__2JlXM\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLm1vZHVsZS5zY3NzPzNjZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiYnV0dG9uX2J1dHRvbl9fMkpsWE1cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Button/button.module.scss\n");

/***/ }),

/***/ "./src/components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.module.scss */ \"./src/components/Button/button.module.scss\");\n/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/develcode69/\\xC1rea de Trabalho/git/github/decilio-space/src/components/Button/index.tsx\";\n\nfunction Button({\n  children\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4PzA3N2EiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBOEI7QUFDM0Msc0JBQU87QUFBUSxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLE1BQTFCO0FBQUEsY0FBbUNGO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYnV0dG9uLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT57Y2hpbGRyZW59PC9idXR0b24+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Button/index.tsx\n");

/***/ }),

/***/ "./src/components/Title/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Title/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Title; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.module.scss */ \"./src/components/Title/title.module.scss\");\n/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/develcode69/\\xC1rea de Trabalho/git/github/decilio-space/src/components/Title/index.tsx\";\n\nfunction Title({\n  title = \"\",\n  description = \"\",\n  marginTop = 70\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    style: {\n      marginTop\n    },\n    className: _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.perfectCompanion,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _title_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), description !== \"\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 32\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS9pbmRleC50c3g/MzY3ZCJdLCJuYW1lcyI6WyJUaXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXJnaW5Ub3AiLCJzdHlsZXMiLCJwZXJmZWN0Q29tcGFuaW9uIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEdBQUcsRUFEb0I7QUFFNUJDLGFBQVcsR0FBRyxFQUZjO0FBRzVCQyxXQUFTLEdBQUc7QUFIZ0IsQ0FBZixFQUlaO0FBQ0Qsc0JBQ0U7QUFBUyxTQUFLLEVBQUU7QUFBRUE7QUFBRixLQUFoQjtBQUErQixhQUFTLEVBQUVDLHlEQUFNLENBQUNDLGdCQUFqRDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxTQUF2QjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBQSxvQkFBT0w7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBS0dDLFdBQVcsS0FBSyxFQUFoQixpQkFBc0I7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGl0bGUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90aXRsZS5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZSh7XG4gIHRpdGxlID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICBtYXJnaW5Ub3AgPSA3MCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Ub3AgfX0gY2xhc3NOYW1lPXtzdHlsZXMucGVyZmVjdENvbXBhbmlvbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIHtkZXNjcmlwdGlvbiAhPT0gXCJcIiAmJiA8cD57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Title/index.tsx\n");

/***/ }),

/***/ "./src/components/Title/title.module.scss":
/*!************************************************!*\
  !*** ./src/components/Title/title.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"title_container__2oslB\",\n\t\"perfectCompanion\": \"title_perfectCompanion__32bFe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS90aXRsZS5tb2R1bGUuc2Nzcz80MzUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaXRsZS90aXRsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInRpdGxlX2NvbnRhaW5lcl9fMm9zbEJcIixcblx0XCJwZXJmZWN0Q29tcGFuaW9uXCI6IFwidGl0bGVfcGVyZmVjdENvbXBhbmlvbl9fMzJiRmVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Title/title.module.scss\n");

/***/ }),

/***/ "./src/pages/contato/contato.module.scss":
/*!***********************************************!*\
  !*** ./src/pages/contato/contato.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"wrapper\": \"contato_wrapper__3GEEx\",\n\t\"container\": \"contato_container__1tcHr\",\n\t\"row\": \"contato_row__3JqON\",\n\t\"map\": \"contato_map__1A7WG\",\n\t\"colMd9\": \"contato_colMd9__1DC9M\",\n\t\"contactInfo\": \"contato_contactInfo__32X85\",\n\t\"mail\": \"contato_mail__3FFRn\",\n\t\"icon\": \"contato_icon__3pLD_\",\n\t\"border\": \"contato_border__31LTs\",\n\t\"redes\": \"contato_redes__3KMIv\",\n\t\"tiktok\": \"contato_tiktok__2gfxM\",\n\t\"instagram\": \"contato_instagram__3aAED\",\n\t\"facebook\": \"contato_facebook__AnkBU\",\n\t\"btn\": \"contato_btn__3xXJr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGF0by9jb250YXRvLm1vZHVsZS5zY3NzPzE5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jb250YXRvL2NvbnRhdG8ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiY29udGF0b193cmFwcGVyX18zR0VFeFwiLFxuXHRcImNvbnRhaW5lclwiOiBcImNvbnRhdG9fY29udGFpbmVyX18xdGNIclwiLFxuXHRcInJvd1wiOiBcImNvbnRhdG9fcm93X18zSnFPTlwiLFxuXHRcIm1hcFwiOiBcImNvbnRhdG9fbWFwX18xQTdXR1wiLFxuXHRcImNvbE1kOVwiOiBcImNvbnRhdG9fY29sTWQ5X18xREM5TVwiLFxuXHRcImNvbnRhY3RJbmZvXCI6IFwiY29udGF0b19jb250YWN0SW5mb19fMzJYODVcIixcblx0XCJtYWlsXCI6IFwiY29udGF0b19tYWlsX18zRkZSblwiLFxuXHRcImljb25cIjogXCJjb250YXRvX2ljb25fXzNwTERfXCIsXG5cdFwiYm9yZGVyXCI6IFwiY29udGF0b19ib3JkZXJfXzMxTFRzXCIsXG5cdFwicmVkZXNcIjogXCJjb250YXRvX3JlZGVzX18zS01JdlwiLFxuXHRcInRpa3Rva1wiOiBcImNvbnRhdG9fdGlrdG9rX18yZ2Z4TVwiLFxuXHRcImluc3RhZ3JhbVwiOiBcImNvbnRhdG9faW5zdGFncmFtX18zYUFFRFwiLFxuXHRcImZhY2Vib29rXCI6IFwiY29udGF0b19mYWNlYm9va19fQW5rQlVcIixcblx0XCJidG5cIjogXCJjb250YXRvX2J0bl9fM3hYSnJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/contato/contato.module.scss\n");

/***/ }),

/***/ "./src/pages/contato/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/contato/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contato; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ \"./src/components/Button/index.tsx\");\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Title */ \"./src/components/Title/index.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/si */ \"react-icons/si\");\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contato_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato.module.scss */ \"./src/pages/contato/contato.module.scss\");\n/* harmony import */ var _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_contato_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/develcode69/\\xC1rea de Trabalho/git/github/decilio-space/src/pages/contato/index.tsx\";\n\n\n\n\n\n\nfunction Contato() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      title: \"Contato\",\n      description: \"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.map,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n        src: \"https://www.google.com/maps/d/u/0/embed?mid=1tuq69DmKGs3Xkfbjhwvi395Q3zvsWxtI\",\n        width: \"640\",\n        height: \"480\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container} ${_contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.row}`,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-3\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.contactInfo,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: \"address\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaStreetView\"], {\n                color: \"#3b5998\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: \"Rua avelino de oliveira silva, 528\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mail,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__[\"FiMail\"], {\n                color: \"#db4a39 \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: \"VanSouzaRotts@petcare.com\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: \"telephone\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaWhatsapp\"], {\n                color: \"#a4c639 \"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: \"19 9 8587-8586\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.button,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: [\"Entrar em contato\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaWhatsapp\"], {\n                  className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.icon,\n                  size: 20\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container} ${_contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.row}`,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.border,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Siga-nos nas nossas redes-sociais!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.redes,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaInstagram\"], {\n                className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.instagram,\n                size: 55\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__[\"FaFacebookSquare\"], {\n                className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.facebook,\n                size: 55\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_si__WEBPACK_IMPORTED_MODULE_4__[\"SiTiktok\"], {\n                className: _contato_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tiktok,\n                size: 55\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: \"Fique por dentro das novidades!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29udGF0by9pbmRleC50c3g/ZTY5ZCJdLCJuYW1lcyI6WyJDb250YXRvIiwic3R5bGVzIiwibWFwIiwid3JhcHBlciIsImNvbnRhaW5lciIsInJvdyIsImNvbnRhY3RJbmZvIiwibWFpbCIsImJ1dHRvbiIsImljb24iLCJib3JkZXIiLCJyZWRlcyIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwidGlrdG9rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyx5REFBRDtBQUNFLFdBQUssRUFBQyxTQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQVMsZUFBUyxFQUFFQywyREFBTSxDQUFDQyxHQUEzQjtBQUFBLDZCQUNFO0FBQ0UsV0FBRyxFQUFDLCtFQUROO0FBRUUsYUFBSyxFQUFDLEtBRlI7QUFHRSxjQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBY0U7QUFBUyxlQUFTLEVBQUVELDJEQUFNLENBQUNFLE9BQTNCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFHLEdBQUVGLDJEQUFNLENBQUNHLFNBQVUsSUFBR0gsMkRBQU0sQ0FBQ0ksR0FBSSxFQUFsRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFFSiwyREFBTSxDQUFDSyxXQUF0QjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxTQUFkO0FBQUEsc0NBQ0UscUVBQUMsMkRBQUQ7QUFBYyxxQkFBSyxFQUFFO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFLRTtBQUFJLHVCQUFTLEVBQUVMLDJEQUFNLENBQUNNLElBQXRCO0FBQUEsc0NBQ0UscUVBQUMscURBQUQ7QUFBUSxxQkFBSyxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQVNFO0FBQUksdUJBQVMsRUFBQyxXQUFkO0FBQUEsc0NBQ0UscUVBQUMseURBQUQ7QUFBWSxxQkFBSyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEYsZUFhRTtBQUFJLHVCQUFTLEVBQUVOLDJEQUFNLENBQUNPLE1BQXRCO0FBQUEscUNBQ0UscUVBQUMsMERBQUQ7QUFBQSxnREFDb0IsR0FEcEIsZUFFRSxxRUFBQyx5REFBRDtBQUFZLDJCQUFTLEVBQUVQLDJEQUFNLENBQUNRLElBQTlCO0FBQW9DLHNCQUFJLEVBQUU7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEwQkU7QUFBSyxpQkFBUyxFQUFHLEdBQUVSLDJEQUFNLENBQUNHLFNBQVUsSUFBR0gsMkRBQU0sQ0FBQ0ksR0FBSSxFQUFsRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUosMkRBQU0sQ0FBQ1MsTUFBdkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUkscUJBQVMsRUFBRVQsMkRBQU0sQ0FBQ1UsS0FBdEI7QUFBQSxvQ0FDRTtBQUFBLHFDQUNFLHFFQUFDLDBEQUFEO0FBQWEseUJBQVMsRUFBRVYsMkRBQU0sQ0FBQ1csU0FBL0I7QUFBMEMsb0JBQUksRUFBRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFO0FBQUEscUNBQ0UscUVBQUMsK0RBQUQ7QUFBa0IseUJBQVMsRUFBRVgsMkRBQU0sQ0FBQ1ksUUFBcEM7QUFBOEMsb0JBQUksRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQVNFO0FBQUEscUNBQ0UscUVBQUMsdURBQUQ7QUFBVSx5QkFBUyxFQUFFWiwyREFBTSxDQUFDYSxNQUE1QjtBQUFvQyxvQkFBSSxFQUFFO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBLGtCQURGO0FBZ0VEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbnRhdG8vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IHtcbiAgRmFJbnN0YWdyYW0sXG4gIEZhRmFjZWJvb2tTcXVhcmUsXG4gIEZhU3RyZWV0VmlldyxcbiAgRmFXaGF0c2FwcCxcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBTaVRpa3RvayB9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xuaW1wb3J0IHsgRmlNYWlsIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRhdG8ubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGF0bygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHRpdGxlPVwiQ29udGF0b1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiQ2xhcml0YXMgZXN0IGV0aWFtIHByb2Nlc3N1cyBkeW5hbWljdXMsIHF1aSBzZXF1aXR1ciBtdXRhdGlvbmVtIGNvbnN1ZXR1ZGl1bSBsZWN0b3J1bS4gTWlydW0gZXN0IG5vdGFyZSBxdWFtIGxpdHRlcmEgZ290aGljYSwgcXVhbSBudW5jIHB1dGFtdXMgcGFydW0gY2xhcmFtLCBhbnRlcG9zdWVyaXQgbGl0dGVyYXJ1bSBmb3JtYXMgaHVtYW5pdGF0aXMgcGVyIHNlYWN1bGEgcXVhcnRhIGRlY2ltYSBldCBxdWludGEgZGVjaW1hLiBFb2RlbSBtb2RvIHR5cGksIHF1aSBudW5jIG5vYmlzIHZpZGVudHVyIHBhcnVtIGNsYXJpLCBmaWFudCBzb2xsZW1uZXMgaW4gZnV0dXJ1bS5cIlxuICAgICAgLz5cblxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMubWFwfT5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kL3UvMC9lbWJlZD9taWQ9MXR1cTY5RG1LR3MzWGtmYmpod3ZpMzk1UTN6dnNXeHRJXCJcbiAgICAgICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDgwXCJcbiAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLnJvd31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEluZm99PlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPlxuICAgICAgICAgICAgICAgIDxGYVN0cmVldFZpZXcgY29sb3I9e1wiIzNiNTk5OFwifSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlJ1YSBhdmVsaW5vIGRlIG9saXZlaXJhIHNpbHZhLCA1Mjg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5tYWlsfT5cbiAgICAgICAgICAgICAgICA8RmlNYWlsIGNvbG9yPXtcIiNkYjRhMzkgXCJ9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+VmFuU291emFSb3R0c0BwZXRjYXJlLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRlbGVwaG9uZVwiPlxuICAgICAgICAgICAgICAgIDxGYVdoYXRzYXBwIGNvbG9yPXtcIiNhNGM2MzkgXCJ9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+MTkgOSA4NTg3LTg1ODY8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICBFbnRyYXIgZW0gY29udGF0b3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxGYVdoYXRzYXBwIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNpemU9ezIwfSAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7c3R5bGVzLnJvd31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvcmRlcn0+XG4gICAgICAgICAgICA8aDE+U2lnYS1ub3MgbmFzIG5vc3NhcyByZWRlcy1zb2NpYWlzITwvaDE+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucmVkZXN9PlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIGNsYXNzTmFtZT17c3R5bGVzLmluc3RhZ3JhbX0gc2l6ZT17NTV9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxGYUZhY2Vib29rU3F1YXJlIGNsYXNzTmFtZT17c3R5bGVzLmZhY2Vib29rfSBzaXplPXs1NX0gLz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPFNpVGlrdG9rIGNsYXNzTmFtZT17c3R5bGVzLnRpa3Rva30gc2l6ZT17NTV9IC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8aDQ+RmlxdWUgcG9yIGRlbnRybyBkYXMgbm92aWRhZGVzITwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/contato/index.tsx\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiP2M0NmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fi\n");

/***/ }),

/***/ "react-icons/si":
/*!*********************************!*\
  !*** external "react-icons/si" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/si\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9zaVwiP2M0OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvc2kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9zaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/si\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });