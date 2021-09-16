import React from "react";

const TweetCard = (props) => {
  const { user, tweet } = props;
  console.log(user);
  const date = new Date(tweet.created_at).toLocaleString("en-EN", {
    month: "short",
    day: "numeric",
  });

  return (
    <>
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
    </>
  );
};

export default TweetCard;
