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


// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username 
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users')
    const query    = usersRef.where('username', '==', username).limit(1)
    const userDoc  = (await query.get()).docs[0]
    return userDoc
}


/**
 * Convertsa firestore document to JSON
 * @param {DocumentSnapshot} doc 
 */
export function postToJSON(doc) {
    const data = doc.data()
    
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }
}
