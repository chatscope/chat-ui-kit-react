var _excluded = ["children", "position", "scrollable", "loading", "className"],
  _excluded2 = ["children"];
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
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import PerfectScrollbar from "../Scroll";
import classNames from "classnames";
import Overlay from "../Overlay";
import Loader from "../Loader";
export var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
    position = _ref.position,
    scrollable = _ref.scrollable,
    loading = _ref.loading,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-sidebar");
  var sideClass = (function () {
    if (position === "left") {
      return "".concat(cName, "--left");
    } else if (position === "right") {
      return "".concat(cName, "--right");
    } else {
      return "";
    }
  })();

  /* eslint-disable react/display-name*/
  var Tag = useMemo(
    function () {
      return function (_ref2) {
        var children = _ref2.children,
          rest = _objectWithoutProperties(_ref2, _excluded2);
        // PerfectScrollbar for now can't be disabled, so render div instead of disabling it
        // https://github.com/goldenyz/react-perfect-scrollbar/issues/107
        if (scrollable === false || (scrollable === true && loading === true)) {
          return /*#__PURE__*/ React.createElement(
            "div",
            rest,
            loading &&
              /*#__PURE__*/ React.createElement(
                Overlay,
                null,
                /*#__PURE__*/ React.createElement(Loader, null)
              ),
            children
          );
        } else {
          return /*#__PURE__*/ React.createElement(
            PerfectScrollbar,
            rest,
            children
          );
        }
      };
    },
    [scrollable, loading]
  );
  return /*#__PURE__*/ React.createElement(
    Tag,
    _extends({}, props, {
      className: classNames(cName, sideClass, className),
    }),
    children
  );
};
process.env.NODE_ENV !== "production"
  ? (Sidebar.propTypes = {
      /** Primary content. */
      children: PropTypes.node,
      /** Sidebar can be placed on two positions */
      position: PropTypes.oneOf(["left", "right"]),
      /** Sidebar can be scrollable */
      scrollable: PropTypes.bool,
      /** Loading flag. */
      loading: PropTypes.bool,
      /** Additional classes. */
      className: PropTypes.string,
    })
  : void 0;
Sidebar.defaultProps = {
  children: undefined,
  position: undefined,
  scrollable: true,
  loading: false,
  className: "",
};
export default Sidebar;
