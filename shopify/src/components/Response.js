import React from 'react'
import '../styles.css'

/*
/ The Response component is a box which contains the User's
/ inputted prompt, as well as the response from the API.
*/
export default function Response( {response} ) {
    return (
        <>
            <div className="responseBox">
                <section className="responseWrapper">

                    <label className="promptContent">
                        <p className="responseField">Prompt:</p> 
                        <p className="responseText">{response.prompt} </p>
                    </label>

                    <label className="chadleyContent">
                        <p className="responseField">Chadley:</p> 
                        <p className="chadleyText">{response.responseAI}</p>
                    </label>

                </section> {/* End of responseContent */}
            </div> {/* End of responseBox */}
        </>
    )
}