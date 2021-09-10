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
        public string Text { get; set; }
        public PublicMetrics PublicMetrics { get;  set; }
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
}