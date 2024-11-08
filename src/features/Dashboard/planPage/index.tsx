"use client"
import { HTab, HTabItem } from "@/components/ui-kit/HTab";
import React, { useState } from "react";
import GroundFloor from "./GroundFloor/index.components";
import FirstFloor from "./FirstFloor/index.components";
import RightSideBar from "./RightSidebar/index.components";

const PlanPage = () => {
  const [SideDataHovered, setSideDataHovered] = useState<string | null>(null);

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
                setSideDataHovered={setSideDataHovered}
                sideDataHovered={SideDataHovered}
              />
            </HTabItem>
            <HTabItem label="First Floor" value="First-Floor">
              <FirstFloor />
            </HTabItem>
          </HTab>
        </section>
        <section className="w-[420px]">
          <RightSideBar setSideDataHovered={setSideDataHovered} />
        </section>
      </div>
    </div>
  );
};

export default PlanPage;
