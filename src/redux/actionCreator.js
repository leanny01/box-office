import * as types from './types'

const host = "https://api.themoviedb.org/3/movie/76341?"

export const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
  meta: {
    type: "api",
    url: host + api_key,
  }
});