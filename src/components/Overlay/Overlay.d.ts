import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface OverlayProps {
  blur?:boolean;
  grayscale?:boolean;
}

export declare const Overlay: (props:ChatComponentPropsChildren<OverlayProps, "div">) => ReactElement;

export default Overlay;