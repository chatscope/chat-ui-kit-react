var _excluded = ["className", "orientation", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons/faEllipsisH";
export var EllipsisButton = function EllipsisButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button--ellipsis");
  var icon = orientation === "vertical" ? faEllipsisV : faEllipsisH;
  return /*#__PURE__*/React.createElement(Button, _extends({}, rest, {
    className: classNames(cName, className),
    icon: /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: icon
    })
  }), children);
};
process.env.NODE_ENV !== "production" ? EllipsisButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  orientation: PropTypes.oneOf(["horizontal", "vertical"])
} : void 0;
export default EllipsisButton;