import React from "react";
import "./CustomButton.css";
function CustomButton(props) {
  return (
    <button className="CustomButton" onClick={props.onClick} type={props.type}>
      {props.text}
    </button>
  );
}

export default CustomButton;
