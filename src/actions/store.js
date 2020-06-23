import axios from "axios";
import { tokenConfig } from "./auth";
import { SERVER_ADDRESS } from "../consts";
import { GET_CATEGORY, GET_COLOR, GET_SIZE, GET_KIND, FILTER } from "./types";

export const getSizes = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/clothe-size`)
    .then((res) => {
      return dispatch({
        type: GET_SIZE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getKinds = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/clothe-kind`)
    .then((res) => {
      return dispatch({
        type: GET_KIND,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const getColors = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/clothe-color`)
    .then((res) => {
      return dispatch({
        type: GET_COLOR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const getCategory = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/category`)
    .then((res) => {
      return dispatch({
        type: GET_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
