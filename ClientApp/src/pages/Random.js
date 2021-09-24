import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import RandomTweetCard from "../components/RandomTweetCard";

const Random = (props) => {
    const { apiUrl } = props;
    const [favoriteUsers, setFavoriteUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
    const [randomTweet, setRandomTweet] = React.useState(null);

  React.useEffect(() => {
      (async () => {
          const response = await axios.get(`${apiUrl}/favorites`);
      setFavoriteUsers(response.data);
      })();
  }, [apiUrl]);

  const getRandomTweet = async (userId) => {
    const response = await axios.get(
        `${apiUrl}/tweets/${userId}`
    );
    const tweet =
      response.data[Math.floor(Math.random() * response.data.length)];
    setRandomTweet(tweet);
  };

  const getUserData = (userId) => {
    let clickedUser;
    for (let user of favoriteUsers) {
      if (user.id === userId) clickedUser = user;
    }
    setSelectedUser(clickedUser);
  };

  const handleSelection = (userId) => {
    getRandomTweet(userId);
    getUserData(userId);
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
