import React, { useEffect, useState } from 'react'
import { planSpaces } from '../index.types'
import { ArrowRight2 } from 'iconsax-react'
import Tasks from "@/assets/icons/common/tasks.svg"
import Earth from "@/assets/icons/common/earth.svg"
import Comment from "@/assets/icons/common/comment.svg"
import Image from 'next/image'

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
  }, {
    comments: 2,
    name: "Family3",
    total: "2/12",
    val1: 7,
  },
]

type Props = {
  setSideDataHovered: (string: string | null) => void
}

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
              className="bg-white px-5 transition-all duration-200 hover:bg-secondary"
            >
              <div className="mt-4 flex cursor-pointer items-center justify-between border-b-[1.2px] border-oslo-gray pb-5">
                <span className="w-[90px] font-normal">{item.name}</span>
                <div className="flex w-[200px] gap-x-1">
                  <div className="flex w-[80px] items-center gap-x-1">
                    {/* <Tasks className={"h-6 w-6 scale-[0.81]"} /> */}
                    <Image src={Tasks} width={24} height={24} alt='Tasks' />
                    <span className="text-sm text-secondary">
                      {item.val1} !!!
                    </span>
                  </div>
                  <div className="flex w-[90px] items-center gap-x-1">
                    {/* <Earth className={"h-6 w-6 scale-[0.81]"} /> */}
                    <Image src={Earth} width={24} height={24} alt='Earh' />
                    <span className="text-secondary">{item.val1} !!!</span>
                  </div>
                  <div className="flex w-[90px] items-center gap-x-1">
                    {/* <Comment className={"h-6 w-6 scale-[0.81]"} /> */}
                    <Image src={Comment} width={24} height={24} alt='Comment' />
                    <span className="text-secondary">{item.val1} !!!</span>
                  </div>
                </div>
                <ArrowRight2 />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default RightSideBar