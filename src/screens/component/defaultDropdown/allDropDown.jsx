import React from 'react'
import DropDown from "./dropDown";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { HiUsers } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";
const dropdownItems1 = [
    { id: 1, text: "Status" },
    { id: 2, text: "Assign" },
    { id: 3, text: "Due" },
    { id: 4, text: "Project" },
  ];
  
  const dropdownItems2 = [
    { id: 5, text: "Assign" },
    { id: 6, text: "Due" },
    { id: 7, text: "Project" },
    { id: 8, text: "Status" },
  ];
  const dropdownItems3 = [
    { id: 5, text: "Due" },
    { id: 6, text: "Project" },
    { id: 7, text: "Status" },
    { id: 8, text: "Assign" },
  ];
  const dropdownItems4 = [
    { id: 9, text: "Project" },
    { id: 10, text: "Status" },
    { id: 11, text: "Assign" },
    { id: 12, text: "Due" },
  ];
  const Icon1 = [
    {
      id: 13,
      icon: <LuLoader />,
    },
  ];
  const Icon2 = [
    {
      id: 14,
      icon: <HiUsers />,
    },
  ];
  const Icon3 = [
    {
      id: 15,
      icon: <RxCalendar />,
    },
  ];
  const Icon4 = [
    {
      id: 16,
      icon: <MdOutlineArrowOutward />,
    },
  ];
const AllDropDown = () => {
  return (
    <div className='py-6'>
     < div className="flex gap-10 p-2 ">
        <DropDown
          name="Dropdown 1"
          IconItem={Icon1}
          dropdownItems={dropdownItems1}
        />
        <DropDown
          name="Dropdown 2"
          IconItem={Icon2}
          dropdownItems={dropdownItems2}
        />
        <DropDown
          name="Dropdown 3"
          IconItem={Icon3}
          dropdownItems={dropdownItems3}
        />
        <DropDown
          name="Dropdown 4"
          IconItem={Icon4}
          dropdownItems={dropdownItems4}
        />
        <div className="flex justify-center items-center text-gray-500 text-lg">
          <FiPlus className="mr-2" />
          <h1>Add Filter</h1>
        </div>
      </div>
    </div>
  )
}

export default AllDropDown;
