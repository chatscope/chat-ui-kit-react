var _excluded = ["children", "size", "className", "max", "activeIndex", "hoverToFront"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import { allowedChildren } from "../utils";
import { prefix } from "../settings";
import classNames from "classnames";
import Avatar from "../Avatar";
export var AvatarGroup = function AvatarGroup(_ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    className = _ref.className,
    max = _ref.max,
    activeIndex = _ref.activeIndex,
    hoverToFront = _ref.hoverToFront,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-avatar-group");

  // Reverse because of css
  var avatars = typeof max === "number" && React.Children.count(children) > max ? React.Children.toArray(children).reverse().slice(0, max) : React.Children.toArray(children).reverse();
  var reversedActiveIndex = typeof activeIndex === "number" ? avatars.length - activeIndex - 1 : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, "".concat(cName, "--").concat(size), className)
  }), avatars.map(function (a, i) {
    var newProps = typeof reversedActiveIndex === "number" ? {
      active: reversedActiveIndex === i
    } : {};
    if (hoverToFront === true) {
      newProps.className = classNames("".concat(prefix, "-avatar--active-on-hover"), a.props.className);
    }
    return /*#__PURE__*/React.cloneElement(a, newProps);
  }));
};
AvatarGroup.displayName = "AvatarGroup";
process.env.NODE_ENV !== "production" ? AvatarGroup.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   */
  children: allowedChildren([Avatar]),
  /** Additional classes. */
  className: PropTypes.string,
  /** Maximum stacked children */
  max: PropTypes.number,
  /** Size */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "fluid"]),
  /** Active index.
   * Active element has higher z-index independent of its order.
   */
  activeIndex: PropTypes.number,
  /** Bring to front on hover */
  hoverToFront: PropTypes.bool
} : void 0;
export default AvatarGroup;