import React, { useEffect, useState } from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import { fetchMovies } from "./redux/actionCreator";
import PopUp from "../../parts/popup/popup.component";

const mapStateToProps = (state) => {
  return { movies: state.upcomingMovies.movies };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
});

const Home = (props) => {
  const { results, dates, page, total_pages, total_results } = props.movies;
  const [movie, setMovie] = useState([]);
  const [userId, setUserId] = useState(0);
  const [popUp, setPopUpOpen] = useState({isOpen:false});

  const showHidePopUp  = (movie)=> {
     if(movie){
        setPopUpOpen({isOpen:true, movie:movie})

     }else{
        setPopUpOpen({isOpen:false})

     }

    }



  useEffect(() => {
    props.fetchMovies();
  }, [userId]);

  useEffect(() => {
   
  }, [popUp.isPopUpOpen]);

  if (!results) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Presentation movies={results} showPopUp={showHidePopUp}/>
      { popUp.isOpen && <PopUp movie={popUp.movie} showHidePopUp={showHidePopUp} />}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
