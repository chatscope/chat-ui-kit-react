import React, { Component } from "react";
import PropTypes from "prop-types";

const replaceCaret = (el, activateAfterChange) => {
  const isTargetFocused = document.activeElement === el;

  // Place the caret at the end of the element
  const target = document.createTextNode("");

  // Put empty text node at the end of input
  el.appendChild(target);

  // do not move caret if element was not focused
  if (
    target !== null &&
    target.nodeValue !== null &&
    (isTargetFocused || activateAfterChange)
  ) {
    const sel = window.getSelection();
    if (sel !== null) {
      const range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
};

export class ContentEditable extends Component {
  constructor(props) {
    super(props);
    this.msgRef = React.createRef();
  }

  innerHTML = () => {
    const {
      props: { value },
    } = this;

    return {
      __html: typeof value !== "undefined" ? value : "",
    };
  };

  handleKeyPress = (evt) => {
    const {
      props: { onKeyPress },
    } = this;
    onKeyPress(evt);
  };

  handleInput = (evt) => {
    const {
      props: { onChange },
    } = this;

    const target = evt.target;
    onChange(target.innerHTML, target.textContent, target.innerText);
  };

  // Public API
  focus() {
    if (typeof this.msgRef.current !== "undefined") {
      this.msgRef.current.focus();
    }
  }

  componentDidMount() {
    if (this.props.autoFocus === true) {
      this.msgRef.current.focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    const {
      msgRef,
      props: { placeholder, disabled, activateAfterChange },
    } = this;

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
  }

  componentDidUpdate() {
    const {
      msgRef,
      props: { value, activateAfterChange },
    } = this;

    if (value !== msgRef.current.innerHTML) {
      msgRef.current.innerHTML = typeof value === "string" ? value : "";
    }

    replaceCaret(msgRef.current, activateAfterChange);
  }

  render() {
    const {
        msgRef,
        handleInput,
        handleKeyPress,
        innerHTML,
        props: { placeholder, disabled, className },
      } = this,
      ph = typeof placeholder === "string" ? placeholder : "";

    return (
      <div
        ref={msgRef}
        className={className}
        contentEditable={disabled === false}
        disabled={disabled}
        data-placeholder={ph}
        onInput={handleInput}
        onKeyPress={handleKeyPress}
        dangerouslySetInnerHTML={innerHTML()}
      ></div>
    );
  }
}

ContentEditable.propTypes = {
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
  className: PropTypes.string,
};

ContentEditable.defaultProps = {
  value: undefined,
  placeholder: "",
  disabled: false,
  activateAfterChange: false,
  autoFocus: false,
  onChange: () => {},
  onKeyPress: () => {},
};

export default ContentEditable;
