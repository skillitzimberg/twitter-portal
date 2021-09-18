import React from "react";
import MediaCard from "./MediaCard";
import Metrics from "./Metrics";

const RandomTweetCard = (props) => {
  const { user, tweet, close } = props;
  const date = new Date(tweet.created_at).toLocaleString("en-EN", {
    month: "short",
    day: "numeric",
  });
  return (
    <aside className="random-tweet-card">
      <div className="card-head">
        <img
          className="profile-img"
          src={user.profile_image_url}
          alt={`${user.username}`}
        />
        <h2>@{user.username}</h2>
        <h2>{date}</h2>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      {tweet.attachments ? <MediaCard media={tweet.attachments.media} /> : null}
      <Metrics publicMetrics={tweet.public_metrics} />
      <button id="close" onClick={close}>
        Close
      </button>
    </aside>
  );
};

export default RandomTweetCard;
