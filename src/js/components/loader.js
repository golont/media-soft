import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Loader = ({ small }) => {
    const classes = classnames({ "loader-small": small }, { loader: !small });
    return (
        <div className={classes}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

Loader.defalutProps = {
    small: false
};

Loader.propTypes = {
    small: PropTypes.bool
};

export default Loader;
