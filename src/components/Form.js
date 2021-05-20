import React, { useState } from 'react'
import styled from 'styled-components'
import { schema } from './schema'
import { NewUserForm } from './NewUserForm'
import { UserCard } from './user-card'
import * as yup from 'yup'

function Form(props) {
    const [shaped, setShaped] = useState({});
    const [users, setUsers] = useState([]);
    
    const ErrorDiv = styled.div`
        color: red;
    `

    function checkSchema(name, value) {
        yup.reach(schema, name).validate(value)
            .then(() => {
                setShaped({...shaped, [name]: ''});
            }).catch((err) => {
                if (err.errors) { 
                    setShaped({...shaped, [name]: err.errors[0]});
                }
            });
    }


    return (
        <div>
            {shaped && <ErrorDiv id="errors">
                    <div>{shaped.username}</div>
                    <div>{shaped.email}</div>
                    <div>{shaped.password}</div>
                    <div>{shaped.checkPassword}</div>
            </ErrorDiv> }
            <NewUserForm checkSchema={checkSchema}
                users={users} setUsers={setUsers}>
                
            </NewUserForm> 
            {users && users.map((item) => {
                return <UserCard id={item.name} key={item.name} user={item} />
            })}
        </div>
    )
}

export {
    Form
}
