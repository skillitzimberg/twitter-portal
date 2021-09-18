import React from "react";
import Metrics from "./Metrics";

const RandomTweetCard = (props) => {
  const { user, tweet, close } = props;
  const date = new Date(tweet.created_at).toLocaleString("en-EN", {
    month: "short",
    day: "numeric",
  });

  return (
    <aside className="random-tweet-card">
      <div className="random-tweet-card-head">
        <img
          className="profile-img"
          src={user.profile_image_url}
          alt={`${user.username}`}
        />
        <h2>@{user.username}</h2>
        <h2>{date}</h2>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      <Metrics publicMetrics={tweet.public_metrics} />
      <button id="close" onClick={close}>
        Close
      </button>
    </aside>
  );
};

export default RandomTweetCard;
