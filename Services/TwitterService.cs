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

        public TwitterUser Search(string query)
        {
            var user = this.GetUserByUsername(query);
            return user;
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

            // Get the stream containing content returned by the server.
            // The using block ensures the stream is automatically closed.
            using (Stream dataStream = response.GetResponseStream())
            {
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);

                // Read the content.
                string responseFromServer = reader.ReadToEnd();

                TwitterUser user = JsonSerializer.Deserialize<UserWrapper>(responseFromServer,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }).User;

                user.Tweets = this.GetTweets(user.Id);
                return user;
            }
        }
        public IEnumerable<Tweet> GetTweets(string id)
        {
            // Create a request
            WebRequest request = WebRequest.Create($"https://api.twitter.com/2/users/{id}/tweets?tweet.fields=created_at,public_metrics&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text");
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

                var tweetListWrapper = JsonSerializer.Deserialize<TweetListWrapper>(responseFromServer,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                foreach (var tweet in tweetListWrapper.Tweets)
                {
                    if(tweet.Attachments != null)
                    {
                        foreach (var mediaKey in tweet.Attachments.MediaKeys)
                        {
                            foreach(var media in tweetListWrapper.Includes.Media)
                            {
                                if (media != null)
                                {
                                    if (media.MediaKey == mediaKey)
                                    {
                                        System.Console.WriteLine("media.Url");
                                        // tweet.Attachments.Media.Add(new Media(media));
                                    }
                                }
                            }
                        }
                    }
                }
                return tweetListWrapper.Tweets;
            }
        }

        public IEnumerable<TwitterUser> GetFavoriteTwitterUsers()
        {
            // Create a request
            WebRequest request = WebRequest.Create("https://api.twitter.com/2/users?ids=38496375,427089628,4416456732,861320851,9011502&user.fields=profile_image_url,description");
            
            // Add Header with Bearer token to the request
            request.Headers.Add("Authorization", "Bearer " + "AAAAAAAAAAAAAAAAAAAAAMtHTQEAAAAAf19DJ0ubbwQvJ9AMTtr1E0e0yvY%3DqATB5G0u7pjSLSQtt5iITPlaMp4EZdZcO6BO27eqtvJBAexPby");

            // Send a request and save the response to a variable
            WebResponse response = request.GetResponse();

            // Read the stream of Responses provided by the response
            // Pass this stream to a using statement to automatically close the stream when we're done with it
            using(var stream = response.GetResponseStream())
            {
                // Open the stream in a StreamReader and save the reader to a variable
                StreamReader reader = new StreamReader(stream);

                // Get the response by reading from the reader
                var responseData = reader.ReadToEnd();
                var deserializedData = JsonSerializer.Deserialize<UserListWrapper>(responseData,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                System.Console.WriteLine(deserializedData);
                // Deserialize the response into a List of Users
                return JsonSerializer.Deserialize<UserListWrapper>(responseData,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    }).Users;
            }
        }
    }
}