import axios from "axios";

class TeleportService {
    __apiBase = "https://api.teleport.org/api/";

    getCities = async (search = "", limit = 25) => {
        const body = await axios.get(
            `${this.__apiBase}cities/?search=${search}&limit=${limit}`
        );
        return body.data._embedded["city:search-results"].map(
            this.__transformListItem
        );
    };

    getCity = async id => {
        const body = await axios.get(
            `${this.__apiBase}/cities/geonameid:${id}`
        );
        return this.__transformCity(body.data);
    };

    __transformListItem = ({ matching_full_name, _links }) => {
        const { href } = _links["city:item"];
        return {
            _id: +href.match(/geonameid:[\d]+/)[0].match(/[\d]+/)[0],
            name: matching_full_name.split(",")[0],
            full_name: matching_full_name
        };
    };

    __transformCity = ({
        _links,
        full_name,
        geoname_id,
        location: { latlon },
        name,
        population
    }) => {
        const { name: country } = _links["city:country"];
        const { name: timezone } = _links["city:timezone"];
        return {
            _id: geoname_id,
            full_name,
            name,
            population,
            location: latlon,
            country,
            timezone
        };
    };
}

export default new TeleportService();
