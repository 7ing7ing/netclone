import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";

jest.mock("react-router-dom");

describe("<Form />", () => {
  it("Renders the <Form/> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
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
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(getByText("Sign in now")).toBeTruthy();
    expect(getByText("Sign in")).toBeTruthy();
    expect(getByText("Sign in now").disabled).toBeTruthy();
  });
});
