import React from 'react';


import './Services.scss';
import Service from './Service';
import installation from '../../assets/img/installation.jpg';
import renovation from '../../assets/img/renovation.jpg';
import domotique from '../../assets/img/domotique.jpg';
import depannage from '../../assets/img/depannage.jpg';

function Services() {

    const servicesInfos = [
        {
            titre: <h1 className="renovation" id="renovation"><span>Rénovation électrique & mise en conformité</span></h1>,
            description:
                <div className="description">

                    <p>Votre installation électrique n’est pas conforme ou trop vétuste ? Je suis là pour vous fournir tous les conseils et l’expertise nécessaire afin de rénover votre installation, dans le respect des dernières normes en vigueur.</p>

                    <div className="astuce">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 24h-3l-2-2v-2l-1-3c-2-1-3-3-3-5 0-4 3-7 7-7a7 7 0 017 7c0 2-1 4-3 5l-1 3v2l-2 2zM12 6c-3 0-6 3-6 6l2 5 2 3v2l1 1h3v-3l2-3 2-5a6 6 0 00-6-6z" />
                            <path d="M15 21H9l1-1h5v1c0 1 0 0 0 0zM12 3V1 0l1 1v2h-1zm7 3h-1V5l2-1c0-1 0-1 0 0l-1 2zm5 7h-2l-1-1h3v1zm-4 8l-2-2v-1h1l1 2v1zM4 21H3v-1l2-2h1v1l-2 2zm-1-8H1l-1-1h3v1zm2-7L4 4C3 4 3 4 4 4l2 1v1H5zm11 7v-1c0-2-2-3-4-3V8c3 0 5 2 5 4l-1 1z" />
                        </svg>
                        <p>Une installation électrique qui a plus de 30 ans et n’a connu aucune rénovation est obsolète, elle devient dangereuse pour l’utilisateur et doit être remise aux normes.</p>
                    </div>

                </div>,
            image: renovation
        },
        {
            titre: <h1 className="installation" id="installation"><span>Installation électrique</span></h1>,
            description:
                <div className="description">
                    <p>Mettre en place une installation électrique ? C’est avec toute mon expérience que je saurai répondre à vos attentes. Particulier ou professionnel, je suis à votre disposition afin de discuter de vos projets lors d’un premier rendez-vous et pour, éventuellement, mettre en place un devis avec vous.</p>
                    
                    
                    <ul><p>Quelques exemples de travaux :</p>
                        <li>Piquets de terre</li>
                        <li>Tableaux électriques</li>
                        <li>Remplacement de prises électriques</li>
                        <li>Interrupteurs et interrupteurs différentiels</li>
                        <li>Télérupteurs</li>
                        <li>Disjoncteurs et disjoncteurs différentiels</li>
                        <li>Luminaires</li>
                        <li>Motorisation de volets, portails, stores...</li>
                        <li>Interphonie et videophonie</li>
                        <li>Alarme sans fil</li>
                        <li>Chauffage électrique</li>
                        <li>Radiateurs chaleur douce</li>
                        <li>Sèche-serviettes</li>
                        <li>Plancher chauffant…</li>
                    </ul>
                </div>,
            image: installation
        },
        {
            titre: <h1 className="depannage" id="depannage"><span>Dépannage électrique</span></h1>,
            description:
                <div className="description">

                    <p>
                        Intervention rapide pour tous types de pannes, qu’il s’agisse de prises défectueuses, de coupure de courant, de réparation ou de modification de votre éclairage,
                        ou encore de gestion de votre chauffage électrique. Un travail de qualité et dans le respect des normes en vigueur vous est garanti.
                    </p>

                </div>,
            image: depannage
        },
        {
            titre: <h1 className="domotique" id="domotique"><span>Domotique</span></h1>,
            description:
                <div className="description">

                    <h2>Qu’est-ce que la domotique ?</h2>

                    <p>
                        Il s’agit de l’ensemble des techniques permettant de centraliser le contrôle des différents systèmes de votre maison (chauffage, volets, portes de garage, portails, éclairage, ventilation, …) .
                        Elle peut vous permettre d’optimiser votre gestion de l’énergie, de vous apporter un réel confort de vie au sein de votre habitation, ou encore de répondre à  des impératifs de sécurité ou de communication.
                        C’est en mettant mon expertise à votre service que je m’engage, quelque soit votre projet, à vous offrir les meilleures solutions afin de répondre à vos besoins.
                    </p>

                </div>,
            image: domotique
        }
    ]

    return (
        <div className="services">
            {servicesInfos.map((service, index) => (
                <Service
                    key={index}
                    titre={service.titre}
                    description={service.description}
                    image={service.image}
                />
            ))}
        </div>
    )
}

export default Services
