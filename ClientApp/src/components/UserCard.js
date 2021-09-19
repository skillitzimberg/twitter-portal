import React from "react";

const UserCard = (props) => {
  const { description, id, name, profile_image_url, username } = props.user;
  const handleSelection = props.handleSelection;
  return (
    <li
      className="user-card bg-dark text-white card-shadow"
      onClick={() => handleSelection(id)}
    >
      <div className="card-head">
        <img
          className="profile-img"
          src={profile_image_url}
          alt={`${username}`}
        />
        <h2>{name}</h2>
      </div>
      <p className="user-description">{description}</p>
    </li>
  );
};

export default UserCard;
