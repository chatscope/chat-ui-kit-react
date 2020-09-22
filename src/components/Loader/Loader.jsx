import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const Loader = ({ className, variant, children, ...rest }) => {
  const cName = `${prefix}-loader`;
  const textClass =
    React.Children.count(children) > 0 ? `${cName}--content` : "";
  return (
    <div
      {...rest}
      className={classNames(
        cName,
        textClass,
        { [`${cName}--variant-${variant}`]: variant !== "default" },
        className
      )}
      role="status"
    >
      {children}
    </div>
  );
};

Loader.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Loader variant */
  variant: PropTypes.oneOf(["default"]),
};

Loader.defaultProps = {
  className: undefined,
  title: undefined,
  variant: "default",
};

export default Loader;
