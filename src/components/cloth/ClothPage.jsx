import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import ClothHorizentalContainer from "./ClothHorizentalContainer";
import { addToBucket } from "../../actions/bucket";
import { getClothById, getAllCloths } from "../../actions/cloth";
import cloth_img from "../../assets/img/hoody.jpeg";

const ClothPage = (props) => {
  const cloths = useSelector((state) => state.cloth.clothes).slice(0, 4);
  const clothe = useSelector((state) => state.cloth.clothe);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(getClothById(id));
    dispatch(getAllCloths());
  }, []);

  const onBuy = () => {
    dispatch(addToBucket({ clothe, added: false, uu_id: uuid() }));
  };

  return (
    <div className="container mt-5 cloth-page">
      <div className="row">
        <div className="col-sm-6 col-md-4 m-4 m-sm-0">
          <div className="max-width-300">
            <div className="wrapper">
              <img src={cloth_img} alt="" />
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
              <div className="buy-btn" onClick={onBuy}>
                <h3 className="text-center">اضافه به سبد خرید</h3>
              </div>
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
    </div>
  );
};

export default ClothPage;
