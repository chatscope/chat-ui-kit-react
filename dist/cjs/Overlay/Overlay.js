"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Overlay = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["className", "children", "blur", "grayscale"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Overlay = exports.Overlay = function Overlay(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$blur = _ref.blur,
    blur = _ref$blur === void 0 ? false : _ref$blur,
    _ref$grayscale = _ref.grayscale,
    grayscale = _ref$grayscale === void 0 ? false : _ref$grayscale,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-overlay");
  var blurClass = "".concat(cName, "--blur");
  var grayscaleClass = "".concat(cName, "--grayscale");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, _defineProperty({}, blurClass, blur), _defineProperty({}, grayscaleClass, grayscale), className)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__content")
  }, children));
};
process.env.NODE_ENV !== "production" ? Overlay.propTypes = {
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string,
  /**
   * Blur overlayed content.
   * This feature is experimental and have limited browser support
   */
  blur: _propTypes["default"].bool,
  /**
   * Grayscale overlayed content.
   * This feature is experimental and have limited browser support
   */
  grayscale: _propTypes["default"].bool
} : void 0;
var _default = exports["default"] = Overlay;