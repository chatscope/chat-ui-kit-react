var _excluded = ["lastSenderName", "info", "name", "children", "className"];
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
import cName from "./cName";
import classNames from "classnames";
import PropTypes from "prop-types";
var LastSenderName = function LastSenderName(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__last-sender"),
      },
      name
    ),
    ":"
  );
};
process.env.NODE_ENV !== "production"
  ? (LastSenderName.propTypes = {
      name: PropTypes.node,
    })
  : void 0;
var InfoContent = function InfoContent(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "".concat(cName, "__info-content"),
    },
    info
  );
};
process.env.NODE_ENV !== "production"
  ? (InfoContent.propTypes = {
      info: PropTypes.node,
    })
  : void 0;
export var ConversationContent = function ConversationContent(_ref3) {
  var lastSenderName = _ref3.lastSenderName,
    info = _ref3.info,
    name = _ref3.name,
    children = _ref3.children,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, _excluded);
  var typeofLastSenderName = _typeof(lastSenderName);
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames("".concat(cName, "__content"), className),
    }),
    React.Children.count(children) > 0
      ? children
      : /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "".concat(cName, "__name"),
            },
            name
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "".concat(cName, "__info"),
            },
            typeofLastSenderName !== "undefined"
              ? /*#__PURE__*/ React.createElement(
                  React.Fragment,
                  null,
                  typeofLastSenderName === "string"
                    ? /*#__PURE__*/ React.createElement(LastSenderName, {
                        name: lastSenderName,
                      })
                    : lastSenderName,
                  " "
                )
              : null,
            typeof info !== "undefined" &&
              /*#__PURE__*/ React.createElement(InfoContent, {
                info: info,
              })
          )
        )
  );
};
ConversationContent.displayName = "Conversation.Content";
process.env.NODE_ENV !== "production"
  ? (ConversationContent.propTypes = {
      /** Primary content. */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
      /** First text line - contact name etc. */
      name: PropTypes.node,
      /** Last sender name. */
      lastSenderName: PropTypes.node,
      /** Informational message / last message. */
      info: PropTypes.node,
    })
  : void 0;
ConversationContent.defaultProps = {};
export default ConversationContent;
