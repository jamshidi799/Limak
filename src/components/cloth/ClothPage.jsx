import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
    dispatch(addToBucket({ clothe, added: false }));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 wrapper">
          <div className="cloth-card">
            <img src={cloth_img} alt="" />
          </div>
        </div>
        <div className="col-md-3 mr-4">
          <div className="wrapper">
            <div className="cloth-dsc pl-4">{clothe.description}</div>
          </div>

          <br />
          <div>1200000</div>
          <div className="wrapper">
            <div className="buy-btn" onClick={onBuy}>
              <h5>اضافه به سبد خرید</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="mb-4">از این مجموعه</h1>
        <ClothHorizentalContainer cloths={cloths} />
      </div>
      <div className="mt-5">
        <h1 className="mb-4">پیشنهاد شما سروران</h1>
        <ClothHorizentalContainer cloths={cloths} />
      </div>
    </div>
  );
};

export default ClothPage;
