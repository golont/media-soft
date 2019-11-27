export const FETCH_CITIES_REQUEST = "FETCH_CITIES_REQUEST";
export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST
    };
};

export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const fetchCitiesSuccess = payload => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload
    };
};

export const FETCH_CITIES_FAILURE = "FETCH_CITIES_FAILURE";
export const fetchCitiesFailure = payload => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload
    };
};
