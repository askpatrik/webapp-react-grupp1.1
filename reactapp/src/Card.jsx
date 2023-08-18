import React from 'react';

function Card({ title, summary, published, topic }) {
    return (
        <div className="col-md-6">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{summary}</p>
                    <p className="card-title">{published}</p>
                    <p className="card-text">{topic}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;