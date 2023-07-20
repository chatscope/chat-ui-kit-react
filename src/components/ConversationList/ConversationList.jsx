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
  children = [],
  scrollable = true,
  loading = false,
  loadingMore = false,
  onYReachEnd,
  className = "",
  ...props
}) => {
  const cName = `${prefix}-conversation-list`;

  // Memoize, to avoid re-render each time when props (children) changed
  const Tag = useMemo(
    () => ({ children }) => {
      // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || (scrollable === true && loading === true)) {
        return (
          <div>
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
            onYReachEnd={onYReachEnd}
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
    <div className={classNames(cName, className)} {...props}>
      <Tag>
        {React.Children.count(children) > 0 && (
          <ul>
            {React.Children.map(children, (item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </Tag>
      {loadingMore && (
        <div className={`${cName}__loading-more`}>
          <Loader />
        </div>
      )}
    </div>
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

  /** Loading more flag for infinity scroll. */
  loadingMore: PropTypes.bool,

  /**
   * This is fired when the scrollbar reaches the end on the y axis.<br/>
   * It can be used to load next conversations using the infinite scroll.
   */
  onYReachEnd: PropTypes.func,

  /** Additional classes. */
  className: PropTypes.string,
};

export default ConversationList;
