import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ClothContainer from "../cloth/ClothContainer";
import Filter from "./Filter";
import { getAllCloths } from "../../actions/cloth";

const Store = () => {
  const cloths = useSelector((state) => state.cloth.clothes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCloths());
  }, []);
  return (
    <div className="container-fluid m-3 mt-5">
      <div className="row">
        <div className="col-md-8">
          <ClothContainer cloths={cloths} />
        </div>
        <div className="col-md-4">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Store;
