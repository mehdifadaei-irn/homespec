import Image from "next/image";
import React from "react";
import signupDecorationImage from "@/features/homepage/assets/images/signup.decoration.webp";
import HBtn from "@/components/ui-kit/HBtn";
import RoundedSquare from "@/components/RoundedSquare";

const HomePageSignupSection = ({ className }: { className: string }) => {
  return (
    <section className={`${className} container relative px-container`}>
      <RoundedSquare
        borderRadius={[0, 40, 0, 40]}
        variant="outline"
        width={153}
        height={145}
        className="absolute -right-12 -top-[72px]"
      />
      <Image src={signupDecorationImage} alt="sketch home decoration" />

      <div className="absolute -bottom-36 -left-28 flex max-w-[707px] items-center gap-x-7 bg-primary py-9 pl-28 pr-9">
        <div className="text-[2rem]/[2.75rem] text-white">
          Join My Home Spec Free To Get Things Done Faster & Easier
        </div>

        <HBtn
          label="Create Your Profile"
          size="large"
          styleType="outline"
          className="w-[236px] shrink-0 border-white !px-0 text-white"
        />
      </div>
    </section>
  );
};

export default HomePageSignupSection;
