import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface ConversationOperationsProps {
    visible?:boolean;
}

declare const ConversationOperations: (props:ChatComponentPropsChildren<ConversationOperationsProps,"div">) => ReactElement;

export interface ConversationContentProps {
    name?:ReactNode;
    lastSenderName?: ReactNode;
    info?:ReactNode;
}

declare const ConversationContent: (props:ChatComponentPropsChildren<ConversationContentProps,"div">) => ReactElement;

export interface ConversationProps {
    name?:ReactNode;
    unreadCnt?:number;
    unreadDot?:boolean;
    lastSenderName?:ReactNode;
    info?:ReactNode;
    lastActivityTime?:ReactNode;
    active?:boolean;
}

export declare const Conversation: {
    (props:ChatComponentPropsChildren<ConversationProps,"div">):ReactElement,
    Operations: typeof ConversationOperations;
    Content: typeof ConversationContent;
};

export default Conversation;





