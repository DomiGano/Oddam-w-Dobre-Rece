import React from "react";
import { Title } from "./Title";
import aboutImage from "../assets/People.jpg";
import signature from "../assets/Signature.svg";

export const About = () => {

    return (
        <section className="about" id="about">
                <div className="about__box">
                    <Title text={"O nas"}></Title> 
                    <p className="about__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <img className="signature" src={signature} alt="Podpis"></img>
                </div>
            <img className="about__image" src={aboutImage}></img>
        </section>
    )
}