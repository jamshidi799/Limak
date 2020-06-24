import React from "react";
import ClothCard from "./ClothCard";

const ClothHorizentalContainer = (props) => {
  return (
    <div className="continer">
      <div className="row">
        {props.cloths.map((cloth, i) => (
          <div className="col-12 col-sm-6 col-lg-3 mb-4" key={i}>
            <ClothCard cloth={cloth} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothHorizentalContainer;
