import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import { login } from "../../actions/auth";

// const theme = createMuiTheme({
//   direction: "rtl", // Both here and <body dir="rtl">
// });

const CssTextField = withStyles({
  root: {
    "& label": {
      right: "0px",
    },
    "& label.Mui-focused": {
      color: "green",
      right: "-50px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

export default function Direction() {
  const [state, setState] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    dispatch(login(username, password));
  };

  return (
    <div className="container login-form">
      <div className="form-row justify-content-md-around">
        <div className="form-group col-12">
          <label>نام کاربری</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={state.username}
            required
            onChange={onChange}
          />
        </div>

        <div className="form-group col-12">
          <label>پسورد</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={state.password}
            required
            onChange={onChange}
          />
        </div>
        <button className="btn" onClick={onSubmit}>
          ورود
        </button>
      </div>
    </div>
  );
}
