import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const TypingIndicator = ({ content = "", className, ...rest }) => {
  const cName = `${prefix}-typing-indicator`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      <div className={`${cName}__indicator`}>
        <div className={`${cName}__dot`}></div>
        <div className={`${cName}__dot`}></div>
        <div className={`${cName}__dot`}></div>
      </div>
      <div className={`${cName}__text`}>{content}</div>
    </div>
  );
};

TypingIndicator.propTypes = {
  /** Indicator content. */
  content: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default TypingIndicator;
