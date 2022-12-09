import { combineReducers } from "redux";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { CategoryAction } from "./category.types";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
}

const categories = (state = [], action = {} as CategoryAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  };
};

const error = (state = null, action = {} as CategoryAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return action.payload;
    default:
      return state;
  };
};
const isLoading = (state = false, action = {} as CategoryAction) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return true;
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return false;
    default:
      return state;
  };
};

export const categoriesReducer = combineReducers({
  categories,
  error,
  isLoading,
});
