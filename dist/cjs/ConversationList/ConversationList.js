"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ConversationList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _settings = require("../settings");
var _Scroll = _interopRequireDefault(require("../Scroll"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Overlay = _interopRequireDefault(require("../Overlay"));
var _Loader = _interopRequireDefault(require("../Loader"));
var _Conversation = _interopRequireDefault(require("../Conversation"));
var _excluded = [
  "children",
  "scrollable",
  "loading",
  "loadingMore",
  "onYReachEnd",
  "className",
];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
}
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
var ConversationList = (exports.ConversationList = function ConversationList(
  _ref
) {
  var children = _ref.children,
    scrollable = _ref.scrollable,
    loading = _ref.loading,
    loadingMore = _ref.loadingMore,
    onYReachEnd = _ref.onYReachEnd,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-conversation-list");

  // Memoize, to avoid re-render each time when props (children) changed
  var Tag = (0, _react.useMemo)(
    function () {
      return function (_ref2) {
        var children = _ref2.children;
        // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
        // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
        if (scrollable === false || (scrollable === true && loading === true)) {
          return /*#__PURE__*/ _react["default"].createElement(
            "div",
            null,
            loading &&
              /*#__PURE__*/ _react["default"].createElement(
                _Overlay["default"],
                null,
                /*#__PURE__*/ _react["default"].createElement(
                  _Loader["default"],
                  null
                )
              ),
            children
          );
        } else {
          return /*#__PURE__*/ _react["default"].createElement(
            _Scroll["default"],
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
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends(
      {
        className: (0, _classnames["default"])(cName, className),
      },
      props
    ),
    /*#__PURE__*/ _react["default"].createElement(
      Tag,
      null,
      _react["default"].Children.count(children) > 0 &&
        /*#__PURE__*/ _react["default"].createElement(
          "ul",
          null,
          _react["default"].Children.map(children, function (item) {
            return /*#__PURE__*/ _react["default"].createElement(
              "li",
              null,
              item
            );
          })
        )
    ),
    loadingMore &&
      /*#__PURE__*/ _react["default"].createElement(
        "div",
        {
          className: "".concat(cName, "__loading-more"),
        },
        /*#__PURE__*/ _react["default"].createElement(_Loader["default"], null)
      )
  );
});
process.env.NODE_ENV !== "production"
  ? (ConversationList.propTypes = {
      /**
       * Primary content.
       * Allowed components:
       *
       * * &lt;Conversation /&gt;
       *
       */
      children: (0, _utils.allowedChildren)([_Conversation["default"]]),
      /** Init scrollbar flag. */
      scrollable: _propTypes["default"].bool,
      /** Loading flag. */
      loading: _propTypes["default"].bool,
      /** Loading more flag for infinity scroll. */
      loadingMore: _propTypes["default"].bool,
      /**
       * This is fired when the scrollbar reaches the end on the y axis.<br/>
       * It can be used to load next conversations using the infinite scroll.
       */
      onYReachEnd: _propTypes["default"].func,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
ConversationList.defaultProps = {
  children: [],
  scrollable: true,
  loading: false,
  loadingMore: false,
  className: "",
};
var _default = (exports["default"] = ConversationList);
