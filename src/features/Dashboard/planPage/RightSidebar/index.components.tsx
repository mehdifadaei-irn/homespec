import { ArrowRight2 } from "iconsax-react";
import Tasks from "@/assets/icons/common/tasks.svg";
import Earth from "@/assets/icons/common/earth.svg";
import Comment from "@/assets/icons/common/comment.svg";
import { planSpaces } from "../index.types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

type Props = {
  sideDataList: any;
  setSideDataItemHovered: (string: string | null) => void;
  setSideDataItemClicked: (string: string | null) => void;
};

const RightSideBar = ({
  sideDataList,
  setSideDataItemHovered,
  setSideDataItemClicked,
}: Props) => {
  return (
    <div className="w-full">
      <div className="border-l-2 border-oslo-gray px-4 pt-4">
        <p className="text-xl font-bold text-black">Plan Spaces</p>
        <ul className="flex flex-col">
          {sideDataList.map((item: planSpaces) => (
            <li
              key={item.name}
              onMouseEnter={() => setSideDataItemHovered(item.name)}
              onMouseLeave={() => setSideDataItemHovered(null)}
              onClick={() => setSideDataItemClicked(item.name)}
              className="bg-white  px-5  group  pt-2.5 transition-all duration-200 hover:bg-secondary"
            >
              <div className=" py-4 group-hover:text-white  flex cursor-pointer items-center justify-between border-b-[1.2px] border-oslo-gray">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-16 ">
                      <div className="!w-[70px] truncate text-start">
                        <span className="font-normal truncate !w-16">
                          {item.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-oslo-gray">
                      <span className="font-normal ">{item.name}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <div className="flex  gap-x-1 w-[201px] justify-between items-center ">
                  <div className="flex  items-center gap-x-1 w-[61px]  ">
                    <Tasks width={18} height={18} />
                    <span className="text-sm text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                  <div className="flex  items-center gap-x-1 w-[61px]">
                    <Earth width={18} height={18} />
                    <span className="text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                  <div className="flex  items-center gap-x-1 w-[61px]">
                    <Comment width={18} height={18} />
                    <span className="text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                </div>
                <div className="">
                  <ArrowRight2
                    width={20}
                    height={20}
                    className="h-5"
                    color="#464646"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
