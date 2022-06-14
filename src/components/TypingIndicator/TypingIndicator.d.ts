import type {ReactElement} from "react";
import type {ChatComponentProps} from "../../types";

export interface TypingIndicatorProps {
  content?:string;
}

export declare const TypingIndicator: (props:ChatComponentProps<TypingIndicatorProps, "div">) => ReactElement;

export default TypingIndicator;