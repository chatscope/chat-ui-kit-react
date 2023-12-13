function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
var _excluded = [
  "name",
  "unreadCnt",
  "lastSenderName",
  "info",
  "lastActivityTime",
  "unreadDot",
  "children",
  "className",
  "active",
];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
import React from "react";
import PropTypes from "prop-types";
import { allowedChildren, getChildren } from "../utils";
import classNames from "classnames";
import cName from "./cName";
import ConversationOperations from "./ConversationOperations";
import ConversationContent from "./ConversationContent";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";
var LastActivityTime = function LastActivityTime(_ref) {
  var time = _ref.time;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "".concat(cName, "__last-activity-time"),
      title: time,
    },
    time
  );
};
var UnreadDot = function UnreadDot() {
  return /*#__PURE__*/ React.createElement("div", {
    className: "".concat(cName, "__unread-dot"),
  });
};
export var Conversation = function Conversation(_ref2) {
  var name = _ref2.name,
    unreadCnt = _ref2.unreadCnt,
    lastSenderName = _ref2.lastSenderName,
    info = _ref2.info,
    lastActivityTime = _ref2.lastActivityTime,
    unreadDot = _ref2.unreadDot,
    children = _ref2.children,
    className = _ref2.className,
    active = _ref2.active,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _getChildren = getChildren(children, [
      Avatar,
      AvatarGroup,
      ConversationOperations,
      ConversationContent,
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 4),
    avatar = _getChildren2[0],
    avatarGroup = _getChildren2[1],
    operations = _getChildren2[2],
    content = _getChildren2[3];
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
        cName,
        _defineProperty({}, "".concat(cName, "--active"), active),
        className
      ),
    }),
    avatar,
    avatarGroup,
    (typeof name !== "undefined" ||
      typeof lastSenderName !== "undefined" ||
      typeof info !== "undefined") &&
      /*#__PURE__*/ React.createElement(ConversationContent, {
        name: name,
        lastSenderName: lastSenderName,
        info: info,
      }),
    (typeof name === "undefined" || name === null) &&
      (typeof lastSenderName === "undefined" || lastSenderName === null) &&
      (typeof info === "undefined" || info === null) &&
      content,
    lastActivityTime !== null &&
      typeof lastActivityTime !== "undefined" &&
      /*#__PURE__*/ React.createElement(LastActivityTime, {
        time: lastActivityTime,
      }),
    unreadDot && /*#__PURE__*/ React.createElement(UnreadDot, null),
    operations,
    unreadCnt !== null &&
      typeof unreadCnt !== "undefined" &&
      parseInt(unreadCnt) > 0 &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__unread"),
          title: unreadCnt,
        },
        unreadCnt
      )
  );
};
process.env.NODE_ENV !== "production"
  ? (Conversation.propTypes = {
      /**
       * Primary content.
       * Allowed node:
       *
       * * &lt;Avatar /&gt;
       * * &lt;AvatarGroup /&gt;
       * * &lt;Conversation.Content /&gt;
       * * &lt;Conversation.Operations /&gt;
       */
      children: allowedChildren([
        Avatar,
        AvatarGroup,
        ConversationOperations,
        ConversationContent,
      ]),
      /** First text line in &lt;Conversation.Content /&gt; contact name etc. */
      name: PropTypes.node,
      /** Unread messages quantity. */
      unreadCnt: PropTypes.number,
      /** Unread dot visible. */
      unreadDot: PropTypes.bool,
      /** Last sender in &lt;Conversation.Content /&gt; name. */
      lastSenderName: PropTypes.node,
      /** Informational message / last message in &lt;Conversation.Content /&gt;. */
      info: PropTypes.node,
      /** Last activity time. */
      lastActivityTime: PropTypes.node,
      /** Active (currently viewed) */
      active: PropTypes.bool,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
Conversation.defaultProps = {
  name: undefined,
  unreadCnt: undefined,
  unreadDot: false,
  lastSenderName: undefined,
  info: undefined,
  lastActivityTime: undefined,
  active: false,
};
Conversation.Operations = ConversationOperations;
Conversation.Content = ConversationContent;
export default Conversation;
