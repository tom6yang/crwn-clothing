import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjmVtm1zOyFteJVjz7UOS6_SEau-VPee8",
    authDomain: "crwn-db-c3152.firebaseapp.com",
    databaseURL: "https://crwn-db-c3152.firebaseio.com",
    projectId: "crwn-db-c3152",
    storageBucket: "crwn-db-c3152.appspot.com",
    messagingSenderId: "838938949334",
    appId: "1:838938949334:web:de1f7eb049a18fbc557b77",
    measurementId: "G-3PF4F74TCM"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;