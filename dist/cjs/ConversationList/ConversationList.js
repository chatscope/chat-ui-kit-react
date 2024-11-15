"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
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
var _excluded = ["children", "scrollable", "loading", "loadingMore", "onYReachEnd", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ConversationList = exports.ConversationList = function ConversationList(_ref) {
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
  var cName = "".concat(_settings.prefix, "-conversation-list");

  // Memoize, to avoid re-render each time when props (children) changed
  var Tag = (0, _react.useMemo)(function () {
    return function Tag(_ref2) {
      var children = _ref2.children;
      // PerfectScrollbar for now cant be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || scrollable === true && loading === true) {
        return /*#__PURE__*/_react["default"].createElement("div", null, loading && /*#__PURE__*/_react["default"].createElement(_Overlay["default"], null, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)), children);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_Scroll["default"], {
          onYReachEnd: onYReachEnd,
          options: {
            suppressScrollX: true
          }
        }, children);
      }
    };
  }, [scrollable, loading, onYReachEnd]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])(cName, className)
  }, props), /*#__PURE__*/_react["default"].createElement(Tag, null, _react["default"].Children.count(children) > 0 && /*#__PURE__*/_react["default"].createElement("ul", null, _react["default"].Children.map(children, function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", null, item);
  }))), loadingMore && /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__loading-more")
  }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)));
};
process.env.NODE_ENV !== "production" ? ConversationList.propTypes = {
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
  className: _propTypes["default"].string
} : void 0;
var _default = exports["default"] = ConversationList;