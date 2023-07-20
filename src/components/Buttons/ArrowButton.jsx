import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

export const ArrowButton = ({ className = "", direction = "right", children, ...rest }) => {
  const cName = `${prefix}-button--arrow`;

  const icon = (() => {
    if (direction === "up") {
      return faArrowUp;
    } else if (direction === "right") {
      return faArrowRight;
    } else if (direction === "down") {
      return faArrowDown;
    } else if (direction === "left") {
      return faArrowLeft;
    }
  })();

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

ArrowButton.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  direction: PropTypes.oneOf(["up", "right", "down", "left"]),
};

export default ArrowButton;
