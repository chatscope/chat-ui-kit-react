var _excluded = ["sender", "sentTime", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var MessageFooter = function MessageFooter(_ref) {
  var _ref$sender = _ref.sender,
    sender = _ref$sender === void 0 ? "" : _ref$sender,
    _ref$sentTime = _ref.sentTime,
    sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message__footer");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-message__sender-name")
  }, sender), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-message__sent-time")
  }, sentTime)));
};
MessageFooter.displayName = "Message.Footer";
process.env.NODE_ENV !== "production" ? MessageFooter.propTypes = {
  sender: PropTypes.string,
  sentTime: PropTypes.string,
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageFooter;