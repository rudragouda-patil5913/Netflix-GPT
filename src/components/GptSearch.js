import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/constant"

const GptSearch = () => {
  return (
    <div className="h-40 my-auto">
      <div>
        <img src={BG_IMG} alt="bg-img" className="w-full absolute -mt-[20%] -z-10" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
