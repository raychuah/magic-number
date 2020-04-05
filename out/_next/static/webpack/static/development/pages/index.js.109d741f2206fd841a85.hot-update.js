webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card */ "./components/card.jsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/button */ "./components/button.jsx");
var _this = undefined,
    _jsxFileName = "D:\\Workspace\\magicnumber\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Index = function Index() {
  var cardNum = {
    card1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
    card2: [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30],
    card3: [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30],
    card4: [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30],
    card5: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      ans = _useState2[0],
      setAns = _useState2[1];

  var restart = function restart() {
    setStep(0);
    setAns(0);
  };

  var next = function next() {
    setStep(step + 1);
  };

  var yesClick = function yesClick() {
    next(); // console.log("yes");

    if (step > 0 && step <= Object.keys(cardNum).length) {
      console.log("inside");
      setAns(ans + cardNum["card".concat(step)][0]);
    }

    console.log(step);
    console.log(ans);
  };

  var noClick = function noClick() {
    next();
    console.log("no");
  };

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "flex-center-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_components_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    step: step,
    card: cardNum,
    ans: ans,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("section", {
    className: "flex-center-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, step === 0 ? __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClick: next,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 23
    }
  }, "Next") : null, step > 0 && step <= Object.keys(cardNum).length ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Is your number on this card?") : null), __jsx("section", {
    className: "flex-center-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, step > 0 && step <= Object.keys(cardNum).length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "red",
    handleClick: yesClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Yes"), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "green",
    handleClick: noClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "No")) : null, step === 6 ? __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "green",
    handleClick: restart,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Restart") : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.109d741f2206fd841a85.hot-update.js.map