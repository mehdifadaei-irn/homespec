import React from "react";
import { HomePageShopCardPropsType } from "../types";
import HomePageShopCard from "./ShopCard";
import kitchenImage from "@/features/homepage/assets/images/shop.kitchen.webp";
import homeOfficeImage from "@/features/homepage/assets/images/shop.home-office.webp";
import bathroomImage from "@/features/homepage/assets/images/shop.bathroom.webp";
import HBtn from "@/components/ui-kit/HBtn";

const listContent: HomePageShopCardPropsType[] = [
  {
    imagePath: kitchenImage,
    label: "Kitchen",
  },
  {
    imagePath: homeOfficeImage,
    label: "Home Office",
  },
  {
    imagePath: bathroomImage,
    label: "Bathroom",
  },
];
const HomePageShopSection = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} container flex flex-col items-center gap-12`}
    >
      <div className="flex flex-col items-center">
        <span className="text-xl font-medium text-black/85">
          Get your Material list needed for your project
        </span>
        <span className="text-[2.125rem]/[2.75rem] font-bold text-primary">
          Shop Online Right Here
        </span>
      </div>
      <ul className="flex w-full grow justify-between">
        {listContent.map((item, i) => (
          <li key={i}>
            <HomePageShopCard label={item.label} imagePath={item.imagePath} />
          </li>
        ))}
      </ul>

      <HBtn
        label="Shop Online"
        variant="secondary"
        styleType="fill"
        size="large"
      />
    </section>
  );
};

export default HomePageShopSection;
