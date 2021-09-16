import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import RandomTweetCard from "../components/RandomTweetCard";

const Random = () => {
  const [favoriteUsers, setFavoriteUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [randomTweet, setRandomTweet] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const response = await axios.get("https://localhost:5001/api/favorites");
      setFavoriteUsers(response.data);
    })();
  }, []);

  const getRandomTweet = async (id) => {
    const response = await axios.get(`https://localhost:5001/api/tweets/${id}`);
    const tweet =
      response.data[Math.floor(Math.random() * response.data.length)];
    setRandomTweet(tweet);
  };

  const getUserData = (id) => {
    let clickedUser;
    for (let user of favoriteUsers) {
      if (user.id === id) clickedUser = user;
    }
    console.log(clickedUser);
    setSelectedUser(clickedUser);
  };

  const handleSelection = (id) => {
    getRandomTweet(id);
    getUserData(id);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeTweet = () => {
    setRandomTweet();
    setSelectedUser();
  };

  const userCards = () => {
    return favoriteUsers.map((user) => {
      return (
        <UserCard
          user={user}
          key={user.username}
          handleSelection={handleSelection}
        />
      );
    });
  };

  return (
    <section id="favorites-page">
      {randomTweet && selectedUser ? (
        <RandomTweetCard
          tweet={randomTweet}
          user={selectedUser}
          close={closeTweet}
        />
      ) : null}
      <ul>{userCards()}</ul>
    </section>
  );
};
export default Random;
