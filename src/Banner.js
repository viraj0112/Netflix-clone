import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Static/Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchTrending &&
          requests.fetchComedyMovies &&
          requests.fetchActionMovies &&
          requests.fetchRomanceMovies
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);

  function truncat(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {/* title  */}
      <div className="banner_content">
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* buttons  */}
        <div className="banner_button">
          <button className="button1">Play</button>
          <button className="button2"> My List</button>
        </div>
        {/* desc  */}
        <h1 className="banner_desc">{truncat(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
}

export default Banner;
