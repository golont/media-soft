import * as Actions from "Actions/actions";
import { currentCity } from "./current-city";

const reducer = (state, action) => {
    const { type, payload } = action;
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
            return { ...state, currentCity: currentCity(state.currentCity, action) };
    }
};

export default reducer;
