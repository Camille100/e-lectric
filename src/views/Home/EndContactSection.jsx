import React from 'react'
import './EndContactSection.scss'

import {Link} from 'react-router-dom'

const EndContactSection = () => {
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
