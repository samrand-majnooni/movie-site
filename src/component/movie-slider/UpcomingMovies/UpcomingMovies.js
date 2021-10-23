import React from 'react'
import MoviesSlider from '../../../helpers/MoviesSlider/MoviesSlider'
import useMovieDB from '../../../hooks/useMovieDB'


export default function UpcomingMovies({movies}) {
    const{data,loading}=useMovieDB("movie/upcoming")
   
   
    return (
        <div>
         <MoviesSlider movies={data?.results|| []} />
        </div>
    )
}
