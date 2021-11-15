import React, { useMemo } from "react";

import PropTypes from "prop-types";
import { Grid } from "@mui/material";

import FormField from "./FormField";

import CustomGridItem from "./CustomGridItem";
const FormComponent = ({ formFields, layout }) => {
  const content = useMemo(() => {
    const content = [];
    for (let rowNumber = 1; rowNumber <= layout.length; rowNumber++) {
      const numberOfColumns = layout[rowNumber - 1];
      for (
        let columnNumber = 1;
        columnNumber <= numberOfColumns;
        columnNumber++
      ) {
        let columnContent = [];
        Object.keys(formFields).forEach((key) => {
          if (
            formFields[key].row === rowNumber &&
            formFields[key].col === columnNumber
          ) {
            columnContent.push(
              <FormField
                id={key}
                name={key}
                key={key}
                // width={formFields[key].width}
                label={formFields[key].label}
                fieldType={formFields[key].fieldType}
                fieldconfig={
                  formFields[key].fieldconfig ? formFields[key].fieldconfig : {}
                }
                selectOptions={
                  formFields[key].selectOptions
                    ? formFields[key].selectOptions
                    : []
                }
                toolTip={
                  formFields[key].toolTip ? formFields[key].toolTip : undefined
                }
                isSelectAll={
                  formFields[key].isSelectAll
                    ? formFields[key].isSelectAll
                    : false
                }
                initialValue={
                  formFields[key].initialValue
                    ? formFields[key].initialValue
                    : undefined
                }
              />
            );
          }
        });

        content.push(
          <CustomGridItem
            columns={numberOfColumns}
            key={`${rowNumber}-${columnNumber}`}
          >
            {columnContent}
          </CustomGridItem>
        );
        columnContent = [];
      }
    }

    return content;
  }, [formFields, layout]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {content}
      </Grid>
    </React.Fragment>
  );
};

FormComponent.propTypes = {
  formFields: PropTypes.object,
  layout: PropTypes.array,
};

// FormField.defaultProps = {
//   width: 12,
// }

export default FormComponent;
