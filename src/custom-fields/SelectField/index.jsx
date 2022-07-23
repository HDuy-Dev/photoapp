import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

export default function SelectFiled(props) {
    const { field, form, label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const selectedOption = options.find((option) => option.value === value);
    const showError = errors[name] && touched[name];
    console.log({ showError });

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption
            ? selectedOption.value
            : selectedOption;
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };

        field.onChange(changeEvent);
        // const optionChanged = options.find(
        //     (option) => option.value === selectedValue
        // );
        // form.setFieldValue(name, optionChanged);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}
                isDisabled={disabled}
                placeholder={placeholder}
                options={options}
                className={showError ? "is-invalid" : ""}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}
