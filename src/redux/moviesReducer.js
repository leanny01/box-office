import * as types from "./types";

export const initialState = {

    movies:[]

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MOVIE:
            return {
                ...state,
                movie: action.GET_MOVIES,
            };

    };
}
