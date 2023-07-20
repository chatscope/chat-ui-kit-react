import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import { isChildrenNil } from "../utils";

export const MessageSeparator = ({
  content = undefined,
  as = "div",
  children = undefined,
  className,
  ...rest
}) => {
  const cName = `${prefix}-message-separator`;

  const Tag = (() => {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return "div";
    }
  })();

  return (
    <Tag {...rest} className={classNames(cName, className)}>
      {isChildrenNil(children) === true ? content : children}
    </Tag>
  );
};

MessageSeparator.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for primary content. */
  content: PropTypes.node,

  /** An element type to render as. */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,
};

export default MessageSeparator;
