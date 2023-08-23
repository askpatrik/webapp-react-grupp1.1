import React, { Component } from 'react';
import Card from '../../Card.jsx';
import CSS from './App.css';
import Carosel from '../../CommercialCarousel.jsx';
import Weather from '../../WeatherForecast.jsx'
import img from '../../Images/breakingnews.jpg';
import QuoteRandomizer from '../../QuoteRandomizer.jsx';
import Header from '../../Header.jsx'
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { articles: [], loading: true };
    }

    componentDidMount() {
        this.populateArticleData();
    }

    static renderArticlesTable(articles) {
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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderArticlesTable(this.state.articles);

        return (
            <div>
              
                <p></p>
                {contents}
            </div>
        );
    }

    async populateArticleData() {
        const response = await fetch('/home');
        const data = await response.json();
        this.setState({ articles: data, loading: false });
    }
}
