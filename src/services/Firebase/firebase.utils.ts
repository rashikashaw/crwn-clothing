import { initializeApp } from "firebase/app";
import { 
  Auth,
  User,
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  UserCredential,
  NextOrObserver,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot } from 'firebase/firestore'

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

type ObjectToAdd = {
  title: string;
};


export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type CategoryData = {
  imageUrl: string;
  items: CategoryItem[];
  title: string;
};

 
export const getCategoriesAndDocuments = async (): Promise<CategoryData[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as CategoryData
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  user: User, 
  additionalInformation= {} as  AdditionalInformation): 
  Promise<QueryDocumentSnapshot<UserData> | void> => {
    if (!user) return;
    const userDocRef = doc( db, 'users', user.uid )
    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()) {
      const { displayName, email } = user;
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
      catch (error) {
        if(error instanceof Error) {
          console.log('error creating user', error.message);
        }
      }
    }
  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async ( email: User['email'], password: string ): Promise<UserCredential | void> => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignInUserWithEmailAndPassword = async ( email: User['email'], password: string ): Promise<UserCredential| void> => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async (): Promise<void>  => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
