var _excluded = ["userName", "info", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var ConversationHeaderContent = function ConversationHeaderContent(_ref) {
  var _ref$userName = _ref.userName,
    userName = _ref$userName === void 0 ? "" : _ref$userName,
    _ref$info = _ref.info,
    info = _ref$info === void 0 ? "" : _ref$info,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header__content");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-conversation-header__user-name")
  }, userName), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-conversation-header__info")
  }, info)));
};
ConversationHeaderContent.displayName = "ConversationHeader.Content";
process.env.NODE_ENV !== "production" ? ConversationHeaderContent.propTypes = {
  /** Primary content. Has precedence over userName and info properties. */
  children: PropTypes.node,
  userName: PropTypes.node,
  info: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default ConversationHeaderContent;