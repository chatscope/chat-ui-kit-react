import type {ReactElement} from "react";
import type {ChatComponentProps} from "../../types";

export interface ExpansionPanelProps {
    title?:string;
    open?:boolean;
}

export declare const ExpansionPanel: (props:ChatComponentProps<ExpansionPanelProps,"div">) => ReactElement;

export default ExpansionPanel;