import React, { useState, useEffect } from 'react'
import {
    HomePageContainer,
    Main,
    Sidebar,
    Ad,
    Testimonials,
} from '../styled-components/HomePageStyles'
import VideoPlayer from '../store/VideoPlayer'
const HomePage = () => {

    const Videos = [
        {
            mp4: 'https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg',
        },
        {
            mp4: 'https://res.cloudinary.com/elpawl-llc/video/upload/v1679865257/production_ID_4686761_wgtnc3.mp4',
        },
    ]
    const carouselContent2 = [
        {
            title: 'Car Accidents',
            description: `
If you've been injured in a car accident, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping car accident victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of car accident cases and can guide you through the legal process from start to finish.

We handle a variety of car accident cases, including those involving drunk driving, distracted driving, and reckless driving. Our goal is to hold the responsible parties accountable and ensure that our clients receive the maximum compensation possible for their injuries, medical bills, lost wages, and pain and suffering.


      `,
        },
        {
            title: 'SEPTA Injuries',
            description: `
If you've been injured while riding on a SEPTA vehicle or at a SEPTA station, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping SEPTA injury victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of SEPTA injury cases and can guide you through the legal process from start to finish.




`,
        },
        {
            title: 'Slip and Fall Accidents',
            description: `
If you've been injured in a slip and fall accident, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping slip and fall injury victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of slip and fall accident cases and can guide you through the legal process from start to finish.




            `,
        },
    ]
    const carouselContent = [
        {
            title: 'Car Accidents',
            description: `
If you've been injured in a car accident, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping car accident victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of car accident cases and can guide you through the legal process from start to finish.

We handle a variety of car accident cases, including those involving drunk driving, distracted driving, and reckless driving. Our goal is to hold the responsible parties accountable and ensure that our clients receive the maximum compensation possible for their injuries, medical bills, lost wages, and pain and suffering.


      `,
        },
        {
            title: 'SEPTA Injuries',
            description: `
If you've been injured while riding on a SEPTA vehicle or at a SEPTA station, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping SEPTA injury victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of SEPTA injury cases and can guide you through the legal process from start to finish.

We handle a variety of SEPTA injury cases, including those involving slip and fall accidents, bus accidents, train accidents, and more. Our goal is to hold SEPTA accountable and ensure that our clients receive the maximum compensation possible for their injuries, medical bills, lost wages, and pain and suffering.

`,
        },
        {
            title: 'Slip and Fall Accidents',
            description: `
If you've been injured in a slip and fall accident, you need an experienced personal injury lawyer on your side. At our law firm, we specialize in helping slip and fall injury victims get the compensation they deserve. Our team of skilled attorneys understands the complexities of slip and fall accident cases and can guide you through the legal process from start to finish.

We handle a variety of slip and fall accident cases, including those involving icy or wet surfaces, uneven pavement or flooring, inadequate lighting, and more. Our goal is to hold the responsible parties accountable and ensure that our clients receive the maximum compensation possible for their injuries, medical bills, lost wages, and pain and suffering.


            `,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex(
                activeIndex === carouselContent.length - 1 ? 0 : activeIndex + 1
            )
        }, 5000)

        return () => clearTimeout(timer)
    }, [activeIndex])

    return (
        <HomePageContainer>
            <Main>
                <div>
                    <h1>{carouselContent[activeIndex].title}</h1>
                    <p>{carouselContent[activeIndex].description}</p>
                </div>
                <div>
                    <VideoPlayer videoId="video1" />
                </div>
            </Main>
            <Main>
                <img
                    src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg"
                    className="logo"
                    alt="logo"
                />
                <div>
                    <h1>{carouselContent2[activeIndex].title}</h1>
                    <p>{carouselContent2[activeIndex].description}</p>
                </div>
            </Main>

            <Sidebar>
                <Testimonials>
                    <p>Client Testimonials</p>
                    <ul>
                        <li>
                            "I highly recommend this law firm. They helped me
                            get the compensation I deserved for my car
                            accident."
                        </li>
                        <li>
                            "The lawyers were very professional and
                            knowledgeable. They kept me informed throughout the
                            entire process."
                        </li>
                        <li>
                            "I'm so grateful for their help. They made a
                            difficult situation much easier to deal with."
                        </li>
                    </ul>
                </Testimonials>
                <Ad>
                    <p>Contact Us</p>
                    <p>Jeffrey R. Lessin & Associates, P.C.</p>
                    <p>(215) 599-1400</p>
                </Ad>
            </Sidebar>
        </HomePageContainer>
    )
}

export default HomePage
