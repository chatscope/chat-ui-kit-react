"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MessageHtmlContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MessageHtmlContent = exports.MessageHtmlContent = function MessageHtmlContent(_ref) {
  var html = _ref.html,
    className = _ref.className;
  var cName = "".concat(_settings.prefix, "-message__html-content");
  var createMarkup = function createMarkup() {
    return {
      __html: html
    };
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(cName, className),
    dangerouslySetInnerHTML: createMarkup()
  });
};
MessageHtmlContent.displayName = "Message.HtmlContent";
process.env.NODE_ENV !== "production" ? MessageHtmlContent.propTypes = {
  /**
   * Html string will be rendered in component using dangerouslySetInnerHTML
   */
  html: _propTypes["default"].string,
  /** Additional classes. */
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = MessageHtmlContent;