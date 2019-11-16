import React, { useState } from 'react';
import api from '../utils/api';

export default function Signin() {
    const [user, setUser] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        roleId: 0
    })
    const [instructor, setInstructor] = useState(false)

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleRole = (role) => {
        if (role === 1) {
            setUser({
                ...user,
                roleId: 1
            })
            setInstructor(true)
        }else if (role === 2) {
            setUser({
                ...user,
                roleId: 2
            })
            setInstructor(false)
            
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        api().post(`/api/auth/register`, user)
            .then(res => {
                console.log("Success!", res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <button onClick={() => handleRole(1)}>Sensei</button>
                    <button onClick={() => handleRole(2)}>Grasshopper</button>
                    {instructor === true && <div>Register as an instructor</div>}
                    {instructor === false && <div>Register as a student</div>}
                </div>
                <div>
                    <label>
                        Username:
                        <input 
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        First Name:
                        <input 
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input 
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}