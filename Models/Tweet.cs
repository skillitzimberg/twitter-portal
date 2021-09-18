using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TwitterApp.Models
{
    public class Tweet
    {
        public Tweet(string id, string text) {
            this.Id = id;
            this.Text = text;
        }
        public string Id { get; set; }
        
        [JsonPropertyName("created_at")]
        public string CreatedAt { get; set; }
        public string Text { get; set; }
        [JsonPropertyName("public_metrics")]
        public PublicMetrics PublicMetrics { get;  set; }
        [JsonPropertyName("attachments")]
        public Attachments Attachments { get;  set; }
    }

    public class PublicMetrics {
        [JsonPropertyName("retweet_count")]
        public int RetweetCount { get; set; }
        [JsonPropertyName("reply_count")]
        public int ReplyCount { get; set; }
        [JsonPropertyName("like_count")]
        public int LikeCount { get; set; }
        [JsonPropertyName("quote_count")]
        public int QuoteCount { get; set; }
    }

    public class Attachments {
        [JsonPropertyName("media_keys")]
        public IEnumerable<string> MediaKeys { get; set; }
        [JsonPropertyName("media")]
        public List<Media> Media { get; set; }
    }
}