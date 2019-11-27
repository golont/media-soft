import React from "react";
import PropTypes from "prop-types";
import Link from "./link";

const City = ({ name, _id }) => {
    return (
        <Link className="cities-item" href={`/search/${_id}`} key={_id}>
            {name}
        </Link>
    );
};

const Cities = ({ cities }) => {
    return (
        <div className="cities">
            {cities.map(city => (
                <City key={city._id} {...city} />
            ))}
        </div>
    );
};

Cities.defaultProps = {
    cities: []
};

Cities.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number,
            name: PropTypes.string
        })
    )
};

export default Cities;
