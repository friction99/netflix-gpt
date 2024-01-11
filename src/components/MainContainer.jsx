import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground"
const MainContainer = () => {
  const movies = useSelector((store)=>store.movie?.currentlyPlayingMovies);
  if(movies===null) return;//early return
  const mainMovie = movies[1];
  return (
    <div>
        <VideoTitle title={mainMovie?.original_title} desc={mainMovie?.overview}/>
        <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer