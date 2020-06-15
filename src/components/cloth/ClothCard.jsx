import React, { Component } from "react";

import cloth_img from "../../assets/img/hoody.jpeg";
import { Link } from "react-router-dom";

const ClothCard = (props) => {
  //   console.log(props);
  return (
    <Link
      to={`/cloth/${props.cloth.id}`}
      className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 m-4 wrapper"
    >
      <div className="cloth-card">
        <img src={cloth_img} alt="" />
        <div className="price">{props.cloth.price} تومن +</div>
      </div>
    </Link>
  );
};

export default ClothCard;
