import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {schema} from './schema'

function NewUserForm(props) {
    const initialData = {
        username: "",
        email: "",
        password: "",
        checkPassword: "",
        termsService: false,
    }
    
    const [form, setForm] = useState(initialData);
    const [disabled, setDisabled] = useState(true);
    const { setUsers, users } = props;

    function submit(event) {
        const newUser = {
            name: form.username.trim(),
            email: form.email.trim(),
            password: form.password.trim(),
            terms: form.termsService,
        }
        event.preventDefault();
        axios.post(`https://reqres.in/api/users`, newUser)
            .then((res) => {
                if (userMatch(res.data)) {
                    alert("Only one instance of each user allowed.");
                } else { 
                    setUsers([...users, res.data]);
                }
                setForm(initialData);
            }).catch((err) => alert(err));
    }

    function update(event) {
        event.preventDefault();
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData}); 
        schema.isValid(form)
            .then(valid => setDisabled(!valid));
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

useEffect(() => {
    setForm(initialData);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

return (
        <div id="user-form">
            {props.children}
            <label htmlFor="username">Name
            <input id="username" name="username" type="text" onChange={(event) => update(event)} value={form.username} />
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
            <button id="submit-button" name="submit-button" onClick={submit} disabled={disabled}>Submit</button>        
        </div>
    )
}

export {
    NewUserForm
}
