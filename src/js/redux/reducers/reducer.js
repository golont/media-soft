import { currentCity } from "./current-city";
import { cities } from "./cities";

const reducer = (state, action) => {
    return {
        ...state,
        currentCity: currentCity(state.currentCity, action),
        cities: cities(state.cities, action)  
    };
};

export default reducer;
