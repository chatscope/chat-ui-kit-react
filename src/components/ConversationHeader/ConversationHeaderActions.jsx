import React from "react";
import PropTypes from "prop-types";
import { prefix } from "../settings";
import classNames from "classnames";

export const ConversationHeaderActions = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-conversation-header__actions`;

  return (
    <section {...rest} className={classNames(cName, className)}>
      {children}
    </section>
  );
};

ConversationHeaderActions.displayName = "ConversationHeader.Actions";

ConversationHeaderActions.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default ConversationHeaderActions;
