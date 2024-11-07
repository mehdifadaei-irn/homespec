import Image from "next/image";
import React from "react";
import findContractorProjects from "@/features/homepage/assets/images/find-contractor.projects.webp";
import findContractorProducts from "@/features/homepage/assets/images/find-contractor.products.webp";
import HBtn from "@/components/ui-kit/HBtn";
import RoundedSquare from "@/components/RoundedSquare";

const HomePageFindContractor = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} container flex flex-col gap-y-20 px-container`}
    >
      <div className="flex justify-between gap-x-4">
        <div className="relative">
          <Image
            src={findContractorProjects}
            alt="Contractors Find Projects"
            width={656}
            height={454}
          />
          <RoundedSquare
            borderRadius={[40, 0, 40, 0]}
            variant="outline"
            width={229}
            height={200}
            className="absolute -right-[140px] -top-[60px] -z-10"
          />
          <RoundedSquare
            borderRadius={[0, 40, 0, 40]}
            variant="outline"
            width={180}
            height={157}
            className="absolute -bottom-[82px] -left-[90px] -z-10"
          />
        </div>
        <div className="flex max-w-[406px] flex-col">
          <h3 className="text-[2rem]/[2.75rem] font-bold text-primary">
            Contractors Find Projects Easier
          </h3>
          <p className="mt-[76px] text-xl text-primary">
            Project request will be in detailers scope and estimated cost{" "}
          </p>
          <div className="relative mx-auto mt-[100px]">
            <HBtn
              label="Join As A Contractor"
              variant="secondary"
              size="large"
            />
            <RoundedSquare
              borderRadius={[40, 0, 40, 0]}
              variant="outline"
              width={143}
              height={124}
              className="absolute -bottom-8 -right-[74px] -z-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between gap-x-4">
        <div className="relative">
          <Image
            src={findContractorProducts}
            alt="Vendors Sell Products Image"
            width={656}
            height={454}
          />
          <RoundedSquare
            borderRadius={[40, 0, 40, 0]}
            variant="outline"
            width={136}
            height={119}
            className="absolute -right-12 -top-[46px]"
          />
          <RoundedSquare
            borderRadius={[40, 0, 40, 0]}
            variant="outline"
            width={136}
            height={119}
            className="absolute -bottom-8 -left-12"
          />
        </div>
        <div className="flex max-w-[403px] flex-col justify-between">
          <div className="mt-[118px]">
            <h3 className="text-[2rem]/[2.75rem] font-bold text-primary">
              Vendors Sell More Products
            </h3>
            <p className="mt-10 text-xl text-primary">
              Bid requests will be sent to local vendors to promote their
              business
            </p>
          </div>
          <div className="relative self-end">
            <HBtn label="Join As A Vendor" variant="secondary" size="large" />
            <RoundedSquare
              borderRadius={[40, 0, 40, 0]}
              variant="outline"
              width={180}
              height={157}
              className="absolute -bottom-8 -left-16 -z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFindContractor;
