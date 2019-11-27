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

export const FETCH_CITY_REQUEST = "FETCH_CITY_REQUEST";
export const fetchCityRequest = (id) => {
    return {
        type: FETCH_CITY_REQUEST,
        id
    };
};

export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS";
export const fetchCitySuccess = payload => {
    return {
        type: FETCH_CITY_SUCCESS,
        payload
    };
};

export const FETCH_CITY_FAILURE = "FETCH_CITY_FAILURE";
export const fetchCityFailure = payload => {
    return {
        type: FETCH_CITY_FAILURE,
        payload
    };
};
