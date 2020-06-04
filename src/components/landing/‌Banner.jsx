import React from "react";

import img from "../../assets/img/banner1.png";
import img2 from "../../assets/img/banner2.png";

const Banner = () => (
  <div class="carousel slide banner" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="carousel-img" src={img} alt="Los Angeles" />
        <div class="carousel-caption">
          {/* <h1>غاز اوکراینی (قو‌غاز‌)</h1>
            <p>پرورش غاز اوکراینی</p> */}
        </div>
      </div>
      <div class="carousel-item">
        <img class="carousel-img" src={img2} alt="Chicago" />
        <div class="carousel-caption">
          {/* <h1>بوقلمون</h1>
            <p>پرورش بوقلمون های برنز با وزن ۱۷ کیلو</p> */}
        </div>
      </div>
      <div class="carousel-item">
        <img src={img} alt="New York" width="1100" height="500" />
        <div class="carousel-caption">
          {/* <h1>غاز محلی</h1>
            <p>پرورش غاز های محلی دورگه</p> */}
        </div>
      </div>
    </div>
    {/* <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a> */}
  </div>
);

export default Banner;
