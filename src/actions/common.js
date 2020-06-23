import axios from "axios";
import { SERVER_ADDRESS } from "../consts";
import { FOOTER } from "./types";

export const getSizes = () => (dispatch, getState) => {
  axios
    .get(`${SERVER_ADDRESS}/api/store/clothe-size`)
    .then((res) => {
      return dispatch({
        type: FOOTER,
        payload: res.data.details,
      });
    })
    .catch((err) => console.log(err));
};
