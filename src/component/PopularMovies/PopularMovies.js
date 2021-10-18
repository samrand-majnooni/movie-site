import React, { useEffect, useState } from "react";
import movie from "../../services/movie";

export default function PopularMovies() {
  const [data, setData] = useState(null);

  async function getPopularMovies() {
    const result = await movie.popular();
    setData(result);
  }
  useEffect(() => {
    getPopularMovies();
  }, []);
  return <div></div>;
}
