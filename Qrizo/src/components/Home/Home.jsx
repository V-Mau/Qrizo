import React from "react";
import PreviewQr from "../EditorContainer/EditorContainer";

const Home = () => {
  return (
    <div className="  shadow-2xl shadow-black/50 border-6 border-purple-50 bg-gray-200 rounded-3xl w-[80%] h-[550px] mt-6  ">
      <div className="flex justify-center items-center h-full  ">
        <PreviewQr />
      </div>
    </div>
  );
};

export default Home;
