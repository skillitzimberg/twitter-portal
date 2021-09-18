import React from "react";
import axios from "axios";
import TweetList from "../components/TweetList";

const Search = () => {
  const [userWithTweets, setUserWithTweets] = React.useState();
  const [message, setMessage] = React.useState(
    `Search for a user by their username.`
  );

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://localhost:5001/api/search?query=${e.target.previousSibling.value}`
    );
    response.status === 200
      ? setUserWithTweets(response.data)
      : setMessage(`User not found - status: ${response.status}`);
  };

  return (
    <section id="search-page">
      <form>
        <div>
          <input
            id="search"
            type="search"
            placeholder="Search for Twitter Users"
          />
          <button id="submit-search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      {userWithTweets ? (
        <TweetList userWithTweets={userWithTweets} />
      ) : (
        <div>{message}</div>
      )}
    </section>
  );
};

export default Search;
