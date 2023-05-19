import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: #fff;
    padding: 0.3rem;
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

const Header = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((currentMessageIndex + 1) % messages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentMessageIndex])

    const messages = [
        'Call us (215) 599-1400',
        'Click here to chat live',
        'We are available for you',
    ]

    const currentMessage = messages[currentMessageIndex]

    return <HeaderContainer>{currentMessage}</HeaderContainer>
}

export default Header
