import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import React from "react";
import Earth from "@/assets/icons/common/earth.svg";
import { EyeSlash } from "iconsax-react";
import Image from "next/image";

type Props = {
  sideDataHovered: string | null;
  setSideDataHovered: (string: string) => void;
};

const GroundFloor = ({ sideDataHovered, setSideDataHovered }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <nav className="h-18 flex w-full items-center border-b-[1.5px] border-oslo-gray bg-white">
        <ul className="mx-9 mt-2 flex">
          <li className="mr-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-col items-center justify-center">
                <Image width={24} height={24} alt="earth" src={Earth} />
                <span>Layers</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuSeparator />
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary/60">
                  <EyeSlash />
                  <span className="group-hover:text-white">Room Selection</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                  <EyeSlash />
                  <span className="group-hover:text-white">Electrical</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                  <EyeSlash />
                  <span className="group-hover:text-white">Plumbing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                  <EyeSlash />
                  <span className="group-hover:text-white">Material</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                  <EyeSlash />
                  <span className="group-hover:text-white">Annotations</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                  <EyeSlash />
                  <span className="group-hover:text-white">Notifications</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <div className="mt-2 h-7 w-[1px] border border-oslo-gray bg-black" />
          <li className="ml-4 flex flex-col items-center justify-center">
            <Image width={24} height={24} alt="earth" src={Earth} />
            <span className="font-light text-sm ">Add note</span>
          </li>
          <li className="ml-4 flex flex-col items-center justify-center">
            <Image width={24} height={24} alt="earth" src={Earth} />
            <span>Layers</span>
          </li>
          <li className="ml-4 flex flex-col items-center justify-center">
            <Image width={24} height={24} alt="earth" src={Earth} />
            <span>Layers</span>
          </li>
          <div className="mt-2 h-7 w-[1px] border border-oslo-gray bg-black" />
        </ul>
      </nav>
      <div className="h-[35rem]">
        mainSide
        <h1>{sideDataHovered}</h1>
      </div>
      <div className="border-t-[1.5px] border-oslo-gray">BOttem</div>
    </div>
  );
};
  
export default GroundFloor;
