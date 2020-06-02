import React from "react";

import cloth_img from "../../assets/img/hoody.jpeg";
import ClothHorizentalContainer from "./ClothHorizentalContainer";
import { useSelector } from "react-redux";

const ClothPage = (props) => {
  const cloths = useSelector((state) => state.cloth.list);
  const id = props.match.params.id;
  console.log(id);
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
            <div className="cloth-dsc pl-4">
              شسیبشسبیمنکتسشب شس کشسمیب سمتب کشس شکمستیب کش شمستشتبسیبتیبالتثقخ
              هقث ضثصجقث افعثق ثقخ ای اقثخ قخه{" "}
            </div>
          </div>

          <br />
          <div>1200000</div>
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
