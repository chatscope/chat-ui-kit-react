import type {
    DetailedHTMLProps, HTMLAttributes, PropsWithChildren,
    ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType
} from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type EmptyProps = Record<never, any>;

export type ElementTypeOrHTMLElement = ElementType | HTMLElement;
export type ChatComponentProps<P,T extends ElementTypeOrHTMLElement> = 
  P & (T extends ElementType ? Omit<ComponentPropsWithoutRef<T>, "children" | keyof P> : Omit<HTMLAttributes<T>, "children" | keyof P>);

export type ChatComponentPropsRef<P,T extends ElementTypeOrHTMLElement> = 
  P & (T extends ElementType ? Omit<ComponentPropsWithRef<T>, "children" | keyof P > : Omit<DetailedHTMLProps<HTMLAttributes<T>,T>, "children" | keyof P>);

export type ChatComponentPropsChildren<P,T extends ElementTypeOrHTMLElement> = PropsWithChildren<ChatComponentProps<P,T>>;

export type ChatComponentPropsChildrenRef<P,T extends ElementTypeOrHTMLElement> = PropsWithChildren<ChatComponentPropsRef<P,T>>;

export {Size, UserStatus, MessageType} from "./unions";
export * from "../components/Avatar/Avatar";
export * from "../components/AvatarGroup/AvatarGroup";
export * from "../components/Buttons/Buttons";
export * from "../components/ChatContainer/ChatContainer";
export * from "../components/Conversation/Conversation";
export * from "../components/ConversationHeader/ConversationHeader";
export * from "../components/ConversationList/ConversationList";
export * from "../components/ExpansionPanel/ExpansionPanel";
export * from "../components/InputToolbox/InputToolbox";
export * from "../components/Loader/Loader";
export * from "../components/MainContainer/MainContainer";
export * from "../components/Message/Message";
export * from "../components/MessageGroup/MessageGroup";
export * from "../components/MessageInput/MessageInput";
export * from "../components/MessageList/MessageList";
export * from "../components/MessageSeparator/MessageSeparator";
export * from "../components/Overlay/Overlay";
export * from "../components/Search/Search";
export * from "../components/Sidebar/Sidebar";
export * from "../components/Status/Status";
export * from "../components/StatusList/StatusList";
export * from "../components/TypingIndicator/TypingIndicator";