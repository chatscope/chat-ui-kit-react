var _excluded = [
  "model",
  "avatarSpacer",
  "avatarPosition",
  "type",
  "payload",
  "children",
  "className",
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
import classNames from "classnames";
import { allowedChildren, getChildren, getComponentName } from "../utils";
import { prefix } from "../settings";
import Avatar from "../Avatar";
import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";
import MessageCustomContent from "./MessageCustomContent";
import MessageImageContent from "./MessageImageContent";
import MessageHtmlContent from "./MessageHtmlContent";
import MessageTextContent from "./MessageTextContent";

/**
 * Chat message
 */
export var Message = function Message(_ref) {
  var _ref2, _ref3;
  var _ref$model = _ref.model,
    message = _ref$model.message,
    sentTime = _ref$model.sentTime,
    sender = _ref$model.sender,
    direction = _ref$model.direction,
    position = _ref$model.position,
    modelType = _ref$model.type,
    modelPayload = _ref$model.payload,
    avatarSpacer = _ref.avatarSpacer,
    avatarPosition = _ref.avatarPosition,
    type = _ref.type,
    argPayload = _ref.payload,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message");
  var _getChildren = getChildren(children, [
      Avatar,
      MessageHeader,
      MessageFooter,
      MessageHtmlContent,
      MessageTextContent,
      MessageImageContent,
      MessageCustomContent,
    ]),
    _getChildren2 = _slicedToArray(_getChildren, 7),
    avatar = _getChildren2[0],
    header = _getChildren2[1],
    footer = _getChildren2[2],
    htmlContent = _getChildren2[3],
    textContent = _getChildren2[4],
    imageContent = _getChildren2[5],
    customContent = _getChildren2[6];
  var directionClass = (function () {
    if (direction === 0 || direction === "incoming") {
      return "".concat(cName, "--incoming");
    } else if (direction === 1 || direction === "outgoing") {
      return "".concat(cName, "--outgoing");
    }
  })();
  var avatarPositionClass = (function (position) {
    var classPrefix = "".concat(cName, "--avatar-");
    if (position === 0 || position === "top-left" || position === "tl") {
      return "".concat(classPrefix, "tl");
    } else if (
      position === 1 ||
      position === "top-right" ||
      position === "tr"
    ) {
      return "".concat(classPrefix, "tr");
    } else if (
      position === 2 ||
      position === "bottom-right" ||
      position === "br"
    ) {
      return "".concat(classPrefix, "br");
    } else if (
      position === 3 ||
      position === "bottom-left" ||
      position === "bl"
    ) {
      return "".concat(classPrefix, "bl");
    } else if (
      position === 4 ||
      position === "center-left" ||
      position === "cl"
    ) {
      return "".concat(classPrefix, "cl");
    } else if (
      position === 5 ||
      position === "center-right" ||
      position === "cr"
    ) {
      return "".concat(classPrefix, "cr");
    }
  })(avatarPosition);
  var positionClass = (function (position) {
    var classPrefix = "".concat(prefix, "-message--");
    if (position === "single" || position === 0) {
      return "".concat(classPrefix, "single");
    } else if (position === "first" || position === 1) {
      return "".concat(classPrefix, "first");
    } else if (position === "normal" || position === 2) {
      return "";
    } else if (position === "last" || position === 3) {
      return "".concat(classPrefix, "last");
    }
  })(position);
  var ariaLabel = (function () {
    if (
      (sender === null || sender === void 0 ? void 0 : sender.length) > 0 &&
      (sentTime === null || sentTime === void 0 ? void 0 : sentTime.length) > 0
    ) {
      return "".concat(sender, ": ").concat(sentTime);
    } else if (
      (sender === null || sender === void 0 ? void 0 : sender.length) > 0 &&
      (typeof sentTime === "undefined" ||
        (sentTime === null || sentTime === void 0
          ? void 0
          : sentTime.length) === 0)
    ) {
      return sender;
    } else {
      return null;
    }
  })();
  var childContent =
    (_ref2 =
      (_ref3 =
        htmlContent !== null && htmlContent !== void 0
          ? htmlContent
          : textContent) !== null && _ref3 !== void 0
        ? _ref3
        : imageContent) !== null && _ref2 !== void 0
      ? _ref2
      : customContent;
  var messageContent =
    childContent !== null && childContent !== void 0
      ? childContent
      : (function () {
          var messageType =
            modelType !== null && modelType !== void 0 ? modelType : type;
          var payloadFromModel =
            modelPayload !== null && modelPayload !== void 0
              ? modelPayload
              : message;
          var payload =
            payloadFromModel !== null && payloadFromModel !== void 0
              ? payloadFromModel
              : argPayload;
          var payloadName =
            _typeof(payload) === "object" ? getComponentName(payload) : "";
          if (
            messageType === "html" &&
            payloadName !== "Message.CustomContent"
          ) {
            return /*#__PURE__*/ React.createElement(MessageHtmlContent, {
              html: payload,
            });
          } else if (messageType === "text") {
            return /*#__PURE__*/ React.createElement(MessageTextContent, {
              text: payload,
            });
          } else if (messageType === "image") {
            return /*#__PURE__*/ React.createElement(
              MessageImageContent,
              payload
            );
          } else if (
            messageType === "custom" ||
            payloadName === "Message.CustomContent"
          ) {
            return payload;
          }
        })();
  return /*#__PURE__*/ React.createElement(
    "section",
    _extends(
      {},
      rest,
      {
        "aria-label": ariaLabel,
        className: classNames(
          cName,
          directionClass,
          _defineProperty(
            {},
            "".concat(cName, "--avatar-spacer"),
            avatarSpacer
          ),
          positionClass,
          avatarPositionClass,
          className
        ),
      },
      _defineProperty({}, "data-".concat(prefix, "-message"), "")
    ),
    typeof avatar !== "undefined" &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__avatar"),
        },
        avatar
      ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__content-wrapper"),
      },
      header,
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__content"),
        },
        messageContent
      ),
      footer
    )
  );
};
process.env.NODE_ENV !== "production"
  ? (Message.propTypes = {
      /**
       * Model object
       * **message**: string - Message to send
       * **sentTime**: string - Message sent time
       * **sender**: string - Sender name
       * **direction**: "incoming" | "outgoing" | 0 | 1 - Message direction
       * **position**: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3 - Message position in feed
       * **type**: "html" | "text" | "image" | "custom"
       */
      model: PropTypes.shape({
        /** Chat message to display - content. */
        message: PropTypes.string,
        sentTime: PropTypes.string,
        sender: PropTypes.string,
        direction: PropTypes.oneOf(["incoming", "outgoing", 0, 1]),
        /** Position. */
        position: PropTypes.oneOf([
          "single",
          "first",
          "normal",
          "last",
          0,
          1,
          2,
          3,
        ]),
        /**
         * Message type
         * This property can also be added directly to component, but property from model has precedence.
         * Each type can have payload defined in model.payload or in payload property.
         * Allowed payloads for different message are described in payload property.
         */
        type: PropTypes.oneOf(["html", "text", "image", "custom"]),
        /**
         * Message payload.
         * Must be adequate to message type.
         * Allowed payloads for different message types:
         * html: String - Html string to render,
         * text: String - Text to render,
         * image: Object - for object properties please see **&lt;Message.ImageContent /&gt** properties,
         * custom: **Message.CustomContent** - Component
         */
        payload: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.object,
          allowedChildren([MessageCustomContent]),
        ]),
      }),
      avatarSpacer: PropTypes.bool,
      avatarPosition: PropTypes.oneOf([
        "tl",
        "tr",
        "cl",
        "cr",
        "bl",
        "br",
        "top-left",
        "top-right",
        "center-left",
        "center-right",
        "bottom-left",
        "bottom-right",
      ]),
      /**
       * Primary content.
       * Content from payload has precedence over Message.*Content properties.
       * Whe
       * Allowed components:
       *
       * * &lt;Avatar /&gt;
       * * &lt;Message.Header /&gt;
       * * &lt;Message.Footer /&gt;
       * * &lt;Message.HtmlContent /&gt;
       * * &lt;Message.TextContent /&gt;
       * * &lt;Message.ImageContent /&gt;
       * * &lt;Message.CustomContent /&gt;
       */
      children: allowedChildren([
        Avatar,
        MessageHeader,
        MessageFooter,
        MessageHtmlContent,
        MessageTextContent,
        MessageImageContent,
        MessageCustomContent,
      ]),
      /** Additional classes. */
      className: PropTypes.string,
      /**
       * Message type
       * This property can also exists in model. In that case value from model has precedence.
       **/
      type: PropTypes.oneOf(["html", "text", "image", "custom"]),
      /**
       * Message payload.
       * Must be adequate to message type.
       * Allowed payloads for different message types:
       * html: String - Html string to render,
       * text: String - Text to render,
       * image: Object - for object properties please see **&lt;Message.ImageContent &gt/>** properties,
       * custom: **Message.CustomContent** - Component
       */
      payload: PropTypes.oneOfType([
        PropTypes.string,
        allowedChildren([MessageCustomContent]),
      ]),
    })
  : void 0;
Message.defaultProps = {
  model: {
    message: "",
    sentTime: "",
    sender: "",
    direction: 1,
  },
  avatarSpacer: false,
  avatarPosition: undefined,
  type: "html",
};
Message.Header = MessageHeader;
Message.HtmlContent = MessageHtmlContent;
Message.TextContent = MessageTextContent;
Message.ImageContent = MessageImageContent;
Message.CustomContent = MessageCustomContent;
Message.Footer = MessageFooter;
export default Message;
