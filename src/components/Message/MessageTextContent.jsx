import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageTextContent = ({ text, className, children }) => {
  const cName = `${prefix}-message__text-content`;

  const content = children ?? text;

  return <div className={classNames(cName, className)}>{content}</div>;
};

MessageTextContent.displayName = "Message.TextContent";

MessageTextContent.propTypes = {
  /** Primary content - message text */
  children: PropTypes.string,

  /** Message text. Property has precedence over children */
  text: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageTextContent;
