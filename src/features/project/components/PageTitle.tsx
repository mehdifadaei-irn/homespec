import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="max-w-[906px]">
      <h1 className="text-xl font-medium text-tundora">{title}</h1>
      <hr className="ml-36 mt-2 bg-[#354E37]/[0.5]" />
    </div>
  );
};

export default PageTitle;
