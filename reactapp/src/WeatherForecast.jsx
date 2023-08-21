
import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.63368222299967&lon=13.703442016986308&appid=6c44438604ee32619ee944688c3e2778')

  
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    if (!weatherData) return <div>Loading Weather...</div>;

    return (
        <div>
            <h1>Weather in {weatherData.name}</h1>
            <h2>{Math.round(weatherData.main.temp - 273.15)} degrees celcius</h2>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            <p>{weatherData.weather[0].description}</p>
        </div>
    );
};

export default Weather;
