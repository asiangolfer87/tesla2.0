import firebase from './firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAed3yP8bXDEeiaJZlarwc1e0qS-1em7BQ",
  authDomain: "tesla-clone-46ce7.firebaseapp.com",
  projectId: "tesla-clone-46ce7",
  storageBucket: "tesla-clone-46ce7.appspot.com",
  messagingSenderId: "1041488110027",
  appId: "1:1041488110027:web:ee680e19af9bdb272a164e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth()

export {auth}
