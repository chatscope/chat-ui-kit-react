var _excluded = ["className", "direction", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
export var ArrowButton = function ArrowButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "right" : _ref$direction,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button--arrow");
  var icon = function () {
    if (direction === "up") {
      return faArrowUp;
    } else if (direction === "right") {
      return faArrowRight;
    } else if (direction === "down") {
      return faArrowDown;
    } else if (direction === "left") {
      return faArrowLeft;
    }
  }();
  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    className: classNames(cName, className),
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: icon
    })
  }), children);
};
process.env.NODE_ENV !== "production" ? ArrowButton.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  direction: PropTypes.oneOf(["up", "right", "down", "left"])
} : void 0;
export default ArrowButton;