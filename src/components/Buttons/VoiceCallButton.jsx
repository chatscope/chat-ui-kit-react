import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons/faPhoneAlt";

export const VoiceCallButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--voicecall`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FontAwesomeIcon icon={faPhoneAlt} />}
    >
      {children}
    </Button>
  );
};

VoiceCallButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default VoiceCallButton;
