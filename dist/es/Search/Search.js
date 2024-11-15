function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["placeholder", "value", "onChange", "onClearClick", "className", "disabled"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useState, useRef, useMemo, useImperativeHandle, forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
var useControlledOrNot = function useControlledOrNot(initialValue, value) {
  if (typeof value === "undefined") {
    // Uncontrolled
    // TODO: This isn't a great way of doing this - breaks the rules of hooks!
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useState(initialValue);
  } else {
    // Controlled
    return [value, function () {}];
  }
};
function SearchInner(_ref, ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? undefined : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClearClick = _ref.onClearClick,
    onClearClick = _ref$onClearClick === void 0 ? function () {} : _ref$onClearClick,
    className = _ref.className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-search");
  var isControlled = useMemo(function () {
    return typeof value !== "undefined";
  }, [value]);
  var _useControlledOrNot = useControlledOrNot("", value),
    _useControlledOrNot2 = _slicedToArray(_useControlledOrNot, 2),
    searchValue = _useControlledOrNot2[0],
    setSearchValue = _useControlledOrNot2[1];
  var _useState = useState(isControlled ? searchValue.length > 0 : false),
    _useState2 = _slicedToArray(_useState, 2),
    clearActive = _useState2[0],
    setClearActive = _useState2[1];
  if (isControlled !== (typeof value !== "undefined")) {
    throw new Error("Search: Changing from controlled to uncontrolled component and vice versa is not allowed");
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
      focus: focus
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
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, _defineProperty({}, "".concat(cName, "--disabled"), disabled), className)
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faSearch,
    className: "".concat(cName, "__search-icon")
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    className: "".concat(cName, "__input"),
    placeholder: placeholder,
    onChange: handleChange,
    disabled: disabled,
    value: searchValue
  }), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTimes,
    className: classNames("".concat(cName, "__clear-icon"), _defineProperty({}, "".concat(cName, "__clear-icon--active"), clearActive)),
    onClick: handleClearClick
  }));
}
var Search = /*#__PURE__*/forwardRef(SearchInner);
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
  disabled: PropTypes.bool
};
process.env.NODE_ENV !== "production" ? SearchInner.propTypes = Search.propTypes : void 0;
export { Search };
export default Search;