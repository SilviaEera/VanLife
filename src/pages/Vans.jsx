// import React from 'react';
import data from "../../data";
import VansCard from "../components/VansCard";
import "./Vans.css";

const Vans = () => {
  return (
    <div className="vansWrapper">
      <h1>Explore our van options</h1>
      <div className="filterBtns">
        <button className="simple">Simple</button>
        <button className="luxury">Luxury</button>
        <button className="rugged">Rugged</button>
        <p className="filterClear">Clear filters</p>
      </div>
      <div className="vanContainer">
        <div className="vans">
          {data.vans.map((van) => {
            return <VansCard key={van.id} van={van} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Vans;
