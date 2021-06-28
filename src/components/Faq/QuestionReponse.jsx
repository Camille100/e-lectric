import React from 'react'
import { useState } from 'react'


const QuestionReponse = (props) => {



    const [display, setDisplay] = useState('none')

    const handleClick = () => {
        //console.log('je fonctionne');
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <section className="QuestionReponse">

            <button className="question-picto" onClick={handleClick}>
                <div className="question">{props.question}</div>
                <div className="picto">
                    {display === 'none' 
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10272f">
                            <path d="M492 236H276V20a20 20 0 10-40 0v216H20a20 20 0 100 40h216v216a20 20 0 1040 0V276h216a20 20 0 100-40z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6" fill="#10272f">
                            <path d="M393 188H17a17 17 0 100 34h376a17 17 0 100-34z" />
                        </svg>
                    }
                </div>
            </button>
            <p
                className="reponse"
                style={{ display: display }}
            >
                {props.reponse}
            </p>

        </section>
    )
}

export default QuestionReponse
