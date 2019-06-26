webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Styles */ "./styles/Styles.js");







var _jsxFileName = "/home/qashwa/NEXTJS/hackernews-nextjs/pages/index.js";

 // const list = [
//   {
//     title: "React",
//     url: "https://facebook.github.io/react/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0
//   },
//   {
//     title: "Redux",
//     url: "https://github.com/reactjs/redux",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1
//   }
// ];

var DEFAULT_QUERY = 'redux';
var PATH_BASE = 'https://hn.algolia.com/api/v1';
var PATH_SEARCH = '/search';
var PARAM_SEARCH = 'query=';
var url = "".concat(PATH_BASE).concat(PATH_SEARCH, "?").concat(PARAM_SEARCH).concat(DEFAULT_QUERY);

var isSearched = function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };
    _this.setSearchTopStories = _this.setSearchTopStories.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.fetchSearchTopStories = _this.fetchSearchTopStories.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onSearchChange = _this.onSearchChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.onDismiss = _this.onDismiss.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "setSearchTopStories",
    value: function setSearchTopStories(result) {
      this.setState({
        result: result
      });
    }
  }, {
    key: "fetchSearchTopStories",
    value: function fetchSearchTopStories(searchTerm) {
      var _this2 = this;

      fetch("".concat(PATH_BASE).concat(PATH_SEARCH, "?").concat(PARAM_SEARCH).concat(searchTerm)).then(function (response) {
        return response.json();
      }).then(function (result) {
        return _this2.setSearchTopStories(result);
      }).catch(function (e) {
        return e;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchTerm = this.state.searchTerm;
      this.fetchSearchTopStories(searchTerm);
    }
  }, {
    key: "onSearchChange",
    value: function onSearchChange(event) {
      this.setState({
        searchTerm: event.target.value
      });
    }
  }, {
    key: "onDismiss",
    value: function onDismiss(id) {
      var isNotId = function isNotId(item) {
        return item.objectID !== id;
      };

      var updatedHits = this.state.result.hits.filter(isNotId);
      this.setState({
        // result: Object.assign({}, this.state.result, { hits: updatedHits })
        // above is the so;ution, but there is a simpler way in JavaScript ES6 and future JavaScript releases:
        result: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.result, {
          hits: updatedHits
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          searchTerm = _this$state.searchTerm,
          result = _this$state.result;

      if (!result) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "interactions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Search, {
        value: searchTerm,
        onChange: this.onSearchChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Search")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Table, {
        list: result.hits,
        pattern: searchTerm,
        onDismiss: this.onDismiss,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Search = function Search(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
    type: "text",
    value: value,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }));
};

var Table = function Table(_ref2) {
  var list = _ref2.list,
      pattern = _ref2.pattern,
      onDismiss = _ref2.onDismiss;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, list.filter(isSearched(pattern)).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      key: item.objectID,
      className: "table-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      style: {
        width: '40%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      style: {
        width: '30%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, item.author), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      style: {
        width: '10%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, item.num_comments), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      style: {
        width: '10%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, item.points), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      style: {
        width: '10%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Button, {
      onClick: function onClick() {
        return onDismiss(item.objectID);
      },
      className: "button-inline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Dismiss")));
  }));
};

var Button = function Button(_ref3) {
  var onClick = _ref3.onClick,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className,
      children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    onClick: onClick,
    className: className,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (App); // Next: Getting Real with an API

/***/ })

})
//# sourceMappingURL=index.js.51533f7a8abfecd97f49.hot-update.js.map