import React from "react";
import GroundFloorNav from "../../components/GroundFloorNav";
import ThreeDCanvas from "@/components/ThreeD/ThreeDCanvas.jsx";


type Props = {
  sideDataItemHovered: string | null;
  sideDataItemClicked: string | null;
  setSideDataItemHovered: (string: string) => void;
  setSideDataItemClicked: (string: string) => void;
  // setSideDataList: (any) => void;
};

const GroundFloor = ({ sideDataItemHovered,
  sideDataItemClicked,
  setSideDataItemClicked,
  setSideDataItemHovered,
}: Props) => {
  return (
    <div className="flex h-full flex-col">
      <GroundFloorNav />
      <div className="h-[35rem]">
        mainSide
        <ThreeDCanvas
          sideDataItemHovered={sideDataItemHovered}
          sideDataItemClicked={sideDataItemClicked}
          setSideDataItemClicked={setSideDataItemClicked}
          setSideDataItemHovered={setSideDataItemHovered}
          // setSideDataList={setSideDataList}
        />
      </div>
      {/* <GroundFloorBottomSections title="Material" /> */}
      {/* <GroundFloorBottomSections title="Material" /> */}
    </div>
  );
};

export default GroundFloor;
