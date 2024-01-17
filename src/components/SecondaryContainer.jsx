import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movie);
  return (
    <div className="w-screen h-full">
      <div className='-mt-60 relative z-20'>
        <MovieList title={"NowPlayingMovies"} nowPlaying={movies.currentlyPlayingMovies}/>
      </div>
      <div className='bg-black'>
        <MovieList title={"Trending Movies"} nowPlaying={movies.currentlyPlayingMovies}/>
        <MovieList title={"Popular Movies"} nowPlaying={movies.currentlyPlayingMovies}/>
        <MovieList title={"Check these out"} nowPlaying={movies.currentlyPlayingMovies}/>
        <MovieList title={"Fan Favourite"} nowPlaying={movies.currentlyPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer