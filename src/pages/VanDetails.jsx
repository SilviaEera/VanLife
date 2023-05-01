/* eslist-disable no-unused-vars */
/* eslint-disable*/
import "./VanDetails.css";
import data from "../../data";
import arrowLeft from "../assets/images/arrow-left.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
const VanDetails = () => {
  const params = useParams();

  const product = data.vans.find((van) => van.id === parseInt(params.id));
  if (!product) {
    return <div>none</div>;
  }
  return (
    <div className="vanDetailWrapper">
      <Link to={"/vans"} className="btnWrapper">
        <div className="returnBtn">
          <div className="ico">
            <img src={arrowLeft} alt="" />
          </div>
          <p>Back to all vans</p>
        </div>
      </Link>
      <div className="vanDetail">
        <img src={product.img} alt="" />
        <button
          className="categoryBtn"
          style={{ backgroundColor: product.color }}>
          {product.category}
        </button>

        <div className="detailText">
          <h2>{product.name}</h2>
          <p className="detailPrice">
            <h3>${product.price}</h3>
            <span>/day</span>
          </p>
          <p className="desc">{product.description}</p>
          <button className="rentBtn">Rent this van</button>
        </div>
      </div>
    </div>
  );
};

export default VanDetails;
