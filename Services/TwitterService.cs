using System;
using System.IO;
using System.Net;
using System.Text.Json;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using TwitterApp.Models;

namespace TwitterApp.Services
{
    public class TwitterService
    {
        public IWebHostEnvironment WebHostEnvironment { get; }
        public TwitterService(IWebHostEnvironment webHostEnvironment)
        {
            this.WebHostEnvironment = webHostEnvironment;
        }

        private string UsersJson
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "data", "users.json"); }
        }

        private string TweetsJson
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "data", "tweetsByUser.json"); }
        }

        private string UsersWithTweetsJson
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "data", "usersWithTweets.json"); }
        }

        private string APIKeys
        {
            get { return Path.Combine(WebHostEnvironment.ContentRootPath, "apiKey.json"); }
        }

        public IEnumerable<Tweet> GetTweets(string id)
        {
            // Create a request
            WebRequest request = WebRequest.Create($"https://api.twitter.com/2/users/{id}/tweets?tweet.fields=created_at,public_metrics");
            // Set Headers for Bearer Token
            request.Headers.Add("Authorization", "Bearer " + "AAAAAAAAAAAAAAAAAAAAAMtHTQEAAAAAf19DJ0ubbwQvJ9AMTtr1E0e0yvY%3DqATB5G0u7pjSLSQtt5iITPlaMp4EZdZcO6BO27eqtvJBAexPby");
            // Get the response
            WebResponse response = request.GetResponse();
            // Get the stream containing content returned by the server.
            // Use a using block to ensure the stream is automatically closed.
            using(Stream dataStream = response.GetResponseStream())
            {
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);
                // Read the content.
                string responseFromServer = reader.ReadToEnd();
                // Display the content.
                Console.WriteLine(responseFromServer);

                return JsonSerializer.Deserialize<TweetListWrapper>(responseFromServer,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }).Tweets;
            }

        }

        public TwitterUser GetUserByUsername(string username)
        {
            // Create a request for the URL.
            WebRequest request = WebRequest.Create(
              $"https://api.twitter.com/2/users/by/username/{username}?user.fields=profile_image_url,url,description");
            
            // Set Authorization Header for Bearer.
            request.Headers.Add("Authorization", "Bearer " + "AAAAAAAAAAAAAAAAAAAAAMtHTQEAAAAAf19DJ0ubbwQvJ9AMTtr1E0e0yvY%3DqATB5G0u7pjSLSQtt5iITPlaMp4EZdZcO6BO27eqtvJBAexPby");

            // Get the response.
            WebResponse response = request.GetResponse();
            // Display the status.
            Console.WriteLine(((HttpWebResponse)response).StatusDescription);

            // Get the stream containing content returned by the server.
            // The using block ensures the stream is automatically closed.
            using (Stream dataStream = response.GetResponseStream())
            {
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);
                // Read the content.
                string responseFromServer = reader.ReadToEnd();
                // Display the content.
                Console.WriteLine(responseFromServer);
                TwitterUser user = JsonSerializer.Deserialize<UserWrapper>(responseFromServer,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }).User;

                user.Tweets = this.GetTweets(user.Id);
                return user;
            }
        }

        public TwitterUser Search(string query)
        {
            var user = this.GetUserByUsername(query);
            return user;
        }
    }
}