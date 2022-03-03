import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Header } from "../../components";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("<Header/>", () => {
  it("Renders the basic <Header/> with a background", () => {
    const history = createMemoryHistory();
    const { container, getByText, getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header>
          <Header.Frame>
            <Header.Logo to="/" usrc="/logo.svg" alt="Netflix" />
            <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );
    expect(getByText("Hello I am a link!")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the basic <Header/> without a background", () => {
    const history = createMemoryHistory();
    const { container, getByText, queryByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header bg={false}>
          <Header.Frame>
            <Header.Logo to="/" src="/logo.svg" alt="Netflix" />
            <Header.ButtonLink to="/">Sign in</Header.ButtonLink>
            <Header.TextLink active="false">Hello I am a link!</Header.TextLink>
          </Header.Frame>
        </Header>
      </Router>
    );
    expect(getByText("Hello I am a link!")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Renders the full <Header/> with background", () => {
    const history = createMemoryHistory();
    const { container, getByText, getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to="/" src="/images/logo.svg" alt="Netflix" />
              <Header.TextLink active={false} onClick={() => {}}>
                Series
              </Header.TextLink>
              <Header.TextLink active onClick={() => {}}>
                Films
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
              <Header.Profile>
                <Header.Picture src="/images/ting.png" />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src="/images/ting.png" />
                    <Header.TextLink>Ting-Ting Chen</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => {}}>
                      Sign out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker now</Header.FeatureCallOut>
            <Header.Text>Forever alone in a crowd.</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>
      </Router>
    );
    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("Joker");
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(getByTestId("search-click"));

    expect(getByText("Series")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("Ting-Ting Chen")).toBeTruthy();
    expect(getByText("Watch Joker now")).toBeTruthy();
    expect(getByText("Sign out")).toBeTruthy();
    expect(getByText("Forever alone in a crowd.")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
