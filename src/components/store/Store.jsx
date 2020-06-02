import React from "react";
import { useSelector } from "react-redux";

import ClothContainer from "../cloth/ClothContainer";
import Filter from "./Filter";

const Store = () => {
  const cloths = useSelector((state) => state.cloth.list);
  return (
    <div className="container-fluid m-3 mt-5">
      <div className="row">
        <div className="col-md-9">
          <ClothContainer cloths={cloths} />
        </div>
        <div className="col-md-3">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Store;
