import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildrenRef, ChatComponentPropsChildren, EmptyProps} from "../../types";

export type MessageListContentProps = EmptyProps;

declare const MessageListContent: (props:ChatComponentPropsChildren<MessageListContentProps, "div">) => ReactElement;

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

declare const MessageList: {
  (props:MessageListProps):ReactElement;
  Content: typeof MessageListContent;
};

export {
  MessageListContent,
  MessageList
};

export default MessageList;