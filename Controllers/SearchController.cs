using Microsoft.AspNetCore.Mvc;
using TwitterApp.Models;
using TwitterApp.Services;

namespace TwitterApp.Controllers
{
    [ApiController]

    public class SearchController : ControllerBase
    {
        public SearchController(TwitterService twitterService)
        {
            this.TwitterService = twitterService;
        }
        private TwitterService TwitterService { get;  }

        [Route("api/[controller]")]
        [HttpGet]
        public TwitterResponse Get(string query)
        {
            return TwitterService.Search(query);
        }
    }
}