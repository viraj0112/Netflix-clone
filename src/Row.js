import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Static/Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    //if '[blank]' run once do not run the row again
    // async is used to request 3rd party srvice
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //   [3rd party used the nit should notbe left blank]
  //   console.log(movies);
  // console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_post ">
        {/* row_post  */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_PosterLarge"}`}
            src={`${base_url || movie.original_name}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
