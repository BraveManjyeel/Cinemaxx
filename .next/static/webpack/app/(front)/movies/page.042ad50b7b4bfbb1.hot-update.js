"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(front)/movies/page",{

/***/ "(app-pages-browser)/./src/configs/site.ts":
/*!*****************************!*\
  !*** ./src/configs/site.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   siteConfig: function() { return /* binding */ siteConfig; }\n/* harmony export */ });\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/icons */ \"(app-pages-browser)/./src/components/icons.tsx\");\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/env.mjs */ \"(app-pages-browser)/./src/env.mjs\");\n// import type { FooterItem, MainNavItem } from \"@/types\"\n//\n// import { productCategories } from \"@/config/products\"\n// import { slugify } from \"@/lib/utils\"\n\n\nconst siteConfig = {\n    name: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_SITE_NAME,\n    author: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_SITE_NAME,\n    slogan: \"Watch TV Shows & Movies Online.\",\n    description: \"Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.\",\n    keywords: [\n        \"watch movies\",\n        \"movies online\",\n        \"watch TV\",\n        \"TV online\",\n        \"TV shows online\",\n        \"watch TV shows\",\n        \"stream movies\",\n        \"stream tv\",\n        \"instant streaming\",\n        \"watch online\",\n        \"movies\",\n        \"watch TV online\",\n        \"no download\",\n        \"full length movies\",\n        _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_SITE_NAME\n    ],\n    url: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_APP_URL,\n    ogImage: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_APP_URL, \"/images/hero.jpg\"),\n    links: {\n        twitter: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_TWITTER),\n        github: \"\",\n        githubAccount: \"\"\n    },\n    socialLinks: [\n        {\n            title: \"Facebook\",\n            href: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_FACEBOOK),\n            icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.facebook\n        },\n        {\n            title: \"Instagram\",\n            href: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_INSTAGRAM),\n            icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.instagram\n        },\n        {\n            title: \"Twitter\",\n            href: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_TWITTER),\n            icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.twitter\n        },\n        {\n            title: \"Youtube\",\n            href: \"\".concat(_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NEXT_PUBLIC_YOUTUBE),\n            icon: _components_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.youtube\n        }\n    ],\n    footerItems: [],\n    mainNav: [\n        {\n            title: \"Home\",\n            href: \"/home\"\n        },\n        {\n            title: \"TV Shows\",\n            href: \"/tv-shows\"\n        },\n        {\n            title: \"Movies\",\n            href: \"/movies\"\n        },\n        {\n            title: \"New & Popular\",\n            href: \"/new-and-popular\"\n        },\n        // {\n        //   title: \"My List\",\n        //   href: \"/my-list\",\n        //   // icon: Icons.list,\n        // },\n        {\n            title: \"Notifications\"\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25maWdzL3NpdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseURBQXlEO0FBQ3pELEVBQUU7QUFDRix3REFBd0Q7QUFDeEQsd0NBQXdDO0FBRUc7QUFDWDtBQUl6QixNQUFNRSxhQUFhO0lBQ3hCQyxNQUFNRix5Q0FBR0EsQ0FBQ0cscUJBQXFCO0lBQy9CQyxRQUFRSix5Q0FBR0EsQ0FBQ0cscUJBQXFCO0lBQ2pDRSxRQUFRO0lBQ1JDLGFBQ0U7SUFDRkMsVUFBVTtRQUNSO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQVAseUNBQUdBLENBQUNHLHFCQUFxQjtLQUMxQjtJQUNESyxLQUFLUix5Q0FBR0EsQ0FBQ1MsbUJBQW1CO0lBQzVCQyxTQUFTLEdBQTJCLE9BQXhCVix5Q0FBR0EsQ0FBQ1MsbUJBQW1CLEVBQUM7SUFDcENFLE9BQU87UUFDTEMsU0FBUyxHQUEyQixPQUF4QloseUNBQUdBLENBQUNhLG1CQUFtQjtRQUNuQ0MsUUFBUTtRQUNSQyxlQUFlO0lBQ2pCO0lBQ0FDLGFBQWE7UUFDWDtZQUNFQyxPQUFPO1lBQ1BDLE1BQU0sR0FBNEIsT0FBekJsQix5Q0FBR0EsQ0FBQ21CLG9CQUFvQjtZQUNqQ0MsTUFBTXJCLG9EQUFLQSxDQUFDc0IsUUFBUTtRQUN0QjtRQUNBO1lBQ0VKLE9BQU87WUFDUEMsTUFBTSxHQUE2QixPQUExQmxCLHlDQUFHQSxDQUFDc0IscUJBQXFCO1lBQ2xDRixNQUFNckIsb0RBQUtBLENBQUN3QixTQUFTO1FBQ3ZCO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxNQUFNLEdBQTJCLE9BQXhCbEIseUNBQUdBLENBQUNhLG1CQUFtQjtZQUNoQ08sTUFBTXJCLG9EQUFLQSxDQUFDYSxPQUFPO1FBQ3JCO1FBQ0E7WUFDRUssT0FBTztZQUNQQyxNQUFNLEdBQTJCLE9BQXhCbEIseUNBQUdBLENBQUN3QixtQkFBbUI7WUFDaENKLE1BQU1yQixvREFBS0EsQ0FBQzBCLE9BQU87UUFDckI7S0FDRDtJQUNEQyxhQUFhLEVBYVo7SUFDREMsU0FBUztRQUNQO1lBQ0VWLE9BQU87WUFDUEMsTUFBTTtRQUVSO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBRVI7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFFUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUVSO1FBQ0EsSUFBSTtRQUNKLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLEtBQUs7UUFDTDtZQUNFRCxPQUFPO1FBR1Q7S0FDRDtBQUNILEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbmZpZ3Mvc2l0ZS50cz82NDNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB0eXBlIHsgRm9vdGVySXRlbSwgTWFpbk5hdkl0ZW0gfSBmcm9tIFwiQC90eXBlc1wiXHJcbi8vXHJcbi8vIGltcG9ydCB7IHByb2R1Y3RDYXRlZ29yaWVzIH0gZnJvbSBcIkAvY29uZmlnL3Byb2R1Y3RzXCJcclxuLy8gaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gXCJAL2xpYi91dGlsc1wiXHJcblxyXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gJ0AvY29tcG9uZW50cy9pY29ucyc7XHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ0AvZW52Lm1qcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTaXRlQ29uZmlnID0gdHlwZW9mIHNpdGVDb25maWc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZUNvbmZpZyA9IHtcclxuICBuYW1lOiBlbnYuTkVYVF9QVUJMSUNfU0lURV9OQU1FLFxyXG4gIGF1dGhvcjogZW52Lk5FWFRfUFVCTElDX1NJVEVfTkFNRSxcclxuICBzbG9nYW46ICdXYXRjaCBUViBTaG93cyAmIE1vdmllcyBPbmxpbmUuJyxcclxuICBkZXNjcmlwdGlvbjpcclxuICAgICdXYXRjaCBtb3ZpZXMgJiBUViBzaG93cyBvbmxpbmUgb3Igc3RyZWFtIHJpZ2h0IHRvIHlvdXIgc21hcnQgVFYsIGdhbWUgY29uc29sZSwgUEMsIE1hYywgbW9iaWxlLCB0YWJsZXQgYW5kIG1vcmUuJyxcclxuICBrZXl3b3JkczogW1xyXG4gICAgJ3dhdGNoIG1vdmllcycsXHJcbiAgICAnbW92aWVzIG9ubGluZScsXHJcbiAgICAnd2F0Y2ggVFYnLFxyXG4gICAgJ1RWIG9ubGluZScsXHJcbiAgICAnVFYgc2hvd3Mgb25saW5lJyxcclxuICAgICd3YXRjaCBUViBzaG93cycsXHJcbiAgICAnc3RyZWFtIG1vdmllcycsXHJcbiAgICAnc3RyZWFtIHR2JyxcclxuICAgICdpbnN0YW50IHN0cmVhbWluZycsXHJcbiAgICAnd2F0Y2ggb25saW5lJyxcclxuICAgICdtb3ZpZXMnLFxyXG4gICAgJ3dhdGNoIFRWIG9ubGluZScsXHJcbiAgICAnbm8gZG93bmxvYWQnLFxyXG4gICAgJ2Z1bGwgbGVuZ3RoIG1vdmllcycsXHJcbiAgICBlbnYuTkVYVF9QVUJMSUNfU0lURV9OQU1FLFxyXG4gIF0sXHJcbiAgdXJsOiBlbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCxcclxuICBvZ0ltYWdlOiBgJHtlbnYuTkVYVF9QVUJMSUNfQVBQX1VSTH0vaW1hZ2VzL2hlcm8uanBnYCxcclxuICBsaW5rczoge1xyXG4gICAgdHdpdHRlcjogYCR7ZW52Lk5FWFRfUFVCTElDX1RXSVRURVJ9YCxcclxuICAgIGdpdGh1YjogJycsXHJcbiAgICBnaXRodWJBY2NvdW50OiAnJyxcclxuICB9LFxyXG4gIHNvY2lhbExpbmtzOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnRmFjZWJvb2snLFxyXG4gICAgICBocmVmOiBgJHtlbnYuTkVYVF9QVUJMSUNfRkFDRUJPT0t9YCxcclxuICAgICAgaWNvbjogSWNvbnMuZmFjZWJvb2ssXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0luc3RhZ3JhbScsXHJcbiAgICAgIGhyZWY6IGAke2Vudi5ORVhUX1BVQkxJQ19JTlNUQUdSQU19YCxcclxuICAgICAgaWNvbjogSWNvbnMuaW5zdGFncmFtLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdUd2l0dGVyJyxcclxuICAgICAgaHJlZjogYCR7ZW52Lk5FWFRfUFVCTElDX1RXSVRURVJ9YCxcclxuICAgICAgaWNvbjogSWNvbnMudHdpdHRlcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnWW91dHViZScsXHJcbiAgICAgIGhyZWY6IGAke2Vudi5ORVhUX1BVQkxJQ19ZT1VUVUJFfWAsXHJcbiAgICAgIGljb246IEljb25zLnlvdXR1YmUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZm9vdGVySXRlbXM6IFtcclxuICAgIC8veyB0aXRsZTogJ0F1ZGlvIERlc2NyaXB0aW9uJywgaHJlZjogJy8nIH0sXHJcbiAgICAvL3sgdGl0bGU6ICdIZWxwIENlbnRlcicsIGhyZWY6ICcvJyB9LFxyXG4gICAgLy97IHRpdGxlOiAnR2lmdCBDYXJkcycsIGhyZWY6ICcvJyB9LFxyXG4gICAgLy97IHRpdGxlOiAnTWVkaWEgQ2VudGVyJywgaHJlZjogJy8nIH0sXHJcbiAgICAvL3sgdGl0bGU6ICdJbnZlc3RvciBSZWxhdGlvbnMnLCBocmVmOiAnLycgfSxcclxuICAgIC8veyB0aXRsZTogJ0pvYnMnLCBocmVmOiAnLycgfSxcclxuICAgIC8veyB0aXRsZTogJ1Rlcm1zIG9mIFVzZScsIGhyZWY6ICcvdGVybXMtb2YtdXNlJyB9LFxyXG4gICAgLy97IHRpdGxlOiAnUHJpdmFjeScsIGhyZWY6ICcvJyB9LFxyXG4gICAgLy97IHRpdGxlOiAnTGVnYWwgTm90aWNlcycsIGhyZWY6ICcvJyB9LFxyXG4gICAgLy97IHRpdGxlOiAnQ29va2llIFByZWZlcmVuY2VzJywgaHJlZjogJy8nIH0sXHJcbiAgICAvL3sgdGl0bGU6ICdDb3Jwb3JhdGUgSW5mb3JtYXRpb24nLCBocmVmOiAnLycgfSxcclxuICAgIC8veyB0aXRsZTogJ0NvbnRhY3QgVXMnLCBocmVmOiAnLycgfSxcclxuICBdLFxyXG4gIG1haW5OYXY6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdIb21lJyxcclxuICAgICAgaHJlZjogJy9ob21lJyxcclxuICAgICAgLy8gaWNvbjogSWNvbnMucGxheSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnVFYgU2hvd3MnLFxyXG4gICAgICBocmVmOiAnL3R2LXNob3dzJyxcclxuICAgICAgLy8gaWNvbjogSWNvbnMudHZTaG93LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdNb3ZpZXMnLFxyXG4gICAgICBocmVmOiAnL21vdmllcycsXHJcbiAgICAgIC8vIGljb246IEljb25zLm1vdmllLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdOZXcgJiBQb3B1bGFyJyxcclxuICAgICAgaHJlZjogJy9uZXctYW5kLXBvcHVsYXInLFxyXG4gICAgICAvLyBpY29uOiBJY29ucy50cmVuZGluZ1VwLFxyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGl0bGU6IFwiTXkgTGlzdFwiLFxyXG4gICAgLy8gICBocmVmOiBcIi9teS1saXN0XCIsXHJcbiAgICAvLyAgIC8vIGljb246IEljb25zLmxpc3QsXHJcbiAgICAvLyB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ05vdGlmaWNhdGlvbnMnLFxyXG4gICAgICAvLyBvbkNsaWNrOiAoKSA9PiBhbGVydChcIvCfm7kgRG8gYSBraWNrZmxpcFwiKSxcclxuICAgICAgLy8gaWNvbjogSWNvbnMuYmVsbCxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuIl0sIm5hbWVzIjpbIkljb25zIiwiZW52Iiwic2l0ZUNvbmZpZyIsIm5hbWUiLCJORVhUX1BVQkxJQ19TSVRFX05BTUUiLCJhdXRob3IiLCJzbG9nYW4iLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidXJsIiwiTkVYVF9QVUJMSUNfQVBQX1VSTCIsIm9nSW1hZ2UiLCJsaW5rcyIsInR3aXR0ZXIiLCJORVhUX1BVQkxJQ19UV0lUVEVSIiwiZ2l0aHViIiwiZ2l0aHViQWNjb3VudCIsInNvY2lhbExpbmtzIiwidGl0bGUiLCJocmVmIiwiTkVYVF9QVUJMSUNfRkFDRUJPT0siLCJpY29uIiwiZmFjZWJvb2siLCJORVhUX1BVQkxJQ19JTlNUQUdSQU0iLCJpbnN0YWdyYW0iLCJORVhUX1BVQkxJQ19ZT1VUVUJFIiwieW91dHViZSIsImZvb3Rlckl0ZW1zIiwibWFpbk5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/configs/site.ts\n"));

/***/ })

});