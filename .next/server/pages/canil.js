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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/canil/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-alice-carousel/lib/alice-carousel.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/alice-carousel.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-alice-carousel/lib/alice-carousel.css\n");

/***/ }),

/***/ "./src/components/Carousel/carousel.module.scss":
/*!******************************************************!*\
  !*** ./src/components/Carousel/carousel.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"carousel_container__20J8Y\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUuc2Nzcz8zNzM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvY2Fyb3VzZWwubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJjYXJvdXNlbF9jb250YWluZXJfXzIwSjhZXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carousel/carousel.module.scss\n");

/***/ }),

/***/ "./src/components/Carousel/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Carousel/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alice-carousel */ \"react-alice-carousel\");\n/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ \"./node_modules/react-alice-carousel/lib/alice-carousel.css\");\n/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel.module.scss */ \"./src/components/Carousel/carousel.module.scss\");\n/* harmony import */ var _carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carousel_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/develcode69/\\xC1rea de Trabalho/git/github/decilio-space/src/components/Carousel/index.tsx\";\n\n\n\nfunction Carousel({\n  images = []\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _carousel_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      autoPlay: true,\n      autoPlayInterval: 3000,\n      children: images.map(image => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: image.src,\n          alt: image.alt,\n          width: image.width,\n          height: image.height\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 18\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC9pbmRleC50c3g/NTA4NCJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsImltYWdlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsImltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUMsUUFBTSxHQUFHO0FBQVgsQ0FBbEIsRUFBbUM7QUFDaEQsc0JBQ0U7QUFBUyxhQUFTLEVBQUVDLDREQUFNLENBQUNDLFNBQTNCO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBZSxjQUFRLE1BQXZCO0FBQXdCLHNCQUFnQixFQUFFLElBQTFDO0FBQUEsZ0JBQ0dGLE1BQU0sQ0FBQ0csR0FBUCxDQUFZQyxLQUFELElBQVc7QUFDckIsNEJBQU87QUFBSyxhQUFHLEVBQUVBLEtBQUssQ0FBQ0MsR0FBaEI7QUFBcUIsYUFBRyxFQUFFRCxLQUFLLENBQUNFLEdBQWhDO0FBQXFDLGVBQUssRUFBRUYsS0FBSyxDQUFDRyxLQUFsRDtBQUF5RCxnQkFBTSxFQUFFSCxLQUFLLENBQUNJO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsaWNlQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LWFsaWNlLWNhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1hbGljZS1jYXJvdXNlbC9saWIvYWxpY2UtY2Fyb3VzZWwuY3NzXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2Fyb3VzZWwubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoeyBpbWFnZXMgPSBbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxBbGljZUNhcm91c2VsIGF1dG9QbGF5IGF1dG9QbGF5SW50ZXJ2YWw9ezMwMDB9PlxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2ltYWdlLnNyY30gYWx0PXtpbWFnZS5hbHR9IHdpZHRoPXtpbWFnZS53aWR0aH0gaGVpZ2h0PXtpbWFnZS5oZWlnaHR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQWxpY2VDYXJvdXNlbD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carousel/index.tsx\n");

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

/***/ "./src/pages/canil/canil.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/canil/canil.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"canil_title__DEie_\",\n\t\"about\": \"canil_about__3uw2T\",\n\t\"wrapper\": \"canil_wrapper__1SHuT\",\n\t\"firstContainer\": \"canil_firstContainer__1OsUv\",\n\t\"secondContainer\": \"canil_secondContainer__uFQvq\",\n\t\"column\": \"canil_column__dBz53\",\n\t\"hours\": \"canil_hours__2a9Ci\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FuaWwvY2FuaWwubW9kdWxlLnNjc3M/Yjc3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9jYW5pbC9jYW5pbC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwiY2FuaWxfdGl0bGVfX0RFaWVfXCIsXG5cdFwiYWJvdXRcIjogXCJjYW5pbF9hYm91dF9fM3V3MlRcIixcblx0XCJ3cmFwcGVyXCI6IFwiY2FuaWxfd3JhcHBlcl9fMVNIdVRcIixcblx0XCJmaXJzdENvbnRhaW5lclwiOiBcImNhbmlsX2ZpcnN0Q29udGFpbmVyX18xT3NVdlwiLFxuXHRcInNlY29uZENvbnRhaW5lclwiOiBcImNhbmlsX3NlY29uZENvbnRhaW5lcl9fdUZRdnFcIixcblx0XCJjb2x1bW5cIjogXCJjYW5pbF9jb2x1bW5fX2RCejUzXCIsXG5cdFwiaG91cnNcIjogXCJjYW5pbF9ob3Vyc19fMmE5Q2lcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/canil/canil.module.scss\n");

