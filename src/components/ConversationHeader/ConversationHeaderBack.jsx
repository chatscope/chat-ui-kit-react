import React from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";
import { ArrowButton } from "../Buttons";

export const ConversationHeaderBack = ({
  onClick = () => {},
  children = undefined,
  className,
  ...rest
}) => {
  const cName = `${prefix}-conversation-header__back`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {typeof children !== "undefined" ? (
        children
      ) : (
        <ArrowButton direction="left" onClick={onClick} />
      )}
    </div>
  );
};

ConversationHeaderBack.displayName = "ConversationHeader.Back";

ConversationHeaderBack.propTypes = {
  /** OnClick handler attached to button. */
  onClick: PropTypes.func,

  /** Primary content - override default button. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default ConversationHeaderBack;
