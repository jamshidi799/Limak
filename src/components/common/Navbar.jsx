import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Bucket from "../bucket/Bucket";
import { logout, authenticate } from "../../actions/auth";

class Navbar extends Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    return (
      <nav class="container navbar navbar-expand-lg navbar-dark custom-navbar">
        <Link to="/" class="navbar-brand">
          لیماک
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                بلاگ
              </Link>
            </li>
            {this.props.isAuthenticated === false ? (
              <Fragment>
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
              </Fragment>
            ) : (
              <li className="nav-item pointer" onClick={this.logout}>
                <div className="nav-link">خروج</div>
              </li>
            )}

            <li className="nav-item">
              <Link to="/store/1" className="nav-link">
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
      </nav>
      // <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      //   <div className="navbar-brand">
      //     <Link to="/">لیماک</Link>
      //   </div>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#collapsibleNavbar"
      //   >
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="collapsibleNavbar">
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link">
      //           بلاگ
      //         </Link>
      //       </li>
      //       {this.props.isAuthenticated === false ? (
      //         <Fragment>
      //           <li className="nav-item">
      //             <Link to="/login" className="nav-link">
      //               ورود
      //             </Link>
      //           </li>
      //           <li className="nav-item">
      //             <Link to="/register" className="nav-link">
      //               ثبت نام
      //             </Link>
      //           </li>
      //         </Fragment>
      //       ) : (
      //         <li className="nav-item pointer" onClick={this.logout}>
      //           <div className="nav-link">خروج</div>
      //         </li>
      //       )}

      //       <li className="nav-item">
      //         <Link to="/store/1" className="nav-link">
      //           فروشگاه
      //         </Link>
      //       </li>
      //       <li>
      //         <span
      //           className="btn btn-warning"
      //           type="button"
      //           data-toggle="modal"
      //           data-target="#exampleModalLong"
      //         >
      //           سبد
      //         </span>
      //       </li>
      //     </ul>
      //   </div>
      //   <div>
      //     <Bucket />
      //   </div>
      // </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { logout, authenticate })(Navbar);
