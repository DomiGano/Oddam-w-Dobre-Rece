import React from "react";
import decoration from "../assets/Decoration.svg"

export const Title = (props) => {

    return (
        <div className="basic__title">
            <h2 className="basic__title__text">{props.text}</h2>
            <h2 className="basic__title__text">{props.text2}</h2>
            <img className="basic__title__decoration" src={decoration} alt="decoration"/>
        </div>
    )
}