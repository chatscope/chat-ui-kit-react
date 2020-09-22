import React from "react";
import PropTypes from "prop-types";

export const MessageListContent = ({ className, children, ...rest }) => (
  <div {...rest} className={className}>
    {children}
  </div>
);

MessageListContent.displayName = "MessageList.Content";

MessageListContent.propTypes = {
  /** Primary content. Message elements */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageListContent;
