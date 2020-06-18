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
    dispatch(addToBucket({ clothe, added: false, id: uuid() }));
  };

  return (
    <div className="container mt-5 cloth-page">
      <div className="row">
        <div className="col-md-4 wrapper">
          <img src={cloth_img} alt="" />
        </div>
        <div className="col-md-3 mr-4">
          <div className="wrapper">
            <div className="cloth-dsc pl-4">{clothe.description}</div>
          </div>

          <br />
          <div className="wrapper">
            <div className="clothe-price">{clothe.price} تومن</div>
          </div>
          <br />
          <div className="wrapper">
            <div className="buy-btn" onClick={onBuy}>
              <h3>اضافه به سبد خرید</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 banner">لیماک</div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="mb-4 yellow">از این مجموعه</h1>
        <ClothHorizentalContainer cloths={cloths} />
      </div>
      <div className="mt-5">
        <h1 className="mb-4 yellow">پیشنهاد شما سروران</h1>
        <ClothHorizentalContainer cloths={cloths} />
      </div>
    </div>
  );
};

export default ClothPage;
