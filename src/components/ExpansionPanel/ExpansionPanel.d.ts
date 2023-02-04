import type {ReactElement, MouseEvent} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export type ExpansionPanelOnChangeHandler<IsOpened extends boolean | undefined> = IsOpened extends boolean ? (evt: MouseEvent) => void : (state: boolean, evt: MouseEvent ) => void;

export interface ExpansionPanelProps<IsOpened extends boolean | undefined = undefined> {
    title?:string;
    open?:boolean;
    isOpened?: IsOpened;
    onChange?: ExpansionPanelOnChangeHandler<IsOpened>;   
}

export declare const ExpansionPanel: (props:ChatComponentPropsChildren<ExpansionPanelProps,"div">) => ReactElement;

export default ExpansionPanel;