import axios from 'axios';
import React from 'react'
import { useContext, useRef } from "react";
import { Context } from '../context/Context';

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("https://wibuki-api.herokuapp.com/api/user/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    }
    return (
        <div style={{ marginTop: "100px" }}>
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="Enter your username..."
                    ref={userRef}
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button className="loginButton" type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}
