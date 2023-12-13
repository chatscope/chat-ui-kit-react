var _excluded = [
  "children",
  "title",
  "open",
  "isOpened",
  "onChange",
  "className",
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
import React, { useState, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
export var ExpansionPanel = function ExpansionPanel(_ref) {
  var children = _ref.children,
    title = _ref.title,
    defaultOpen = _ref.open,
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
  var opened = useMemo(
    function () {
      return typeof isOpened === "boolean" ? isOpened : open;
    },
    [isOpened, open]
  );
  var openModifier = opened === true ? "".concat(cName, "--open") : "";
  var icon = opened === true ? faChevronDown : faChevronLeft;
  var handleOpen = useCallback(
    function (e) {
      if (typeof isOpened === "boolean") {
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
      } else {
        setOpen(!opened);
        onChange === null || onChange === void 0
          ? void 0
          : onChange(!opened, e);
      }
    },
    [onChange, open, opened, isOpened]
  );
  return /*#__PURE__*/ React.createElement(
    "div",
    _extends({}, rest, {
      className: classNames(cName, openModifier, className),
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__header"),
        onClick: handleOpen,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__title"),
        },
        title
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "".concat(cName, "__icon"),
        },
        /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
          icon: icon,
        })
      )
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "".concat(cName, "__content"),
      },
      children
    )
  );
};
ExpansionPanel.displayName = "ExpansionPanel";
process.env.NODE_ENV !== "production"
  ? (ExpansionPanel.propTypes = {
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
      onChange: PropTypes.func,
    })
  : void 0;
ExpansionPanel.defaultProps = {
  children: undefined,
  title: "",
  open: false,
};
export default ExpansionPanel;
