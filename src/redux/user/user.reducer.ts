import { UserActions } from "./user.types";
import { Action } from 'redux';
import { UserData } from "../../services/Firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: UserActions.Any) => {
  switch (action.type) {
    case UserActions.Types.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case UserActions.Types.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case UserActions.Types.SIGN_IN_FAILED:
    case UserActions.Types.SIGN_OUT_FAILED:
    case UserActions.Types.SIGN_UP_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
