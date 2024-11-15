"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ArrowButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _Button = _interopRequireDefault(require("./Button"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _faArrowUp = require("@fortawesome/free-solid-svg-icons/faArrowUp");
var _faArrowRight = require("@fortawesome/free-solid-svg-icons/faArrowRight");
var _faArrowDown = require("@fortawesome/free-solid-svg-icons/faArrowDown");
var _faArrowLeft = require("@fortawesome/free-solid-svg-icons/faArrowLeft");
var _excluded = ["className", "direction", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ArrowButton = exports.ArrowButton = function ArrowButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "right" : _ref$direction,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-button--arrow");
  var icon = function () {
    if (direction === "up") {
      return _faArrowUp.faArrowUp;
    } else if (direction === "right") {
      return _faArrowRight.faArrowRight;
    } else if (direction === "down") {
      return _faArrowDown.faArrowDown;
    } else if (direction === "left") {
      return _faArrowLeft.faArrowLeft;
    }
  }();
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className),
    icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon
    })
  }), children);
};
process.env.NODE_ENV !== "production" ? ArrowButton.propTypes = {
  /**
   * Primary content.
   */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string,
  direction: _propTypes["default"].oneOf(["up", "right", "down", "left"])
} : void 0;
var _default = exports["default"] = ArrowButton;