/***/ }),

/***/ "./src/pages/canil/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/canil/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canil; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Title */ \"./src/components/Title/index.tsx\");\n/* harmony import */ var _services_api_hours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.hours */ \"./src/services/api.hours.js\");\n/* harmony import */ var _components_Carousel___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Carousel/ */ \"./src/components/Carousel/index.tsx\");\n/* harmony import */ var _canil_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canil.module.scss */ \"./src/pages/canil/canil.module.scss\");\n/* harmony import */ var _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_canil_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/develcode69/\\xC1rea de Trabalho/git/github/decilio-space/src/pages/canil/index.tsx\";\n\n\n\n\n\n\nconst images = [{\n  src: \"/images/Canil/canil-fora.jpeg\",\n  alt: \"Imagem de um cachorr assim\",\n  width: 650,\n  height: \"100%\"\n}, {\n  src: \"/images/Canil/canil-fora-2.jpeg\",\n  alt: \"Imagem de um cachorr assim\",\n  width: 650,\n  height: \"100%\"\n}, {\n  src: \"/images/Canil/entrada-canil-2.jpeg\",\n  alt: \"Imagem de um cachorr assim\",\n  width: 650,\n  height: \"100%\"\n}, {\n  src: \"/images/Canil/canil-dentro.jpeg\",\n  alt: \"Imagem de um cachorr assim\",\n  width: 650,\n  height: \"100%\"\n}];\nfunction Canil() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"O Canil\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Sobre n\\xF3s\",\n        description: \"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.about,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.firstContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.column,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: \"Sobre nosso Canil\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: \"Nosso hor\\xE1rio comercial\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.hours,\n              children: _services_api_hours__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(hour => {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    className: \"day\",\n                    children: hour.day\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 23\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__[\"FiClock\"], {\n                      size: 16\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 89,\n                      columnNumber: 25\n                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      className: \"time\",\n                      children: [hour.start, \" - \", hour.finish]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 90,\n                      columnNumber: 25\n                    }, this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 88,\n                    columnNumber: 23\n                  }, this)]\n                }, hour.id, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 21\n                }, this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _canil_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Carousel___WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            images: images\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2FuaWwvaW5kZXgudHN4PzcxM2EiXSwibmFtZXMiOlsiaW1hZ2VzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJDYW5pbCIsInN0eWxlcyIsInRpdGxlIiwiYWJvdXQiLCJ3cmFwcGVyIiwiZmlyc3RDb250YWluZXIiLCJjb2x1bW4iLCJob3VycyIsIkhvdXJzIiwibWFwIiwiaG91ciIsImRheSIsInN0YXJ0IiwiZmluaXNoIiwiaWQiLCJzZWNvbmRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxLQUFHLEVBQUUsK0JBRFA7QUFFRUMsS0FBRyxFQUFFLDRCQUZQO0FBR0VDLE9BQUssRUFBRSxHQUhUO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBRGEsRUFPYjtBQUNFSCxLQUFHLEVBQUUsaUNBRFA7QUFFRUMsS0FBRyxFQUFFLDRCQUZQO0FBR0VDLE9BQUssRUFBRSxHQUhUO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBUGEsRUFhYjtBQUNFSCxLQUFHLEVBQUUsb0NBRFA7QUFFRUMsS0FBRyxFQUFFLDRCQUZQO0FBR0VDLE9BQUssRUFBRSxHQUhUO0FBSUVDLFFBQU0sRUFBRTtBQUpWLENBYmEsRUFtQmI7QUFDRUgsS0FBRyxFQUFFLGlDQURQO0FBRUVDLEtBQUcsRUFBRSw0QkFGUDtBQUdFQyxPQUFLLEVBQUUsR0FIVDtBQUlFQyxRQUFNLEVBQUU7QUFKVixDQW5CYSxDQUFmO0FBMkJlLFNBQVNDLEtBQVQsR0FBaUI7QUFDOUIsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBUyxlQUFTLEVBQUVDLHlEQUFNLENBQUNDLEtBQTNCO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFDRSxhQUFLLEVBQUMsY0FEUjtBQUVFLG1CQUFXLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBZ0JFO0FBQVMsZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxLQUEzQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUYseURBQU0sQ0FBQ0csT0FBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVILHlEQUFNLENBQUNJLGNBQXZCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFSix5REFBTSxDQUFDSyxNQUF2QjtBQUFBLG9DQUNFO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFYRixlQXFCRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyQkYsZUF3QkU7QUFBSyx1QkFBUyxFQUFFTCx5REFBTSxDQUFDTSxLQUF2QjtBQUFBLHdCQUNHQywyREFBSyxDQUFDQyxHQUFOLENBQVdDLElBQUQsSUFBVTtBQUNuQixvQ0FDRTtBQUFBLDBDQUNFO0FBQUcsNkJBQVMsRUFBQyxLQUFiO0FBQUEsOEJBQW9CQSxJQUFJLENBQUNDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFHRTtBQUFBLDRDQUNFLHFFQUFDLHNEQUFEO0FBQVMsMEJBQUksRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUFHLCtCQUFTLEVBQUMsTUFBYjtBQUFBLGlDQUNHRCxJQUFJLENBQUNFLEtBRFIsU0FDa0JGLElBQUksQ0FBQ0csTUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRjtBQUFBLG1CQUFVSCxJQUFJLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERjtBQVlELGVBYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBNkNFO0FBQUssbUJBQVMsRUFBRWIseURBQU0sQ0FBQ2MsZUFBdkI7QUFBQSxpQ0FDRSxxRUFBQyw2REFBRDtBQUFVLGtCQUFNLEVBQUVwQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBLGtCQURGO0FBdUVEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NhbmlsL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEZpQ2xvY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgSG91cnMgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS5ob3Vyc1wiO1xuXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2Fyb3VzZWwvXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NhbmlsLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAge1xuICAgIHNyYzogXCIvaW1hZ2VzL0NhbmlsL2NhbmlsLWZvcmEuanBlZ1wiLFxuICAgIGFsdDogXCJJbWFnZW0gZGUgdW0gY2FjaG9yciBhc3NpbVwiLFxuICAgIHdpZHRoOiA2NTAsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbiAge1xuICAgIHNyYzogXCIvaW1hZ2VzL0NhbmlsL2NhbmlsLWZvcmEtMi5qcGVnXCIsXG4gICAgYWx0OiBcIkltYWdlbSBkZSB1bSBjYWNob3JyIGFzc2ltXCIsXG4gICAgd2lkdGg6IDY1MCxcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB9LFxuICB7XG4gICAgc3JjOiBcIi9pbWFnZXMvQ2FuaWwvZW50cmFkYS1jYW5pbC0yLmpwZWdcIixcbiAgICBhbHQ6IFwiSW1hZ2VtIGRlIHVtIGNhY2hvcnIgYXNzaW1cIixcbiAgICB3aWR0aDogNjUwLFxuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gIH0sXG4gIHtcbiAgICBzcmM6IFwiL2ltYWdlcy9DYW5pbC9jYW5pbC1kZW50cm8uanBlZ1wiLFxuICAgIGFsdDogXCJJbWFnZW0gZGUgdW0gY2FjaG9yciBhc3NpbVwiLFxuICAgIHdpZHRoOiA2NTAsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbmlsKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk8gQ2FuaWw8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICB0aXRsZT1cIlNvYnJlIG7Ds3NcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ2xhcml0YXMgZXN0IGV0aWFtIHByb2Nlc3N1cyBkeW5hbWljdXMsIHF1aSBzZXF1aXR1ciBtdXRhdGlvbmVtXG4gICAgICAgICAgICAgIGNvbnN1ZXR1ZGl1bSBsZWN0b3J1bS4gTWlydW0gZXN0IG5vdGFyZSBxdWFtIGxpdHRlcmEgZ290aGljYSwgcXVhbVxuICAgICAgICAgICAgICBudW5jIHB1dGFtdXMgcGFydW0gY2xhcmFtLCBhbnRlcG9zdWVyaXQgbGl0dGVyYXJ1bSBmb3JtYXNcbiAgICAgICAgICAgICAgaHVtYW5pdGF0aXMgcGVyIHNlYWN1bGEgcXVhcnRhIGRlY2ltYSBldCBxdWludGEgZGVjaW1hLiBFb2RlbSBtb2RvXG4gICAgICAgICAgICAgIHR5cGksIHF1aSBudW5jIG5vYmlzIHZpZGVudHVyIHBhcnVtIGNsYXJpLCBmaWFudCBzb2xsZW1uZXMgaW5cbiAgICAgICAgICAgICAgZnV0dXJ1bS5cIlxuICAgICAgICAvPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXJzdENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbHVtbn0+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Tb2JyZSBub3NzbyBDYW5pbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQsIHNlZFxuICAgICAgICAgICAgICAgIGRpYW0gbm9udW1teSBuaWJoIGV1aXNtb2QgdGluY2lkdW50IHV0IGxhb3JlZXQgZG9sb3JlIG1hZ25hXG4gICAgICAgICAgICAgICAgYWxpcXVhbSBlcmF0IHZvbHV0cGF0LiBVdCB3aXNpIGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzXG4gICAgICAgICAgICAgICAgbm9zdHJ1ZCBleGVyY2kgdGF0aW9uIHVsbGFtY29ycGVyIHN1c2NpcGl0IGxvYm9ydGlzIG5pc2wgdXRcbiAgICAgICAgICAgICAgICBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIER1aXMgYXV0ZW0gdmVsIGV1bSBpcml1cmUgZG9sb3IgaW4gaGVuZHJlcml0IGluIHZ1bHB1dGF0ZSB2ZWxpdFxuICAgICAgICAgICAgICAgIGVzc2UgbW9sZXN0aWUgY29uc2VxdWF0LCB2ZWwgaWxsdW0gZG9sb3JlIGV1IGZldWdpYXQgbnVsbGFcbiAgICAgICAgICAgICAgICBmYWNpbGlzaXMgYXQgdmVybyBlcm9zIGV0IGFjY3Vtc2FuIGV0IGl1c3RvIG9kaW8gZGlnbmlzc2ltIHF1aVxuICAgICAgICAgICAgICAgIGJsYW5kaXQgcHJhZXNlbnQgbHVwdGF0dW0genpyaWwgZGVsZW5pdCBhdWd1ZSBkdWlzIGRvbG9yZSB0ZVxuICAgICAgICAgICAgICAgIGZldWdhaXQgbnVsbGEgZmFjaWxpc2kuIE5hbSBsaWJlciB0ZW1wb3IgY3VtIHNvbHV0YSBub2Jpc1xuICAgICAgICAgICAgICAgIGVsZWlmZW5kIG9wdGlvbiBjb25ndWUgbmloaWwgaW1wZXJkaWV0IGRvbWluZyBpZCBxdW9kIG1hemltXG4gICAgICAgICAgICAgICAgcGxhY2VyYXQgZmFjZXIgcG9zc2ltIGFzc3VtLiBUeXBpIG5vbiBoYWJlbnQgY2xhcml0YXRlbSBpbnNpdGFtO1xuICAgICAgICAgICAgICAgIGVzdCB1c3VzIGxlZ2VudGlzIGluIGlpcyBxdWkgZmFjaXQgZW9ydW0gY2xhcml0YXRlbS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgPHNwYW4+Tm9zc28gaG9yw6FyaW8gY29tZXJjaWFsPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvdXJzfT5cbiAgICAgICAgICAgICAgICB7SG91cnMubWFwKChob3VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aG91ci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF5XCI+e2hvdXIuZGF5fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpQ2xvY2sgc2l6ZT17MTZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtob3VyLnN0YXJ0fSAtIHtob3VyLmZpbmlzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBpbWFnZXM9e2ltYWdlc30gLz5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvZG9nLWFib3V0LXVzLmpwZ1wiIGFsdD1cIlwiIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/canil/index.tsx\n");

