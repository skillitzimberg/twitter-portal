using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TwitterApp.Models
{
    public class UserWrapper 
    {
        [JsonPropertyName("data")]
        public TwitterUser User { get; set; }
        public override string ToString() => JsonSerializer.Serialize<UserWrapper>(this);
    }
    public class TweetListWrapper 
    {
        [JsonPropertyName("data")]
        public IEnumerable<Tweet> Tweets { get; set; }
        public override string ToString() => JsonSerializer.Serialize<TweetListWrapper>(this);
    }
    public class UserListWrapper 
    {
        [JsonPropertyName("data")]
        public IEnumerable<TwitterUser> Users { get; set; }
        public override string ToString() => JsonSerializer.Serialize<UserListWrapper>(this);
    }
}