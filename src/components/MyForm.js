import { useRef, useState, useEffect } from 'react'
import React from 'react'
import ResponseList from './ResponseList'
import { v4 as uuidv4 } from 'uuid'; //To generate unique ID

const { Configuration, OpenAIApi } = require("openai");

//Set local storage
const LOCAL_STORAGE_KEY = 'myLocalKey'


function MyForm() {

    //ref for a prompt
    const prompt = useRef();

    //State of current list
    const [myArray, setMyArray] = useState([]);

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

        ////////OPENAI
        //process.env.OPENAI_API_KEY
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

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
                return [ { id: uuidv4(), prompt: submittedPrompt, responseAI: response.data.choices[0].text}, ...myArray]
            })
        });

        prompt.current.value = null
    }

    //Event Handler when user clicks Clear Button. Clears the list
    function handleClearResponses() {
        setMyArray([])
    }

    return(
        <>
            <div className="wrapper">
                <p className="textGreen">Ask me anything!</p>
                <form>

                    <label>
                        <textarea className="textBox" ref={prompt}></textarea>
                        {/* <input type="wideInput"  /> */}
                    </label>
                    <div className="formButtonGrid">
                        <button className="formButton" onClick={handleClearResponses}>Clear List</button>
                        <button onClick={handleSubmit} className="formButton" type="submit">Submit</button>
                    </div>

                </form>
                

                <div>
                    <ResponseList responses={myArray}/>
                </div>
            </div>
        </>
    );
}

export default MyForm;