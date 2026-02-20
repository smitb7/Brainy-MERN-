import React from 'react'

const Cars = (props) => {
    
    console.log(props.carName, "cars");
    
  return (
    <div>
        {props.carName}
    </div>
  )
}

export default Cars
