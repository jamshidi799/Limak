import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useAlert } from "react-alert";
import axios from "axios";

import { SERVER_ADDRESS } from "../../consts";
import ClothHorizentalContainer from "./ClothHorizentalContainer";
import Bucket from "../bucket/Bucket";
import { addToBucket } from "../../actions/bucket";
import {
  getClothById,
  getAllCloths,
  reduceFromStore,
} from "../../actions/cloth";
import cloth_img from "../../assets/img/hoody.jpeg";
import arrow from "../../assets/img/arrow.png";

const ClothPage = (props) => {
  const cloths = useSelector((state) => state.cloth.clothes).slice(0, 4);
  const clothe = useSelector((state) => state.cloth.clothe);
  const bucketLength = useSelector((state) => state.bucket.list.length);
  const dispatch = useDispatch();
  const [similarCat, setSimilarCat] = useState();
  const [similarKind, setSimilarKind] = useState();
  const [count, setCount] = useState(0);
  const id = props.match.params.id;

  const alert = useAlert();

  useEffect(() => {
    dispatch(getClothById(id));
    dispatch(getAllCloths());

    getSimilarCategory();
    getSimilarKind();
  }, []);

  const getSimilarCategory = () => {
    const query = {
      kind: [],
      color: [],
      size: [],
      category: [clothe.category],
    };
    axios
      .post(`${SERVER_ADDRESS}/api/store/store_page?page=${1}`, query)
      .then((res) => {
        setSimilarCat(res.data.results.clothes);
      })
      .catch((err) => console.log(err));
  };

  const getSimilarKind = () => {
    const query = {
      kind: [clothe.kind],
      color: [],
      size: [],
      category: [],
    };
    axios
      .post(`${SERVER_ADDRESS}/api/store/store_page?page=${1}`, query)
      .then((res) => {
        setSimilarKind(res.data.results.clothes);
      })
      .catch((err) => console.log(err));
  };

  const onBuy = () => {
    dispatch(
      addToBucket({ clothe, count: count, added: false, uu_id: uuid() })
    );
    dispatch(reduceFromStore(clothe.id));
    setTimeout(() => {
      alert.show("کالا به سبد اضافه شد");
    }, 1500);
  };

  const onClothCountZero = () => {
    alert.show("این لباس تموم شده متاسفانه");
  };

  useEffect(() => {
    console.log("baby");
  }, [bucketLength]);

  return (
    <div className="container mt-5 cloth-page">
      <div className="row">
        <div className="col-sm-6 col-md-4 m-4 m-sm-0">
          <div className="max-width-300">
            <div className="wrapper">
              <img
                src={
                  clothe.images && clothe.images.length
                    ? clothe.images[0].picture
                    : cloth_img
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3  m-4 m-sm-0">
          <div className="max-width-300">
            <div className="wrapper">
              <h4 className="yellow">توضیحات</h4>
              <div className="scroll">
                <div className="cloth-dsc pl-4">{clothe.description}</div>
              </div>
            </div>

            <br />
            <div className="wrapper">
              <div className="clothe-price">{clothe.price} تومن</div>
            </div>
            <br />
            <div className="wrapper">
              {clothe.information && clothe.information.count > 0 ? (
                <div className="buy-btn">
                  <h3 className="text-center cta" onClick={onBuy}>
                    اضافه به سبد خرید
                  </h3>
                  <div className="count">
                    <i
                      class="material-icons pointer"
                      onClick={() =>
                        count === clothe.information.count
                          ? setCount(count)
                          : setCount(count + 1)
                      }
                    >
                      arrow_upward
                    </i>
                    <span>{count}</span>
                    <i
                      class="material-icons pointer"
                      onClick={() =>
                        count > 0 ? setCount(count - 1) : setCount(0)
                      }
                    >
                      arrow_downward
                    </i>
                  </div>
                </div>
              ) : (
                <div className="buy-btn disable" onClick={onClothCountZero}>
                  <h3 className="text-center">اضافه به سبد خرید</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="banner">لیماک</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-center text-lg-right mb-3 yellow">از این مجموعه</h1>
        <ClothHorizentalContainer cloths={similarCat} />
      </div>
      <div className="mt-3 mb-3">
        <h1 className="text-center text-lg-right mb-4 yellow">از این نوع</h1>
        <ClothHorizentalContainer cloths={similarKind} />
      </div>
    </div>
  );
};

export default ClothPage;
