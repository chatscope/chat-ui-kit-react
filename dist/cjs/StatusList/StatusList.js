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
exports["default"] = exports.StatusList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../utils");
var _enums = require("../enums");
var _Status = _interopRequireDefault(require("../Status"));
var _settings = require("../settings");
var _excluded = [
  "className",
  "children",
  "size",
  "selected",
  "onChange",
  "itemsTabIndex",
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
function StatusListInner(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    selected = _ref.selected,
    onChange = _ref.onChange,
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
      },
    };
  });
  var tabIndex = itemsTabIndex;
  return /*#__PURE__*/ _react["default"].createElement(
    "ul",
    _extends(
      {
        ref: listRef,
      },
      rest,
      {
        className: (0, _classnames["default"])(
          cName,
          className,
          _defineProperty({}, "".concat(cName, "--").concat(size), size)
        ),
      }
    ),
    _react["default"].Children.map(children, function (item) {
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
      return /*#__PURE__*/ _react["default"].createElement(
        "li",
        {
          tabIndex: tIndex,
          onKeyPress: onKeyPress,
        },
        /*#__PURE__*/ _react["default"].cloneElement(item, newProps)
      );
    })
  );
}
var StatusList = (exports.StatusList = /*#__PURE__*/ (0, _react.forwardRef)(
  StatusListInner
));
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
  onChange: _propTypes["default"].func,
};
process.env.NODE_ENV !== "production"
  ? (StatusListInner.propTypes = StatusList.propTypes)
  : void 0;
StatusList.defaultProps = {
  onChange: _utils.noop,
};
StatusListInner.defaultProps = StatusList.defaultProps;
var _default = (exports["default"] = StatusList);
