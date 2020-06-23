import axios from "axios";
import {
  ADD_TO_BUCKET,
  DELTE_FROM_BUCKET,
  GET_BUCKET,
  ADD_BUCKET_TO_SERVER,
  PAY_BUCKET,
} from "./types";
import { tokenConfig } from "./auth";
import { SERVER_ADDRESS } from "../consts";

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

export const addToBucket = (data) => (dispatch, getState) => {
  const clothe = data.clothe;
  const request = {
    clothe_uid: clothe.id,
    color_name: clothe.information[0].color.name,
    size_name: clothe.information[0].size.name,
    count: 1,
  };
  axios
    .post(
      `${SERVER_ADDRESS}/api/store/basket/add`,
      request,
      tokenConfig(getState)
    )
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADD_TO_BUCKET,
        payload: { ...data, added: true, id: res.data.id },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_TO_BUCKET,
        payload: data,
      });
    });
};

export const addBucketToServer = (item) => (dispatch, getState) => {
  const data = {
    clothe_uid: item.clothe.id,
    color_name: item.clothe.information[0].color.name,
    size_name: item.clothe.information[0].size.name,
    count: 1,
  };

  axios
    .post(`${SERVER_ADDRESS}/api/store/basket/add`, data, tokenConfig(getState))
    .then((res) => {
      return dispatch({
        type: ADD_BUCKET_TO_SERVER,
        payload: { ...item, added: true, id: res.data.id },
      });
    })
    .catch((err) => console.log(err));
};

export const deleteFromBucket = (id) => (dispatch, getState) => {
  // const data = {
  //   clothe_uid: item.clothe.id,
  //   color_name: item.clothe.information[0].color.name,
  //   size_name: item.clothe.information[0].size.name,
  //   count: 1,
  // };

  axios
    .delete(
      `${SERVER_ADDRESS}/api/store/basket/edit/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      return dispatch({
        type: DELTE_FROM_BUCKET,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
