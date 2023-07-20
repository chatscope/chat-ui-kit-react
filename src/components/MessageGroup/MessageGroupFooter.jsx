import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageGroupFooter = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-message-group__footer`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {children}
    </div>
  );
};

MessageGroupFooter.displayName = "MessageGroup.Footer";

MessageGroupFooter.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageGroupFooter;
