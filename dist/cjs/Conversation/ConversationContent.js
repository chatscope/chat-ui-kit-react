"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ConversationContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _cName = _interopRequireDefault(require("./cName"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["lastSenderName", "info", "name", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var LastSenderName = function LastSenderName(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__last-sender")
  }, name), ":");
};
process.env.NODE_ENV !== "production" ? LastSenderName.propTypes = {
  name: _propTypes["default"].node
} : void 0;
var InfoContent = function InfoContent(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__info-content")
  }, info);
};
process.env.NODE_ENV !== "production" ? InfoContent.propTypes = {
  info: _propTypes["default"].node
} : void 0;
var ConversationContent = exports.ConversationContent = function ConversationContent(_ref3) {
  var lastSenderName = _ref3.lastSenderName,
    info = _ref3.info,
    name = _ref3.name,
    children = _ref3.children,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, _excluded);
  var typeofLastSenderName = _typeof(lastSenderName);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])("".concat(_cName["default"], "__content"), className)
  }), _react["default"].Children.count(children) > 0 ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__name")
  }, name), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__info")
  }, typeofLastSenderName !== "undefined" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, typeofLastSenderName === "string" ? /*#__PURE__*/_react["default"].createElement(LastSenderName, {
    name: lastSenderName
  }) : lastSenderName, " ") : null, typeof info !== "undefined" && /*#__PURE__*/_react["default"].createElement(InfoContent, {
    info: info
  }))));
};
ConversationContent.displayName = "Conversation.Content";
process.env.NODE_ENV !== "production" ? ConversationContent.propTypes = {
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string,
  /** First text line - contact name etc. */
  name: _propTypes["default"].node,
  /** Last sender name. */
  lastSenderName: _propTypes["default"].node,
  /** Informational message / last message. */
  info: _propTypes["default"].node
} : void 0;
var _default = exports["default"] = ConversationContent;