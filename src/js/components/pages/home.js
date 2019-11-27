import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./../cities-list";
import Loader from "./../loader";
import { fetchCitiesRequest } from "Actions/actions";

const HomeContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCitiesRequest());
    }, []);

    const { cities, loading, error } = useSelector(state => state);
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
    return <List cities={cities} />;
};

export default HomeContainer;
