"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import Layer from "@/assets/icons/common/layers.svg";

import { ArrowRight2, EyeSlash } from "iconsax-react";
import { cn } from "@/lib/utils";

const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger className=" !border-none !outline-none flex gap-x-3 cursor-pointer">
        <div className="flex flex-col gap-y-1.5 items-center justify-center">
          <Layer color="#354E37" size={31} className="scale-[1.3]" />
          <span className="text-xs font-normal">Layer</span>
        </div>
        <ArrowRight2
          width={26}
          height={26}
          className={cn(
            "h-5 translate-y-1 rotate-0 transition-all duration-300",
            {
              "rotate-0": !isOpen,
              "rotate-90": isOpen,
            }
          )}
          color="#000"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Room Selection</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Electrical</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Plumbing</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Material</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Annotations</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="group cursor-pointer hover:!bg-secondary/40">
          <EyeSlash color="#D6A217" />
          <span className="group-hover:text-yellow-50">Notifications</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropDown;
