import React, { Fragment, useState } from "react";
const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <Fragment>
      <div className="flex gap-6 w-auto border-b items-center text-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "text-black text-lg font-semibold border-b-2 border-b-black "
                : "text-lg"
            } p-2 flex items-center justify-center gap-2 w-56`}
            onClick={() => handleClick(index)}
          >
            <span className="text-lg">{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}

        <h1 className="w-full">3 more...</h1>
        <h1>Filter</h1>
        <h1>Sort</h1>
        <button className="text-white bg-blue-700 py-2 px-4 font-bold rounded-md">
          New
        </button>
      </div>
      <div className="">{tabs[activeTab].dropdownContent}</div>
      <div className="">{tabs[activeTab].helpContent}</div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </Fragment>
  );
};

export default Tab;
