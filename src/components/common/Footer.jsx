import React from "react";
import { useSelector, useDispatch } from "react-redux";

import img from "../../assets/img/footer.png";

export const Footer = () => {
  const data = useSelector((state) => state.common.footer);

  return (
    <div className="footer container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-7 col-xl-7 footer-links">
          <div className="row">
            <a href={data.instagram_id}>اینستا</a>
            <a href={data.telegram_id}>تلگرام</a>
            <a href={data.twitter_id}>توییتر</a>
          </div>
          <div className="row">
            <a href={data.address}>آدرس فروشگاه‌ها</a>
            <a href={data.telephone_number}>تماس باما</a>
            <a href="/">درباره ما</a>
          </div>
        </div>
        <div className="col-md-5 col-lg-4 col-xl-4">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
