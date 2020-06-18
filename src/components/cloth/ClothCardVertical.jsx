import React from "react";
import img from "../../assets/img/cloth1.png";
import { Link } from "react-router-dom";

const ClothCardVertial = (props) => {
  return (
    <div className="col">
      <div className="cloth-card-vertical">
        <img src={img} alt="" />
        <div className="hover-effect">
          <Link to={`/cloth/${props.cloth.id}`}>ادیتوریال</Link>
          <div>
            <Link to={`/store`}>فروشگاه</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothCardVertial;
