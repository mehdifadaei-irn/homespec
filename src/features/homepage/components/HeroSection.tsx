"use client";
import Image from "next/image";
import heroImage from "@/features/homepage/assets/images/main-hero.webp";
import ArrowDown from "@/features/homepage/assets/icons/arrow-down.svg";
import RoundedSquare from "@/components/RoundedSquare";
import HBtn from "@/components/ui-kit/HBtn";

const HomePageHeroSection = () => {
  return (
    <section className="container relative mx-auto px-container">
      <div className="flex justify-end">
        <div className="relative">
          <Image
            src={heroImage}
            alt="home decoration"
            width={832}
            height={616}
          />

          <RoundedSquare
            borderRadius={[0, 0, 0, 20]}
            variant="outline"
            width={120}
            height={120}
            className="absolute -bottom-8 -left-10 -z-10"
          />
          <RoundedSquare
            borderRadius={[0, 0, 20, 0]}
            variant="fill"
            width={120}
            height={120}
            className="absolute -bottom-8 -right-12 flex cursor-pointer items-center justify-center"
          >
            <ArrowDown />
          </RoundedSquare>
        </div>

        <div className="absolute -left-[60px] bottom-24 flex max-w-[544px] flex-col gap-9 rounded-br-[40px] bg-primary py-[86px] pl-28 pr-14 drop-shadow-[0px_4px_8px_rgb(112,112,112,0.42)]">
          <h1 className="text-[2rem]/[2.75rem] font-medium text-white">
            Our AI Remodeling Tool Help You Build Your Home As You Imagine.
          </h1>
          <p className="text-alabaster/85">
            Find your contractors, Shop for material, Communicate & Manage your
            project all in one platform
          </p>

          <HBtn
            className="absolute -bottom-7 left-1/2 w-fit -translate-x-1/2 border-2 border-white"
            label="Start Your Project"
            styleType="fill"
            href="/project/location"
            size="large"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
