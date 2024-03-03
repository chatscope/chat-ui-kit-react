import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { noop } from "../utils";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import ContentEditable from "../ContentEditable";
import SendButton from "../Buttons/SendButton";
import AttachmentButton from "../Buttons/AttachmentButton";
import PerfectScrollbar from "../Scroll";

// Because container depends on fancyScroll
// it must be wrapped in additional container
function editorContainer() {
  class Container extends Component {
    render() {
      const {
        props: { fancyScroll, children, forwardedRef, ...rest },
      } = this;

      return (
        <>
          {fancyScroll === true && (
            <PerfectScrollbar
              ref={(elRef) => (forwardedRef.current = elRef)}
              {...rest}
              options={{ suppressScrollX: true }}
            >
              {children}
            </PerfectScrollbar>
          )}
          {fancyScroll === false && (
            <div ref={forwardedRef} {...rest}>
              {children}
            </div>
          )}
        </>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <Container forwardedRef={ref} {...props} />;
  });
}

const EditorContainer = editorContainer();

const useControllableState = (value, initialValue) => {
  const initial = typeof value !== "undefined" ? value : initialValue;
  const [stateValue, setStateValue] = useState(initial);
  const effectiveValue = typeof value !== "undefined" ? value : stateValue;

  return [
    effectiveValue,
    (newValue) => {
      setStateValue(newValue);
    },
  ];
};

function MessageInputInner(
  {
    value = undefined,
    onSend = noop,
    onChange = noop,
    autoFocus = false,
    placeholder = "",
    fancyScroll = true,
    className,
    activateAfterChange = false,
    disabled = false,
    sendDisabled,
    sendOnReturnDisabled = false,
    attachDisabled = false,
    sendButton = true,
    attachButton = true,
    onAttachClick = noop,
    ...rest
  },
  ref
) {
  const scrollRef = useRef();
  const msgRef = useRef();
  const [stateValue, setStateValue] = useControllableState(value, "");
  const [stateSendDisabled, setStateSendDisabled] = useControllableState(
    sendDisabled,
    true
  );

  // Public API
  const focus = () => {
    if (typeof msgRef.current !== "undefined") {
      msgRef.current.focus();
    }
  };

  // Return object with public Api
  useImperativeHandle(ref, () => ({
    focus,
  }));

  // Set focus
  useEffect(() => {
    if (autoFocus === true) {
      focus();
    }
  }, []);

  // Update scroll
  useEffect(() => {
    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }
  });

  const getContent = () => {
    // Direct reference to contenteditable div
    const contentEditableRef = msgRef.current.msgRef.current;
    return [
      contentEditableRef.textContent,
      contentEditableRef.innerText,
      contentEditableRef.cloneNode(true).childNodes,
    ];
  };

  const send = () => {
    if (stateValue.length > 0) {
      // Clear input only when it's uncontrolled mode
      if (value === undefined) {
        setStateValue("");
      }

      // Disable send button only when it's uncontrolled mode
      if (typeof sendDisabled === "undefined") {
        setStateSendDisabled(true);
      }

      const content = getContent();

      onSend(stateValue, content[0], content[1], content[2]);
    }
  };

  const handleKeyPress = (evt) => {
    if (
      evt.key === "Enter" &&
      evt.shiftKey === false &&
      sendOnReturnDisabled === false
    ) {
      evt.preventDefault();
      send();
    }
  };

  const handleChange = (innerHTML, textContent, innerText) => {
    setStateValue(innerHTML);
    if (typeof sendDisabled === "undefined") {
      setStateSendDisabled(textContent.length === 0);
    }

    if (typeof scrollRef.current.updateScroll === "function") {
      scrollRef.current.updateScroll();
    }

    const content = getContent();

    onChange(innerHTML, textContent, innerText, content[2]);
  };

  const cName = `${prefix}-message-input`,
    ph = typeof placeholder === "string" ? placeholder : "";

  return (
    <div
      {...rest}
      className={classNames(
        cName,
        { [`${cName}--disabled`]: disabled },
        className
      )}
    >
      {attachButton === true && (
        <div className={`${cName}__tools`}>
          <AttachmentButton
            onClick={onAttachClick}
            disabled={disabled === true || attachDisabled === true}
          />
        </div>
      )}

      <div className={`${cName}__content-editor-wrapper`}>
        <EditorContainer
          fancyScroll={fancyScroll}
          ref={scrollRef}
          className={`${cName}__content-editor-container`}
        >
          <ContentEditable
            ref={msgRef}
            className={`${cName}__content-editor`}
            disabled={disabled}
            placeholder={ph}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            activateAfterChange={activateAfterChange}
            value={stateValue}
          />
        </EditorContainer>
      </div>
      {sendButton === true && (
        <div className={`${cName}__tools`}>
          <SendButton
            onClick={send}
            disabled={disabled === true || stateSendDisabled === true}
          />
        </div>
      )}
    </div>
  );
}

const MessageInput = forwardRef(MessageInputInner);
MessageInput.displayName = "MessageInput";

MessageInput.propTypes = {
  /** Value. */
  value: PropTypes.string,

  /** Placeholder. */
  placeholder: PropTypes.string,

  /** A input can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** Prevent that the input message is sent on a return press */
  sendOnReturnDisabled: PropTypes.bool,

  /** Send button can be disabled.<br>
   * It's state is tracked by component, but it can be forced */
  sendDisabled: PropTypes.bool,

  /**
   * Fancy scroll
   * This property is set in constructor, and is not changing when component update.
   */
  fancyScroll: PropTypes.bool,

  /**
   * Sets focus element and caret at the end of input<br>
   * when value is changed programmatically (e.g) from button click and element is not active
   */
  activateAfterChange: PropTypes.bool,

  /** Set focus after mount. */
  autoFocus: PropTypes.bool,

  /**
   * onChange handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onChange: PropTypes.func,

  /**
   * onSend handler<br>
   * @param {String} innerHtml
   * @param {String} textContent
   * @param {String} innerText
   * @param {NodeList} nodes
   */
  onSend: PropTypes.func,

  /** Additional classes. */
  className: PropTypes.string,

  /** Show send button */
  sendButton: PropTypes.bool,

  /** Show add attachment button */
  attachButton: PropTypes.bool,

  /** Disable add attachment button */
  attachDisabled: PropTypes.bool,

  /**
   * onAttachClick handler
   */
  onAttachClick: PropTypes.func,
};

MessageInputInner.propTypes = MessageInput.propTypes;

export { MessageInput };

export default MessageInput;
