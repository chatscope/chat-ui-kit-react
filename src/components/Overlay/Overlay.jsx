import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const Overlay = ({ className, children, blur, grayscale, ...rest }) => {
  const cName = `${prefix}-overlay`;
  const blurClass = `${cName}--blur`;
  const grayscaleClass = `${cName}--grayscale`;

  return (
    <div
      {...rest}
      className={classNames(
        cName,
        { [blurClass]: blur },
        { [grayscaleClass]: grayscale },
        className
      )}
    >
      <div className={`${cName}__content`}>{children}</div>
    </div>
  );
};

Overlay.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * Blur overlayed content.
   * This feature is experimental and have limited browser support
   */
  blur: PropTypes.bool,

  /**
   * Grayscale overlayed content.
   * This feature is experimental and have limited browser support
   */
  grayscale: PropTypes.bool,
};

Overlay.defaultProps = {
  className: "",
  children: undefined,
  blur: false,
  grayscale: false,
};

export default Overlay;
