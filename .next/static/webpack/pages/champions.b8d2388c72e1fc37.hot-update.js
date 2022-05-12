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

/***/ "./components/champions/ChampionList.tsx":
/*!***********************************************!*\
  !*** ./components/champions/ChampionList.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChampionList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_client_getText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/client/getText */ \"./utils/client/getText.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChampionList(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), list = ref[0], setList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\"), listSelect = ref1[0], setListSelect = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            var sort = Object.values(data);\n            sort.sort(function(a, b) {\n                if (a.name > b.name) {\n                    return 1;\n                } else {\n                    return -1;\n                }\n            });\n            var _list = sort.map(function(c) {\n                return {\n                    eng: c.id,\n                    kor: c.name,\n                    tags: c.tags\n                };\n            });\n            setList(_list);\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2 border-red-500 w-[32%] h-[50rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-between w-full h-12 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"b flex items-center h-12 ml-1 space-x-2 text-sm text-gray-600\",\n                        children: _utils_client_getText__WEBPACK_IMPORTED_MODULE_2__.listSelects.map(function(items) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    if (items.eng !== listSelect) setListSelect(items.eng);\n                                },\n                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"h-full flex items-center\", items.eng === listSelect ? \"text-main-500 font-bold border-b-2 border-main-500 mt-1\" : \"cursor-pointer\"),\n                                children: items.kor\n                            }, items.eng, false, {\n                                fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n};\n_s(ChampionList, \"n2bsreYzrPQXNNJMlKbw4zhc4Kg=\");\n_c = ChampionList;\nvar _c;\n$RefreshReg$(_c, \"ChampionList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYW1waW9ucy9DaGFtcGlvbkxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDRDtBQUNtQjtBQUNoQjs7QUFRckIsU0FBU0ksWUFBWSxDQUFDLEtBQWEsRUFBRTtRQUFmLElBQU0sR0FBTixLQUFhLENBQVhDLElBQUk7OztJQUN6QyxJQUF3QkosR0FBd0IsR0FBeEJBLCtDQUFRLENBQWEsRUFBRSxDQUFDLEVBWmxELElBWWEsR0FBYUEsR0FBd0IsR0FBckMsRUFaYixPQVlzQixHQUFJQSxHQUF3QixHQUE1QjtJQUNwQixJQUFvQ0EsSUFBdUIsR0FBdkJBLCtDQUFRLENBQVMsS0FBSyxDQUFDLEVBYjdELFVBYW1CLEdBQW1CQSxJQUF1QixHQUExQyxFQWJuQixhQWFrQyxHQUFJQSxJQUF1QixHQUEzQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUssSUFBSSxFQUFFO1lBQ1IsSUFBTUssSUFBSSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDO1lBQ2hDSyxJQUFJLENBQUNBLElBQUksQ0FBQyxTQUFDRyxDQUFNLEVBQUVDLENBQU0sRUFBSztnQkFDNUIsSUFBSUQsQ0FBQyxDQUFDRSxJQUFJLEdBQUdELENBQUMsQ0FBQ0MsSUFBSSxFQUFFO29CQUNuQixPQUFPLENBQUMsQ0FBQztpQkFDVixNQUFNO29CQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFNQyxLQUFLLEdBQUdOLElBQUksQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLENBQU0sRUFBSztnQkFDakMsT0FBTztvQkFDTEMsR0FBRyxFQUFFRCxDQUFDLENBQUNFLEVBQUU7b0JBQ1RDLEdBQUcsRUFBRUgsQ0FBQyxDQUFDSCxJQUFJO29CQUNYTyxJQUFJLEVBQUVKLENBQUMsQ0FBQ0ksSUFBSTtpQkFDYixDQUFDO2FBQ0gsQ0FBQztZQUNGZixPQUFPLENBQUNTLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO0tBQ0YsRUFBRTtRQUFDWCxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgscUJBQ0UsOERBQUNrQixLQUFHO1FBQUNDLFNBQVMsRUFBQywyQ0FBMkM7a0JBQ3hELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxvREFBb0Q7OzhCQUNqRSw4REFBQ0MsS0FBRzs4QkFDRiw0RUFBQ0MsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLCtEQUErRDtrQ0FDMUV0QixrRUFBZSxDQUFDLFNBQUN5QixLQUFLO2lEQUNyQiw4REFBQ0MsSUFBRTtnQ0FFREMsT0FBTyxFQUFFLFdBQU07b0NBQ2IsSUFBSUYsS0FBSyxDQUFDUixHQUFHLEtBQUtYLFVBQVUsRUFBRUMsYUFBYSxDQUFDa0IsS0FBSyxDQUFDUixHQUFHLENBQUMsQ0FBQztpQ0FDeEQ7Z0NBQ0RLLFNBQVMsRUFBRXJCLGlEQUFVLENBQ25CLDBCQUEwQixFQUMxQndCLEtBQUssQ0FBQ1IsR0FBRyxLQUFLWCxVQUFVLEdBQ3BCLHlEQUF5RCxHQUN6RCxnQkFBZ0IsQ0FDckI7MENBRUFtQixLQUFLLENBQUNOLEdBQUc7K0JBWExNLEtBQUssQ0FBQ1IsR0FBRzs7OztxQ0FZWDt5QkFDTixDQUFDOzs7Ozs0QkFDQzs7Ozs7d0JBQ0Q7OEJBQ04sOERBQUNJLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxlQUFlOzs7Ozt3QkFBTzs7Ozs7O2dCQUNqQzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FwRHVCcEIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhbXBpb25zL0NoYW1waW9uTGlzdC50c3g/NGQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0U2VsZWN0cyB9IGZyb20gJ0B1dGlscy9jbGllbnQvZ2V0VGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuaW50ZXJmYWNlIExpc3RUeXBlIHtcclxuICBlbmc6IHN0cmluZztcclxuICBrb3I6IHN0cmluZztcclxuICB0YWdzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbXBpb25MaXN0KHsgZGF0YSB9OiBhbnkpIHtcclxuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZTxMaXN0VHlwZVtdPihbXSk7XHJcbiAgY29uc3QgW2xpc3RTZWxlY3QsIHNldExpc3RTZWxlY3RdID0gdXNlU3RhdGU8c3RyaW5nPignYWxsJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBzb3J0ID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcclxuICAgICAgc29ydC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgX2xpc3QgPSBzb3J0Lm1hcCgoYzogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGVuZzogYy5pZCxcclxuICAgICAgICAgIGtvcjogYy5uYW1lLFxyXG4gICAgICAgICAgdGFnczogYy50YWdzLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMaXN0KF9saXN0KTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItcmVkLTUwMCB3LVszMiVdIGgtWzUwcmVtXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBoLTEyIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJiIGZsZXggaXRlbXMtY2VudGVyIGgtMTIgbWwtMSBzcGFjZS14LTIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgIHtsaXN0U2VsZWN0cy5tYXAoKGl0ZW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW1zLmVuZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmVuZyAhPT0gbGlzdFNlbGVjdCkgc2V0TGlzdFNlbGVjdChpdGVtcy5lbmcpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ2gtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zLmVuZyA9PT0gbGlzdFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgID8gJ3RleHQtbWFpbi01MDAgZm9udC1ib2xkIGJvcmRlci1iLTIgYm9yZGVyLW1haW4tNTAwIG10LTEnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtcy5rb3J9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibGlzdFNlbGVjdHMiLCJjbGFzc05hbWVzIiwiQ2hhbXBpb25MaXN0IiwiZGF0YSIsImxpc3QiLCJzZXRMaXN0IiwibGlzdFNlbGVjdCIsInNldExpc3RTZWxlY3QiLCJzb3J0IiwiT2JqZWN0IiwidmFsdWVzIiwiYSIsImIiLCJuYW1lIiwiX2xpc3QiLCJtYXAiLCJjIiwiZW5nIiwiaWQiLCJrb3IiLCJ0YWdzIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJpdGVtcyIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/champions/ChampionList.tsx\n");

/***/ })

});