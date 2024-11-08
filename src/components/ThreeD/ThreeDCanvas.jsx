import React from "react";

const ThreeDCanvas = ({
  sideDataItemHovered,
  sideDataItemClicked,
  setSideDataItemClicked,
  setSideDataItemHovered,
  // setSideDataList,
  // put an state for list
}) => {
  const listMockData = [
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
  ];
  const updateState = (state) => {
    setSideDataList(state);
  };
  return (
    <div className="flex flex-col gap-y-2">
      <span>Hoveder:{sideDataItemHovered}</span>
      <span>Clicked:{sideDataItemClicked}</span>

      <div onClick={() => updateState(listMockData)}>update state</div>
    </div>
  );
};

export default ThreeDCanvas;
