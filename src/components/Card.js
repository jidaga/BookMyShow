
import React from "react";
import "./Card.css";
import CustomButton from "./CustomButton";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <CustomButton onClick={props.onClick} text={props.buttonText} />
      </div>
    </div>
    
  );
}

export default Card;
