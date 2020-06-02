import React, { Component } from "react";
import { connect } from "react-redux";

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
    username: "",
    password: "",
    repeat_password: "",
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
    // this.props.login(userData);
  };

  render() {
    return (
      <div className="container form">
        <div className="form-row">
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
        </div>
        <div className="form-group col-md-6">
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
        <div className="form-group col-md-6">
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          ثبت نام
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Signup);
