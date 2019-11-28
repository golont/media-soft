import React from "react";
import PropTypes from "prop-types";
import { YMaps, Map } from "react-yandex-maps";
import Fields from "./fields";
import FormFields from "./edit-fields";

const City = ({ edit, Edit, Save, Cancel, city }) => {
    const {
        location: { latitude, longitude }
    } = city;
    return (
        <div className="city">
            {edit ? (
                <FormFields city={city} onSave={Save} onCancel={Cancel} />
            ) : (
                <Fields onEdit={Edit} city={city} />
            )}
            <YMaps>
                <Map
                    className="city__map"
                    defaultState={{
                        center: [latitude, longitude],
                        zoom: 10
                    }}
                />
            </YMaps>
        </div>
    );
};

City.propTypes = {
    edit: PropTypes.bool,
    Edit: PropTypes.func,
    Save: PropTypes.func,
    Cancel: PropTypes.func,
    city: PropTypes.shape({
        location: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number
        }),
        name: PropTypes.string,
        full_name: PropTypes.string,
        population: PropTypes.number,
        country: PropTypes.string,
        timezone: PropTypes.string
    })
};

export default City;
