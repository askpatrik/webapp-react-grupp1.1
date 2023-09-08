
import { useDispatch, useSelector } from 'react-redux';
import { setTopic, setSorting, selectedSorting, selectedTopic } from '../redux/topicSortSlice';
import { selectedUsername } from '../redux/userSlice';
import './select.css';
import Logout from '../../Logout/logout.jsx';



const SelectsComponent = () => {
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const loggedInUsername = useSelector(selectedUsername)
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]

    const handleTopicChange = (selectedTopic) => {
        dispatch(setTopic(selectedTopic));
    };

    //const loggedInUsername = localStorage.getItem('loggedInUsername') || '';
    const isLoggedIn = loggedInUsername !== '';

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div>
            <div>
                <div> <h5>Logged in as {loggedInUsername} </h5>
                    
                    {
                        topics.sort().map((t, i) => (
                            <button
                                key={i}
                                className={`topic-item ${searchTopic === t ? 'selected' : ''}`}
                                onClick={() => handleTopicChange(t)}
                            >
                                {t}
                            </button>

                        ))
                    }
                    <Logout />                  
                </div>                
            </div>

            <label htmlFor="sorting">Sort:</label>
            <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    );
};

export default SelectsComponent;
