import React from 'react'
import {
    FooterContainer,
    FooterLogo,
    FooterNav,
    FooterNavItem,
} from '../styled-components/FooterStyles.js'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo>© 2023 Lessin Law</FooterLogo>
            <FooterNav>
                {/* <FooterNavItem href="#">Home</FooterNavItem>
                <FooterNavItem href="#">About Us</FooterNavItem>
                <FooterNavItem href="#">Services</FooterNavItem>
                <FooterNavItem href="#">Testimonials</FooterNavItem>
                <FooterNavItem href="#">Contact Us</FooterNavItem> */}
                <FooterNavItem href="#">
                    Jeffrey R. Lessin & Associates, P.C. represents people
                    living in communities throughout Pennsylvania
                </FooterNavItem>
            </FooterNav>
        </FooterContainer>
    )
}

export default Footer
