import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { FirebaseContext } from "../../context/firebase";
import { Signin } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useHistory: () => ({}),
// }));

describe("<Signin/>", () => {
  it("Renders the sign in page with a form submission", async () => {
    const history = createMemoryHistory();
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() =>
          Promise.resolve("I am signed in!")
        ),
      })),
    };

    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router location={history.location} navigator={history}>
        <FirebaseContext.Provider value={{ firebase }}>
          <Signin />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Email address"), {
        target: { value: "ting@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Email address").value).toBe(
        "ting@gmail.com"
      );
      expect(getByPlaceholderText("Password").value).toBe("password");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
