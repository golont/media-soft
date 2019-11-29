import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./../cities-list";
import Loader from "./../loader";
import { fetchCitiesRequest } from "Actions/actions";

const SearchPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCitiesRequest());
    }, []);
    const [search, setSearch] = useState("");
    const { items: cities, loading, error } = useSelector(
        state => state.cities
    );

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

    const filterCities = cities => {
        if (!cities) return;
        return cities.filter(({ name }) =>
            name.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <div>
            <section className="section section__search">
                <div className="search">
                    <div className="search__ico">
                        <span className="icon-search"></span>
                    </div>
                    <input
                        type="text"
                        className="input input-search"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                        placeholder="Search for city"
                    />
                </div>
            </section>
            <section className="section section__cities">
                <List
                    cities={filterCities(cities)}
                    wrapperClass="cities"
                    itemClass="cities-item"
                />
            </section>
        </div>
    );
};

export default SearchPage;
