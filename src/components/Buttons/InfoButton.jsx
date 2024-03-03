import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

export const InfoButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--info`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FontAwesomeIcon icon={faInfoCircle} />}
    >
      {children}
    </Button>
  );
};

InfoButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default InfoButton;
