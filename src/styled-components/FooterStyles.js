import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
    }
`

export const FooterLogo = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

export const FooterNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: 1rem;
        justify-content: center;
    }
`

export const FooterNavItem = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    margin-left: 2rem;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #d32626;
    }

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`
