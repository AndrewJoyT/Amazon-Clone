import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBU0kjKDGZDGoRkNYQ3-tIK0us_DjWdSVo",
    authDomain: "clone-2aa14.firebaseapp.com",
    databaseURL: "https://clone-2aa14.firebaseio.com",
    projectId: "clone-2aa14",
    storageBucket: "clone-2aa14.appspot.com",
    messagingSenderId: "314513357597",
    appId: "1:314513357597:web:7d07661f7c9377f935bff4",
    measurementId: "G-BSJBECP0HE"
});

const auth = firebase.auth();

export { auth };
