using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TwitterApp.Models;
using TwitterApp.Services;

namespace TwitterApp.Controllers
{
    public class TweetsController
    {
        public TweetsController(TwitterService twitterService)
        {
            this.TwitterService = twitterService;
        }
        private TwitterService TwitterService { get; set; }

        [Route("api/[controller]/{id}")]
        [HttpGet]
        public IEnumerable<Tweet> Get(string id)
        {
            return TwitterService.GetTweets(id);
        }
        
    }
}
