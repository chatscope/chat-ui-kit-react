var _excluded = ["children", "typingIndicator", "loading", "loadingMore", "loadingMorePosition", "onYReachStart", "onYReachEnd", "className", "disableOnYReachWhenNoScroll", "scrollBehavior", "autoScrollToBottom", "autoScrollToBottomOnMount"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var MessageListInner = /*#__PURE__*/function (_React$Component) {
  function MessageListInner(props) {
    var _this;
    _classCallCheck(this, MessageListInner);
    _this = _callSuper(this, MessageListInner, [props]);
    _defineProperty(_this, "handleResize", function () {
      // If container is smaller than before resize - scroll to End
      if (_this.containerRef.current.clientHeight < _this.lastClientHeight) {
        _this.scrollToEnd(_this.props.scrollBehavior);
      }
      _this.scrollRef.current.updateScroll();
    });
    _defineProperty(_this, "handleContainerResize", function () {
      if (_this.resizeTicking === false) {
        window.requestAnimationFrame(function () {
          var list = _this.containerRef.current;
          if (list) {
            var currentHeight = list.clientHeight;
            var diff = currentHeight - _this.lastClientHeight;
            if (diff >= 1) {
              // Because fractional

              if (_this.preventScrollTop === false) {
                list.scrollTop = Math.round(list.scrollTop) - diff;
              }
            } else {
              list.scrollTop = list.scrollTop - diff;
            }
            _this.lastClientHeight = list.clientHeight;
            _this.scrollRef.current.updateScroll();
          }
          _this.resizeTicking = false;
        });
        _this.resizeTicking = true;
      }
    });
    _defineProperty(_this, "isSticked", function () {
      var list = _this.containerRef.current;
      return list.scrollHeight === Math.round(list.scrollTop + list.clientHeight);
    });
    _defineProperty(_this, "handleScroll", function () {
      if (_this.scrollTicking === false) {
        window.requestAnimationFrame(function () {
          if (_this.noScroll === false) {
            _this.preventScrollTop = _this.isSticked();
          } else {
            _this.noScroll = false;
          }
          _this.scrollTicking = false;
        });
        _this.scrollTicking = true;
      }
    });
    _defineProperty(_this, "getLastMessageOrGroup", function () {
      var lastElement = _this.containerRef.current.querySelector("[data-".concat(prefix, "-message-list]>[data-").concat(prefix, "-message]:last-of-type,[data-").concat(prefix, "-message-list]>[data-").concat(prefix, "-message-group]:last-of-type"));
      var lastMessageInGroup = lastElement === null || lastElement === void 0 ? void 0 : lastElement.querySelector("[data-".concat(prefix, "-message]:last-of-type"));
      return {
        lastElement: lastElement,
        lastMessageInGroup: lastMessageInGroup
      };
    });
    _this.scrollPointRef = /*#__PURE__*/React.createRef();
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.scrollRef = /*#__PURE__*/React.createRef();
    _this.lastClientHeight = 0;
    _this.preventScrollTop = false;
    _this.resizeObserver = undefined;
    _this.scrollTicking = false;
    _this.resizeTicking = false;
    _this.noScroll = undefined;
    return _this;
  }
  _inherits(MessageListInner, _React$Component);
  return _createClass(MessageListInner, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      var list = this.containerRef.current;
      var topHeight = Math.round(list.scrollTop + list.clientHeight);
      // 1 px fix for firefox
      var sticky = list.scrollHeight === topHeight || list.scrollHeight + 1 === topHeight || list.scrollHeight - 1 === topHeight;
      return {
        sticky: sticky,
        clientHeight: list.clientHeight,
        scrollHeight: list.scrollHeight,
        lastMessageOrGroup: this.getLastMessageOrGroup(),
        diff: list.scrollHeight - list.scrollTop
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
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
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var autoScrollToBottom = this.props.autoScrollToBottom;
      if (typeof snapshot !== "undefined") {
        var list = this.containerRef.current;
        var _this$getLastMessageO = this.getLastMessageOrGroup(),
          lastElement = _this$getLastMessageO.lastElement,
          lastMessageInGroup = _this$getLastMessageO.lastMessageInGroup;
        if (lastElement === snapshot.lastMessageOrGroup.lastElement) {
          // If lastMessageInGroup is defined last element is MessageGroup otherwise its Message
          if (typeof lastMessageInGroup === "undefined" || lastMessageInGroup === snapshot.lastMessageOrGroup.lastMessageInGroup) {
            list.scrollTop = list.scrollHeight - snapshot.diff + (this.lastClientHeight - list.clientHeight);
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
            var sHeight = list.scrollTop + this.lastClientHeight;
            if (list.scrollHeight === sHeight || list.scrollHeight + 1 === sHeight || list.scrollHeight - 1 === sHeight) {
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
              if (typeof lastMessageInGroup === "undefined" || lastMessageInGroup === snapshot.lastMessageOrGroup.lastMessageInGroup) {
                // New elements were not added at end
                // New elements were added at start
                if (list.scrollTop === 0 && list.scrollHeight > snapshot.scrollHeight) {
                  list.scrollTop = list.scrollHeight - snapshot.scrollHeight;
                }
              }
            }
          }
        }
        this.lastClientHeight = snapshot.clientHeight;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
      if (typeof this.resizeObserver !== "undefined") {
        this.resizeObserver.disconnect();
      }
      this.containerRef.current.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "scrollToEnd",
    value: function scrollToEnd() {
      var scrollBehavior = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollBehavior;
      var list = this.containerRef.current;
      var scrollPoint = this.scrollPointRef.current;

      // https://stackoverflow.com/a/45411081/6316091
      var parentRect = list.getBoundingClientRect();
      var childRect = scrollPoint.getBoundingClientRect();

      // Scroll by offset relative to parent
      var scrollOffset = childRect.top + list.scrollTop - parentRect.top;
      if (list.scrollBy) {
        list.scrollBy({
          top: scrollOffset,
          behavior: scrollBehavior
        });
      } else {
        list.scrollTop = scrollOffset;
      }
      this.lastClientHeight = list.clientHeight;

      // Important flag! Blocks strange Chrome mobile behaviour - automatic scroll.
      // Chrome mobile sometimes trigger scroll when new content is entered to MessageInput. It's probably Chrome Bug - sth related with overflow-anchor
      this.noScroll = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        typingIndicator = _this$props.typingIndicator,
        loading = _this$props.loading,
        loadingMore = _this$props.loadingMore,
        loadingMorePosition = _this$props.loadingMorePosition,
        onYReachStart = _this$props.onYReachStart,
        onYReachEnd = _this$props.onYReachEnd,
        className = _this$props.className,
        disableOnYReachWhenNoScroll = _this$props.disableOnYReachWhenNoScroll,
        scrollBehavior = _this$props.scrollBehavior,
        autoScrollToBottom = _this$props.autoScrollToBottom,
        autoScrollToBottomOnMount = _this$props.autoScrollToBottomOnMount,
        rest = _objectWithoutProperties(_this$props, _excluded);
      var cName = "".concat(prefix, "-message-list");
      var _getChildren = getChildren(children, [MessageListContent]),
        _getChildren2 = _slicedToArray(_getChildren, 1),
        customContent = _getChildren2[0];
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        className: classNames(cName, className)
      }), loadingMore && /*#__PURE__*/React.createElement("div", {
        className: classNames("".concat(cName, "__loading-more"), _defineProperty({}, "".concat(cName, "__loading-more--bottom"), loadingMorePosition === "bottom"))
      }, /*#__PURE__*/React.createElement(Loader, null)), loading && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Loader, null)), /*#__PURE__*/React.createElement(PerfectScrollbar, _extends({
        onYReachStart: onYReachStart,
        onYReachEnd: onYReachEnd,
        onSync: function onSync(ps) {
          return ps.update(disableOnYReachWhenNoScroll);
        },
        className: "".concat(cName, "__scroll-wrapper"),
        ref: this.scrollRef,
        containerRef: function containerRef(ref) {
          return _this2.containerRef.current = ref;
        },
        options: {
          suppressScrollX: true
        }
      }, _defineProperty({}, "data-".concat(prefix, "-message-list"), ""), {
        style: {
          overscrollBehaviorY: "none",
          overflowAnchor: "auto",
          touchAction: "none"
        }
      }), customContent ? customContent : children, /*#__PURE__*/React.createElement("div", {
        className: "".concat(cName, "__scroll-to"),
        ref: this.scrollPointRef
      })), typeof typingIndicator !== "undefined" && /*#__PURE__*/React.createElement("div", {
        className: "".concat(cName, "__typing-indicator-container")
      }, typingIndicator));
    }
  }]);
}(React.Component);
MessageListInner.displayName = "MessageList";
function MessageListFunc(props, ref) {
  var msgListRef = useRef();
  var scrollToBottom = function scrollToBottom(scrollBehavior) {
    return msgListRef.current.scrollToEnd(scrollBehavior);
  };

  // Return object with public Api
  useImperativeHandle(ref, function () {
    return {
      scrollToBottom: scrollToBottom
    };
  });
  return /*#__PURE__*/React.createElement(MessageListInner, _extends({
    ref: msgListRef
  }, props));
}
var MessageList = /*#__PURE__*/forwardRef(MessageListFunc);
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
  children: allowedChildren([Message, MessageGroup, MessageSeparator, MessageListContent]),
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
  className: PropTypes.string
};
MessageList.defaultProps = {
  typingIndicator: undefined,
  loading: false,
  loadingMore: false,
  loadingMorePosition: "top",
  disableOnYReachWhenNoScroll: false,
  autoScrollToBottom: true,
  autoScrollToBottomOnMount: true,
  scrollBehavior: "auto"
};
process.env.NODE_ENV !== "production" ? MessageListInner.propTypes = MessageList.propTypes : void 0;
MessageListInner.defaultProps = MessageList.defaultProps;
MessageList.Content = MessageListContent;
export default MessageList;