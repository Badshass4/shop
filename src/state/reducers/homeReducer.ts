import { GET_ALL_CATEGORIES, GET_CATEGORY_DETAILS, SET_ALL_CATEGORIES, SET_CATEGORY_DETAILS } from "../actions/homeConstant";

const initialState = {
    categories : [],
    categoryDetails: [],
    selectedCategory: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_CATEGORIES: {
        return {
          ...state,
        };
      }
      case SET_ALL_CATEGORIES: {
        return {
          ...state,
          categories: action.payload,
        };
      }
      case GET_CATEGORY_DETAILS: {
        return {
          ...state,
          selectedCategory: action.payload,
        };
      }
      case SET_CATEGORY_DETAILS: {
        return {
          ...state,
          categoryDetails: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;