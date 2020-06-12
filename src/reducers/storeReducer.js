import { GET_CATEGORY, GET_COLOR, GET_SIZE, GET_KIND } from "../actions/types";

const initialState = {
  colors: [
    {
      name: "قرمز",
    },
    {
      name: "زرد",
    },
    {
      name: "سیاه",
    },
  ],
  kinds: [
    {
      name: "تیشرت",
    },
    {
      name: "هودی",
    },
    {
      name: "کلاه",
    },
  ],
  sizes: [
    {
      name: "لارج",
    },
    {
      name: "ایکس‌لارج",
    },
    {
      name: "دو ایکس‌لارج",
    },
  ],
  categories: [
    {
      name: "بهار و تابستان ۹۹",
    },
    {
      name: "زمستان ۹۹",
    },
    {
      name: "تابستان ۹۹",
    },
  ],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case GET_SIZE:
      return {
        ...state,
        sizes: actions.payload.clotheSizes,
      };
    case GET_KIND:
      return {
        ...state,
        kinds: actions.payload.clotheKind,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categories: actions.payload.category,
      };
    case GET_COLOR:
      return {
        ...state,
        colors: actions.payload.clotheColor,
      };

    default:
      return { ...state };
  }
}
