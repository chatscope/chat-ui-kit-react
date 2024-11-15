function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "children", "blur", "grayscale"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var Overlay = function Overlay(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$blur = _ref.blur,
    blur = _ref$blur === void 0 ? false : _ref$blur,
    _ref$grayscale = _ref.grayscale,
    grayscale = _ref$grayscale === void 0 ? false : _ref$grayscale,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-overlay");
  var blurClass = "".concat(cName, "--blur");
  var grayscaleClass = "".concat(cName, "--grayscale");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, _defineProperty({}, blurClass, blur), _defineProperty({}, grayscaleClass, grayscale), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__content")
  }, children));
};
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  /**
   * Blur overlayed content.
   * This feature is experimental and have limited browser support
   */
  blur: PropTypes.bool,
  /**
   * Grayscale overlayed content.
   * This feature is experimental and have limited browser support
   */
  grayscale: PropTypes.bool
} : void 0;
export default Overlay;