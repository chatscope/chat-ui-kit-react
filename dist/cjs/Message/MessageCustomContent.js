"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.MessageCustomContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var MessageCustomContent = (exports.MessageCustomContent = function MessageCustomContent(
  _ref
) {
  var children = _ref.children,
    className = _ref.className;
  var cName = "".concat(_settings.prefix, "-message__custom-content");
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: (0, _classnames["default"])(cName, className),
    },
    children
  );
});
MessageCustomContent.displayName = "Message.CustomContent";
process.env.NODE_ENV !== "production"
  ? (MessageCustomContent.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
MessageCustomContent.defaultProps = {};
var _default = (exports["default"] = MessageCustomContent);
