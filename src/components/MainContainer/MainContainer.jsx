import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const MainContainer = ({ responsive, children, className, ...rest }) => {
  const cName = `${prefix}-main-container`;

  return (
    <div
      {...rest}
      className={classNames(
        cName,
        { [`${cName}--responsive`]: responsive },
        className
      )}
    >
      {children}
    </div>
  );
};

MainContainer.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Is container responsive. */
  responsive: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

MainContainer.defaultProps = {
  children: undefined,
  responsive: false,
};

export default MainContainer;
