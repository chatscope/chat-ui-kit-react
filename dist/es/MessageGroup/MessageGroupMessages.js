var _excluded = ["children", "className"];
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
export var MessageGroupMessages = function MessageGroupMessages(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message-group");
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames("".concat(cName, "__messages"), className),
    }),
    children
  );
};
MessageGroupMessages.displayName = "MessageGroup.Messages";
process.env.NODE_ENV !== "production"
  ? (MessageGroupMessages.propTypes = {
      /**
       * Messages.
       * Allowed node:
       *
       * * &lt;Message /&gt;
       */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
MessageGroupMessages.defaultProps = {
  children: undefined,
};
export default MessageGroupMessages;
