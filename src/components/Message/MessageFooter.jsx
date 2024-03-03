import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { prefix } from "../settings";

export const MessageFooter = ({
  sender = "",
  sentTime = "",
  children = undefined,
  className,
  ...rest
}) => {
  const cName = `${prefix}-message__footer`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {typeof children !== "undefined" ? (
        children
      ) : (
        <>
          <div className={`${prefix}-message__sender-name`}>{sender}</div>
          <div className={`${prefix}-message__sent-time`}>{sentTime}</div>
        </>
      )}
    </div>
  );
};

MessageFooter.displayName = "Message.Footer";

MessageFooter.propTypes = {
  sender: PropTypes.string,
  sentTime: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageFooter;
