import axios from "axios";

class TeleportService {
    __apiBase = "https://api.teleport.org/api/";

    getCities = async () => {
        const body = await axios.get(`${this.__apiBase}cities/`);
        console.log(body);
        return body.data._embedded["city:search-results"].map(this.__transformCity);
    };

    __transformCity = ({ matching_full_name, _links }) => {
        const { href } = _links["city:item"];
        return {
            _id: +href.match(/(?<=geonameid:)[\d]+/)[0],
            name: matching_full_name.split(",")[0]
        };
    };
}

export default new TeleportService();
