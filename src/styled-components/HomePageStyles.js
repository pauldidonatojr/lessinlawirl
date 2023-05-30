import styled from 'styled-components'

export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1800px;
    margin: 0 auto;
    height: 60vh;
    @media (min-width: 1025px) and (max-width: 1280px) {
        max-width: 1500px;
        display: flex;
    }
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
export const Container1 = styled.div`
    border-radius: 5%;

    margin-top: 19rem;
    margin-bottom: 8rem;
    font-size: 0.7rem;
    width: 80%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 3.2rem;
    height: 55vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
    img {
        max-width: 100%;
        width: 40vh;
        height: 25vh;
        margin-top: 2rem;
        margin-bottom: 3rem;
        margin-left: 3rem;
        border-radius: 4%;
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
        margin-top: 54rem;

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 55vh;
    }

    /* Tablets and Small Screens */
    @media (min-width: 769px) and (max-width: 1024px) {
        background-color: purple;
    }

    /* Medium-sized Screens */
    @media (min-width: 1025px) and (max-width: 1280px) {
        /* Styles for medium-sized screens */
        background-color: orange;
        img {
            max-width: 100%;
            width: 35vh;
            height: 25vh;
            margin-top: 2rem;
            margin-bottom: 3rem;
            margin-left: 3rem;
            @media (max-width: 768px) {
            }
        }
    }

    /* Large Screens */
    @media (min-width: 1281px) {
        /* Styles for large screens */
    }
`
export const Container2 = styled.div`
    border-radius: 5%;
    margin-top: 3rem;
    margin-bottom: 9rem;
    font-size: 0.7rem;
    width: 80%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0.8rem;
    height: 55vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
    img {
        max-width: 100%;
        width: 40vh;
        height: 25vh;
        margin-top: 2rem;
        margin-bottom: 3rem;
        margin-left: 3rem;
        border-radius: 4%;
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
        margin-top: 54rem;

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 55vh;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        .Container1 {
        }
    }
`
export const Title = styled.div`
    width: 100%;
    background-color: lightblue;
    border-radius: 15%;
    height: 20vh;
    p {
        margin-top: 2rem;
    }
    .titleh1 {
        margin-top: 4rem;
        font-size: 50px;
        margin-right: 10px; /* Adjust the margin as needed */
    }
    .container2 {
        height: 25rem;
        width: 100%;
    }
    img {
        width: 100%;
        max-height: 80%;
        margin-bottom: 5rem; /* Ensure the image doesn't exceed the container height */
    }

    @media (max-width: 768px) {
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 5rem;
        border-radius: 14%;
        p {
        }
        .titleh1 {
            font-size: 50px;
        }
        img {
        }
    }
`

export const Main = styled.div`
    flex: 1;
    padding: 8px;
    height: 55rem;
    ${'' /* border: 5px black solid; */}
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

    @media (max-width: 768px) {
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
    }
`
export const Main1 = styled.div`
    display: grid;
    justify-content: center;
    padding: 8px;
    margin-top: 4rem;
    height: 95vh;
    width: 15rem;

    @media (min-width: 1025px) and (max-width: 1280px) {
        margin-bottom: 10rem;
        background-color: purple;
        .lessintitle {
            font-size: 5rem;
        }
        width: 60rem;
        height: 40vh;
        .mainbox1 {
            display: grid;
            align-items: center;
            justify-content: center;
            height: 20vh;
            .textContent {
                font-size: 1.2rem;
            }
        }
        .button-group {
            display: flex;
        }
    }

    .mainbox1 {
        width: 15rem;
        display: grid;
        flex-direction: column;
        align-items: center;
        height: 110vh;
        justify-content: center;
        overflow: auto;
        ::-webkit-scrollbar {
            display: none; /* Hide the scrollbar for WebKit-based browsers */
        }

        .textContent {
            font-size: 1.2rem;
        }
    }
    h1 {
        font-size: 50px;
        margin-bottom: 20px;
    }
    h3 {
        text-decoration: underline;
    }

    .lessintitle {
        font-size: 3.2rem;
    }

    p {
        font-size: 17px;
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
    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40vh;
        margin-top: 0.5rem;
        .mainbox1 {
            width: 20rem;
            display: grid;
            justify-content: center;
            align-items: center;
        }
        .button-group {
            display: grid;
        }
        h1 {
            font-size: 60px;
            margin-bottom: 20px;
        }
        p {
            ${
                '' /* font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: center;
            margin-top: 1rem;
            border-radius: 5%;
            line-height: 1.5rem; */
            }
            display: none;
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
    margin-top: 10px;
    padding: 5px;
    background-color: #f5f5f5;
    overflow: auto;
    max-height: 400px; /* Adjust the value to your desired maximum height */
    margin-top: 2rem;
    p {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-left: 1rem;
    }
    .client {
        text-decoration: underline;
        font-size: 1.4rem;
        margin-left: 1.5rem;
    }
    h3 {
        font-size: 1.5rem;
        margin-left: 1.2rem;
        text-decoration: underline;
        font-weight: 500;
    }
    .stars {
        margin-left: 1.2rem;
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

    @media (max-width: 768px) {
        margin-top: 95rem;
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
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
export const Button2 = styled.button`
    background-color: blue; /* Green */
    border: none;
    padding: 15px 32px;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-weight: 500px;
    &:hover {
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
