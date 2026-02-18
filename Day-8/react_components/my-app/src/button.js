
import React from "react";

const Button = (props) => {

    console.log(props.array);  //check in brows console
    
  return (
    <>

       
      <button style={{backgroundColor: props.backgroundColor , paddingTop: "20px", }}>{props.btn }</button>
      

    </>
  );
};

export default Button;
