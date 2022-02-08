import React from "react";
import PopUpContainer from "./popup.style";

const PopUp = ({ movie, showHidePopUp }) => {


  const base_url = "http://image.tmdb.org/t/p/original/";
  



  return (
    <PopUpContainer img={ base_url+movie.poster_path} isOpen={showHidePopUp}>
      <div className="content">
        <div className="hero">
          <a className=" btn close_button" onClick={()=>showHidePopUp()}>
            x
          </a>
          <div className="hero_content">
            <span className="title">{movie.title}</span>
            <span className="buttons">
              <a className="btn btn_play">
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-play-basic-ui-elements-flatart-icons-outline-flatarticons-1.png" />
                Play trailer
              </a>
              <a className="btn btn_vote btn_vote_up">Vote up</a>
              <a className="btn btn_vote btn_vote_down">Vote down</a>
            </span>
          </div>
        </div>
        <div className="movie_details">
          <p className="description">
            {movie.overview}
          </p>
          <p className="other_details">
            <span>cast: lal, lolo,pap,papa</span>
            <span>Genre: Mysteries</span>
          </p>
        </div>
        <div className="more_like_this">More Like this</div>
      </div>
    </PopUpContainer>
  );
};

export default PopUp;
