import { Eraser } from "iconsax-react";
import React from "react";

type Props={
    title: string;
    titleNumber: string;
    text:string;
    percentage: string;
    purchased: number;
    yetToBuy: number;
    notSelected: number;
    icon: string
}

const GroundFloorBottomSections = (props:Props) => {
  return (
    <section className="border-t-[1.5px] border-oslo-gray">
        <div className="px-2 py-3">
            <div className="flex">
                <div className="flex items-center">
                    <Eraser/>
                    <span className="font-bold">{props.title}</span>
                </div>
                <div className="" />
                <p>{props.titleNumber}</p>
            </div>
        </div>
    </section>
  );
};

export default GroundFloorBottomSections;
