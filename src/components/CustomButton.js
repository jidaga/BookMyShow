import React from "react";
import "./CustomButton.css";
function CustomButton(props) {
  return <div onClick={props.onClick}>{props.text}</div>;
}

export default CustomButton;
