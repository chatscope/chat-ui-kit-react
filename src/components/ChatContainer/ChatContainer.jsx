import React from "react";
import { allowedChildren, getChildren } from "../utils";
import ConversationHeader from "../ConversationHeader";
import MessageList from "../MessageList";
import MessageInput from "../MessageInput";
import InputToolbox from "../InputToolbox";
import classNames from "classnames";
import { prefix } from "../settings";
import PropTypes from "prop-types";

export const ChatContainer = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-chat-container`;

  const [
    header,
    messageList,
    messageInput,
    inputToolbox,
  ] = getChildren(children, [
    ConversationHeader,
    MessageList,
    MessageInput,
    InputToolbox,
  ]);

  return (
    <div {...rest} className={classNames(cName, className)}>
      {header}
      {messageList}
      {messageInput}
      {inputToolbox}
    </div>
  );
};

ChatContainer.propTypes = {
  /**
   * Primary content.
   * Allowed elements:
   *
   * * &lt;ConversationHeader /&gt;
   * * &lt;MessageList /&gt;
   * * &lt;MessageInput /&gt;
   * * &lt;InputToolbox /&gt;
   */
  children: allowedChildren([
    ConversationHeader,
    MessageList,
    MessageInput,
    InputToolbox,
  ]),

  /** Additional classes. */
  className: PropTypes.string,
};

export default ChatContainer;
