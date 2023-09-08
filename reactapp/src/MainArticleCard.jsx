
import React from 'react';
import CSS from './App.css';

function BigCard({ title, summary, published, link, label }) {
    return (
        <a href={link} className="big-card-link">
            <div className="big-card-container">
                <div className="big-card">
                    <div className="card-body">
                        <p className="big-card-label">{label}</p> {/* Add label here */}
                        <p className="big-card-title">{title}</p>
                        <p className="big-card-text">{summary}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default BigCard;