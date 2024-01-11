import { useDispatch } from "react-redux";
import { MOVIEAPI, options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const useFetch = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()=>{
        const data = await fetch(MOVIEAPI,options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
     getNowPlayingMovies();
    },[])
}
export default useFetch;