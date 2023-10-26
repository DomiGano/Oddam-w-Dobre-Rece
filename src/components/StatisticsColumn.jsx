import React from "react"


export const StatisticsColumn = ({number, title, description}) => {

    return (
    <article className="statistics__box">
        <h3 className="statistics__box__number">{number}</h3>
        <h4 className="statistics__box__title">{title}</h4>
        <p className="statistics__box__description">{description}</p>
    </article>
    )
}


