import firebase from 'firebase'
// require('@firebase/firestore')

const firebaseConfig = {
  
    apiKey: "AIzaSyBkX6HbgfKXiTTNiuHaG8gJNEHZb6VBYdo",
    authDomain: "storyhub-d6546.firebaseapp.com",
    databaseURL: "https://storyhub-d6546-default-rtdb.firebaseio.com",
    projectId: "storyhub-d6546",
    storageBucket: "storyhub-d6546.appspot.com",
    messagingSenderId: "110468976791",
    appId: "1:110468976791:web:3b3e1191905f620681d9d2"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();