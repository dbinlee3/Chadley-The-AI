import React from 'react'
import Response from './Response'

/*
/ The ResponseList component renders our list of Response
/ components, by mapping out the current state of the list
*/
export default function ResponseList({ responses }) {
    return (
        responses.map(response => {
            //Each response has a unique ID
            return <Response key={response.id} response={response} />
        })
    )
}