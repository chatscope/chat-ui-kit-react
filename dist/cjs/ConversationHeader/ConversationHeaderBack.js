"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ConversationHeaderBack = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _settings = require("../settings");
var _classnames = _interopRequireDefault(require("classnames"));
var _Buttons = require("../Buttons");
var _excluded = ["onClick", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ConversationHeaderBack = exports.ConversationHeaderBack = function ConversationHeaderBack(_ref) {
  var _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-conversation-header__back");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/_react["default"].createElement(_Buttons.ArrowButton, {
    direction: "left",
    onClick: onClick
  }));
};
ConversationHeaderBack.displayName = "ConversationHeader.Back";
process.env.NODE_ENV !== "production" ? ConversationHeaderBack.propTypes = {
  /** OnClick handler attached to button. */
  onClick: _propTypes["default"].func,
  /** Primary content - override default button. */
  children: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = ConversationHeaderBack;