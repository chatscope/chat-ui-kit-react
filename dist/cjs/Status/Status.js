"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Status = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _enums = require("../enums");
var _settings = require("../settings");
var _excluded = ["status", "size", "className", "name", "selected", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Status = exports.Status = function Status(_ref) {
  var status = _ref.status,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    className = _ref.className,
    name = _ref.name,
    selected = _ref.selected,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-status");
  var bullet = /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__bullet")
  });
  var named = name || children;
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    "aria-selected": selected === true ? "" : null,
    className: (0, _classnames["default"])(cName, "".concat(cName, "--").concat(size), "".concat(cName, "--").concat(status), _defineProperty({}, "".concat(cName, "--selected"), selected), _defineProperty({}, "".concat(cName, "--named"), named), className)
  }), bullet, named && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__name")
  }, name ? name : children));
};
process.env.NODE_ENV !== "production" ? Status.propTypes = {
  /** Primary content */
  children: _propTypes["default"].node,
  /** Status. */
  status: _propTypes["default"].oneOf(_enums.StatusEnum).isRequired,
  /** Size. */
  size: _propTypes["default"].oneOf(_enums.SizeEnum),
  /** Name */
  name: _propTypes["default"].node,
  /** Selected */
  selected: _propTypes["default"].bool,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = Status;