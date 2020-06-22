import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetPass } from "../../actions/auth";

export default function Direction() {
  const [email, setEmail] = useState("");
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPass(email));
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect to="./login" />;
  }

  return (
    <div className="container login-form p-5">
      <h2 className="text-center mb-4">فراموشی رمز عبور</h2>
      <div className="form-row justify-content-md-around">
        <div className="form-group col-12 mb-4">
          <label>ایمیل</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </div>

        <button className="btn" onClick={onSubmit}>
          ریست
        </button>
      </div>
    </div>
  );
}
