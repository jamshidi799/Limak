import { FOOTER } from "../actions/types";

const initialState = {
  footer: {
    address: "",
    telephone_number: "",
    instagram_id: "",
    telegram_id: "",
    twitter_id: "",
  },
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case FOOTER:
      return {
        ...state,
        footer: actions.payload,
      };

    default:
      return { ...state };
  }
}
