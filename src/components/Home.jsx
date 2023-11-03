import React from "react";
import { Navigation } from "./Navigation";
import homeBackground from "../assets/Home-Hero-Image.jpg"
import { Title } from "./Title";
import { Statistics } from "./Statistics";
import { Steps } from "./Steps";
import { About } from "./About";
import { Fundations } from "./Fundations";
import { LinkButton } from "./LinkButton";

export const Home = () => {
    

    return (
        <>
        <section className="home" style={{backgroundImage: `url(${homeBackground})`}}>
            <div className="container">
                <Navigation/>
                <div className="home__content">
                    <Title text={"Zacznij pomagać!"} text2={"Oddaj niechciane rzeczy w zaufane ręce"}/>
                    <LinkButton text="ODDAJ RZECZY" link="/login"></LinkButton>
                    <LinkButton text="ZORGANIZUJ ZBIÓRKĘ" link="/login"></LinkButton>
                </div>
            </div>
        </section>
        <Statistics/>
        <Steps/>
        <About/>
        <Fundations />
        </>
    )
}