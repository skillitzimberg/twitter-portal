import React from "react";

const MediaCard = (props) => {
  const { media } = props;
  let mediaList = media.map((element) => {
    return <img className="media-img" src={element.url} alt={"Tweet media"} />;
  });
  return <div id="media-container">{mediaList}</div>;
};

export default MediaCard;
