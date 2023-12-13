"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ConversationContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _cName = _interopRequireDefault(require("./cName"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["lastSenderName", "info", "name", "children", "className"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
var LastSenderName = function LastSenderName(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/ _react["default"].createElement(
    _react["default"].Fragment,
    null,
    /*#__PURE__*/ _react["default"].createElement(
      "div",
      {
        className: "".concat(_cName["default"], "__last-sender"),
      },
      name
    ),
    ":"
  );
};
process.env.NODE_ENV !== "production"
  ? (LastSenderName.propTypes = {
      name: _propTypes["default"].node,
    })
  : void 0;
var InfoContent = function InfoContent(_ref2) {
  var info = _ref2.info;
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: "".concat(_cName["default"], "__info-content"),
    },
    info
  );
};
process.env.NODE_ENV !== "production"
  ? (InfoContent.propTypes = {
      info: _propTypes["default"].node,
    })
  : void 0;
var ConversationContent = (exports.ConversationContent = function ConversationContent(
  _ref3
) {
  var lastSenderName = _ref3.lastSenderName,
    info = _ref3.info,
    name = _ref3.name,
    children = _ref3.children,
    className = _ref3.className,
    rest = _objectWithoutProperties(_ref3, _excluded);
  var typeofLastSenderName = _typeof(lastSenderName);
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        "".concat(_cName["default"], "__content"),
        className
      ),
    }),
    _react["default"].Children.count(children) > 0
      ? children
      : /*#__PURE__*/ _react["default"].createElement(
          _react["default"].Fragment,
          null,
          /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "".concat(_cName["default"], "__name"),
            },
            name
          ),
          /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "".concat(_cName["default"], "__info"),
            },
            typeofLastSenderName !== "undefined"
              ? /*#__PURE__*/ _react["default"].createElement(
                  _react["default"].Fragment,
                  null,
                  typeofLastSenderName === "string"
                    ? /*#__PURE__*/ _react["default"].createElement(
                        LastSenderName,
                        {
                          name: lastSenderName,
                        }
                      )
                    : lastSenderName,
                  " "
                )
              : null,
            typeof info !== "undefined" &&
              /*#__PURE__*/ _react["default"].createElement(InfoContent, {
                info: info,
              })
          )
        )
  );
});
ConversationContent.displayName = "Conversation.Content";
process.env.NODE_ENV !== "production"
  ? (ConversationContent.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,
      /** Additional classes. */
      className: _propTypes["default"].string,
      /** First text line - contact name etc. */
      name: _propTypes["default"].node,
      /** Last sender name. */
      lastSenderName: _propTypes["default"].node,
      /** Informational message / last message. */
      info: _propTypes["default"].node,
    })
  : void 0;
ConversationContent.defaultProps = {};
var _default = (exports["default"] = ConversationContent);
