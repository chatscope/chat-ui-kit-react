"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ConversationHeaderContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["userName", "info", "children", "className"];
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
var ConversationHeaderContent = (exports.ConversationHeaderContent = function ConversationHeaderContent(
  _ref
) {
  var userName = _ref.userName,
    info = _ref.info,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-conversation-header__content");
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(cName, className),
    }),
    typeof children !== "undefined"
      ? children
      : /*#__PURE__*/ _react["default"].createElement(
          _react["default"].Fragment,
          null,
          /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "".concat(
                _settings.prefix,
                "-conversation-header__user-name"
              ),
            },
            userName
          ),
          /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "".concat(
                _settings.prefix,
                "-conversation-header__info"
              ),
            },
            info
          )
        )
  );
});
ConversationHeaderContent.displayName = "ConversationHeader.Content";
process.env.NODE_ENV !== "production"
  ? (ConversationHeaderContent.propTypes = {
      /** Primary content. Has precedence over userName and info properties. */
      children: _propTypes["default"].node,
      userName: _propTypes["default"].node,
      info: _propTypes["default"].node,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
ConversationHeaderContent.defaultProps = {
  children: undefined,
  userName: "",
  info: "",
};
var _default = (exports["default"] = ConversationHeaderContent);
