import * as types from './types'

const host = "https://api.themoviedb.org/3/movie/upcoming?api_key="

export const fetchMovies = () => {

  return {
    type: types.FETCH_MOVIES,
    meta: {
      type: "api",
      url: host + process.env.REACT_APP_MOVIES_API_KEY,
    },
  };
};