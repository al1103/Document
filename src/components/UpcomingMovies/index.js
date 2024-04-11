import React, { useEffect, useState } from "react";
import { getMovieAPI } from "../../servers/api";
import MovieCard from "../MovieCard";
import "./upcomingMovies.scss";
const UpcomingMovies = () => {
  const [limit, setLimit] = useState(4); // [1,2,3,4,5,6,7,8,9,10
  

  const handleMoreMovie = () => {
    setLimit(limit + 4);
   
  }
  return (
    <div className="upcoming">
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <p className="section-subtitle">Online Streaming</p>
            <h2 className="h2 section-title">Upcoming Movies</h2>
          </div>
          <ul className="filter-list">
            <li>
              <button className="filter-btn">Movies</button>
            </li>
            <li>
              <button className="filter-btn">TV Shows</button>
            </li>
            <li>
              <button className="filter-btn">Anime</button>
            </li>
          </ul>
        </div>
        <ul className="movies-list  has-scrollbar">
        

        </ul>
        <button className="filter-btn more" onClick={handleMoreMovie}>More Movies</button>
      </div>
    </div>
  );
};

export default UpcomingMovies;
