import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildren, ChatComponentProps, EmptyProps, MessageType} from "../../types";
import type {AvatarPosition, MessageDirection} from "../../types/unions";

export type MessageCustomContentProps = EmptyProps;

declare const MessageCustomContent: (props:ChatComponentPropsChildren<MessageCustomContentProps, "div">) => ReactElement;

export interface MessageHtmlContentProps {
    html?:string;
}

declare const MessageHtmlContent: (props:ChatComponentProps<MessageHtmlContentProps, "div">) => ReactElement;

export interface MessageImageContentProps {
    src?:string;
    width?:string|number;
    height?:string|number;
    alt?:string;
}

declare const MessageImageContent: (props:ChatComponentProps<MessageImageContentProps, "div">) => ReactElement;

export interface MessageTextContentProps {
    text?:string;
}

declare const MessageTextContent: (props:ChatComponentPropsChildren<MessageTextContentProps, "div">) => ReactElement;

export interface MessageHeaderProps {
    sender?:string;
    sentTime?:string;
}

declare const MessageHeader: (props:ChatComponentPropsChildren<MessageHeaderProps, "div">) => ReactElement;

export interface MessageFooterProps {
    sender?:string;
    sentTime?:string;
}

declare const MessageFooter: (props:ChatComponentPropsChildren<MessageFooterProps, "div">) => ReactElement;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type MessagePayload = string | Record<string, any> | MessageImageContentProps | ReactNode;
    
export interface MessageModel {
    message?:string;
    sentTime?:string;
    sender?:string;
    direction: MessageDirection;
    position: "single" | "first" | "normal" | "last" | 0 |  1 | 2 | 3;
    type?: MessageType;
    payload?: MessagePayload;
}

export interface MessageProps {
    model?: MessageModel;
    avatarSpacer?:boolean;
    avatarPosition?: AvatarPosition;
    type?: MessageType;
    payload?: MessagePayload;
}

declare const Message: {
    (props:ChatComponentPropsChildren<MessageProps, HTMLElement>):ReactElement;
    Header: typeof MessageHeader;
    HtmlContent: typeof MessageHtmlContent;
    TextContent: typeof MessageTextContent;
    ImageContent: typeof MessageImageContent;
    CustomContent: typeof MessageCustomContent;
    Footer:typeof MessageFooter;
};

export {
    MessageCustomContent,
    MessageHtmlContent,
    MessageImageContent,
    MessageTextContent,
    Message
};

export default Message;