function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["name", "src", "size", "status", "className", "active", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { Status } from "../Status/Status";
import { SizeEnum, StatusEnum } from "../enums";
function AvatarInner(_ref, ref) {
  var _ref$name = _ref.name,
    name = _ref$name === void 0 ? "" : _ref$name,
    _ref$src = _ref.src,
    src = _ref$src === void 0 ? "" : _ref$src,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    status = _ref.status,
    className = _ref.className,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-avatar");
  var sizeClass = typeof size !== "undefined" ? " ".concat(cName, "--").concat(size) : "";
  var avatarRef = useRef();
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        return avatarRef.current.focus();
      }
    };
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: avatarRef
  }, rest, {
    className: classNames("".concat(cName).concat(sizeClass), _defineProperty({}, "".concat(cName, "--active"), active), className)
  }), children ? children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }), typeof status === "string" && /*#__PURE__*/React.createElement(Status, {
    status: status,
    size: size
  }), " "));
}
var Avatar = /*#__PURE__*/forwardRef(AvatarInner);
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Primary content */
  children: PropTypes.node,
  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: PropTypes.string,
  /** Avatar image source */
  src: PropTypes.string,
  /** Size */
  size: PropTypes.oneOf(SizeEnum),
  /** Status. */
  status: PropTypes.oneOf(StatusEnum),
  /** Active */
  active: PropTypes.bool,
  /** Additional classes. */
  className: PropTypes.string
};
process.env.NODE_ENV !== "production" ? AvatarInner.propTypes = Avatar.propTypes : void 0;
export { Avatar };
export default Avatar;