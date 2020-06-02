import React from "react";
import { useSelector } from "react-redux";

import ClothContainer from "../cloth/ClothContainer";
import Filter from "./Filter";

const Store = () => {
  const cloths = useSelector((state) => state.cloth.list);
  console.log(cloths);
  return (
    <div className="container">
      <div className="col-md-9">
        <ClothContainer cloths={cloths} />
      </div>
      <div className="col-md-3">
        <Filter />
      </div>
    </div>
  );
};

export default Store;
