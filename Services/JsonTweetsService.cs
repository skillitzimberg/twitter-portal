using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using TwitterApp.Models;

namespace TwitterApp.Services
{
    public class JsonTweetsService
    {
        public IWebHostEnvironment WebHostEnvironment { get; }
        public JsonTweetsService(IWebHostEnvironment webHostEnvironment)
        {
            this.WebHostEnvironment = webHostEnvironment;
        }

        private string UserJson
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "data", "user.json"); }
        }

        private string TweetsJson
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "data", "tweetsByUser.json"); }
        }

        public IEnumerable<Tweet> GetTweets()
        {
            using(var jsonFileReader = File.OpenText(TweetsJson))
            {
                return JsonSerializer.Deserialize<Tweet[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }

        public Tweet GetTweet(string id)
        {
            using(var jsonFileReader = File.OpenText(TweetsJson))
            {
                var tweets = JsonSerializer.Deserialize<Tweet[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                foreach (var tweet in tweets)
                {
                    if (tweet.Id == id)
                    {
                        return tweet;
                    }
                }
            }
            return new Tweet(id, $"Tweet with ID {id} not found.");
        }

        public TwitterUser GetUser()
        {
            using(var jsonFileReader = File.OpenText(UserJson))
            {
                var user = JsonSerializer.Deserialize<TwitterUser>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                user.Tweets = this.GetTweets();
                return user;
            }
        }
    }
}