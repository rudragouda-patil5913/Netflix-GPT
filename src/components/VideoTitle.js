import React from "react";

const VideoTitle = (props) => {
  const { original_title, overview } = props;

  return (
    <div className="mt-[30%] md:mt-[0%] w-screen aspect-video bg-gradient-to-r from-black px-[5%] bg-opacity-20 absolute md:z-10">
      <h1 className="font-semibold text-xl md:font-bold md:text-4xl pt-[20%] text-white m-1">
        {original_title}
      </h1>
      <p className="font-light hidden md:inline-block md:font-semibold text-lg w-2/4 text-white m-1">
        {overview}
      </p>
      <div className="mt-4">
        <button
          className="md:w-40 m-1 mr-2 bg-white rounded-xl md:rounded-none text-black font-semibold md:font-bold p-1 md:p-4 hover:bg-slate-500 hover:text-black
         hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="w-40 bg-slate-500 bg-opacity-50 rounded-xl md:rounded-none text-slate-200 font-bold font-mono p-1 md:p-4 hover:bg-white hover:text-black ">
          More Info ℹ{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
