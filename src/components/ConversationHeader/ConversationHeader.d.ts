import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildren, EmptyProps} from "../../types";

export type ConversationHeaderActionsProps = EmptyProps;

declare const ConversationHeaderActions: (props:ChatComponentPropsChildren<ConversationHeaderActionsProps,HTMLElement>) => ReactElement;

export type ConversationHeaderBackProps = EmptyProps;

declare const ConversationHeaderBack: (props:ChatComponentPropsChildren<ConversationHeaderBackProps,"div">) => ReactElement;

export interface ConversationHeaderContentProps {
    userName?:ReactNode;
    info?:ReactNode;
}

declare const ConversationHeaderContent: (props:ChatComponentPropsChildren<ConversationHeaderContentProps,"div">) => ReactElement;

export type ConversationHeaderOwnProps = EmptyProps;
export type ConversationHeaderProps = ChatComponentPropsChildren<ConversationHeaderOwnProps,"div">; 
  
export declare const ConversationHeader: {
    (props:ConversationHeaderProps):ReactElement<ConversationHeaderProps,"ConversationHeader">;
    Back: typeof ConversationHeaderBack;
    Actions: typeof ConversationHeaderActions;
    Content: typeof ConversationHeaderContent;
};

export default ConversationHeader;