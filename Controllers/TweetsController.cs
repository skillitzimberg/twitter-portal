using Microsoft.AspNetCore.Mvc;
using TwitterApp.Models;
using TwitterApp.Services;

namespace TwitterApp.Controllers
{
    [ApiController]

    public class TweetsController : ControllerBase
    {
        public TweetsController(JsonTweetsService tweetsService)
        {
            this.TweetsService = tweetsService;
        }
        public JsonTweetsService TweetsService { get;  }

        [Route("[controller]")]
        [HttpGet]
        public TwitterUser Get()
        {
            return TweetsService.GetUser();
        }

        [Route("[controller]/{id}")]
        [HttpGet]
        public Tweet Get(string id)
        {
            return TweetsService.GetTweet(id);
        }

    }
}