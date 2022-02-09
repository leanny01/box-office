import React from "react";

import MovieCardContainer from './moviecard.style'

const MovieCard = ({ movie, showPopUp }) => {
    const base_url = "http://image.tmdb.org/t/p/w500/";
  
    return (
      <MovieCardContainer onClick={() => showPopUp(movie)}>
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