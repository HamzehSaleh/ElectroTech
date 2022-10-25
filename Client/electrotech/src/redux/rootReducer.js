const initalState = {
  loading: false,
  cartItems: [],
};

export const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "HIDE_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "DELETE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item._id !== action.payload._id;
        }),
      };
    default:
      return state;
  }
};
