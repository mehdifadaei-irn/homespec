"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import PageTitle from "@/features/project/components/PageTitle";
import ProjectPageWrapper from "@/features/project/components/ProjectPageWrapper";
import ProjectStyleGalleryListItem from "@/features/project/components/ProjectStyleGalleryListItem";
import Image from "next/image";

const Style = () => {
  return (
    <ProjectPageWrapper submit={() => {}} backTo="/project/details">
      <div className="max-w-[906px]">
        <PageTitle title="Look between the pictures' Album to find your favorite style. Then Select the your Favorite Album." />
      </div>

      <div className="mt-11 max-w-[906px]">
        <Dialog modal={true}>
          <DialogTrigger>
            <ProjectStyleGalleryListItem
              count={12}
              title="Album"
              image="https://picsum.photos/240"
            />
          </DialogTrigger>
          <DialogContent className="max-w-[1136px] px-14 py-12">
            <DialogHeader>
              <div
                className="grid max-h-[664px] grid-cols-4 gap-5 overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <Image
                    key={i}
                    src="https://picsum.photos/240"
                    alt="picture"
                    height={240}
                    width={240}
                    className="object-cover"
                  />
                ))}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </ProjectPageWrapper>
  );
};

export default Style;
