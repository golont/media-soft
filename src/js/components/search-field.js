import React from "react";
import classnames from "classnames";

const Search = ({ value, onChange, className, ...attrs }) => {
    const classes = classnames("input", "input-search", className);
    return <input type="text" className={classes} {...attrs} />;
};

export default Search;
