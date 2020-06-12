import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { register } from "../../actions/auth";

// {

// 	"profile": {
// 		"birth_date": "2020-01-01",
// 		"phone_number": "09123456789"
// 	},

// 	"first_name": "fereydoon",
// 	"last_name": "kambizi",
// 	"email": "a@b.com",
// 	"password": "123456",
// 	"password_repeat": "123456"

// }

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_repeat: "",
    profile: {
      birth_date: "",
      phone_number: "",
    },
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onProfileFieldsChange = (e) => {
    const profile = { ...this.state.profile, [e.target.name]: e.target.value };
    this.setState({ ...this.state, profile });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state };
    console.log(user);
    this.props.register(user);
  };

  render() {
    return (
      <Paper elevation={3} className="container register-form">
        <div className="form-row justify-content-md-around">
          <div className="form-group col-md-5">
            <label>نام</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={this.state.first_name}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>نام خانوادگی</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={this.state.last_name}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>یوزرنیم</label>
            <input
              type="email"
              className="form-control"
              name="username"
              value={this.state.username}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>ایمیل</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>پسورد</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>تکرار پسورد</label>
            <input
              type="password"
              className="form-control"
              name="password_repeat"
              value={this.state.password_repeat}
              required
              onChange={this.onChange}
            />
          </div>

          <div className="form-group col-md-5">
            <label>تاریخ تولد</label>
            <input
              type="text"
              className="form-control"
              name="birth_date"
              value={this.state.profile.birth_date}
              required
              onChange={this.onProfileFieldsChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label>تلفن</label>
            <input
              type="number"
              className="form-control"
              name="phone_number"
              value={this.state.profile.phone_number}
              required
              onChange={this.onProfileFieldsChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            ثبت نام
          </button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  //   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Signup);
