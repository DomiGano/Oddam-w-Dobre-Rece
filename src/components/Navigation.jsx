import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
    
    return (
        <>
        <nav className="navigation">
            <div className="navigation__loginbar">
                <Link className="navigation__loginbar__link navigation__loginbar__link--login" to='/login'>Zaloguj</Link>
                <Link className="navigation__loginbar__link navigation__loginbar__link--registration" to='/registration'>Załóż konto</Link>
            </div>
            <ul className="navigation__mainbar">
                <li className="navigation__mainbar__link navigation__mainbar__link--active"><a href="#">Start</a></li>
                <li className="navigation__mainbar__link"><a href="#">O nas</a></li>
                <li className="navigation__mainbar__link"><a href="#">O co chodzi?</a></li>
                <li className="navigation__mainbar__link"><a href="#">Fundacja i organizacje</a></li>
                <li className="navigation__mainbar__link"><a href="#">Kontakt</a></li>
            </ul>
        </nav>
        </>
    )
}