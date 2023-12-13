var _excluded = [
  "children",
  "size",
  "className",
  "max",
  "activeIndex",
  "hoverToFront",
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
import { allowedChildren } from "../utils";
import { prefix } from "../settings";
import classNames from "classnames";
import Avatar from "../Avatar";
export var AvatarGroup = function AvatarGroup(_ref) {
  var children = _ref.children,
    size = _ref.size,
    className = _ref.className,
    max = _ref.max,
    activeIndex = _ref.activeIndex,
    hoverToFront = _ref.hoverToFront,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-avatar-group");

  // Reverse because of css
  var avatars =
    typeof max === "number" && React.Children.count(children) > max
      ? React.Children.toArray(children).reverse().slice(0, max)
      : React.Children.toArray(children).reverse();
  var reversedActiveIndex =
    typeof activeIndex === "number"
      ? avatars.length - activeIndex - 1
      : undefined;
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
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
        newProps.className = classNames(
          "".concat(prefix, "-avatar--active-on-hover"),
          a.props.className
        );
      }
      return /*#__PURE__*/ React.cloneElement(a, newProps);
    })
  );
};
AvatarGroup.displayName = "AvatarGroup";
process.env.NODE_ENV !== "production"
  ? (AvatarGroup.propTypes = {
      /**
       * Primary content.
       * Allowed node:
       *
       * * &lt;Avatar /&gt;
       */
      children: allowedChildren([Avatar]),
      /** Additional classes. */
      className: PropTypes.string,
      /** Maximum stacked children */
      max: PropTypes.number,
      /** Size */
      size: PropTypes.oneOf(["xs", "sm", "md", "lg", "fluid"]),
      /** Active index.
       * Active element has higher z-index independent of its order.
       */
      activeIndex: PropTypes.number,
      /** Bring to front on hover */
      hoverToFront: PropTypes.bool,
    })
  : void 0;
AvatarGroup.defaultProps = {
  size: "md",
};
export default AvatarGroup;