/***/ }),

/***/ "./src/services/api.hours.js":
/*!***********************************!*\
  !*** ./src/services/api.hours.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst hours = [{\n  day: \"Segunda-feira\",\n  start: \"8:00\",\n  finish: \"18:00\"\n}, {\n  day: \"Terça-feira\",\n  start: \"8:00\",\n  finish: \"18:00\"\n}, {\n  day: \"Quarta-feira\",\n  start: \"8:00\",\n  finish: \"18:00\"\n}, {\n  day: \"Quinta-feira\",\n  start: \"8:00\",\n  finish: \"18:00\"\n}, {\n  day: \"Sexta-feira\",\n  start: \"8:00\",\n  finish: \"18:00\"\n}, {\n  day: \"Sábado\",\n  start: \"8:00\",\n  finish: \"12:00\"\n}, {\n  day: \"Domingo\",\n  start: \"7:00\",\n  finish: \"12:00\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (hours);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLmhvdXJzLmpzPzgzNTAiXSwibmFtZXMiOlsiaG91cnMiLCJkYXkiLCJzdGFydCIsImZpbmlzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxLQUFHLEVBQUUsZUFEUDtBQUVFQyxPQUFLLEVBQUUsTUFGVDtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQURZLEVBTVo7QUFDRUYsS0FBRyxFQUFFLGFBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FOWSxFQVdaO0FBQ0VGLEtBQUcsRUFBRSxjQURQO0FBRUVDLE9BQUssRUFBRSxNQUZUO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBWFksRUFnQlo7QUFDRUYsS0FBRyxFQUFFLGNBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FoQlksRUFxQlo7QUFDRUYsS0FBRyxFQUFFLGFBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0FyQlksRUEwQlo7QUFDRUYsS0FBRyxFQUFFLFFBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0ExQlksRUErQlo7QUFDRUYsS0FBRyxFQUFFLFNBRFA7QUFFRUMsT0FBSyxFQUFFLE1BRlQ7QUFHRUMsUUFBTSxFQUFFO0FBSFYsQ0EvQlksQ0FBZDtBQXNDZUgsb0VBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmhvdXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG91cnMgPSBbXG4gIHtcbiAgICBkYXk6IFwiU2VndW5kYS1mZWlyYVwiLFxuICAgIHN0YXJ0OiBcIjg6MDBcIixcbiAgICBmaW5pc2g6IFwiMTg6MDBcIixcbiAgfSxcbiAge1xuICAgIGRheTogXCJUZXLDp2EtZmVpcmFcIixcbiAgICBzdGFydDogXCI4OjAwXCIsXG4gICAgZmluaXNoOiBcIjE4OjAwXCIsXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiUXVhcnRhLWZlaXJhXCIsXG4gICAgc3RhcnQ6IFwiODowMFwiLFxuICAgIGZpbmlzaDogXCIxODowMFwiLFxuICB9LFxuICB7XG4gICAgZGF5OiBcIlF1aW50YS1mZWlyYVwiLFxuICAgIHN0YXJ0OiBcIjg6MDBcIixcbiAgICBmaW5pc2g6IFwiMTg6MDBcIixcbiAgfSxcbiAge1xuICAgIGRheTogXCJTZXh0YS1mZWlyYVwiLFxuICAgIHN0YXJ0OiBcIjg6MDBcIixcbiAgICBmaW5pc2g6IFwiMTg6MDBcIixcbiAgfSxcbiAge1xuICAgIGRheTogXCJTw6FiYWRvXCIsXG4gICAgc3RhcnQ6IFwiODowMFwiLFxuICAgIGZpbmlzaDogXCIxMjowMFwiLFxuICB9LFxuICB7XG4gICAgZGF5OiBcIkRvbWluZ29cIixcbiAgICBzdGFydDogXCI3OjAwXCIsXG4gICAgZmluaXNoOiBcIjEyOjAwXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBob3VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.hours.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react-alice-carousel":
/*!***************************************!*\
  !*** external "react-alice-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-alice-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiP2Q2NGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtYWxpY2UtY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbGljZS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-alice-carousel\n");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiP2M0NmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fi\n");

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