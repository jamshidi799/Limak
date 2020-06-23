import {
  ADD_TO_BUCKET,
  DELTE_FROM_BUCKET,
  GET_BUCKET,
  PAY_BUCKET,
  ADD_BUCKET_TO_SERVER,
} from "../actions/types";

const initialState = {
  list: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_BUCKET:
      return {
        ...state,
        list: actions.payload,
      };
    case DELTE_FROM_BUCKET:
      return {
        ...state,
        list: state.list.filter((c) => c.id !== actions.payload),
      };
    case ADD_TO_BUCKET:
      return {
        ...state,
        list: [...state.list, actions.payload],
      };
    case ADD_BUCKET_TO_SERVER:
      return {
        ...state,
        list: state.list.map((b) =>
          b.uu_id === actions.payload.uu_id ? actions.payload : b
        ),
      };
    default:
      return { ...state };
  }
}
