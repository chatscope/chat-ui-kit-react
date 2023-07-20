import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MessageImageContent = ({ src, width, height, alt, className }) => {
  const cName = `${prefix}-message__image-content`;

  const style = {
    width:
      typeof width === "number"
        ? `${width}px`
        : typeof width === "string"
        ? width
        : undefined,
    height:
      typeof height === "number"
        ? `${height}px`
        : typeof height === "string"
        ? height
        : undefined,
  };

  return (
    <div className={classNames(cName, className)}>
      <img src={src} style={style} alt={alt} />
    </div>
  );
};

MessageImageContent.displayName = "Message.ImageContent";

MessageImageContent.propTypes = {
  /** Image source*/
  src: PropTypes.string,

  /** Image width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Image height */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Alternate text for image */
  alt: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageImageContent;
