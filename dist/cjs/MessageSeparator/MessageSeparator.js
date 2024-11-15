"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MessageSeparator = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _utils = require("../utils");
var _excluded = ["content", "as", "children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var MessageSeparator = exports.MessageSeparator = function MessageSeparator(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? undefined : _ref$content,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "div" : _ref$as,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-message-separator");
  var Tag = function () {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return "div";
    }
  }();
  return /*#__PURE__*/_react["default"].createElement(Tag, _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), (0, _utils.isChildrenNil)(children) === true ? content : children);
};
process.env.NODE_ENV !== "production" ? MessageSeparator.propTypes = {
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Shorthand for primary content. */
  content: _propTypes["default"].node,
  /** An element type to render as. */
  as: _propTypes["default"].elementType,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = MessageSeparator;