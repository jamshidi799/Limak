import React from "react";

import ClothCard from "./ClothCard";

const ClothContainer = (props) => (
  <div className="container">
    {props.cloths.map((cloth) => (
      <ClothCard key={cloth.id} cloth={cloth} />
    ))}
  </div>
);

export default ClothContainer;
