import React from "react";
import ClothCard from "./ClothCard";

const ClothHorizentalContainer = (props) => {
  return (
    <div className="continer">
      <div className="row sscroll-horizenly">
        {props.cloths.map((cloth, i) => (
          <ClothCard cloth={cloth} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ClothHorizentalContainer;
