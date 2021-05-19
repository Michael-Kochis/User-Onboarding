import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import * as yup from 'yup'
import { schema } from './schema'
import { NewUserForm } from './NewUserForm'
import { UserCard } from './user-card'

function Form() {
    const initialData = {
        username: "",
        email: "",
        password: "",
        checkPassword: "",
        termsService: false,
    }

    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState(initialData);
    const [shaped, setShaped] = useState({});
    const [users, addUsers] = useState([]);

    const ErrorDiv = styled.div`
        color: red;
    `

    function checkSchema(name, value) {
        schema.isValid(form)
        .then(valid => setDisabled(!valid));

        yup.reach(schema, name).validate(value)
            .then(() => setShaped({...shaped, [name]: ''}))
            .catch((err) => setShaped({...shaped, [name]: err.errors[0]}) );
    }

    function submit(event) {
        const newUser = {
            name: form.username,
            email: form.email,
            password: form.password,
            terms: form.termsService,
        }
        event.preventDefault();
        axios.post(`https://reqres.in/api/users`, newUser)
            .then((res) => {
                if (userMatch(res.data)) {
                    alert("Only one instance of each user allowed.");
                } else { 
                    addUsers([...users, res.data]);
                }
            }).catch((err) => alert(err));
    }

    function update(event) {
        event.preventDefault();
        const {name, type, value, checked} = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        checkSchema(name, updateData);
        setForm({...form, [name]: updateData}); 
    }

    function userMatch(obj) {
        let user = obj;
        let found = false;

        users.forEach((exist) => {
            if ((user.name === exist.name) && (user.email === exist.email)) {
                found = true;
            }
        })

        return found;
    }

    return (
        <div>
            <NewUserForm form={form} setForm={setForm} update={update} submit={submit} disabled={disabled}>
                <ErrorDiv id="errors">
                    <div>{shaped.username}</div>
                    <div>{shaped.email}</div>
                    <div>{shaped.password}</div>
                    <div>{shaped.checkPassword}</div>
                </ErrorDiv>
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
