import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "Components/button";
import { validateCityForm } from "Utils/validate-form";

const EditFields = ({
    onSave,
    onCancel,
    city: { name, full_name, population, country, timezone }
}) => {
    return (
        <Formik
            initialValues={{ full_name, population, country, timezone }}
            onSubmit={values => {
                onSave(values);
            }}
            validate={validateCityForm}
        >
            {() => (
                <Form>
                    <div className="city__header">
                        <Button onClick={onCancel} className="button-failure">
                            Cancel
                        </Button>
                        <Button className="button-success" type="submit">
                            Save
                        </Button>
                    </div>
                    <div className="city__field city__field-title">{name}</div>
                    <div className="city__field">
                        Full name: <Field name="full_name" />
                    </div>
                    <div className="city__field">
                        Population: <Field name="population" />
                    </div>
                    <ErrorMessage
                        name="population"
                        className="message-error"
                        component="div"
                    />
                    <div className="city__field">
                        Country: <Field name="country" />
                    </div>
                    <div className="city__field">
                        Timezone: <Field name="timezone" />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default EditFields;
