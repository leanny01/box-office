import * as types from "./types";

export const initialState = {

    movies:[]

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        default:
            return state;

    };
}
