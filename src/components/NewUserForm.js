import React from 'react'
import styled from 'styled-components'

function NewUserForm(props) {
    let { disabled, form, submit, update } = props;

    const UserForm = styled.form`
    color: black;
    background-color: blanchedalmond;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 1rem;
    padding: 2%;
`
    return (
        <UserForm>
            {props.children}
            <label htmlFor="username">Name
                <input id="username" name="username" type="text" onChange={update} value={form.username} />
            </label>
            <label htmlFor="email">Email
                <input id="email" name="email" type="email" onChange={update} value={form.email} />
            </label>
            <label htmlFor="password">Password
                <input id="password" name="password" type="password" onChange={update} value={form.password} />
            </label>
            <label htmlFor="termsService">Accept Terms of Service
                <input id="termsService" name="termsService" type="checkbox" onChange={update} checked={form.termsService} />
            </label>
            <button onClick={submit} disabled={disabled}>Submit</button>        </UserForm>
    )
}

export {
    NewUserForm
}
