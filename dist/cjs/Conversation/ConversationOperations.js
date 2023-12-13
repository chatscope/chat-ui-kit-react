"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ConversationOperations = void 0;
var _react = _interopRequireDefault(require("react"));
var _cName = _interopRequireDefault(require("./cName"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _faEllipsisV = require("@fortawesome/free-solid-svg-icons/faEllipsisV");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = ["children", "className", "visible"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
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
var ConversationOperations = (exports.ConversationOperations = function ConversationOperations(
  _ref
) {
  var children = _ref.children,
    className = _ref.className,
    visible = _ref.visible,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends({}, rest, {
      className: (0, _classnames["default"])(
        "".concat(_cName["default"], "__operations"),
        _defineProperty(
          {},
          "".concat(_cName["default"], "__operations--visible"),
          visible
        ),
        className
      ),
    }),
    _react["default"].Children.count(children) > 0
      ? children
      : /*#__PURE__*/ _react["default"].createElement(
          _reactFontawesome.FontAwesomeIcon,
          {
            icon: _faEllipsisV.faEllipsisV,
          }
        )
  );
});
ConversationOperations.displayName = "Conversation.Operations";
process.env.NODE_ENV !== "production"
  ? (ConversationOperations.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,
      /** Additional classes. */
      className: _propTypes["default"].string,
      /** Always visible not only on hover */
      visible: _propTypes["default"].bool,
    })
  : void 0;
ConversationOperations.defaultProps = {};
var _default = (exports["default"] = ConversationOperations);
