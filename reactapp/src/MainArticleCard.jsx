import React from 'react';
import CSS from './App.css';

function Card({ title, summary, published, topic, link }) {
    return (
     
           
        <div className="big-card-container">
           
            <div className="big-card">
                <div className="card-body">
                    <p className="big-card-title">{title}</p>
                    <p className="big-card-text">{summary}</p>
                  
                    <p className="card-text">{topic}</p>
                    <a href={link}><p className="card-text">Link to article</p></a>
                </div>
            </div>
        </div>
          
      
    );
}

export default Card;