using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TwitterApp.Services;
using TwitterApp.Models;
// Add controller namespace

/* Create controller class with:
    - constructor
    - TwitterService
    - Route
    - HTTP Verb
    - Request method returning appropriate service
*/

namespace TwitterApp.Controllers
{
    public class FavoritesController
    {
        public FavoritesController(TwitterService twitterService)
        {
            this.TwitterService = twitterService;
        }

        private TwitterService TwitterService { get; set; }

        [Route("api/[controller]")]
        [HttpGet]
        public IEnumerable<TwitterUser> Get()
        {
            return TwitterService.GetFavoriteTwitterUsers();
        }
    }
}
