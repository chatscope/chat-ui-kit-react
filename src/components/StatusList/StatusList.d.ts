import type {ReactElement} from "react";
import type {ChatComponentPropsChildren, Size, UserStatus} from "../../types";

export interface StatusListProps {
  selected?: UserStatus;
  size?: Size;
  itemsTabIndex?:number;
  onChange?: (status:UserStatus) => void;
}

export declare const StatusList: (props:ChatComponentPropsChildren<StatusListProps, "ul">) => ReactElement;

export default StatusList;