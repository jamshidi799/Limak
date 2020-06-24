import React, { Component } from "react";

import cloth_img from "../../assets/img/hoody.jpeg";
import { Link } from "react-router-dom";

const ClothCard = (props) => {
  return (
    <Link to={`/cloth/${props.cloth.id}`}>
      <div className="p-3 p-sm-0">
        <div className="cloth-card-container">
          <div className="wrapper">
            <div className="cloth-card">
              <img src={cloth_img} alt="" />
              <div className="price">{props.cloth.price} تومن +</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClothCard;
