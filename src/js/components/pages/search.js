import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./../search-field";
import List from "./../cities-list";
import Loader from "./../loader";
import { fetchCitiesRequest } from "Actions/actions";

const SearchPage = () => {
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
    return (
        <div>
            <section className="section section__search">
                <Search />
            </section>
            <section className="section section__cities">
                <List cities={cities} wrapperClass="cities" itemClass="cities-item" />
            </section>
        </div>
    );
};

export default SearchPage;
