import React from "react";

import AddNote from "@/assets/icons/common/addnote.svg";
import Addpic from "@/assets/icons/common/addpic.svg";
import EditSelection from "@/assets/icons/common/editselection.svg";
import Modal3d from "@/assets/icons/common/model3d.svg";
import Measure from "@/assets/icons/common/ruler-alt.svg";

import NavDropDown from "./NavDropDown";

type Prps = {
  setIs3dModal: (bool: boolean) => void;
  is3dModal: boolean;
};

const GroundFloorNav = ({}: Prps) => {
  return (
    <nav className="flex h-16 w-full items-center border-b-[1.5px] drop-shadow-[0px_4px_8px_#7070706B] border-t border-oslo-gray border-white/10 bg-white pt-1">
      <ul className="ml-4 flex w-[100%] 2xl:ml-6 2xl:w-[75%]">
        <li className="ml-6">
          <NavDropDown />
        </li>
        <div className="mx-7 mt-[6px] h-[1.9rem] w-[1.5px] border-oslo-gray border" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <AddNote color="#354E37" size={27} />
            <span className="text-xs font-normal">Add note</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Addpic color="#354E37" size={27} />
            <span className="r text-xs font-normal">Add Picture</span>
          </div>
        </li>
        <div className="mx-7 mt-[6px] h-[1.9rem] w-[1.5px] border-oslo-gray border" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <EditSelection color="#354E37" size={27} />
            <span className="text-xs font-normal">Edit selection</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Measure color="#354E37" size={27} />
            <span className="r text-xs font-normal">Measure</span>
          </div>
        </li>
        <div className="mx-7 mt-[6px] h-[1.9rem] w-[1.5px] border-oslo-gray border" />
        <li className="flex justify-between gap-x-5">
          <div className="flex flex-col items-center justify-center">
            <Modal3d color="#354E37" size={27} />
            <span className="r text-xs font-normal">3D View</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default GroundFloorNav;
