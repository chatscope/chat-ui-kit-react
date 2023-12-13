"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.AvatarGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _settings = require("../settings");
var _classnames = _interopRequireDefault(require("classnames"));
var _Avatar = _interopRequireDefault(require("../Avatar"));
var _excluded = [
  "children",
  "size",
  "className",
  "max",
  "activeIndex",
  "hoverToFront",
];
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
var AvatarGroup = (exports.AvatarGroup = function AvatarGroup(_ref) {
  var children = _ref.children,
    size = _ref.size,
    className = _ref.className,
    max = _ref.max,
    activeIndex = _ref.activeIndex,
    hoverToFront = _ref.hoverToFront,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-avatar-group");

  // Reverse because of css
  var avatars =
    typeof max === "number" && _react["default"].Children.count(children) > max
      ? _react["default"].Children.toArray(children).reverse().slice(0, max)
      : _react["default"].Children.toArray(children).reverse();
  var reversedActiveIndex =
    typeof activeIndex === "number"
      ? avatars.length - activeIndex - 1
      : undefined;
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        cName,
        "".concat(cName, "--").concat(size),
        className
      ),
    }),
    avatars.map(function (a, i) {
      var newProps =
        typeof reversedActiveIndex === "number"
          ? {
              active: reversedActiveIndex === i,
            }
          : {};
      if (hoverToFront === true) {
        newProps.className = (0, _classnames["default"])(
          "".concat(_settings.prefix, "-avatar--active-on-hover"),
          a.props.className
        );
      }
      return /*#__PURE__*/ _react["default"].cloneElement(a, newProps);
    })
  );
});
AvatarGroup.displayName = "AvatarGroup";
process.env.NODE_ENV !== "production"
  ? (AvatarGroup.propTypes = {
      /**
       * Primary content.
       * Allowed node:
       *
       * * &lt;Avatar /&gt;
       */
      children: (0, _utils.allowedChildren)([_Avatar["default"]]),
      /** Additional classes. */
      className: _propTypes["default"].string,
      /** Maximum stacked children */
      max: _propTypes["default"].number,
      /** Size */
      size: _propTypes["default"].oneOf(["xs", "sm", "md", "lg", "fluid"]),
      /** Active index.
       * Active element has higher z-index independent of its order.
       */
      activeIndex: _propTypes["default"].number,
      /** Bring to front on hover */
      hoverToFront: _propTypes["default"].bool,
    })
  : void 0;
AvatarGroup.defaultProps = {
  size: "md",
};
var _default = (exports["default"] = AvatarGroup);
