import React, { useEffect } from "react";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "@emotion/styled";

import { getInstanceIdFromURL } from "./utility";

const StyledHelperText = styled(FormHelperText)`
  position: relative;
  bottom: 0px;
  left: 5px;
`;
const StyledAutoComplete = styled(Autocomplete)`
  .MuiOutlinedInput-root {
    max-height: 120px;
    overflow: hidden;
  }
`;

const AutoCompleteComp = (props) => {
  const { label, id, name, options, fetchOptions, fieldconfig, isSelectAll } =
    props;

  const [field, meta, { setValue, setTouched }] = useField(props);

  const onChange = (event, selectedValues, reason) => {
    if (isSelectAll) {
      if (reason === "selectOption" || reason === "removeOption") {
        if (selectedValues.find((option) => option.id === "select-all")) {
          setValue(options);
        } else {
          setValue(selectedValues);
        }
      } else if (reason === "clear") {
        setValue([]);
      }
    } else {
      setValue(selectedValues);
    }
  };

  let formattedOptions = options;
  if (isSelectAll) {
    formattedOptions = [
      { id: "select-all", displayText: "Select All" },
      ...options,
    ];
  }

  return (
    <>
      <StyledAutoComplete
        limitTags={3}
        getOptionLabel={(option) => option.displayText}
        options={formattedOptions}
        id={id}
        renderInput={(params) => (
          <TextField
            {...params}
            error={meta.touched && Boolean(meta.error)}
            label={label}
          />
        )}
        name={name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={field.value}
        onChange={onChange}
        onBlur={setTouched}
        ChipProps={{ size: "small", color: "secondary" }}
        {...fieldconfig}
        multiple={true}
      />

      <StyledHelperText error={true}>
        {meta.touched && meta.error}
      </StyledHelperText>
    </>
  );
};

AutoCompleteComp.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, displayText: PropTypes.string })
  ).isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.any,
  isMulti: PropTypes.bool,
  fieldconfig: PropTypes.object,
  fetchOptions: PropTypes.func,
  isSelectAll: PropTypes.bool,
};

AutoCompleteComp.defaultProps = {
  isMulti: false,
  isSelectAll: false,
  fieldconfig: { disabled: false },
};

export default AutoCompleteComp;
