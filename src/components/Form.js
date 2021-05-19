import React, { useState } from 'react'
import styled from 'styled-components'

function Form() {
    const initialData = {
        name: "",
        email: "",
        password: "",
        checkPassword: "",
        termsService: false,
    }
    const [form, setForm] = useState({initialData});
    const [shaped, setShaped] = useState(false);

    const NewUserForm = styled.form`
        color: black;
        background-color: blanchedalmond;
        border-radius: 1rem;
        padding: 2%;
    `

    return (
        <NewUserForm>
            <label htmlFor="name">Name
                <input name="name" type="text" />
            </label>
            <label htmlFor="email">Email
                <input name="email" type="email" />
            </label>
            <label htmlFor="password">Password
                <input name="password" type="password" />
            </label>
            <label htmlFor="checkPassword">Verify Password
                <input name="checkPassword" type="password" />
            </label>
            <label htmlFor="termsService">Accept Terms of Service
                <input name="termsService" type="checkbox" />
            </label>
        </NewUserForm>
    )
}

export {
    Form
}
