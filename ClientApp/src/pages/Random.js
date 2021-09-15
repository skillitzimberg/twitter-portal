import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import TweetCard from "../components/TweetCard";

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
    setSelectedUser(clickedUser);
  };

  const handleSelection = (id) => {
    getRandomTweet(id);
    getUserData(id);
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
    <div id="favorites-page">
      <ul>{userCards()}</ul>
      <section>
        {randomTweet && selectedUser ? (
          <TweetCard tweet={randomTweet} user={selectedUser} />
        ) : null}
      </section>
    </div>
  );
};
export default Random;
