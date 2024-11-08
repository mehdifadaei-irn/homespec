import { ArrowRight2 } from "iconsax-react";
import Tasks from "@/assets/icons/common/tasks.svg";
import Earth from "@/assets/icons/common/earth.svg";
import Comment from "@/assets/icons/common/comment.svg";
import { planSpaces } from "../index.types";

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
              className="bg-white  px-5  group  py-2.5"
            >
              <div className=" py-4 group-hover:text-white transition-all duration-200 hover:bg-secondary flex cursor-pointer items-center justify-between border-b-[1.2px] border-oslo-gray">
                <span className=" font-normal w-20">{item.name}</span>
                <div className="flex  gap-x-1 flex-grow">
                  <div className="flex w-[80px] items-center gap-x-1">
                    <Tasks width={18} height={18} />
                    <span className="text-sm text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                  <div className="flex  items-center gap-x-1">
                    <Earth width={18} height={18} />
                    <span className="text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                  <div className="flex w-[90px] items-center gap-x-1">
                    <Comment width={18} height={18} />
                    <span className="text-secondary group-hover:text-white">
                      {item.val1} !!!
                    </span>
                  </div>
                </div>
                <ArrowRight2
                  width={20}
                  height={20}
                  className="h-5"
                  color="#00d563"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
