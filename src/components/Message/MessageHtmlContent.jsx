import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageHtmlContent = ({ html, className }) => {
  const cName = `${prefix}-message__html-content`;

  const createMarkup = () => ({ __html: html });

  return (
    <div
      className={classNames(cName, className)}
      dangerouslySetInnerHTML={createMarkup()}
    />
  );
};

MessageHtmlContent.displayName = "Message.HtmlContent";

MessageHtmlContent.propTypes = {
  /**
   * Html string will be rendered in component using dangerouslySetInnerHTML
   */
  html: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageHtmlContent;
