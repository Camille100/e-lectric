import React from 'react'


const Service = (props) => {
    return (
        <div className="Service-card" >

                <div className="service-text">
                    {props.titre}
                    {props.description}
                </div>

                <img src={props.image} alt="service offered" />

            
        </div>
    )
}

export default Service
