import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Categories</Footer.Title>
            <Footer.Link href="#">Men</Footer.Link>
            <Footer.Link href="#">Women</Footer.Link>
            <Footer.Link href="#">Kids</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">USA</Footer.Link>
            <Footer.Link href="#">UK</Footer.Link>
            <Footer.Link href="#">India</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <i class="fab fa-facebook-square"></i>Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <i class="fab fa-instagram-square"></i>Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <i class="fab fa-linkedin"></i>Linkedin
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
