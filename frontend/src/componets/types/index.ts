
import { MouseEventHandler } from "react";

export interface CostomButtonType{
    title: String;
    contenstStayle?: string;
    handleClicks?:
       MouseEventHandler<HTMLButtonElement>;
}