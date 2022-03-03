import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signup } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am signed up!")),
        },
      })
    ),
  })),
};

describe("<Signup/>", () => {
  it("Renders the sign up page with a form submission", async () => {
    const history = createMemoryHistory();

    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router location={history.location} navigator={history}>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signup />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("First name"), {
        target: { value: "Ting" },
      });
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "ting@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("First name").value).toBe("Ting");
      expect(getByPlaceholderText("Email address").value).toBe(
        "ting@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
