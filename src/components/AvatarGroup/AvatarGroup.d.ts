import type {ReactElement} from "react";
import type {ChatComponentPropsChildren, Size} from "../../types";

export interface AvatarGroupProps {
    max?:number;
    size?:Size;
    activeIndex?:number;
    hoverToFront?:boolean;
}

export declare const AvatarGroup: (props:ChatComponentPropsChildren<AvatarGroupProps,"div">) => ReactElement;

export default AvatarGroup;