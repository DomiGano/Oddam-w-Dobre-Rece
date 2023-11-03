import React from "react";
import { Title } from "./Title";
import { Step } from "./Step";
import icon1 from "../assets/Icon-1.svg"
import icon2 from "../assets/Icon-2.svg"
import icon3 from "../assets/Icon-3.svg"
import icon4 from "../assets/Icon-4.svg"
import { LinkButton } from "./LinkButton";

export const Steps = () => {
    const stepsData = [{
        
        icon: icon1,
        title: "Wybierz rzeczy",
        description: "ubrania, zabawki, sprzęt i inne"
    },
    {
        id: 2,
        icon: icon2,
        title: "Spakuj je",
        description: "skorzystaj z worków na śmieci"
    },
    {
        id: 3,
        icon: icon3,
        title: "Zdecyduj komu chcesz pomóc",
        description: "wybierz zaufane miejsce"
    },
    {
        id: 4,
        icon: icon4,
        title: "Zamów kuriera",
        description: "kurier przyjedzie w dogodnym terminie"
    }
];

return (

    <section className="steps__mainbox" id="steps">
        <Title text={"Wystarczą 4 proste kroki"}/>
            <div className="steps">
            <div className="container">
                <div className="steps__box">
                {stepsData.map((element) => {
                    return (
                        <Step key={element.id} icon={element.icon} title={element.title} description={element.description}/>
                    )
                })}
                </div>
            </div>
        </div>
        <LinkButton text="ODDAJ RZECZY" link="/login"></LinkButton>
    </section>
    )
}