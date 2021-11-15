import React, { useEffect, useState } from "react";

import { Form, Formik } from "formik";

import CustomButton from "../common/Button";

import { Grid, IconButton } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import { checkBoxFormFields, checkBoxFormLayout } from "./checkBoxFormFields";
import FormComponent from "../common/FormComponent";

const CheckBoxForm = () => {
  const tmpInitialValues = {};

  Object.keys(checkBoxFormFields).forEach((key) => {
    tmpInitialValues[key] = checkBoxFormFields[key].value;
  });
  console.log(tmpInitialValues);
  const [formFields, setFormFields] = useState({ ...checkBoxFormFields });
  const [initialValues, setInitialValues] = useState(tmpInitialValues);
  const [readOnly, setReadOnly] = useState(false);

  const submitHandler = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const newFormFields = JSON.parse(JSON.stringify(formFields));
    Object.keys(newFormFields).forEach((key) => {
      newFormFields[key].formconfig = { readonly: readOnly };
    });
    //console.log(newFormFields);
    setFormFields(newFormFields);

    // if (readOnly) {
    //   const readOnlyValues = { ...initialValues };
    //   readOnlyValues.preferredlanguageId = "English";
    //   readOnlyValues.countryId = "United States";
    //   readOnlyValues.stateId = "Masachusetts";
    //   readOnlyValues.sourceId = "Referal";
    //   readOnlyValues.participationProgressId = "Consented";
    //   readOnlyValues.patientIXRSId = "100-508";
    //   setInitialValues(readOnlyValues);
    // } else {
    //   const tmpInitialValues = {};
    //   Object.keys(checkBoxFormFields).forEach((key) => {
    //     tmpInitialValues[key] = checkBoxFormFields[key].value;
    //   });
    //   setInitialValues(tmpInitialValues);
    // }
  }, [readOnly]);

  useEffect(() => {
    const newFormFields = JSON.parse(JSON.stringify(formFields));
    newFormFields.countries.selectOptions = [
      { id: 887, displayText: "Australia" },
      { id: 995, displayText: "Austria" },
      { id: 997, displayText: "United Kingdom" },
      { id: 784, displayText: "United States" },
      { id: 843, displayText: "Venezuela" },
      { id: 855, displayText: "Zimbabwe" },
    ];
    setFormFields(newFormFields);
  }, []);

  const editTravelerDetails = () => {
    setReadOnly((prevValue) => !prevValue);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      enableReinitialize={true}
    >
      {({ handleSubmit }) => {
        return (
          <React.Fragment>
            <div style={{ display: "flex" }}>
              <IconButton
                aria-label="Edit Traveler Detail"
                onClick={editTravelerDetails}
                size="large"
              >
                <Edit />
              </IconButton>
            </div>
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <FormComponent
                  formFields={formFields}
                  layout={checkBoxFormLayout}
                />
                <CustomButton
                  type="submit"
                  color="secondary"
                  label="Submit"
                  size="small"
                  fullWidth={false}
                />
              </Grid>
            </Form>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default CheckBoxForm;
