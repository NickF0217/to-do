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

/***/ "./src/add-listing.js":
/*!****************************!*\
  !*** ./src/add-listing.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst makeNewListing = (title, description, dueDate, priority) => {\n    return {\n        title,\n        description, \n        dueDate,\n        priority,\n    };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeNewListing);\n\n//# sourceURL=webpack://to-do/./src/add-listing.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_listing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-listing */ \"./src/add-listing.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\n\n// import changeStatus from \"./status-btn.js\";\n\nconst leftSide = document.querySelector('#left-side');\nconst details = document.querySelector('#details');\n\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.addNewBtn;\n_modal_js__WEBPACK_IMPORTED_MODULE_1__.modalClose;\nconst confirmBtn = document.querySelector('#confirm-entry');\n\nlet mainList = [];\n\nlet detailEntry = document.createElement('div');\ndetailEntry.textContent = \"Add an entry to see it's deets here\";\ndetailEntry.id = 'entry-details';\ndetails.appendChild(detailEntry);\n\nfunction addToList(listing) {\n    mainList.push(listing);\n}\n\nfunction addToLeftDom(listing) {\n    const entry = document.createElement('div');\n    // entry.textContent = `${listing.title}`;\n    entry.innerHTML = listing.title + '<br />'+ `Due: ${listing.dueDate}`;\n    entry.className = 'left-entry';\n    if (listing.priority == \"Low\") {\n        entry.style.border = '2px solid #0f0';\n    } else if (listing.priority == \"Medium\") {\n        entry.style.border = '2px solid rgb(246, 255, 0)';\n    } else if (listing.priority == \"High\") {\n        entry.style.border = '2px solid #FF8C00';\n    }\n    leftSide.appendChild(entry);\n    entry.addEventListener('click', () => {\n        addToDetails(listing);\n    });\n}\n\nfunction addToDetails(listing) {\n    detailEntry.textContent = \"\";\n    // detailEntry.textContent = `${listing.title}\\r\\n${listing.description}\\r\\n\n    //     ${listing.dueDate}\\r\\n${listing.priority}`;\n    detailEntry.innerHTML = listing.title + '<br />' + listing.description +'<br />'+ \n        listing.dueDate +'<br />'+ `Priority: ${listing.priority}`;\n\n    if (listing.priority == \"Low\") {\n        detailEntry.style.border = '4px solid #0f0';\n     } else if (listing.priority == \"Medium\") {\n        detailEntry.style.border = '4px solid rgb(246, 255, 0)';\n     } else if (listing.priority == \"High\") {\n        detailEntry.style.border = '4px solid #FF8C00';\n     }\n    detailEntry.className = 'right-entry';\n\n    const statusBtn = document.createElement('button');\n    statusBtn.textContent = \"Complete\";\n    statusBtn.addEventListener('click', () => {\n        changeStatus(listing);\n    })\n    detailEntry.appendChild(statusBtn);\n}\n\nconfirmBtn.addEventListener('click', () => {\n    const title = document.getElementsByName('title')[0].value;\n    const description = document.getElementsByName('description')[0].value;\n    const dueDate = document.getElementsByName('due-date')[0].value;\n    const priority = document.getElementsByName('priority')[0].value;\n    const newListing =  (0,_add_listing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority);\n    addToList(newListing);\n    addToLeftDom(newListing);\n\n})\n\nfunction changeStatus(listing) {\n    listing.priority = \"Complete\";\n    detailEntry.style.borderColor = \"#00F\";\n    detailEntry.innerHTML = listing.title + '<br />' + listing.description +'<br />'+ \n        listing.dueDate +'<br />'+ `Priority: ${listing.priority}`;\n    \n}\n\n/* Entries to test DOM. Will be removed */\nconst testListing = (0,_add_listing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Pet cats\", \"Pet Dash and Molly on their fuzzy lil heads\", \n\"June 26, 00:00\", \"Priority: High\");\naddToList(testListing);\naddToLeftDom(testListing);\n\nconst anotherTest = (0,_add_listing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Run\", \"Go for a run at the greenway. Do the best you can.\",\n 'June 27, 14:00', \"Priority: Low\");\n addToList(anotherTest);\n addToLeftDom(anotherTest);\n\nconsole.log(mainList);\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewBtn\": () => (/* binding */ addNewBtn),\n/* harmony export */   \"modalClose\": () => (/* binding */ modalClose)\n/* harmony export */ });\nconst addNewBtn = document.querySelector('#add-new');\nconst modalBg = document.querySelector('#modal-bg');\nconst modalForm = document.querySelector('#modal');\nconst modalClose = document.querySelector('#modal-close');\n\naddNewBtn.addEventListener('click', () => {\n    modalBg.classList.add('bg-active');\n});\n\nmodalClose.addEventListener('click', () => {\n    modalBg.classList.remove('bg-active');\n})\n\n\n\n//# sourceURL=webpack://to-do/./src/modal.js?");

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