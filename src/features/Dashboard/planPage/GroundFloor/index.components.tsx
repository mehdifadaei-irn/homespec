import React from "react";
import GroundFloorNav from "../../components/GroundFloorNav";
import ThreeDCanvas from "@/components/ThreeD/ThreeDCanvas";
import { planSpaces } from "../index.types";
// import GroundFloorBottomSections from "../../components/GroundFloorBottomSections";
// import { Separator } from "@/components/shadcn/separator";

type Props = {
  sideDataItemHovered: string | null;
  sideDataItemClicked: string | null;
  setSideDataItemHovered: (string: string) => void;
  setSideDataItemClicked: (string: string) => void;
  setSideDataList: (dataList: planSpaces[]) => void;
  setIs3dModal: (bool: boolean) => void;
  is3dModal: boolean;
};

const GroundFloor = ({
  sideDataItemHovered,
  sideDataItemClicked,
  setSideDataItemClicked,
  setSideDataItemHovered,
  setSideDataList,
  setIs3dModal,
  is3dModal,
}: Props) => {
  return (
    <div className="flex h-full flex-col">
      <GroundFloorNav setIs3dModal={setIs3dModal} is3dModal={is3dModal} />
      <div className="h-[35rem]">
        <ThreeDCanvas
          sideDataItemHovered={sideDataItemHovered}
          sideDataItemClicked={sideDataItemClicked}
          setSideDataItemClicked={setSideDataItemClicked}
          setSideDataItemHovered={setSideDataItemHovered}
          setSideDataList={setSideDataList}
          setIs3dModal={setIs3dModal}
          is3dModal={is3dModal}
        />
      </div>
      {/* <div className="flex w-full border-t-[1.5px] border-oslo-gray ">
        <GroundFloorBottomSections
          title="Material"
          icon="earth"
          percentage="30%"
          titleNumber={"109"}
          text={"purchased"}
          purchased={8}
          yetToBuy={87}
          notSelected={10}
          state="Purchased"
        />
        <Separator
          orientation="vertical"
          color="#000"
          className="bg-black border-black border h-36 mt-2"
        />
        <GroundFloorBottomSections
          title="Budget"
          icon="database"
          percentage="30%"
          titleNumber={"$10229"}
          text={"purchased"}
          purchased={8}
          yetToBuy={87}
          notSelected={null}
          state="Spent"
        />
        <Separator
          orientation="vertical"
          color="#000"
          className="bg-black border-black border h-36 mt-2"
        />
        <div className="flex-grow">
          <h1>helo</h1>
        </div>
      </div> */}
    </div>
  );
};

export default GroundFloor;
