import * as types from './types'

const host = "https://api.themoviedb.org/3/movie/now_playing?api_key="

export const nowPlaying = () => {

    return {
      type: types.FETCH_NOW_PLAYING,
      meta: {
        type: "api",
        url: host + process.env.REACT_APP_MOVIES_API_KEY,
      },
    };
  };