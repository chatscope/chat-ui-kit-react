"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _excluded = ["children", "className", "icon", "border", "labelPosition"];
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
var Button = (exports.Button = function Button(_ref) {
  var children = _ref.children,
    className = _ref.className,
    icon = _ref.icon,
    border = _ref.border,
    labelPosition = _ref.labelPosition,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-button");
  var lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  var labelPositionClassName =
    _react["default"].Children.count(children) > 0
      ? "".concat(cName, "--").concat(lPos)
      : "";
  var borderClassName = border === true ? "".concat(cName, "--border") : "";
  return /*#__PURE__*/ _react["default"].createElement(
    "button",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        cName,
        labelPositionClassName,
        borderClassName,
        className
      ),
    }),
    lPos === "left" && children,
    icon,
    lPos === "right" && children
  );
});
process.env.NODE_ENV !== "production"
  ? (Button.propTypes = {
      /** Primary content */
      children: _propTypes["default"].node,
      /** Additional classes. */
      className: _propTypes["default"].string,
      icon: _propTypes["default"].node,
      labelPosition: _propTypes["default"].oneOf(["left", "right"]),
      border: _propTypes["default"].bool,
    })
  : void 0;
Button.defaultProps = {
  children: undefined,
  className: "",
  icon: undefined,
  labelPosition: undefined,
  border: false,
};
var _default = (exports["default"] = Button);
