import { takeLatest, call, put, all } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signUpStart, signOutFailed, signOutSuccess,  } from "./user.actions";
import { getCurrentUser, createUserDocumentFromAuth, SignInWithGooglePopUp, SignInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from "../../Utils/Firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try{
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
    yield put(signInSuccess( {id:userSnapshot.id, ...userSnapshot.data()}))
  }
  catch(error){
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield call(SignInWithGooglePopUp);
    yield call(getSnapshotFromUserAuth, user)
  }
  catch (error){
    yield put(signInFailed(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const {user} = yield call(SignInUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user)
  }
  catch (error){
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }))
  }
  catch(error){
    yield put(signInFailed(error));
  }
}


export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser)
    if(!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error));
  }
}


export function* signOut() {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  }
  catch(error) {
    yield put(signOutFailed(error))
  }
}

export function* signInAfterSignUp({user, additionalDetails}) {
  try{
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
  }
  catch(error) {
    yield put(signUpFailed(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSessions() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onUserSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onUserSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export  function* userSagas() {
  yield all([call(onCheckUserSessions), call(onGoogleSignInStart), call(onEmailSignInStart), call(onUserSignUpStart), call(onUserSignUpSuccess), call(onUserSignOutStart) ]);
}

