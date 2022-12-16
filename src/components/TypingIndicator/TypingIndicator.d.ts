import type {ReactElement, ReactNode} from "react";
import type {ChatComponentProps} from "../../types";

export interface TypingIndicatorProps {
  content?:ReactNode;
}

export declare const TypingIndicator: (props:ChatComponentProps<TypingIndicatorProps, "div">) => ReactElement;

export default TypingIndicator;