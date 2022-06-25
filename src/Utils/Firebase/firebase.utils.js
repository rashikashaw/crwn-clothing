import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIjsimuFbijiz2xaNz-Lrmxzhxm5eMfWY",
  authDomain: "crown-clothing-db-c17e3.firebaseapp.com",
  projectId: "crown-clothing-db-c17e3",
  storageBucket: "crown-clothing-db-c17e3.appspot.com",
  messagingSenderId: "385166841467",
  appId: "1:385166841467:web:591021f08732a1024a74de"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const SignInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  const userDocRef = doc( db, 'users', userAuth.uid )
  console.log(userAuth)
  const userSnapShot = await getDoc(userDocRef);

  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc( userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
        }
      )
    } 
    catch( error ){
      console.log('error creating user', error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignInUserWithEmailAndPassword = async ( email, password ) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener =  (callback) => onAuthStateChanged(auth, callback);

