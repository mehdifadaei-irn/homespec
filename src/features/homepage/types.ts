import { StaticImageData } from "next/image";
import { ElementType } from "react";

export interface HomePageBenefitsCardPropsType {
    title: string;
    description: string;
    Icon: string;
}
export interface HomePageShopCardPropsType {
    label: string;
    imagePath: StaticImageData;
}
