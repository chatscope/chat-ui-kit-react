import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren, getComponentName } from "../utils";
import { prefix } from "../settings";
import Avatar from "../Avatar";
import MessageHeader from "./MessageHeader";
import MessageFooter from "./MessageFooter";
import MessageCustomContent from "./MessageCustomContent";
import MessageImageContent from "./MessageImageContent";
import MessageHtmlContent from "./MessageHtmlContent";
import MessageTextContent from "./MessageTextContent";

/**
 * Chat message
 */
export const Message = ({
  model: {
    message = "",
    sentTime = "",
    sender = "",
    direction = 1,
    position,
    type: modelType,
    payload: modelPayload,
  },
  avatarSpacer = false,
  avatarPosition = undefined,
  type = "html",
  payload: argPayload,
  children,
  className,
  ...rest
}) => {
  const cName = `${prefix}-message`;

  const [
    avatar,
    header,
    footer,
    htmlContent,
    textContent,
    imageContent,
    customContent,
  ] = getChildren(children, [
    Avatar,
    MessageHeader,
    MessageFooter,
    MessageHtmlContent,
    MessageTextContent,
    MessageImageContent,
    MessageCustomContent,
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

  const childContent =
    htmlContent ?? textContent ?? imageContent ?? customContent;

  const messageContent =
    childContent ??
    (() => {
      const messageType = modelType ?? type;

      const payloadFromModel = modelPayload ?? message;
      const payload = payloadFromModel ?? argPayload;

      const payloadName =
        typeof payload === "object" ? getComponentName(payload) : "";

      if (messageType === "html" && payloadName !== "Message.CustomContent") {
        return <MessageHtmlContent html={payload} />;
      } else if (messageType === "text") {
        return <MessageTextContent text={payload} />;
      } else if (messageType === "image") {
        return <MessageImageContent {...payload} />;
      } else if (
        messageType === "custom" ||
        payloadName === "Message.CustomContent"
      ) {
        return payload;
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
        <div className={`${cName}__content`}>{messageContent}</div>
        {footer}
      </div>
    </section>
  );
};

Message.propTypes = {
  /**
   * Model object
   * **message**: string - Message to send
   * **sentTime**: string - Message sent time
   * **sender**: string - Sender name
   * **direction**: "incoming" | "outgoing" | 0 | 1 - Message direction
   * **position**: "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3 - Message position in feed
   * **type**: "html" | "text" | "image" | "custom"
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

    /**
     * Message type
     * This property can also be added directly to component, but property from model has precedence.
     * Each type can have payload defined in model.payload or in payload property.
     * Allowed payloads for different message are described in payload property.
     */
    type: PropTypes.oneOf(["html", "text", "image", "custom"]),

    /**
     * Message payload.
     * Must be adequate to message type.
     * Allowed payloads for different message types:
     * html: String - Html string to render,
     * text: String - Text to render,
     * image: Object - for object properties please see **&lt;Message.ImageContent /&gt** properties,
     * custom: **Message.CustomContent** - Component
     */
    payload: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      allowedChildren([MessageCustomContent]),
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
   * Content from payload has precedence over Message.*Content properties.
   * Whe
   * Allowed components:
   *
   * * &lt;Avatar /&gt;
   * * &lt;Message.Header /&gt;
   * * &lt;Message.Footer /&gt;
   * * &lt;Message.HtmlContent /&gt;
   * * &lt;Message.TextContent /&gt;
   * * &lt;Message.ImageContent /&gt;
   * * &lt;Message.CustomContent /&gt;
   */
  children: allowedChildren([
    Avatar,
    MessageHeader,
    MessageFooter,
    MessageHtmlContent,
    MessageTextContent,
    MessageImageContent,
    MessageCustomContent,
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * Message type
   * This property can also exists in model. In that case value from model has precedence.
   **/
  type: PropTypes.oneOf(["html", "text", "image", "custom"]),

  /**
   * Message payload.
   * Must be adequate to message type.
   * Allowed payloads for different message types:
   * html: String - Html string to render,
   * text: String - Text to render,
   * image: Object - for object properties please see **&lt;Message.ImageContent &gt/>** properties,
   * custom: **Message.CustomContent** - Component
   */
  payload: PropTypes.oneOfType([
    PropTypes.string,
    allowedChildren([MessageCustomContent]),
  ]),
};



Message.Header = MessageHeader;
Message.HtmlContent = MessageHtmlContent;
Message.TextContent = MessageTextContent;
Message.ImageContent = MessageImageContent;
Message.CustomContent = MessageCustomContent;
Message.Footer = MessageFooter;

export default Message;
