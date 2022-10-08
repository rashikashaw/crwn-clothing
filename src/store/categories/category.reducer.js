import { combineReducers } from "redux";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
}

const categories = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return payload;
    default:
      return state;
  };
};
const error = (state = null, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return payload;
    default:
      return state;
  };
};
const isLoading = (state = false, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return true;
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return false;
    default:
      return state;
  };
};

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE, 
//   action={}
// ) => {
//   const { type, payload } = action;

//   switch(type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//       return { ...state, error: payload ,isLoading: false };
//     default:
//       return state;
//   };
// };

export const categoriesReducer = combineReducers({
  categories,
  error,
  isLoading,
});
