import React from "react";
import MovingText from "react-moving-text";
import './index.css'

const MovingContent = () => {
  return (
  <div className="slider-running-text">
    <MovingText
     type="typewriter"
      dataText={["we are the own manufacture of wedding saree we will be provides direct factory's sales of customers.","ALL OVER INDIA CASH ON DELIVERY AVAILABLE ","RESELLERS SUPPOERT ALSO AVAILABLE","SAME DAY DISPATCH","RETURN POLICY ALSO AVAILABLE"]}
    />
    </div>
  );
};

export default MovingContent;
