"use client";
import { HTab, HTabItem } from "@/components/ui-kit/HTab";
import React, { useState } from "react";
import GroundFloor from "./GroundFloor/index.components";
import FirstFloor from "./FirstFloor/index.components";
import RightSideBar from "./RightSidebar/index.components";
import { planSpaces } from "./index.types";

const PlanPage = () => {
  const [sideDataItemHovered, setSideDataItemHovered] = useState<string | null>(
    null
  );
  const [sideDataItemClicked, setSideDataItemClicked] = useState<string | null>(
    null
  );
  const [sideDataList, setSideDataList] = useState<planSpaces[] | null>([
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
      name: "Butler2",
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
      name: "Butler",
      total: "2/12",
      val1: 10,
    },
    {
      comments: 2,
      name: "Family2",
      total: "2/12",
      val1: 7,
    },
  ]);

  return (
    <div className="w-full pl-[303px]">
      <div className="flex min-h-screen bg-[#F6F6F6]">
        <section className="flex-grow">
          <HTab
            defaultValue="Ground-Floor"
            ui={{ content: "bg-transparent p-0" }}
          >
            <HTabItem label="Ground Floor" value="Ground-Floor">
              <GroundFloor
                setSideDataList={setSideDataList}
                setSideDataItemHovered={setSideDataItemHovered}
                setSideDataItemClicked={setSideDataItemClicked}
                sideDataItemClicked={sideDataItemClicked}
                sideDataItemHovered={sideDataItemHovered}
              />
            </HTabItem>
            <HTabItem label="First Floor" value="First-Floor">
              <FirstFloor />
            </HTabItem>
          </HTab>
        </section>
        <section className="w-[420px]">
          <RightSideBar
            setSideDataItemHovered={setSideDataItemHovered}
            setSideDataItemClicked={setSideDataItemClicked}
            sideDataList={sideDataList}
          />
        </section>
      </div>
    </div>
  );
};

export default PlanPage;
