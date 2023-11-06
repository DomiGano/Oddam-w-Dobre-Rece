import React from "react";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { Link } from "react-router-dom";

export const Registration = () => {

        const [password, setPassword] = useState("");
        const [repeatPassword, setRepeatPassword] = useState("");
        const [email, setEmail] = useState("");

        const [emailErr, setEmailErr] = useState(false);
        const [passwordErr, setPasswordErr] = useState(false);
        const [repeatPasswordErr, setRepeatPasswordErr] = useState(false);
        const [accountCreate, setAccountCreate] = useState(false);


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

            const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };

            if (validateEmail(email) && password.length >= 6 && (repeatPassword === password && repeatPassword.length >= 6)) { 
                setEmailErr(false)
                setPasswordErr(false)
                setRepeatPasswordErr(false)

                setUsers((prevUsers) => [
                    ...prevUsers,
                    {
                      email: email,
                      password: password,
                    }
                  ]);

                setEmail('')
                setPassword('')
                setRepeatPassword('')
                setAccountCreate(true)

            } if (!(validateEmail(email))) {
                setEmailErr(true)
                setAccountCreate(false)
            } if (password.length < 6) {
                setPasswordErr(true)
                setAccountCreate(false)
            } if (password !== repeatPassword || repeatPassword < 6) {
                setRepeatPasswordErr(true)
                setAccountCreate(false)
            } if (validateEmail(email)) {
                setEmailErr(false)
                setAccountCreate(false)
            } if (password.length >= 6) {
                setPasswordErr(false)
                setAccountCreate(false)
            } if (password === repeatPassword) {
                setRepeatPasswordErr(false)
                setAccountCreate(false)
            } if (repeatPassword < 6) {
                setRepeatPasswordErr(true)
                setAccountCreate(false)
            }
        };
    
        return (
            <>
            <div className="container">
                <Navigation/>
                <form className="login__box" onSubmit={formSubmit}>
                <Title text="Załóż konto"/>
                {accountCreate ? <h3 style={{color: "green", marginTop: "1em" }}>Konto zostało pomyślnie utworzone!</h3> : null}
                <div className="input__box input__box--register">
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
                    {passwordErr ? <p className="error">Hasło jest za krótkie!</p> : null}

                        <label className="login__label">Powtórz hasło
    
                        </label>
                        <input
                            className="login__input input"
                            type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            style={repeatPasswordErr ? {borderBottom: "1px solid red" } : null}
                        />
                    {repeatPasswordErr ? <p className="error">{repeatPassword.length >= 6 ? "Hasła muszą być takie same!" : "Hasło jest za krótkie!"}</p> : null}
                </div>
                <div className="buttons__box">
                <Link to="/login"><button className="basic__button button button--left">Zaloguj się</button></Link>
                <button className="basic__button button button--right">Zarejestruj się</button>
                </div>
                </form>
                 
            </div>
            </>
        )
    }