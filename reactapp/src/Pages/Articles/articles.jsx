import { useEffect, useState } from 'react';
import SelectsComponent from './components/select';
import { selectedSorting, selectedTopic } from './redux/topicSortSlice';
import { useSelector } from 'react-redux';
import Card from '../../Card.jsx';
import BigCard from '../../MainArticleCard.jsx';
import CSS from '../../App.css';
import CSS2 from '../../index.css';
import Carosel from '../../CommercialCarousel.jsx';
import Weather from '../../WeatherForecast.jsx'
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
    const loggedInUsername = localStorage.getItem('loggedInUsername') || '';

  

    const renderArticlesTable = () => {
        return (
           
            <div className="app-container">
                <div className="row">
                    <div className="col-8">                  
                        <BigCard
                            key={articles[0].title} // Assuming you want to display the first article
                            title={articles[0].title}
                            link={articles[0].link}
                            published={articles[0].published}
                            summary={articles[0].summary}
                        />
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
                            {visibleArticles < articles.length && (
                                <button onClick={loadMoreArticles}>Load More</button>
                            )}
                       
                        );
                       
                            <QuoteRandomizer />
                        
                         
                        </div>
                    </div> </div>
            </div>
        );
    }

    return (
        <div>
          
            {loading
                ? <p><em>Loading...</em></p>
                : renderArticlesTable()}
        </div >
    );
}

export default Articles;