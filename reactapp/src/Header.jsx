
import React from 'react';
import './Header.css';
import logo from './images/MVCN.png';
import Weather from './WeatherForecast';
import Carosel from './CommercialCarousel';
import css from './App.css';

function Header() {

    const topicDisplayNames = {
        Halsa: 'Health',
        idrott: 'Sports',
        ekonomi: 'Economy',
        teknik: 'Technology'

    };
    return (
        <div className="row">

            <div className="col-12">
        <header className="Header">

           
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
        </div> </div>
    );
}

export default Header;