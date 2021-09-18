using System.Text.Json.Serialization;

namespace TwitterApp.Models 
{
    public class Media 
    {
        public Media(string mediaKey, string type, int width, int height, string url)
        {
            this.MediaKey = mediaKey;
            this.Type = type;
            this.Url = url;
            this.Width = width;
            this.Height = height;
        }
        [JsonPropertyName("media_key")]
        public string MediaKey { get; set; }
        [JsonPropertyName("type")]
        public string Type { get; set; }
        [JsonPropertyName("width")]
        public int Width { get; set; }
        [JsonPropertyName("url")]
        public string Url { get; set; }
        [JsonPropertyName("height")]
        public int Height { get; set; }
    }   
}