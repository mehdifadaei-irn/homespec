import React from "react";
import { HomePageBenefitsCardPropsType } from "../types";
import HomePageBenefitsCard from "./BenefitsCard";
import BenefitCalculatorIcon from "@/features/homepage/assets/icons/benefits.calculator.svg";
import Benefit3DBoxIcon from "@/features/homepage/assets/icons/benefits.3d-box.svg";
import BenefitListIcon from "@/features/homepage/assets/icons/benefits.list.svg";
import BenefitCotrolIcon from "@/features/homepage/assets/icons/benefits.control.svg";
interface prop {
  className?: string;
}

const benefits: HomePageBenefitsCardPropsType[] = [
  {
    title: "Fast Cost Estimation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    Icon: BenefitCalculatorIcon,
  },
  {
    title: "3D View of Your Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    Icon: Benefit3DBoxIcon,
  },
  {
    title: "Material list",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    Icon: BenefitListIcon,
  },
  {
    title: "Easy Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    Icon: BenefitCotrolIcon,
  },
];

const HomePageBenefitsSection = ({ className }: prop) => {
  return (
    <>
      <section
        className={`${className} container flex flex-col justify-center gap-24`}
      >
        <div className="relative mx-auto w-fit">
          <h2
            className={`text-center text-[2rem]/[2rem] font-bold text-primary`}
          >
            Benefits You Get
            <br />
            Using Our Services
          </h2>
          <div className="absolute -left-[190px] top-5 h-px w-[205px] bg-primary" />
          <div className="absolute -right-[123px] bottom-0 h-px w-[205px] bg-primary" />
        </div>

        <ul className="flex justify-between gap-16">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <HomePageBenefitsCard
                Icon={benefit.Icon}
                title={benefit.title}
                description={benefit.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default HomePageBenefitsSection;
