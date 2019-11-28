import * as Actions from "Actions/actions";

export const cities = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                items: []
            };
        case Actions.FETCH_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                items: payload
            };
        case Actions.FETCH_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            };
        default:
            return state;
    }
};
