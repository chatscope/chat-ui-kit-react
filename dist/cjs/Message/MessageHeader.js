"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MessageHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["sender", "sentTime", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var MessageHeader = exports.MessageHeader = function MessageHeader(_ref) {
  var _ref$sender = _ref.sender,
    sender = _ref$sender === void 0 ? "" : _ref$sender,
    _ref$sentTime = _ref.sentTime,
    sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-message__header");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_settings.prefix, "-message__sender-name")
  }, sender), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_settings.prefix, "-message__sent-time")
  }, sentTime)));
};
MessageHeader.displayName = "Message.Header";
process.env.NODE_ENV !== "production" ? MessageHeader.propTypes = {
  sender: _propTypes["default"].string,
  sentTime: _propTypes["default"].string,
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = MessageHeader;