import React  from "react";
import useMovieDB from "../../hooks/useMovieDB";
import MoviesSlider from "../../helpers/MoviesSlider/MoviesSlider";


export default function PopularMovies({movies}) {
  const{data,loading} = useMovieDB("movie/popular",)

  return (

    <div>
    <MoviesSlider movies={data?.results || []} />
  </div>
    )
}
