import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";

export const ConversationHeaderContent = ({
  userName = "",
  info = "",
  children = undefined,
  className,
  ...rest
}) => {
  const cName = `${prefix}-conversation-header__content`;

  return (
    <div {...rest} className={classNames(cName, className)}>
      {typeof children !== "undefined" ? (
        children
      ) : (
        <>
          <div className={`${prefix}-conversation-header__user-name`}>
            {userName}
          </div>
          <div className={`${prefix}-conversation-header__info`}>{info}</div>
        </>
      )}
    </div>
  );
};

ConversationHeaderContent.displayName = "ConversationHeader.Content";

ConversationHeaderContent.propTypes = {
  /** Primary content. Has precedence over userName and info properties. */
  children: PropTypes.node,
  userName: PropTypes.node,
  info: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default ConversationHeaderContent;
