import React from "react";

const Loading = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
      <div className="w-64 h-2 bg-gray-200 rounded">
        <div className="h-full bg-blue-500 rounded animate-progress"></div>
      </div>
    </div>
  );
};

export default Loading;
