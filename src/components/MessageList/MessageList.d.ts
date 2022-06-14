import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildrenRef} from "../../types";

export interface MessageListOwnProps {
  typingIndicator?: ReactNode;
  loading?:boolean;
  loadingMore?:boolean;
  loadingMorePosition?:"top" | "bottom";
  onYReachStart?: (container:HTMLDivElement) => void;
  onYReachEnd?: (container:HTMLDivElement) => void;
  disableOnYReachWhenNoScroll?:boolean;
  autoScrollToBottom?:boolean;
  autoScrollToBottomOnMount?:boolean;
  scrollBehavior?: "auto" | "smooth";
}

export type MessageListProps = ChatComponentPropsChildrenRef<MessageListOwnProps, "div">

export declare const MessageList: (props:MessageListProps) => ReactElement;

export default MessageList;