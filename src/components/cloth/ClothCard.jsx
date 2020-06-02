import React, { Component } from "react";

import cloth_img from "../../assets/img/hoody.jpeg";
import { Link } from "react-router-dom";

const ClothCard = (props) => {
  //   console.log(props);
  return (
    <Link to={`/cloth/${props.cloth.id}`}>
      <div className="wrapper">
        <div className="cloth-card">
          <img src={cloth_img} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default ClothCard;
