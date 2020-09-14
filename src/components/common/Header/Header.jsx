import React from 'react'
import './Header.scss'

export const Header = ({ setMapLink, setProfileLink, setLoginLink }) => (
    <header className="header">
        <div className="header__logo">
            LoftTaxi
        </div>
        <nav className="header__nav">
            <ul className="header__links">
                <li className="header__link" onClick={setMapLink}>Карта</li>
                <li className="header__link" onClick={setProfileLink}>Профиль</li>
                <li className="header__link" onClick={setLoginLink}>Логин</li>
            </ul>
        </nav>
    </header>
)