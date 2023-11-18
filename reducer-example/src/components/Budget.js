import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="budget">
      <h2>Budget:- ${budget}</h2>
    </div>
  );
};

export default Budget;
