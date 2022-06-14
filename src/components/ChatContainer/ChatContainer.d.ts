import type {ReactElement} from "react";
import type {
  ChatComponentPropsChildren,
} from "../../types/index";
import {EmptyProps} from "../../types/index";

export type ChatContainerOwnProps = EmptyProps;
export type ChatContainerProps = ChatComponentPropsChildren<ChatContainerOwnProps,"div">;

export declare const ChatContainer: (props:ChatComponentPropsChildren<ChatContainerProps,"div">) => ReactElement;

export default ChatContainer;
