using System.Text.Json.Serialization;

namespace TwitterApp.Models 
{
    public class Media 
    {
        public Media(Media media)
        {
            this.MediaKey = media.MediaKey;
            this.Type = media.Type;
            this.Url = media.Url;
            this.Width = media.Width;
            this.Height = media.Height;
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