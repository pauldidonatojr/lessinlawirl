import React from 'react'

const Footer = () => {
    return (
        <section>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>
                        Lessin<span>Law</span>
                    </h3>
                    <p className="footer-links">
                        <a href="#">Home</a> ·<a href="#">Blog</a> ·
                        <a href="#">Pricing</a> ·<a href="#">About</a> ·
                        <a href="#">Faq</a> ·<a href="#">Contact</a>
                    </p>
                    <p className="footer-company-name">
                        Lessin Law Pennsylvania Lawyers Philadelphia Accident
                        Claims Attorney © 2023
                    </p>
                    P.C 1515 Market St #1650, Philadelphia, PA
                </div>
                <div className="footer-right">
                    <p>Contact Us</p>
                    <form action="#" method="post">
                        <input type="text" name="email" placeholder="Email" />
                        <textarea
                            name="message"
                            placeholder="Message"
                        ></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </footer>
        </section>
    )
}

export default Footer
