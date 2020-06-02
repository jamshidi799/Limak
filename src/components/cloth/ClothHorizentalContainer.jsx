import React from "react";
import ClothCard from "./ClothCard";

const ClothHorizentalContainer = (props) => {
  return (
    <div className="continer">
      <div className="row">
        {props.cloths.map((cloth) => (
          <div className="col" key={cloth.id}>
            <ClothCard cloth={cloth} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothHorizentalContainer;
