import React, { useRef } from "react";
import lang from "../utils/languagesConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const SearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const handleQuery = async () => {
    const gptresponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "whisper-1",
    });
    console.log(gptresponse.choices);
  };
  return (
    <div className="mt-30 flex justify-center">
      <form
        className="w-1/2 bg-black opacity-90 grid grid-cols-12 absolute mt-[10%]"
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          ref={searchText}
          type="text"
          className="border border-slate-200 m-2 p-2 col-span-9"
          placeholder={lang[language].gptSearchBarPlaceholder}
        />
        <button
          className="bg-red-700 text-white m-2 p-2 rounded-xl col-span-3"
          onClick={handleQuery}>
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
