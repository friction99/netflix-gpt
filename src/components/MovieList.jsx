import React from 'react'
import MovieComponent from './MovieComponent'

const MovieList = (props) => {
  const title = props?.title;
  const arr = props?.nowPlaying;
  return (
    <div className='py-4'>
       <h1 className='text-2xl text-white p-4'>{title}</h1>
       <div className='flex overflow-x-auto scrollbar-hidden'>
        <div className='flex'>
            {arr?.map((elements)=><MovieComponent key={elements.id} link={elements.backdrop_path}/>)}
        </div>
       </div>
    </div>
  )
}
export default MovieList