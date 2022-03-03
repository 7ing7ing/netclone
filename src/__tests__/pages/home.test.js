import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Renders the homepage", () => {
  const history = createMemoryHistory();
  const { getByText, getAllByText, getAllByPlaceholderText } = render(
    <Router location={history.location} navigator={history}>
      <Home />
    </Router>
  );
  expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
  expect(getAllByPlaceholderText("Email address")).toBeTruthy();
  expect(getAllByText("Try it now")).toBeTruthy();
  expect(
    getAllByText(
      "Ready to watch? Enter your email to create or restart your membership"
    )
  ).toBeTruthy();
});
