import React, { useImperativeHandle, forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, allowedChildren } from "../utils";
import { SizeEnum, StatusEnum } from "../enums";
import Status from "../Status";
import { prefix } from "../settings";

function StatusListInner(
  { className, children, size, selected, onChange = noop, itemsTabIndex, ...rest },
  ref
) {
  const cName = `${prefix}-status-list`;

  const listRef = useRef();

  // Return object with public Api
  useImperativeHandle(ref, () => ({
    focus: (idx) => {
      const items = Array.from(listRef.current.querySelectorAll("li"));
      // For sure filter only direct children because querySelectorAll cant get only direct children
      const directChild = items.filter(
        (item) => item.parentNode === listRef.current
      );
      if (typeof directChild[idx] !== "undefined") {
        directChild[idx].focus();
      }
    },
  }));

  let tabIndex = itemsTabIndex;
  return (
    <ul
      ref={listRef}
      {...rest}
      className={classNames(cName, className, { [`${cName}--${size}`]: size })}
    >
      {React.Children.map(children, (item) => {
        // If active argument is set, clear active flag for all elements except desired
        const newProps = {};
        if (selected) {
          newProps.selected = item.props.status === selected;
        }

        if (onChange) {
          newProps.onClick = (evt) => {
            onChange(item.props.status);
            if (item.onClick) {
              item.onClick(evt);
            }
          };
        }

        const onKeyPress = (evt) => {
          if (onChange) {
            if (
              evt.key === "Enter" &&
              evt.shiftKey === false &&
              evt.altKey === false
            ) {
              onChange(item.props.status);
            }
          }
        };

        const tIndex = (() => {
          if (typeof tabIndex === "number") {
            if (tabIndex > 0) {
              return tabIndex++;
            } else {
              return tabIndex;
            }
          } else {
            return undefined;
          }
        })();

        return (
          <li tabIndex={tIndex} onKeyPress={onKeyPress}>
            {React.cloneElement(item, newProps)}
          </li>
        );
      })}
    </ul>
  );
}

const StatusList = forwardRef(StatusListInner);
StatusList.displayName = "StatusList";

StatusList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Status /&gt;
   */
  children: allowedChildren([Status]),

  /** Selected element */
  selected: PropTypes.oneOf(StatusEnum),

  /** Size */
  size: PropTypes.oneOf(SizeEnum),

  /** tabindex value for items. Any positive integer will be treated as start index for counting. Zero and negative values will be applied to all items */
  itemsTabIndex: PropTypes.number,

  /** Additional classes. */
  className: PropTypes.string,

  /** onChange handler */
  onChange: PropTypes.func,
};

StatusListInner.propTypes = StatusList.propTypes;

export { StatusList };
export default StatusList;
