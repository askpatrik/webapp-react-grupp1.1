import React from 'react';
import './Footer.css';
import Bild from './Images/MVC.jpg';
import QuoteRandomizer from './QuoteRandomizer';
import Ads from './CommercialCarousel';
import Weather from './WeatherForecast';



function Footer() {
    return (
        <footer className="footer">
            <QuoteRandomizer />
            <div className="footer-content">
                <img src={Bild} alt="MVC Logo" className="footer-logo" />
                <p>© 2023 Your Website. All rights reserved. Made by Patrik and Elia</p>
            </div>
           
        </footer>
    );
}


export default Footer;