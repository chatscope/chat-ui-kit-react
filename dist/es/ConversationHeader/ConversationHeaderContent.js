var _excluded = ["userName", "info", "children", "className"];
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
export var ConversationHeaderContent = function ConversationHeaderContent(
  _ref
) {
  var userName = _ref.userName,
    info = _ref.info,
    children = _ref.children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-header__content");
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(cName, className),
    }),
    typeof children !== "undefined"
      ? children
      : /*#__PURE__*/ React.createElement(
          React.Fragment,
          null,
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "".concat(prefix, "-conversation-header__user-name"),
            },
            userName
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "".concat(prefix, "-conversation-header__info"),
            },
            info
          )
        )
  );
};
ConversationHeaderContent.displayName = "ConversationHeader.Content";
process.env.NODE_ENV !== "production"
  ? (ConversationHeaderContent.propTypes = {
      /** Primary content. Has precedence over userName and info properties. */
      children: PropTypes.node,
      userName: PropTypes.node,
      info: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
ConversationHeaderContent.defaultProps = {
  children: undefined,
  userName: "",
  info: "",
};
export default ConversationHeaderContent;
