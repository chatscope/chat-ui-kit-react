"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ConversationHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _settings = require("../settings");
var _utils = require("../utils");
var _classnames = _interopRequireDefault(require("classnames"));
var _Avatar = _interopRequireDefault(require("../Avatar"));
var _AvatarGroup = _interopRequireDefault(require("../AvatarGroup"));
var _ConversationHeaderBack = _interopRequireDefault(require("./ConversationHeaderBack"));
var _ConversationHeaderActions = _interopRequireDefault(require("./ConversationHeaderActions"));
var _ConversationHeaderContent = _interopRequireDefault(require("./ConversationHeaderContent"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["children", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ConversationHeader = exports.ConversationHeader = function ConversationHeader(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-conversation-header");
  var _getChildren = (0, _utils.getChildren)(children, [_ConversationHeaderBack["default"], _Avatar["default"], _AvatarGroup["default"], _ConversationHeaderContent["default"], _ConversationHeaderActions["default"]]),
    _getChildren2 = _slicedToArray(_getChildren, 5),
    back = _getChildren2[0],
    avatar = _getChildren2[1],
    avatarGroup = _getChildren2[2],
    content = _getChildren2[3],
    actions = _getChildren2[4];
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), back, avatar && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__avatar")
  }, avatar), !avatar && avatarGroup && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__avatar")
  }, avatarGroup), content, actions);
};
ConversationHeader.displayName = "ConversationHeader";
process.env.NODE_ENV !== "production" ? ConversationHeader.propTypes = {
  /**
   * Primary content.
   * Available elements:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;ConversationHeader.Back /&gt;
   * * &lt;ConversationHeader.Content /&gt;
   * * &lt;ConversationHeader.Actions /&gt;
   */
  children: (0, _utils.allowedChildren)([_ConversationHeaderBack["default"], _Avatar["default"], _AvatarGroup["default"], _ConversationHeaderContent["default"], _ConversationHeaderActions["default"]]),
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
ConversationHeader.Back = _ConversationHeaderBack["default"];
ConversationHeader.Actions = _ConversationHeaderActions["default"];
ConversationHeader.Content = _ConversationHeaderContent["default"];
var _default = exports["default"] = ConversationHeader;