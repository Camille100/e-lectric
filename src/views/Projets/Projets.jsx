import React from 'react';
import {useState} from 'react';

import './Projets.scss';
import CardProjets from './CardProjets';

////////////////////// images des projets //////////////////////
import d1Img1 from '../../assets/img/galerie/dossier/img1.jpg'
import d1Img2 from '../../assets/img/galerie/dossier/img2.jpg'
import d1Img3 from '../../assets/img/galerie/dossier/img3.jpg'

import d3Img1 from '../../assets/img/galerie/dossier-3/img1.jpg'
import d3Img2 from '../../assets/img/galerie/dossier-3/img2.jpg'

import d5Img1 from '../../assets/img/galerie/dossier-5/img1.jpg'
import d5Img3 from '../../assets/img/galerie/dossier-5/img3.jpg'
import d5Img4 from '../../assets/img/galerie/dossier-5/img4.jpg'
import d5Img6 from '../../assets/img/galerie/dossier-5/img6.jpg'

import d6Img1 from '../../assets/img/galerie/dossier-6/img1.jpg'
import d6Img2 from '../../assets/img/galerie/dossier-6/img2.jpg'
import d6Img3 from '../../assets/img/galerie/dossier-6/img3.jpg'

import d8Img1 from '../../assets/img/galerie/dossier-8/img1.jpg'
import d8Img2 from '../../assets/img/galerie/dossier-8/img2.jpg'
import d8Img4 from '../../assets/img/galerie/dossier-8/img4.jpg'
import d8Img6 from '../../assets/img/galerie/dossier-8/img6.jpg'
import d8Img7 from '../../assets/img/galerie/dossier-8/img7.jpg'
import d8Img12 from '../../assets/img/galerie/dossier-8/img12.jpg'

import d9Img1 from '../../assets/img/galerie/dossier-9/img1.jpg'
import d9Img3 from '../../assets/img/galerie/dossier-9/img3.jpg'
import d9Img4 from '../../assets/img/galerie/dossier-9/img4.jpg'
import d9Img5 from '../../assets/img/galerie/dossier-9/img5.jpg'
////////////////////////////////////////////////////////////////






function Projets() {

    ////////////////////////// Images stockées dans un state pour faciliter la transmission entre composants via Router
    const [projetsImg, setProjetsImg] = useState([
        {
            projet: {
                id: 0,
                images: [
                    {
                        img: d1Img1
                    },
                    {
                        img: d1Img2
                    },
                    {
                        img: d1Img3
                    }
                ],
                titre: "PROJET 1",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d1Img3
            }
        },
        {
            projet: {
                id: 1,
                images: [
                    {
                        img: d3Img1
                    },
                    {
                        img: d3Img2
                    }
                ],
                titre: "PROJET 2",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d3Img2
            }
        },
        {
            projet: {
                id: 2,
                images: [
                    {
                        img: d5Img1
                    },
                    {
                        img: d5Img3
                    },
                    {
                        img: d5Img4
                    },
                    {
                        img: d5Img6
                    }
                ],
                titre: "PROJET 3",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d5Img6
            }
        },
        {
            projet: {
                id: 3,
                images: [
                    {
                        img: d6Img1
                    },
                    {
                        img: d6Img2
                    },
                    {
                        img: d6Img3
                    }
                ],
                titre: "PROJET 4",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d6Img3
            }
        },
        {
            projet: {
                id: 4,
                images: [
                    {
                        img: d8Img1
                    },
                    {
                        img: d8Img2
                    },
                    {
                        img: d8Img4
                    },
                    {
                        img: d8Img6
                    },
                    {
                        img: d8Img7
                    },
                    {
                        img: d8Img12
                    }
                ],
                titre: "PROJET 5",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d8Img12
            }
        },
        {
            projet: {
                id: 5,
                images: [
                    {
                        img: d9Img1
                    },
                    {
                        img: d9Img3
                    },
                    {
                        img: d9Img4
                    },
                    {
                        img: d9Img5
                    }
                ],
                titre: "PROJET 6",
                duree: "3 mois",
                emplacement: "Metz",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit purus, luctus non massa sit amet, porta tempor est. Ut et orci ut erat dapibus consequat. Mauris elementum arcu nulla. Phasellus consequat, nisl quis pretium euismod, quam est blandit ligula, nec vulputate justo nisl eget nisl. Vestibulum a diam sed ligula aliquam volutpat et vulputate sapien. Praesent congue id tellus eu elementum. Sed rutrum enim non accumsan ullamcorper. ",
                imgPresentation: d9Img5
            }
        },
    ])



    return (
        <div className="Projets">
            <div className="projets-column">
                {projetsImg.map((item, index) => (
                    <CardProjets projet={item.projet} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projets
