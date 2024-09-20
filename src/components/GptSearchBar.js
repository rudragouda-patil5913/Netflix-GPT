import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-center">
      <form className="w-1/2 bg-black opacity-90 grid grid-cols-12 ">
        <input
          type="text"
          className="border border-slate-200 m-2 p-2 col-span-9"
          placeholder="What would you like to watch"
        />
        <button className="bg-red-700 text-white m-2 p-2 rounded-xl col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
