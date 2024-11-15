function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from "react";
import PropTypes from "prop-types";
var replaceCaret = function replaceCaret(el, activateAfterChange) {
  var isTargetFocused = document.activeElement === el;

  // Place the caret at the end of the element
  var target = document.createTextNode("");

  // Put empty text node at the end of input
  el.appendChild(target);

  // do not move caret if element was not focused
  if (target !== null && target.nodeValue !== null && (isTargetFocused || activateAfterChange)) {
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
export var ContentEditable = /*#__PURE__*/function (_Component) {
  function ContentEditable(props) {
    var _this;
    _classCallCheck(this, ContentEditable);
    _this = _callSuper(this, ContentEditable, [props]);
    _defineProperty(_this, "innerHTML", function () {
      var _this2 = _this,
        value = _this2.props.value;
      return {
        __html: typeof value !== "undefined" ? value : ""
      };
    });
    _defineProperty(_this, "handleKeyPress", function (evt) {
      var _this3 = _this,
        onKeyPress = _this3.props.onKeyPress;
      onKeyPress === null || onKeyPress === void 0 || onKeyPress(evt);
    });
    _defineProperty(_this, "handleInput", function (evt) {
      var _this4 = _this,
        onChange = _this4.props.onChange;
      var target = evt.target;
      onChange === null || onChange === void 0 || onChange(target.innerHTML, target.textContent, target.innerText);
    });
    _this.msgRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _inherits(ContentEditable, _Component);
  return _createClass(ContentEditable, [{
    key: "focus",
    value:
    // Public API
    function focus() {
      if (typeof this.msgRef.current !== "undefined") {
        this.msgRef.current.focus();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus === true) {
        this.msgRef.current.focus();
      }
    }
  }, {
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
      return placeholder !== nextProps.placeholder || disabled !== nextProps.disabled || activateAfterChange !== nextProps.activateAfterChange;
    }
  }, {
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
    }
  }, {
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
      return /*#__PURE__*/React.createElement("div", {
        ref: msgRef,
        className: className,
        contentEditable: disabled === false,
        disabled: disabled,
        "data-placeholder": ph,
        onInput: handleInput,
        onKeyPress: handleKeyPress,
        dangerouslySetInnerHTML: innerHTML(),
        role: "textbox"
      });
    }
  }]);
}(Component);
process.env.NODE_ENV !== "production" ? ContentEditable.propTypes = {
  /** Value. */
  value: PropTypes.string,
  /** Placeholder. */
  placeholder: PropTypes.string,
  /** A input can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,
  /**
   * Sets focus element and caret at the end of input
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: PropTypes.bool,
  /** Set focus after mount. */
  autoFocus: PropTypes.bool,
  /**
   * onChange handler<br>
   * @param {String} value
   */
  onChange: PropTypes.func,
  /**
   * onKeyPress handler<br>
   * @param {String} value
   */
  onKeyPress: PropTypes.func,
  /** Additional classes. */
  className: PropTypes.string
} : void 0;
export default ContentEditable;