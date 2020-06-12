import {
  GET_CLOTHS,
  GET_CLOTH_BY_ID,
  GET_SIZE,
  GET_KIND,
  GET_CATEGORY,
  GET_COLOR,
} from "../actions/types";

const initialState = {
  clothe: {
    id: 1,
    name: "reza",
    price: "asdf",
  },
  clothes: [
    {
      id: 1,
      name: "reza",
      price: "asdf",
    },
    {
      id: 2,
      name: "reza",
      price: "asdf",
    },
    {
      id: 3,
      name: "reza",
      price: "asdf",
    },
  ],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_CLOTHS:
      return {
        ...state,
        clothes: actions.payload.results.clothes,
      };
    case GET_CLOTH_BY_ID:
      return {
        ...state,
        clothe: actions.payload.clothe,
      };
    default:
      return { ...state };
  }
}
