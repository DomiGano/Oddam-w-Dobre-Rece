import React from "react";
import { Navigation } from "./Navigation";
import homeBackground from "../assets/Home-Hero-Image.jpg"
import { Title } from "./Title";

export const Home = () => {
    

    return (
        <section className="home" style={{backgroundImage: `url(${homeBackground})`}}>
            <div className="container">
                <Navigation/>
                <div className="home__content">
                    <Title text="Zacznij pomagać!" text2="Oddaj niechciane rzeczy w zaufane ręce"/>
                </div>
            </div>
        </section>
    )
}