import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtrailer } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const VideoBackground = (props)=>{
    const dispatch = useDispatch();
    const trailer = useSelector((store)=>store.movie.trailer);
    const getData = async()=>{
        const video = await fetch("https://api.themoviedb.org/3/movie/"+props?.movieId+"/videos?language=en-US",options);
        const vidjson = await video.json();
        const vidarr = vidjson.results;
        const filtered = vidarr.filter((vids)=>vids.type.includes("Trailer"));
        const trailer = (filtered.length===0)?vidarr[0]:filtered[0];
        dispatch(addtrailer(trailer));
    }
    useEffect(()=>{
      getData();
    },[]);
    return(
        <div>
            <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1"} title="YouTube video player" allow="autoplay; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}
export default VideoBackground;