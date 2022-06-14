import {ChatComponentPropsChildren} from "../../types";
import type {ReactElement} from "react";

export interface ConversationListOwnProps {
    scrollable?:boolean;
    loading?:boolean;
    loadingMore?:boolean;
    onYReachEnd?:(container:HTMLDivElement) => void;
}

export type ConversationListProps = ChatComponentPropsChildren<ConversationListOwnProps, "div">;

export declare const ConversationList: (props:ConversationListProps) => ReactElement<ConversationListProps>;

export default ConversationList;