import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { prefix } from "../settings";

export const MessageGroupMessages = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-message-group`;
  return (
    <div {...rest} className={classNames(`${cName}__messages`, className)}>
      {children}
    </div>
  );
};

MessageGroupMessages.displayName = "MessageGroup.Messages";

MessageGroupMessages.propTypes = {
  /**
   * Messages.
   * Allowed node:
   *
   * * &lt;Message /&gt;
   */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageGroupMessages;
