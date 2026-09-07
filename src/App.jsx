import React from "react";
import Preview from "./components/Preview";
import Styling from "./components/Styling";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="min-h-screen w-full flex justify-between container">
      <div className="w-[70%] bg-gray-50 flex flex-col">
        <Styling />
        <Content />
      </div>
      <div className="w-[30%] bg-gray-100">
        <Preview />
      </div>
    </div>
  );
};

export default App;
