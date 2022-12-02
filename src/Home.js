import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
     
      <Countdown date={Date.now() + 1000 * 60 * 10}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Home;
