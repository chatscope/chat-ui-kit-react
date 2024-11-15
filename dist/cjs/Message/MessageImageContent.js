"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MessageImageContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MessageImageContent = exports.MessageImageContent = function MessageImageContent(_ref) {
  var src = _ref.src,
    width = _ref.width,
    height = _ref.height,
    alt = _ref.alt,
    className = _ref.className;
  var cName = "".concat(_settings.prefix, "-message__image-content");
  var style = {
    width: typeof width === "number" ? "".concat(width, "px") : typeof width === "string" ? width : undefined,
    height: typeof height === "number" ? "".concat(height, "px") : typeof height === "string" ? height : undefined
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(cName, className)
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    style: style,
    alt: alt
  }));
};
MessageImageContent.displayName = "Message.ImageContent";
process.env.NODE_ENV !== "production" ? MessageImageContent.propTypes = {
  /** Image source*/
  src: _propTypes["default"].string,
  /** Image width */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  /** Image height */
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  /** Alternate text for image */
  alt: _propTypes["default"].string,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = MessageImageContent;