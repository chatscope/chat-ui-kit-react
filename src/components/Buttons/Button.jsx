import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const Button = ({
  children = undefined,
  className = "",
  icon = undefined,
  border = false,
  labelPosition = undefined,
  ...rest
}) => {
  const cName = `${prefix}-button`;

  const lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  const labelPositionClassName =
    React.Children.count(children) > 0 ? `${cName}--${lPos}` : "";
  const borderClassName = border === true ? `${cName}--border` : "";
  return (
    <button
      {...rest}
      className={classNames(
        cName,
        labelPositionClassName,
        borderClassName,
        className
      )}
    >
      {lPos === "left" && children}
      {icon}
      {lPos === "right" && children}
    </button>
  );
};

Button.propTypes = {
  /** Primary content */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  icon: PropTypes.node,
  labelPosition: PropTypes.oneOf(["left", "right"]),
  border: PropTypes.bool,
};

export default Button;
