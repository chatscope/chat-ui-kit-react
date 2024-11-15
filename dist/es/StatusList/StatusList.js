function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "children", "size", "selected", "onChange", "itemsTabIndex"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useImperativeHandle, forwardRef, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, allowedChildren } from "../utils";
import { SizeEnum, StatusEnum } from "../enums";
import Status from "../Status";
import { prefix } from "../settings";
function StatusListInner(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    selected = _ref.selected,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
    itemsTabIndex = _ref.itemsTabIndex,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-status-list");
  var listRef = useRef();

  // Return object with public Api
  useImperativeHandle(ref, function () {
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
  return /*#__PURE__*/React.createElement("ul", _extends({
    ref: listRef
  }, rest, {
    className: classNames(cName, className, _defineProperty({}, "".concat(cName, "--").concat(size), size))
  }), React.Children.map(children, function (item) {
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
      React.createElement("li", {
        tabIndex: tIndex,
        onKeyPress: onKeyPress
      }, /*#__PURE__*/React.cloneElement(item, newProps))
    );
  }));
}
var StatusList = /*#__PURE__*/forwardRef(StatusListInner);
StatusList.displayName = "StatusList";
StatusList.propTypes = {
  /**
   * Primary content.
   * Allowed components:
   *
   * * &lt;Status /&gt;
   */
  children: allowedChildren([Status]),
  /** Selected element */
  selected: PropTypes.oneOf(StatusEnum),
  /** Size */
  size: PropTypes.oneOf(SizeEnum),
  /** tabindex value for items. Any positive integer will be treated as start index for counting. Zero and negative values will be applied to all items */
  itemsTabIndex: PropTypes.number,
  /** Additional classes. */
  className: PropTypes.string,
  /** onChange handler */
  onChange: PropTypes.func
};
process.env.NODE_ENV !== "production" ? StatusListInner.propTypes = StatusList.propTypes : void 0;
export { StatusList };
export default StatusList;