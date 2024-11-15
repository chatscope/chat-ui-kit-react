import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var MessageTextContent = function MessageTextContent(_ref) {
  var text = _ref.text,
    className = _ref.className,
    children = _ref.children;
  var cName = "".concat(prefix, "-message__text-content");
  var content = children !== null && children !== void 0 ? children : text;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cName, className)
  }, content);
};
MessageTextContent.displayName = "Message.TextContent";
process.env.NODE_ENV !== "production" ? MessageTextContent.propTypes = {
  /** Primary content - message text */
  children: PropTypes.string,
  /** Message text. Property has precedence over children */
  text: PropTypes.string,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageTextContent;