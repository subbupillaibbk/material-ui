import React, { useState } from "react";

import styled from "styled-components";
import { Button } from "@mui/material";

import InputField from "./InputField_old";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  width: 80%;
`;
const RightContainer = styled.div`
  float: right;
  display: flex;
  alignitems: center;
  width: 20%;
`;

const Password = (props) => {
  const [hide, setHide] = useState(true);

  const showHideHandler = () => {
    setHide((prevValue) => !prevValue);
  };

  return (
    <React.Fragment>
      <Container>
        <LeftContainer>
          <InputField {...props} type={hide ? "password" : "text"} />{" "}
        </LeftContainer>
        <RightContainer>
          <Button onClick={showHideHandler}>{hide ? "Show" : "Hide"}</Button>
        </RightContainer>
      </Container>
    </React.Fragment>
  );
};

export default Password;
