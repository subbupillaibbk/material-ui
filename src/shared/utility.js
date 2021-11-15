export const convertToFormField = (question, row, col) => {
  switch (question.controlType) {
    case "Radio Buttons":
      return {
        fieldType: "radio",
        label: question.questionText,
        value: "",
        selectOptions: question.options.map((option) => ({
          label: option.displayText,
          value: option.displayText,
        })),
        row: row,
        col: col,
      };

    case "Open Text":
      return {
        fieldType: "text",
        label: question.questionText,
        value: "",
        row: row,
        col: col,
      };

    case "Date":
      return {
        fieldType: "date",
        label: question.questionText,
        value: "",
        row: row,
        col: col,
      };

    case "Check Boxes":
      return {
        fieldType: "checkboxgroup",
        label: question.questionText,
        value: "",
        selectOptions: question.options,
        row: row,
        col: col,
      };

    case "Dropdown":
      return {
        fieldType: "select",
        label: question.questionText,
        value: -1,
        selectOptions: question.options,
        row: row,
        col: col,
      };

    default:
      break;
  }
};
