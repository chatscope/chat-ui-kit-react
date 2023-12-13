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
  "placeholder",
  "value",
  "onChange",
  "onClearClick",
  "className",
  "disabled",
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t["return"] && ((u = t["return"]()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
import React, {
  useState,
  useRef,
  useMemo,
  useImperativeHandle,
  forwardRef,
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
var useControlledOrNot = function useControlledOrNot(initialValue, value) {
  if (typeof value === "undefined") {
    // Uncontrolled
    return useState(initialValue);
  } else {
    // Controlled
    return [value, function () {}];
  }
};
function SearchInner(_ref, ref) {
  var placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    onClearClick = _ref.onClearClick,
    className = _ref.className,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-search");
  var isControlled = useMemo(function () {
    return typeof value !== "undefined";
  }, []);
  var _useControlledOrNot = useControlledOrNot("", value),
    _useControlledOrNot2 = _slicedToArray(_useControlledOrNot, 2),
    searchValue = _useControlledOrNot2[0],
    setSearchValue = _useControlledOrNot2[1];
  var _useState = useState(isControlled ? searchValue.length > 0 : false),
    _useState2 = _slicedToArray(_useState, 2),
    clearActive = _useState2[0],
    setClearActive = _useState2[1];
  if (isControlled !== (typeof value !== "undefined")) {
    throw "Search: Changing from controlled to uncontrolled component and vice versa is not allowed";
  }
  var inputRef = useRef(undefined);

  // Public API
  var focus = function focus() {
    if (typeof inputRef.current !== "undefined") {
      inputRef.current.focus();
    }
  };

  // Return object with public Api
  useImperativeHandle(ref, function () {
    return {
      focus: focus,
    };
  });
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setClearActive(value.length > 0);
    if (isControlled === false) {
      setSearchValue(value);
    }
    onChange(value);
  };
  var handleClearClick = function handleClearClick() {
    if (isControlled === false) {
      setSearchValue("");
    }
    setClearActive(false);
    onClearClick();
  };
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(
        cName,
        _defineProperty({}, "".concat(cName, "--disabled"), disabled),
        className
      ),
    }),
    /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
      icon: faSearch,
      className: "".concat(cName, "__search-icon"),
    }),
    /*#__PURE__*/ React.createElement("input", {
      ref: inputRef,
      type: "text",
      className: "".concat(cName, "__input"),
      placeholder: placeholder,
      onChange: handleChange,
      disabled: disabled,
      value: searchValue,
    }),
    /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
      icon: faTimes,
      className: classNames(
        "".concat(cName, "__clear-icon"),
        _defineProperty(
          {},
          "".concat(cName, "__clear-icon--active"),
          clearActive
        )
      ),
      onClick: handleClearClick,
    })
  );
}
var Search = /*#__PURE__*/ forwardRef(SearchInner);
Search.displayName = "Search";
Search.propTypes = {
  /** Placeholder. */
  placeholder: PropTypes.string,
  /** Current value of the search input. Creates a controlled component */
  value: PropTypes.string,
  /** OnInput handler. */
  onChange: PropTypes.func,
  /** OnClearClick handler. */
  onClearClick: PropTypes.func,
  /** Additional classes. */
  className: PropTypes.string,
  /** Disabled */
  disabled: PropTypes.bool,
};
process.env.NODE_ENV !== "production"
  ? (SearchInner.propTypes = Search.propTypes)
  : void 0;
Search.defaultProps = {
  placeholder: "",
  value: undefined,
  onChange: function onChange() {},
  onClearClick: function onClearClick() {},
  disabled: false,
};
SearchInner.defaultProps = Search.defaultProps;
export { Search };
export default Search;
