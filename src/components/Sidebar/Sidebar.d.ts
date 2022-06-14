import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface SidebarProps {
  position: "left" | "right";
  scrollable?: boolean;
  loading?: boolean;
}

export declare const Sidebar: (props:ChatComponentPropsChildren<SidebarProps, "div">) => ReactElement;

export default Sidebar;