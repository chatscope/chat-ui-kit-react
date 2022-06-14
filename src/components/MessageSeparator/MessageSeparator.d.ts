import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";

// TODO: How to type element TYPE HERE?
export interface MessageSeparatorProps {
  as?:string;
}

export declare const MessageSeparator: (props:ChatComponentPropsChildren<MessageSeparatorProps, "div">) => ReactElement;
export default MessageSeparator;