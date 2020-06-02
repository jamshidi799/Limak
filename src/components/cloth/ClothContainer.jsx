import React from "react";

import ClothCard from "./ClothCard";

const ClothContainer = (props) => (
  <div className="container">
    <div className="row">
      {props.cloths.map((cloth) => (
        <div className="col-md-4" key={cloth.id}>
          <ClothCard cloth={cloth} />
        </div>
      ))}
    </div>
  </div>
);

export default ClothContainer;
