import React from 'react'
import './EndContactSection.scss'

import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const EndContactSection = () => {


    useEffect(() => {
        const strongs = document.querySelectorAll('strong');
        
        const animationApparition = (item) => {
            const viewportHeight = window.innerHeight;
            const itemPosition = item.getBoundingClientRect().y;
            if(itemPosition < viewportHeight * 0.80) {
                item.style.backgroundPosition = "left";
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



    return (
        <div className="EndContactSection">
            <div className="EndContactSectionContainer">
                <div className="contact-plea-end">
                    <h1>Besoin <strong>d'informations</strong> supplémentaires?</h1>
                    <p>Pour obtenir davantage d'informations sur nos <strong>tarifs</strong>, les <strong>services</strong> offerts ou simplement nous <strong>exposer votre projet</strong>, n'hésitez pas à nous contacter.</p>
                </div>
                <Link to="/contact" className="btn-contact-end">NOUS CONTACTER</Link>
            </div>
        </div>
    )
}

export default EndContactSection
