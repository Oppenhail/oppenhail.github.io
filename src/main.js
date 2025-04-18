(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TestApp"] = factory();
	else
		root["TestApp"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may only appear at the top level (470:4)\nFile was processed with these loaders:\n * ../node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|         });\n|     }\n>     export function runTests() {\n|         return __awaiter(this, void 0, void 0, function () {\n|             var tests, testid, img, pos, opts, chatArr, line, chatLine;");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});