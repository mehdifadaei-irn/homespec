import { StaticImageData } from "next/image";
import { ElementType } from "react";

export interface HomePageBenefitsCardPropsType {
  title: string;
  description: string;
  Icon: ElementType;
}
export interface HomePageShopCardPropsType {
  label: string;
  imagePath: StaticImageData;
}
