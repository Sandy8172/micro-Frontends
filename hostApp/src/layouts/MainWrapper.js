import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-fit rounded-2xl bg-gray-200">
      <div className="flex-1 p-4 sm:px-6 lg:px-8 h-fit">
        {children}
      </div>
    </div>
  );
};

export default MainWrapper;
