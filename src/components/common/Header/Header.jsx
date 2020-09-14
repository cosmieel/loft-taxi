import React from 'react'
import './Header.scss'
// import logo from '../../../logo.svg';

export const Header = (props) => (
    <header className="header">
        <div className="header__logo">
            LoftTaxi
        </div>
        <nav className="header__nav">
            <ul className="header__links">
                <li className="header__link" onClick={props.setMapLink}>Карта</li>
                <li className="header__link" onClick={props.setProfileLink}>Профиль</li>
                <li className="header__link" onClick={props.setLoginLink}>Логин</li>
            </ul>
        </nav>
    </header>
)