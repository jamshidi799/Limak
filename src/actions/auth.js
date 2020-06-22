import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  AUTHENTICATED,
} from "./types";
import axios from "axios";
import { SERVER_ADDRESS } from "../consts";

// REGISTER USER
export const register = (user) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  axios
    .post(`${SERVER_ADDRESS}/api/accounts/signup`, body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        // type: REGISTER_FAIL,
        type: REGISTER_SUCCESS,
        payload: user,
      });
    });
};

export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post(`${SERVER_ADDRESS}/api/accounts/login`, body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        // type: LOGIN_FAIL,
        type: "default",
      });
    });
};

export const resetPass = (email) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ email });

  axios
    .post(`${SERVER_ADDRESS}/api/accounts/reset-password`, body, config)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post(`${SERVER_ADDRESS}/api/accounts/logout`, {}, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const authenticate = () => (dispatch) =>
  dispatch({ type: AUTHENTICATED });
