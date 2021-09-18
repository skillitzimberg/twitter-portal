import React from "react";
import { Card } from "react-bootstrap";
import bird from "../images/bird.jpg";

const Home = () => {
  return (
    <section id="home">
      <Card className="bg-dark text-white card-shadow" id="home-card">
        <Card.Img src={bird} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Search Perch</Card.Title>
          <Card.Text>
            Find your favorite tweeters sans the dumpster fire.
          </Card.Text>
          <Card.Text>
            Most importantly, you can check out random tweets from some of our
            favorite tweeters!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </section>
  );
};

export default Home;
