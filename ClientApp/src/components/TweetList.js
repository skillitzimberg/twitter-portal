import React from "react";
import TweetCard from "../components/TweetCard";

const TweetList = (props) => {
  const { userData } = props;

  const user = {
    name: userData.name,
    username: userData.username,
    profileImg: userData.profile_image_url,
  };

  let tweetCards = userData.tweets.map((tweet) => {
    return (
      <TweetCard
        tweet={tweet.text}
        user={user}
        key={Math.random().toString()}
      />
    );
  });
  return tweetCards;
};

export default TweetList;
