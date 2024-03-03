import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const InputToolbox = ({ className, children, ...rest }) => {
  const cName = `${prefix}-input-toolbox`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {children}
    </div>
  );
};

InputToolbox.displayName = "InputToolbox";

InputToolbox.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default InputToolbox;
