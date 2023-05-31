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
import Pop from '../components/Pop.js'
import Card2 from '../components/Card2.js'
import Card3 from '../components/Card3.js'
import Reviews from '../components/Reviews.js'
import { carouselContent1, carouselContent2 } from '../utils/imagedata.js'

import {
    HomePageContainer,
    Main,
    Main1,
    Sidebar,
    Ad,
    Testimonials,
    VideoBackground,
    InternalTag1,
    InternalTag2,
    Button,
    Button2,
    ContactCard,
    Container1,
    Container2,
    Title,
} from '../styled-components/HomePageStyles'

import { Wrapper } from '../styled-components/ModalStyles'
const HomePage = () => {
    const [testimonials, setTestimonials] = useState([])
    const [show, setShow] = useState(false)
    const { openModal } = useModalContext()
    const { openChat } = useModalContext()
    const { isModalOpen, closeModal } = useModalContext()
    const { isChatOpen, closeChat } = useModalContext()
    const [lessinColor, setLessinColor] = useState('#003366')
    const [lawColor, setLawColor] = useState('#B0C4DE')
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [activeIndex1, setActiveIndex1] = useState(0)
    const [activeIndex2, setActiveIndex2] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex1(
                activeIndex1 === carouselContent1.length - 1
                    ? 0
                    : activeIndex1 + 1
            )
        }, 8000)

        return () => clearTimeout(timer)
    }, [activeIndex1])
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex2(
                activeIndex2 === carouselContent2.length - 1
                    ? 0
                    : activeIndex2 + 1
            )
        }, 4000)

        return () => clearTimeout(timer)
    }, [activeIndex2])

    const [isMobile, setIsMobile] = useState(false)
    const getRandomColor = () => {
        const colors = [
            '#001d33',
            '#3d8d9c',
            '#1f6a82',
            '#196a8a',
            '#4e6462',
            '#1f4066',
            '#2c6599',
            '#3d7370',
            '#1f898f',
            '#00a6c2',
            '#064d63',
            '#0b9bb8',
            '#006b87',
            '#0088b3',
            '#0b9fcc',
            '#6a9dc7',
            '#0d99cc',
        ]

        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLessinColor(getRandomColor())
            setLawColor(getRandomColor())
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    const internalTagStyle1 = isMobile ? { fontSize: '0.93rem' } : {}
    const internalTagStyle2 = isMobile ? { fontSize: '0.95rem' } : {}

    const handleMapClick = () => {
        // Open the map with the location
        window.open(
            'https://maps.google.com/?q=1515+Market+St+%231650,+Philadelphia,+PA'
        )
    }
    const openURL = () => {
        window.open('https://g.page/r/CdWZcmBLeneOEB0/review', '_blank')
    }

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
            <Main1>
                <div className="mainbox1">
                    <h1 className="lessintitle">
                        <span style={{ color: lessinColor }}>Lessin</span>{' '}
                        <span style={{ color: lawColor }}>Law</span>
                    </h1>
                    <h3> Pennsylvania Personal Injury Lawyers</h3>
                    <p
                        onClick={openURL}
                        style={{ marginLeft: '1rem', fontSize: '1.5rem' }}
                    >
                        {' '}
                        Click Here Leave Us a Review!{' '}
                    </p>

                    <div className="button-group">
                        <Button
                            variant="contained"
                            onClick={openChat}
                            className="btn btn-hero"
                        >
                            live chat
                        </Button>
                        <Button
                            onClick={handleMapClick}
                            className="btn btn-hero"
                        >
                            {' '}
                            Directions
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleShow}
                            className="btn btn-hero"
                        >
                            contact us
                        </Button>
                    </div>

                    <p className="textContent">
                        Our team of dedicated personal injury lawyers is devoted
                        to seeking justice for our clients who have suffered
                        injuries in various incidents. We specialize in handling
                        cases such as car accidents, motorcycle accidents,
                        pedestrian accidents, bicycle accidents, slip and fall
                        accidents, medical malpractice, product liability,
                        workplace accidents, construction accidents, dog bites,
                        assault or battery, wrongful death, public
                        transportation accidents, aviation accidents, boating
                        accidents, defamation, toxic exposure, nursing home
                        abuse, and recreational accidents. With a relentless
                        pursuit of fair compensation, we work tirelessly to
                        ensure that our clients receive the financial reparation
                        they deserve for their injuries.
                    </p>
                </div>
            </Main1>
            <Pop />

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
                            <Card />
                            {/* <h1 style={{ fontSize: '4rem' }}>
                                Lessin{' '}
                                <span style={{ color: 'blue' }}>Law</span>
                            </h1> */}

                            {/* <img
                                src="https://res.cloudinary.com/elpawl-llc/image/upload/v1683570898/1_tfh9ri.png"
                                alt="logo"
                                className="logo1"
                            /> */}

                            {/* <Title>
                                <div className="container2">
                                    <h1 className="titleh1">
                                        Lessin <span>Law</span>
                                    </h1>
                                    <p style={{ fontSize: '1.5rem' }}>
                                        Lessin Law Pennsylvania Lawyers
                                        Philadelphia Accident Claims Attorney
                                    </p>

                                </div>
                            </Title> */}

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
                    </div>
                    <>{card}</>
                </Wrapper>
                <Container1 style={{}}>
                    <img src={carouselContent1[activeIndex1].image} alt="img" />
                    <h1>{carouselContent1[activeIndex1].title}</h1>
                    <InternalTag2 style={internalTagStyle2}>
                        {carouselContent1[activeIndex1].description}
                    </InternalTag2>
                </Container1>
            </Main>
            <Main>
                <Container2>
                    <img src={carouselContent2[activeIndex2].image} alt="img" />
                    <h1>{carouselContent2[activeIndex2].title}</h1>
                    <InternalTag1 style={internalTagStyle1}>
                        {carouselContent2[activeIndex2].description}
                    </InternalTag1>
                </Container2>
                <div>
                    <Card2 />
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
                    <p className="client">Client Testimonials</p>
                    <Link to="https://www.facebook.com/lessinlawphiladelphia">
                        {' '}
                        <p className="client" style={{ marginLeft: '1rem' }}>
                            {' '}
                            Find us on Facebook!
                        </p>
                    </Link>
                    <p onClick={openURL} style={{ marginLeft: '4.5rem' }}>
                        {' '}
                        Click Here{' '}
                    </p>
                    <p onClick={openURL} style={{ marginLeft: '2.5rem' }}>
                        {' '}
                        Leave us a review!{' '}
                    </p>
                    <Reviews />
                </Testimonials>

                <Ad
                    style={{
                        backgroundColor: '#dae1e5',
                        border: '4px black solid',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p>
                            Jeffrey R. Lessin & Associates, P.C 1515 Market St
                            #1650, Philadelphia, PA
                        </p>
                    </div>
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
                        <Button
                            onClick={handleMapClick}
                            className="btn btn-hero"
                        >
                            {' '}
                            Directions
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
