import React from "react";

const Goal = (props) => {

  const isGoal = props.isGoal;
  console.log(isGoal);

  return( <>
    
    {isGoal ? <h2> Yea </h2> : <h2> No </h2>}

  </>
  );
};

export default Goal;
