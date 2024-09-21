import GptSearchBar from "./SearchBar";
import { BG_IMG } from "../utils/constant";

const SearchMovies = () => {
  return (
    <>
      <img src={BG_IMG} alt="bg-img" className="w-full h-full absolute -z-10" />
      <div className="">
        <GptSearchBar />
      </div>
    </>
  );
};

export default SearchMovies;
