/* eslist-disable no-unused-vars */
/* eslint-disable*/
import { Link } from "react-router-dom";
import "./VansCard.css";

const VansCard = (props) => {
  return (
    <div className="vanCardWrapper">
      <div className="vanCard">
        <img src={props.van.img} alt="" className="vanCardImg" />
        <div className="vanCardInfo">
          <h2 className="vanName">{props.van.name}</h2>
          <div className="vanPrice">
            <span className="price">${props.van.price}</span>
            <span className="day">/day</span>
          </div>
        </div>
        <Link to={`/vans/${props.van.id}`}>
          <button
            className="vanCardBtn"
            // idD={props.van.id}
            style={{ backgroundColor: props.van.color }}>
            {props.van.category}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VansCard;
