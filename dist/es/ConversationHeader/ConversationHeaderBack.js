var _excluded = ["onClick", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { ArrowButton } from "../Buttons";
export var ConversationHeaderBack = function ConversationHeaderBack(_ref) {
  var _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header__back");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/React.createElement(ArrowButton, {
    direction: "left",
    onClick: onClick
  }));
};
ConversationHeaderBack.displayName = "ConversationHeader.Back";
process.env.NODE_ENV !== "production" ? ConversationHeaderBack.propTypes = {
  /** OnClick handler attached to button. */
  onClick: PropTypes.func,
  /** Primary content - override default button. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default ConversationHeaderBack;