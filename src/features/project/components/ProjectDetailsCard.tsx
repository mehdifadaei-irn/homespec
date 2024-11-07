import HBtn from "@/components/ui-kit/HBtn";
// import { Pencil1Icon } from "@radix-ui/react-icons";
import { AddCircle, Trash } from "iconsax-react";
import Image from "next/image";
import ModifyRoomDialog from "./ModifyRoomDialog";

const ProjectDetailsCard = () => {
  return (
    <div className="flex h-[540px] w-[226px] flex-col gap-y-8 bg-white px-3 pb-6 pt-3 drop-shadow-[0px_4px_8px_#7070706B]">
      <Image
        src="/images/sample-floor.png"
        alt=""
        className="w-full bg-cover"
        width={88}
        height={148}
      />
      <div className="flex flex-col items-center">
        <ModifyRoomDialog />
      </div>
      <div className="flex flex-col gap-3">
        <span className="inline-block text-sm font-bold">
          Materials in this room
        </span>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              {'Window 34"x22"x12"'}
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              {'Window 34"x22"x12"'}
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              Backsplash tile 12 m2
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              Cabinetry 12 -32 m2
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              Flooring 6 m2
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#111928]">
              Sink double
            </span>
            <Trash size="18" color="#D6A217" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <HBtn variant="secondary" styleType="outline">
          <div className="flex items-center gap-x-2.5">
            <AddCircle size="18" variant="Bold" />
            <span>Add Material</span>
          </div>
        </HBtn>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
