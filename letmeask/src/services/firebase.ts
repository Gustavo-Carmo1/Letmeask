import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAkPWqK7JsdwxGZRCRUtiCmRIHq5lbqrxc",
    authDomain: "letmeask-ed61d.firebaseapp.com",
    databaseURL: "https://letmeask-ed61d-default-rtdb.firebaseio.com",
    projectId: "letmeask-ed61d",
    storageBucket: "letmeask-ed61d.appspot.com",
    messagingSenderId: "972863108648",
    appId: "1:972863108648:web:98b43ff69a8efb05e9671d"
  };

  firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();
   const database = firebase.database();
  
   export {firebase, auth, database}