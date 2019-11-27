import * as Actions from "Actions/actions";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
                cities: []
            };
        case Actions.FETCH_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                cities: payload
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

export default reducer;
