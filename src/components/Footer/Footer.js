import React from 'react';

import * as Icon from 'react-bootstrap-icons';

import './Footer.css';
const Footer = props => {
    return(
        <div className="footer__container">
        <div className="footer__links">
            <div className="footer__link--wrapper">
                <div className="footer__link--items">
                    <h2>About Us</h2>
                    <a href="sign-up.html">How it works</a>
                    <a href="/sign-up">Testimonials</a>
                    <a href="/sign-up">Careers</a>
                    <a href="/sign-up">Terms of service</a>
                </div>
                <div className="footer__link--items">
                    <h2>Contect Us</h2>
                    <a href="/sign-up">Contect</a>
                    <a href="/sign-up">Support</a>
                    <a href="/sign-up">Destinations</a>
                </div>
            </div>
            <div className="footer__link--wrapper">
                <div className="footer__link--items">
                    <h2>Videos</h2>
                    <a href="/sign-up">Submit video</a>
                    <a href="/sign-up">ambassadors</a>
                    <a href="/sign-up">Agency</a>
                </div>
                <div className="footer__link--items">
                    <h2>Social media</h2>
                    <a href="/sign-up">Instagram</a>
                    <a href="/sign-up">Facebook</a>
                    <a href="/sign-up">Youtube</a>
                    <a href="/sign-up">Twitter</a>
                </div>
            </div>
        </div>
        <section className="social__media">
            <div className="social__media--wrap">
                <div className="footer__logo">
                    <a href="/" id="footer__logo">COLOR</a>
                </div>
                <p className="website__rights">color 2021. All rights reserved</p>
                <div className="social__icons">
                    <a href="/" className="social__icon--link" target="_blank"><Icon.Facebook color="white" /></a>
                    <a href="/" className="social__icon--link"><Icon.Instagram color="white" /></a>
                    <a href="/" className="social__icon--link"><Icon.Youtube color="white" /></a>
                    <a href="/" className="social__icon--link"><Icon.Linkedin color="white" /></a>
                    <a href="/" className="social__icon--link"><Icon.Twitter  color="white" /></a>


                </div>
            </div>
        </section>
    </div>
    );
};

export default Footer;