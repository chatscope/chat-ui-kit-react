import React from "react";
import PropTypes from "prop-types";
import { allowedChildren, getChildren } from "../utils";
import classNames from "classnames";
import cName from "./cName";
import ConversationOperations from "./ConversationOperations";
import ConversationContent from "./ConversationContent";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";

const LastActivityTime = ({ time }) => (
  <div className={`${cName}__last-activity-time`} title={time}>
    {time}
  </div>
);

const UnreadDot = () => <div className={`${cName}__unread-dot`}></div>;

export const Conversation = ({
  name = undefined,
  unreadCnt = undefined,
  lastSenderName = undefined,
  info = undefined,
  lastActivityTime = undefined,
  unreadDot = false,
  children,
  className,
  active = false,
  ...rest
}) => {
  const [avatar, avatarGroup, operations, content] = getChildren(children, [
    Avatar,
    AvatarGroup,
    ConversationOperations,
    ConversationContent,
  ]);

  return (
    <div
      {...rest}
      className={classNames(cName, { [`${cName}--active`]: active }, className)}
    >
      {avatar}
      {avatarGroup}

      {(typeof name !== "undefined" ||
        typeof lastSenderName !== "undefined" ||
        typeof info !== "undefined") && (
        <ConversationContent
          name={name}
          lastSenderName={lastSenderName}
          info={info}
        />
      )}

      {(typeof name === "undefined" || name === null) &&
        (typeof lastSenderName === "undefined" || lastSenderName === null) &&
        (typeof info === "undefined" || info === null) &&
        content}

      {lastActivityTime !== null && typeof lastActivityTime !== "undefined" && (
        <LastActivityTime time={lastActivityTime} />
      )}

      {unreadDot && <UnreadDot />}

      {operations}
      {unreadCnt !== null &&
        typeof unreadCnt !== "undefined" &&
        parseInt(unreadCnt) > 0 && (
          <div className={`${cName}__unread`} title={unreadCnt}>
            {unreadCnt}
          </div>
        )}
    </div>
  );
};

Conversation.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;Conversation.Content /&gt;
   * * &lt;Conversation.Operations /&gt;
   */
  children: allowedChildren([
    Avatar,
    AvatarGroup,
    ConversationOperations,
    ConversationContent,
  ]),

  /** First text line in &lt;Conversation.Content /&gt; contact name etc. */
  name: PropTypes.node,

  /** Unread messages quantity. */
  unreadCnt: PropTypes.number,

  /** Unread dot visible. */
  unreadDot: PropTypes.bool,

  /** Last sender in &lt;Conversation.Content /&gt; name. */
  lastSenderName: PropTypes.node,

  /** Informational message / last message in &lt;Conversation.Content /&gt;. */
  info: PropTypes.node,

  /** Last activity time. */
  lastActivityTime: PropTypes.node,

  /** Active (currently viewed) */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

Conversation.Operations = ConversationOperations;
Conversation.Content = ConversationContent;

export default Conversation;
