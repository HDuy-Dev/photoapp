import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectFiled from "custom-fields/SelectField";
import { Formik, Form, FastField } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

export default function PhotoForm(props) {
    const initialValues = {
        title: "",
        categoryId: null,
        photo: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("This field is required."),
        categoryId: Yup.number().required("This field is required.").nullable(),
        photo: Yup.string().required("This field is required."),
    });
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value) => console.log("Submit", value)}
        >
            {(formikProps) => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            label="Name"
                            placeholder="Eg: ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectFiled}
                            label="Categories"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Random photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">
                                Add a new photo
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}
