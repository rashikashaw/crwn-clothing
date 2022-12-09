import { User } from "firebase/auth";
import { AdditionalInformation, UserData } from "../../services/Firebase/firebase.utils";
import { createAction } from "../../utils/reducer.utils";
import { EmailSignInStartPayload, SignUpStartPayload, SignUpSuccessPayload, UserActions } from "./user.types";

export const setCurrentUser = (user: User) => createAction(UserActions.Types.SET_CURRENT_USER, user);
export const checkUserSessions = () => createAction(UserActions.Types.CHECK_USER_SESSION);
export const googleSignInStart = () => createAction(UserActions.Types.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (payload: EmailSignInStartPayload) => createAction(UserActions.Types.EMAIL_SIGN_IN_START, payload);
export const signInSuccess = (user: UserData & { id: string }) => createAction(UserActions.Types.SIGN_IN_SUCCESS, user);
export const signInFailed = (error: Error) => createAction(UserActions.Types.SIGN_IN_FAILED, error);
export const signUpStart = (payload: SignUpStartPayload) => createAction(UserActions.Types.SIGN_UP_START, payload);
export const signUpSuccess = (user: User, additionalDetails: AdditionalInformation) => createAction(UserActions.Types.SIGN_UP_SUCCESS, { user, additionalDetails });
export const signUpFailed = (error: Error) => createAction(UserActions.Types.SIGN_UP_FAILED, error);
export const signOutStart = () => createAction(UserActions.Types.SIGN_OUT_START);
export const signOutSuccess = () => createAction(UserActions.Types.SIGN_OUT_SUCCESS);
export const signOutFailed = (error: Error) => createAction(UserActions.Types.SIGN_OUT_FAILED, error);
 