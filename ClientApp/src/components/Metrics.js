import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

const Metrics = (props) => {
  const { reply_count, like_count, retweet_count } = props.publicMetrics;
  return (
    <div className="metrics">
      <div className="metric">
        <FontAwesomeIcon icon={faComment} />
        <span>{reply_count}</span>
      </div>
      <div className="metric">
        <FontAwesomeIcon icon={faHeart} />
        <span>{like_count}</span>
      </div>
      <div className="metric">
        <FontAwesomeIcon icon={faShareSquare} />
        <span>{retweet_count}</span>
      </div>
    </div>
  );
};

export default Metrics;
