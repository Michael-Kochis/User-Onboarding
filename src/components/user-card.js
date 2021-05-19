import React from 'react'
import styled from 'styled-components'

function UserCard(props) {
    const { name, email, terms } = props.user;

    const User = styled.div` 
        background-color: silver;
        display: flex;
        flex-flow: column nowrap;
        justify-content: start;
        align-items: flex-start;
        border-radius: 1rem;
        padding: 2%;
    `

    return (
        <User>
            <p>Username: {name}</p>
            <p>Email: {email}</p>
            <p>{(terms)? "Accepted terms" : "Did not accept terms of service."}</p>
        </User>
    )
}

export {
    UserCard
}
