import React, { useEffect, useState }from "react";
import Presentation from "./presentation";
import { connect } from "react-redux";
import {nowPlaying} from './redux/actionCreator'

const mapStateToProps = (state) => {

  return { movies: state.nowPlaying.playing };
};
const mapDispatchToProps = (dispatch) => ({
    nowPlaying: () => dispatch(nowPlaying()),
});
const Playing = (props) => {

    const {results,dates,page,total_pages,total_results } = props.movies
    const [movie, setMovie] = useState([])
    const [userId,setUserId] = useState(0)

    useEffect(() => {
     props.nowPlaying()
    }, [userId])

    if (!results) {
        return <div>Loading...</div>
    }
    return (
        <Presentation movies={results}/>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Playing);