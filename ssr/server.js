/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(3);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(_express2.default.static("public"));
app.use('/images', _express2.default.static("/home/olivier/Projects/perf-techs/ssr/images"));

app.get("*", function (req, res, next) {
  var name = "Olivier";
  var markup = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));

  res.send("\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>SSR</title>\n          <script src=\"/bundle.js\" defer></script>\n          <link rel=\"stylesheet\" type=\"text/css\" charset=\"UTF-8\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css\" />\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css\" />\n        </head>\n  \n        <body>\n          <div id=\"app\">" + markup + "</div>\n        </body>\n      </html>\n    ");
});

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(6);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            };
            return _react2.default.createElement(
                _reactSlick2.default,
                settings,
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/god.jpg", alt: "Picture of God here" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/ColdRipple.jpg", alt: "Picture of water" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/DarkestHour.jpg", alt: "Image of lake" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/Firewatch1.jpg", alt: "Image of Firewatch game" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/Firewatch2.jpg", alt: "Image of Firewacht game 2" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/matterhorn.jpg", alt: "Image of the Matterhorn mountain" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/mountains-blue-overview.png", alt: "Image of blue mountains" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/OneStandsOut.jpg", alt: "Image of irregular flower in field of flowers" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/Path.jpg", alt: "Image of path through the woods" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/wallhaven-bridge.png", alt: "Image of a bridge" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { src: "/images/wallhaven-forest.jpg", alt: "Image of a forest" })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })
/******/ ]);