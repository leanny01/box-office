import { combineReducers } from "redux";
import * as upcomingMovies from "../components/pages/home/redux/upcomingMovies"
import * as nowPlaying from '../components/pages/playing/redux/nowplayingMovies'

export const rootReducer = combineReducers({
    upcomingMovies: upcomingMovies.reducer,
    nowPlaying: nowPlaying.reducer
})

export const initialState = {
    upcomingMovies: upcomingMovies.initialState,
    nowPlaying: nowPlaying.initialState
}