var _excluded = [
  "children",
  "scrollable",
  "loading",
  "loadingMore",
  "onYReachEnd",
  "className",
];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
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
  var children = _ref.children,
    scrollable = _ref.scrollable,
    loading = _ref.loading,
    loadingMore = _ref.loadingMore,
    onYReachEnd = _ref.onYReachEnd,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-conversation-list");

  // Memoize, to avoid re-render each time when props (children) changed
  var Tag = useMemo(
    function () {
      return function (_ref2) {
        var children = _ref2.children;
        // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
        // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
        if (scrollable === false || (scrollable === true && loading === true)) {
          return /*#__PURE__*/ React.createElement(
            "div",
            null,
            loading &&
              /*#__PURE__*/ React.createElement(
                Overlay,
                null,
                /*#__PURE__*/ React.createElement(Loader, null)
              ),
            children
          );
        } else {
          return /*#__PURE__*/ React.createElement(
            PerfectScrollbar,
            {
              onYReachEnd: onYReachEnd,
              options: {
                suppressScrollX: true,
              },
            },
            children
          );
        }
      };
    },
    [scrollable, loading]
  );
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends(
      {
        className: classNames(cName, className),
      },
      props
    ),
    /*#__PURE__*/ React.createElement(
      Tag,
      null,
      React.Children.count(children) > 0 &&
        /*#__PURE__*/ React.createElement(
          "ul",
          null,
          React.Children.map(children, function (item) {
            return /*#__PURE__*/ React.createElement("li", null, item);
          })
        )
    ),
    loadingMore &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__loading-more"),
        },
        /*#__PURE__*/ React.createElement(Loader, null)
      )
  );
};
process.env.NODE_ENV !== "production"
  ? (ConversationList.propTypes = {
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
    })
  : void 0;
ConversationList.defaultProps = {
  children: [],
  scrollable: true,
  loading: false,
  loadingMore: false,
  className: "",
};
export default ConversationList;
