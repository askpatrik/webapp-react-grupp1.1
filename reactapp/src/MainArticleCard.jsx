import React from 'react';
import CSS from './App.css';

function Card({ title, summary, published, topic, link }) {
    return (
        <a href={link} className="big-card-link">
            <div className="big-card-container">
                <div className="big-card">
                    <div className="card-body">
                        <p className="big-card-title">{title}</p>
                        <p className="big-card-text">{summary}</p>
                        <p className="card-text">{topic}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default Card;
