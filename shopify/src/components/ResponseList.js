import React from 'react'
import Response from './Response'

export default function ResponseList({ responses }) {
    return (
        responses.map(response => {
            return <Response key={response.id} response={response} />
        })
    )
}