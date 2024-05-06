const initialState = {
  favorites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          content: [...state.favorites.content, action.payload],
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favorites: {
          content: [...state.favorites.content.filter((_, i) => i !== action.payload)],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
