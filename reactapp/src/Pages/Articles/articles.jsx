import { useEffect, useState } from 'react';
import SelectsComponent from './components/select';
import { selectedSorting, selectedTopic } from './redux/topicSortSlice';
import { useSelector } from 'react-redux';
import Card from '../../Card.jsx';
import BigCard from '../../MainArticleCard.jsx';
import CSS from '../../App.css';
import CSS2 from '../../index.css';
import Carosel from '../../CommercialCarousel.jsx';
import Header from '../../Header.jsx'
import QuoteRandomizer from '../../QuoteRandomizer.jsx';
import logo from '../../images/MVCN.png';

const Articles = () => {
    const [articles, setArticles] = useState([])
    const searchTopic = useSelector(selectedTopic);
    const sorting = useSelector(selectedSorting);
    const [loading, setLoading] = useState(true)
    const [visibleArticles, setVisibleArticles] = useState(6);



    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting])


    const removeArticles = () => {
        setVisibleArticles(prevVisibleArticles =>
            prevVisibleArticles - 10 >= 0 ? prevVisibleArticles - 10 : 0
        );
    };

    const loadMoreArticles = () => {
        setVisibleArticles(prevVisibleArticles => prevVisibleArticles + 6);
    };

    const populateArticleData = async () => {
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }
  

    const renderArticlesTable = () => {
        return (
           <>
            <Header /> {/* Your header component */}
                <div className="app-container mt-4">
            
                    <div className="row">
                        <div className="col-8">
                            {articles.length > 0 ?
                                <BigCard
                                    key={articles[0].title}
                                    title={articles[0].title}
                                    link={articles[0].link}
                                    published={articles[0].published}
                                    summary={articles[0].summary}
                                    label="Senaste Nytt" // Add the label prop here
                                /> : <></>}
                        </div>

                    <div className="col-4">
                        <div className="card-container">
                                <img className="resize" src={logo} alt="Logo" />
                         
                        </div>
                    </div>
                </div>
                 

                <div className="row">
                    <div className="col-12">
                        <div className="row">


                            {articles.slice(1, visibleArticles+1).map((article, index) => (
                                <Card
                                    key={index}
                                    title={article.title}
                                    link={article.link}
                                    published={article.published}
                                    summary={article.summary}
                                    topic={article.topic}
                                />
                            ))}
                         
                       
                        
                       
                          
                        
                         
                        </div>
                    </div> </div>
                </div>
            </>
        );
    }

    return (
        <div>
            {loading ? (
                <p><em>Loading...</em></p>
            ) : (
                <>
                    {renderArticlesTable()}
                    <div className="row">
                        <div className="centered-buttons mb-4">
                            <div className="col">
                                {visibleArticles < articles.length && (
                                    <button type="button" onClick={loadMoreArticles} className="logout-button" style={{ marginRight: '10px' }}> Show more articles </button>
                                )}
                                {visibleArticles >= 10 && (
                                    <button type="button" onClick={removeArticles} className="logout-button" style={{ marginRight: '10px' }}> Show fewer articles </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );

}

export default Articles;