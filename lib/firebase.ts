import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDDyeaAikom0brcqR_Z54_6zpHFmWqFOqs",
    authDomain: "mbernal-nextfire.firebaseapp.com",
    projectId: "mbernal-nextfire",
    storageBucket: "mbernal-nextfire.appspot.com",
    messagingSenderId: "338776360766",
    appId: "1:338776360766:web:e273baf194d4a6e18c8e6f"
};

// Initialize app
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

export const auth = fb.auth()

export const googleAuthProvider = new fb.auth.GoogleAuthProvider()

export const firestore = fb.firestore()
export const storage   = fb.storage()
