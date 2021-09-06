import React from "react";

const TweetCard = (props) => {
  const { user, tweet } = props;
  return (
    <section className="tweet-card bg-dark text-white">
      <div className="card-head">
        <img
          className="profile-img"
          src={user.profileImg}
          alt={`${user.username}`}
        />
        <h2>{user.name}</h2>
        <h2>@{user.username}</h2>
      </div>
      <p className="tweet-text">{tweet}</p>
    </section>
  );
};

export default TweetCard;
