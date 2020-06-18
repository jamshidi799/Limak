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
      <div className="container">
        <div className="store-header">
          <div className="row justify-content-between">
            <h2 className="col">کمپانی لیماک</h2>
            <h2 className="col text-center">فروشگاه</h2>
            <div className="col">
              <h2 className="text-center">سبد خرید</h2>
              <div className="row justify-content-between">
                <div className="col-4 pr-0">
                  <div className="wrapper-store">
                    <div className="badge">{bucketLength}</div>
                  </div>
                </div>
                <div
                  className="col-8 wrapper-store"
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
        </div>
      </div>
      <div className="container">
        <div className="store-content">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-8 p-0">
              <ClothContainer cloths={cloths} />
            </div>
            <div className="col-12  col-lg-3 p-0">
              <Filter />
            </div>
          </div>
          <div className="row justify-content-center">
            <Pagination page={pagination} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Store;
