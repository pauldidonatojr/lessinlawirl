import styled from 'styled-components'

export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
    height: 80vh;
`

export const VideoBackground = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 85vh;
    z-index: -1;
    object-fit: cover;
    opacity: 0.5;
`
export const ContactCard = styled.div`
    height: 100%;
    width: 100%;
    .background {
        display: flex;
        min-height: 100vh;
    }

    .container {
        flex: 0 1 700px;
        margin: auto;
        padding: 10px;
    }

    .screen {
        position: relative;
        background: #3e3e3e;
        border-radius: 15px;
    }

    .screen:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 20px;
        right: 20px;
        bottom: 0;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        z-index: -1;
    }

    .screen-header {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        background: #4d4d4f;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }

    .screen-header-left {
        margin-right: auto;
    }

    .screen-header-button {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 8px;
        background: white;
    }

    .screen-header-buttonClose {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 3px;
        border-radius: 8px;
    }

    .screen-header-button.close {
    }

    .screen-header-button.maximize {
        background: #e8e925;
    }

    .screen-header-button.minimize {
        background: #74c54f;
    }

    .screen-header-right {
        display: flex;
    }

    .screen-header-ellipsis {
        width: 3px;
        height: 3px;
        margin-left: 2px;
        border-radius: 8px;
        background: #999;
    }

    .screen-body {
        display: flex;
    }

    .screen-body-item {
        flex: 1;
        padding: 50px;
    }

    .screen-body-item.left {
        display: flex;
        flex-direction: column;
    }

    .app-title {
        display: flex;
        flex-direction: column;
        position: relative;
        color: #ea1d6f;
        font-size: 26px;
    }

    .app-title:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 25px;
        height: 4px;
        background: #ea1d6f;
    }

    .app-contact {
        margin-top: auto;
        font-size: 8px;
        color: #888;
    }

    .app-form-group {
        margin-bottom: 15px;
    }

    .app-form-group.message {
        margin-top: 40px;
    }

    .app-form-group.buttons {
        margin-bottom: 0;
        text-align: right;
    }

    .app-form-control {
        width: 100%;
        padding: 10px 0;
        background: none;
        border: none;
        border-bottom: 1px solid #666;
        color: #ddd;
        font-size: 14px;
        text-transform: uppercase;
        outline: none;
        transition: border-color 0.2s;
    }

    .app-form-control::placeholder {
        color: #666;
    }

    .app-form-control:focus {
        border-bottom-color: #ddd;
    }

    .app-form-button {
        background: none;
        border: none;
        color: white;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }

    .app-form-button:hover {
        color: brown;
        font-weight: bold;
    }

    .credits {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        color: #ffa4bd;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 16px;
        font-weight: normal;
    }

    .credits-link {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
    }

    .dribbble {
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }

    @media screen and (max-width: 520px) {
        .screen-body {
            flex-direction: column;
        }

        .screen-body-item.left {
            margin-bottom: 30px;
        }

        .app-title {
            flex-direction: row;
        }

        .app-title span {
            margin-right: 12px;
        }

        .app-title:after {
            display: none;
        }
    }

    @media only screen and (max-width: 600px) {
        .app-contact {
            display: none;
        }

        .screen-body {
            padding: 40px;
        }

        .screen-body-item {
            padding: 0;
        }
    }
`
export const Main = styled.div`
    flex: 1;
    padding: 10px;


    h1 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 20px;

        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }
`

export const Sidebar = styled.div`
    flex: 0 0 300px;
    padding: 20px;

    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }
`

export const Ad = styled.div`
    flex: 0 0 300px;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;

    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`
export const InternalTag1 = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`
export const InternalTag2 = styled.span`
    font-size: 1.05rem;
    font-weight: 600;
`
export const Testimonials = styled.div`
    flex: 0 0 300px;
    margin-top: 20px;
    padding: 10px;
    background-color: #f5f5f5;

    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }
`

// Holy Grail Flexbox Layout
export const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Main} {
        flex: 2;
    }

    ${Sidebar}, ${Ad}, ${Testimonials} {
        flex: 1;
    }

    @media only screen and (max-width: 767px) {
        ${Main}, ${Sidebar}, ${Ad}, ${Testimonials} {
            flex: 1 0 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        ${Main} {
            order: 2;
            margin-right: 20px;
        }

        ${Sidebar} {
            order: 1;
            margin-right: 20px;
        }

        ${Ad} {
            order: 3;
            margin-left: 20px;
        }
    }

    @media only screen and (min-width: 992px) {
        ${Main} {
            margin-left: 20px;
        }

        ${Sidebar} {
            margin-left: auto;
        }
    }
`
export const Button = styled.button`
    background-color: blue; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: #3e8e41;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
