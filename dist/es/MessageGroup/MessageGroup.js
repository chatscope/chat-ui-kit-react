function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["direction", "avatarPosition", "sender", "sentTime", "children", "className"];
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
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import MessageGroupHeader from "./MessageGroupHeader";
import MessageGroupFooter from "./MessageGroupFooter";
import MessageGroupMessages from "./MessageGroupMessages";
import Avatar from "../Avatar";
export var MessageGroup = function MessageGroup(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "incoming" : _ref$direction,
    _ref$avatarPosition = _ref.avatarPosition,
    avatarPosition = _ref$avatarPosition === void 0 ? undefined : _ref$avatarPosition,
    _ref$sender = _ref.sender,
    sender = _ref$sender === void 0 ? "" : _ref$sender,
    _ref$sentTime = _ref.sentTime,
    sentTime = _ref$sentTime === void 0 ? "" : _ref$sentTime,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message-group");
  var directionClass = function () {
    if (direction === 0 || direction === "incoming") {
      return "".concat(cName, "--incoming");
    } else if (direction === 1 || direction === "outgoing") {
      return "".concat(cName, "--outgoing");
    }
  }();
  var avatarPositionClass = function () {
    var prefix = "".concat(cName, "--avatar-");
    if (typeof avatarPosition === "string") {
      if (avatarPosition === "tl" || avatarPosition === "top-left" || avatarPosition === "tr" || avatarPosition === "top-right" || avatarPosition === "bl" || avatarPosition === "bottom-right" || avatarPosition === "br" || avatarPosition === "bottom-right" || avatarPosition === "cl" || avatarPosition === "center-left" || avatarPosition === "cr" || avatarPosition === "center-right") {
        return "".concat(prefix).concat(avatarPosition);
      }
    }
  }();
  var _getChildren = getChildren(children, [Avatar, MessageGroupHeader, MessageGroupFooter, MessageGroupMessages]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    avatar = _getChildren2[0],
    header = _getChildren2[1],
    footer = _getChildren2[2],
    messages = _getChildren2[3];
  var ariaLabel = function () {
    if (sender.length > 0 && sentTime.length > 0) {
      return "".concat(sender, ": ").concat(sentTime);
    } else if (sender.length > 0 && sentTime.length === 0) {
      return sender;
    } else {
      return null;
    }
  }();
  return /*#__PURE__*/React.createElement("section", _extends({
    "aria-label": ariaLabel
  }, rest, {
    className: classNames(cName, directionClass, avatarPositionClass, className)
  }, _defineProperty({}, "data-".concat(prefix, "-message-group"), "")), typeof avatar !== "undefined" && /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__avatar")
  }, avatar), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__content")
  }, header, messages, footer));
};
process.env.NODE_ENV !== "production" ? MessageGroup.propTypes = {
  /** Direction. */
  direction: PropTypes.oneOf(["incoming", "outgoing", 0, 1]),
  /** Avatar position. */
  avatarPosition: PropTypes.oneOf(["tl", "tr", "br", "bl", "cl", "cr"]),
  sentTime: PropTypes.string,
  sender: PropTypes.string,
  /**
   * Primary content.
   * Allowed nodes:
   *
   * * &lt;Avatar /&gt;
   * * &lt;MessageGroup.Header /&gt;
   * * &lt;MessageGroup.Footer /&gt;
   * * &lt;MessageGroup.Messages /&gt;
   * </ul>
   */
  children: allowedChildren([Avatar, MessageGroupHeader, MessageGroupFooter, MessageGroupMessages]),
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
MessageGroup.Header = MessageGroupHeader;
MessageGroup.Footer = MessageGroupFooter;
MessageGroup.Messages = MessageGroupMessages;
export default MessageGroup;