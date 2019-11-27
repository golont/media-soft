import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { YMaps, Map } from "react-yandex-maps";
import { fetchCityRequest } from "Actions/actions";
import Loader from "./../loader";

const City = ({
    match: {
        params: { cityId }
    }
}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCityRequest(cityId));
    }, [cityId]);
    const currentCity = useSelector(state => state.currentCity);
    const { loading, error } = currentCity;
    if (error) {
        return (
            <div className="message message-error">
                It seems that server is currently unavailable. Sorry about that.
            </div>
        );
    }

    if (loading) {
        return (
            <div className="message message-loading">
                <Loader />
            </div>
        );
    }

    const {
        full_name,
        population,
        name,
        location: {
            latlon: { latitude, longitude }
        }
    } = currentCity;
    return (
        <div className="city">
            <div className="city__field city__field-title">{name}</div>
            <div className="city__field">Full name: {full_name}</div>
            <div className="city__field">Population: {population}</div>
            <YMaps>
                <Map
                    width="100%"
                    defaultState={{ center: [latitude, longitude], zoom: 10 }}
                />
            </YMaps>
        </div>
    );
};

export default City;
