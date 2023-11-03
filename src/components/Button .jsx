import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
    const words = props.text.split(' ');

    return (
            <button className="basic__button">
                {words.map((word, index) => (
                    <span key={index}>
                        {word}
                        {index < words.length - 1 && <br />}
                    </span>
                ))}
            </button>
    )
}