"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChatContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../utils");
var _ConversationHeader = _interopRequireDefault(require("../ConversationHeader"));
var _MessageList = _interopRequireDefault(require("../MessageList"));
var _MessageInput = _interopRequireDefault(require("../MessageInput"));
var _InputToolbox = _interopRequireDefault(require("../InputToolbox"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
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
var ChatContainer = exports.ChatContainer = function ChatContainer(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-chat-container");
  var _getChildren = (0, _utils.getChildren)(children, [_ConversationHeader["default"], _MessageList["default"], _MessageInput["default"], _InputToolbox["default"]]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    header = _getChildren2[0],
    messageList = _getChildren2[1],
    messageInput = _getChildren2[2],
    inputToolbox = _getChildren2[3];
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, className)
  }), header, messageList, messageInput, inputToolbox);
};
process.env.NODE_ENV !== "production" ? ChatContainer.propTypes = {
  /**
   * Primary content.
   * Allowed elements:
   *
   * * &lt;ConversationHeader /&gt;
   * * &lt;MessageList /&gt;
   * * &lt;MessageInput /&gt;
   * * &lt;InputToolbox /&gt;
   */
  children: (0, _utils.allowedChildren)([_ConversationHeader["default"], _MessageList["default"], _MessageInput["default"], _InputToolbox["default"]]),
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = ChatContainer;