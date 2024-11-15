var _excluded = ["content", "as", "children", "className"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import { isChildrenNil } from "../utils";
export var MessageSeparator = function MessageSeparator(_ref) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? undefined : _ref$content,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "div" : _ref$as,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-message-separator");
  var Tag = function () {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return "div";
    }
  }();
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    className: classNames(cName, className)
  }), isChildrenNil(children) === true ? content : children);
};
process.env.NODE_ENV !== "production" ? MessageSeparator.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Shorthand for primary content. */
  content: PropTypes.node,
  /** An element type to render as. */
  as: PropTypes.elementType,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default MessageSeparator;