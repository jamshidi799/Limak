import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { addBucketToServer } from "../../actions/bucket";

export default function Direction() {
  const [state, setState] = useState({ username: "", password: "" });
  const [shouldRedirect, setShouldRedirect] = useState(false);

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
    setShouldRedirect(true);
  };

  useEffect(() => {
    bucket.forEach((item) => {
      if (!item.added) {
        dispatch(addBucketToServer(item));
      }
    });
  }, [isAuthenticated]);

  // if (shouldRedirect) {
  //   setTimeout(() => {
  //     return <Redirect to="./store/1" />;
  //   }, 1000);
  // }

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
            type="password"
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
      <Link to="/resetpass" className="text-center">
        رمز خود را فراموش کرده اید؟
      </Link>
    </div>
  );
}
