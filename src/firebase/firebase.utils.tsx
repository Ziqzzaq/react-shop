import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBlwm_h8-ndqM72KMniP-y4JIB7oo8XJYo',
    authDomain: 'react-shop-2410.firebaseapp.com',
    databaseURL: 'https://react-shop-2410.firebaseio.com',
    projectId: 'react-shop-2410',
    storageBucket: 'react-shop-2410.appspot.com',
    messagingSenderId: '241633642889',
    appId: '1:241633642889:web:b12a729355a596c080f958',
    measurementId: 'G-4L3JHK2H7N'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
