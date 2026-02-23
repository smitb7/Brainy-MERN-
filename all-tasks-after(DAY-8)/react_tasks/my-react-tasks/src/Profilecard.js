import React from "react";

const Profilecard = (props) => {
  return (
    <div className="cardmain">
      <div className="cards">
        <h1 className="heading">{props.name}</h1>
        <div>
          <img className="img" src={props.images} alt="" />
        </div>

        <h1 className="desc">{props.descriptions}</h1>
      </div>
    </div>
  );
};

export default Profilecard;
