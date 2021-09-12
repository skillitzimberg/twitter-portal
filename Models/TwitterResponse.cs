using System.Text.Json;
using System.Text.Json.Serialization;

namespace TwitterApp.Models
{
    public class TwitterResponse 
    {
        [JsonPropertyName("data")]

        public TwitterUser User { get; set; }
        public override string ToString() => JsonSerializer.Serialize<TwitterResponse>(this);
    }
    
}