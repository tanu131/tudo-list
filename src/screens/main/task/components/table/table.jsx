import React from "react";
import { PiTextAaBold } from "react-icons/pi";
import { LuLoader } from "react-icons/lu";
import { HiUser } from "react-icons/hi";
import { RxCalendar } from "react-icons/rx";
import { FiEdit, FiTrash } from "react-icons/fi";

const Thead = [
  { id: 1, icon: <PiTextAaBold />, name: "Task Name" },
  { id: 2, icon: <LuLoader />, name: "Status" },
  { id: 3, icon: <HiUser />, name: "Assign" },
  { id: 4, icon: <RxCalendar />, name: "Due" },
  { id: 5, icon: null, name: "Action" },
];

function Table({ TableData, onEdit, onDelete }) {
  return (
    <div className="container mx-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {Thead.map((item) => (
              <th
                key={item.id}
                className="px-6 py-3 text-gray-500 text-lg font-semibold border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {TableData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 text-black text-lg">
              <td className="px-6 py-4 border border-gray-200 flex">{item.icon}{item.task}</td>
              <td className="px-6 py-4 border border-gray-200">{item.status}</td>
              <td className="px-6 py-4 border border-gray-200">{item.assign}</td>
              <td className="px-6 py-4 border border-gray-200">{item.due}</td>
              <td className="px-6 py-4 border border-gray-200">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
