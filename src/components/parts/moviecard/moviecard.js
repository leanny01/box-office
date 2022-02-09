import React from "react";

import MovieCardContainer from './moviecard.style'

const MovieCard = ({ movie, showHidePopUp }) => {
    const base_url = "http://image.tmdb.org/t/p/w500/";
  
    return (
      <MovieCardContainer onClick={() => showHidePopUp(movie)}>
        <img
          src={base_url + movie.backdrop_path}
          alt={movie.title}
          className="movie-img"
        />
        <span className="movie-title">{movie.title}</span>
      </MovieCardContainer>
    );
  };

export default MovieCard;