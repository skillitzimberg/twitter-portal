import React from "react";
import axios from "axios";
import TweetList from "../components/TweetList";
import usersData from "../Data/users.json";

const Search = () => {
  const [userWithTweets, setUserWithTweets] = React.useState();
  const [message, setMessage] = React.useState(
    `Search for a user by their username.\nThis is not live. Your choices are:\nlexfridman, alainjohannes, flaviocopes, hubermanlab, or florinpop1705.`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    for (let userData of usersData) {
      if (e.target.value.toLowerCase() === userData.username.toLowerCase())
        setUserWithTweets(userData);
    }

    if (!!userWithTweets) setMessage("No results found . . .");
    if (e.target.value === "")
      setMessage(
        `Search for a user by their username.\nThis is not live. Your choices are:\nlexfridman, alainjohannes, flaviocopes, hubermanlab, or florinpop1705.`
      );
  };

  return (
    <section>
      <input
        id="search"
        type="search"
        onChange={handleSearch}
        placeholder="Search for Twitter Users"
      />
      {userWithTweets ? (
        <TweetList userWithTweets={userWithTweets} />
      ) : (
        <div>{message}</div>
      )}
    </section>
  );
};

export default Search;
