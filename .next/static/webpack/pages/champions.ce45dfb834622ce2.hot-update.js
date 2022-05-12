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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChampionList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_client_getText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/client/getText */ \"./utils/client/getText.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ChampionList(param) {\n    var data = param.data;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), list = ref[0], setList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\"), listSelect = ref1[0], setListSelect = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            var sort = Object.values(data);\n            sort.sort(function(a, b) {\n                if (a.name > b.name) {\n                    return 1;\n                } else {\n                    return -1;\n                }\n            });\n            var _list = sort.map(function(c) {\n                return {\n                    eng: c.id,\n                    kor: c.name,\n                    tags: c.tags\n                };\n            });\n            setList(_list);\n        }\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-2 border-red-500 w-[32%] h-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-between w-full bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \" flex items-center h-12 ml-4 space-x-2 text-sm text-gray-600\",\n                        children: _utils_client_getText__WEBPACK_IMPORTED_MODULE_2__.listSelects.map(function(items) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: function() {\n                                    if (items.eng !== listSelect) setListSelect(items.eng);\n                                },\n                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"h-full flex items-center\", items.eng === listSelect ? \"text-main-500 font-bold border-b-2 border-main-500 mt-1\" : \"cursor-pointer\"),\n                                children: items.kor\n                            }, items.eng, false, {\n                                fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"gap-y-4 grid grid-cols-6 px-4 py-6 bg-gray-200\",\n                    children: list.map(function(champion) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-86 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-[86px] h-[86px]\",\n                                src: \"https://via.placeholder.com/86\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, _this)\n                        }, champion.eng, false, {\n                            fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\project\\\\clone\\\\opgg\\\\components\\\\champions\\\\ChampionList.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n_s(ChampionList, \"n2bsreYzrPQXNNJMlKbw4zhc4Kg=\");\n_c = ChampionList;\nvar _c;\n$RefreshReg$(_c, \"ChampionList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYW1waW9ucy9DaGFtcGlvbkxpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDRDtBQUNtQjtBQUNoQjs7QUFTckIsU0FBU0ksWUFBWSxDQUFDLEtBQWEsRUFBRTtRQUFmLElBQU0sR0FBTixLQUFhLENBQVhDLElBQUk7OztJQUN6QyxJQUF3QkosR0FBd0IsR0FBeEJBLCtDQUFRLENBQWEsRUFBRSxDQUFDLEVBYmxELElBYWEsR0FBYUEsR0FBd0IsR0FBckMsRUFiYixPQWFzQixHQUFJQSxHQUF3QixHQUE1QjtJQUNwQixJQUFvQ0EsSUFBdUIsR0FBdkJBLCtDQUFRLENBQVMsS0FBSyxDQUFDLEVBZDdELFVBY21CLEdBQW1CQSxJQUF1QixHQUExQyxFQWRuQixhQWNrQyxHQUFJQSxJQUF1QixHQUEzQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSUssSUFBSSxFQUFFO1lBQ1IsSUFBTUssSUFBSSxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDO1lBQ2hDSyxJQUFJLENBQUNBLElBQUksQ0FBQyxTQUFDRyxDQUFNLEVBQUVDLENBQU0sRUFBSztnQkFDNUIsSUFBSUQsQ0FBQyxDQUFDRSxJQUFJLEdBQUdELENBQUMsQ0FBQ0MsSUFBSSxFQUFFO29CQUNuQixPQUFPLENBQUMsQ0FBQztpQkFDVixNQUFNO29CQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFNQyxLQUFLLEdBQUdOLElBQUksQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLENBQU0sRUFBSztnQkFDakMsT0FBTztvQkFDTEMsR0FBRyxFQUFFRCxDQUFDLENBQUNFLEVBQUU7b0JBQ1RDLEdBQUcsRUFBRUgsQ0FBQyxDQUFDSCxJQUFJO29CQUNYTyxJQUFJLEVBQUVKLENBQUMsQ0FBQ0ksSUFBSTtpQkFDYixDQUFDO2FBQ0gsQ0FBQztZQUNGZixPQUFPLENBQUNTLEtBQUssQ0FBQyxDQUFDO1NBQ2hCO0tBQ0YsRUFBRTtRQUFDWCxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgscUJBQ0UsOERBQUNrQixLQUFHO1FBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7a0JBQ3JELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywrQ0FBK0M7OzhCQUM1RCw4REFBQ0MsS0FBRzs4QkFDRiw0RUFBQ0MsSUFBRTt3QkFBQ0YsU0FBUyxFQUFDLDhEQUE4RDtrQ0FDekV0QixrRUFBZSxDQUFDLFNBQUN5QixLQUFLO2lEQUNyQiw4REFBQ0MsSUFBRTtnQ0FFREMsT0FBTyxFQUFFLFdBQU07b0NBQ2IsSUFBSUYsS0FBSyxDQUFDUixHQUFHLEtBQUtYLFVBQVUsRUFBRUMsYUFBYSxDQUFDa0IsS0FBSyxDQUFDUixHQUFHLENBQUMsQ0FBQztpQ0FDeEQ7Z0NBQ0RLLFNBQVMsRUFBRXJCLGlEQUFVLENBQ25CLDBCQUEwQixFQUMxQndCLEtBQUssQ0FBQ1IsR0FBRyxLQUFLWCxVQUFVLEdBQ3BCLHlEQUF5RCxHQUN6RCxnQkFBZ0IsQ0FDckI7MENBRUFtQixLQUFLLENBQUNOLEdBQUc7K0JBWExNLEtBQUssQ0FBQ1IsR0FBRzs7OztxQ0FZWDt5QkFDTixDQUFDOzs7Ozs0QkFDQzs7Ozs7d0JBQ0Q7OEJBQ04sOERBQUNJLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxnREFBZ0Q7OEJBQzVEbEIsSUFBSSxDQUFDVyxHQUFHLENBQUMsU0FBQ2EsUUFBa0I7NkNBQzNCLDhEQUFDUCxLQUFHOzRCQUFvQkMsU0FBUyxFQUFDLFdBQVc7c0NBQzNDLDRFQUFDTyxLQUFHO2dDQUNGUCxTQUFTLEVBQUMsbUJBQW1CO2dDQUM3QlEsR0FBRyxFQUFFLGdDQUFnQzs7Ozs7cUNBQ3JDOzJCQUpNRixRQUFRLENBQUNYLEdBQUc7Ozs7aUNBS2hCO3FCQUNQLENBQUM7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBN0R1QmYsWUFBWTtBQUFaQSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhbXBpb25zL0NoYW1waW9uTGlzdC50c3g/NGQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0U2VsZWN0cyB9IGZyb20gJ0B1dGlscy9jbGllbnQvZ2V0VGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ2hhbXBpb25zIGZyb20gJ3BhZ2VzL2NoYW1waW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdFR5cGUge1xyXG4gIGVuZzogc3RyaW5nO1xyXG4gIGtvcjogc3RyaW5nO1xyXG4gIHRhZ3M6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFtcGlvbkxpc3QoeyBkYXRhIH06IGFueSkge1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlPExpc3RUeXBlW10+KFtdKTtcclxuICBjb25zdCBbbGlzdFNlbGVjdCwgc2V0TGlzdFNlbGVjdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdhbGwnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IHNvcnQgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gICAgICBzb3J0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGEubmFtZSA+IGIubmFtZSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBfbGlzdCA9IHNvcnQubWFwKChjOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZW5nOiBjLmlkLFxyXG4gICAgICAgICAga29yOiBjLm5hbWUsXHJcbiAgICAgICAgICB0YWdzOiBjLnRhZ3MsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldExpc3QoX2xpc3QpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1yZWQtNTAwIHctWzMyJV0gaC1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBtbC00IHNwYWNlLXgtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAge2xpc3RTZWxlY3RzLm1hcCgoaXRlbXMpID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbXMuZW5nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbXMuZW5nICE9PSBsaXN0U2VsZWN0KSBzZXRMaXN0U2VsZWN0KGl0ZW1zLmVuZyk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAnaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgaXRlbXMuZW5nID09PSBsaXN0U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1tYWluLTUwMCBmb250LWJvbGQgYm9yZGVyLWItMiBib3JkZXItbWFpbi01MDAgbXQtMSdcclxuICAgICAgICAgICAgICAgICAgICA6ICdjdXJzb3ItcG9pbnRlcidcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLmtvcn1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAteS00IGdyaWQgZ3JpZC1jb2xzLTYgcHgtNCBweS02IGJnLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGNoYW1waW9uOiBMaXN0VHlwZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17Y2hhbXBpb24uZW5nfSBjbGFzc05hbWU9XCJ3LTg2IGZsZXhcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4NnB4XSBoLVs4NnB4XVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9eydodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODYnfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsaXN0U2VsZWN0cyIsImNsYXNzTmFtZXMiLCJDaGFtcGlvbkxpc3QiLCJkYXRhIiwibGlzdCIsInNldExpc3QiLCJsaXN0U2VsZWN0Iiwic2V0TGlzdFNlbGVjdCIsInNvcnQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhIiwiYiIsIm5hbWUiLCJfbGlzdCIsIm1hcCIsImMiLCJlbmciLCJpZCIsImtvciIsInRhZ3MiLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJ1bCIsIml0ZW1zIiwibGkiLCJvbkNsaWNrIiwiY2hhbXBpb24iLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/champions/ChampionList.tsx\n");

/***/ })

});