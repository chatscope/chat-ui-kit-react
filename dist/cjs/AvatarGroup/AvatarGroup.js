"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AvatarGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _settings = require("../settings");
var _classnames = _interopRequireDefault(require("classnames"));
var _Avatar = _interopRequireDefault(require("../Avatar"));
var _excluded = ["children", "size", "className", "max", "activeIndex", "hoverToFront"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var AvatarGroup = exports.AvatarGroup = function AvatarGroup(_ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    className = _ref.className,
    max = _ref.max,
    activeIndex = _ref.activeIndex,
    hoverToFront = _ref.hoverToFront,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-avatar-group");

  // Reverse because of css
  var avatars = typeof max === "number" && _react["default"].Children.count(children) > max ? _react["default"].Children.toArray(children).reverse().slice(0, max) : _react["default"].Children.toArray(children).reverse();
  var reversedActiveIndex = typeof activeIndex === "number" ? avatars.length - activeIndex - 1 : undefined;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, "".concat(cName, "--").concat(size), className)
  }), avatars.map(function (a, i) {
    var newProps = typeof reversedActiveIndex === "number" ? {
      active: reversedActiveIndex === i
    } : {};
    if (hoverToFront === true) {
      newProps.className = (0, _classnames["default"])("".concat(_settings.prefix, "-avatar--active-on-hover"), a.props.className);
    }
    return /*#__PURE__*/_react["default"].cloneElement(a, newProps);
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
  children: (0, _utils.allowedChildren)([_Avatar["default"]]),
  /** Additional classes. */
  className: _propTypes["default"].string,
  /** Maximum stacked children */
  max: _propTypes["default"].number,
  /** Size */
  size: _propTypes["default"].oneOf(["xs", "sm", "md", "lg", "fluid"]),
  /** Active index.
   * Active element has higher z-index independent of its order.
   */
  activeIndex: _propTypes["default"].number,
  /** Bring to front on hover */
  hoverToFront: _propTypes["default"].bool
} : void 0;
var _default = exports["default"] = AvatarGroup;