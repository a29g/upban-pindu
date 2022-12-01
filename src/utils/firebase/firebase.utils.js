import { initializeApp } from 'firebase/app'

import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();

  export const createUserDocFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
            });

        }
        catch(error){
            console.error('error creating the user', error.message);
        }
    }

    return userDocRef

  }
