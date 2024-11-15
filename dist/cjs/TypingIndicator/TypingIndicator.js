"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TypingIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["content", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var TypingIndicator = exports.TypingIndicator = function TypingIndicator(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? "" : _ref$content,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-typing-indicator");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__indicator")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__dot")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__dot")
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__dot")
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__text")
  }, content));
};
process.env.NODE_ENV !== "production" ? TypingIndicator.propTypes = {
  /** Indicator content. */
  content: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = TypingIndicator;