var _excluded = ["children", "title", "open", "isOpened", "onChange", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
export var ExpansionPanel = function ExpansionPanel(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$open = _ref.open,
    defaultOpen = _ref$open === void 0 ? false : _ref$open,
    isOpened = _ref.isOpened,
    onChange = _ref.onChange,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-expansion-panel");
  var defaultOpenFlag = defaultOpen === true ? defaultOpen : false;
  var _useState = useState(defaultOpenFlag),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var opened = useMemo(function () {
    return typeof isOpened === "boolean" ? isOpened : open;
  }, [isOpened, open]);
  var openModifier = opened === true ? "".concat(cName, "--open") : "";
  var icon = opened === true ? faChevronDown : faChevronLeft;
  var handleOpen = useCallback(function (e) {
    if (typeof isOpened === "boolean") {
      onChange === null || onChange === void 0 || onChange(e);
    } else {
      setOpen(!opened);
      onChange === null || onChange === void 0 || onChange(!opened, e);
    }
  }, [onChange, opened, isOpened]);
  var onKeyDown = useCallback(function (ev) {
    if (ev.code && ev.code.toLowerCase() === "enter") {
      handleOpen(ev);
    }
  }, [handleOpen]);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classNames(cName, openModifier, className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__header"),
    onClick: handleOpen,
    role: "button",
    tabIndex: "0",
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__title")
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__icon")
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: icon
  }))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(cName, "__content")
  }, children));
};
ExpansionPanel.displayName = "ExpansionPanel";
process.env.NODE_ENV !== "production" ? ExpansionPanel.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Title. */
  title: PropTypes.string,
  /** Default open state (uncontrolled mode). */
  open: PropTypes.bool,
  /** If panel is opened (controlled mode). */
  isOpened: PropTypes.bool,
  /** Additional classes. */
  className: PropTypes.string,
  /** Called when the opening state changes. */
  onChange: PropTypes.func
} : void 0;
export default ExpansionPanel;