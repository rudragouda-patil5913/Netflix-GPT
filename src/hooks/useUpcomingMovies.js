import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
 import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const fetchUpcomingMovies = async () =>{
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS
        ); 
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results));
    }
    useEffect(()=>{
        fetchUpcomingMovies();
    },[])
}


export default useUpcomingMovies;