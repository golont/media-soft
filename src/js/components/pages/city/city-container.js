import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../loader";
import City from "./city";
import { fetchCityRequest, saveCity } from "Actions/actions";

const CityContainer = ({
    match: {
        params: { cityId }
    }
}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const currentCity = useSelector(state => state.currentCity);
    useEffect(() => {
        dispatch(fetchCityRequest(cityId));
    }, [cityId]);
    
    const cancelEdit = () => {
        setEdit(false);
    };
    
    const onSave = values => {
        dispatch(saveCity({ ...values, population: +values.population }));
        cancelEdit();
    };
    
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
    
    return (
        <City
            edit={edit}
            Edit={() => {
                setEdit(true);
            }}
            Save={onSave}
            Cancel={cancelEdit}
            city={currentCity}
        />
    );
};

export default CityContainer;
