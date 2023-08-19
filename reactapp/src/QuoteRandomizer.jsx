import React, { useState } from 'react';

const QuoteRandomizer = () => {

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ];

    const [randomQuote, setRandomQuote] = useState('');

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        setRandomQuote(selectedQuote);
    };

    return (
        <div>
            <button onClick={generateRandomQuote}>Generate Random Quote</button>
            <p id="quote">{randomQuote}</p>
        </div>
    );
};

export default QuoteRandomizer;
