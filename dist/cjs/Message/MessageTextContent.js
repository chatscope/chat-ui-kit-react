"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MessageTextContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MessageTextContent = exports.MessageTextContent = function MessageTextContent(_ref) {
  var text = _ref.text,
    className = _ref.className,
    children = _ref.children;
  var cName = "".concat(_settings.prefix, "-message__text-content");
  var content = children !== null && children !== void 0 ? children : text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(cName, className)
  }, content);
};
MessageTextContent.displayName = "Message.TextContent";
process.env.NODE_ENV !== "production" ? MessageTextContent.propTypes = {
  /** Primary content - message text */
  children: _propTypes["default"].string,
  /** Message text. Property has precedence over children */
  text: _propTypes["default"].string,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = MessageTextContent;