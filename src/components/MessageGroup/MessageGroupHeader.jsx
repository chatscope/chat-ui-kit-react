import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageGroupHeader = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-message-group__header`;
  return (
    <div {...rest} className={classNames(cName, className)}>
      {children}
    </div>
  );
};

MessageGroupHeader.displayName = "MessageGroup.Header";

MessageGroupHeader.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageGroupHeader;
