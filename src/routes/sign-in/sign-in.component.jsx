import React from 'react'
import { signInWithGooglePopup , createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async ( ) => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>Sign IN with google</button>
    </div>
  )
}

export default SignIn;
