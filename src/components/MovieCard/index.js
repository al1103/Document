import React from "react";

import "./MovieCard.scss";
const MovieCard = (props) => {
  
  const { id,name, slug, actor, thumb_url, code, content,quality,lang ,country,type} =
    props.movie;
  return (
    <div className="movie-card">
      <a href={`/movie/${slug}`}>
        <figure className="card-banner">
          <img src={thumb_url} alt={name} />
        </figure>
      </a>

      <div className="title-wrapper">
        <a href="./movie-details.html">
          <h3 className="card-title">{name}</h3>
        </a>
        {/* <time dateTime={modified}>{original_name}</time> */}
      </div>
      <div className="card-meta">
        <div className="badge badge-outline">HD</div>
        <div className="duration">
          <ion-icon name="time-outline" />
          <time dateTime="PT137M">137 min</time>
        </div>
        <div className="rating">
          <ion-icon name="star" />
          <data>8.5</data>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
