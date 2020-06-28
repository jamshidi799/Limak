import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useAlert } from "react-alert";

import ClothHorizentalContainer from "./ClothHorizentalContainer";
import Bucket from "../bucket/Bucket";
import { addToBucket } from "../../actions/bucket";
import {
  getClothById,
  getAllCloths,
  reduceFromStore,
} from "../../actions/cloth";
import cloth_img from "../../assets/img/hoody.jpeg";

const ClothPage = (props) => {
  const cloths = useSelector((state) => state.cloth.clothes).slice(0, 4);
  const clothe = useSelector((state) => state.cloth.clothe);
  const bucketLength = useSelector((state) => state.bucket.list.length);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const alert = useAlert();

  useEffect(() => {
    dispatch(getClothById(id));
    dispatch(getAllCloths());
  }, []);

  const onBuy = () => {
    dispatch(addToBucket({ clothe, added: false, uu_id: uuid() }));
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
                <div className="buy-btn" onClick={onBuy}>
                  <h3 className="text-center">اضافه به سبد خرید</h3>
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
        <ClothHorizentalContainer cloths={cloths} />
      </div>
      <div className="mt-3 mb-3">
        <h1 className="text-center text-lg-right mb-4 yellow">
          پیشنهاد شما سروران
        </h1>
        <ClothHorizentalContainer cloths={cloths} />
      </div>
      <div>
        <Bucket />
      </div>
      <div>
        <div
          class="modal fade"
          id="bucket-success-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothPage;
