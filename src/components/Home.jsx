import React from "react";
import { Navigation } from "./Navigation";
import homeBackground from "../assets/Home-Hero-Image.jpg"

export const Home = () => {
    

    return (
        <section className="home" style={{backgroundImage:  `url(${homeBackground})`}}>
            <div className="container">
                <Navigation/>
            </div>
        </section>
    )
}