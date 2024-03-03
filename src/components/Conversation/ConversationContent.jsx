import React from "react";
import cName from "./cName";
import classNames from "classnames";
import PropTypes from "prop-types";

const LastSenderName = ({ name }) => (
  <>
    <div className={`${cName}__last-sender`}>{name}</div>
    {":"}
  </>
);

LastSenderName.propTypes = {
  name: PropTypes.node,
};

const InfoContent = ({ info }) => (
  <div className={`${cName}__info-content`}>{info}</div>
);

InfoContent.propTypes = {
  info: PropTypes.node,
};

export const ConversationContent = ({
  lastSenderName,
  info,
  name,
  children,
  className,
  ...rest
}) => {
  const typeofLastSenderName = typeof lastSenderName;

  return (
    <div {...rest} className={classNames(`${cName}__content`, className)}>
      {React.Children.count(children) > 0 ? (
        children
      ) : (
        <>
          <div className={`${cName}__name`}>{name}</div>
          <div className={`${cName}__info`}>
            {typeofLastSenderName !== "undefined" ? (
              <>
                {typeofLastSenderName === "string" ? (
                  <LastSenderName name={lastSenderName} />
                ) : (
                  lastSenderName
                )}{" "}
              </>
            ) : null}
            {typeof info !== "undefined" && <InfoContent info={info} />}
          </div>
        </>
      )}
    </div>
  );
};

ConversationContent.displayName = "Conversation.Content";

ConversationContent.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** First text line - contact name etc. */
  name: PropTypes.node,

  /** Last sender name. */
  lastSenderName: PropTypes.node,

  /** Informational message / last message. */
  info: PropTypes.node,
};


export default ConversationContent;
