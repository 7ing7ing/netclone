import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<Form />", () => {
  it("Renders the <Form/> with populated data", () => {
    const history = createMemoryHistory();
    const { container, getByText, getByPlaceholderText } = render(
      <Router location={history.location} navigator={history}>
        <Form>
          <Form.Title>Sign in now</Form.Title>

          <Form.Base>
            <Form.Input placeholder="Email address" onChange={() => {}} />
            <Form.Input
              type="password"
              placeholder="Password"
              onChange={() => {}}
            />
            <Form.Submit type="submit" disabled>
              Sign in
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </Router>
    );

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(getByText("Sign in now")).toBeTruthy();
    expect(getByText("Sign in")).toBeTruthy();
    expect(getByText("Sign in").disabled).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form /> with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>
        <Form.Submit type="submit">Sign in</Form.Submit>
      </Form>
    );
    expect(getByText("Your email address is already being used")).toBeTruthy();
    expect(queryByText("Sign in").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
