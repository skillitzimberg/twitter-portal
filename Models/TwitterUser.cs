using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TwitterApp.Models
{
    public class TwitterUser
    {
        public TwitterUser(string username, string description)
        {
            this.Username = username;
            this.Description = description;
        }
        public string Id { get; set; }
        public string Username { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }

        [JsonPropertyName("url")]

        public string Url { get; set; }

        [JsonPropertyName("profile_image_url")]
        public string ProfileImageUrl { get; set; }

        public IEnumerable<Tweet> Tweets { get; set; }

        public override string ToString() => JsonSerializer.Serialize<TwitterUser>(this);

    }
}