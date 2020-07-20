import React, { useEffect, useState }from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import {fetchMovies} from '../../../redux/actionCreator'

const mapStateToProps = (state) => {

  return { movies: state.movies };
};
const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies()),
});
const Home = (props) => {

    const {results,dates,page,total_pages,total_results } = props.movies
    const [movie, setMovie] = useState([])
    const [userId,setUserId] = useState(0)

    useEffect(() => {
        props.fetchMovies()
    }, [userId])

    if (!results) {
        return <div>Loading...</div>
    }
    return (
        <Presentation movies={results}/>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);