import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: #f5f5f5;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    height: 30vh;
`
const CardImage = styled.img`
    max-width: 100%;
    height: 20vh;
`

const CardTitle = styled.h2`
    font-size: 1.5rem;
    margin: 0.5rem 0;
`

const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
`

const Card = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex((currentCardIndex + 1) % cardData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentCardIndex])

    const cardData = [
        {
            image: 'https://picsum.photos/id/237/200/300',
            title: 'Card 1',
            description: 'This is the description for Card 1',
        },
        {
            image: 'https://picsum.photos/id/238/200/300',
            title: 'Card 2',
            description: 'This is the description for Card 2',
        },
        {
            image: 'https://picsum.photos/id/239/200/300',
            title: 'Card 3',
            description: 'This is the description for Card 3',
        },
    ]

    const { image, title, description } = cardData[currentCardIndex]

    return (
        <CardContainer>
            <CardImage src={image} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}

export default Card
