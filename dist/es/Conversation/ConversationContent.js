var _excluded = ["lastSenderName", "info", "name", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import cName from "./cName";
import classNames from "classnames";
import PropTypes from "prop-types";
var LastSenderName = function LastSenderName(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__last-sender")
  }, name), ":");
};
process.env.NODE_ENV !== "production" ? LastSenderName.propTypes = {
  name: PropTypes.node
} : void 0;
var InfoContent = function InfoContent(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__info-content")
  }, info);
};
process.env.NODE_ENV !== "production" ? InfoContent.propTypes = {
  info: PropTypes.node
} : void 0;
export var ConversationContent = function ConversationContent(_ref3) {
  var lastSenderName = _ref3.lastSenderName,
    info = _ref3.info,
    name = _ref3.name,
    children = _ref3.children,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, _excluded);
  var typeofLastSenderName = _typeof(lastSenderName);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames("".concat(cName, "__content"), className)
  }), React.Children.count(children) > 0 ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__name")
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__info")
  }, typeofLastSenderName !== "undefined" ? /*#__PURE__*/React.createElement(React.Fragment, null, typeofLastSenderName === "string" ? /*#__PURE__*/React.createElement(LastSenderName, {
    name: lastSenderName
  }) : lastSenderName, " ") : null, typeof info !== "undefined" && /*#__PURE__*/React.createElement(InfoContent, {
    info: info
  }))));
};
ConversationContent.displayName = "Conversation.Content";
process.env.NODE_ENV !== "production" ? ConversationContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  /** First text line - contact name etc. */
  name: PropTypes.node,
  /** Last sender name. */
  lastSenderName: PropTypes.node,
  /** Informational message / last message. */
  info: PropTypes.node
} : void 0;
export default ConversationContent;