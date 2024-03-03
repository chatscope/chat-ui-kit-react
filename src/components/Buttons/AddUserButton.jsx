import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";

export const AddUserButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--adduser`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FontAwesomeIcon icon={faUserPlus} />}
    >
      {children}
    </Button>
  );
};

AddUserButton.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default AddUserButton;
