import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIjsimuFbijiz2xaNz-Lrmxzhxm5eMfWY",
  authDomain: "crown-clothing-db-c17e3.firebaseapp.com",
  projectId: "crown-clothing-db-c17e3",
  storageBucket: "crown-clothing-db-c17e3.appspot.com",
  messagingSenderId: "385166841467",
  appId: "1:385166841467:web:591021f08732a1024a74de"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const SignInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocef = doc( db, 'users', userAuth.uid )
  console.log(userDocef);

  const userSnapShot = await getDoc(userDocef);

  if(!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc( userDocef, {
        displayName,
        email,
        createAt
        }
      )
    } 
    catch( error ){
      console.log('error creating user', error.message);
    }
  }
  return userDocef
};
