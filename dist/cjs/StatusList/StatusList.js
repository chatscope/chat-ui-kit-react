"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StatusList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../utils");
var _enums = require("../enums");
var _Status = _interopRequireDefault(require("../Status"));
var _settings = require("../settings");
var _excluded = ["className", "children", "size", "selected", "onChange", "itemsTabIndex"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function StatusListInner(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    selected = _ref.selected,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? _utils.noop : _ref$onChange,
    itemsTabIndex = _ref.itemsTabIndex,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-status-list");
  var listRef = (0, _react.useRef)();

  // Return object with public Api
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus(idx) {
        var items = Array.from(listRef.current.querySelectorAll("li"));
        // For sure filter only direct children because querySelectorAll cant get only direct children
        var directChild = items.filter(function (item) {
          return item.parentNode === listRef.current;
        });
        if (typeof directChild[idx] !== "undefined") {
          directChild[idx].focus();
        }
      }
    };
  });
  var tabIndex = itemsTabIndex;
  return /*#__PURE__*/_react["default"].createElement("ul", _extends({
    ref: listRef
  }, rest, {
    className: (0, _classnames["default"])(cName, className, _defineProperty({}, "".concat(cName, "--").concat(size), size))
  }), _react["default"].Children.map(children, function (item) {
    // If active argument is set, clear active flag for all elements except desired
    var newProps = {};
    if (selected) {
      newProps.selected = item.props.status === selected;
    }
    if (onChange) {
      newProps.onClick = function (evt) {
        onChange(item.props.status);
        if (item.onClick) {
          item.onClick(evt);
        }
      };
    }
    var onKeyPress = function onKeyPress(evt) {
      if (onChange) {
        if (evt.key === "Enter" && evt.shiftKey === false && evt.altKey === false) {
          onChange(item.props.status);
        }
      }
    };
    var tIndex = function () {
      if (typeof tabIndex === "number") {
        if (tabIndex > 0) {
          return tabIndex++;
        } else {
          return tabIndex;
        }
      } else {
        return undefined;
      }
    }();
    return (
      /*#__PURE__*/
      // TODO: This needs doing better
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      _react["default"].createElement("li", {
        tabIndex: tIndex,
        onKeyPress: onKeyPress
      }, /*#__PURE__*/_react["default"].cloneElement(item, newProps))
    );
  }));
}
var StatusList = exports.StatusList = /*#__PURE__*/(0, _react.forwardRef)(StatusListInner);
StatusList.displayName = "StatusList";
StatusList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Status /&gt;
   */
  children: (0, _utils.allowedChildren)([_Status["default"]]),
  /** Selected element */
  selected: _propTypes["default"].oneOf(_enums.StatusEnum),
  /** Size */
  size: _propTypes["default"].oneOf(_enums.SizeEnum),
  /** tabindex value for items. Any positive integer will be treated as start index for counting. Zero and negative values will be applied to all items */
  itemsTabIndex: _propTypes["default"].number,
  /** Additional classes. */
  className: _propTypes["default"].string,
  /** onChange handler */
  onChange: _propTypes["default"].func
};
process.env.NODE_ENV !== "production" ? StatusListInner.propTypes = StatusList.propTypes : void 0;
var _default = exports["default"] = StatusList;