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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/numbers */ \"./src/utils/numbers.js\");\n\n\nlet span = document.getElementById(\"stringified\");\nlet input = document.getElementById(\"input\");\nlet submit = document.getElementById(\"submit\");\nsubmit.addEventListener(\"click\", () => {\n    span.innerText = (0,_utils_numbers__WEBPACK_IMPORTED_MODULE_0__.stringifyNumber)(parseInt(input.value));\n});\n\n\n//# sourceURL=webpack://js-numerals/./src/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ONES\": () => (/* binding */ ONES),\n/* harmony export */   \"TEENS\": () => (/* binding */ TEENS),\n/* harmony export */   \"TENS\": () => (/* binding */ TENS)\n/* harmony export */ });\nconst ONES = {\n    0: \"\",\n    1: \"one\",\n    2: \"two\",\n    3: \"three\",\n    4: \"four\",\n    5: \"five\",\n    6: \"six\",\n    7: \"seven\",\n    8: \"eight\",\n    9: \"nine\",\n};\n\nconst TEENS = {\n    10: \"ten\",\n    11: \"eleven\",\n    12: \"twelve\",\n    13: \"thirteen\",\n    14: \"fourteen\",\n    15: \"fifteen\",\n    16: \"sixteen\",\n    17: \"seventeen\",\n    18: \"eighteen\",\n    19: \"nineteen\",\n};\n\nconst TENS = {\n    1: \"\", //handle teens separately,\n    2: \"twenty\",\n    3: \"thirty\",\n    4: \"forty\",\n    5: \"fifty\",\n    6: \"sixty\",\n    7: \"seventy\",\n    8: \"eighty\",\n    9: \"ninety\",\n};\n\n\n//# sourceURL=webpack://js-numerals/./src/utils/constants.js?");

/***/ }),

/***/ "./src/utils/numbers.js":
/*!******************************!*\
  !*** ./src/utils/numbers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringifyNumber\": () => (/* binding */ stringifyNumber)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/utils/constants.js\");\n\nconst stringifyNumber = (number, recursive = false) => {\n    if (typeof number !== \"number\" || isNaN(number))\n        return \"input must be a number\";\n    if (number == 0 && !recursive) return \"zero\";\n    let numberString = number.toString();\n    let sepNeeded;\n    let result = \"\";\n    let firstPart;\n    let secondPart;\n    let unit;\n    switch (numberString.length) {\n        case 1:\n            return _constants__WEBPACK_IMPORTED_MODULE_0__.ONES[number];\n        case 2:\n            if (numberString[0] == \"1\") {\n                result = _constants__WEBPACK_IMPORTED_MODULE_0__.TEENS[number];\n            } else {\n                sepNeeded = numberString[1] !== \"0\";\n                result = `${_constants__WEBPACK_IMPORTED_MODULE_0__.TENS[numberString[0]]}${sepNeeded ? \"-\" : \"\"}${\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.ONES[numberString[1]]\n                }`;\n            }\n            return result;\n        case 3:\n            firstPart = _constants__WEBPACK_IMPORTED_MODULE_0__.ONES[numberString[0]];\n            secondPart = stringifyNumber(parseInt(numberString.slice(1)), true);\n            sepNeeded = secondPart.length > 0;\n            unit = \"hundred\";\n            break;\n        case 4:\n            if (numberString[0] == \"1\" && parseInt(numberString[1]) > 0) {\n                unit = \"hundred\";\n                firstPart = stringifyNumber(\n                    parseInt(numberString.slice(0, 2)),\n                    true\n                );\n                secondPart = stringifyNumber(\n                    parseInt(numberString.slice(2)),\n                    true\n                );\n            } else {\n                unit = \"thousand\";\n                let threeDigitPart = parseInt(numberString.slice(1));\n                firstPart = _constants__WEBPACK_IMPORTED_MODULE_0__.ONES[numberString[0]];\n                secondPart = stringifyNumber(threeDigitPart, true);\n            }\n            sepNeeded = secondPart.length > 0 && !secondPart.includes(\"and\");\n            break;\n        case 5:\n            unit = \"thousand\";\n            firstPart = stringifyNumber(\n                parseInt(numberString.slice(0, 2)),\n                true\n            );\n            secondPart = stringifyNumber(parseInt(numberString.slice(2)), true);\n            break;\n        case 6:\n            unit = \"thousand\";\n            firstPart = stringifyNumber(\n                parseInt(numberString.slice(0, 3)),\n                true\n            );\n            secondPart = stringifyNumber(parseInt(numberString.slice(3)), true);\n            break;\n        default:\n            return \"Number is too big\";\n    }\n    result = `${firstPart} ${unit}${sepNeeded ? \" and\" : \"\"} ${secondPart}`;\n    return result.trim();\n};\n\n\n//# sourceURL=webpack://js-numerals/./src/utils/numbers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;