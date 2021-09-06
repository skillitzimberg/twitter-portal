import React from "react";

const UserCard = (props) => {
  const { description, name, profileImg, username } = props.user;
  return (
    <section className="user-card bg-dark text-white">
      <div className="card-head">
        <img className="profile-img" src={profileImg} alt={`${username}`} />
        <h2>{name}</h2>
        <h2>@{username}</h2>
      </div>
      <p className="user-description">{description}</p>
    </section>
  );
};

export default UserCard;
