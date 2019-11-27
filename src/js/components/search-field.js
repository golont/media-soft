import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Loader from "./loader";
import Cities from "./cities-list";
import ts from "Services/teleport-service";

const Search = ({ className, ...attrs }) => {
    const classes = classnames("input", "input-search", className);
    const [loading, setLoading] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (value === "" || !focus) {
            setCities([]);
        } else {
            setLoading(true);
            ts.getCities(value, 10)
                .then(setCities)
                .then(() => {
                    setLoading(false);
                });
        }
    }, [value, focus]);
    return (
        <div className="search">
            <label>
                <div className="search__ico">
                    {loading ? <Loader small={true} /> : <span className="icon-search"></span>}
                </div>
                <input
                    type="text"
                    className={classes}
                    onChange={({ target: { value } }) => {
                        setValue(value);
                    }}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    onBlur={() => {
                        setTimeout(() => {
                            setFocus(false);
                        }, 100);
                    }}
                    placeholder="Search for a city"
                    {...attrs}
                />
            </label>
            <Cities
                cities={cities}
                fullName={true}
                wrapperClass="search__cities"
                itemClass="search__cities-item"
            />
        </div>
    );
};

export default Search;
