import { useEffect, useState } from 'react';

import Card from '../../Card.jsx';
import BigCard from '../../MainArticleCard.jsx';
import CSS from '../../App.css';
import Carosel from '../../CommercialCarousel.jsx';
import Weather from '../../WeatherForecast.jsx'
import QuoteRandomizer from '../../QuoteRandomizer.jsx';
import logo from '../../images/MVCN.png';
import Logout from '../Logout/logout.jsx';

// In order to use react hooks like the `useCookies` hook, the must use functional components.
// Functional components are the industry standard for the react components at the moment.
// Class components vs Functional components: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/


// In order to use react hooks like the `useCookies` hook, the must use functional components.
// Functional components are the industry standard for the react components at the moment.
// Class components vs Functional components: https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/
const Articles = () => {
    const [articles, setArticles] = useState([])
    const [searchTopic, setSearchTopic] = useState("All")
    const [sorting, setSorting] = useState("newest")
    const [loading, setLoading] = useState(true)
    const topics = ["All", "Ekonomi", "SamhalleKonflikter", "LivsstilFritt", "Idrott", "Halsa", "Politik"

    ]


    useEffect(() => {
        populateArticleData();
    }, [searchTopic, sorting])

    const handleTopicChange = (e) => {
        e.preventDefault()
        setSearchTopic(e.target.value)
    }

    const handleSortingChange = (e) => {
        e.preventDefault()
        setSorting(e.target.value)
    }

    const populateArticleData = async () => {
        setLoading(true)
        const token = localStorage.getItem("token")
        const response = await fetch(`/home?topic=${searchTopic}&sortBy=${sorting}`, { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await response.json();
        setArticles(data)
        setLoading(false)
    }
    const loggedInUsername = localStorage.getItem('loggedInUsername') || '';

    const renderPage = () => {
        return <>
            {renderTopicDropdownMenu()}
            {renderSortingDropdownMenu()}
            {renderArticlesTable()}
        </>

    }

    const renderTopicDropdownMenu = () => {
        return <>
            <label htmlFor="topic">Select a topic:</label>
            <select id="topic" name="topic" value={searchTopic} onChange={handleTopicChange}>
                {
                    topics.sort().map((t, i) => <option value={t} key={i}>{t}</option>)
                }
            </select>
        </>

    }

    const renderSortingDropdownMenu = () => {
        return <>
            <label htmlFor="order">Sort:</label>
            <select id="sorting" name="sorting" value={sorting} onChange={handleSortingChange}>
                <option value="newest" selected>Newest</option>
                <option value="oldest" selected>Oldest</option>
            </select>
        </>
    }

    const renderArticlesTable = () => {
        return (


            <div className="app-container">
                <div className="row">

                    <div className="col-8">

                        <Logout />
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
                    <div className="col-8">
                        <div className="row">

                        
                            {articles.slice(1-5).map((article) => (
                                <Card
                                    key={article.title}
                                    title={article.title}
                                    link={article.link}
                                    published={article.published}
                                    summary={article.summary}
                                    topic={article.topic}
                                    

                                />
                            ))}
                            <Weather /> <Carosel />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            {articles.slice(4).map(article => (
                                <Card
                                    key={article.title}
                                    title={article.title}
                                    link={article.link}
                                    published={article.published}
                                    summary={article.summary}
                                />
                            ))}
                            <QuoteRandomizer />
                            <h1>Logged in as {loggedInUsername} </h1>
                        </div>
                    </div> </div>
            </div>
        );
    }

    return (
        <div>
            
            {loading
                ? <p><em>Loading...</em></p>
                : renderPage()}
        </div >
    );
}

export default Articles;