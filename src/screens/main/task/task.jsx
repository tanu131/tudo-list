import React, { useState } from "react";
import { LuTable } from "react-icons/lu";
import Tab from "./components/tabs/tabs";
import Table from "./components/table/table";
import AllDropDown from "../../component/defaultDropdown/allDropDown";
import HelpCenterItem from "./components/helpCenter/helpCenter";
import AddItem from "./components/table/addItem";
const Task = () => {
  const [tableDataByProject, setTableDataByProject] = useState([
    {
      id: 1,
      task: "Update all new product screenshots",
      status: "In progress",
      assign: "David Tibbitts",
      due: "November 17, 2022",
    },
    {
      id: 2,
      task: "Launch customer blog",
      status: "In progress",
      assign: "Zoe Ludwig",
      due: "November 10, 2022",
    },
    {
      id: 3,
      task: "Embed all Youtube tutorials in Articles",
      status: "Done",
      assign: "Rebecca Druce",
      due: "November 13, 2022",
    },
    {
      id: 4,
      task: "Final website audit",
      status: "Not Started",
      assign: "Rebecca Druce",
      due: "November 18, 2022",
    },
  ]);

  const [tableDataMine, setTableDataMine] = useState([
    {
      id: 5,
      task: "Embed all Youtube tutorials in Articles",
      status: "Done",
      assign: "Rebecca Druce",
      due: "November 13, 2022",
    },
    {
      id: 6,
      task: "Final website audit",
      status: "Not Started",
      assign: "Rebecca Druce",
      due: "November 18, 2022",
    },
  ]);

  const [editItem, setEditItem] = useState("");
  const [editForm, setEditForm] = useState({
    task: "",
    status: "",
    assign: "",
    due: "",
  });

  const handleEdit = (item) => {
    setEditItem(item.id);
    setEditForm({
      task: item.task,
      status: item.status,
      assign: item.assign,
      due: item.due,
    });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (editItem) {
      setTableDataByProject((prevData) =>
        prevData.map((item) =>
          item.id === editItem ? { ...item, ...editForm } : item
        )
      );
      setTableDataMine((prevData) =>
        prevData.map((item) =>
          item.id === editItem ? { ...item, ...editForm } : item
        )
      );
      setEditItem(null);
      setEditForm({
        task: "",
        status: "",
        assign: "",
        due: "",
      });
    }
  };

  const handleDelete = (id, type) => {
    if (type === "project") {
      setTableDataByProject((prevData) =>
        prevData.filter((item) => item.id !== id)
      );
    } else if (type === "mine") {
      setTableDataMine((prevData) => prevData.filter((item) => item.id !== id));
    }
  };

  const handleAddItem = (newItem) => {
    setTableDataByProject((prevData) => [
      ...prevData,
      { id: Date.now(), ...newItem },
    ]);
  };

  const tabs = [
    {
      title: "By Project",
      icon: <LuTable />,
      dropdownContent: <AllDropDown />,
      helpContent: <HelpCenterItem />,
      content: (
        <>
          <Table
            TableData={tableDataByProject}
            onEdit={handleEdit}
            onDelete={(id) => handleDelete(id, "project")}
          />
           <AddItem onAddItem={handleAddItem} />
        </>
      ),
    },
    {
      title: "Mine",
      icon: <LuTable />,
      content: (
        <>
          <Table
            TableData={tableDataMine}
            onEdit={handleEdit}
            onDelete={(id) => handleDelete(id, "mine")}
          />
           <AddItem onAddItem={handleAddItem} />
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <Tab tabs={tabs} />
      {editItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-white p-4 w-96 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Edit Task</h2>
            <div className="my-4">
              <label className="block text-gray-500">Task</label>
              <input
                type="text"
                value={editForm.task}
                onChange={(e) =>
                  setEditForm({ ...editForm, task: e.target.value })
                }
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Status</label>
              <input
                type="text"
                value={editForm.status}
                onChange={(e) =>
                  setEditForm({ ...editForm, status: e.target.value })
                }
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Assign</label>
              <input
                type="text"
                value={editForm.assign}
                onChange={(e) =>
                  setEditForm({ ...editForm, assign: e.target.value })
                }
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Due</label>
              <input
                type="text"
                value={editForm.due}
                onChange={(e) =>
                  setEditForm({ ...editForm, due: e.target.value })
                }
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditItem(null)}
                className="ml-2 bg-gray-300 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Task;
