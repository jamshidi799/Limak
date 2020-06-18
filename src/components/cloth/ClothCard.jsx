import React, { Component } from "react";

import cloth_img from "../../assets/img/hoody.jpeg";
import { Link } from "react-router-dom";

const ClothCard = (props) => {
  //   console.log(props);
  return (
    <Link
      to={`/cloth/${props.cloth.id}`}
      className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3"
    >
      <div className="p-5 p-sm-0">
        <div className="wrapper">
          <div className="cloth-card">
            <img src={cloth_img} alt="" />
            <div className="price">{props.cloth.price} تومن +</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClothCard;
