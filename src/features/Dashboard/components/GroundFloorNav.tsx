import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { EyeSlash, Image, Layer, Note } from "iconsax-react";

const GroundFloorNav = () => {
  return (
    <nav className="flex h-16 w-full items-center border-b-[1.5px] border-t border-oslo-gray border-white/10 bg-white pt-1">
      <ul className="ml-4 flex w-[100%] justify-between 2xl:ml-6 2xl:w-[75%]">
        <li className="ml-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col items-center justify-center !border-none !outline-none">
              <Layer color="#354E37" size={27} />
              <span className="text-xs font-normal">Layer</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">
                  Room Selection
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">Electrical</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">Plumbing</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">Material</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">Annotations</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="group cursor-pointer hover:bg-secondary">
                <EyeSlash />
                <span className="group-hover:text-yellow-50">
                  Notifications
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <div className="mx-7 mt-[6px] h-[1.6rem] w-[1px] bg-oslo-gray" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <Note color="#354E37" size={27} />
            <span className="text-xs font-normal">Add note</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image color="#354E37" size={27} />
            <span className="r text-xs font-normal">Add Picture</span>
          </div>
        </li>
        <div className="mx-7 mt-[6px] h-[1.6rem] w-[1px] bg-oslo-gray" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <Note color="#354E37" size={27} />
            <span className="text-xs font-normal">Edit screen</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image color="#354E37" size={27} />
            <span className="r text-xs font-normal">Measure</span>
          </div>
        </li>
        <div className="mx-7 mt-[6px] h-[1.6rem] w-[1px] bg-oslo-gray" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <Note color="#354E37" size={27} />
            <span className="text-xs font-normal">Zoom</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image color="#354E37" size={27} />
            <span className="r text-xs font-normal">3D View</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default GroundFloorNav;
