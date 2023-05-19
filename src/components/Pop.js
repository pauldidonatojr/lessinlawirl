import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useModalContext } from '../context/modal_context'
import { FaWindowClose } from 'react-icons/fa'
import RainbowChat from '../components/Rainbowchat.js'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: black;
    @media (max-width: 767px) {
    }
    .popup-card {
        text-align: center;

        box-sizing: border-box;
        overflow: hidden;
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translateY(0px);
        animation: float 6s ease-in-out infinite;
        img {
            width: 100%;
            height: auto;
        }

        @media (max-width: 767px) {
            border: none;
        }
        .title {
            font-size: 10rem;
            @media (max-width: 767px) {
                font-size: 8rem;
            }
        }
    }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translateY(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
            transform: translateY(-20px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translateY(0px);
        }
    }
`

const Button1 = styled.button`
    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;

    @media (max-width: 767px) {
        font-size: 17px;
    }
    &:hover {
        background-color: #b0c4de;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
const Button2 = styled.button`
    background-color: white; /* Green */
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: #b0c4de;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
    @media (max-width: 767px) {
        font-size: 17px;
    }
`
const Popup = ({ onClose }) => {

    const { openChat } = useModalContext()
    const { isChatOpen, closeChat } = useModalContext()
  const [lessinColor, setLessinColor] = useState('#003366')
  const [lawColor, setLawColor] = useState('#B0C4DE')
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLessinColor(getRandomColor())
            setLawColor(getRandomColor())
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getRandomColor = () => {
        const colors = [
            '#003366',
            '#76D7EA',
            '#37AFD4',
            '#20AAEA',
            '#7FBEBD',
            '#327BCD',
            '#57A8E3',
            '#80B2C2',
            '#3BBFCF',
            '#00CCFC',
            '#0B8BB8',
            '#17C6EA',
            '#008FB1',
            '#00BFFF',
            '#12C5FF',
            '#9AD5FF',
            '#11CCFF',
        ]

        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    return (
        <Wrapper className="popup-overlay">
            <div
                className={`${
                    isChatOpen ? 'chat-overlay show-chat' : 'chat-overlay'
                }`}
            >
                <div className="modal-container">
                    <button className="close-chat-btn" onClick={closeChat}>
                        <FaWindowClose
                            style={{
                                position: 'relative',
                                zIndex: '999990',
                                top: '0',
                                right: '0',
                            }}
                        ></FaWindowClose>
                    </button>
                    <RainbowChat />
                </div>
            </div>
            <div className="popup-card">
                <h1
                    className="title"
                    style={{
                        fontFamily: 'Lobster',

                        marginBottom: '20px',
                        transition: 'color 0.3s ease-in-out',
                    }}
                >
                    <span style={{ color: lessinColor }}>Lessin</span>{' '}
                    <span style={{ color: lawColor }}>Law</span>
                </h1>

                <div>
                    <span>
                        {' '}
                        <Button1
                            variant="contained"
                            onClick={openChat}
                            className="btn btn-hero"
                        >
                            Live Chat
                        </Button1>
                    </span>
                    <span
                        style={{
                            width: '100%',
                        }}
                    >
                        <Button2
                            variant="contained"
                            onClick={onClose}
                            className="btn btn-hero"
                        >
                            Close
                        </Button2>
                    </span>
                </div>
            </div>
        </Wrapper>
    )
}

const PopupComponent = () => {
    const [showPopup, setShowPopup] = useState(true)

    const handlePopupClose = () => {
        setShowPopup(false)
    }

    return (
        <div>
            {showPopup && <Popup onClose={handlePopupClose} />}
            {/* Rest of your component */}
        </div>
    )
}

export default PopupComponent
