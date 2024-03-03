import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageCustomContent = ({ children, className }) => {
  const cName = `${prefix}-message__custom-content`;

  return <div className={classNames(cName, className)}>{children}</div>;
};

MessageCustomContent.displayName = "Message.CustomContent";

MessageCustomContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageCustomContent;
