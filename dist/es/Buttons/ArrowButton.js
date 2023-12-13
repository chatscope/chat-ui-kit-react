var _excluded = ["className", "direction", "children"];
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
  var className = _ref.className,
    direction = _ref.direction,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button--arrow");
  var icon = (function () {
    if (direction === "up") {
      return faArrowUp;
    } else if (direction === "right") {
      return faArrowRight;
    } else if (direction === "down") {
      return faArrowDown;
    } else if (direction === "left") {
      return faArrowLeft;
    }
  })();
  return /*#__PURE__*/ React.createElement(
    Button,
    _extends({}, rest, {
      className: classNames(cName, className),
      icon: /*#__PURE__*/ React.createElement(FontAwesomeIcon, {
        icon: icon,
      }),
    }),
    children
  );
};
process.env.NODE_ENV !== "production"
  ? (ArrowButton.propTypes = {
      /**
       * Primary content.
       */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
      direction: PropTypes.oneOf(["up", "right", "down", "left"]),
    })
  : void 0;
ArrowButton.defaultProps = {
  className: "",
  direction: "right",
};
export default ArrowButton;
