import React from 'react';
import CSS from './App.css';

function Card({ title, summary, published, link, topic }) {
    const formattedPublished = published.replace('T', ' ');

    return (
        <div className="col-md-4">
            <a href={link} className="card-link">
                <div className="card mb-4 border-0">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{summary}</p>
                        <p className="card-title">Fetched: {formattedPublished}</p>
         
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
