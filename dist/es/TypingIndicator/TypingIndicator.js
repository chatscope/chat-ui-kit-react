var _excluded = ["content", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var TypingIndicator = function TypingIndicator(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? "" : _ref$content,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-typing-indicator");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__indicator")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__dot")
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__dot")
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__dot")
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__text")
  }, content));
};
process.env.NODE_ENV !== "production" ? TypingIndicator.propTypes = {
  /** Indicator content. */
  content: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default TypingIndicator;