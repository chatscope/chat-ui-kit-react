import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";

export interface MainContainerProps {
    responsive?:boolean;
}

export declare const MainContainer: (props:ChatComponentPropsChildren<MainContainerProps, "div">) => ReactElement;

export default MainContainer;