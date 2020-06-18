import React from "react";

import ClothCard from "./ClothCard";

const ClothContainer = (props) => (
  <div className="row justify-content-between">
    {props.cloths.map((cloth) => (
      <ClothCard cloth={cloth} key={cloth.id} />
    ))}
  </div>
);

export default ClothContainer;
