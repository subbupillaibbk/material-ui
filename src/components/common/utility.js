// export const usePersistedState = (key, defaultValue) => {
//     const [state, setState] = React.useState(
//         () => JSON.parse(localStorage.getItem(key)) || defaultValue
//       );
//     useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//     }, [key, state]);
//     return [state, setState];
// };

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const getInstanceIdFromURL = () => {
  return window.location.pathname.split("/")[1];
};

export const getSelectedId = () => {
  /**
   * This will return the last element from the URL
   * Example: from this URLS xyz/abc/my-route/2, returns 2
   */
  return window.location.pathname.split("/").pop();
};

export const helpers = {
  getDropdownOptions: (valuesObject) => {
    const selectOptions = valuesObject.map((obj) => ({
      label: obj.displayText,
      value: obj.id,
    }));
    return selectOptions;
  },
};

export const sortArrayByProperty = (array, property) => {
  return array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
};

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

export const extractArrayOfIdsForEachKey = (objectOfArrays) => {
  /**
   * Input example
   * { firstKey: [{id: 1, displayText: 'simpleText'}, {id: 2, displayText: 'secondText'}],
   *   secondKey: [{id: 22, displayText: 'simpleText'}, {id: 33, displayText: 'secondText'}] }
   *
   * Output example
   * { firstKey: [1,2], secondKey: [22, 33] }
   */
  return Object.entries(objectOfArrays).reduce((acc, val) => {
    if (val[1] && val[1].length) {
      acc[val[0]] = val[1].map((item) => item.id);
    } else {
      acc[val[0]] = null;
    }
    return acc;
  }, {});
};

export const dateFormatter = (givenDate, formatType) => {
  let formattedDate;
  if (givenDate) {
    formattedDate = new Date(givenDate);
    const year = formattedDate.getFullYear();
    const month = formattedDate.getMonth() + 1;
    const date = formattedDate.getDate();
    const options = {
      "yyyy-mm-dd": `${year}-${month}-${date}`,
      "mm-dd-yyyy": `${month}-${date}-${year}`,
      "dd-mm-yyyy": `${date}-${month}-${year}`,
    };
    formattedDate = options[formatType] || "";
  } else {
    formattedDate = "";
  }
  return formattedDate;
};
