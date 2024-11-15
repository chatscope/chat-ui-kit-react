"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ExpansionPanel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _settings = require("../settings");
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _faChevronLeft = require("@fortawesome/free-solid-svg-icons/faChevronLeft");
var _faChevronDown = require("@fortawesome/free-solid-svg-icons/faChevronDown");
var _excluded = ["children", "title", "open", "isOpened", "onChange", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ExpansionPanel = exports.ExpansionPanel = function ExpansionPanel(_ref) {
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
  var cName = "".concat(_settings.prefix, "-expansion-panel");
  var defaultOpenFlag = defaultOpen === true ? defaultOpen : false;
  var _useState = (0, _react.useState)(defaultOpenFlag),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var opened = (0, _react.useMemo)(function () {
    return typeof isOpened === "boolean" ? isOpened : open;
  }, [isOpened, open]);
  var openModifier = opened === true ? "".concat(cName, "--open") : "";
  var icon = opened === true ? _faChevronDown.faChevronDown : _faChevronLeft.faChevronLeft;
  var handleOpen = (0, _react.useCallback)(function (e) {
    if (typeof isOpened === "boolean") {
      onChange === null || onChange === void 0 || onChange(e);
    } else {
      setOpen(!opened);
      onChange === null || onChange === void 0 || onChange(!opened, e);
    }
  }, [onChange, opened, isOpened]);
  var onKeyDown = (0, _react.useCallback)(function (ev) {
    if (ev.code && ev.code.toLowerCase() === "enter") {
      handleOpen(ev);
    }
  }, [handleOpen]);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(cName, openModifier, className)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__header"),
    onClick: handleOpen,
    role: "button",
    tabIndex: "0",
    onKeyDown: onKeyDown
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__title")
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__icon")
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(cName, "__content")
  }, children));
};
ExpansionPanel.displayName = "ExpansionPanel";
process.env.NODE_ENV !== "production" ? ExpansionPanel.propTypes = {
  /** Primary content. */
  children: _propTypes["default"].node,
  /** Title. */
  title: _propTypes["default"].string,
  /** Default open state (uncontrolled mode). */
  open: _propTypes["default"].bool,
  /** If panel is opened (controlled mode). */
  isOpened: _propTypes["default"].bool,
  /** Additional classes. */
  className: _propTypes["default"].string,
  /** Called when the opening state changes. */
  onChange: _propTypes["default"].func
} : void 0;
var _default = exports["default"] = ExpansionPanel;