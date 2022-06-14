import type {Size, UserStatus, ChatComponentPropsChildrenRef} from "../../types";
import type {ReactElement} from "react";

export interface AvatarProps {
    name?:string;
    src?:string;
    size?: Size;
    status?: UserStatus;
    active?: boolean;
}

export declare const Avatar: (props:ChatComponentPropsChildrenRef<AvatarProps,"div">) => ReactElement;

export default Avatar;