import React from "react";
import MediaCard from "./MediaCard";
import Metrics from "./Metrics";

const TweetCard = (props) => {
  const { user, tweet } = props;
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
      {tweet.attachments ? <MediaCard media={tweet.attachments.media} /> : null}
      <Metrics publicMetrics={tweet.public_metrics} />
    </>
  );
};

export default TweetCard;
