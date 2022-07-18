import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface ExpansionPanelProps {
    title?:string;
    open?:boolean;
}

export declare const ExpansionPanel: (props:ChatComponentPropsChildren<ExpansionPanelProps,"div">) => ReactElement;

export default ExpansionPanel;