export const validateCityForm = values => {
    const errors = {};
    if (isNaN(values.population)) {
        errors.population = "Population must be a number!";
    }

    return errors;
};
