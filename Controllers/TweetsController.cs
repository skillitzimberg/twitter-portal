using System.Collections.Generic;
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
        public IEnumerable<TwitterUser> Get()
        {
            return TwitterService.GetAll();
        }

        [Route("api/[controller]/{id}")]
        [HttpGet]
        public Tweet Get(string id)
        {
            return TwitterService.GetTweet(id);
        }

    }
}