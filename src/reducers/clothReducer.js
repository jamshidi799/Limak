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

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
