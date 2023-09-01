import React from 'react';
import CSS from './App.css';

function Card({ title, summary, published, link}) {
    return (
        <div className="col-md-4">
       
            <div className="card mb-4 border-0">
          
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{summary}</p>
                    <p className="card-title">{published}</p>
                   
                    
                    <a href={link}><p className="card-text">Link to article</p> </a>
                   
                </div>
            </div>
        </div>
    );
}

export default Card;