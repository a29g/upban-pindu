import { initializeApp } from 'firebase/app'

import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth'

import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnarlSPl5pUUGEJSxt2vMeujYwhSaixfQ",
    authDomain: "urpan-pindu-db.firebaseapp.com",
    projectId: "urpan-pindu-db",
    storageBucket: "urpan-pindu-db.appspot.com",
    messagingSenderId: "167956242550",
    appId: "1:167956242550:web:d1af10870160e62c37ff57"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

