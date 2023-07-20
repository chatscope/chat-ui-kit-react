import React, { useRef, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { Status } from "../Status/Status";
import { SizeEnum, StatusEnum } from "../enums";

function AvatarInner(
  { name = "", src = "", size = "md", status, className, active = false, children, ...rest },
  ref
) {
  const cName = `${prefix}-avatar`;
  const sizeClass = typeof size !== "undefined" ? ` ${cName}--${size}` : "";

  const avatarRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => avatarRef.current.focus(),
  }));

  return (
    <div
      ref={avatarRef}
      {...rest}
      className={classNames(
        `${cName}${sizeClass}`,
        { [`${cName}--active`]: active },
        className
      )}
    >
      {children ? (
        children
      ) : (
        <>
          <img src={src} alt={name} />
          {typeof status === "string" && (
            <Status status={status} size={size} />
          )}{" "}
        </>
      )}
    </div>
  );
}

const Avatar = forwardRef(AvatarInner);
Avatar.displayName = "Avatar";

Avatar.propTypes = {
  /** Primary content */
  children: PropTypes.node,

  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: PropTypes.string,

  /** Avatar image source */
  src: PropTypes.string,

  /** Size */
  size: PropTypes.oneOf(SizeEnum),

  /** Status. */
  status: PropTypes.oneOf(StatusEnum),

  /** Active */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

AvatarInner.propTypes = Avatar.propTypes;

export { Avatar };
export default Avatar;
