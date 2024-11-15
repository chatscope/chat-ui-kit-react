"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Conversation = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _classnames = _interopRequireDefault(require("classnames"));
var _cName = _interopRequireDefault(require("./cName"));
var _ConversationOperations = _interopRequireDefault(require("./ConversationOperations"));
var _ConversationContent = _interopRequireDefault(require("./ConversationContent"));
var _Avatar = _interopRequireDefault(require("../Avatar"));
var _AvatarGroup = _interopRequireDefault(require("../AvatarGroup"));
var _excluded = ["name", "unreadCnt", "lastSenderName", "info", "lastActivityTime", "unreadDot", "children", "className", "active"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var LastActivityTime = function LastActivityTime(_ref) {
  var time = _ref.time;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__last-activity-time"),
    title: time
  }, time);
};
process.env.NODE_ENV !== "production" ? LastActivityTime.propTypes = {
  time: _propTypes["default"].string
} : void 0;
var UnreadDot = function UnreadDot() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__unread-dot")
  });
};
var Conversation = exports.Conversation = function Conversation(_ref2) {
  var _ref2$name = _ref2.name,
    name = _ref2$name === void 0 ? undefined : _ref2$name,
    _ref2$unreadCnt = _ref2.unreadCnt,
    unreadCnt = _ref2$unreadCnt === void 0 ? undefined : _ref2$unreadCnt,
    _ref2$lastSenderName = _ref2.lastSenderName,
    lastSenderName = _ref2$lastSenderName === void 0 ? undefined : _ref2$lastSenderName,
    _ref2$info = _ref2.info,
    info = _ref2$info === void 0 ? undefined : _ref2$info,
    _ref2$lastActivityTim = _ref2.lastActivityTime,
    lastActivityTime = _ref2$lastActivityTim === void 0 ? undefined : _ref2$lastActivityTim,
    _ref2$unreadDot = _ref2.unreadDot,
    unreadDot = _ref2$unreadDot === void 0 ? false : _ref2$unreadDot,
    children = _ref2.children,
    className = _ref2.className,
    _ref2$active = _ref2.active,
    active = _ref2$active === void 0 ? false : _ref2$active,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _getChildren = (0, _utils.getChildren)(children, [_Avatar["default"], _AvatarGroup["default"], _ConversationOperations["default"], _ConversationContent["default"]]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    avatar = _getChildren2[0],
    avatarGroup = _getChildren2[1],
    operations = _getChildren2[2],
    content = _getChildren2[3];
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(_cName["default"], _defineProperty({}, "".concat(_cName["default"], "--active"), active), className)
  }), avatar, avatarGroup, (typeof name !== "undefined" || typeof lastSenderName !== "undefined" || typeof info !== "undefined") && /*#__PURE__*/_react["default"].createElement(_ConversationContent["default"], {
    name: name,
    lastSenderName: lastSenderName,
    info: info
  }), (typeof name === "undefined" || name === null) && (typeof lastSenderName === "undefined" || lastSenderName === null) && (typeof info === "undefined" || info === null) && content, lastActivityTime !== null && typeof lastActivityTime !== "undefined" && /*#__PURE__*/_react["default"].createElement(LastActivityTime, {
    time: lastActivityTime
  }), unreadDot && /*#__PURE__*/_react["default"].createElement(UnreadDot, null), operations, unreadCnt !== null && typeof unreadCnt !== "undefined" && parseInt(unreadCnt) > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_cName["default"], "__unread"),
    title: unreadCnt
  }, unreadCnt));
};
process.env.NODE_ENV !== "production" ? Conversation.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;Conversation.Content /&gt;
   * * &lt;Conversation.Operations /&gt;
   */
  children: (0, _utils.allowedChildren)([_Avatar["default"], _AvatarGroup["default"], _ConversationOperations["default"], _ConversationContent["default"]]),
  /** First text line in &lt;Conversation.Content /&gt; contact name etc. */
  name: _propTypes["default"].node,
  /** Unread messages quantity. */
  unreadCnt: _propTypes["default"].number,
  /** Unread dot visible. */
  unreadDot: _propTypes["default"].bool,
  /** Last sender in &lt;Conversation.Content /&gt; name. */
  lastSenderName: _propTypes["default"].node,
  /** Informational message / last message in &lt;Conversation.Content /&gt;. */
  info: _propTypes["default"].node,
  /** Last activity time. */
  lastActivityTime: _propTypes["default"].node,
  /** Active (currently viewed) */
  active: _propTypes["default"].bool,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
Conversation.Operations = _ConversationOperations["default"];
Conversation.Content = _ConversationContent["default"];
var _default = exports["default"] = Conversation;