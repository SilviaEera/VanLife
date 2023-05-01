// import React from "react";
import "./About.css";
import aboutImg from "../assets/images/aboutImg.png";

const About = () => {
  return (
    <div className="aboutWrapper">
      <img src={aboutImg} className="aboutHero" alt="" />
      <div className="aboutTextSection">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <div>
          <p className="partOne">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="partTwo">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </div>
      <div className="aboutCard">
        <h2>Your destination is waiting. Your van is ready.</h2>
        <button className="aboutCardBtn">Explore our vans</button>
      </div>
    </div>
  );
};

export default About;
