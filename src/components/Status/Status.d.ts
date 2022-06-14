import type {ReactElement} from "react";
import type {ChatComponentPropsChildren, Size, UserStatus} from "../../types";

export interface StatusProps {
  status: UserStatus;
  size: Size;
  name?:string;
  selected?:boolean;
}

export declare const Status: (props:ChatComponentPropsChildren<StatusProps, "div">) => ReactElement;

export default Status;