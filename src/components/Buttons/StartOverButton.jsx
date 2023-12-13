import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { GrRefresh } from "react-icons/gr";

const cName = `${prefix}-button--startover`;
const iconcName = `${prefix}-button--startover--icon`;
const textName = `${prefix}-button--startover--text`;
export const StartOverButton = ({
  className,
  children,
  resetMessageHistory,
  ...rest
}) => {
  return (
    <Button
      onClick={resetMessageHistory}
      className={classNames(cName, className)}
    >
      <GrRefresh className={classNames(iconcName, className)} />
      <span className={classNames(textName, className)}>Start Over</span>
    </Button>
  );
};

export default StartOverButton;
