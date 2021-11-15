import React, { useEffect, useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./react-draft-wysiwyg.css";
import styled from "@emotion/styled";
import { Grid, InputLabel, FormHelperText } from "@mui/material";
import PropTypes from "prop-types";
import { useField } from "formik";

const Wrapper = styled.div`
  .rich-editor-wrapper {
    border: 1px solid ${({ theme }) => theme.palette.midnight.dark};
    min-height: 130px;
  }
`;

const RichTextField = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [, meta, { setValue }] = useField(props);

  useEffect(() => {
    if (props.initialValue !== "") {
      const initialContent = EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(props.initialValue))
      );
      setEditorState(initialContent);
      setValue({
        message: props.initialValue,
      });
      onEditorStateChange(initialContent);
    }
  }, [props.initialValue]);

  const onEditorStateChange = (richTextValue) => {
    setEditorState(richTextValue);
  };

  useEffect(() => {
    setValue(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState]);

  return (
    <Wrapper>
      <>
        {/* <input
          type="text"
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
         
          readOnly={true}
        /> */}
        <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Editor
            editorState={editorState}
            wrapperClassName="rich-main-wrapper"
            editorClassName="rich-editor-wrapper"
            onEditorStateChange={onEditorStateChange}
            name={props.name}
            id={props.id}
          />
        </Grid>
      </>
      <FormHelperText error={true}>{meta.touched && meta.error}</FormHelperText>
    </Wrapper>
  );
};

RichTextField.propTypes = {
  onSend: PropTypes.func,
  onCancel: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.string,
};

RichTextField.defaultProps = {
  initialValue: "",
};
export default RichTextField;
