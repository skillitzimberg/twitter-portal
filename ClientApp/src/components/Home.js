import React from "react";
import { Card } from "react-bootstrap";
import bird from "../images/bird.jpg";

const Home = () => {
  return (
    <div id="home">
      <Card className="bg-dark text-white" id="card">
        <Card.Img src={bird} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Search Perch</Card.Title>
          <Card.Text className="home-card">
            Find your favorite tweeters sans the dumpster fire.
          </Card.Text>
          <Card.Text className="home-card">
            Most importantly, you can check out random tweets from some of our
            favorite!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Home;
