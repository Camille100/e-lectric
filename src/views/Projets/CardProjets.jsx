import React from 'react'
import './CardProjets.scss'

import { Link } from 'react-router-dom';

const CardProjets = (props) => {
    return (
        //////////// Route dynamique (Route path dans app.js) via l'id + transmission du state via Link ///////////////
        <Link to={{
            pathname: "/projet/:" + props.projet.id,
            state: {...props}
        }} className="CardProjets">
        
            <img src={props.projet.imgPresentation} alt={props.projet.titre} />
            <div className="calque">
                <p>{props.projet.titre}</p>
            </div>
        </Link>
    )
}

export default CardProjets
