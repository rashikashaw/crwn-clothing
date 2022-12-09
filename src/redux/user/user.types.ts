import { User } from "firebase/auth";
import { AdditionalInformation } from "../../services/Firebase/firebase.utils";
import { ActionWithPayload } from "../../utils/reducer.utils";

export namespace UserActions {
  export enum Types {
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILED = 'user/SIGN_IN_FAILED',
    SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
    SIGN_UP_FAILED = 'user/SIGN_UP_FAILED',
    SIGN_UP_START = 'user/SIGN_UP_START',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILED = 'user/SIGN_OUT_FAILED',
  };

  export type Any = 
  | { type: Types.SET_CURRENT_USER, payload: User }
  | { type: Types.CHECK_USER_SESSION }
  | { type: Types.GOOGLE_SIGN_IN_START }
  | { type: Types.EMAIL_SIGN_IN_START, payload: EmailSignInStartPayload }
  | { type: Types.SIGN_IN_SUCCESS, payload: User }
  | { type: Types.SIGN_IN_FAILED, payload: Error }
  | { type: Types.SIGN_UP_SUCCESS, payload: SignUpSuccessPayload }
  | { type: Types.SIGN_UP_FAILED, payload: Error }
  | { type: Types.SIGN_UP_START, payload: SignUpStartPayload }
  | { type: Types.SIGN_OUT_START, payload: User }
  | { type: Types.SIGN_OUT_SUCCESS, payload: User }
  | { type: Types.SIGN_OUT_FAILED, payload: Error };
}

export type EmailSignInStartPayload = ActionWithPayload<
  UserActions.Types.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignUpStartPayload = ActionWithPayload<
  UserActions.Types.SIGN_UP_START,
  { 
    email: User['email'];
    password: string; 
    displayName: string 
  }
>;

export type SignUpSuccessPayload = ActionWithPayload<
  UserActions.Types.SIGN_UP_SUCCESS,
  { 
    user: User; 
    additionalDetails: AdditionalInformation 
  }
>;
