import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import ClothContainer from "../cloth/ClothContainer";
import Filter from "./Filter";
import Bucket from "../bucket/Bucket";
import { getAllCloths } from "../../actions/cloth";
import Pagination from "../common/Pagination";

const Store = (props) => {
  const cloths = useSelector((state) => state.cloth.clothes);
  const bucketLength = useSelector((state) => state.bucket.list.length);
  const dispatch = useDispatch();

  const pagination = props.match.params.pagination;

  useEffect(() => {
    dispatch(getAllCloths());
  }, []);
  return (
    <Fragment>
      <div className="store-header">
        <h2>کمپانی لیماک</h2>
        <h2>فروشگاه</h2>
        <div>
          <h2>سبد خرید</h2>
          <div className="row">
            <div className="col-4 wrapper-store ml-1">
              <div className="badge">{bucketLength}</div>
            </div>
            <div
              className="col-7 wrapper-store"
              type="button"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              <div className="bucket-btn">مشاهده</div>
            </div>
            <div>
              <Bucket />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-12 col-sm-7 col-md-8 col-lg-9">
            <ClothContainer cloths={cloths} />
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-3">
            <Filter />
          </div>
        </div>
        <div className="row justify-content-center">
          <Pagination page={pagination} />
        </div>
      </div>
    </Fragment>
  );
};

export default Store;
