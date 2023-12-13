"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.ContentEditable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
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
var replaceCaret = function replaceCaret(el, activateAfterChange) {
  var isTargetFocused = document.activeElement === el;

  // Place the caret at the end of the element
  var target = document.createTextNode("");

  // Put empty text node at the end of input
  el.appendChild(target);

  // do not move caret if element was not focused
  if (
    target !== null &&
    target.nodeValue !== null &&
    (isTargetFocused || activateAfterChange)
  ) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
};
var ContentEditable = (exports.ContentEditable = /*#__PURE__*/ (function (
  _Component
) {
  _inherits(ContentEditable, _Component);
  var _super = _createSuper(ContentEditable);
  function ContentEditable(props) {
    var _this;
    _classCallCheck(this, ContentEditable);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "innerHTML", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
        value = _assertThisInitialize.props.value;
      return {
        __html: typeof value !== "undefined" ? value : "",
      };
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (
      evt
    ) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        onKeyPress = _assertThisInitialize2.props.onKeyPress;
      onKeyPress(evt);
    });
    _defineProperty(_assertThisInitialized(_this), "handleInput", function (
      evt
    ) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
        onChange = _assertThisInitialize3.props.onChange;
      var target = evt.target;
      onChange(target.innerHTML, target.textContent, target.innerText);
    });
    _this.msgRef = /*#__PURE__*/ _react["default"].createRef();
    return _this;
  }
  _createClass(ContentEditable, [
    {
      key: "focus",
      value:
        // Public API
        function focus() {
          if (typeof this.msgRef.current !== "undefined") {
            this.msgRef.current.focus();
          }
        },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.autoFocus === true) {
          this.msgRef.current.focus();
        }
      },
    },
    {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        var msgRef = this.msgRef,
          _this$props = this.props,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          activateAfterChange = _this$props.activateAfterChange;
        if (typeof msgRef.current === "undefined") {
          return true;
        }
        if (nextProps.value !== msgRef.current.innerHTML) {
          return true;
        }

        // DO NOT place callbacks here in comparison!
        return (
          placeholder !== nextProps.placeholder ||
          disabled !== nextProps.disabled ||
          activateAfterChange !== nextProps.activateAfterChange
        );
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var msgRef = this.msgRef,
          _this$props2 = this.props,
          value = _this$props2.value,
          activateAfterChange = _this$props2.activateAfterChange;
        if (value !== msgRef.current.innerHTML) {
          msgRef.current.innerHTML = typeof value === "string" ? value : "";
        }
        replaceCaret(msgRef.current, activateAfterChange);
      },
    },
    {
      key: "render",
      value: function render() {
        var msgRef = this.msgRef,
          handleInput = this.handleInput,
          handleKeyPress = this.handleKeyPress,
          innerHTML = this.innerHTML,
          _this$props3 = this.props,
          placeholder = _this$props3.placeholder,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          ph = typeof placeholder === "string" ? placeholder : "";
        return /*#__PURE__*/ _react["default"].createElement("div", {
          ref: msgRef,
          className: className,
          contentEditable: disabled === false,
          disabled: disabled,
          "data-placeholder": ph,
          onInput: handleInput,
          onKeyPress: handleKeyPress,
          dangerouslySetInnerHTML: innerHTML(),
        });
      },
    },
  ]);
  return ContentEditable;
})(_react.Component));
process.env.NODE_ENV !== "production"
  ? (ContentEditable.propTypes = {
      /** Value. */
      value: _propTypes["default"].string,
      /** Placeholder. */
      placeholder: _propTypes["default"].string,
      /** A input can show it is currently unable to be interacted with. */
      disabled: _propTypes["default"].bool,
      /**
       * Sets focus element and caret at the end of input
       * when value is changed programmatically (e.g) from button click and element is not active
       */
      activateAfterChange: _propTypes["default"].bool,
      /** Set focus after mount. */
      autoFocus: _propTypes["default"].bool,
      /**
       * onChange handler<br>
       * @param {String} value
       */
      onChange: _propTypes["default"].func,
      /**
       * onKeyPress handler<br>
       * @param {String} value
       */
      onKeyPress: _propTypes["default"].func,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
ContentEditable.defaultProps = {
  value: undefined,
  placeholder: "",
  disabled: false,
  activateAfterChange: false,
  autoFocus: false,
  onChange: function onChange() {},
  onKeyPress: function onKeyPress() {},
};
var _default = (exports["default"] = ContentEditable);
