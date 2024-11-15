import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var MessageImageContent = function MessageImageContent(_ref) {
  var src = _ref.src,
    width = _ref.width,
    height = _ref.height,
    alt = _ref.alt,
    className = _ref.className;
  var cName = "".concat(prefix, "-message__image-content");
  var style = {
    width: typeof width === "number" ? "".concat(width, "px") : typeof width === "string" ? width : undefined,
    height: typeof height === "number" ? "".concat(height, "px") : typeof height === "string" ? height : undefined
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(cName, className)
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    style: style,
    alt: alt
  }));
};
MessageImageContent.displayName = "Message.ImageContent";
process.env.NODE_ENV !== "production" ? MessageImageContent.propTypes = {
  /** Image source*/
  src: PropTypes.string,
  /** Image width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Image height */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Alternate text for image */
  alt: PropTypes.string,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageImageContent;