import { useEffect, useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import { TextField } from "@mui/material";
const StyledInput = styled(TextField)`
  && {
    .MuiInputBase-root {
      border-radius: 10px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MultiOptions = (props) => {
  const [options, setOptions] = useState([]);
  const [field, meta, { setValue }] = useField(props);
  const onChangeHandler = (e) => {
    const newOptions = [...options];
    newOptions[e.target.id] = e.target.value;
    setOptions(newOptions);
  };

  useEffect(() => {
    setValue(options);
  }, [options]);

  const addOptionHandler = () => {
    const newOptions = [...options, ""];
    setOptions(newOptions);
  };

  const removeOptionHandler = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div>
      <Wrapper>
        <div style={{ width: "85%", textAlign: "left" }}>
          <h3>Options</h3>
        </div>
        <div style={{ width: "15%" }}>
          <button name="btnAddOption" type="button" onClick={addOptionHandler}>
            Add
          </button>
        </div>
      </Wrapper>
      <input hidden={true} name={props.name} type="text" id={props.name} />
      {options.map((option, index) => (
        <Wrapper>
          <div style={{ width: "80%" }}>
            <StyledInput
              fullWidth
              variant="outlined"
              id={index}
              label={`Option ${index + 1}`}
              size="small"
              type="text"
              margin="normal"
              value={option}
              onChange={onChangeHandler}
            />
          </div>
          <div style={{ width: "20%", alignItems: "center" }}>
            <button
              name="btnRemoveOption"
              type="button"
              onClick={() => removeOptionHandler(index)}
            >
              Remove
            </button>
          </div>
          {/* <InputF
          type="text"
          value={option}
          key={index}
          id={index}
         
        /> */}
        </Wrapper>
      ))}
    </div>
  );
};

export default MultiOptions;
