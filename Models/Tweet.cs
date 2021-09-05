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
    }
}