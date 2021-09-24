import React from "react";
import { Card } from "react-bootstrap";
import bird from "../images/bird.jpg";

const Home = () => {
  return (
    <section id="home">
      <div id="home-card" class="card-shadow">
        <h1>Search Perch</h1>
        <p>Let Perch do the search!</p>
        <p>Find your favorite tweeters sans the dumpster fire.</p>
        <p>
          Most importantly, you can check out random tweets from some of our
          favorite tweeters!
        </p>
      </div>
    </section>
  );
};

export default Home;
