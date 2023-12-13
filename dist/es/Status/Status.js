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
var _excluded = ["status", "size", "className", "name", "selected", "children"];
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
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { StatusEnum, SizeEnum } from "../enums";
import { prefix } from "../settings";
export var Status = function Status(_ref) {
  var status = _ref.status,
    size = _ref.size,
    className = _ref.className,
    name = _ref.name,
    selected = _ref.selected,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-status");
  var bullet = /*#__PURE__*/ React.createElement("div", {
    className: "".concat(cName, "__bullet"),
  });
  var named = name || children;
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      "aria-selected": selected === true ? "" : null,
      className: classNames(
        cName,
        "".concat(cName, "--").concat(size),
        "".concat(cName, "--").concat(status),
        _defineProperty({}, "".concat(cName, "--selected"), selected),
        _defineProperty({}, "".concat(cName, "--named"), named),
        className
      ),
    }),
    bullet,
    named &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__name"),
        },
        name ? name : children
      )
  );
};
process.env.NODE_ENV !== "production"
  ? (Status.propTypes = {
      /** Primary content */
      children: PropTypes.node,
      /** Status. */
      status: PropTypes.oneOf(StatusEnum).isRequired,
      /** Size. */
      size: PropTypes.oneOf(SizeEnum),
      /** Name */
      name: PropTypes.node,
      /** Selected */
      selected: PropTypes.bool,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
Status.defaultProps = {
  size: "md",
};
export default Status;
