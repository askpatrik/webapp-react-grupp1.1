import { useDispatch, useSelector } from 'react-redux';
import { setTopic, setSorting, selectedSorting, selectedTopic } from '../redux/topicSortSlice';

const SelectsComponent = () => {
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const dispatch = useDispatch();
    const topics = ["All", "Politik", "Utbildning", "Religion", "Miljo", "Ekonomi", "LivsstilFritt", "SamhalleKonflikter", "Halsa", "Idrott", "VetenskapTeknik"]

    const handleTopicChange = (selectedTopic) => {
        dispatch(setTopic(selectedTopic));
    };

    const handleSortingChange = (e) => {
        const selectedSorting = e.target.value;
        dispatch(setSorting(selectedSorting));
    };

    return (
        <div>
            <div>
                <label htmlFor="topic">Select a topic:</label>
                <div>
                    {
                        topics.sort().map((t, i) => (
                            <button
                                key={i}
                                className={searchTopic === t ? 'selected' : ''}
                                onClick={() => handleTopicChange(t)}
                            >
                                {t}
                            </button>
                        ))
                    }
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
