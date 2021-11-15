import React from "react";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { createEvent } from "@testing-library/dom";
import { act } from "react-dom/test-utils";
import CheckBoxForm from "./CheckBoxForm";
import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "../../styles/baseTheme";
import { CssBaseline } from "@mui/material";

function createPasteEvent(html) {
  const text = html.replace("<[^>]*>", "");
  return {
    clipboardData: {
      types: ["text/plain", "text/html"],
      getData: (type) => (type === "text/plain" ? text : html),
    },
  };
}

test.only("renders blank form for Question", async () => {
  await act(async () => {
    const { container } = await render(
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <CheckBoxForm />
      </ThemeProvider>
    );

    const editorNode = container.querySelector(".public-DraftEditor-content");
    const eventProperties = createPasteEvent("My new html");
    const pasteEvent = createEvent.paste(editorNode, eventProperties);
    pasteEvent.clipboardData = eventProperties.clipboardData;
    fireEvent(editorNode, pasteEvent);
  });

  const sourceAutoComplete = screen.getByRole("textbox", {
    name: "Countries",
  });
  // click into the component
  sourceAutoComplete.focus();

  fireEvent.change(document.activeElement, {
    target: { value: "United States" },
  });
  // arrow down to first option
  fireEvent.keyDown(document.activeElement, { key: "ArrowDown" });
  // select element
  fireEvent.keyDown(document.activeElement, { key: "Enter" });

  waitFor(() => expect(sourceAutoComplete.value).toEqual("United States"));
});
