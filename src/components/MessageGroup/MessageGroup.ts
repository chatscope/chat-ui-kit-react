import type {ReactElement} from "react";
import type {ChatComponentPropsChildren, EmptyProps} from "../../types";
import type {AvatarPosition, MessageDirection} from "../../types/unions";

export type MessageGroupHeaderProps = EmptyProps; 
    
export declare const MessageGroupHeader: (props:ChatComponentPropsChildren<MessageGroupHeaderProps, "div">) => ReactElement;

export type MessageGroupFooterProps = EmptyProps;

export declare const MessageGroupFooter: (props:ChatComponentPropsChildren<MessageGroupFooterProps, "div">) => ReactElement;


export type MessageGroupMessagesProps = EmptyProps;

export declare const MessageGroupMessages: (props:ChatComponentPropsChildren<MessageGroupMessagesProps, "div">) => ReactElement;

export interface MessageGroupProps {
    direction?:MessageDirection;
    avatarPosition?:AvatarPosition;
    sentTime?:string;
    sender?:string;
}

export declare const MessageGroup: {
    (props:ChatComponentPropsChildren<MessageGroupProps, HTMLElement>):ReactElement;
    Header: typeof MessageGroupHeader;
    Footer: typeof MessageGroupFooter;
    Messages: typeof MessageGroupMessages;
};

export default MessageGroup;