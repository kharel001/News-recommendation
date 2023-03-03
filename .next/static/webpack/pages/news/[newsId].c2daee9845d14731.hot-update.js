"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[newsId]",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.module.scss */ \"./styles/header.module.scss\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ \"./node_modules/@mui/icons-material/Search.js\");\n/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ \"./node_modules/@mui/icons-material/AccountCircle.js\");\n/* harmony import */ var _CategoriesBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoriesBox */ \"./pages/CategoriesBox.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [focus, setFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const focusHandler = (value)=>{\n        setFocus(value);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainHeaderContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainHeader),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                cursor: \"pointer\"\n                            },\n                            onClick: ()=>router.push(\"/\"),\n                            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerLogo),\n                            children: \"News Recommend\"\n                        }, void 0, false, {\n                            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat((_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().headerSearchContainer), \" \").concat(focus ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().focusheaderSearchContainer) : \"\", \" \"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    onFocus: ()=>focusHandler(true),\n                                    onBlur: ()=>focusHandler(false),\n                                    type: \"text\",\n                                    className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().searchText),\n                                    placeholder: \"Search for news\"\n                                }, void 0, false, {\n                                    fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userContainer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onClick: ()=>router.push(\"/register\"),\n                                style: {\n                                    fontSize: 30,\n                                    color: \"#5f6368\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mobileheaderSearchContainer), \" \").concat(focus ? (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().focusheaderSearchContainer) : \"\", \" \"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onFocus: ()=>focusHandler(true),\n                            onBlur: ()=>focusHandler(false),\n                            type: \"text\",\n                            className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().searchText),\n                            placeholder: \"Search for news\"\n                        }, void 0, false, {\n                            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoriesBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shovanraj/Desktop/news/pages/Header.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"rbfQyxHnKAFw7ueL6ggGsrddZDI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDVTtBQUNHO0FBQ2M7QUFDdEI7QUFDTDtBQUV2QyxNQUFNTyxTQUFTLElBQU07O0lBRWpCLE1BQU0sQ0FBRUMsT0FBT0MsU0FBVSxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDLE1BQU1TLGVBQWUsQ0FBQ0MsUUFBVTtRQUM1QkYsU0FBU0U7SUFDYjtJQUVBLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUl4QixxQkFDSTtrQkFDQSw0RUFBQ087WUFBSUMsV0FBV1osdUZBQTBCOzs4QkFDMUMsOERBQUNXO29CQUFJQyxXQUFXWiw4RUFBaUI7O3NDQUNqQyw4REFBQ1c7NEJBQUlJLE9BQU87Z0NBQUNDLFFBQU87NEJBQVM7NEJBQUdDLFNBQVMsSUFBSVAsT0FBT1EsSUFBSSxDQUFDOzRCQUFNTixXQUFXWiw4RUFBaUI7c0NBQUU7Ozs7OztzQ0FDN0YsOERBQUNXOzRCQUFJQyxXQUFXLEdBQW1DTixPQUFoQ04seUZBQTRCLEVBQUMsS0FBOEMsT0FBM0NNLFFBQU1OLDhGQUFpQyxHQUFDLEVBQUUsRUFBQzs7OENBQzFGLDhEQUFDQyxrRUFBVUE7Ozs7OzhDQUNYLDhEQUFDcUI7b0NBQU9DLFNBQVMsSUFBSWYsYUFBYSxJQUFJO29DQUFHZ0IsUUFBUSxJQUFJaEIsYUFBYSxLQUFLO29DQUFHaUIsTUFBSztvQ0FBT2IsV0FBV1osOEVBQWlCO29DQUFFMkIsYUFBWTs7Ozs7Ozs7Ozs7O3NDQUVwSSw4REFBQ2hCOzRCQUFJQyxXQUFXWixpRkFBb0I7c0NBQ2hDLDRFQUFDRSx5RUFBaUJBO2dDQUFDZSxTQUFTLElBQUlQLE9BQU9RLElBQUksQ0FBQztnQ0FBY0gsT0FBTztvQ0FBQ2MsVUFBUztvQ0FBSUMsT0FBTTtnQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR2xHLDhEQUFDbkI7b0JBQUlDLFdBQVcsR0FBeUNOLE9BQXRDTiwrRkFBa0MsRUFBQyxLQUE4QyxPQUEzQ00sUUFBTU4sOEZBQWlDLEdBQUMsRUFBRSxFQUFDOztzQ0FDaEcsOERBQUNDLGtFQUFVQTs7Ozs7c0NBQ1gsOERBQUNxQjs0QkFBT0MsU0FBUyxJQUFJZixhQUFhLElBQUk7NEJBQUdnQixRQUFRLElBQUloQixhQUFhLEtBQUs7NEJBQUdpQixNQUFLOzRCQUFPYixXQUFXWiw4RUFBaUI7NEJBQUUyQixhQUFZOzs7Ozs7Ozs7Ozs7OEJBRXRJLDhEQUFDeEIsc0RBQWFBOzs7Ozs7Ozs7Ozs7QUFJcEI7R0FqQ01FOztRQVFhRCxrREFBU0E7OztLQVJ0QkM7QUFtQ04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSGVhZGVyLmpzPzJjZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9oZWFkZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCBDYXRlZ29yaWVzQm94IGZyb20gJy4vQ2F0ZWdvcmllc0JveCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgWyBmb2N1cywgc2V0Rm9jdXMgXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgZm9jdXNIYW5kbGVyID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEZvY3VzKHZhbHVlKVxuICAgIH0gXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkhlYWRlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy8nKX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTG9nb30+TmV3cyBSZWNvbW1lbmQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJTZWFyY2hDb250YWluZXJ9ICR7Zm9jdXM/c3R5bGVzLmZvY3VzaGVhZGVyU2VhcmNoQ29udGFpbmVyOlwiXCJ9IGB9PlxuICAgICAgICAgICAgPFNlYXJjaEljb24vPlxuICAgICAgICAgICAgPGlucHV0ICBvbkZvY3VzPXsoKT0+Zm9jdXNIYW5kbGVyKHRydWUpfSBvbkJsdXI9eygpPT5mb2N1c0hhbmRsZXIoZmFsc2UpfSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRleHR9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBuZXdzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24gb25DbGljaz17KCk9PnJvdXRlci5wdXNoKCcvcmVnaXN0ZXInKX0gc3R5bGU9e3tmb250U2l6ZTozMCwgY29sb3I6XCIjNWY2MzY4XCJ9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vYmlsZWhlYWRlclNlYXJjaENvbnRhaW5lcn0gJHtmb2N1cz9zdHlsZXMuZm9jdXNoZWFkZXJTZWFyY2hDb250YWluZXI6XCJcIn0gYH0+XG4gICAgICAgICAgICA8U2VhcmNoSWNvbi8+XG4gICAgICAgICAgICA8aW5wdXQgIG9uRm9jdXM9eygpPT5mb2N1c0hhbmRsZXIodHJ1ZSl9IG9uQmx1cj17KCk9PmZvY3VzSGFuZGxlcihmYWxzZSl9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGV4dH0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIG5ld3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxDYXRlZ29yaWVzQm94Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNlYXJjaEljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkNhdGVnb3JpZXNCb3giLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJmb2N1cyIsInNldEZvY3VzIiwiZm9jdXNIYW5kbGVyIiwidmFsdWUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluSGVhZGVyQ29udGFpbmVyIiwibWFpbkhlYWRlciIsInN0eWxlIiwiY3Vyc29yIiwib25DbGljayIsInB1c2giLCJoZWFkZXJMb2dvIiwiaGVhZGVyU2VhcmNoQ29udGFpbmVyIiwiZm9jdXNoZWFkZXJTZWFyY2hDb250YWluZXIiLCJpbnB1dCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ0eXBlIiwic2VhcmNoVGV4dCIsInBsYWNlaG9sZGVyIiwidXNlckNvbnRhaW5lciIsImZvbnRTaXplIiwiY29sb3IiLCJtb2JpbGVoZWFkZXJTZWFyY2hDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Header.js\n"));

/***/ })

});