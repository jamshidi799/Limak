import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bucket from "../bucket/Bucket";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">
          لیماک
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                بلاگ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                ورود
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                ثبت نام
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">
                فروشگاه
              </Link>
            </li>
            <li>
              <span
                className="btn btn-warning"
                type="button"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                سبد
              </span>
            </li>
          </ul>
        </div>
        <div>
          <Bucket />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
