import type {ReactElement, ReactNode} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface ButtonProps {
  icon?:ReactNode;
  labelPosition?: "left" | "right";
  border?: boolean; 
}

export declare const Button: (props:ChatComponentPropsChildren<ButtonProps, "button">) => ReactElement;

export type AddUserButtonProps = Omit<ButtonProps,"icon">;

export declare const AddUserButton: (props:ChatComponentPropsChildren<AddUserButtonProps, "button">) => ReactElement;

export interface ArrowButtonProps extends Omit<ButtonProps,"icon"> {
  direction?: "up" | "right" | "down" | "left"
} 

export declare const ArrowButton: (props:ChatComponentPropsChildren<ArrowButtonProps, "button">) => ReactElement;

export type AttachmentButtonProps = Omit<ButtonProps,"icon">;

export declare const AttachmentButton: (props:ChatComponentPropsChildren<AttachmentButtonProps, "button">) => ReactElement;

export interface EllipsisButtonProps extends Omit<ButtonProps,"icon"> {
  orientation?: "horizontal" | "vertical"
}

export declare const EllipsisButton: (props:ChatComponentPropsChildren<EllipsisButtonProps, "button">) => ReactElement;

export type InfoButtonProps = Omit<ButtonProps,"icon">;

export declare const InfoButton: (props:ChatComponentPropsChildren<InfoButtonProps, "button">) => ReactElement;

export type SendButtonProps = Omit<ButtonProps,"icon">;

export declare const SendButton: (props:ChatComponentPropsChildren<SendButtonProps, "button">) => ReactElement;

export type StarButtonProps = Omit<ButtonProps,"icon">;

export declare const StarButton: (props:ChatComponentPropsChildren<StarButtonProps, "button">) => ReactElement;

export type VideoCallButtonProps = Omit<ButtonProps,"icon">;

export declare const VideoCallButton: (props:ChatComponentPropsChildren<VideoCallButtonProps, "button">) => ReactElement;

export type VoiceCallButtonProps = Omit<ButtonProps,"icon">;

export declare const VoiceCallButton: (props:ChatComponentPropsChildren<VoiceCallButtonProps, "button">) => ReactElement;