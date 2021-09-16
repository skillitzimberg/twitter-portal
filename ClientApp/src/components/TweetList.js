import React from "react";
import TweetCard from "../components/TweetCard";

const TweetList = (props) => {
  const { userWithTweets } = props;

  const user = {
    id: userWithTweets.id,
    name: userWithTweets.name,
    username: userWithTweets.username,
    profileImg: userWithTweets.profile_image_url,
  };

  let tweetCards = userWithTweets.tweets.map((tweet) => {
    return (
      <li className="tweet-card bg-dark text-white card-shadow" key={tweet.id}>
        <TweetCard tweet={tweet} user={user} />
      </li>
    );
  });
  return <ul id="tweet-list">{tweetCards}</ul>;
};

export default TweetList;
