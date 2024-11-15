"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EllipsisButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _Button = _interopRequireDefault(require("./Button"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _faEllipsisV = require("@fortawesome/free-solid-svg-icons/faEllipsisV");
var _faEllipsisH = require("@fortawesome/free-solid-svg-icons/faEllipsisH");
var _excluded = ["className", "orientation", "children"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var EllipsisButton = exports.EllipsisButton = function EllipsisButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-button--ellipsis");
  var icon = orientation === "vertical" ? _faEllipsisV.faEllipsisV : _faEllipsisH.faEllipsisH;
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className),
    icon: /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: icon
    })
  }), children);
};
process.env.NODE_ENV !== "production" ? EllipsisButton.propTypes = {
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string,
  orientation: _propTypes["default"].oneOf(["horizontal", "vertical"])
} : void 0;
var _default = exports["default"] = EllipsisButton;