import React, { Component } from 'react';
import Card from './Card.jsx';
import CSS from './App.css';

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

          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
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
                        </div>
                    </div>
                    <div className="col-md-4">
                        {articles.map(article => (
                            <Card
                                key={article.title}
                                title={article.title}
                                link={article.link}
                                published={article.published}
                                summary={article.summary}
                            />
                        ))}
                    </div>
                </div>
            </div>

            
                
           

 
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderArticlesTable(this.state.articles);

        return (
            <div>
                <h1 id="tabelLabel">Article List</h1>
                <p>This component demonstrates fetching data from the server.</p>
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
