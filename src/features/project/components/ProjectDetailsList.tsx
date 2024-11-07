import React from "react";

type ProjectDetail = {
  id: string;
  value: string;
  formatted_value: string;
  project_floor_id: string;
  key: {
    title: string;
    description: string;
    value_type: string;
    value_unit: string;
  };
};

interface ProjectDetailsListProps {
  list: ProjectDetail[];
  title: string;
}

const ProjectDetailsList = ({ list, title }: ProjectDetailsListProps) => {
  return (
    <div className="mt-11 flex max-w-[906px] flex-col gap-3">
      <div className="text-lg font-bold text-black">{title}</div>

      <ul className="flex h-72 flex-col flex-wrap gap-x-36 gap-y-3">
        {list.map((item) => (
          <li
            key={item.id}
            className="flex max-w-96 items-center justify-between"
          >
            <div>{item.key.title}</div>
            <div className="text-base">
              <span className="font-bold">{item.value}</span>
              &nbsp;
              <span className="italic">{item.key.value_unit}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetailsList;
