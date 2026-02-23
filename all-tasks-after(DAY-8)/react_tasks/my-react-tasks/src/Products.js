import React from "react";

const Products = (props) => {
  return (
    <div className="basediv">
      {/* card 1  */}

      <div className="maincarddiv">
        <div className="proimg">
            <img className="productsimages" src={props.productimg} alt="" />
        </div>
        <div className="textcontent">
          <p>Title : {props.productname}</p>
          <p> Price : {props.price}</p>
          <p>Description : {props.description}</p>
          <p> Availability : {props.isAvailable ? "In Stock" : "Out Of Stock, Revisit in 2 hours"}</p>
        </div>
      </div>


    </div>
  );
};

export default Products;
