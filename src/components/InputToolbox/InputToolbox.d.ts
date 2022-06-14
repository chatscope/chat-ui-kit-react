import type {ChatComponentPropsChildren, EmptyProps} from "../../types";
import {ReactElement} from "react";

export type InputToolboxOwnProps = EmptyProps;
export type InputToolboxProps = ChatComponentPropsChildren<InputToolboxOwnProps, "div">

export declare const InputToolbox: (props:InputToolboxProps) => ReactElement;

export default InputToolbox;