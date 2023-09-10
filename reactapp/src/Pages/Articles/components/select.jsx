import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopic, setSorting, selectedSorting, selectedTopic } from '../redux/topicSortSlice';
import { selectedUsername } from '../redux/userSlice';
import './select.css';
import Logout from '../../Logout/logout.jsx';



const SelectsComponent = () => {
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const loggedInUsername = useSelector(selectedUsername);
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"];

    // State for "More" dropdown
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [flexDirection, setFlexDirection] = useState('row'); // Default is row

    const handleTopicChange = (selectedTopic) => {
        dispatch(setTopic(selectedTopic));
    };

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    const toggleMoreDropdown = () => {
        setIsMoreDropdownOpen(!isMoreDropdownOpen);

        // Change the flex direction when More button is clicked
        setFlexDirection(isMoreDropdownOpen ? 'row' : 'column');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
         
        <div>

            <sort />
        <div className="header">
            <div className="topics-container">
                    <label htmlFor="sorting">Sort:</label>
                    <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select> {topics.slice(0, isMoreDropdownOpen ? topics.length : 5).map((t, i) => (
                    <button
                        key={i}
                        className={`topic-item ${searchTopic === t ? 'selected' : ''}`}
                        onClick={() => handleTopicChange(t)}
                    >
                        {t}
                    </button>
                ))}
                {topics.length > 5 && (
                    <button className="topic-item more-button" onClick={toggleMoreDropdown}>
                        {isMoreDropdownOpen ? "Less" : "More"}
                    </button>
                )}
            </div>
                    <div className="dropdown-wrapper" onClick={toggleDropdown}>
                    <button className="logged-in-button" >Logged in as {loggedInUsername}</button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Logout />
                        </div>
                   )}
                </div>
                
            </div>

        </div>

);

};

export default SelectsComponent;
