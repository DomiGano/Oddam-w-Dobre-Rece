import React from "react";
import background from "../assets/3ColumnsBackground.png"
import { StatisticsColumn } from "./StatisticsColumn";

export const Statistics = () => {

    return (
        <section className="statistics" style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <StatisticsColumn number={10} title={"Oddanych Worków"} description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
                <StatisticsColumn number={5} title={"Wspartych organizacji"} description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
                <StatisticsColumn number={7} title={"Zorganizowanych zbiórek"} description={"Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."}/>
            </div>
        </section>
    )
}