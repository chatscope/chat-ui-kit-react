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
var _excluded = [
  "className",
  "children",
  "size",
  "selected",
  "onChange",
  "itemsTabIndex",
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
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
    onChange = _ref.onChange,
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
      },
    };
  });
  var tabIndex = itemsTabIndex;
  return /*#__PURE__*/ React.createElement(
    "ul",
    _extends(
      {
        ref: listRef,
      },
      rest,
      {
        className: classNames(
          cName,
          className,
          _defineProperty({}, "".concat(cName, "--").concat(size), size)
        ),
      }
    ),
    React.Children.map(children, function (item) {
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
          if (
            evt.key === "Enter" &&
            evt.shiftKey === false &&
            evt.altKey === false
          ) {
            onChange(item.props.status);
          }
        }
      };
      var tIndex = (function () {
        if (typeof tabIndex === "number") {
          if (tabIndex > 0) {
            return tabIndex++;
          } else {
            return tabIndex;
          }
        } else {
          return undefined;
        }
      })();
      return /*#__PURE__*/ React.createElement(
        "li",
        {
          tabIndex: tIndex,
          onKeyPress: onKeyPress,
        },
        /*#__PURE__*/ React.cloneElement(item, newProps)
      );
    })
  );
}
var StatusList = /*#__PURE__*/ forwardRef(StatusListInner);
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
  onChange: PropTypes.func,
};
process.env.NODE_ENV !== "production"
  ? (StatusListInner.propTypes = StatusList.propTypes)
  : void 0;
StatusList.defaultProps = {
  onChange: noop,
};
StatusListInner.defaultProps = StatusList.defaultProps;
export { StatusList };
export default StatusList;
