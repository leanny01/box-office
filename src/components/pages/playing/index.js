import React, { useEffect, useState } from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import { nowPlaying } from "./redux/actionCreator";
import PopUp from "../../parts/popup/popup.component";

const mapStateToProps = (state) => {
  return { movies: state.nowPlaying.playing };
};
const mapDispatchToProps = (dispatch) => ({
  nowPlaying: () => dispatch(nowPlaying()),
});
const Playing = (props) => {
  const { results, dates, page, total_pages, total_results } = props.movies;
  const [movie, setMovie] = useState([]);
  const [userId, setUserId] = useState(0);

  const [popUp, setPopUpOpen] = useState({ isOpen: false });

  const showHidePopUp = (movie) => {
    if (movie) {
      setPopUpOpen({ isOpen: true, movie: movie });
    } else {
      setPopUpOpen({ isOpen: false });
    }
  };


  useEffect(() => {
    props.nowPlaying();
  }, [userId]);

  if (!results) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Presentation movies={results} />
      {popUp.isOpen && (
        <PopUp movie={popUp.movie} showHidePopUp={showHidePopUp} />
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Playing);
