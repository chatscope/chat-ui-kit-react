var _excluded = ["children", "position", "scrollable", "loading", "className"],
  _excluded2 = ["children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
import classNames from "classnames";
import Overlay from "../Overlay";
import Loader from "../Loader";
export var Sidebar = function Sidebar(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? undefined : _ref$position,
    _ref$scrollable = _ref.scrollable,
    scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-sidebar");
  var sideClass = function () {
    if (position === "left") {
      return "".concat(cName, "--left");
    } else if (position === "right") {
      return "".concat(cName, "--right");
    } else {
      return "";
    }
  }();

  /* eslint-disable react/display-name*/
  var Tag = useMemo(function () {
    return function (_ref2) {
      var children = _ref2.children,
        rest = _objectWithoutProperties(_ref2, _excluded2);
      // PerfectScrollbar for now can't be disabled, so render div instead of disabling it
      // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
      if (scrollable === false || scrollable === true && loading === true) {
        return /*#__PURE__*/React.createElement("div", rest, loading && /*#__PURE__*/React.createElement(Overlay, null, /*#__PURE__*/React.createElement(Loader, null)), children);
      } else {
        return /*#__PURE__*/React.createElement(PerfectScrollbar, rest, children);
      }
    };
  }, [scrollable, loading]);
  return /*#__PURE__*/React.createElement(Tag, _extends({}, props, {
    className: classNames(cName, sideClass, className)
  }), children);
};
process.env.NODE_ENV !== "production" ? Sidebar.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Sidebar can be placed on two positions */
  position: PropTypes.oneOf(["left", "right"]),
  /** Sidebar can be scrollable */
  scrollable: PropTypes.bool,
  /** Loading flag. */
  loading: PropTypes.bool,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default Sidebar;