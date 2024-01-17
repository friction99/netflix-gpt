import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground"
const MainContainer = () => {
  const movies = useSelector((store)=>store.movie?.currentlyPlayingMovies);
  if(movies===null) return;//early return
  const mainMovie = movies[2];
  return (
    <div className="w-screen h-full">
        <VideoTitle title={mainMovie?.original_title} desc={mainMovie?.overview}/>
        <VideoBackground movieId={mainMovie?.id}/>
    </div>
  )
}

export default MainContainer