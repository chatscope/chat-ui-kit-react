var _excluded = ["children", "scrollable", "loading", "loadingMore", "onYReachEnd", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { allowedChildren } from "../utils";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
import classNames from "classnames";
import Overlay from "../Overlay";
import Loader from "../Loader";
import Conversation from "../Conversation";
export var ConversationList = function ConversationList(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children,
    _ref$scrollable = _ref.scrollable,
    scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$loadingMore = _ref.loadingMore,
    loadingMore = _ref$loadingMore === void 0 ? false : _ref$loadingMore,
    onYReachEnd = _ref.onYReachEnd,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-list");

  // Memoize, to avoid re-render each time when props (children) changed
  var Tag = useMemo(function () {
    return function Tag(_ref2) {
      var children = _ref2.children;
      // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || scrollable === true && loading === true) {
        return /*#__PURE__*/React.createElement("div", null, loading && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Loader, null)), children);
      } else {
        return /*#__PURE__*/React.createElement(PerfectScrollbar, {
          onYReachEnd: onYReachEnd,
          options: {
            suppressScrollX: true
          }
        }, children);
      }
    };
  }, [scrollable, loading, onYReachEnd]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(cName, className)
  }, props), /*#__PURE__*/React.createElement(Tag, null, React.Children.count(children) > 0 && /*#__PURE__*/React.createElement("ul", null, React.Children.map(children, function (item) {
    return /*#__PURE__*/React.createElement("li", null, item);
  }))), loadingMore && /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__loading-more")
  }, /*#__PURE__*/React.createElement(Loader, null)));
};
process.env.NODE_ENV !== "production" ? ConversationList.propTypes = {
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
  className: PropTypes.string
} : void 0;
export default ConversationList;