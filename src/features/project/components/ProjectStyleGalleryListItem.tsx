import Image from "next/image";
import React from "react";
import GalleryIcon from "/public/icons/media/gallery.svg";

interface ProjectStyleGalleryListItemProps {
  image: string;
  title: string;
  count: number;
}
const ProjectStyleGalleryListItem = ({
  image,
  title,
  count,
}: ProjectStyleGalleryListItemProps) => {
  return (
    <div className="w-fit cursor-pointer bg-white drop-shadow-[0_4px_8px_rgba(12,12,12,0.42)]">
      <Image
        src={image}
        alt={title}
        height={240}
        width={240}
        className="object-cover"
      />

      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-x-2.5">
          <p className="text-xs font-bold text-primary">{count}</p>
          <GalleryIcon />
        </div>
      </div>
    </div>
  );
};

export default ProjectStyleGalleryListItem;
