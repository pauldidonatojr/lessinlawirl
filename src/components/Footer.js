import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterNavItem,
} from "../styled-components/FooterStyles.js"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>Logo</FooterLogo>
      <FooterNav>
        <FooterNavItem href="#">Home</FooterNavItem>
        <FooterNavItem href="#">About Us</FooterNavItem>
        <FooterNavItem href="#">Services</FooterNavItem>
        <FooterNavItem href="#">Testimonials</FooterNavItem>
        <FooterNavItem href="#">Contact Us</FooterNavItem>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;
