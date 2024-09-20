import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant"

const GptSearch = () => {
  return (
    <div className="">
      <div>
        <img src={BG_IMG} alt="bg-img" className="w-full fixed -mt-20 -z-10" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
