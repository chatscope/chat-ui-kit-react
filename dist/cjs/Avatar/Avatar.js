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
exports["default"] = exports.Avatar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _settings = require("../settings");
var _classnames = _interopRequireDefault(require("classnames"));
var _Status = require("../Status/Status");
var _enums = require("../enums");
var _excluded = [
  "name",
  "src",
  "size",
  "status",
  "className",
  "active",
  "children",
];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n["default"] = e), t && t.set(e, n), n;
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
function AvatarInner(_ref, ref) {
  var name = _ref.name,
    src = _ref.src,
    size = _ref.size,
    status = _ref.status,
    className = _ref.className,
    active = _ref.active,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-avatar");
  var sizeClass =
    typeof size !== "undefined" ? " ".concat(cName, "--").concat(size) : "";
  var avatarRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        return avatarRef.current.focus();
      },
    };
  });
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    _extends(
      {
        ref: avatarRef,
      },
      rest,
      {
        className: (0, _classnames["default"])(
          "".concat(cName).concat(sizeClass),
          _defineProperty({}, "".concat(cName, "--active"), active),
          className
        ),
      }
    ),
    children
      ? children
      : /*#__PURE__*/ _react["default"].createElement(
          _react["default"].Fragment,
          null,
          /*#__PURE__*/ _react["default"].createElement("img", {
            src: src,
            alt: name,
          }),
          typeof status === "string" &&
            /*#__PURE__*/ _react["default"].createElement(_Status.Status, {
              status: status,
              size: size,
            }),
          " "
        )
  );
}
var Avatar = (exports.Avatar = /*#__PURE__*/ (0, _react.forwardRef)(
  AvatarInner
));
Avatar.displayName = "Avatar";
Avatar.propTypes = {
  /** Primary content */
  children: _propTypes["default"].node,
  /**
   * User name/nickname/full name for displaying initials and image alt description
   */
  name: _propTypes["default"].string,
  /** Avatar image source */
  src: _propTypes["default"].string,
  /** Size */
  size: _propTypes["default"].oneOf(_enums.SizeEnum),
  /** Status. */
  status: _propTypes["default"].oneOf(_enums.StatusEnum),
  /** Active */
  active: _propTypes["default"].bool,
  /** Additional classes. */
  className: _propTypes["default"].string,
};
process.env.NODE_ENV !== "production"
  ? (AvatarInner.propTypes = Avatar.propTypes)
  : void 0;
AvatarInner.defaultProps = {
  name: "",
  src: "",
  size: "md",
  active: false,
};
Avatar.defaultProps = AvatarInner.defaultProps;
var _default = (exports["default"] = Avatar);
