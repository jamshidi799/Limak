import {
  ADD_TO_BUCKET,
  DELTE_FROM_BUCKET,
  GET_BUCKET,
  PAY_BUCKET,
} from "../actions/types";

const initialState = {
  list: [
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
    case GET_BUCKET:
      return {
        ...state,
        posts: actions.payload,
      };
    case DELTE_FROM_BUCKET:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== actions.payload),
      };
    case ADD_TO_BUCKET:
      return {
        ...state,
        posts: [...state.posts, actions.payload],
      };
    default:
      return { ...state };
  }
}
