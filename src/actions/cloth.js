import axios from "axios";
import { tokenConfig } from "./auth";
import { SERVER_ADDRESS } from "../consts";
import { GET_CLOTHS, GET_CLOTH_BY_ID, FILTER, QUERY } from "./types";

export const getAllCloths = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/store_page`, tokenConfig(getState))
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
    .get(`${SERVER_ADDRESS}/api/store/clothe/${id}`, tokenConfig(getState))
    .then((res) => {
      return dispatch({
        type: GET_CLOTH_BY_ID,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const filter = (query, pagination) => (dispatch, getState) => {
  axios
    .post(
      `${SERVER_ADDRESS}/api/store/store_page?page=${pagination}`,
      query,
      tokenConfig(getState)
    )
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
