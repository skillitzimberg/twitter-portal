import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

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
          src={user.profileImg}
          alt={`${user.username}`}
        />
        <h2>@{user.username}</h2>
        <h2>{date}</h2>
      </div>
      <p className="tweet-text">{tweet.text}</p>
      <div className="metrics">
        <div className="metric">
          <FontAwesomeIcon icon={faComment} />
          <span>{tweet.public_metrics.reply_count}</span>
        </div>
        <div className="metric">
          <FontAwesomeIcon icon={faHeart} />
          <span>{tweet.public_metrics.like_count}</span>
        </div>
        <div className="metric">
          <FontAwesomeIcon icon={faShareSquare} />
          <span>{tweet.public_metrics.retweet_count}</span>
        </div>
      </div>
      <button id="close" onClick={close}>
        Close
      </button>
    </aside>
  );
};

export default RandomTweetCard;
