import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var MessageCustomContent = function MessageCustomContent(_ref) {
  var children = _ref.children,
    className = _ref.className;
  var cName = "".concat(prefix, "-message__custom-content");
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cName, className)
  }, children);
};
MessageCustomContent.displayName = "Message.CustomContent";
process.env.NODE_ENV !== "production" ? MessageCustomContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageCustomContent;