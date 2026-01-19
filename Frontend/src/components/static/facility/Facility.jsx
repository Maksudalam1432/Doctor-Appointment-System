import React from "react";
import data from "./data.json";
import * as FaIcons from "react-icons/fa";

function Facility() {
  return (
    <div className="bg-[#a9c1cc] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.facilities.map((item) => {
          const IconComponent = FaIcons[item.icon];

          return (
            <div
              key={item.id}
              className="bg-white h-40 rounded-xl flex flex-col items-center justify-center
              shadow-md transition-all duration-300
              hover:shadow-xl hover:-translate-y-1 "
            >
              <IconComponent className="text-4xl text-gray-800 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Facility;
