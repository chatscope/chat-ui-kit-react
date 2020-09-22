import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import PerfectScrollbar from "react-perfect-scrollbar";
import Loader from "../Loader";
import Overlay from "../Overlay";
import Message from "../Message";
import MessageGroup from "../MessageGroup";
import MessageSeparator from "../MessageSeparator";
import MessageListContent from "./MessageListContent";

class MessageListInner extends React.Component {
  constructor(props) {
    super(props);
    this.scrollPointRef = React.createRef();
    this.containerRef = React.createRef();
    this.scrollRef = React.createRef();
    this.lastClientHeight = 0;
  }

  getSnapshotBeforeUpdate() {
    const list = this.containerRef.current;

    const sticky = list.scrollHeight === list.scrollTop + list.clientHeight;

    return {
      sticky,
      clientHeight: list.clientHeight,
      scrollHeight: list.scrollHeight,
      lastMessageOrGroup: this.getLastMessageOrGroup(),
    };
  }

  handleResize = () => {
    // If container is smaller than before resize - scroll to End
    if (this.containerRef.current.clientHeight < this.lastClientHeight) {
      this.scrollToEnd();
    }

    this.scrollRef.current.updateScroll();
  };

  componentDidMount() {
    // Set scrollbar to bottom on start (getSnaphotBeforeUpdate is not invoked on mount)
    this.scrollToEnd();

    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (typeof snapshot !== "undefined") {
      const list = this.containerRef.current;

      if (snapshot.sticky === true) {
        this.scrollToEnd();
      } else {
        if (snapshot.clientHeight < this.lastClientHeight) {
          if (list.scrollHeight === list.scrollTop + this.lastClientHeight) {
            this.scrollToEnd();
          }
        } else {
          const last = this.getLastMessageOrGroup();

          if (last === snapshot.lastMessageOrGroup) {
            // New elements were not added at end

            // New elements were added at start
            if (
              list.scrollTop === 0 &&
              list.scrollHeight > snapshot.scrollHeight
            ) {
              list.scrollTop = list.scrollHeight - snapshot.scrollHeight;
            }
          }
        }
      }

      this.lastClientHeight = snapshot.clientHeight;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  scrollToEnd() {
    const list = this.containerRef.current;
    const scrollPoint = this.scrollPointRef.current;

    // https://stackoverflow.com/a/45411081/6316091
    const parentRect = list.getBoundingClientRect();
    const childRect = scrollPoint.getBoundingClientRect();

    // Scroll by offset relative to parent
    const scrollOffset = childRect.top + list.scrollTop - parentRect.top;

    if (list.scrollBy) {
      list.scrollBy({ top: scrollOffset });
    } else {
      list.scrollTop = scrollOffset;
    }

    this.lastClientHeight = list.clientHeight;
  }

  getLastMessageOrGroup = () =>
    this.containerRef.current.querySelector(
      `[data-${prefix}-message-list]>[data-${prefix}-message]:last-of-type,[data-${prefix}-message-list]>[data-${prefix}-message-group]:last-of-type`
    );

  render() {
    const {
      props: {
        children,
        typingIndicator,
        loading,
        loadingMore,
        onYReachStart,
        className,
        ...rest
      },
    } = this;

    const cName = `${prefix}-message-list`;

    const [customContent] = getChildren(children, [MessageListContent]);

    return (
      <div {...rest} className={classNames(cName, className)}>
        {loadingMore && (
          <div className={`${cName}__loading-more`}>
            <Loader />
          </div>
        )}
        {loading && (
          <Overlay>
            <Loader />
          </Overlay>
        )}
        <PerfectScrollbar
          onYReachStart={onYReachStart}
          className={`${cName}__scroll-wrapper`}
          ref={this.scrollRef}
          containerRef={(ref) => (this.containerRef.current = ref)}
          options={{ suppressScrollX: true }}
          {...{ [`data-${prefix}-message-list`]: "" }}
        >
          {customContent ? customContent : children}
          <div
            className={`${cName}__scroll-to`}
            ref={this.scrollPointRef}
          ></div>
        </PerfectScrollbar>

        {typeof typingIndicator !== "undefined" && (
          <div className={`${cName}__typing-indicator-container`}>
            {typingIndicator}
          </div>
        )}
      </div>
    );
  }
}

MessageListInner.displayName = "MessageList";

const MessageList = (props) => <MessageListInner {...props} />;

MessageList.propTypes = {
  /**
   * Primary content. Message elements
   * Allowed components:
   *
   * * &lt;Message /&gt;
   * * &lt;MessageGroup /&gt;
   * * &lt;MessageSeparator /&gt;
   */
  children: allowedChildren([
    Message,
    MessageGroup,
    MessageSeparator,
    MessageListContent,
  ]),

  /** Typing indicator element. */
  typingIndicator: PropTypes.node,

  /** Loading flag. */
  loading: PropTypes.bool,

  /** Loading more flag gor infinity scroll. */
  loadingMore: PropTypes.bool,

  /**
   * It is fired when the scrollbar reaches the beginning on the x axis.<br/>
   * This can be used to load previous messages using the infinite scroll.
   */
  onYReachStart: PropTypes.func,

  /** Additional classes. */
  className: PropTypes.string,
};

MessageList.defaultProps = {
  typingIndicator: undefined,
  loading: false,
  loadingMore: false,
};

MessageListInner.propTypes = MessageList.propTypes;
MessageListInner.defaultProps = MessageList.defaultProps;

MessageList.Content = MessageListContent;

export default MessageList;
