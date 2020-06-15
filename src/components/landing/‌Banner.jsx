import React from "react";

import img from "../../assets/img/banner1.png";
import img2 from "../../assets/img/banner2.png";

const Banner = () => (
  <div class="carousel slide banner" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      {/* <li data-target="#demo" data-slide-to="2"></li> */}
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="carousel-img" src={img} alt="" />
        <div class="carousel-caption">مجموعه بهار و تابستان</div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src={img2} alt="" />
        <div class="carousel-caption">مجموعه زمستان</div>
      </div>
      {/* <div class="carousel-item">
        <img src={img} alt="New York" width="1100" height="500" />
        <div class="carousel-caption">
          
        </div>
      </div> */}
    </div>
  </div>
);

export default Banner;
