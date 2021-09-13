import React from "react";
import axios from "axios";

const TweetCard = (props) => {
  const { user, tweet } = props;
  const date = new Date(tweet.created_at).toLocaleString("en-EN", {
    month: "short",
    day: "numeric",
  });

  const getRandomTweet = async () => {
    const tweets = await axios.get(`https://localhost:5001/api/tweets`);
  };

  return (
    <li className="tweet-card bg-dark text-white">
      <div className="card-head">
        <img
          className="profile-img"
          src={user.profileImg}
          alt={`${user.username}`}
        />
        <h2>{user.name}</h2>
        <h2>@{user.username}</h2>
        <h2>{date}</h2>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      <div className="metrics">
        <span>{tweet.public_metrics.like_count}</span>
        <span>{tweet.public_metrics.reply_count}</span>
        <span>{tweet.public_metrics.retweet_count}</span>
        <span>{tweet.public_metrics.quote_count}</span>
      </div>
    </li>
  );
};

export default TweetCard;
