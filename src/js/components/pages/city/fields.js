import React from "react";
import PropTypes from "prop-types";
import Button from "Components/button";

const Fields = ({
    city: { name, full_name, population, country, timezone },
    onEdit
}) => {
    return (
        <>
            <div className="city__header">
                <Button onClick={onEdit}>edit</Button>
            </div>
            <div className="city__field city__field-title">{name}</div>
            <div className="city__field">Full name: {full_name}</div>
            <div className="city__field">Population: {population}</div>
            <div className="city__field">Country: {country}</div>
            <div className="city__field">Timezone: {timezone}</div>
        </>
    );
};

Fields.propTypes = {
    city: PropTypes.shape({
        name: PropTypes.string,
        full_name: PropTypes.string,
        population: PropTypes.number,
        country: PropTypes.string,
        timezone: PropTypes.string
    })
};

export default Fields;
