// https://github.com/goldenyz/react-perfect-scrollbar/
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "./perfect-scrollbar.esm.js";

const handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd",
};
Object.freeze(handlerNameByEvent);

export default class ScrollBar extends Component {
  constructor(props) {
    super(props);
    this.handleRef = this.handleRef.bind(this);
    this._handlerByEvent = {};
  }

  componentDidMount() {
    if (this.props.option) {
      /* eslint-disable-next-line no-console */
      console.warn(
        'react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'
      );
    }

    this._ps = new PerfectScrollbar(
      this._container,
      this.props.options || this.props.option
    );
    // hook up events
    this._updateEventHook();
    this._updateClassName();
  }

  componentDidUpdate(prevProps) {
    this._updateEventHook(prevProps);

    this.updateScroll();

    if (prevProps.className !== this.props.className) {
      this._updateClassName();
    }
  }

  componentWillUnmount() {
    // unhook up evens
    Object.keys(this._handlerByEvent).forEach((key) => {
      const value = this._handlerByEvent[key];

      if (value) {
        this._container.removeEventListener(key, value, false);
      }
    });
    this._handlerByEvent = {};
    this._ps.destroy();
    this._ps = null;
  }

  _updateEventHook(prevProps = {}) {
    // hook up events
    Object.keys(handlerNameByEvent).forEach((key) => {
      const callback = this.props[handlerNameByEvent[key]];
      const prevCallback = prevProps[handlerNameByEvent[key]];
      if (callback !== prevCallback) {
        if (prevCallback) {
          const prevHandler = this._handlerByEvent[key];
          this._container.removeEventListener(key, prevHandler, false);
          this._handlerByEvent[key] = null;
        }
        if (callback) {
          const handler = () => callback(this._container);
          this._container.addEventListener(key, handler, false);
          this._handlerByEvent[key] = handler;
        }
      }
    });
  }

  _updateClassName() {
    const { className } = this.props;

    const psClassNames = this._container.className
      .split(" ")
      .filter((name) => name.match(/^ps([-_].+|)$/))
      .join(" ");

    if (this._container) {
      this._container.className = `scrollbar-container${
        className ? ` ${className}` : ""
      }${psClassNames ? ` ${psClassNames}` : ""}`;
    }
  }

  updateScroll() {
    const onSync = this.props.onSync;
    if (typeof onSync === "function") {
      onSync(this._ps);
    } else {
      this._ps.update();
    }
  }

  handleRef(ref) {
    this._container = ref;
    this.props.containerRef?.(ref);
  }

  render() {
    const {
      className,
      style,
      option,
      options,
      containerRef,
      onScrollY,
      onScrollX,
      onScrollUp,
      onScrollDown,
      onScrollLeft,
      onScrollRight,
      onYReachStart,
      onYReachEnd,
      onXReachStart,
      onXReachEnd,
      component,
      onSync,
      children,
      ...remainProps
    } = this.props;

    const Comp = typeof component === "undefined" ? "div" : component;

    return (
      <Comp style={style} ref={this.handleRef} {...remainProps}>
        {children}
      </Comp>
    );
  }
}

ScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  option: PropTypes.object,
  options: PropTypes.object,
  containerRef: PropTypes.func,
  onScrollY: PropTypes.func,
  onScrollX: PropTypes.func,
  onScrollUp: PropTypes.func,
  onScrollDown: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onYReachStart: PropTypes.func,
  onYReachEnd: PropTypes.func,
  onXReachStart: PropTypes.func,
  onXReachEnd: PropTypes.func,
  onSync: PropTypes.func,
  component: PropTypes.string,
};
