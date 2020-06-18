import React, { useState, useEffect } from "react";
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
import { addBucketToServer } from "../../actions/bucket";

export default function Direction() {
  const [state, setState] = useState({ username: "", password: "" });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const bucket = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = state;
    dispatch(login(username, password));
  };

  useEffect(() => {
    bucket.forEach((item) => {
      const data = {
        clothe_id: item.clothe.id,
        color_name: item.clothe.information[0].color.name,
        size_name: item.clothe.information[0].size.name,
        count: 1,
      };
      dispatch(addBucketToServer(data));
    });
  }, [isAuthenticated]);

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
