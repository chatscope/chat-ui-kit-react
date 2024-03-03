import React from "react";
import { prefix } from "../settings";
import { allowedChildren, getChildren } from "../utils";
import classNames from "classnames";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";
import ConversationHeaderBack from "./ConversationHeaderBack";
import ConversationHeaderActions from "./ConversationHeaderActions";
import ConversationHeaderContent from "./ConversationHeaderContent";
import PropTypes from "prop-types";

export const ConversationHeader = ({ children = undefined, className, ...rest }) => {
  const cName = `${prefix}-conversation-header`;

  const [back, avatar, avatarGroup, content, actions] = getChildren(children, [
    ConversationHeaderBack,
    Avatar,
    AvatarGroup,
    ConversationHeaderContent,
    ConversationHeaderActions,
  ]);

  return (
    <div {...rest} className={classNames(cName, className)}>
      {back}
      {avatar && <div className={`${cName}__avatar`}>{avatar}</div>}
      {!avatar && avatarGroup && (
        <div className={`${cName}__avatar`}>{avatarGroup}</div>
      )}
      {content}
      {actions}
    </div>
  );
};

ConversationHeader.displayName = "ConversationHeader";

ConversationHeader.propTypes = {
  /**
   * Primary content.
   * Available elements:
   *
   * * &lt;Avatar /&gt;
   * * &lt;AvatarGroup /&gt;
   * * &lt;ConversationHeader.Back /&gt;
   * * &lt;ConversationHeader.Content /&gt;
   * * &lt;ConversationHeader.Actions /&gt;
   */
  children: allowedChildren([
    ConversationHeaderBack,
    Avatar,
    AvatarGroup,
    ConversationHeaderContent,
    ConversationHeaderActions,
  ]),

  /** Additional classes. */
  className: PropTypes.string,
};

ConversationHeader.Back = ConversationHeaderBack;
ConversationHeader.Actions = ConversationHeaderActions;
ConversationHeader.Content = ConversationHeaderContent;
export default ConversationHeader;
