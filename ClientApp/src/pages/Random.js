import React from "react";
import UserCard from "../components/userCard";
import usersData from "../Data/users.json";

const Random = () => {
  const userCards = () => {
    return usersData.map((user) => {
      return <UserCard user={user} key={Math.random().toString()} />;
    });
  };
  return <section>{userCards()}</section>;
};
export default Random;
