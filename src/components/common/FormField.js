import React from "react";

import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import InputField from "./InputField";
import AutoCompleteComp from "./AutoCompleteComp";
import Password from "./Password";
import CustomRadioGroup from "./RadioGroup";
import CustomCheckbox from "./Checkbox";
import DateField from "./DateField";
import CheckboxGroup from "./CheckboxGroup";
import ReadOnly from "./ReadOnly";
import MultiOptions from "./MultiOptions";
import RichTextField from "./RichTextField";

const FormField = (props) => {
  let returnField = null;

  if (!props.fieldconfig?.readonly) {
    switch (props.fieldType) {
      case "text":
        returnField = (
          <InputField
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            fieldconfig={props.fieldconfig}
            size="small"
            type="text"
          />
        );
        break;
      case "largeText":
        returnField = (
          <InputField
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            fieldconfig={props.fieldconfig}
            size="large"
            type="text"
          />
        );
        break;
      case "password":
        returnField = (
          <Password
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            fieldconfig={props.fieldconfig}
            size="small"
          />
        );
        break;
      case "select":
        returnField = (
          <AutoCompleteComp
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            isSelectAll={props.isSelectAll}
            options={props.selectOptions}
            fieldconfig={props.fieldconfig}
            isSelectAll={true}
          />
        );
        break;
      case "radio":
        returnField = (
          <CustomRadioGroup
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            options={props.selectOptions}
            fieldconfig={props.fieldconfig}
          />
        );
        break;
      case "checkbox":
        returnField = (
          <CustomCheckbox
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            onChange={props.onChange}
            fieldconfig={props.fieldconfig}
          />
        );
        break;
      case "date":
        returnField = (
          <DateField
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            onChange={props.onChange}
            fieldconfig={props.fieldconfig}
          />
        );
        break;
      case "checkboxgroup":
        console.log("CHECKBOX GROUP");
        returnField = (
          <CheckboxGroup
            id={props.id}
            data-testid={props.id}
            label={props.label}
            name={props.name}
            setFieldValue={props.setFieldValue ? props.setFieldValue : null}
            selectOptions={props.selectOptions}
          />
        );
        break;
      case "richTextEditor":
        returnField = (
          <RichTextField
            name={props.name}
            label={props.label}
            initialValue={props.initialValue}
          />
        );
        break;
      case "multioptions":
        returnField = <MultiOptions name={props.name} />;
        break;

      default:
        returnField = <div>No matching control found</div>;
        break;
    }
  } else {
    returnField = (
      <ReadOnly id={props.id} label={props.label} name={props.name} />
    );
  }

  return (
    <Grid item xs={12} sm={12} md={props.width} lg={props.width} key={props.id}>
      {returnField}
    </Grid>
  );
};

FormField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  fieldType: PropTypes.string,
  selectOptions: PropTypes.array,
  width: PropTypes.number,
  onChange: PropTypes.func,
  fieldconfig: PropTypes.object,
  setFieldValue: PropTypes.func,
};

FormField.defaultProps = {
  width: 12,
};
export default FormField;

// const { key, ...rest } = props
