import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [expandedTopic, setExpandedTopic] = useState(null);

    const topics = [
        { id: 'dagens', name: 'Dagens', content: 'Inneh\u00E5ll f\u00F6r Dagens \u00E4mne...' },
        { id: 'h\u00E4lsa', name: 'H\u00E4lsa', content: 'Inneh\u00E5ll f\u00F6r H\u00E4lsa \u00E4mne...' },
        { id: 'sport', name: 'Sport', content: 'Inneh\u00E5ll f\u00F6r Sport \u00E4mne...' },
        { id: 'teknologi', name: 'Teknologi', content: 'Inneh\u00E5ll f\u00F6r Teknologi \u00E4mne...' },
        { id: 'musik', name: 'Musik', content: 'Inneh\u00E5ll f\u00F6r Musik \u00E4mne...' },
    ];


    const handleTopicClick = (topicId) => {
        setExpandedTopic((prevExpanded) => (prevExpanded === topicId ? null : topicId));
    };

    return (
        <header className="header">
            <ul className="topic-list">
                {topics.map((topic) => (
                    <li
                        key={topic.id}
                        className={`topic-item ${expandedTopic === topic.id ? 'expanded' : ''}`}
                    >
                        <div className="topic-header" onClick={() => handleTopicClick(topic.id)}>
                            {topic.name}
                            <span className={`arrow ${expandedTopic === topic.id ? 'up' : 'down'}`}>&#9660;</span>
                        </div>
                        <div className={`topic-content ${expandedTopic === topic.id ? 'show' : ''}`}>
                            {topic.content}
                        </div>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;
