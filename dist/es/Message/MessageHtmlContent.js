import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var MessageHtmlContent = function MessageHtmlContent(_ref) {
  var html = _ref.html,
    className = _ref.className;
  var cName = "".concat(prefix, "-message__html-content");
  var createMarkup = function createMarkup() {
    return {
      __html: html
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cName, className),
    dangerouslySetInnerHTML: createMarkup()
  });
};
MessageHtmlContent.displayName = "Message.HtmlContent";
process.env.NODE_ENV !== "production" ? MessageHtmlContent.propTypes = {
  /**
   * Html string will be rendered in component using dangerouslySetInnerHTML
   */
  html: PropTypes.string,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageHtmlContent;