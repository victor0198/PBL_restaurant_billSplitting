module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ShareBill.js":
/*!****************************!*\
  !*** ./pages/ShareBill.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\DELLEN\\Desktop\\PBL\\with-ant-design-app\\pages\\ShareBill.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var QRCode = __webpack_require__(/*! qrcode.react */ "qrcode.react");

const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a;

const axios = __webpack_require__(/*! axios */ "axios");

const content = {
  marginTop: '100px'
};

const ShareBill = () => {
  const {
    0: QRCodeValue,
    1: setQRCV
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: peopleJoined,
    1: setpeopleJoined
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "qrcode",
    onClick: () => setpeopleJoined(peopleJoined + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(QRCode, {
    size: "150",
    level: "M",
    inputMode: "text",
    value: QRCodeValue,
    renderAs: "svg",
    bgColor: "#fff",
    fgColor: "#136",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), __jsx("h3", {
    style: {
      textAlign: "center",
      fontWeight: '600'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "People joined: ", peopleJoined));
};

/* harmony default export */ __webpack_exports__["default"] = (ShareBill);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popconfirm */ "antd/lib/popconfirm");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/slider */ "antd/lib/slider");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ "@ant-design/icons/lib/icons/UserOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/icons/QrcodeOutlined */ "@ant-design/icons/lib/icons/QrcodeOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons/BarsOutlined */ "@ant-design/icons/lib/icons/BarsOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/lib/icons/GlobalOutlined */ "@ant-design/icons/lib/icons/GlobalOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_lib_icons_MenuFoldOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MenuFoldOutlined */ "@ant-design/icons/lib/icons/MenuFoldOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_MenuFoldOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MenuFoldOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_lib_icons_MenuUnfoldOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MenuUnfoldOutlined */ "@ant-design/icons/lib/icons/MenuUnfoldOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_MenuUnfoldOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MenuUnfoldOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ShareBill__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ShareBill */ "./pages/ShareBill.js");











var _jsxFileName = "C:\\Users\\DELLEN\\Desktop\\PBL\\with-ant-design-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var QRCode = __webpack_require__(/*! qrcode.react */ "qrcode.react");

const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a;

const axios = __webpack_require__(/*! axios */ "axios");

const content = {
  marginTop: '100px'
};
function Home() {
  // axios.get('http://numbersapi.com/42')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error); 
  // })
  // .then(function () {
  //   // always executed
  // });
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    collapsed: true
  });
  const {
    0: splitBill,
    1: setSplit
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(false);
  const {
    0: QRCodeValue,
    1: setQRCV
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])("");
  const {
    0: peopleJoined,
    1: setpeopleJoined
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(0);
  const {
    0: bill,
    1: setBill
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])({
    bill: 100,
    yourBill: 100,
    yourTip: 0,
    yourTotal: 100,
    total: 100,
    excess: 0
  });
  const {
    0: othersPaid,
    1: setOthers
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(0);
  const {
    0: tip,
    1: setTip
  } = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])(0);

  const joinedSuccess = () => {
    setpeopleJoined(peopleJoined + 1);

    antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default.a.success('Mark Allen joined the bill.', 5);
  };

  const paidSuccess = () => {
    setOthers(othersPaid + 1);

    antd_lib_message__WEBPACK_IMPORTED_MODULE_9___default.a.success('Mark Allen payed $50.', 5);
  };

  const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);
  const [confirmLoading, setConfirmLoading] = react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setSplit(false);
      setpeopleJoined(0);
      setOthers(0);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(() => {
    if (!splitBill) {
      setBill(currentState => _objectSpread(_objectSpread({}, currentState), {}, {
        yourTip: Math.round(bill.bill * tip) / 100,
        yourTotal: Math.round((bill.bill + bill.bill / 100 * tip) * 100) / 100,
        total: Math.round((bill.bill + bill.bill / 100 * tip) * 100) / 100
      }));
    } else {
      setBill(currentState => _objectSpread(_objectSpread({}, currentState), {}, {
        yourBill: Math.round(bill.bill / (peopleJoined + 1) * 100) / 100,
        yourTip: Math.round(bill.bill / (peopleJoined + 1) / 100 * tip * 100) / 100,
        yourTotal: Math.round((bill.bill / (peopleJoined + 1) + bill.bill / (peopleJoined + 1) / 100 * tip) * 100) / 100,
        total: Math.round((bill.bill / (peopleJoined + 1) + bill.bill / (peopleJoined + 1) / 100 * tip + othersPaid * (bill.bill / (peopleJoined + 1))) * 100) / 100
      }));
    }
  }, [tip, splitBill, peopleJoined, othersPaid]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("nav", {
    style: {
      display: 'flex',
      height: "35px",
      backgroundColor: 'rgb(36, 33, 30)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "primary",
    onClick: () => setState({
      collapsed: !state.collapsed
    }),
    style: {
      height: '35px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(state.collapsed ? _ant_design_icons_lib_icons_MenuUnfoldOutlined__WEBPACK_IMPORTED_MODULE_8___default.a : _ant_design_icons_lib_icons_MenuFoldOutlined__WEBPACK_IMPORTED_MODULE_7___default.a)), __jsx("h2", {
    style: {
      width: '100%',
      paddingLeft: '20px',
      margin: '0',
      color: 'whitesmoke'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Payment")), __jsx("div", {
    style: {
      position: 'absolute',
      zIndex: '100'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: state.collapsed ? "menu_folded" : "menu_unfolded",
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: "inline",
    theme: "dark",
    inlineCollapsed: state.collapsed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
    key: "1",
    icon: __jsx(_ant_design_icons_lib_icons_GlobalOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        fontSize: "1.3rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 36
      }
    }),
    className: "menu_item_size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Map"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
    key: "2",
    icon: __jsx(_ant_design_icons_lib_icons_BarsOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: {
        fontSize: "1.3rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 36
      }
    }),
    className: "menu_item_size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "List"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
    key: "3",
    icon: __jsx(_ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        fontSize: "1.3rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 36
      }
    }),
    className: "menu_item_size",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "QR"), __jsx(SubMenu, {
    icon: __jsx(_ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        fontSize: "1.3rem"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 26
      }
    }),
    title: "Account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
    key: "sub1",
    onClick: () => {
      console.log('Reg');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "Register"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_10___default.a.Item, {
    key: "sub2",
    onClick: () => {
      console.log('Log');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Log in")))), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "content_bill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Bill:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "$ ", bill.bill), splitBill && __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Your bill:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, "$", bill.yourBill)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, splitBill ? "Your tip:" : "Tip:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "$", bill.yourTip), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, splitBill ? "Your total:" : "Total:"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "$", bill.yourTotal)), __jsx("div", {
    className: "tip",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, "Tip %:"), __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    min: 0,
    max: 100,
    defaultValue: tip,
    style: {
      width: '200px'
    },
    onChange: e => {
      setTip(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })), __jsx(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "Cancel bill splitting?",
    visible: visible,
    onConfirm: handleOk,
    okButtonProps: {
      loading: confirmLoading
    },
    onCancel: handleCancel,
    okText: "Yes",
    cancelText: "No",
    style: {
      fontSize: '20px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "split",
    onClick: () => {
      if (splitBill == true) {
        showPopconfirm();
      } else {
        setpeopleJoined(0);
        setOthers(0);
        setSplit(true);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, splitBill ? "Cancel bill splitting" : "Joins & split bills")), splitBill && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "qrcode",
    onClick: joinedSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx(QRCode, {
    size: "150",
    level: "M",
    inputMode: "text",
    value: QRCodeValue,
    renderAs: "svg",
    bgColor: "#fff",
    fgColor: "#136",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  })), __jsx("h3", {
    style: {
      textAlign: "center",
      fontWeight: '600'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "People joined: ", peopleJoined)), __jsx("div", {
    className: "total",
    onClick: paidSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, "Total:   "), __jsx("p", {
    style: {
      color: bill.total < bill.bill && "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, "$", new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(bill.total), bill.total < bill.bill ? "+$" + Math.round((bill.bill - bill.total) * 100) / 100 : "")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "pay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, "Pay")));
}

/***/ }),

/***/ "@ant-design/icons/lib/icons/BarsOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/BarsOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/BarsOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/GlobalOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/GlobalOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/GlobalOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/MenuFoldOutlined":
/*!***************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/MenuFoldOutlined" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MenuFoldOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/MenuUnfoldOutlined":
/*!*****************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/MenuUnfoldOutlined" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MenuUnfoldOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/QrcodeOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/QrcodeOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/QrcodeOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/UserOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/UserOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/UserOutlined");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/popconfirm":
/*!**************************************!*\
  !*** external "antd/lib/popconfirm" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "antd/lib/slider":
/*!**********************************!*\
  !*** external "antd/lib/slider" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvU2hhcmVCaWxsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9CYXJzT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvR2xvYmFsT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWVudUZvbGRPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9NZW51VW5mb2xkT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUXJjb2RlT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvVXNlck91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9wb3Bjb25maXJtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxcmNvZGUucmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlFSQ29kZSIsInJlcXVpcmUiLCJTdWJNZW51IiwiYXhpb3MiLCJjb250ZW50IiwibWFyZ2luVG9wIiwiU2hhcmVCaWxsIiwiUVJDb2RlVmFsdWUiLCJzZXRRUkNWIiwidXNlU3RhdGUiLCJwZW9wbGVKb2luZWQiLCJzZXRwZW9wbGVKb2luZWQiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb2xsYXBzZWQiLCJzcGxpdEJpbGwiLCJzZXRTcGxpdCIsImJpbGwiLCJzZXRCaWxsIiwieW91ckJpbGwiLCJ5b3VyVGlwIiwieW91clRvdGFsIiwidG90YWwiLCJleGNlc3MiLCJvdGhlcnNQYWlkIiwic2V0T3RoZXJzIiwidGlwIiwic2V0VGlwIiwiam9pbmVkU3VjY2VzcyIsInN1Y2Nlc3MiLCJwYWlkU3VjY2VzcyIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiUmVhY3QiLCJjb25maXJtTG9hZGluZyIsInNldENvbmZpcm1Mb2FkaW5nIiwic2hvd1BvcGNvbmZpcm0iLCJoYW5kbGVPayIsInNldFRpbWVvdXQiLCJoYW5kbGVDYW5jZWwiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3RhdGUiLCJNYXRoIiwicm91bmQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJtYXJnaW4iLCJjb2xvciIsInBvc2l0aW9uIiwiekluZGV4IiwiZm9udFNpemUiLCJjb25zb2xlIiwibG9nIiwiZSIsImxvYWRpbmciLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FB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Ozs7QUNBQSx1RTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBNZW51LCBCdXR0b24sIElucHV0LCBTbGlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtcclxuICBNZW51VW5mb2xkT3V0bGluZWQsXHJcbiAgTWVudUZvbGRPdXRsaW5lZCxcclxuICBHbG9iYWxPdXRsaW5lZCxcclxuICBCYXJzT3V0bGluZWQsXHJcbiAgUXJjb2RlT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG52YXIgUVJDb2RlID0gcmVxdWlyZSgncXJjb2RlLnJlYWN0Jyk7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxyXG5jb25zdCBjb250ZW50ID0ge1xyXG4gIG1hcmdpblRvcDogJzEwMHB4JyxcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBTaGFyZUJpbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbUVJDb2RlVmFsdWUsIHNldFFSQ1ZdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGVvcGxlSm9pbmVkLCBzZXRwZW9wbGVKb2luZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInFyY29kZVwiIG9uQ2xpY2s9eygpPT5zZXRwZW9wbGVKb2luZWQocGVvcGxlSm9pbmVkKzEpfT5cclxuICAgICAgICAgICAgICAgIDxRUkNvZGUgc2l6ZT1cIjE1MFwiIGxldmVsPVwiTVwiIGlucHV0TW9kZT1cInRleHRcIiB2YWx1ZT17UVJDb2RlVmFsdWV9ICByZW5kZXJBcz1cInN2Z1wiIGJnQ29sb3I9XCIjZmZmXCIgZmdDb2xvcj1cIiMxMzZcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgZm9udFdlaWdodDonNjAwJ319PlBlb3BsZSBqb2luZWQ6IHtwZW9wbGVKb2luZWR9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlQmlsbDsiLCJpbXBvcnQgeyBNZW51LCBCdXR0b24sIElucHV0LCBTbGlkZXIsIG1lc3NhZ2UsIFBvcGNvbmZpcm0gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgTWVudUZvbGRPdXRsaW5lZCxcbiAgR2xvYmFsT3V0bGluZWQsXG4gIEJhcnNPdXRsaW5lZCxcbiAgUXJjb2RlT3V0bGluZWQsXG4gIFVzZXJPdXRsaW5lZFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYXJlQmlsbCBmcm9tICcuL1NoYXJlQmlsbCc7XG52YXIgUVJDb2RlID0gcmVxdWlyZSgncXJjb2RlLnJlYWN0Jyk7XG5cbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuY29uc3QgY29udGVudCA9IHtcbiAgbWFyZ2luVG9wOiAnMTAwcHgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBheGlvcy5nZXQoJ2h0dHA6Ly9udW1iZXJzYXBpLmNvbS80MicpXG4gIC8vIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAvLyAgIC8vIGhhbmRsZSBzdWNjZXNzXG4gIC8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAvLyB9KVxuICAvLyAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gIC8vICAgLy8gaGFuZGxlIGVycm9yXG4gIC8vICAgY29uc29sZS5sb2coZXJyb3IpOyBcbiAgLy8gfSlcbiAgLy8gLnRoZW4oZnVuY3Rpb24gKCkge1xuICAvLyAgIC8vIGFsd2F5cyBleGVjdXRlZFxuICAvLyB9KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7Y29sbGFwc2VkOiB0cnVlfSk7XG5cbiAgY29uc3QgW3NwbGl0QmlsbCwgc2V0U3BsaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbUVJDb2RlVmFsdWUsIHNldFFSQ1ZdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZW9wbGVKb2luZWQsIHNldHBlb3BsZUpvaW5lZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JpbGwsIHNldEJpbGxdID0gdXNlU3RhdGUoe2JpbGw6MTAwLCB5b3VyQmlsbDoxMDAsIHlvdXJUaXA6MCwgeW91clRvdGFsOjEwMCwgdG90YWw6MTAwLCBleGNlc3M6MH0pO1xuICBjb25zdCBbb3RoZXJzUGFpZCwgc2V0T3RoZXJzXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGlwLCBzZXRUaXBdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgam9pbmVkU3VjY2VzcyA9ICgpID0+IHtcbiAgICBzZXRwZW9wbGVKb2luZWQocGVvcGxlSm9pbmVkKzEpO1xuICAgIG1lc3NhZ2Uuc3VjY2VzcygnTWFyayBBbGxlbiBqb2luZWQgdGhlIGJpbGwuJywgNSk7XG4gIH07XG4gIGNvbnN0IHBhaWRTdWNjZXNzID0gKCkgPT4ge1xuICAgIHNldE90aGVycyhvdGhlcnNQYWlkICsgMSk7XG4gICAgbWVzc2FnZS5zdWNjZXNzKCdNYXJrIEFsbGVuIHBheWVkICQ1MC4nLCA1KTtcbiAgfTtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29uZmlybUxvYWRpbmcsIHNldENvbmZpcm1Mb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2hvd1BvcGNvbmZpcm0gPSAoKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT2sgPSAoKSA9PiB7XG4gICAgc2V0Q29uZmlybUxvYWRpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHNldENvbmZpcm1Mb2FkaW5nKGZhbHNlKTtcbiAgICAgIHNldFNwbGl0KGZhbHNlKTtcbiAgICAgIHNldHBlb3BsZUpvaW5lZCgwKTtcbiAgICAgIHNldE90aGVycygwKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKCFzcGxpdEJpbGwpe1xuICAgICAgc2V0QmlsbChjdXJyZW50U3RhdGUgPT4oe1xuICAgICAgICAuLi5jdXJyZW50U3RhdGUsXG4gICAgICAgIHlvdXJUaXA6IE1hdGgucm91bmQoYmlsbC5iaWxsKnRpcCkvMTAwLFxuICAgICAgICB5b3VyVG90YWw6IE1hdGgucm91bmQoKGJpbGwuYmlsbCArIGJpbGwuYmlsbC8xMDAqdGlwKSoxMDApLzEwMCxcbiAgICAgICAgdG90YWw6IE1hdGgucm91bmQoKGJpbGwuYmlsbCArIGJpbGwuYmlsbC8xMDAqdGlwKSoxMDApLzEwMFxuICAgICAgfSkpO1xuICAgIH1lbHNle1xuICAgICAgc2V0QmlsbChjdXJyZW50U3RhdGUgPT4oe1xuICAgICAgICAuLi5jdXJyZW50U3RhdGUsXG4gICAgICAgIHlvdXJCaWxsOiBNYXRoLnJvdW5kKChiaWxsLmJpbGwvKHBlb3BsZUpvaW5lZCsxKSkqMTAwKS8xMDAsXG4gICAgICAgIHlvdXJUaXA6IE1hdGgucm91bmQoKGJpbGwuYmlsbC8ocGVvcGxlSm9pbmVkKzEpLzEwMCp0aXApKjEwMCkvMTAwLFxuICAgICAgICB5b3VyVG90YWw6IE1hdGgucm91bmQoKGJpbGwuYmlsbC8ocGVvcGxlSm9pbmVkKzEpICsgYmlsbC5iaWxsLyhwZW9wbGVKb2luZWQrMSkvMTAwKnRpcCkqMTAwKS8xMDAsXG4gICAgICAgIHRvdGFsOiBNYXRoLnJvdW5kKChiaWxsLmJpbGwvKHBlb3BsZUpvaW5lZCsxKSArIGJpbGwuYmlsbC8ocGVvcGxlSm9pbmVkKzEpLzEwMCp0aXAgKyBvdGhlcnNQYWlkKihiaWxsLmJpbGwvKHBlb3BsZUpvaW5lZCsxKSkpKjEwMCkvMTAwXG4gICAgICB9KSk7XG4gICAgfVxuICB9LFt0aXAsIHNwbGl0QmlsbCwgcGVvcGxlSm9pbmVkLCBvdGhlcnNQYWlkXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bmF2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGhlaWdodDpcIjM1cHhcIiwgYmFja2dyb3VuZENvbG9yOiAncmdiKDM2LCAzMywgMzApJ319PlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCk9PnNldFN0YXRlKHtjb2xsYXBzZWQ6IXN0YXRlLmNvbGxhcHNlZH0pfSBzdHlsZT17e2hlaWdodDonMzVweCd9fT5cbiAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChzdGF0ZS5jb2xsYXBzZWQgPyBNZW51VW5mb2xkT3V0bGluZWQgOiBNZW51Rm9sZE91dGxpbmVkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxoMiBzdHlsZT17e3dpZHRoOicxMDAlJywgcGFkZGluZ0xlZnQ6JzIwcHgnLCBtYXJnaW46JzAnLCBjb2xvcjogJ3doaXRlc21va2UnfX0+UGF5bWVudDwvaDI+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OicxMDAnfX0+XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5jb2xsYXBzZWQgPyBcIm1lbnVfZm9sZGVkXCIgOiBcIm1lbnVfdW5mb2xkZWRcIn1cbiAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cbiAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxuICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxuICAgICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtzdGF0ZS5jb2xsYXBzZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8R2xvYmFsT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTpcIjEuM3JlbVwifX0vPn0gY2xhc3NOYW1lPVwibWVudV9pdGVtX3NpemVcIj5cbiAgICAgICAgICAgIE1hcFxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiIGljb249ezxCYXJzT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTpcIjEuM3JlbVwifX0vPn0gY2xhc3NOYW1lPVwibWVudV9pdGVtX3NpemVcIj5cbiAgICAgICAgICAgIExpc3RcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBpY29uPXs8UXJjb2RlT3V0bGluZWQgc3R5bGU9e3tmb250U2l6ZTpcIjEuM3JlbVwifX0vPn0gY2xhc3NOYW1lPVwibWVudV9pdGVtX3NpemVcIj5cbiAgICAgICAgICAgIFFSXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgXG4gICAgICAgICAgPFN1Yk1lbnUgaWNvbj17PFVzZXJPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOlwiMS4zcmVtXCJ9fS8+fSB0aXRsZT1cIkFjY291bnRcIj5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic3ViMVwiIG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2coJ1JlZycpfX0+UmVnaXN0ZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwic3ViMlwiIG9uQ2xpY2s9eygpPT57Y29uc29sZS5sb2coJ0xvZycpfX0+TG9nIGluPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2JpbGxcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8cD5CaWxsOjwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgICQge2JpbGwuYmlsbH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAge3NwbGl0QmlsbCAmJlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHA+WW91ciBiaWxsOjwvcD5cbiAgICAgICAgICAgICAgPHA+JFxuICAgICAgICAgICAgICAgIHtiaWxsLnlvdXJCaWxsfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICB9XG4gICAgICAgICAgPHA+e3NwbGl0QmlsbD8gXCJZb3VyIHRpcDpcIjogXCJUaXA6XCJ9PC9wPlxuICAgICAgICAgIDxwPiRcbiAgICAgICAgICAgIHtiaWxsLnlvdXJUaXB9PC9wPlxuICAgICAgICAgIDxwPntzcGxpdEJpbGw/IFwiWW91ciB0b3RhbDpcIjogXCJUb3RhbDpcIn08L3A+XG4gICAgICAgICAgPHA+JFxuICAgICAgICAgICAge2JpbGwueW91clRvdGFsfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlwXCI+ICAgICBcbiAgICAgICAgICA8cD5UaXAgJTo8L3A+ICAgICAgICAgIFxuICAgICAgICAgIDxTbGlkZXIgXG4gICAgICAgICAgICBtaW49ezB9IFxuICAgICAgICAgICAgbWF4PXsxMDB9IFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aXB9IFxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMjAwcHgnfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFRpcChlKX19XG4gICAgICAgICAgPjwvU2xpZGVyPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgdGl0bGU9XCJDYW5jZWwgYmlsbCBzcGxpdHRpbmc/XCJcbiAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICAgIG9uQ29uZmlybT17aGFuZGxlT2t9XG4gICAgICAgICAgb2tCdXR0b25Qcm9wcz17eyBsb2FkaW5nOiBjb25maXJtTG9hZGluZyB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgb2tUZXh0PVwiWWVzXCJcbiAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxuICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6JzIwcHgnfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICBpZiAoc3BsaXRCaWxsPT10cnVlKXtcbiAgICAgICAgICAgICAgICBzaG93UG9wY29uZmlybSgpO1xuICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0cGVvcGxlSm9pbmVkKDApOyBcbiAgICAgICAgICAgICAgICBzZXRPdGhlcnMoMCk7XG4gICAgICAgICAgICAgICAgc2V0U3BsaXQodHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NwbGl0QmlsbD8gXCJDYW5jZWwgYmlsbCBzcGxpdHRpbmdcIjogXCJKb2lucyAmIHNwbGl0IGJpbGxzXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUG9wY29uZmlybT5cbiAgICAgICAge3NwbGl0QmlsbCAmJiBcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxcmNvZGVcIiBvbkNsaWNrPXtqb2luZWRTdWNjZXNzfT5cbiAgICAgICAgICAgICAgICA8UVJDb2RlIHNpemU9XCIxNTBcIiBsZXZlbD1cIk1cIiBpbnB1dE1vZGU9XCJ0ZXh0XCIgdmFsdWU9e1FSQ29kZVZhbHVlfSAgcmVuZGVyQXM9XCJzdmdcIiBiZ0NvbG9yPVwiI2ZmZlwiIGZnQ29sb3I9XCIjMTM2XCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgZm9udFdlaWdodDonNjAwJ319PlBlb3BsZSBqb2luZWQ6IHtwZW9wbGVKb2luZWR9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsXCIgb25DbGljaz17cGFpZFN1Y2Nlc3N9PlxuICAgICAgICAgIDxwPlRvdGFsOiAgIDwvcD5cbiAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBiaWxsLnRvdGFsPGJpbGwuYmlsbCAmJiBcInJlZFwifX0+JFxuICAgICAgICAgICAge25ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICAgICAgICAgIH0pLmZvcm1hdChiaWxsLnRvdGFsKX1cbiAgICAgICAgICAgIHtiaWxsLnRvdGFsPGJpbGwuYmlsbD8gXCIrJFwiICsgTWF0aC5yb3VuZCgoYmlsbC5iaWxsLShiaWxsLnRvdGFsKSkqMTAwKS8xMDA6XCJcIn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInBheVwiPlBheTwvQnV0dG9uPlxuICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0JhcnNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvR2xvYmFsT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01lbnVGb2xkT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01lbnVVbmZvbGRPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUXJjb2RlT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1VzZXJPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZXNzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3BvcGNvbmZpcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFyY29kZS5yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9