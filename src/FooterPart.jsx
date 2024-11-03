import React from 'react';
import './App.css';
import FooterBG from './assets/FooterBG.svg';
import footerlogo from './assets/footerlogo.svg';
import icon1 from './assets/Group 21.svg';
import icon2 from './assets/Group 12.svg';
import facebook from './assets/facebook.svg';
import iglogo from './assets/iglogo.svg';
import twitter from './assets/post-twitter.svg';
import Path4 from './assets/Path 4 Copy.svg';


const FooterPart = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <div>
                        <img src={footerlogo} alt="" className="footer-logo" />
                    </div>
                    <div className="footer-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                    </div>
                    <div>
                        <div className="footer-contact">
                            <img src={icon1} alt="" />
                            <p>Phone: +1-543-123-4567</p>
                        </div>
                        <div className="footer-contact" style={{ paddingTop: '16px' }}>
                            <img src={icon2} alt="" />
                            <p>example@huddle.com</p>
                        </div>
                        <div className="footer-icons">
                            <svg
                                className="Icons"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="post-facebook">
                                    <path
                                        id="Shape"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M28.8 0H3.2C1.44 0 0 1.44 0 3.2V28.8C0 30.56 1.44 32 3.2 32H28.8C30.56 32 32 30.56 32 28.8V3.2C32 1.44 30.56 0 28.8 0ZM27.2 3.2V8H24C23.04 8 22.4 8.64 22.4 9.6V12.8H27.2V17.6H22.4V28.8H17.6V17.6H14.4V12.8H17.6V8.8C17.6 5.76 20.16 3.2 23.2 3.2H27.2Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                            <svg
                                className="Icons"
                                fill="#FFFFFF"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                                width="36px"
                                height="36px"
                            >
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
                            </svg>
                            <svg
                                className="Icons"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="post-twitter">
                                    <path
                                        id="Shape"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M28.8 0H3.2C1.44 0 0 1.44 0 3.2V28.8C0 30.56 1.44 32 3.2 32H28.8C30.56 32 32 30.56 32 28.8V3.2C32 1.44 30.56 0 28.8 0ZM25.12 11.68C24.96 19.04 20.32 24.16 13.28 24.48C10.4 24.64 8.32 23.68 6.4 22.56C8.48 22.88 11.2 22.08 12.64 20.8C10.56 20.64 9.28 19.52 8.64 17.76C9.28 17.92 9.92 17.76 10.4 17.76C8.48 17.12 7.2 16 7.04 13.44C7.52 13.76 8.16 13.92 8.8 13.92C7.36 13.12 6.4 10.08 7.52 8.16C9.6 10.4 12.16 12.32 16.32 12.64C15.2 8.16 21.28 5.76 23.68 8.8C24.8 8.64 25.6 8.16 26.4 7.84C26.08 8.96 25.44 9.6 24.64 10.24C25.44 10.08 26.24 9.92 26.88 9.6C26.72 10.4 25.92 11.04 25.12 11.68Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="footer-newsletter">
                    <div className="footer-newsletter-title">NEWSLETTER</div>
                    <div className="footer-newsletter-text">
                        To receive tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address.
                    </div>
                    <div>
                        <form id="toDoList" className="footer-form">
                            <input type="text" className="footer-input" />
                            <button className="footer-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterPart;