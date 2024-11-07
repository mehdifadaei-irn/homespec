import Image from "next/image";
import React from "react";
import { HomePageShopCardPropsType } from "../types";

import classes from "@/features/homepage/assets/style/index.module.css";
const HomePageShopCard = ({ imagePath, label }: HomePageShopCardPropsType) => {
  return (
    <div className="relative">
      <Image src={imagePath} alt={`${label} image`} height={204} width={350} />
      <div className="absolute left-0 top-4">
        <div
          className={`h-9 w-[170px] bg-opacity-90 bg-blend-normal backdrop-blur-[9px] ${classes["shop-card__badge--bg"]}`}
        ></div>
        <div className="absolute left-6 top-1.5 text-lg font-medium text-primary">
          {label}
        </div>
      </div>
    </div>
  );
};

export default HomePageShopCard;
