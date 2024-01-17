import React from 'react'
import { CARD_URL } from '../utils/constants';

const MovieComponent = (props) => {
  return (
        <img className='w-64 h-55 mr-4' src={CARD_URL+props.link} alt="movie-img"/>
  )
}

export default MovieComponent