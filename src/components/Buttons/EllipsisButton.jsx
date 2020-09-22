import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export const EllipsisButton = ({
  className,
  orientation,
  children,
  ...rest
}) => {
  const cName = `${prefix}-button--ellipsis`;

  const icon = orientation === "vertical" ? faEllipsisV : faEllipsisH;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      {children}
    </Button>
  );
};

EllipsisButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

EllipsisButton.defaultProps = {
  className: "",
  orientation: "horizontal",
};

export default EllipsisButton;
