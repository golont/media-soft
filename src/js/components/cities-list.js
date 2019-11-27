import React from "react";
import classname from "classnames";
import PropTypes from "prop-types";
import Link from "./link";

const City = ({ name, full_name, _id, fullName, className }) => {
    return (
        <Link className={className} href={`/search/${_id}`} key={_id}>
            {fullName ? full_name : name}
        </Link>
    );
};

const Cities = ({ cities, fullName, wrapperClass, itemClass }) => {
    return (
        <div className={wrapperClass}>
            {cities.map(city => (
                <City key={city._id} {...city} className={itemClass} fullName={fullName} />
            ))}
        </div>
    );
};

Cities.defaultProps = {
    cities: [],
    fullName: false
};

Cities.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number,
            name: PropTypes.string,
            full_name: PropTypes.string
        })
    ),
    fullName: PropTypes.bool
};

export default Cities;
