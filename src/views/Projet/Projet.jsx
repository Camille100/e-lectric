import React from 'react'
import './Projet.scss'

import { useLocation } from 'react-router-dom'
import { useState } from 'react'

///////////////////// galerie ////////////////////
import ImageGallery from 'react-image-gallery';

const Projet = () => {

    /////////////// récupération de l'état transmis via Link (page "CardProjets.jsx") via usage de useLocation

    const location = useLocation()
    const projet = location.state?.projet

    const [isOpen, setIsOpen] = useState(false);

    const photos = projet.images.map((image) => {
        return {
            original: image.img,
            thumbnail: image.img,
            originalHeight: "750px",
            orginalWidth: "750px",
            thumbnailHeight: "50px",
            thumbnailWidth: "50px"
        }
    })




    //console.log(photos)

    return (
        <div className="Projet">
            <div className="projet-container">
                <div className="projet-galerie">
                    <ImageGallery items={photos} />
                </div>
                <div className="projet-details">
                    <div className="projet-infos">
                        <div className="projet-nom projet-info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10272f">
                                <path d="M256 0C162 0 85 77 85 171c0 45 29 83 54 117l12 17c8 11 13 23 16 37 6 25 27 42 51 42h76c24 0 45-17 51-42 3-14 8-26 16-37l12-17c25-34 54-72 54-117C427 77 350 0 256 0zm100 275l-13 17c-9 14-16 29-19 45-4 15-16 26-30 26h-76c-14 0-26-11-30-26-3-16-10-31-19-45l-13-17c-24-33-49-66-49-104a150 150 0 01298 0c0 38-25 71-49 104zM309 405H203a11 11 0 000 22h106a11 11 0 000-22zM309 448H203a11 11 0 000 21h106a11 11 0 000-21zM288 491h-64a11 11 0 000 21h64a11 11 0 000-21z" />
                            </svg>
                            <p>{projet.titre}</p>
                        </div>
                        <div className="projet-duree projet-info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="#10272f">
                                <path d="M22 22a1 1 0 103 0l1-3 4-7a1 1 0 00-1-1H18a1 1 0 00-1 1l4 7 1 3zM25 27a1 1 0 00-3 0c0 1 0 3-2 4l-8 9v1h22a1 1 0 001-1l-8-9c-2-1-2-3-2-4z" />
                                <path d="M42 43c-1-9-6-15-10-19 4-5 9-11 10-20a2 2 0 000-4H5a2 2 0 000 4c1 9 6 15 10 20-4 4-9 10-10 19a2 2 0 100 4h37a2 2 0 100-4zm-32 0c1-8 5-14 9-18v-3c-4-4-8-10-9-18h27c-1 8-5 14-9 18v3c4 4 8 10 9 18H10z" />
                            </svg>
                            <p>{projet.duree}</p>
                        </div>
                        <div className="projet-localisation projet-info">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10272f">
                                <path d="M256 0a180 180 0 00-153 275l143 230c2 4 7 7 12 7h1c5 0 10-3 12-7l140-233A180 180 0 00256 0zm129 257L258 468 128 259a150 150 0 11257-2z" />
                                <path d="M256 90a90 90 0 100 180 90 90 0 000-180zm0 150a60 60 0 110-120 60 60 0 010 120z" />
                            </svg>
                            <p>{projet.emplacement}</p>
                        </div>



                    </div>
                    <div className="projet-description">
                        <h2><span>DESCRIPTION DU PROJET</span></h2>
                        <p>{projet.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projet
