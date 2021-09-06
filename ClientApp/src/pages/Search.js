import React from "react";
import TweetList from "../components/TweetList";
import usersData from "../Data/users.json";

const Search = () => {
  const [twitterData, setTwitterData] = React.useState();
  const [message, setMessage] = React.useState(
    `Search for a user by their username.\nThis is not live. Your choices are:\nlexfridman, alainjohannes, flaviocopes, hubermanlab, or florinpop1705.`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    let user;
    for (let userData of usersData) {
      if (e.target.value.toLowerCase() === userData.username.toLowerCase())
        user = userData;
    }

    if (!!twitterData) setMessage("No results found . . .");
    if (e.target.value === "")
      setMessage(
        `Search for a user by their username.\nThis is not live. Your choices are:\nlexfridman, alainjohannes, flaviocopes, hubermanlab, or florinpop1705.`
      );
    setTwitterData(user);
  };

  return (
    <section>
      <input
        id="search"
        type="search"
        onChange={handleSearch}
        placeholder="Search for Twitter Users"
      />
      {twitterData ? (
        <TweetList userData={twitterData} />
      ) : (
        <div>{message}</div>
      )}
    </section>
  );
};

export default Search;
