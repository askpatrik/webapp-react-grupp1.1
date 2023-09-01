using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using webapi.Models;
using System.Diagnostics;
using MySql.Data.MySqlClient;

namespace webapi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private IList<Article> _articles;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Index(string topic = "All", string sortBy = "newest")
        {
            // Get all articles from the database
            List<Article> articles = GetArticlesFromDatabase();
            


            // Get all the unique topics from the articles, trimming any whitespace and filtering out empty strings
            // List<string> allTopics = articles.SelectMany(article => article.Topic.Split(',').Select(t => t.Trim())).Where(t => !string.IsNullOrWhiteSpace(t)).Distinct().ToList();



            if (!string.IsNullOrEmpty(topic) && topic != "All")
            {

                articles = articles.Where(a => a.Topic.Contains(topic)).ToList();
            }
        

            switch (sortBy)
            {
                case "newest":
                    articles = articles.OrderByDescending(a => a.Published).ToList();
                    break;
                case "oldest":
                    articles = articles.OrderBy(a => a.Published).ToList();
                    break;
            }

            // Extract the first word from each topic
            foreach (var article in articles)
            {
                
                for (int i = 0; i < article.Topic.Count; i++)
                {
                    string[] topicWords = article.Topic[i].Split(' ');
                    article.Topic[i] = topicWords[0]; // Get the first word
                }
            }

            return Ok(articles); // Changed from View()
        }

        private List<Article> GetArticlesFromDatabase(bool ascending = true)
        {
            // Connection string for MySQL database
            string connStr = "server=localhost;user=root;database=newsextractdb;port=3306;password=mrlucky21";

            // SQL query to retrieve data from database
            string sql = "SELECT title, summary, link, published, topic FROM news";

            // Create a list to hold Article objects
            List<Article> articles = new List<Article>();

            using (MySqlConnection conn = new MySqlConnection(connStr))
            {
                using (MySqlCommand cmd = new MySqlCommand(sql, conn))
                {
                    conn.Open();
                    using (MySqlDataReader reader = cmd.ExecuteReader())
                    {
                        // Loop through each row in the result set and create an Article object from the data
                        while (reader.Read())
                        {
                            Article article = new Article();
                            article.Title = reader.GetString("title");
                            article.Summary = reader.GetString("summary");
                            article.Link = reader.GetString("link");
                            article.Published = reader.GetDateTime("published");
                            article.Topic = new List<string>(reader.GetString("topic").Split(','));
                            articles.Add(article);
                        }
                    }
                }
            }

            return articles;
        }

        [HttpGet("Privacy")]
        public IActionResult Privacy()
        {
            return Ok(); // Changed from View()
        }

        [HttpGet("Error")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return Ok(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier }); // Changed from View()
        }
    }
}