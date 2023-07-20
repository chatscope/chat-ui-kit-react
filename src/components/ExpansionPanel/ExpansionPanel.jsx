import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

export const ExpansionPanel = ({
  children = undefined,
  title = "",
  open: defaultOpen = false,
  isOpened,
  onChange,
  className,
  ...rest
}) => {
  const cName = `${prefix}-expansion-panel`;

  const defaultOpenFlag = defaultOpen === true ? defaultOpen : false;

  const [open, setOpen] = useState(defaultOpenFlag);

  const opened = useMemo(
    () => (typeof isOpened === "boolean" ? isOpened : open),
    [isOpened, open]
  );

  const openModifier = opened === true ? `${cName}--open` : "";
  const icon = opened === true ? faChevronDown : faChevronLeft;

  const handleOpen = useCallback(
    (e) => {
      if (typeof isOpened === "boolean") {
        onChange?.(e);
      } else {
        setOpen(!opened);
        onChange?.(!opened, e);
      }
    },
    [onChange, open, opened, isOpened]
  );

  return (
    <div {...rest} className={classNames(cName, openModifier, className)}>
      <div className={`${cName}__header`} onClick={handleOpen}>
        <div className={`${cName}__title`}>{title}</div>
        <div className={`${cName}__icon`}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className={`${cName}__content`}>{children}</div>
    </div>
  );
};

ExpansionPanel.displayName = "ExpansionPanel";

ExpansionPanel.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Title. */
  title: PropTypes.string,

  /** Default open state (uncontrolled mode). */
  open: PropTypes.bool,

  /** If panel is opened (controlled mode). */
  isOpened: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Called when the opening state changes. */
  onChange: PropTypes.func,
};



export default ExpansionPanel;
