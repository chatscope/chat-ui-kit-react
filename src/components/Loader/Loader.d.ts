import type {ReactElement} from "react";
import type {ChatComponentPropsChildren} from "../../types";
import type {LoaderVariant} from "../../types/unions";

export interface LoaderProps {
    variant?:LoaderVariant;
}

export declare const Loader: (props:ChatComponentPropsChildren<LoaderProps,"div">) => ReactElement;

export default Loader;