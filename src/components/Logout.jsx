import React from "react";
import { Navigation } from "./Navigation";
import { Title } from "./Title";
import { Link } from "react-router-dom";

export const Logout = () => {

    return (
        <>
        <div className="container">
            <Navigation/>
            <div className="info__box">
            <Title text="Wylogowanie nastpąpiło pomyślnie!"/>
           
            <Link to="/"><button className="basic__button button">Strona Gówna</button></Link>             
            </div>
        </div>
        </>
    )
}