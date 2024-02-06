
// import React from 'react';
// import "./Card.css";

// const Card = ({ title, description, imageUrl }) => {
//   return (
//          <div className="card">
//       <img src="https://blogtobollywood.com/wp-content/uploads/2016/12/Raees-New-Poster-768x1024.jpg" alt={title} />
//       <div className="card-content">
//         <h2>{title="Raees"}</h2>
//         <p>{description="rating 4.5/5"}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;



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