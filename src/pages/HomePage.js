import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useModalContext } from '../context/modal_context'
import { FaWindowClose } from 'react-icons/fa'
import RainbowChat from '../components/Rainbowchat.js'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Card from '../components/Card'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import {
    HomePageContainer,
    Main,
    Sidebar,
    Ad,
    Testimonials,
    VideoBackground,
    InternalTag1,
    InternalTag2,
    Button,
    ContactCard,

} from '../styled-components/HomePageStyles'

import { Wrapper } from '../styled-components/ModalStyles'
const HomePage = () => {
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


    const [show, setShow] = useState(false)
    const { openModal } = useModalContext()
    const { openChat } = useModalContext()
    const { isModalOpen, closeModal } = useModalContext()
    const { isChatOpen, closeChat } = useModalContext()
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex(
                activeIndex === carouselContent.length - 1 ? 0 : activeIndex + 1
            )
        }, 5000)

        return () => clearTimeout(timer)
    }, [activeIndex])

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const internalTagStyle1 = isMobile ? { fontSize: '0.93rem' } : {}
    const internalTagStyle2 = isMobile ? { fontSize: '0.95rem' } : {}
    const card = (
        <ContactCard>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="phone" placeholder="Phone" />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Type your message here"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </ContactCard>
    )
    return (
        
        <HomePageContainer>

            <VideoBackground autoPlay muted loop>
                <source
                    src="https://res.cloudinary.com/elpawl-llc/video/upload/v1679873411/pexels-kelly-lacy-6606214_1_gcflle.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </VideoBackground>

            <Main>
                <Wrapper>
                    <div className="container page ">
                        <div className="info">
                            {/* <h1 style={{ fontSize: '4rem' }}>
                                Lessin{' '}
                                <span style={{ color: 'blue' }}>Law</span>
                            </h1> */}

                            <img
                                src="https://res.cloudinary.com/elpawl-llc/image/upload/v1683570898/1_tfh9ri.png"
                                alt="logo"
                                className="logo1"
                            />
                            <div
                                className={`${
                                    isModalOpen
                                        ? 'modal-overlay show-modal'
                                        : 'modal-overlay'
                                }`}
                            >
                                <div className="modal-container">
                                    <button
                                        className="close-modal-btn"
                                        onClick={closeModal}
                                    >
                                        <FaWindowClose
                                            style={{
                                                position: 'relative',
                                                zIndex: '1',
                                                top: '0',
                                                right: '0',
                                            }}
                                        ></FaWindowClose>
                                    </button>
                                    Contact
                                </div>
                            </div>
                            <div
                                className={`${
                                    isChatOpen
                                        ? 'chat-overlay show-chat'
                                        : 'chat-overlay'
                                }`}
                            >
                                <div className="modal-container">
                                    <button
                                        className="close-chat-btn"
                                        onClick={closeChat}
                                    >
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
                        </div>
                        <>{card}</>
                    </div>
                </Wrapper>
                <div style={{ marginTop: '10rem' }}>
                    <h1>{carouselContent2[activeIndex].title}</h1>
                    <InternalTag2 style={internalTagStyle2}>
                        {carouselContent2[activeIndex].description}
                    </InternalTag2>
                </div>
            </Main>
            <Main>
                <div style={{ marginTop: '4rem' }}>
                    <h1>{carouselContent[activeIndex].title}</h1>
                    <InternalTag1 style={internalTagStyle1}>
                        {carouselContent[activeIndex].description}
                    </InternalTag1>
                </div>
                <div>
                    <Card />
                </div>
                {/* <img
                    style={{ marginTop: '3rem' }}
                    src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg"
                    className="logo"
                    alt="logo"
                /> */}
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
                    <div className="btn-groups">
                        <Button
                            variant="contained"
                            onClick={handleShow}
                            className="btn btn-hero"
                        >
                            contact us
                        </Button>
                        <Button
                            variant="contained"
                            onClick={openChat}
                            className="btn btn-hero"
                        >
                            live chat
                        </Button>
                    </div>
                    <p>(215) 599-1400</p>
                </Ad>
            </Sidebar>
            <Footer />
        </HomePageContainer>
    )
}

export default HomePage
