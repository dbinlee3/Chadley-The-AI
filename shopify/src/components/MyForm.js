import { useRef, useState, useEffect } from 'react'
import React from 'react'
import ResponseList from './ResponseList'
import { v4 as uuidv4 } from 'uuid'; //To generate unique ID
const { Configuration, OpenAIApi } = require("openai");

//Set local storage
const LOCAL_STORAGE_KEY = 'myLocalKey'

/*
/ The MyForm component contains the textbox in which the user can
/ enter their prompt to the application. This is also where the
/ API requests are handled and most of the states in the application.
/ It will also render the list of the API responses, from newest
/ entries to oldest.
*/
function MyForm() {

    const prompt = useRef(); //ref for a prompt

    const [myArray, setMyArray] = useState([]); //State of current list

    //Load stored list from local storage
    useEffect(() => {
        const storedResponses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedResponses) setMyArray(storedResponses)
    }, [])

    //Save the current list to local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(myArray))
    }, [myArray])


    //Event Handler when user submits the form
    const handleSubmit = (e) => {

        e.preventDefault(); //Prevent unwanted reload
        const submittedPrompt = prompt.current.value

        /*          Handle OpenAI API           */
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        //"text-curie-001" mode has been chosen
        openai.createCompletion("text-curie-001", {
            prompt: `${prompt.current.value}`,
            temperature: 0.8,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })        
        .then((response) => {
            setMyArray(myArray =>{
                return [{ 
                    id: uuidv4(), 
                    prompt: submittedPrompt, 
                    responseAI: response.data.choices[0].text
                }, ...myArray]
            })
        });

        prompt.current.value = null //Reset the textfield
    }

    //Event Handler when user clicks Clear Button. Clears the list
    function handleClearResponses() {
        setMyArray([])
    }

    return(
        <>
            <section className="wrapper">
                <p className="textGreen">Ask me anything!</p>
                <form className="appForm">

                    <textarea className="textBox" ref={prompt}></textarea>
                    
                    <div className="formButtonGrid">
                        <button className="formButton" onClick={handleClearResponses}>Clear List</button>
                        <button onClick={handleSubmit} className="formButton" type="submit">Submit</button>
                    </div>

                </form> {/* End of appForm */}
                <ResponseList responses={myArray}/>
            </section> {/* End of wrapper */}
        </>
    );
}

export default MyForm;