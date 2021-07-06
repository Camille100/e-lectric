import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Footer.scss';
import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-columns">

                <section className="footer-presentation footer-column">
                    <div className="footer-logo">
                        <h1>ELECTR-IC</h1>
                        <img src={logo} alt="Logo ELECTR-IC" />
                    </div>
                    <p className="footer-text">
                        Electricien qualifié et expérimenté, je prends en charge tous types de projets, de l'éclairage aux systèmes de sécurité, en passant par les dépannages d'urgence.
                    </p>
                </section>

                <section className="footer-services footer-column">
                    <h1>Services</h1>
                    <HashLink smooth to='/services#installation' className="footer-service">Installation électrique</HashLink>
                    <HashLink smooth to='/services#renovation' className="footer-service">Rénovation électrique & mise en conformité</HashLink>
                    <HashLink smooth to='/services#depannage' className="footer-service">Dépannage électrique</HashLink>
                    <HashLink smooth to='/services#domotique' className="footer-service">Domotique</HashLink>
                </section>

                <section className="footer-contact footer-column">

                    <h1>Contact</h1>

                    <div className="footer-contact-all">

                        <div className="footer-contact-tel footer-contact-both">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" fill="#e9e9e9">
                                <path d="M353.188 252.052c-23.51 0-46.594-3.677-68.469-10.906-10.719-3.656-23.896-.302-30.438 6.417l-43.177 32.594c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208 11.167-20.198 7.635-31.448-7.26-21.99-10.948-45.063-10.948-68.583C132.146 13.823 118.323 0 101.333 0h-70.52C13.823 0 0 13.823 0 30.813 0 225.563 158.438 384 353.188 384c16.99 0 30.813-13.823 30.813-30.813v-70.323c-.001-16.989-13.824-30.812-30.813-30.812z" />
                            </svg>
                            <p>06 40 35 11 07</p>
                        </div>

                        <div className="footer-contact-mail footer-contact-both">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#e9e9e9">
                                <path d="M467 61H45C20 61 0 81 0 106v300c0 25 20 45 45 45h422c25 0 45-20 45-45V106c0-25-20-45-45-45zm-6 30L257 295 51 91h410zM30 400V112l144 143L30 400zm21 21l145-145 50 51c6 5 16 5 22 0l49-50 144 144H51zm431-21L338 256l144-144v288z" />
                            </svg>
                            <p>electr-ic@orange.fr</p>
                        </div>

                        <div className="footer-contact-hours footer-contact-both">
                            <svg viewBox="0 0 443.3 443.3" xmlns="http://www.w3.org/2000/svg" fill="#e9e9e9">
                                <path d="M222 0a222 222 0 100 444 222 222 0 000-444zm0 416a194 194 0 110-389 194 194 0 010 389z" />
                                <path d="M236 83h-28v144l87 88 20-20-79-79z" />
                            </svg>
                            <p>Lun - Ven<br />8h - 12h & 13h - 18h</p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default Footer
