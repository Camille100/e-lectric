import React from 'react';
import {Link} from 'react-router-dom'
import './Home.scss';

import presentation from '../../assets/img/presentation.jpg';

function Home() {
    return (
        <div className="pageHome">

            <section className="slogan">

                <div className="texts">
                    <h1>Dépannage et <br />installation électrique</h1>
                    <h2>Metz - Nancy - Verdun</h2>
                </div>

                <Link to="/contact" className="button">Nous contacter</Link>
                
                <div className="infos">
                    <h1><a href="">Tel : 06 40 35 11 07</a></h1>
                    <a href="">electr-ic@orange.fr</a>
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
                        Votre artisan électricien  en Meuse, Moselle et Meurthe-et-Moselle, pour un dépannage ou une installation électrique de qualité.
                        J'étudie gratuitement et avec précision chaque projet en prenant compte de vos besoins et attentes, tout en respectant les normes en vigueur. *
                        
                    </p>
                </div>
                <div className="images">
                    <img src={presentation} alt="" />
                </div>


            </section>

            <section>

            </section>

            <section>

            </section>
        </div>
    )
}

export default Home
