import React from 'react';
import './Header.css';
import logo from './images/MVCN.png';



function Header() {

    const topicDisplayNames = {
        Halsa: 'Health',
        idrott: 'Sports',
        ekonomi: 'Economy',
        teknik: 'Technology'

    };
    return (
        <header className="Header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
                </div>
            <nav className="nav-links">
                <ul className="nav-list">
                    {Object.keys(topicDisplayNames).map(topic => (
                        <li key={topic} className="nav-item">
                            <a className="nav-link" href={`#${topic}`}>
                                {topicDisplayNames[topic]}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;