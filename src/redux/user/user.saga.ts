import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { UserActions } from './user.types';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutFailed, signOutSuccess,  } from "./user.actions";
import { getCurrentUser, createUserDocumentFromAuth, SignInWithGooglePopUp, SignInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from "../../services/Firebase/firebase.utils";
import { User } from "firebase/auth";
import { EmailSignInStartPayload, SignUpSuccessPayload, SignUpStartPayload } from './user.types'
import { AdditionalInformation } from "../../services/Firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) 
{
  try{
    const userSnapshot = yield* call(
      createUserDocumentFromAuth, 
      userAuth, 
      additionalDetails
    );
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  }
  catch(error){
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(SignInWithGooglePopUp);
    yield* call(getSnapshotFromUserAuth, user)
  }
  catch (error){
    yield* put(signInFailed(error as Error))
  };
};

export function* signInWithEmail({ payload: { email, password } } : EmailSignInStartPayload) {
  try {
    const userCredential = yield* call(
      SignInUserWithEmailAndPassword, 
      email, 
      password
    );
    if(userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user)
    }
  }
  catch (error){
    yield* put(signInFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    if(!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } } : SignUpStartPayload) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
  if(userCredential) {
    const { user } = userCredential;
    yield* put(signUpSuccess(user,{ displayName } ));
  }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  }
  catch(error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails} }: SignUpSuccessPayload) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(UserActions.Types.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield* takeLatest(UserActions.Types.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSessions() {
  yield* takeLatest(UserActions.Types.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
  yield* takeLatest(UserActions.Types.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield* takeLatest(UserActions.Types.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield* takeLatest(UserActions.Types.SIGN_OUT_START, signOut);
}

export  function* userSagas() {
  yield* all([call(onCheckUserSessions), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart) ]);
}

