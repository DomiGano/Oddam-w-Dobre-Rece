import React from "react";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

export const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const [users, setUsers] = useState([
        {
            email: "janek@o2.pl",
            password: "testowanko",
        },
        {
            email: "karol@wp.pl",
            password: "testoweHasło2",
        },
    ])
    

    
    const formSubmit = (e) => {
        e.preventDefault();

        if (users.find((user) => user.email === email && user.password === password)) {
            console.log("Zalogowano pomyślnie");
            setEmailErr(false);
            setPasswordErr(false);
        } if (users.find((user) => user.email !== email && user.password !== password)) {
            setEmailErr(true);
            setPasswordErr(true);

        } if (users.find((user) => user.email !== email)) {
            setEmailErr(true);

        } if (users.find((user) => user.password !== password)) {
            setPasswordErr(true);

        } if (users.find((user) => user.password === password)) {
            setPasswordErr(false);
        } if (users.find((user) => user.email === email)) {
            setEmailErr(false);

        } 
        
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
                    style={emailErr ? {borderBottom: "1px solid red" } : null}
                />
                {emailErr ? <p className="error">Podano błędny e-mail!</p> : null}
                
                <label className="login__label">Hasło
                </label>
                <input
                    className="login__input input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={passwordErr ? {borderBottom: "1px solid red" } : null}
                />
                {passwordErr ? <p className="error">Podano błędne hasło!</p> : null}
            </div>
            <div className="buttons__box">
            <Link to="/registration"><button className="basic__button button button--left">Zarejestruj się</button></Link>
            <button className="basic__button button button--right" type="submit">Zaloguj się</button>
            </div>
            </form>
             
        </div>
        </>
    )
}