import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormComponent from "../common/FormComponent";
import { myFormFields, myFormLayout } from "./myDynamicFormFields";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Grid } from "@mui/material";
import CustomButton from "../common/Button";
import { convertToFormField } from "../../shared/utility";
import { getDynamicQuestions } from "../../services/backend";

const ActionWrapper = styled.div`
  position: fixed;
  bottom: 4px;
  right: 28px;
`;

// const validationSchema = yup.object().shape({
//   "How are you today?": yup.string().required("This field is required"),
//   "Select all that apply": yup.string().required("This field is required"),
// });

const MyForm = () => {
  const initialState = {};
  const [formFields, setFormFields] = useState(
    JSON.parse(JSON.stringify(myFormFields))
  );
  const [schema, setSchema] = useState(yup.object({}));
  const [initialized, setInitialized] = useState(false);

  const getSchema = async (questions) => {
    let schemaObj = {
      "Select all that apply": yup.string().required("This field is required"),
    };

    questions.forEach((q) => {
      schemaObj[q.questionText] = yup
        .string()
        .required("This field is required");
    });
    console.log(schemaObj);

    let newSchema = yup.object(schemaObj);
    setSchema(newSchema);
    setInitialized(true);
  };

  Object.keys(formFields).forEach((key) => {
    initialState[key] = formFields[key].value;
  });

  useEffect(() => {
    getDynamicQuestions().then((response) => {
      console.log(response);
      const questions = response.questions;
      if (!initialized) getSchema(questions);
    });
  });

  useEffect(() => {
    getDynamicQuestions().then((response) => {
      console.log(response);
      const questions = response.questions;
      if (questions && questions.length > 0) {
        const newFormFields = JSON.parse(JSON.stringify(formFields));

        questions.forEach((question) => {
          newFormFields[question.questionText] = convertToFormField(
            question,
            1,
            2
          );

          /** ADD VALIDATION FOR DYNAMIC FIELDS */
          // console.log(question.isResponseRequired)
          // if (question.isResponseRequired) {
          //   console.log('question.isResponseRequired is TRUE')
          //   const newVal = yup.object({
          //     [question.question]: yup.string().required(`${question.question} is required`),
          //   })
          // }
        });

        Object.keys(newFormFields).forEach((key) => {
          initialValues[key] = newFormFields[key].value;
        });

        setFormFields(newFormFields);
      }
    });
  }, []);

  // Empty values for New Address form
  const initialValues = { "Select all that apply": "" };

  const submitHandler = (data) => {
    console.log("SUMBIT CALLED");
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={schema}
      onSubmit={submitHandler}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <Grid container spacing={2}>
              <FormComponent
                formFields={formFields}
                layout={myFormLayout}
                setFieldValue={setFieldValue}
              />
              <ActionWrapper>
                <CustomButton
                  label="Save and Continue"
                  size="small"
                  fullWidth={false}
                  color="primary"
                  type="submit"
                />
              </ActionWrapper>
            </Grid>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MyForm;
