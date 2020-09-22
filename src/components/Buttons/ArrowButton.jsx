import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export const ArrowButton = ({ className, direction, children, ...rest }) => {
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

ArrowButton.defaultProps = {
  className: "",
  direction: "right",
};

export default ArrowButton;
