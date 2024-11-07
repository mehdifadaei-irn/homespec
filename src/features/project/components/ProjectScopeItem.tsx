import Image from "next/image";
import React from "react";
const ScopeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    viewBox="0 0 51 51"
  >
    <g id="wrench" transform="translate(0.996 2)">
      <g
        id="Rectangle_738"
        data-name="Rectangle 738"
        transform="translate(-0.996 -2)"
        fill="rgba(255,255,255,0)"
        stroke="#354e37"
        strokeWidth="0.5"
      >
        <path
          d="M10,0H51a0,0,0,0,1,0,0V41A10,10,0,0,1,41,51H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
          stroke="none"
        />
        <path
          d="M10,.25H50.75a0,0,0,0,1,0,0V41A9.75,9.75,0,0,1,41,50.75H.25a0,0,0,0,1,0,0V10A9.75,9.75,0,0,1,10,.25Z"
          fill="none"
        />
      </g>
      <g
        id="Group_1346"
        data-name="Group 1346"
        transform="translate(0.003 -0.003)"
      >
        <path
          id="Path_1612"
          data-name="Path 1612"
          d="M.306,6.669A9.013,9.013,0,0,0,11.344,17.691L30.373,36.447a9,9,0,1,0,6.086-6.081L17.7,11.343A9.013,9.013,0,0,0,6.671.3L13.1,6.726,12,12,6.731,13.092ZM40.429,33.726l1.585.078.861,1.335L44.211,36l.078,1.587L45.015,39l-.726,1.413L44.211,42l-1.335.861L42.014,44.2l-1.588.078L39.013,45,37.6,44.274,36.012,44.2l-.861-1.335L33.815,42l-.078-1.587L33.011,39l.726-1.413L33.815,36l1.335-.861.861-1.335,1.588-.078L39.013,33l1.413.726Z"
          transform="translate(-0.003 0.003)"
          fill="#354e37"
        />
      </g>
    </g>
  </svg>
);
const ProjectScopeItem = ({
  title,
  isActive,
  onClick,
  icon,
}: {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
  icon: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isActive ? "bg-secondary" : "bg-white"} flex h-[168px] w-[168px] cursor-pointer flex-col items-center justify-center rounded-[10px] drop-shadow-[0px_8px_16px_rgb(112,112,112,0.42)] hover:border hover:border-primary`}
    >
      {icon ? (
        <Image src={icon} alt="icon" width={52} height={52} />
      ) : (
        <ScopeIcon />
      )}
      <span className="mt-8 text-center text-lg font-medium text-primary">
        {title}
      </span>
    </div>
  );
};

export default ProjectScopeItem;

export const MemoizedProjectScopeItem = React.memo(ProjectScopeItem);
