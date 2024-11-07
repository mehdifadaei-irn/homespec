import React from "react";
import { HomePageBenefitsCardPropsType } from "../types";
import Image from "next/image";

const HomePageBenefitsCard = ({
  Icon,
  title,
  description,
}: HomePageBenefitsCardPropsType) => {
  return (
    <div className="flex gap-5">
      <Image alt={title} src={Icon} width={23} height={23} className="shrink-0 text-primary" />
      {/* <Icon className="shrink-0 text-primary" /> */}
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold text-primary">{title}</span>
        <p className="text-sm text-[#212121]/[0.87]">{description}</p>
      </div>
    </div>
  );
};

export default HomePageBenefitsCard;
