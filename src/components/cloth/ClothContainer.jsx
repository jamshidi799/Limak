import React from "react";

import ClothCard from "./ClothCard";

const ClothContainer = (props) => (
  <div className="container">
    <div className="row justify-content-around">
      {props.cloths.map((cloth) => (
        <ClothCard cloth={cloth} key={cloth.id} />
      ))}
    </div>
  </div>
);

export default ClothContainer;
