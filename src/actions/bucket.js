import axios from "axios";
import {
  ADD_TO_BUCKET,
  DELTE_FROM_BUCKET,
  GET_BUCKET,
  PAY_BUCKET,
} from "./types";
import { tokenConfig } from "./auth";
import { SERVER_ADDRESS } from "../consts";

// GET POSTS
export const getBucket = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/basket`, tokenConfig(getState))
    .then((res) => {
      return dispatch({
        type: GET_BUCKET,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE POST
export const deleteFromBucket = (id) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8000/api/posts/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELTE_FROM_BUCKET,
        payload: id,
      });
    });
};

// ADD POST
export const addToBucket = (id) => (dispatch, getState) => {
  axios
    .post(`${SERVER_ADDRESS}/api/store/basket/add`, id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_TO_BUCKET,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
