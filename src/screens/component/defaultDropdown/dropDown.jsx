import React from "react";
function DropDown({ dropdownItems, IconItem }) {
  return (
    <div className="flex justify-center items-center border p-1 rounded-full text-gray-500 text-xl">
      {IconItem.map((item) => (
        <div key={item.id}>{item.icon}</div>
      ))}
      <select>
        {dropdownItems.map((item) => (
          <option key={item.id}>{item.text}</option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
