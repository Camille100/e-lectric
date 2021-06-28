import React from 'react';

import './Faq.scss';
import QuestionReponse from './QuestionReponse';


const Faq = () => {

    const faqs = [
        {
            question: "Does conduit need to go inside the transformer box?",
            reponse: "No. Conduit should be stopped just short of the box."
        },
        {
            question: "How close to the pole do I bring my conduit to?",
            reponse: "The top of the elbow must be 6' from the pole.."
        },
        {
            question: "Is there a difference in meter bases?",
            reponse: "Yes, There are three types. Overhead only, Underground only, and Overhead/Underground combination bases. However, combination boxes are not recommended for Underground installations because of their limited wire space."
        },
        {
            question: "What about outdoor lighting?",
            reponse: "We offer a variety of lighting products including decorative colonial, cobra head, directional floodlights, and security lights. We can customize plans to fit any lighting need."
        },
    ]


    return (
        <div className="Faq">
            <div className="faq-container">
                <h1>FAQ</h1>
                {faqs.map((faq, index) => (
                    <QuestionReponse question={faq.question} reponse={faq.reponse} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Faq
