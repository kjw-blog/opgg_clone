"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/champions",{

/***/ "./pages/champions/index.tsx":
/*!***********************************!*\
  !*** ./pages/champions/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Champions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_champions_ChampionList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/champions/ChampionList */ \"./components/champions/ChampionList.tsx\");\n/* harmony import */ var _components_common_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/Loading */ \"./components/common/Loading.tsx\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Champions() {\n    var ref;\n    _s();\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/champions\").data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (data === null || data === void 0 ? void 0 : (ref = data.data) === null || ref === void 0 ? void 0 : ref.length) === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\pages\\\\champions\\\\index.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center w-full h-auto bg-red-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_champions_ChampionList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    data: data === null || data === void 0 ? void 0 : data.data\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\pages\\\\champions\\\\index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-2 border-red-500 w-[25%] h-[50rem]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\pages\\\\champions\\\\index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\pages\\\\champions\\\\index.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n_s(Champions, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Champions;\nvar _c;\n$RefreshReg$(_c, \"Champions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFtcGlvbnMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThEO0FBQ2I7QUFDeEI7O0FBRVYsU0FBU0csU0FBUyxHQUFHO1FBSzdCQyxHQUFVOztJQUpmLElBQU0sSUFBTSxHQUFLRiwrQ0FBTSxDQUFDLGdCQUFnQixDQUFDLENBQWpDRSxJQUFJO0lBRVoscUJBQ0U7a0JBQ0dBLENBQUFBLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsQ0FBQUEsR0FBVSxHQUFWQSxJQUFJLENBQUVBLElBQUksY0FBVkEsR0FBVSxjQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEdBQVUsQ0FBRUMsTUFBTSxDQUFSLEtBQWEsQ0FBQyxpQkFDdkIsOERBQUNKLGtFQUFPOzs7O2dCQUFHLGlCQUVYLDhEQUFDSyxLQUFHO1lBQUNDLFNBQVMsRUFBQywyREFBMkQ7OzhCQUN4RSw4REFBQ1AsMEVBQVk7b0JBQUNJLElBQUksRUFBRUEsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVBLElBQUk7Ozs7O3dCQUFJOzhCQUNsQyw4REFBQ0UsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7Ozs7d0JBQUc7Ozs7OztnQkFZekQ7cUJBRVAsQ0FDSDtDQUNIO0dBMUJ1QkosU0FBUzs7UUFDZEQsMkNBQU07OztBQUREQyxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYW1waW9ucy9pbmRleC50c3g/YjY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhbXBpb25MaXN0IGZyb20gJ0Bjb21wb25lbnRzL2NoYW1waW9ucy9DaGFtcGlvbkxpc3QnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAY29tcG9uZW50cy9jb21tb24vTG9hZGluZyc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW1waW9ucygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS9jaGFtcGlvbnMnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkYXRhPy5kYXRhPy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gYmctcmVkLTIwMFwiPlxyXG4gICAgICAgICAgPENoYW1waW9uTGlzdCBkYXRhPXtkYXRhPy5kYXRhfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcmVkLTUwMCB3LVsyNSVdIGgtWzUwcmVtXVwiIC8+XHJcbiAgICAgICAgICB7LyogPHN2Z1xyXG4gICAgICAgICAgICBpZD1cIkljb25zXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBmaWxsPVwiIzUzODNFOFwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGl0bGUgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMy41NTMsMTYuMTA1QTEsMSwwLDAsMCwxMywxN3YzYTEsMSwwLDAsMCwuMjkzLjcwN2wyLDJBMSwxLDAsMCwwLDE2LDIzYTEuMDExLDEuMDExLDAsMCwwLC40NDctLjEwNWw0LTJBMSwxLDAsMCwwLDIxLDIwVjEwQTksOSwwLDAsMCwzLDEwVjIwYTEsMSwwLDAsMCwuNTUzLjg5NWw0LDJhMSwxLDAsMCwwLDEuMTU0LS4xODhsMi0yQTEsMSwwLDAsMCwxMSwyMFYxN2ExLDEsMCwwLDAtLjU1My0uODk1TDksMTUuMzgyVjEyLjYxOEwxMS41NTMsMTMuOWExLDEsMCwwLDAsLjg5NCwwTDE1LDEyLjYxOHYyLjc2NFptMi45NzItNS45NTZhMSwxLDAsMCwwLS45NzItLjA0NEwxMiwxMS44ODIsOC40NDcsMTAuMTA1QTEsMSwwLDAsMCw3LDExdjVhMSwxLDAsMCwwLC41NTMuODk1TDksMTcuNjE4djEuOTY4bC0xLjIsMS4yTDUsMTkuMzgyVjEwYTcsNywwLDAsMSwxNCwwdjkuMzgybC0yLjgsMS40LTEuMi0xLjJWMTcuNjE4bDEuNDQ3LS43MjNBMSwxLDAsMCwwLDE3LDE2VjExQTEsMSwwLDAsMCwxNi41MjUsMTAuMTQ5WlwiIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsNkgxMGExLDEsMCwwLDAsMCwyaDRhMSwxLDAsMCwwLDAtMlpcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hhbXBpb25MaXN0IiwiTG9hZGluZyIsInVzZVNXUiIsIkNoYW1waW9ucyIsImRhdGEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/champions/index.tsx\n");

/***/ })

});