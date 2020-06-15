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
  dispatch({
    type: DELTE_FROM_BUCKET,
    payload: id,
  });
};

// ADD POST
export const addToBucket = (cloth) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_BUCKET,
    payload: cloth,
  });
};

export const addBucketToServer = (cloth) => (dispatch, getState) => {
  axios
    .post(
      `${SERVER_ADDRESS}/api/store/basket/add`,
      cloth,
      tokenConfig(getState)
    )
    .then((res) => {
      return dispatch({
        type: GET_BUCKET,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
