import React from "react";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

export const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Wysłane");

    };

    return (
        <>
        <div className="container">
            <Navigation/>
            <form className="login__box" onSubmit={formSubmit}>
            <Title text="Zaloguj się"/>
            <div className="input__box">
            <label className="login__label">Email
                </label>
                <input
                    className="login__input input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="login__label">Hasło

                </label>
                <input
                    className="login__input input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="buttons__box">
            <Link to="/register"><button className="basic__button button button--left">Zarejestruj się</button></Link>
            <button className="basic__button button button--right">Zaloguj się</button>
            </div>
            </form>
             
        </div>
        </>
    )
}