import React, { forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { allowedChildren, getChildren } from "../utils";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
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
    this.preventScrollTop = false;
    this.resizeObserver = undefined;
    this.scrollTicking = false;
    this.resizeTicking = false;
    this.noScroll = undefined;
  }

  getSnapshotBeforeUpdate() {
    const list = this.containerRef.current;

    const topHeight = Math.round(list.scrollTop + list.clientHeight);
    // 1 px fix for firefox
    const sticky =
      list.scrollHeight === topHeight ||
      list.scrollHeight + 1 === topHeight ||
      list.scrollHeight - 1 === topHeight;

    return {
      sticky,
      clientHeight: list.clientHeight,
      scrollHeight: list.scrollHeight,
      lastMessageOrGroup: this.getLastMessageOrGroup(),
      diff: list.scrollHeight - list.scrollTop,
    };
  }

  handleResize = () => {
    // If container is smaller than before resize - scroll to End
    if (this.containerRef.current.clientHeight < this.lastClientHeight) {
      this.scrollToEnd(this.props.scrollBehavior);
    }

    this.scrollRef.current.updateScroll();
  };

  handleContainerResize = () => {
    if (this.resizeTicking === false) {
      window.requestAnimationFrame(() => {
        const list = this.containerRef.current;

        if (list) {
          const currentHeight = list.clientHeight;

          const diff = currentHeight - this.lastClientHeight;

          if (diff >= 1) {
            // Because fractional

            if (this.preventScrollTop === false) {
              list.scrollTop = Math.round(list.scrollTop) - diff;
            }
          } else {
            list.scrollTop = list.scrollTop - diff;
          }

          this.lastClientHeight = list.clientHeight;

          this.scrollRef.current.updateScroll();
        }

        this.resizeTicking = false;
      });

      this.resizeTicking = true;
    }
  };

  isSticked = () => {
    const list = this.containerRef.current;

    return list.scrollHeight === Math.round(list.scrollTop + list.clientHeight);
  };

  handleScroll = () => {
    if (this.scrollTicking === false) {
      window.requestAnimationFrame(() => {
        if (this.noScroll === false) {
          this.preventScrollTop = this.isSticked();
        } else {
          this.noScroll = false;
        }

        this.scrollTicking = false;
      });

      this.scrollTicking = true;
    }
  };

  componentDidMount() {
    // Set scrollbar to bottom on start (getSnaphotBeforeUpdate is not invoked on mount)
    if (this.props.autoScrollToBottomOnMount === true) {
      this.scrollToEnd(this.props.scrollBehavior);
    }

    this.lastClientHeight = this.containerRef.current.clientHeight;

    window.addEventListener("resize", this.handleResize);

    if (typeof window.ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(this.handleContainerResize);
      this.resizeObserver.observe(this.containerRef.current);
    }
    this.containerRef.current.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      props: { autoScrollToBottom },
    } = this;

    if (typeof snapshot !== "undefined") {
      const list = this.containerRef.current;

      const { lastElement, lastMessageInGroup } = this.getLastMessageOrGroup();

      if (lastElement === snapshot.lastMessageOrGroup.lastElement) {
        // If lastMessageInGroup is defined last element is MessageGroup otherwise its Message
        if (
          typeof lastMessageInGroup === "undefined" ||
          lastMessageInGroup === snapshot.lastMessageOrGroup.lastMessageInGroup
        ) {
          list.scrollTop =
            list.scrollHeight -
            snapshot.diff +
            (this.lastClientHeight - list.clientHeight);
        }
      }

      if (snapshot.sticky === true) {
        if (autoScrollToBottom === true) {
          this.scrollToEnd(this.props.scrollBehavior);
        }
        this.preventScrollTop = true;
      } else {
        if (snapshot.clientHeight < this.lastClientHeight) {
          // If was sticky because scrollHeight is not changing, so here will be equal to lastHeight plus current scrollTop
          // 1px fix id for firefox
          const sHeight = list.scrollTop + this.lastClientHeight;
          if (
            list.scrollHeight === sHeight ||
            list.scrollHeight + 1 === sHeight ||
            list.scrollHeight - 1 === sHeight
          ) {
            if (autoScrollToBottom === true) {
              this.scrollToEnd(this.props.scrollBehavior);
              this.preventScrollTop = true;
            }
          } else {
            this.preventScrollTop = false;
          }
        } else {
          this.preventScrollTop = false;

          if (lastElement === snapshot.lastMessageOrGroup.lastElement) {
            if (
              typeof lastMessageInGroup === "undefined" ||
              lastMessageInGroup ===
                snapshot.lastMessageOrGroup.lastMessageInGroup
            ) {
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
      }

      this.lastClientHeight = snapshot.clientHeight;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (typeof this.resizeObserver !== "undefined") {
      this.resizeObserver.disconnect();
    }
    this.containerRef.current.removeEventListener("scroll", this.handleScroll);
  }

  scrollToEnd(scrollBehavior = this.props.scrollBehavior) {
    const list = this.containerRef.current;
    const scrollPoint = this.scrollPointRef.current;

    // https://stackoverflow.com/a/45411081/6316091
    const parentRect = list.getBoundingClientRect();
    const childRect = scrollPoint.getBoundingClientRect();

    // Scroll by offset relative to parent
    const scrollOffset = childRect.top + list.scrollTop - parentRect.top;

    if (list.scrollBy) {
      list.scrollBy({ top: scrollOffset, behavior: scrollBehavior });
    } else {
      list.scrollTop = scrollOffset;
    }

    this.lastClientHeight = list.clientHeight;

    // Important flag! Blocks strange Chrome mobile behaviour - automatic scroll.
    // Chrome mobile sometimes trigger scroll when new content is entered to MessageInput. It's probably Chrome Bug - sth related with overflow-anchor
    this.noScroll = true;
  }

  getLastMessageOrGroup = () => {
    const lastElement = this.containerRef.current.querySelector(
      `[data-${prefix}-message-list]>[data-${prefix}-message]:last-of-type,[data-${prefix}-message-list]>[data-${prefix}-message-group]:last-of-type`
    );

    const lastMessageInGroup = lastElement?.querySelector(
      `[data-${prefix}-message]:last-of-type`
    );

    return {
      lastElement,
      lastMessageInGroup,
    };
  };

  render() {
    const {
      props: {
        children,
        typingIndicator,
        loading,
        loadingMore,
        loadingMorePosition,
        onYReachStart,
        onYReachEnd,
        className,
        disableOnYReachWhenNoScroll,
        scrollBehavior, // Just to remove rest
        autoScrollToBottom, // Just to remove rest
        autoScrollToBottomOnMount, // Just to remove rest
        ...rest
      },
    } = this;

    const cName = `${prefix}-message-list`;

    const [customContent] = getChildren(children, [MessageListContent]);

    return (
      <div {...rest} className={classNames(cName, className)}>
        {loadingMore && (
          <div
            className={classNames(`${cName}__loading-more`, {
              [`${cName}__loading-more--bottom`]:
                loadingMorePosition === "bottom",
            })}
          >
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
          onYReachEnd={onYReachEnd}
          onSync={(ps) => ps.update(disableOnYReachWhenNoScroll)}
          className={`${cName}__scroll-wrapper`}
          ref={this.scrollRef}
          containerRef={(ref) => (this.containerRef.current = ref)}
          options={{ suppressScrollX: true }}
          {...{ [`data-${prefix}-message-list`]: "" }}
          style={{
            overscrollBehaviorY: "none",
            overflowAnchor: "auto",
            touchAction: "none",
          }}
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

function MessageListFunc(props, ref) {
  const msgListRef = useRef();

  const scrollToBottom = (scrollBehavior) =>
    msgListRef.current.scrollToEnd(scrollBehavior);

  // Return object with public Api
  useImperativeHandle(ref, () => ({
    scrollToBottom,
  }));

  return <MessageListInner ref={msgListRef} {...props} />;
}

const MessageList = forwardRef(MessageListFunc);

MessageList.propTypes = {
  /**
   * Primary content. Message elements
   * Allowed components:
   *
   * * &lt;Message /&gt;
   * * &lt;MessageGroup /&gt;
   * * &lt;MessageSeparator /&gt;
   * * &lt;MessageListContent /&gt;
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

  /** Loading more flag for infinity scroll. */
  loadingMore: PropTypes.bool,

  /** Loading more loader position. */
  loadingMorePosition: PropTypes.oneOf(["top", "bottom"]),

  /**
   * This is fired when the scrollbar reaches the beginning on the y axis.<br/>
   * It can be used to load previous messages using the infinite scroll.
   */
  onYReachStart: PropTypes.func,

  /**
   * This is fired when the scrollbar reaches the end on the y axis.<br/>
   * It can be used to load next messages using the infinite scroll.
   */
  onYReachEnd: PropTypes.func,

  /**
   * Disables onYReachStart and onYReachEnd events from being fired<br />
   * when the list is not scrollable.
   * This is set to false by default for backward compatibility.
   */
  disableOnYReachWhenNoScroll: PropTypes.bool,

  /**
   * Auto scroll to bottom
   */
  autoScrollToBottom: PropTypes.bool,

  /**
   * Auto scroll to bottom on mount
   */
  autoScrollToBottomOnMount: PropTypes.bool,

  /**
   * Scroll behavior
   * https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior
   */
  scrollBehavior: PropTypes.oneOf(["auto", "smooth"]),

  /** Additional classes. */
  className: PropTypes.string,
};

MessageList.defaultProps = {
  typingIndicator: undefined,
  loading: false,
  loadingMore: false,
  loadingMorePosition: "top",
  disableOnYReachWhenNoScroll: false,
  autoScrollToBottom: true,
  autoScrollToBottomOnMount: true,
  scrollBehavior: "auto",
};

MessageListInner.propTypes = MessageList.propTypes;
MessageListInner.defaultProps = MessageList.defaultProps;

MessageList.Content = MessageListContent;

export default MessageList;
