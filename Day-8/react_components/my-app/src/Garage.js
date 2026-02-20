import React from "react";
import Cars from "./cars";

const Garage = () => {
  const cars = ["BMW", "Volvo", "MG", "Audi"];

  return (
    <div>

      {cars.map((items) => (
        <Cars carName={items} />
      ))}

    
    </div>
  );
};

export default Garage;
