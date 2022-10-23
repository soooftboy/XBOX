import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ul className="xbox-footer">
                        <li className="xbox-footer__title">
                            <h3 className="footer-title">XBOX</h3>
                        </li>
                        <li className="xbox-footer__item">
                            <a className="xbox-footer__link" href="#">Support</a>
                        </li>
                        <li className="xbox-footer__item">
                            <a className="xbox-footer__link" href="#">Contact us</a>
                        </li>
                        <li className="xbox-footer__item">
                            <a className="xbox-footer__link" href="#">Privacy & cookies</a>
                        </li>
                        <li className="xbox-footer__item">
                            <a className="xbox-footer__link" href="#">Terms of use</a>
                        </li>
                    </ul>
                    <ul className="developers-footer">
                        <li className="developers-footer__title">
                            <h3 className="footer-title">Developers</h3>
                        </li>
                        <li className="developers-footer__item">
                            <a className="developers-footer__link" href="#">Games</a>
                        </li>
                        <li className="developers-footer__item">
                            <a className="developers-footer__link" href="#">Windows 10</a>
                        </li>
                        <li className="developers-footer__item">
                            <a className="developers-footer__link" href="#">Creators Program</a>
                        </li>
                        <li className="developers-footer__item">
                            <a className="developers-footer__link" href="#">Designed for XBOX</a>
                        </li>
                    </ul>
                    <div className="follow-us-footer">
                        <h3 className="follow-us-footer__title footer-title">Follow Us</h3>
                        <div className="social-footer">
                            <div className="social-footer__item">
                                <a href="#" className="social-footer__link">
                                    <FaFacebook />
                                </a>
                            </div>
                            <div className="social-footer__item">
                                <a href="#" className="social-footer__link">
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className="social-footer__item">
                                <a href="#" className="social-footer__link">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__footer">
                    <span className="footer__lang">English (United States)</span>
                    <span className="footer__copyright">© Microsoft 2017</span>
                </div>
            </div>
        </footer>
    )
}