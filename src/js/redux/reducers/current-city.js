import * as Actions from "Actions/actions";

export const currentCity = (state, { type, payload }) => {
    switch (type) {
        case Actions.FETCH_CITY_REQUEST:
            return { ...state, loading: true, error: false };
        case Actions.FETCH_CITY_SUCCESS:
            return { ...state, loading: false, error: false, ...payload };
        case Actions.FETCH_CITY_FAILURE:
            return {
                ...state,
                loading: true,
                error: true,
                errorMessage: payload
            };
        case Actions.SAVE_CITY:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};
