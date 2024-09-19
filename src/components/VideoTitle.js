import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = (props) => {
  const { original_title, overview } = props;

  return (
    <div className=" w-screen aspect-video bg-gradient-to-r from-black px-[5%] py-[20%] bg-opacity-20 z-10">
      <h1 className="font-bold text-4xl py-2 text-white m-1">
        {original_title}
      </h1>
      <p className="font-semibold text-lg w-2/4 text-white m-1">{overview}</p>
      <div className="mt-4">
        <button
          className="w-40 m-1 mr-2 bg-white bg-opacity-50 text-slate-800 font-bold font-mono p-4 hover:bg-slate-500 hover:text-black
         hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="w-40 bg-slate-500 bg-opacity-50 text-slate-800 font-bold font-mono p-4 hover:bg-white hover:text-black ">
          More Info ℹ{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
