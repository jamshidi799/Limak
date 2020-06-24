import React from "react";

import ClothCard from "./ClothCard";

const ClothContainer = (props) => (
  <div className="row">
    {props.cloths.map((cloth) => (
      <div
        className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3"
        key={cloth.id}
      >
        <ClothCard cloth={cloth} />
      </div>
    ))}
  </div>
);

export default ClothContainer;
