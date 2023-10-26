import React from "react";

export const Step = ({icon, title, description}) => {

    return (
        <div className="step__box">
            <img className="step__icon" src={icon}></img>
            <h3 className="step__title">{title}</h3>
            <p className="step__description">{description}</p>
        </div>
    )
}