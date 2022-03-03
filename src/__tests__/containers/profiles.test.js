import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { SelectProfileContainer } from "../../containers/profiles";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<Profiles/>", () => {
  it("Renders the <Profiles/>", () => {
    const history = createMemoryHistory();
    const user = { displayName: "Ting", photoURL: "profile.png" };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <SelectProfileContainer user={user} setProfile={setProfile} />
      </Router>
    );

    fireEvent.click(getByTestId("user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
