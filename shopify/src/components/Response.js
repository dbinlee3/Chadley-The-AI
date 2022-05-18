import React from 'react'
import '../styles.css'

export default function Response( {response} ) {
    return (
        <div className="responseBox">
            <div className="responseContent">
                <label className="responseContent">

                    <div className="promptContent">
                        <p className="responseField">Prompt:</p> 
                        <p className="responseText">{response.prompt} </p>
                    </div>

                    <div className="chadleyContent">
                        <p className="responseField">Chadley:</p> 
                        <p className="chadleyText">{response.responseAI}</p>
                    </div>

                </label>
                
            </div>
        </div>
    )
}