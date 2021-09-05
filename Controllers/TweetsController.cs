using Microsoft.AspNetCore.Mvc;
using TwitterApp.Models;
using TwitterApp.Services;

namespace TwitterApp.Controllers
{
    [ApiController]

    public class TweetsController : ControllerBase
    {
        public TweetsController(TwitterService twitterService)
        {
            this.TwitterService = twitterService;
        }
        public TwitterService TwitterService { get;  }

        [Route("api/[controller]")]
        [HttpGet]
        public TwitterUser Get()
        {
            return TwitterService.GetUser();
        }

        [Route("api/[controller]/{id}")]
        [HttpGet]
        public Tweet Get(string id)
        {
            return TwitterService.GetTweet(id);
        }

    }
}