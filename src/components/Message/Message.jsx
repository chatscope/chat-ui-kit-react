import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import Avatar from "../Avatar";
import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";

/**
 * Chat message
 */
export const Message = ({
  model: { message, sentTime, sender, direction, position },
  avatarSpacer,
  avatarPosition,
  children,
  className,
  ...rest
}) => {
  const cName = `${prefix}-message`;
  const createMarkup = () => ({ __html: message });

  const [avatar, header, footer] = getChildren(children, [
    Avatar,
    MessageHeader,
    MessageFooter,
  ]);

  const directionClass = (() => {
    if (direction === 0 || direction === "incoming") {
      return `${cName}--incoming`;
    } else if (direction === 1 || direction === "outgoing") {
      return `${cName}--outgoing`;
    }
  })();

  const avatarPositionClass = ((position) => {
    const classPrefix = `${cName}--avatar-`;
    if (position === 0 || position === "top-left" || position === "tl") {
      return `${classPrefix}tl`;
    } else if (
      position === 1 ||
      position === "top-right" ||
      position === "tr"
    ) {
      return `${classPrefix}tr`;
    } else if (
      position === 2 ||
      position === "bottom-right" ||
      position === "br"
    ) {
      return `${classPrefix}br`;
    } else if (
      position === 3 ||
      position === "bottom-left" ||
      position === "bl"
    ) {
      return `${classPrefix}bl`;
    } else if (
      position === 4 ||
      position === "center-left" ||
      position === "cl"
    ) {
      return `${classPrefix}cl`;
    } else if (
      position === 5 ||
      position === "center-right" ||
      position === "cr"
    ) {
      return `${classPrefix}cr`;
    }
  })(avatarPosition);

  const positionClass = ((position) => {
    const classPrefix = `${prefix}-message--`;
    if (position === "single" || position === 0) {
      return `${classPrefix}single`;
    } else if (position === "first" || position === 1) {
      return `${classPrefix}first`;
    } else if (position === "normal" || position === 2) {
      return "";
    } else if (position === "last" || position === 3) {
      return `${classPrefix}last`;
    }
  })(position);

  const ariaLabel = (() => {
    if (sender?.length > 0 && sentTime?.length > 0) {
      return `${sender}: ${sentTime}`;
    } else if (
      sender?.length > 0 &&
      (typeof sentTime === "undefined" || sentTime?.length === 0)
    ) {
      return sender;
    } else {
      return null;
    }
  })();

  return (
    <section
      {...rest}
      aria-label={ariaLabel}
      className={classNames(
        cName,
        directionClass,
        { [`${cName}--avatar-spacer`]: avatarSpacer },
        positionClass,
        avatarPositionClass,
        className
      )}
      {...{ [`data-${prefix}-message`]: "" }}
    >
      {typeof avatar !== "undefined" && (
        <div className={`${cName}__avatar`}>{avatar}</div>
      )}
      <div className={`${cName}__content-wrapper`}>
        {header}
        <div
          className={`${cName}__content`}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        {footer}
      </div>
    </section>
  );
};

Message.propTypes = {
  /**
   * Model object
   * **message:** string - Message to send
   * **sentTime**: string - Message sent time
   * **sender**: string - Sender name
   * **direction**: "incoming" | "outgoing" | 0 | 1 - Message direction
   * **position**: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3 - Message position in feed
   */
  model: PropTypes.shape({
    /** Chat message to display - content. */
    message: PropTypes.string,
    sentTime: PropTypes.string,
    sender: PropTypes.string,
    direction: PropTypes.oneOf(["incoming", "outgoing", 0, 1]),

    /** Position. */
    position: PropTypes.oneOf([
      "single",
      "first",
      "normal",
      "last",
      0,
      1,
      2,
      3,
    ]),
  }),
  avatarSpacer: PropTypes.bool,
  avatarPosition: PropTypes.oneOf([
    "tl",
    "tr",
    "cl",
    "cr",
    "bl",
    "br",
    "top-left",
    "top-right",
    "center-left",
    "center-right",
    "bottom-left",
    "bottom-right",
  ]),

  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Avatar /&gt;
   * * &lt;Message.Header /&gt;
   * * &lt;Message.Footer /&gt;
   */
  children: allowedChildren(
    [Avatar, MessageHeader, MessageFooter],
    "Allowed types: Message.Header, Message.Footer"
  ),

  /** Additional classes. */
  className: PropTypes.string,
};

Message.defaultProps = {
  model: {
    message: "",
    sentTime: "",
    sender: "",
    direction: 1,
  },
  avatarSpacer: false,
  avatarPosition: undefined,
};

Message.Header = MessageHeader;
Message.Footer = MessageFooter;

export default Message;
