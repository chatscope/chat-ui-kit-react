"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["children", "className", "icon", "border", "labelPosition"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Button = exports.Button = function Button(_ref) {
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
  var cName = "".concat(_settings.prefix, "-button");
  var lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  var labelPositionClassName = _react["default"].Children.count(children) > 0 ? "".concat(cName, "--").concat(lPos) : "";
  var borderClassName = border === true ? "".concat(cName, "--border") : "";
  return /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, labelPositionClassName, borderClassName, className)
  }), lPos === "left" && children, icon, lPos === "right" && children);
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  /** Primary content */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string,
  icon: _propTypes["default"].node,
  labelPosition: _propTypes["default"].oneOf(["left", "right"]),
  border: _propTypes["default"].bool
} : void 0;
var _default = exports["default"] = Button;