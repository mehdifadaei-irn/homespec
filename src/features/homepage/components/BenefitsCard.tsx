import React from "react";
import { HomePageBenefitsCardPropsType } from "../types";

const HomePageBenefitsCard = ({
  Icon,
  title,
  description,
}: HomePageBenefitsCardPropsType) => {
  return (
    <div className="flex gap-5">
      <Icon className="shrink-0 text-primary" />
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold text-primary">{title}</span>
        <p className="text-sm text-[#212121]/[0.87]">{description}</p>
      </div>
    </div>
  );
};

export default HomePageBenefitsCard;
