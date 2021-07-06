import React from 'react'
import {Helmet} from "react-helmet";

import depannage from '../../assets/img/depannage.jpg'

const Head = () => {
    return (
        <div>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>ELECTR-IC - Electricien Nancy-Metz</title>
                <meta name="title" content="ELECTR-IC - Electricien Nancy-Metz" />
                <meta name="description" content="Votre artisan électricien sur Nancy, Metz et alentours, pour une installation électrique ou un dépannage d'urgence. Tarifs raisonnables, travail de qualité." />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://electr-ic.fr/" />
                <meta property="og:title" content="ELECTR-IC - Electricien Nancy-Metz" />
                <meta property="og:description" content="Votre artisan électricien sur Nancy, Metz et alentours, pour une installation électrique ou un dépannage d'urgence. Tarifs raisonnables, travail de qualité." />
                <meta property="og:image" content={depannage} />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://electr-ic.fr/" />
                <meta property="twitter:title" content="ELECTR-IC - Electricien Nancy-Metz" />
                <meta property="twitter:description" content="Votre artisan électricien sur Nancy, Metz et alentours, pour une installation électrique ou un dépannage d'urgence. Tarifs raisonnables, travail de qualité." />
                <meta property="twitter:image" content={depannage} />
            </Helmet>
        </div>
    )
}

export default Head
