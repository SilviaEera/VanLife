// import React from 'react';
// import background from "../assets/images/image 53.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeWrapper">
      {/* <img src={background} alt="" /> */}
      <h1 className="homeHeading">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="homeDetails">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="homeBtn">Find Your Van</button>
    </div>
  );
};

export default Home;
