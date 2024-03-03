import React from "react";
import PropTypes from "prop-types";
import { allowedChildren } from "../utils";
import { prefix } from "../settings";
import classNames from "classnames";
import Avatar from "../Avatar";

export const AvatarGroup = ({
  children,
  size = "md",
  className,
  max,
  activeIndex,
  hoverToFront,
  ...rest
}) => {
  const cName = `${prefix}-avatar-group`;

  // Reverse because of css
  const avatars =
    typeof max === "number" && React.Children.count(children) > max
      ? React.Children.toArray(children).reverse().slice(0, max)
      : React.Children.toArray(children).reverse();
  const reversedActiveIndex =
    typeof activeIndex === "number"
      ? avatars.length - activeIndex - 1
      : undefined;

  return (
    <div
      {...rest}
      className={classNames(cName, `${cName}--${size}`, className)}
    >
      {avatars.map((a, i) => {
        const newProps =
          typeof reversedActiveIndex === "number"
            ? { active: reversedActiveIndex === i }
            : {};

        if (hoverToFront === true) {
          newProps.className = classNames(
            `${prefix}-avatar--active-on-hover`,
            a.props.className
          );
        }

        return React.cloneElement(a, newProps);
      })}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";

AvatarGroup.propTypes = {
  /**
   * Primary content.
   * Allowed node:
   *
   * * &lt;Avatar /&gt;
   */
  children: allowedChildren([Avatar]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Maximum stacked children */
  max: PropTypes.number,

  /** Size */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "fluid"]),

  /** Active index.
   * Active element has higher z-index independent of its order.
   */
  activeIndex: PropTypes.number,

  /** Bring to front on hover */
  hoverToFront: PropTypes.bool,
};

export default AvatarGroup;
