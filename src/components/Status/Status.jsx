import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { StatusEnum, SizeEnum } from "../enums";
import { prefix } from "../settings";

export const Status = ({
  status,
  size = "md",
  className,
  name,
  selected,
  children,
  ...rest
}) => {
  const cName = `${prefix}-status`;
  const bullet = <div className={`${cName}__bullet`}></div>;
  const named = name || children;

  return (
    <div
      {...rest}
      aria-selected={selected === true ? "" : null}
      className={classNames(
        cName,
        `${cName}--${size}`,
        `${cName}--${status}`,
        { [`${cName}--selected`]: selected },
        { [`${cName}--named`]: named },
        className
      )}
    >
      {bullet}
      {named && (
        <div className={`${cName}__name`}>{name ? name : children}</div>
      )}
    </div>
  );
};

Status.propTypes = {
  /** Primary content */
  children: PropTypes.node,

  /** Status. */
  status: PropTypes.oneOf(StatusEnum).isRequired,

  /** Size. */
  size: PropTypes.oneOf(SizeEnum),

  /** Name */
  name: PropTypes.node,

  /** Selected */
  selected: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

export default Status;
