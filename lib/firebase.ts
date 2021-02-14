import firebase from 'firebase/app'
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
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth      = firebase.auth()
export const firestore = firebase.firestore()
export const storage   = firebase.storage()
