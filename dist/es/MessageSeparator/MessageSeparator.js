var _excluded = ["content", "as", "children", "className"];
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
import classNames from "classnames";
import { prefix } from "../settings";
import { isChildrenNil } from "../utils";
export var MessageSeparator = function MessageSeparator(_ref) {
  var content = _ref.content,
    as = _ref.as,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message-separator");
  var Tag = (function () {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return MessageSeparator.defaultProps.as;
    }
  })();
  return /*#__PURE__*/ React.createElement(
    Tag,
    _extends({}, rest, {
      className: classNames(cName, className),
    }),
    isChildrenNil(children) === true ? content : children
  );
};
process.env.NODE_ENV !== "production"
  ? (MessageSeparator.propTypes = {
      /** Primary content. */
      children: PropTypes.node,
      /** Shorthand for primary content. */
      content: PropTypes.node,
      /** An element type to render as. */
      as: PropTypes.elementType,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
MessageSeparator.defaultProps = {
  children: undefined,
  content: undefined,
  as: "div",
};
export default MessageSeparator;
