import axios from "axios";
import { tokenConfig } from "./auth";
import { SERVER_ADDRESS } from "../consts";
import {
  GET_CLOTHS,
  GET_CLOTH_BY_ID,
  FILTER,
  QUERY,
  DECREASE_FROM_STORE,
} from "./types";

export const getAllCloths = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/store_page`)
    .then((res) => {
      return dispatch({
        type: GET_CLOTHS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getClothById = (id) => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/clothe/${id}`)
    .then((res) => {
      return dispatch({
        type: GET_CLOTH_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filter = (query, pagination) => (dispatch, getState) => {
  // alert.show("hello");
  axios
    .post(`${SERVER_ADDRESS}/api/store/store_page?page=${pagination}`, query)
    .then((res) => {
      dispatch({
        type: FILTER,
        payload: res.data,
      });
      dispatch({
        type: QUERY,
        payload: { query, next: res.data.next, previous: res.data.previous },
      });
    })
    .catch((err) => console.log(err));
};

export const reduceFromStore = (id) => (dispatch, getState) => {
  return dispatch({
    type: DECREASE_FROM_STORE,
    payload: id,
  });
};
