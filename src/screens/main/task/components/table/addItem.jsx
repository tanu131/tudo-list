import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

function AddItem({ onAddItem }) {
  const [formData, setFormData] = useState({
    task: "",
    status: "",
    assign: "",
    due: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData).some(value => value.trim() === "")) {
      return;
    }
    onAddItem(formData);
    setFormData({
      task: "",
      status: "",
      assign: "",
      due: "",
    });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-center my-4 border p-2 bg-blue-800 text-white rounded-lg font-semibold flex items-center gap-1 justify-center"
      >
        Add item <FiPlus />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
          aria-modal="true"
          role="dialog"
        >
          <form
            onSubmit={handleAddSubmit}
            className="bg-white p-4 w-96 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            <div className="my-4">
              <label className="block text-gray-500">Task</label>
              <input
                type="text"
                name="task"
                value={formData.task}
                onChange={handleInputChange}
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Status</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Assign</label>
              <input
                type="text"
                name="assign"
                value={formData.assign}
                onChange={handleInputChange}
                className="m-1 block w-full p-1 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500">Due</label>
              <input
                type="text"
                name="due"
                value={formData.due}
                onChange={handleInputChange}
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
                onClick={() => setIsModalOpen(false)}
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
}

export default AddItem;
