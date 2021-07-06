import React from 'react';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';

import './Home.scss';
import Faq from '../../components/Faq/Faq';
import EndContactSection from './EndContactSection';

//images
import presentation from '../../assets/img/presentation.jpg';




function Home() {

//////////////////////////////////// animation bullet points ///////////////////////////////////
useEffect(() => {
    const bulletPoints = document.querySelectorAll('.bulletPoints');
    
    const animationScrollLeft = (item) => {
        const viewportHeight = window.innerHeight;
        const itemPosition = item.getBoundingClientRect().y;
        if(itemPosition < viewportHeight * 0.80 && item.style.opacity ==0) {
            item.style.opacity = 1;
            item.style.transform = "translateX(0px)";
        }
    }

    const activatingAnimationScrollLeft = () => {
        bulletPoints.forEach((bulletPoint) => {
            window.addEventListener("scroll", animationScrollLeft(bulletPoint));
            window.addEventListener("resize", animationScrollLeft(bulletPoint));
            window.addEventListener("load", animationScrollLeft(bulletPoint));

        })
    }

    window.addEventListener("scroll", activatingAnimationScrollLeft);

    return () => {window.removeEventListener("scroll", activatingAnimationScrollLeft)}
    
}, [])

////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// animation yellow background ///////////////////////////////////
useEffect(() => {
    const strongs = document.querySelectorAll('strong');
    
    const animationApparition = (item) => {
        const viewportHeight = window.innerHeight;
        const itemPosition = item.getBoundingClientRect().y;
        if(itemPosition < viewportHeight * 0.80) {
            item.style.backgroundPosition = "left";
            item.style.color = "#10272f";

        }
    }

    const activatingAnimation = () => {
        strongs.forEach((strong) => {
            window.addEventListener("scroll", animationApparition(strong));
            window.addEventListener("resize", animationApparition(strong));
            window.addEventListener("load", animationApparition(strong));

        })
    }

    window.addEventListener("scroll", activatingAnimation);

    return () => {window.removeEventListener("scroll", activatingAnimation)}
    
}, [])

////////////////////////////////////////////////////////////////////////////////////////////////////








    return (
        <div className="pageHome">

            <section className="slogan">

                <div className="texts">
                    <h1>Dépannage et <br />installation électrique</h1>
                    <h2>Metz - Nancy - Verdun</h2>
                </div>

                <Link to="/contact" className="button">Nous contacter</Link>

                <div className="infos">
                    <h1><a href="tel:+33640351107">Tel : 06 40 35 11 07</a></h1>
                    <a href="mail:electr-ic@orange.fr">electr-ic@orange.fr</a>
                    <p>
                        <span className="gras">Horaires d'ouverture:</span><br />
                        Lundi - Vendredi: 8h - 12h & 13 - 18h<br />
                        Samedi - Dimanche : Fermé
                    </p>
                </div>

            </section>


            <section className="entreprise">

                <div className="texts">
                    <h1>L'entreprise</h1>
                    <p>
                        Votre artisan électricien en <strong>Meuse, Moselle et Meurthe-et-Moselle</strong>, pour un <strong>dépannage</strong> ou une <strong>installation</strong> électrique de qualité.
                        J'étudie <strong>gratuitement</strong> et avec précision chaque projet en prenant compte de vos besoins et attentes, tout en respectant les <strong>normes</strong> en vigueur.

                    </p>
                </div>
                <div className="images">
                    <img src={presentation} alt="" />
                </div>

            </section>

            <section className="whyChoose">

                <h1>Pourquoi choisir Electr-ic ?</h1>
                <ul>
                    <li className="bulletPoints">Electricien expérimenté à votre écoute</li>
                    <li className="bulletPoints">Conseils lors de la planification du projet, et pour l'entretien de votre système électrique</li>
                    <li className="bulletPoints">Suivi après installation</li>
                    <li className="bulletPoints">Utilisation de matériaux de qualité, en provenance de fournisseurs reconnus</li>
                </ul>

            </section>

            <section className="services-offered">

                <h1>Services proposés</h1>
                <div className="services-items">

                    <HashLink smooth to="/services#installation" className="installation-svg item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.3 463.3" fill="#e9e9e9">
                            <path d="M395 82a230 230 0 00-327 0 230 230 0 00-36 281c20 35 49 63 83 83a20 20 0 0011 3 20 20 0 0010-37 192 192 0 11287-166c0 44-12 82-35 108a93 93 0 01-68 33c-25 0-54-14-64-48 40-9 71-45 71-87v-59a5 5 0 00-5-5h-27v-55a20 20 0 10-41 0v55h-45v-55a20 20 0 00-40 0v55h-27a5 5 0 00-5 5v59c0 45 34 83 78 88a105 105 0 00105 87c36 0 72-17 98-47 21-23 45-65 45-134 0-62-24-120-68-164z" />
                        </svg>
                        <p>Installation <br />électrique</p>
                    </HashLink>

                    <HashLink smooth to="/services#renovation" className="renovation-svg item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#FFF">
                            <path d="M190 450a15 15 0 01-9-17l27-132h-42a15 15 0 01-13-8 15 15 0 011-16L304 67c4-5 12-8 18-5a15 15 0 019 17l-27 132h42c6 0 11 3 13 8a15 15 0 01-1 16L208 445a15 15 0 01-18 5zm19-305l-32-32c7-25 2-52-13-74A92 92 0 0057 6c-4 2-8 6-9 11a15 15 0 004 13l27 28c6 6 6 15 0 21-5 6-15 6-21 0L31 52a15 15 0 00-14-4c-5 1-9 4-11 9a90 90 0 00107 120l43 43zm264 203a90 90 0 00-74-13l-43-43-53 74 32 33a90 90 0 00120 107c4-2 8-6 9-11a15 15 0 00-4-14l-27-27c-6-6-6-15 0-21 5-6 15-6 21 0l27 27a15 15 0 0014 4c5-1 9-5 11-9a90 90 0 00-33-107z" />
                        </svg>
                        <p>Rénovation <br />électrique</p>
                    </HashLink>

                    <HashLink smooth to="/services#depannage" className="depannage-svg item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.7 211.7" fill="#FFF">
                            <path d="M201 152a35 35 0 00-38-7 13 13 0 00-2-2l-43-44 50-50a13 13 0 002 0c4 0 8-2 10-5l11-10a6 6 0 001-2c1-2 0-4-1-5l-12-12-4-1-3 1-11 11c-3 3-4 8-4 12l-50 50-40-39a35 35 0 003-14A35 35 0 0035 0l-9 1a4 4 0 00-3 3l1 4a10132 10132 0 0017 18l-2 13-13 2-2-1L8 24l-3-1c-2 0-3 1-4 3a35 35 0 0048 41l39 40-21 22a14 14 0 00-6-2c-4 0-8 2-10 4l-5 5h-1c-4 0-7 2-10 4L8 168c-6 5-6 14 0 19l11 11c2 3 6 4 9 4s7-1 10-4l27-27c3-3 5-7 4-11l5-5c5-4 6-11 3-16l22-21 44 43a13 13 0 002 2 35 35 0 0032 49l9-1a4 4 0 003-3l-1-4-17-17v-2l2-12 12-2h1a3 3 0 012 1 10449 10449 0 0016 16l3 1c2 0 3-1 4-3 3-12-1-25-10-34z" />
                        </svg>
                        <p>Dépannage <br />électrique</p>
                    </HashLink>

                    <HashLink smooth to="/services#domotique" className="domotique-svg item">
                        <svg viewBox="0 0 54 56" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
                            <path d="M7 56h40a1 1 0 001-1V30a1 1 0 000-1L28 9a1 1 0 00-2 0L6 29a1 1 0 000 1v25a1 1 0 001 1zm20-6a2 2 0 110-4 2 2 0 010 4zm8-7l-2 1a1 1 0 01-1 0 7 7 0 00-10 0 1 1 0 01-1 0l-2-1a1 1 0 010-2c5-4 11-4 16 0a1 1 0 010 2zm-22-7a19 19 0 0128 0 1 1 0 010 1l-2 2a1 1 0 01-1 0 15 15 0 00-22 0 1 1 0 01-1 0l-2-2a1 1 0 010-1zM9 15l4-4V9a1 1 0 00-1-1H8a1 1 0 00-1 1v6a1 1 0 002 0z" />
                            <path d="M28 1a1 1 0 00-2 0L1 26a1 1 0 000 1l1 2a1 1 0 002 0L26 6a1 1 0 012 0l22 23a1 1 0 002 0l1-2a1 1 0 000-1z" />
                        </svg>
                        <p>Domotique</p>
                    </HashLink>

                </div>

            </section>
            <EndContactSection />
            <Faq />
        </div>
    )
}

export default Home
