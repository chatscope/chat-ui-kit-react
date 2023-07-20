import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
import classNames from "classnames";
import Overlay from "../Overlay";
import Loader from "../Loader";

export const Sidebar = ({
  children = undefined,
  position = undefined,
  scrollable = true,
  loading = false,
  className = "",
  ...props
}) => {
  const cName = `${prefix}-sidebar`;

  const sideClass = (() => {
    if (position === "left") {
      return `${cName}--left`;
    } else if (position === "right") {
      return `${cName}--right`;
    } else {
      return ``;
    }
  })();

  /* eslint-disable react/display-name*/
  const Tag = useMemo(
    () => ({ children, ...rest }) => {
      // PerfectScrollbar for now can't be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || (scrollable === true && loading === true)) {
        return (
          <div {...rest}>
            {loading && (
              <Overlay>
                <Loader />
              </Overlay>
            )}
            {children}
          </div>
        );
      } else {
        return <PerfectScrollbar {...rest}>{children}</PerfectScrollbar>;
      }
    },
    [scrollable, loading]
  );

  return (
    <Tag {...props} className={classNames(cName, sideClass, className)}>
      {children}
    </Tag>
  );
};

Sidebar.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Sidebar can be placed on two positions */
  position: PropTypes.oneOf(["left", "right"]),

  /** Sidebar can be scrollable */
  scrollable: PropTypes.bool,

  /** Loading flag. */
  loading: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

export default Sidebar;
