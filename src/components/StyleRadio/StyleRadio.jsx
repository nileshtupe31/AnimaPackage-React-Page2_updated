/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const StyleRadio = ({ className, onClick, isSelected = false }) => {
  return (
    <div className={`style-radio ${className}`}>
      <div className="frame">
        <button 
          onClick={onClick}
          className="overlap-group">
          { isSelected &&
            <div className="ellipse" />
          }
          
        </button>
      </div>
    </div>
  );
};

