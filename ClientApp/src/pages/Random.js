import React from "react";
import axios from "axios";
import UserCard from "../components/userCard";

const Random = () => {
  const [favoriteUsers, setFavoriteUsers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await await axios.get(
        "https://localhost:5001/api/favorites"
      );
      setFavoriteUsers(response.data);
    })();
  }, []);

  const userCards = () => {
    return favoriteUsers.map((user) => {
      return <UserCard user={user} key={user.username} />;
    });
  };
  return <section>{userCards()}</section>;
};
export default Random;
