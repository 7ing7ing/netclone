import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor relations</Footer.Link>
          <Footer.Link href="#">Ways to watch</Footer.Link>
          <Footer.Link href="#">Corporate information</Footer.Link>
          <Footer.Link href="#">Netclone originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of use</Footer.Link>
          <Footer.Link href="#">Contact us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media centre</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie preferences</Footer.Link>
          <Footer.Link href="#">Legal notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netclone United Kingdom</Footer.Text>
    </Footer>
  );
}
