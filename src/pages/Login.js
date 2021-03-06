import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import './Login.css'


function Login() {
    const history = useHistory();
    const [state, setstate] = useState({
        username: "",
        password: ""
    })
    const { username, password } = state;

    function handleChange(e) {
        const name = e.target.name
        setstate({
            ...state,
            [name]: e.target.value
        })
    }

    function handleLogin(e) {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            history.push('/')
            console.log("Login successful...")
        } else {
            toast("wrong credentials")
            console.log("wrong credentials")
        }
    }
    return (
        <>
            <div className="login-page">
                <div className="form1">
                    <div className="login">
                        <div className="login-header">
                            <h3>LOGIN</h3>
                            <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form className="login-form">
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            value={username}
                            onChange={handleChange} />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={handleChange} />
                        <button onClick={handleLogin}>login</button>
                        <p className="message">Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login