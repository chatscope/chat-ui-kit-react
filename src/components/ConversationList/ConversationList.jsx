import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { allowedChildren } from "../utils";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
import classNames from "classnames";
import Overlay from "../Overlay";
import Loader from "../Loader";
import Conversation from "../Conversation";

export const ConversationList = ({
  children,
  scrollable,
  loading,
  className,
  ...props
}) => {
  const cName = `${prefix}-conversation-list`;

  // Memoize, to avoid re-render each time when props (children) changed
  const Tag = useMemo(
    () => ({ children, className, ...rest }) => {
      // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || (scrollable === true && loading === true)) {
        return (
          <div className={className} {...rest}>
            {loading && (
              <Overlay>
                <Loader />
              </Overlay>
            )}
            {children}
          </div>
        );
      } else {
        return (
          <PerfectScrollbar
            className={className}
            {...rest}
            options={{ suppressScrollX: true }}
          >
            {children}
          </PerfectScrollbar>
        );
      }
    },
    [scrollable, loading]
  );

  return (
    <Tag className={classNames(cName, className)} {...props}>
      {React.Children.count(children) > 0 && (
        <ul>
          {React.Children.map(children, (item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </Tag>
  );
};

ConversationList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Conversation /&gt;
   *
   */
  children: allowedChildren([Conversation]),

  /** Init scrollbar flag. */
  scrollable: PropTypes.bool,

  /** Loading flag. */
  loading: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,
};

ConversationList.defaultProps = {
  children: [],
  scrollable: true,
  loading: false,
  className: "",
};

export default ConversationList;
