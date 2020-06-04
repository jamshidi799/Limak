import React, { Component } from "react";
import { connect } from "react-redux";

import img from "../../assets/img/footer.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer container-fluid">
        <div className="row">
          <div className="col-md-6 footer-links">
            <div className="row">
              <a href="/">اینستا</a>
              <a href="/">تلگرام</a>
              <a href="/">توییتر</a>
            </div>
            <div className="row">
              <a href="/">آدرس فروشگاه‌ها</a>
              <a href="/">تماس باما</a>
              <a href="/">درباره ما</a>
            </div>
          </div>
          <div className="col-md-5">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Footer);
