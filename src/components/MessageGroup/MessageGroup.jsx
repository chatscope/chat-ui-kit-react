import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import MessageGroupHeader from "./MessageGroupHeader";
import MessageGroupFooter from "./MessageGroupFooter";
import MessageGroupMessages from "./MessageGroupMessages";
import Avatar from "../Avatar";

export const MessageGroup = ({
  direction = "incoming",
  avatarPosition = undefined,
  sender = "",
  sentTime = "",
  children,
  className,
  ...rest
}) => {
  const cName = `${prefix}-message-group`;

  const directionClass = (() => {
    if (direction === 0 || direction === "incoming") {
      return `${cName}--incoming`;
    } else if (direction === 1 || direction === "outgoing") {
      return `${cName}--outgoing`;
    }
  })();

  const avatarPositionClass = (() => {
    const prefix = `${cName}--avatar-`;
    if (typeof avatarPosition === "string") {
      if (
        avatarPosition === "tl" ||
        avatarPosition === "top-left" ||
        avatarPosition === "tr" ||
        avatarPosition === "top-right" ||
        avatarPosition === "bl" ||
        avatarPosition === "bottom-right" ||
        avatarPosition === "br" ||
        avatarPosition === "bottom-right" ||
        avatarPosition === "cl" ||
        avatarPosition === "center-left" ||
        avatarPosition === "cr" ||
        avatarPosition === "center-right"
      ) {
        return `${prefix}${avatarPosition}`;
      }
    }
  })();

  const [avatar, header, footer, messages] = getChildren(children, [
    Avatar,
    MessageGroupHeader,
    MessageGroupFooter,
    MessageGroupMessages,
  ]);

  const ariaLabel = (() => {
    if (sender.length > 0 && sentTime.length > 0) {
      return `${sender}: ${sentTime}`;
    } else if (sender.length > 0 && sentTime.length === 0) {
      return sender;
    } else {
      return null;
    }
  })();

  return (
    <section
      aria-label={ariaLabel}
      {...rest}
      className={classNames(
        cName,
        directionClass,
        avatarPositionClass,
        className
      )}
      {...{ [`data-${prefix}-message-group`]: "" }}
    >
      {typeof avatar !== "undefined" && (
        <div className={`${cName}__avatar`}>{avatar}</div>
      )}
      <div className={`${cName}__content`}>
        {header}
        {messages}
        {footer}
      </div>
    </section>
  );
};

MessageGroup.propTypes = {
  /** Direction. */
  direction: PropTypes.oneOf(["incoming", "outgoing", 0, 1]),

  /** Avatar position. */
  avatarPosition: PropTypes.oneOf(["tl", "tr", "br", "bl", "cl", "cr"]),
  sentTime: PropTypes.string,
  sender: PropTypes.string,
  /**
   * Primary content.
   * Allowed nodes:
   *
   * * &lt;Avatar /&gt;
   * * &lt;MessageGroup.Header /&gt;
   * * &lt;MessageGroup.Footer /&gt;
   * * &lt;MessageGroup.Messages /&gt;
   * </ul>
   */
  children: allowedChildren([
    Avatar,
    MessageGroupHeader,
    MessageGroupFooter,
    MessageGroupMessages,
  ]),

  /** Additional classes. */
  className: PropTypes.string,
};

MessageGroup.Header = MessageGroupHeader;
MessageGroup.Footer = MessageGroupFooter;
MessageGroup.Messages = MessageGroupMessages;

export default MessageGroup;
