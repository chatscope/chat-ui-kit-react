import React, { useState } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const ExpansionPanel = ({
  children,
  title,
  open: defaultOpen,
  className,
  ...rest
}) => {
  const cName = `${prefix}-expansion-panel`;

  const defaultOpenFlag = defaultOpen === true ? defaultOpen : false;

  const [open, setOpen] = useState(defaultOpenFlag);

  const openModifier = open === true ? `${cName}--open` : "";
  const icon = open === true ? faChevronDown : faChevronLeft;

  return (
    <div {...rest} className={classNames(cName, openModifier, className)}>
      <div className={`${cName}__header`} onClick={() => setOpen(!open)}>
        <div className={`${cName}__title`}>{title}</div>
        <div className={`${cName}__icon`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className={`${cName}__content`}>{children}</div>
    </div>
  );
};

ExpansionPanel.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Title. */
  title: PropTypes.string,

  /** Default open state. */
  open: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

ExpansionPanel.defaultProps = {
  children: undefined,
  title: "",
  open: false,
};

export default ExpansionPanel;
