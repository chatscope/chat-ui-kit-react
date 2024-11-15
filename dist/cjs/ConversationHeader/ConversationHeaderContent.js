"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ConversationHeaderContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["userName", "info", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ConversationHeaderContent = exports.ConversationHeaderContent = function ConversationHeaderContent(_ref) {
  var _ref$userName = _ref.userName,
    userName = _ref$userName === void 0 ? "" : _ref$userName,
    _ref$info = _ref.info,
    info = _ref$info === void 0 ? "" : _ref$info,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-conversation-header__content");
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), typeof children !== "undefined" ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_settings.prefix, "-conversation-header__user-name")
  }, userName), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_settings.prefix, "-conversation-header__info")
  }, info)));
};
ConversationHeaderContent.displayName = "ConversationHeader.Content";
process.env.NODE_ENV !== "production" ? ConversationHeaderContent.propTypes = {
  /** Primary content. Has precedence over userName and info properties. */
  children: _propTypes["default"].node,
  userName: _propTypes["default"].node,
  info: _propTypes["default"].node,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = ConversationHeaderContent;