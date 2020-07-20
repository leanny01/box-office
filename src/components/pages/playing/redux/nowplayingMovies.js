import * as types from "./types";

export const initialState = {

    playing:[]

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NOW_PLAYING:
            return {
                ...state,
                playing: action.payload,
            };
        default:
            return state;

    };
}
