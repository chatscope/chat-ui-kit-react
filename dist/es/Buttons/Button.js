var _excluded = ["children", "className", "icon", "border", "labelPosition"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var Button = function Button(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? undefined : _ref$icon,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? undefined : _ref$labelPosition,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button");
  var lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  var labelPositionClassName = React.Children.count(children) > 0 ? "".concat(cName, "--").concat(lPos) : "";
  var borderClassName = border === true ? "".concat(cName, "--border") : "";
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    className: classNames(cName, labelPositionClassName, borderClassName, className)
  }), lPos === "left" && children, icon, lPos === "right" && children);
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  /** Primary content */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  icon: PropTypes.node,
  labelPosition: PropTypes.oneOf(["left", "right"]),
  border: PropTypes.bool
} : void 0;
export default Button;