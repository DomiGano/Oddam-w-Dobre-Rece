import React, { useState } from "react";
import { Title } from "./Title";
import instagram from "../assets/Instagram.svg"
import facebook from "../assets/Facebook.svg"
import backgroundForm from "../assets/Background-Contact-Form.jpg"

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("Wysłane");

    };

    return (
        <section className="contact" style={{backgroundImage: `url(${backgroundForm})`}}>
            <div className="image__filter"></div>
            <div className="container">
            <form className="contact__form" onSubmit={formSubmit}>
            <Title  className="contact__title" text={"Skontaktuj się z nami"} />
            <div className="labels">
                <label className="contact__form__label">Wpisz swoje imię
                <input
                    className="contact__form__input input"
                    type="text"
                    placeholder="Krzysztof"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
                
                
                <label className="contact__form__label">Wpisz swój email
                <input
                    className="contact__form__input input"
                    type="text"
                    placeholder="abc@xyz.pl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </label>
                </div>
           
                <label className="contact__form__label__textarea">Wpisz swoją wiadomość</label>
                <textarea
                    className="contact__form__textarea input"
                    type="text-area"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                
                <button className="basic__button form__button" type="submit">Wyślij</button>
            </form>
            </div>
            <footer className="footer">
                <div className="container">
                <div className="copyright">
                    <h3>Copyright by Coders Lab</h3>
                </div>
                <div className="social">
                    <a className="social__link" href="https://www.facebook.com/"><img className="social__icon" src={facebook}/> </a>
                    <a className="social__link" href="https://www.instagram.com/"><img className="social__icon" src={instagram}/> </a>
                </div>
                </div>
                
            </footer>
          
        </section>
    );
};
