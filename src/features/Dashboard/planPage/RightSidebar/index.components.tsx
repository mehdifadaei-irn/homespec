import { planSpaces } from "../index.types";
import { ArrowRight2 } from "iconsax-react";
import Tasks from "@/assets/icons/common/tasks.svg";
import Earth from "@/assets/icons/common/earth.svg";
import Comment from "@/assets/icons/common/comment.svg";

const sideDataList: planSpaces[] = [
  {
    comments: 7,
    name: "Porch",
    total: "2/12",
    val1: 7,
  },
  {
    comments: 11,
    name: "Entry",
    total: "2/12",
    val1: 10,
  },
  {
    comments: 14,
    name: "Longue",
    total: "2/12",
    val1: 2,
  },
  {
    comments: 41,
    name: "Bed 5",
    total: "2/12",
    val1: 3,
  },
  {
    comments: 71,
    name: "Kitchen",
    total: "2/12",
    val1: 1,
  },
  {
    comments: 48,
    name: "Powder Room",
    total: "2/12",
    val1: 5,
  },
  {
    comments: 98,
    name: "Dining",
    total: "2/12",
    val1: 20,
  },
  {
    comments: 2,
    name: "Family",
    total: "2/12",
    val1: 7,
  },
  {
    comments: 2,
    name: "Garage",
    total: "2/12",
    val1: 4,
  },
  {
    comments: 2,
    name: "Butler",
    total: "2/12",
    val1: 10,
  },
  {
    comments: 2,
    name: "Butler1",
    total: "2/12",
    val1: 10,
  },
  {
    comments: 2,
    name: "Butler2",
    total: "2/12",
    val1: 10,
  },
  {
    comments: 2,
    name: "Family3",
    total: "2/12",
    val1: 7,
  },
];

type Props = {
  setSideDataHovered: (string: string | null) => void;
};

const RightSideBar = ({ setSideDataHovered }: Props) => {
  return (
    <div className="w-full">
      <div className="border-l-2 border-oslo-gray px-4 pt-4">
        <p className="text-xl font-bold text-black">Plan Spaces</p>
        <ul className="flex flex-col">
          {sideDataList.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() => setSideDataHovered(item.name)}
              onMouseLeave={() => setSideDataHovered(null)}
              // onClick={() => setSideDataItemClicked(item.name)}
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
