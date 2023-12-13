var _excluded = ["onClick", "children", "className"];
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
import { prefix } from "../settings";
import classNames from "classnames";
import { ArrowButton } from "../Buttons";
export var ConversationHeaderBack = function ConversationHeaderBack(_ref) {
  var onClick = _ref.onClick,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header__back");
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(cName, className),
    }),
    typeof children !== "undefined"
      ? children
      : /*#__PURE__*/ React.createElement(ArrowButton, {
          direction: "left",
          onClick: onClick,
        })
  );
};
ConversationHeaderBack.displayName = "ConversationHeader.Back";
process.env.NODE_ENV !== "production"
  ? (ConversationHeaderBack.propTypes = {
      /** OnClick handler attached to button. */
      onClick: PropTypes.func,
      /** Primary content - override default button. */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ConversationHeaderBack.defaultProps = {
  children: undefined,
  onClick: function onClick() {},
};
export default ConversationHeaderBack;
