import { useEffect, useState } from 'react';

import Card from '../../Card.jsx';
import CSS from './App.css';
import Carosel from '../../CommercialCarousel.jsx';
import Weather from '../../WeatherForecast.jsx'
import img from '../../Images/breakingnews.jpg';
import QuoteRandomizer from '../../QuoteRandomizer.jsx';
import Header from '../../Header.jsx'

// In order to use react hooks like the `useCookies` hook, the must use functional components.
// Functional components are the industry standard for the react components at the moment.
// Class components vs Functional components: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/
const Articles = () => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        populateArticleData();
    }, [])

    const populateArticleData = async () => {
        const token = localStorage.getItem("token")
        const response = await fetch('/home', { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }

    const renderArticlesTable = (articles) => {
        return (
            <div className="app-container">
                <div className="row">
                    <Header />
                    <div className="col-8">
                        <div className="card-container">
                            <h1>SENASTE NYTT</h1>
                            <Card
                                key={articles[0].title} // Assuming you want to display the first article
                                title={articles[0].title}
                                link={articles[0].link}
                                published={articles[0].published}
                                summary={articles[0].summary}

                            />

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-container">
                            <h1>(weather api)</h1>
                            <Weather />
                        </div>

                    </div>
                </div>






                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            {articles.map(article => (
                                <Card
                                    key={article.title}
                                    title={article.title}
                                    link={article.link}
                                    published={article.published}
                                    summary={article.summary}
                                />
                            ))}
                            <Carosel />
                        </div>



                    </div>
                    <div className="col-4">
                        <div className="row">
                            {articles.map(article => (
                                <Card
                                    key={article.title}
                                    title={article.title}
                                    link={article.link}
                                    published={article.published}
                                    summary={article.summary}
                                />
                            ))}
                            <QuoteRandomizer />

                        </div>
                    </div> </div>

            </div>
        );
    }

    return (
        <div>
            <h1 id="tabelLabel">Article List</h1>
            {loading
                ? <p><em>Loading...</em></p>
                : renderArticlesTable(articles)}
        </div >
    );
}

export default Articles;