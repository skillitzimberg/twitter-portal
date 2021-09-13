import React from "react";
import TweetCard from "../components/TweetCard";

const TweetList = (props) => {
  const { userWithTweets } = props;

  const user = {
    name: userWithTweets.name,
    username: userWithTweets.username,
    profileImg: userWithTweets.profile_image_url,
  };

  let tweetCards = userWithTweets.tweets.map((tweet) => {
    return <TweetCard tweet={tweet} user={user} key={tweet.id.toString()} />;
  });
  return <ul id="tweet-list">{tweetCards}</ul>;
};

export default TweetList;
